<template>
  <div class="news-detail-page page-content">
    <div v-if="newsData" class="container">
      <div class="breadcrumb">
        <RouterLink to="/news">{{ newsPage.title }}</RouterLink>
        <span class="separator">/</span>
        <span class="current">{{ newsData.title }}</span>
      </div>
      
      <article class="news-article">
        <div class="article-header">
          <h1 class="article-title">{{ newsData.title }}</h1>
          
          <div class="article-meta">
            <div class="meta-item">
              <i class="fas fa-folder"></i>
              <span>{{ newsData.categoryName }}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-calendar"></i>
              <span>{{ newsPage.publishedOn }} {{ newsData.date }}</span>
            </div>
          </div>
        </div>
        
        <div class="article-banner">
          <img :src="newsData.image || '/images/news/default.jpg'" :alt="newsData.title">
        </div>
        
        <div class="article-summary">
          {{ newsData.summary }}
        </div>
        
        <div class="article-content" v-html="newsData.content"></div>
        
        <div class="article-footer">
          <div class="article-tags">
            <span class="tag">{{ newsData.categoryName }}</span>
          </div>
          
          <div class="article-share">
            <span>{{ newsPage.share }}：</span>
            <a href="#" class="share-icon"><i class="fab fa-weixin"></i></a>
            <a href="#" class="share-icon"><i class="fab fa-weibo"></i></a>
            <a href="#" class="share-icon"><i class="fas fa-link"></i></a>
          </div>
        </div>
      </article>
      
      <div class="article-nav">
        <div class="nav-item prev" v-if="prevNews">
          <RouterLink :to="`/news/${prevNews.id}`">
            <span class="nav-label"><i class="fas fa-arrow-left"></i> {{ newsPage.prevArticle }}</span>
            <h4>{{ prevNews.title }}</h4>
          </RouterLink>
        </div>
        <div class="nav-item next" v-if="nextNews">
          <RouterLink :to="`/news/${nextNews.id}`">
            <span class="nav-label">{{ newsPage.nextArticle }} <i class="fas fa-arrow-right"></i></span>
            <h4>{{ nextNews.title }}</h4>
          </RouterLink>
        </div>
      </div>
      
      <div class="related-news">
        <h2>{{ newsPage.relatedNews }}</h2>
        <div class="related-grid">
          <div v-for="item in relatedNews" :key="item.id" class="related-item">
            <RouterLink :to="`/news/${item.id}`">
              <div class="related-img">
                <img :src="item.image || '/images/news/default.jpg'" :alt="item.title">
              </div>
              <div class="related-info">
                <span class="related-date">{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      
      <div class="back-to-list">
        <RouterLink to="/news" class="back-btn">
          <i class="fas fa-list"></i> {{ newsPage.backToList }}
        </RouterLink>
      </div>
    </div>
    
    <div v-else class="container">
      <div class="loading-news">
        <div v-if="isLoading" class="spinner"></div>
        <div v-else class="not-found">
          <h2>{{ newsPage.newsNotFound }}</h2>
          <p>{{ newsPage.newsNotFoundMessage }}</p>
          <RouterLink to="/news" class="btn">{{ newsPage.backToList }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '../store/modules/news'
import { useLanguage } from '@/mixins/language'
import { useLanguageStore } from '@/store/modules/language'

// 获取语言相关功能
const { isZh, isEn, getNewsPage } = useLanguage()

// 获取语言store以监听语言变化
const languageStore = useLanguageStore()

// 获取新闻相关翻译
const newsPage = computed(() => getNewsPage())

const route = useRoute()
const router = useRouter()
const newsId = computed(() => route.params.id)
const newsStore = useNewsStore()
const isLoading = ref(true)
const forceRender = ref(0) // 添加强制刷新的标记

// 获取新闻数据
const newsData = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新获取
  isLoading.value = false
  const news = newsStore.getNewsById(newsId.value)
  if (!news && !isLoading.value) {
    console.log('未找到新闻数据:', newsId.value)
  }
  return news
})

// 获取所有新闻，用于导航和相关推荐
const allNews = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新获取
  return newsStore.getAllNews
})

// 获取上一篇和下一篇新闻
const currentIndex = computed(() => {
  if (!newsData.value) return -1
  return allNews.value.findIndex(item => item.id === parseInt(newsId.value))
})

const prevNews = computed(() => {
  if (currentIndex.value <= 0) return null
  return allNews.value[currentIndex.value - 1]
})

const nextNews = computed(() => {
  if (currentIndex.value === -1 || currentIndex.value === allNews.value.length - 1) return null
  return allNews.value[currentIndex.value + 1]
})

