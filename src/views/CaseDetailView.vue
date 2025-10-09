<template>
  <div class="case-detail-page page-content">
    <div v-if="caseData" class="detail-container">
      <!-- 面包屑导航 -->
      <div class="breadcrumb-wrapper">
        <div class="breadcrumb">
          <RouterLink to="/cases">{{ casesPage.title }}</RouterLink>
          <span class="separator">/</span>
          <span class="current">{{ caseData.title }}</span>
        </div>
      </div>
      
      <!-- 案例头部信息 -->
      <div class="case-hero">
        <div class="hero-content">
          <div class="case-tag">{{ caseData.tag }}</div>
          <h1 class="case-title">{{ caseData.title }}</h1>
          <div class="case-meta">
            <div class="meta-item">
              <i class="fas fa-calendar"></i>
              <span>{{ isZh ? '发布日期：' : 'Published: ' }}{{ caseData.date }}</span>
            </div>
          </div>
        </div>
        
        <div class="hero-banner">
          <img :src="caseData.image || '/images/cases/default.jpg'" :alt="caseData.title">
        </div>
      </div>
      
      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 案例亮点 -->
        <section class="content-section highlight-section">
          <div class="section-content">
            <div class="case-highlight">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="highlight-text">{{ caseData.highlight }}</p>
            </div>
          </div>
        </section>
        
        <!-- 案例结果 -->
        <section class="content-section results-section" v-if="caseData.results">
          <div class="section-header">
            <h2 class="section-title">{{ casesPage.results }}</h2>
            <div class="section-line"></div>
          </div>
          <div class="section-content">
            <div class="results-grid">
              <div class="result-card" v-for="(result, index) in caseData.results" :key="index">
                <div class="result-icon">
                  <i :class="getResultIcon(index)"></i>
                </div>
                <div class="result-content">
                  <div class="result-text">{{ result }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 详细内容 -->
        <section class="content-section details-section">
          <div class="section-header">
            <h2 class="section-title">{{ isZh ? '详细介绍' : 'Details' }}</h2>
            <div class="section-line"></div>
          </div>
          <div class="section-content">
            <div class="case-details" v-html="caseData.content"></div>
          </div>
        </section>
        
        <!-- 操作区域 -->
        <section class="content-section actions-section">
          <div class="case-actions">
            <RouterLink to="/cases" class="back-btn">
              <i class="fas fa-arrow-left"></i>
              <span>{{ casesPage.backToList }}</span>
            </RouterLink>
            
            <div class="case-share">
              <span class="share-label">{{ isZh ? '分享：' : 'Share: ' }}</span>
              <div class="share-icons">
                <a href="#" class="share-icon"><i class="fab fa-weixin"></i></a>
                <a href="#" class="share-icon"><i class="fab fa-weibo"></i></a>
                <a href="#" class="share-icon"><i class="fas fa-link"></i></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 相关案例 -->
      <div class="related-section" v-if="relatedCases.length > 0">
        <div class="section-header">
          <h2 class="section-title">{{ casesPage.relatedCases }}</h2>
          <div class="section-line"></div>
        </div>
        <div class="related-content">
          <div class="related-grid">
            <div v-for="item in relatedCases" :key="item.id" class="related-card">
              <RouterLink :to="`/cases/${item.id}`">
                <div class="related-image">
                  <img :src="item.image || '/images/cases/default.jpg'" :alt="item.title">
                  <div class="image-overlay">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div class="related-info">
                  <h3 class="related-title">{{ item.title }}</h3>
                  <div class="related-tag">{{ item.tag }}</div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="detail-container">
      <div class="loading-case">
        <div v-if="isLoading" class="spinner"></div>
        <div v-else class="not-found">
          <h2>{{ isZh ? '未找到案例' : 'Case Not Found' }}</h2>
          <p>{{ isZh ? '您查找的案例不存在或已被移除' : 'The case you are looking for does not exist or has been removed' }}</p>
          <RouterLink to="/cases" class="btn">{{ casesPage.backToList }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCasesStore } from '../store/modules/cases'
import { useLanguage } from '@/mixins/language'

// 获取语言相关功能
const { isZh, isEn, getCasesPage } = useLanguage()

// 获取案例相关翻译
const casesPage = computed(() => getCasesPage())

const route = useRoute()
const caseId = route.params.id
const casesStore = useCasesStore()
const isLoading = ref(true)

// 获取案例数据
const caseData = computed(() => {
  isLoading.value = false
  return casesStore.getCaseById(caseId)
})

// 获取相关案例
const relatedCases = computed(() => {
  if (!caseData.value) return []
  
  return casesStore.getAllCases
    .filter(item => item.id !== parseInt(caseId) && item.tag === caseData.value.tag)
    .slice(0, 3)
})

// 根据索引获取结果图标
const getResultIcon = (index) => {
  const icons = [
    'fas fa-check-circle',
    'fas fa-chart-line',
    'fas fa-shield-alt',
    'fas fa-bolt'
  ]
  return icons[index % icons.length]
}
</script>

<style scoped>
/* 页面基础样式 */
.case-detail-page {
  padding: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 80px;
}

/* 面包屑导航 */
.breadcrumb-wrapper {
  margin-bottom: 40px;
}

.breadcrumb {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 14px 24px;
  border-radius: 50px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  font-size: 0.95rem;
  font-weight: 500;
}

/* 案例英雄区域 */
.case-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 60px;
  box-shadow: 0 20px 80px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.case-title {
  font-size: 3rem;
  margin-bottom: 24px;
  line-height: 1.1;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero-banner {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
  aspect-ratio: 16/10;
}

/* 主要内容区域 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 80px;
}

.content-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 12px 48px rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.08);
}

.section-title {
  font-size: 2rem;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

/* 结果展示区域 */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.result-card {
  display: flex;
  gap: 20px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.08);
  min-height: 140px;
  transition: all 0.4s ease;
}

.result-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
  flex-shrink: 0;
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

.case-header {
  margin-bottom: 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.case-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.case-tag {
  display: inline-block;
  padding: 10px 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 25px;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.case-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.case-tag:hover::before {
  left: 100%;
}

.case-title {
  font-size: 2.5rem;
  margin-bottom: 25px;
  line-height: 1.2;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.03em;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.case-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.case-meta {
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

.case-banner {
  width: 100%;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 60px;
  box-shadow: 0 25px 80px rgba(59, 130, 246, 0.15);
  position: relative;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-banner:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 100px rgba(59, 130, 246, 0.2);
}

.case-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 100%);
  pointer-events: none;
}

.case-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
}

.case-highlight {
  position: relative;
  padding: 40px 60px;
  margin-bottom: 50px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.03) 100%);
  border-radius: 20px;
  font-size: 1.3rem;
  line-height: 1.7;
  font-style: italic;
  color: #1e293b;
  border: 1px solid rgba(59, 130, 246, 0.1);
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.05);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

