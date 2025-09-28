<template>
  <div class="content-management">
    <div class="content-tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ 'active': activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>
    
    <div class="content-panel">
      <!-- 网站基本信息 -->
      <div v-if="activeTab === 'site-info'" class="tab-content">
        <h2>网站基本信息</h2>
        <div class="admin-card">
          <form @submit.prevent="updateSiteInfo">
            <div class="form-group">
              <label for="companyName">公司名称</label>
              <input type="text" id="companyName" v-model="editableSiteInfo.companyName" class="form-control">
            </div>
            
            <div class="form-group">
              <label for="slogan">公司口号</label>
              <input type="text" id="slogan" v-model="editableSiteInfo.slogan" class="form-control">
            </div>
            
            <div class="form-group">
              <label for="description">网站描述</label>
              <textarea id="description" v-model="editableSiteInfo.description" class="form-control" rows="3"></textarea>
            </div>
            
            <h3>联系信息</h3>
            
            <div class="form-group">
              <label for="address">公司地址</label>
              <input type="text" id="address" v-model="editableSiteInfo.contactInfo.address" class="form-control">
            </div>
            
            <div class="form-group">
              <label for="phone">联系电话</label>
              <input type="text" id="phone" v-model="editableSiteInfo.contactInfo.phone" class="form-control">
            </div>
            
            <div class="form-group">
              <label for="email">电子邮箱</label>
              <input type="email" id="email" v-model="editableSiteInfo.contactInfo.email" class="form-control">
            </div>
            
            <div class="form-actions">
              <button type="submit" class="btn" :disabled="updating">保存更改</button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- 解决方案 -->
      <div v-else-if="activeTab === 'solutions'" class="tab-content">
        <h2>解决方案管理</h2>
        <div class="admin-card">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>标题</th>
                  <th>描述</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(solution, index) in editableSolutions" :key="solution.id">
                  <td>{{ solution.id }}</td>
                  <td>{{ solution.title }}</td>
                  <td>{{ solution.description.substring(0, 50) }}...</td>
                  <td>
                    <div class="btn-group">
                      <button class="btn-secondary" @click="editSolution(index)">编辑</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- 解决方案编辑对话框 -->
        <div v-if="showSolutionEditor" class="modal">
          <div class="modal-content">
            <h3>编辑解决方案</h3>
            <form @submit.prevent="saveSolution">
              <div class="form-group">
                <label for="solutionTitle">标题</label>
                <input type="text" id="solutionTitle" v-model="currentSolution.title" class="form-control">
              </div>
              
              <div class="form-group">
                <label for="solutionDescription">简短描述</label>
                <textarea id="solutionDescription" v-model="currentSolution.description" class="form-control" rows="3"></textarea>
              </div>
              
              <div class="form-group">
                <label for="solutionDetails">详细内容</label>
                <textarea id="solutionDetails" v-model="currentSolution.details" class="form-control" rows="6"></textarea>
              </div>
              
              <div class="form-group">
                <label for="solutionImage">图片URL</label>
                <input type="text" id="solutionImage" v-model="currentSolution.image" class="form-control">
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn-secondary" @click="showSolutionEditor = false">取消</button>
                <button type="submit" class="btn">保存</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- 其他内容管理选项卡 -->
      <div v-else class="tab-content">
        <div class="alert alert-info">
          <p>{{ getTabMessage(activeTab) }}</p>
        </div>
      </div>
    </div>
    
    <!-- 操作提示 -->
    <div v-if="notification.show" :class="['alert', `alert-${notification.type}`]">
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/store/modules/content'

const contentStore = useContentStore()
const { siteInfo, solutions, technologies, cases, news, aboutData, jobs } = storeToRefs(contentStore)

// 管理所有内容分类的标签
const tabs = [
  { id: 'site-info', name: '网站信息' },
  { id: 'solutions', name: '解决方案' },
  { id: 'technologies', name: '核心技术' },
  { id: 'cases', name: '典型案例' },
  { id: 'news', name: '新闻资讯' },
  { id: 'about', name: '关于我们' },
  { id: 'jobs', name: '招聘信息' }
]

// 当前激活的标签
const activeTab = ref('site-info')

// 可编辑的数据
const editableSiteInfo = reactive({ ...siteInfo.value })
const editableSolutions = ref([...solutions.value])
const currentSolution = reactive({})
const showSolutionEditor = ref(false)
const updating = ref(false)

// 通知信息
const notification = reactive({
  show: false,
  message: '',
  type: 'success'
})

// 编辑解决方案
const editSolution = (index) => {
  Object.assign(currentSolution, JSON.parse(JSON.stringify(editableSolutions.value[index])))
  showSolutionEditor.value = true
}

// 保存解决方案
const saveSolution = async () => {
  const index = editableSolutions.value.findIndex(s => s.id === currentSolution.id)
  if (index !== -1) {
    editableSolutions.value[index] = { ...currentSolution }
    await updateContent('solutions', editableSolutions.value)
    showSolutionEditor.value = false
  }
}

// 更新网站信息
const updateSiteInfo = async () => {
  await updateContent('site-info', editableSiteInfo)
}

// 通用更新内容方法
const updateContent = async (contentType, data) => {
  updating.value = true
  try {
    const result = await contentStore.updateContent(contentType, data)
    if (result.success) {
      showNotification('更新成功！', 'success')
    } else {
      showNotification(`更新失败: ${result.error}`, 'error')
    }
  } catch (error) {
    showNotification(`更新失败: ${error.message}`, 'error')
  } finally {
    updating.value = false
  }
}

// 显示通知
const showNotification = (message, type = 'success') => {
  notification.message = message
  notification.type = type
  notification.show = true
  
  setTimeout(() => {
    notification.show = false
  }, 3000)
}

// 获取标签提示信息
const getTabMessage = (tabId) => {
  switch (tabId) {
    case 'technologies':
      return '在这里您可以管理核心技术内容。'
    case 'cases':
      return '在这里您可以管理典型案例内容。'
    case 'news':
      return '在这里您可以管理新闻资讯内容。'
    case 'about':
      return '在这里您可以管理关于我们页面内容。'
    case 'jobs':
      return '在这里您可以管理招聘信息内容。'
    default:
      return '请选择左侧的内容类型进行管理。'
  }
}

onMounted(async () => {
  // 初始加载所有内容数据
  await Promise.all([
    contentStore.fetchContent('site-info'),
    contentStore.fetchContent('solutions'),
    contentStore.fetchContent('technologies'),
    contentStore.fetchContent('cases'),
    contentStore.fetchContent('news'),
    contentStore.fetchContent('about'),
    contentStore.fetchContent('jobs')
  ])
  
  // 更新可编辑的数据
  Object.assign(editableSiteInfo, siteInfo.value)
  editableSolutions.value = [...solutions.value]
})
</script>

<style scoped>
.content-management {
  position: relative;
}

.content-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.content-tabs button {
  padding: 10px 15px;
  background: var(--light-bg);
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.content-tabs button.active {
  background: var(--primary-color);
  color: var(--light-text);
}

.tab-content h2 {
  margin-bottom: 20px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.table-responsive {
  overflow-x: auto;
}

/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-color);
  border-radius: 8px;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-content h3 {
  margin-bottom: 20px;
}
</style>