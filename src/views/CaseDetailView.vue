<template>
  <div class="case-detail-page page-content">
    <div v-if="caseData" class="container">
      <div class="breadcrumb">
        <RouterLink to="/cases">{{ casesPage.title }}</RouterLink>
        <span class="separator">/</span>
        <span class="current">{{ caseData.title }}</span>
      </div>
      
      <div class="case-header">
        <div class="case-tag">{{ caseData.tag }}</div>
        <h1 class="case-title">{{ caseData.title }}</h1>
        <div class="case-meta">
          <div class="meta-item">
            <i class="fas fa-calendar"></i>
            <span>{{ isZh ? '发布日期：' : 'Published: ' }}{{ caseData.date }}</span>
          </div>
        </div>
      </div>
      
      <div class="case-banner">
        <img :src="caseData.image || '/images/cases/default.jpg'" :alt="caseData.title">
      </div>
      
      <div class="case-content-wrapper">
        <div class="case-highlight">
          <i class="fas fa-quote-left"></i>
          <p>{{ caseData.highlight }}</p>
          <i class="fas fa-quote-right"></i>
        </div>
        
        <div class="case-results">
          <h3>{{ casesPage.results }}</h3>
          <div class="results-grid">
            <div class="result-item" v-for="(result, index) in caseData.results" :key="index">
              <div class="result-icon">
                <i :class="getResultIcon(index)"></i>
              </div>
              <div class="result-text">{{ result }}</div>
            </div>
          </div>
        </div>
        
        <div class="case-details" v-html="caseData.content"></div>
        
        <div class="case-footer">
          <RouterLink to="/cases" class="back-btn">
            <i class="fas fa-arrow-left"></i> {{ casesPage.backToList }}
          </RouterLink>
          
          <div class="case-share">
            <span>{{ isZh ? '分享：' : 'Share: ' }}</span>
            <a href="#" class="share-icon"><i class="fab fa-weixin"></i></a>
            <a href="#" class="share-icon"><i class="fab fa-weibo"></i></a>
            <a href="#" class="share-icon"><i class="fas fa-link"></i></a>
          </div>
        </div>
      </div>
      
      <div class="related-cases">
        <h2>{{ casesPage.relatedCases }}</h2>
        <div class="related-grid">
          <div v-for="item in relatedCases" :key="item.id" class="related-case">
            <RouterLink :to="`/cases/${item.id}`">
              <div class="related-img">
                <img :src="item.image || '/images/cases/default.jpg'" :alt="item.title">
              </div>
              <h3>{{ item.title }}</h3>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container">
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
.case-detail-page {
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

.case-header {
  margin-bottom: 30px;
  text-align: center;
}

.case-tag {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.case-title {
  font-size: 2.2rem;
  margin-bottom: 20px;
  line-height: 1.3;
  color: var(--text-color);
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
  margin-right: 6px;
  color: var(--primary-color);
}

.case-banner {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: var(--shadow);
}

.case-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.case-highlight {
  position: relative;
  padding: 30px 50px;
  margin-bottom: 40px;
  background: rgba(14, 165, 233, 0.05);
  border-radius: 8px;
  font-size: 1.2rem;
  line-height: 1.6;
  font-style: italic;
  color: #334155;
}

.case-highlight i {
  position: absolute;
  color: var(--primary-color);
  opacity: 0.3;
  font-size: 24px;
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
  margin-bottom: 40px;
}

.case-results h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: var(--text-color);
  text-align: center;
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
  padding: 20px;
  border-radius: 8px;
  background: var(--bg-color);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.result-item:hover {
  transform: translateY(-5px);
}

.result-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.result-icon i {
  font-size: 24px;
  color: white;
}

.result-text {
  font-weight: 500;
  line-height: 1.4;
  color: #334155;
}

.case-details {
  line-height: 1.8;
  color: #475569;
}

.case-details h2 {
  font-size: 1.5rem;
  margin: 30px 0 15px;
  color: var(--text-color);
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
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.back-btn i {
  margin-right: 8px;
}

.back-btn:hover {
  color: var(--secondary-color);
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
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(14, 165, 233, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.share-icon:hover {
  background: var(--primary-color);
  color: white;
}

.related-cases {
  margin-top: 80px;
}

.related-cases h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--text-color);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.related-case {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.related-case:hover {
  transform: translateY(-5px);
}

.related-img {
  height: 180px;
  overflow: hidden;
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
  padding: 15px;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--text-color);
}

.loading-case {
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(14, 165, 233, 0.2);
  border-left-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.not-found {
  max-width: 400px;
}

.not-found h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.not-found p {
  color: #64748b;
  margin-bottom: 20px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .case-title {
    font-size: 1.8rem;
  }
  
  .case-banner {
    height: 300px;
  }
  
  .case-highlight {
    padding: 20px 30px;
    font-size: 1.1rem;
  }
  
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .case-header {
    margin-bottom: 20px;
  }
  
  .case-title {
    font-size: 1.5rem;
  }
  
  .case-banner {
    height: 200px;
    margin-bottom: 30px;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .case-footer {
    flex-direction: column;
    gap: 20px;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .case-highlight {
    padding: 15px 25px;
    font-size: 1rem;
  }
}
</style> 