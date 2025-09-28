<template>
  <div class="news-page page-content">
    <div class="hero-section">
      <div class="container">
        <h1 class="section-title">{{ newsPage.title }}</h1>
        <p class="section-desc">{{ newsPage.subtitle }}</p>
      </div>
    </div>
    
    <div class="container">
      <div class="news-category">
        <ul class="category-list">
          <li v-for="category in categories" :key="category.id">
            <a 
              href="#" 
              :class="{ 'active': currentCategory === category.id }" 
              @click.prevent="changeCategory(category.id)"
            >
              {{ category.name }}
            </a>
          </li>
        </ul>
      </div>
      
      <div class="news-list">
        <div v-for="item in filteredNews" :key="item.id" class="news-item">
          <div class="news-image">
            <RouterLink :to="`/news/${item.id}`">
              <img :src="item.image || '/images/news/default.jpg'" :alt="item.title">
            </RouterLink>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="news-category-tag">{{ item.categoryName }}</span>
              <span class="news-date">{{ item.date }}</span>
            </div>
            <h3 class="news-title">
              <RouterLink :to="`/news/${item.id}`">{{ item.title }}</RouterLink>
            </h3>
            <p class="news-summary">{{ item.summary }}</p>
            <RouterLink :to="`/news/${item.id}`" class="news-link">{{ newsPage.readMore }} <i class="fas fa-arrow-right"></i></RouterLink>
          </div>
        </div>
      </div>
      
      <div v-if="filteredNews.length === 0" class="no-news">
        <p>{{ newsPage.noNews }}</p>
      </div>
      
      <div class="pagination">
        <button 
          class="page-btn prev" 
          :disabled="currentPage <= 1"
          @click="changePage(currentPage - 1)"
        >
          <i class="fas fa-chevron-left"></i> {{ newsPage.prevPage }}
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
          {{ newsPage.nextPage }} <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useNewsStore } from '../store/modules/news'
import { useLanguage } from '@/mixins/language'
import { useLanguageStore } from '@/store/modules/language'

// 获取语言相关功能
const { isZh, isEn, getNewsPage } = useLanguage()

// 获取语言store以监听语言变化
const languageStore = useLanguageStore()

// 获取新闻相关翻译
const newsPage = computed(() => {
  const result = getNewsPage();
  console.log('当前新闻页面翻译:', result);
  return result;
})

// 添加一个响应式引用，用于捕获当前语言
const currentLang = computed(() => languageStore.language);

// 获取新闻数据
const newsStore = useNewsStore()

// 显示当前语言下的新闻数据
const debugCurrentNews = computed(() => {
  const news = newsStore.getNewsByCategory('all');
  console.log(`当前语言(${currentLang.value})下的新闻数量:`, news.length);
  console.log('新闻标题示例:', news.length > 0 ? news[0].title : '无数据');
  return news;
})

// 添加强制刷新的标记
const forceRender = ref(0)

// 分页相关状态
const currentCategory = ref('all')
const currentPage = ref(1)
const newsPerPage = 4 // 修改为每页显示4条新闻

// 使用计算属性获取分类，确保在语言变化时重新计算
const categories = computed(() => {
  // 确保依赖于当前语言和强制刷新标记
  const lang = currentLang.value;
  forceRender.value;
  
  const cats = newsStore.getCategories;
  console.log(`当前语言(${lang})下的分类:`, cats);
  return cats;
})

// 获取当前语言的新闻数据
const currentNewsData = computed(() => {
  // 确保依赖于当前语言和强制刷新标记
  const lang = currentLang.value;
  forceRender.value;
  
  const news = newsStore.getAllNews;
  console.log(`当前语言(${lang})下的全部新闻数量:`, news.length);
  return news;
})

// 根据分类和分页筛选新闻
const filteredNews = computed(() => {
  // 确保依赖于当前语言和强制刷新标记
  const lang = currentLang.value;
  forceRender.value;
  
  // 根据当前语言获取新闻数据
  const newsByCategory = newsStore.getNewsByCategory(currentCategory.value);
  console.log(`当前语言(${lang})下的分类(${currentCategory.value})新闻数量:`, newsByCategory.length);
  
  // 确保新闻数据已正确加载
  if (!newsByCategory || newsByCategory.length === 0) {
    console.log('没有找到符合条件的新闻数据');
    return [];
  }
  
  // 计算分页
  const startIndex = (currentPage.value - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  
  // 返回当前页的新闻
  const result = newsByCategory.slice(startIndex, endIndex);
  console.log('当前页面显示的新闻数量:', result.length);
  return result;
})

// 计算总页数
const totalPages = computed(() => {
  forceRender.value; // 使计算属性依赖于forceRender
  const newsByCategory = newsStore.getNewsByCategory(currentCategory.value)
  return Math.max(1, Math.ceil(newsByCategory.length / newsPerPage))
})

// 切换分类
const changeCategory = (categoryId) => {
  console.log(`切换分类: ${categoryId}`);
  currentCategory.value = categoryId
  currentPage.value = 1 // 切换分类时重置为第一页
}

// 切换页码
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 监听分类变化
watch(currentCategory, () => {
  // 如果切换分类后，当前页数超过了总页数，则重置为第一页
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value)
  }
})