// 获取相关新闻（同类别的其他新闻）
const relatedNews = computed(() => {
  if (!newsData.value) return []
  
  return allNews.value
    .filter(item => 
      item.id !== parseInt(newsId.value) && 
      item.category === newsData.value.category
    )
    .slice(0, 3)
})

// 强制刷新视图的函数
const refreshView = () => {
  // 先设置为加载状态
  isLoading.value = true;
  // 增加强制刷新标记
  forceRender.value += 1;
  // 触发页面样式重新计算
  window.dispatchEvent(new Event('resize'));
  // 延迟恢复加载状态，以便组件有时间重新渲染
  setTimeout(() => {
    isLoading.value = false;
  }, 100);
}

// 监听新闻ID变化，当路由参数变化时刷新数据
watch(newsId, () => {
  refreshView();
});

// 监听语言变化
watch(() => languageStore.language, () => {
  // 当语言变化时，确保页面内容刷新
  console.log('语言已切换，刷新新闻详情内容');
  // 延迟执行以确保store数据已更新
  setTimeout(() => {
    refreshView();
  }, 100);
}, { immediate: true }); // 立即执行一次确保初始化

// 组件挂载时也刷新一次视图
onMounted(() => {
  refreshView();
});
</script>

<style scoped>
.news-detail-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: var(--secondary-color);
}

.separator {
  margin: 0 10px;
  color: #94a3b8;
}

.current {
  color: #64748b;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-article {
  max-width: 900px;
  margin: 0 auto 60px;
  background: var(--bg-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.article-header {
  padding: 40px 40px 30px;
  text-align: center;
}

.article-title {
  font-size: 2.2rem;
  margin-bottom: 20px;
  line-height: 1.3;
  color: var(--text-color);
}

.article-meta {
  display: flex;
  justify-content: center;
  color: #64748b;
  font-size: 0.9rem;
}

.meta-item {
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.meta-item i {
  margin-right: 6px;
  color: var(--primary-color);
}

.article-banner {
  margin-bottom: 30px;
}

.article-banner img {
  width: 100%;
  height: auto;
  display: block;
}

.article-summary {
  padding: 0 40px 30px;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
}

.article-content {
  padding: 30px 40px;
  color: #334155;
  line-height: 1.8;
}

.article-content h2 {
  font-size: 1.8rem;
  margin: 30px 0 20px;
  color: var(--text-color);
}

.article-content p {
  margin-bottom: 20px;
}

.article-content ul, .article-content ol {
  margin-bottom: 20px;
  padding-left: 20px;
}

.article-content li {
  margin-bottom: 10px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-top: 1px solid var(--border-color);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 5px 12px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-share {
  display: flex;
  align-items: center;
}

.article-share span {
  margin-right: 10px;
  color: #64748b;
}

.share-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  transition: all 0.3s ease;
  color: #64748b;
}

.share-icon:hover {
  background: var(--primary-color);
  color: white;
}

.article-nav {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto 60px;
  gap: 20px;
}

.nav-item {
  flex: 1;
  background: var(--bg-color);
  border-radius: 8px;
  padding: 20px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.nav-item:hover {
  transform: translateY(-5px);
}

.nav-item.prev {
  text-align: left;
}

.nav-item.next {
  text-align: right;
}

.nav-label {
  display: block;
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.nav-item h4 {
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-news {
  max-width: 900px;
  margin: 0 auto 60px;
}

.related-news h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--text-color);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.related-item {
  background: var(--bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.related-item:hover {
  transform: translateY(-5px);
}

.related-img {
  height: 160px;
  overflow: hidden;
}

.related-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.related-item:hover .related-img img {
  transform: scale(1.05);
}

.related-info {
  padding: 15px;
}

.related-date {
  font-size: 0.8rem;
  color: #64748b;
  display: block;
  margin-bottom: 8px;
}

.related-info h3 {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.back-to-list {
  text-align: center;
  margin-top: 40px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.back-btn i {
  margin-right: 8px;
}

.back-btn:hover {
  background: var(--secondary-color);
}

.loading-news {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(14, 165, 233, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.not-found {
  text-align: center;
}

.not-found h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.not-found p {
  color: #64748b;
  margin-bottom: 20px;
}

.not-found .btn {
  display: inline-block;
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.not-found .btn:hover {
  background: var(--secondary-color);
}

@media (max-width: 768px) {
  .article-header {
    padding: 30px 20px 20px;
  }
  
  .article-title {
    font-size: 1.8rem;
  }
  
  .article-summary, .article-content, .article-footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .article-nav {
    flex-direction: column;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .article-footer {
    flex-direction: column;
    gap: 20px;
  }
  
  .article-tags, .article-share {
    width: 100%;
    justify-content: center;
  }
}
</style> 