.case-highlight i {
  position: absolute;
  color: #3b82f6;
  opacity: 0.2;
  font-size: 28px;
}

.case-highlight i.fa-quote-left {
  top: 15px;
  left: 15px;
}

.case-highlight i.fa-quote-right {
  bottom: 15px;
  right: 15px;
}

.case-results {
  margin-bottom: 50px;
}

.case-results h3 {
  font-size: 1.6rem;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.case-results h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.result-item::before {
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

.result-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
}

.result-item:hover::before {
  transform: scaleX(1);
}

.result-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.result-item:hover .result-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
}

.result-icon i {
  font-size: 24px;
  color: white;
}

.result-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e293b;
  font-weight: 500;
  margin: 0;
}

/* 详细内容区域 */
.case-details {
  line-height: 1.8;
  color: #475569;
  font-size: 1.1rem;
  font-weight: 400;
}

.case-details h2 {
  font-size: 1.8rem;
  margin: 40px 0 24px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  position: relative;
  padding-left: 24px;
}

.case-details h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 28px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

/* 案例亮点区域 */
.case-highlight {
  position: relative;
  padding: 50px 60px;
  text-align: center;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.02) 100%);
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.08);
}

.quote-icon {
  position: absolute;
  top: 20px;
  left: 30px;
  color: #3b82f6;
  opacity: 0.2;
  font-size: 2.5rem;
}

