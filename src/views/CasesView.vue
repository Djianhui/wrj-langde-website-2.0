<template>
  <div class="cases-page page-content">
    <div class="hero-section">
      <div class="container">
        <h1 class="section-title">{{ casesPage.title }}</h1>
        <p class="section-desc">{{ casesPage.subtitle }}</p>
      </div>
    </div>
    
    <div class="container">
      <div class="filter-bar">
        <div class="filter-group">
          <span>{{ casesPage.filter }}：</span>
          <button 
            v-for="category in currentCategories" 
            :key="category.id" 
            class="filter-btn" 
            :class="{ 'active': activeCategory === category.id }"
            @click="filterByCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      
      <div class="cases-grid">
        <div v-for="item in paginatedCases" :key="item.id" class="case-card">
          <div class="case-img">
            <img :src="item.image || '/images/cases/default.jpg'" :alt="item.title">
            <div class="case-tag">{{ item.tag }}</div>
          </div>
          <div class="case-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
            <div class="case-meta">
              <span class="case-date">{{ item.date }}</span>
              <RouterLink :to="`/cases/${item.id}`" class="case-link">{{ casesPage.viewDetails }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="paginatedCases.length === 0" class="no-cases">
        <p>{{ casesPage.noCases || '暂无相关案例' }}</p>
      </div>
      
      <!-- 添加分页控件 -->
      <div class="pagination" v-if="totalPages > 1">
        <button 
          class="page-btn prev" 
          :disabled="currentPage <= 1"
          @click="changePage(currentPage - 1)"
        >
          <i class="fas fa-chevron-left"></i> {{ casesPage.prevPage }}
        </button>
        
        <div class="page-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page" 
            class="page-number" 
            :class="{ 'active': currentPage === page }"
            @click="changePage(page)"
          >
            {{ page }}
          </button>
        </div>
        
        <button 
          class="page-btn next" 
          :disabled="currentPage >= totalPages"
          @click="changePage(currentPage + 1)"
        >
          {{ casesPage.nextPage }} <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useCasesStore } from '../store/modules/cases'
import { useLanguage } from '@/mixins/language'
import { useLanguageStore } from '@/store/modules/language'

// 获取语言相关功能
const { isZh, isEn, getCasesPage, getCaseCategories } = useLanguage()

// 获取语言store以监听语言变化
const languageStore = useLanguageStore()

// 获取案例相关翻译
const casesPage = computed(() => {
  const translations = getCasesPage()
  return {
    ...translations,
    // 添加分页相关的翻译
    prevPage: isZh.value ? '上一页' : 'Previous',
    nextPage: isZh.value ? '下一页' : 'Next',
  }
})

// 获取案例数据
const casesStore = useCasesStore()
const cases = computed(() => casesStore.getAllCases)

// 强制刷新标记
const forceRender = ref(0)

// 分页相关状态
const currentPage = ref(1)
const casesPerPage = 4 // 修改为每页显示4条案例

// 获取分类数据
const caseCategories = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新计算
  return getCaseCategories();
})

// 构建分类列表，添加"全部"选项
const currentCategories = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新计算
  const allOption = { id: 'all', name: casesPage.value.all }
  return [allOption, ...caseCategories.value]
})

// 当前选中的分类
const activeCategory = ref('all')

// 根据分类筛选案例
const filteredCases = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新计算
  
  if (activeCategory.value === 'all') {
    return cases.value
  } else {
    // 找到当前选中分类对应的标签文本
    const selectedCategory = caseCategories.value.find(cat => cat.id === activeCategory.value)
    const categoryTag = selectedCategory ? selectedCategory.tag : activeCategory.value
    const categoryName = selectedCategory ? selectedCategory.name : '';

    // 根据分类tag筛选案例，支持多种匹配方式
    return cases.value.filter(item => {
      // 多种匹配条件
      return item.tag === activeCategory.value || // 直接使用id
             item.tag === categoryTag ||         // 使用tag字段
             item.tag === categoryName ||        // 使用分类名称匹配
             item.category === activeCategory.value ||
             (activeCategory.value === 'industry' && (item.tag === '工业应用' || item.tag === 'Industrial Applications')) ||
             (activeCategory.value === 'agriculture' && (item.tag === '农业应用' || item.tag === 'Agricultural Applications')) ||
             (activeCategory.value === 'military' && (item.tag === '军事安全' || item.tag === 'Military Security')) ||
             (activeCategory.value === 'public' && (item.tag === '公共安全' || item.tag === 'Public Security')) ||
             (activeCategory.value === 'emergency' && (item.tag === '应急救援' || item.tag === 'Emergency Rescue')) ||
             (activeCategory.value === 'border' && (item.tag === '边境安全' || item.tag === 'Border Security'));
    })
  }
})

// 添加分页计算属性
const paginatedCases = computed(() => {
  const startIndex = (currentPage.value - 1) * casesPerPage
  const endIndex = startIndex + casesPerPage
  return filteredCases.value.slice(startIndex, endIndex)
})

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(filteredCases.value.length / casesPerPage)
})

// 筛选方法，添加日志以便调试
const filterByCategory = (category) => {
  console.log(`筛选分类: ${category}`);
  activeCategory.value = category;
  // 切换分类时重置为第一页
  currentPage.value = 1;
}

