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
          <RouterLink :to="`/news/detail/${prevNews.id}`">
            <span class="nav-label"><i class="fas fa-arrow-left"></i> {{ newsPage.prevArticle }}</span>
            <h4>{{ prevNews.title }}</h4>
          </RouterLink>
        </div>
        <div class="nav-item next" v-if="nextNews">
          <RouterLink :to="`/news/detail/${nextNews.id}`">
            <span class="nav-label">{{ newsPage.nextArticle }} <i class="fas fa-arrow-right"></i></span>
            <h4>{{ nextNews.title }}</h4>
          </RouterLink>
        </div>
      </div>
      
      <div class="related-news">
        <h2>{{ newsPage.relatedNews }}</h2>
        <div class="related-grid">
          <div v-for="item in relatedNews" :key="item.id" class="related-item">
            <RouterLink :to="`/news/detail/${item.id}`">
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
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 12px 20px;
  border-radius: 50px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
  font-family: 'Inter', sans-serif;
  width: fit-content;
}

.breadcrumb a {
  color: #3b82f6;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.breadcrumb a:hover {
  color: #8b5cf6;
  transform: translateY(-1px);
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
  max-width: 1000px;
  margin: 0 auto 80px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
}

.news-article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.article-header {
  padding: 60px 50px 40px;
  text-align: center;
  position: relative;
}

.article-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  line-height: 1.2;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.03em;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.article-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
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
  margin-right: 8px;
  color: #3b82f6;
  font-size: 0.9rem;
}

.article-banner {
  margin-bottom: 40px;
  position: relative;
}

.article-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.03) 100%);
  pointer-events: none;
}

.article-banner img {
  width: 100%;
  height: auto;
  display: block;
}

.article-summary {
  padding: 0 50px 40px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #334155;
  font-weight: 500;
  border-bottom: 2px solid rgba(59, 130, 246, 0.1);
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(139, 92, 246, 0.01) 100%);
  margin: 0 50px;
  border-radius: 16px;
  padding: 30px;
  position: relative;
}

.article-summary::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 3rem;
  color: #3b82f6;
  opacity: 0.2;
  font-family: Georgia, serif;
}

.article-content {
  padding: 40px 50px;
  color: #1e293b;
  line-height: 1.8;
  font-size: 1.05rem;
  font-family: 'Inter', sans-serif;
}

.article-content h2 {
  font-size: 1.8rem;
  margin: 40px 0 25px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  position: relative;
  padding-left: 20px;
}

.article-content h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
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
  padding: 30px 50px;
  border-top: 2px solid rgba(59, 130, 246, 0.1);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(139, 92, 246, 0.01) 100%);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);
  color: #3b82f6;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.2);
  font-family: 'Inter', sans-serif;
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
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.share-icon:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.article-nav {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto 80px;
  gap: 30px;
}

.nav-item {
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
}

.nav-item:hover::before {
  transform: scaleX(1);
}

.nav-item.prev {
  text-align: left;
}

.nav-item.next {
  text-align: right;
}

.nav-label {
  display: block;
  font-size: 0.95rem;
  color: #3b82f6;
  margin-bottom: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.nav-item h4 {
  font-size: 1.15rem;
  color: #1e293b;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

.related-news {
  max-width: 1000px;
  margin: 0 auto 80px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.related-news h2 {
  font-size: 2rem;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-align: center;
  position: relative;
}

.related-news h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.related-item {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.related-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  z-index: 2;
}

.related-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
}

.related-item:hover::before {
  transform: scaleX(1);
}

.related-img {
  height: 180px;
  overflow: hidden;
  position: relative;
}

.related-img::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 100%);
  pointer-events: none;
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
  padding: 20px;
}

.related-date {
  font-size: 0.85rem;
  color: #64748b;
  display: block;
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
}

.related-info h3 {
  font-size: 1.05rem;
  color: #1e293b;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

.back-to-list {
  text-align: center;
  margin-top: 60px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  font-family: 'Inter', sans-serif;
}

.back-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
}

.loading-news {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  margin: 40px 0;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  border-top-color: #3b82f6;
  border-right-color: #8b5cf6;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.not-found {
  text-align: center;
  padding: 40px;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.not-found p {
  color: #64748b;
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.not-found .btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.not-found .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .news-detail-page {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  
  .article-header {
    padding: 40px 30px 30px;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-summary, .article-content, .article-footer {
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .article-summary {
    margin: 0 30px;
    padding: 25px;
  }
  
  .article-nav {
    flex-direction: column;
    gap: 20px;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .article-footer {
    flex-direction: column;
    gap: 25px;
  }
  
  .article-tags, .article-share {
    width: 100%;
    justify-content: center;
  }
  
  .related-news {
    padding: 40px 30px;
  }
  
  .breadcrumb {
    margin-bottom: 30px;
  }
}
</style> 