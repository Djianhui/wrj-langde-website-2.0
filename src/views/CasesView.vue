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
.cases-page {
  padding-top: 0;
  padding-bottom: 80px;
}

.hero-section {
  background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('/images/cases-hero.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  margin-bottom: 60px;
  color: var(--light-text);
  text-align: center;
}

.hero-section .section-title {
  color: var(--light-text);
}

.hero-section .section-desc {
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.filter-bar {
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(15, 23, 42, 0.05);
  border-radius: 8px;
}

.filter-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-group span {
  font-weight: 500;
  color: var(--text-color);
}

.filter-btn {
  padding: 8px 16px;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.filter-btn:hover:not(.active) {
  background: rgba(14, 165, 233, 0.1);
  border-color: var(--primary-color);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.case-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: var(--bg-color);
  height: 100%; /* 确保卡片高度一致 */
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.case-img {
  position: relative;
  height: 240px; /* 增加图片高度 */
  overflow: hidden;
}

.case-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-card:hover .case-img img {
  transform: scale(1.05);
}

.case-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 12px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 15px;
}

.case-info {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-info h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  line-height: 1.4;
  color: var(--text-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-info p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1; /* 让描述文本占据剩余空间 */
}

.case-meta {
  margin-top: auto; /* 将元信息推到底部 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.case-date {
  color: #94a3b8;
}

.case-link {
  color: var(--primary-color);
  font-weight: 600;
  transition: color 0.3s ease;
}

.case-link:hover {
  color: var(--secondary-color);
}

/* 无案例提示样式 */
.no-cases {
  padding: 50px 0;
  text-align: center;
}

.no-cases p {
  font-size: 1.1rem;
  color: #64748b;
}

/* 分页控件样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
}

.page-btn {
  min-width: 120px; /* 添加最小宽度确保按钮大小一致 */
  justify-content: center; /* 确保内容居中 */
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn:not(:disabled):hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.page-btn.prev i {
  margin-right: 8px;
}

.page-btn.next i {
  margin-left: 8px;
}

.page-numbers {
  display: flex;
  gap: 8px;
}

.page-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--light-bg);
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-number.active {
  background: var(--primary-color);
  color: white;
}

.page-number:not(.active):hover {
  background: rgba(14, 165, 233, 0.2);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .case-img {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .case-img {
    height: 220px;
  }
  
  .filter-group {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .filter-btn {
    margin-bottom: 8px;
  }
  
  /* 响应式分页控件 */
  .page-numbers {
    display: none;
  }
  
  .case-info h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .case-img {
    height: 180px;
  }
  
  .case-info {
    padding: 20px;
  }
}
</style> 