.highlight-text {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #1e293b;
  font-style: italic;
  font-weight: 400;
  margin: 0;
}

/* 节标题样式 */
.section-header {
  padding: 40px 40px 0;
  text-align: center;
}

.section-line {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
  margin: 0 auto 32px;
}

.section-content {
  padding: 0 40px 40px;
}

/* 操作区域 */
.case-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  border-top: 2px solid rgba(59, 130, 246, 0.08);
  margin-top: 40px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%);
  color: #3b82f6;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.2);
  text-decoration: none;
}

.back-btn:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.3);
}

.case-share {
  display: flex;
  align-items: center;
  gap: 16px;
}

.share-label {
  color: #64748b;
  font-weight: 500;
}

.share-icons {
  display: flex;
  gap: 8px;
}

.share-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.15);
  text-decoration: none;
}

.share-icon:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.case-details {
  line-height: 1.8;
  color: #475569;
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
}

.case-details h2 {
  font-size: 1.7rem;
  margin: 40px 0 20px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  position: relative;
}

.case-details h2::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

.case-details p {
  margin-bottom: 20px;
}

.case-details ul {
  margin-bottom: 20px;
  padding-left: 20px;
}

.case-details li {
  margin-bottom: 10px;
}

.case-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid rgba(59, 130, 246, 0.1);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  color: #3b82f6;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  font-family: 'Inter', sans-serif;
}

.back-btn:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.case-share {
  display: flex;
  align-items: center;
}

.case-share span {
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
  margin: 0 6px;
  color: #3b82f6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.share-icon:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.related-cases {
  margin-top: 100px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.related-cases h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.related-cases h2::after {
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
  gap: 30px;
}

.related-case {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.related-case::before {
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

.related-case:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 80px rgba(59, 130, 246, 0.2);
}

.related-case:hover::before {
  transform: scaleX(1);
}

.related-img {
  height: 200px;
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

.related-case:hover .related-img img {
  transform: scale(1.05);
}

.related-case h3 {
  padding: 20px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #1e293b;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  min-height: 80px;
  display: flex;
  align-items: center;
}

.loading-case {
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  border-left-color: #3b82f6;
  border-top-color: #8b5cf6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.not-found {
  max-width: 500px;
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

/* 响应式调整 */
@media (max-width: 768px) {
  .case-detail-page {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  
  .case-header {
    padding: 40px 30px;
    margin-bottom: 40px;
  }
  
  .case-title {
    font-size: 2rem;
  }
  
  .case-banner {
    height: 350px;
    margin-bottom: 50px;
  }
  
  .case-content-wrapper {
    padding: 40px 30px;
  }
  
  .case-highlight {
    padding: 30px 40px;
    font-size: 1.2rem;
  }
  
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .related-cases {
    padding: 40px 30px;
  }
  
  .breadcrumb {
    margin-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .case-header {
    padding: 30px 20px;
    margin-bottom: 30px;
  }
  
  .case-title {
    font-size: 1.7rem;
  }
  
  .case-banner {
    height: 250px;
    margin-bottom: 40px;
  }
  
  .case-content-wrapper {
    padding: 30px 20px;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .case-footer {
    flex-direction: column;
    gap: 25px;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .case-highlight {
    padding: 25px 30px;
    font-size: 1.1rem;
  }
  
  .related-cases {
    padding: 30px 20px;
  }
  
  .case-share {
    justify-content: center;
  }
}
</style> 