// 切换页码
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 监听分类变化
watch(activeCategory, () => {
  // 如果切换分类后，当前页数超过了总页数，则重置为第一页
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value)
  }
})

// 强制刷新视图的函数
const refreshView = () => {
  forceRender.value += 1; // 改变forceRender的值
  // 触发页面样式重新计算
  window.dispatchEvent(new Event('resize'));
  
  // 当语言变化时，如果当前不是"全部"分类，重置为"全部"以避免筛选问题
  if (activeCategory.value !== 'all') {
    activeCategory.value = 'all';
  }
}

// 添加watch，监听语言变化，重新应用筛选和刷新视图
watch(() => languageStore.language, () => {
  console.log('语言已切换，刷新案例页面内容');
  // 延迟执行以确保store数据已更新
  setTimeout(() => {
    refreshView();
  }, 100);
}, { immediate: true }); // 立即执行一次确保初始化

// 组件挂载时的处理
onMounted(() => {
  // 初始化刷新视图
  refreshView();
})
</script>

<style scoped>
/* 现代化应用案例页面设计 */
.cases-page {
  padding-top: 0;
  padding-bottom: 120px;
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 英雄区域现代化设计 */
.hero-section {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.9) 0%, 
    rgba(139, 92, 246, 0.8) 80%,
    rgba(59, 130, 246, 0.9) 100%), 
    url('/images/cases-hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 0;
  margin-bottom: 80px;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.hero-section .section-title {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
}

.hero-section .section-desc {
  max-width: 650px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* 现代化筛选栏设计 */
.filter-bar {
  margin-bottom: 60px;
  padding: 30px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 8px 32px rgba(59, 130, 246, 0.08),
    0 2px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.filter-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.filter-group span {
  font-weight: 600;
  color: #0f172a;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

.filter-btn {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
  backdrop-filter: blur(10px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

.filter-btn:hover:not(.active) {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    rgba(147, 197, 253, 0.15) 100%);
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
}

/* 现代化案例网格 */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 80px;
}

/* 现代化案例卡片设计 */
.case-card {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(59, 130, 246, 0.08),
    0 2px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.case-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(59, 130, 246, 0.4) 50%, 
    transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.case-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(59, 130, 246, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.case-card:hover::before {
  opacity: 1;
}

.case-img {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.case-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-card:hover .case-img img {
  transform: scale(1.08);
}

/* 现代化标签设计 */
.case-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;
}

.case-info {
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-info h3 {
  font-size: 1.4rem;
  margin-bottom: 16px;
  line-height: 1.4;
  color: #0f172a;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-info p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;
  font-family: 'Inter', sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.case-meta {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  padding-top: 20px;
  border-top: 1px solid rgba(226, 232, 240, 0.6);
}

.case-date {
  color: #94a3b8;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

.case-link {
  color: #3b82f6;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.case-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transition: width 0.3s ease;
}

.case-link:hover {
  color: #1d4ed8;
}

.case-link:hover::after {
  width: 100%;
}

/* 无案例提示样式优化 */
.no-cases {
  padding: 80px 0;
  text-align: center;
  background: linear-gradient(135deg, 
    rgba(248, 250, 252, 0.8) 0%, 
    rgba(241, 245, 249, 0.9) 100%);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.no-cases p {
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
}

/* 现代化分页控件 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
}

.page-btn {
  min-width: 140px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 50px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(248, 250, 252, 0.8) 100%);
  color: #0f172a;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  font-family: 'Inter', sans-serif;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
}

.page-btn:not(:disabled):hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.page-btn.prev i {
  margin-right: 10px;
}

.page-btn.next i {
  margin-left: 10px;
}

.page-numbers {
  display: flex;
  gap: 10px;
}

.page-number {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.8) 0%, 
    rgba(248, 250, 252, 0.9) 100%);
  color: #0f172a;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(10px);
  font-family: 'Inter', sans-serif;
}

.page-number.active {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.page-number:not(.active):hover {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    rgba(147, 197, 253, 0.2) 100%);
  border-color: #3b82f6;
  transform: translateY(-2px);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  .case-img {
    height: 220px;
  }
  
  .hero-section .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 992px) {
  .hero-section {
    padding: 80px 0;
    background-attachment: scroll;
  }
  
  .filter-bar {
    padding: 24px;
  }
  
  .case-info {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .case-img {
    height: 240px;
  }
  
  .filter-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .filter-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .page-numbers {
    display: none;
  }
  
  .case-info h3 {
    font-size: 1.3rem;
  }
  
  .hero-section .section-title {
    font-size: 2.2rem;
  }
  
  .hero-section .section-desc {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .cases-page {
    padding-bottom: 80px;
  }
  
  .hero-section {
    padding: 60px 0;
    margin-bottom: 40px;
  }
  
  .hero-section .section-title {
    font-size: 1.9rem;
  }
  
  .filter-bar {
    padding: 20px;
    margin-bottom: 40px;
  }
  
  .case-img {
    height: 200px;
  }
  
  .case-info {
    padding: 20px;
  }
  
  .case-info h3 {
    font-size: 1.2rem;
  }
  
  .page-btn {
    min-width: 120px;
    padding: 12px 20px;
    font-size: 0.9rem;
  }
}</style> 