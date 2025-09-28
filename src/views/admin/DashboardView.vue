<template>
  <div class="dashboard-container">
    <h1>仪表盘</h1>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-file-alt"></i>
        </div>
        <div class="stat-info">
          <h2>{{ contentCount }}</h2>
          <p>内容条目</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="stat-info">
          <h2>{{ messageCount }}</h2>
          <p>联系消息</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-eye"></i>
        </div>
        <div class="stat-info">
          <h2>{{ viewsCount }}</h2>
          <p>页面浏览</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-info">
          <h2>{{ visitorsCount }}</h2>
          <p>访问用户</p>
        </div>
      </div>
    </div>
    
    <div class="dashboard-sections">
      <div class="recent-messages">
        <div class="section-header">
          <h2>最近消息</h2>
          <RouterLink to="/admin/messages" class="view-all">查看全部</RouterLink>
        </div>
        
        <div class="message-list" v-if="recentMessages.length">
          <div class="message-item" v-for="message in recentMessages" :key="message.id">
            <div class="message-info">
              <h3>{{ message.name }}</h3>
              <p class="message-date">{{ formatDate(message.date) }}</p>
            </div>
            <p class="message-content">{{ truncateText(message.message, 80) }}</p>
            <div class="message-contact">
              <span><i class="fas fa-envelope"></i> {{ message.email }}</span>
              <span v-if="message.phone"><i class="fas fa-phone"></i> {{ message.phone }}</span>
            </div>
          </div>
        </div>
        <div class="empty-state" v-else>
          <p>暂无消息</p>
        </div>
      </div>
      
      <div class="content-overview">
        <div class="section-header">
          <h2>内容概览</h2>
          <RouterLink to="/admin/content" class="view-all">管理内容</RouterLink>
        </div>
        
        <div class="content-stats">
          <div class="content-type" v-for="(count, type) in contentTypeCounts" :key="type">
            <div class="content-type-info">
              <h3>{{ formatContentType(type) }}</h3>
              <p>{{ count }} 条目</p>
            </div>
            <div class="content-type-actions">
              <button @click="navigateToContent(type)" class="btn btn-sm">查看</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useContentStore } from '@/store/modules/content'
import { useContactStore } from '@/store/modules/contact'

const router = useRouter()
const contentStore = useContentStore()
const contactStore = useContactStore()

// 统计数据
const contentCount = ref(0)
const messageCount = ref(0)
const viewsCount = ref(Math.floor(Math.random() * 10000)) // 模拟数据
const visitorsCount = ref(Math.floor(Math.random() * 2000)) // 模拟数据

// 最近消息
const recentMessages = ref([])

// 内容类型计数
const contentTypeCounts = ref({})

onMounted(async () => {
  // 获取数据
  await Promise.all([
    contentStore.fetchAllContent(),
    contactStore.fetchMessages()
  ])
  
  // 统计内容数量
  contentCount.value = Object.values(contentStore.allContent).flat().length
  
  // 统计消息数量
  messageCount.value = contactStore.messages.length
  
  // 获取最近消息
  recentMessages.value = contactStore.messages.slice(0, 5)
  
  // 统计各类型内容数量
  const counts = {}
  Object.keys(contentStore.allContent).forEach(type => {
    counts[type] = contentStore.allContent[type].length
  })
  contentTypeCounts.value = counts
})

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

// 截断文本
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// 格式化内容类型名称
const formatContentType = (type) => {
  const typeMap = {
    'solutions': '解决方案',
    'technologies': '核心技术',
    'cases': '案例展示',
    'news': '新闻动态',
    'about': '关于我们',
    'partners': '合作伙伴'
  }
  return typeMap[type] || type
}

// 跳转到内容管理
const navigateToContent = (type) => {
  router.push({
    name: 'admin-content',
    query: { type: type }
  })
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.dashboard-container h1 {
  margin-bottom: 30px;
  color: var(--primary-color);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.stat-info h2 {
  font-size: 1.8rem;
  margin: 0;
  color: var(--primary-color);
}

.stat-info p {
  margin: 5px 0 0;
  color: #64748b;
}

.dashboard-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--primary-color);
}

.view-all {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.9rem;
}

.view-all:hover {
  text-decoration: underline;
}

.recent-messages, .content-overview {
  background: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.message-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.message-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.message-info h3 {
  font-size: 1.1rem;
  margin: 0;
}

.message-date {
  color: #64748b;
  font-size: 0.8rem;
}

.message-content {
  margin: 10px 0;
  color: #333;
  line-height: 1.5;
}

.message-contact {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  color: #64748b;
}

.message-contact span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.content-stats {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.content-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8fafc;
  border-radius: 6px;
}

.content-type-info h3 {
  font-size: 1.1rem;
  margin: 0 0 5px 0;
}

.content-type-info p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}

.btn-sm {
  padding: 5px 15px;
  font-size: 0.85rem;
}

.empty-state {
  text-align: center;
  padding: 30px;
  color: #64748b;
}

@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .dashboard-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style> 