// 强制刷新视图的函数
const refreshView = () => {
  console.log('强制刷新视图');
  forceRender.value += 1; // 改变forceRender的值，触发所有依赖它的计算属性重新计算
  
  // 输出当前状态以便调试
  console.log('当前语言:', languageStore.language);
  console.log('当前分类:', currentCategory.value);
  console.log('分类列表:', categories.value);
  console.log('当前新闻数据长度:', currentNewsData.value.length);
  
  
  // 触发页面样式重新计算
  window.dispatchEvent(new Event('resize'));
  
  // 重置当前分类但保持相同值，触发相关计算属性更新
  const currentCat = currentCategory.value;
  
  // 先切换到全部，确保UI更新
  currentCategory.value = 'all';
  
  // 延迟后再恢复原来的分类
  setTimeout(() => {
    // 检查当前语言和分类的匹配性
    const isZhCategory = ['公司新闻', '行业动态', '媒体报道', '技术博客'].includes(currentCat);
    const isEnCategory = ['Company News', 'Industry Updates', 'Media Coverage', 'Tech Blog'].includes(currentCat);
    
    console.log('语言模式'+languageStore.language);
    // 语言切换后总是重置为"全部"分类，避免分类名称不匹配问题
    if (languageStore.language === 'en') {
      console.log('语言切换到英文，保持在全部分类');
      // 可选：尝试映射中文分类ID到英文分类ID
      if (currentCat !== 'all') {
        const categoryMap = {
          'company': 'company',
          'industry': 'industry',
          'media': 'media',
          'blog': 'blog'
        };
        if (categoryMap[currentCat]) {
          console.log(`尝试映射分类ID: ${currentCat} -> ${categoryMap[currentCat]}`);
          currentCategory.value = categoryMap[currentCat];
        }
      }
    } 
    else if (languageStore.language === 'zh') {
      console.log('语言切换到中文，保持在全部分类');
      // 可选：尝试映射英文分类ID到中文分类ID
      if (currentCat !== 'all') {
        const categoryMap = {
          'company': 'company',
          'industry': 'industry',
          'media': 'media',
          'blog': 'blog'
        };
        if (categoryMap[currentCat]) {
          console.log(`尝试映射分类ID: ${currentCat} -> ${categoryMap[currentCat]}`);
          currentCategory.value = categoryMap[currentCat];
        }
      }
    } 
    else {
      // 恢复原来的分类ID
      console.log(`恢复原分类ID: ${currentCat}`);
      currentCategory.value = currentCat;
    }
    
    // 再次强制刷新一次，确保分类切换后的数据正确
    setTimeout(() => {
      forceRender.value += 1;
    }, 50);
  }, 100);
}

// 监听语言变化
watch(currentLang, (newLang, oldLang) => {
  // 当语言变化时，确保页面内容刷新
  console.log(`语言已切换: ${oldLang} -> ${newLang}，刷新新闻内容`);
  
  // 输出newsStore中当前语言的新闻数据
  console.log(`语言切换后的新闻数据:`, newsStore.getAllNews);
  
  // 延迟执行以确保store数据已更新
  setTimeout(() => {
    refreshView();
  }, 100);
}, { immediate: true }); // 立即执行一次确保初始化

// 组件挂载时也刷新一次视图
onMounted(() => {
  console.log('NewsView组件已挂载');
  refreshView();
});
</script>

<style scoped>
.news-page {
  padding-top: 0;
  padding-bottom: 80px;
}

.hero-section {
  background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('/images/news-hero.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  margin-bottom: 50px;
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

.news-category {
  margin-bottom: 40px;
}

.category-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.category-list li a {
  display: block;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
  background: var(--light-bg);
  transition: all 0.3s ease;
}

.category-list li a.active {
  background: var(--primary-color);
  color: white;
}

.category-list li a:hover:not(.active) {
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
}

.news-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.news-item {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--bg-color);
  transition: transform 0.3s ease;
  height: 100%;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.news-image {
  flex: 0 0 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-item:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.news-category-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.news-date {
  font-size: 0.85rem;
  color: #64748b;
}

.news-title {
  font-size: 1.3rem;
  margin-bottom: 12px;
  line-height: 1.4;
}

.news-title a {
  color: var(--text-color);
  transition: color 0.3s ease;
}

.news-title a:hover {
  color: var(--primary-color);
}

.news-summary {
  flex: 1;
  font-size: 0.95rem;
  color: #64748b;
  margin-bottom: 15px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-link {
  align-self: flex-start;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.news-link i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.news-link:hover {
  color: var(--secondary-color);
}

.news-link:hover i {
  transform: translateX(3px);
}

.no-news {
  padding: 50px 0;
  text-align: center;
}

.no-news p {
  font-size: 1.1rem;
  color: #64748b;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
}

.page-btn {
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
@media (max-width: 992px) {
  .news-list {
    grid-template-columns: 1fr;
  }
  
  .news-item {
    flex-direction: row;
  }
  
  .news-image {
    flex: 0 0 280px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
  }
  
  .news-image {
    flex: none;
    height: 200px;
  }
  
  .category-list li a {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .news-content {
    padding: 20px;
  }
  
  .news-title {
    font-size: 1.2rem;
  }
  
  .page-numbers {
    display: none;
  }
  
  .hero-section {
    padding: 60px 0;
    margin-bottom: 30px;
  }
}
</style> 