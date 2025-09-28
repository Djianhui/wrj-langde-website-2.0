<template>
  <div class="messages-management">
    <div class="admin-card">
      <div class="card-header">
        <h2>联系表单消息</h2>
        <button class="btn" @click="fetchMessages" :disabled="loading">
          <i class="fas fa-sync"></i> 刷新
        </button>
      </div>
      
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
      </div>
      
      <div v-else-if="messages.length === 0" class="empty-state">
        <p>暂无消息</p>
      </div>
      
      <div v-else class="message-list">
        <div 
          v-for="message in messages" 
          :key="message.id" 
          class="message-item"
          :class="{ 'unread': !message.read }"
        >
          <div class="message-header">
            <div class="message-info">
              <h3>{{ message.name }}</h3>
              <div class="message-contacts">
                <span><i class="fas fa-envelope"></i> {{ message.email }}</span>
                <span><i class="fas fa-phone"></i> {{ message.phone }}</span>
              </div>
              <span class="message-date">{{ formatDate(message.createdAt) }}</span>
            </div>
            <div class="message-actions">
              <button 
                v-if="!message.read" 
                class="btn-secondary" 
                @click="markAsRead(message.id)"
                title="标记为已读"
              >
                <i class="fas fa-check"></i>
              </button>
              <button 
                class="btn-secondary" 
                @click="deleteMessage(message.id)"
                title="删除消息"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div class="message-content">
            <p>{{ message.message }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 操作提示 -->
    <div v-if="notification.show" :class="['alert', `alert-${notification.type}`]">
      {{ notification.message }}
    </div>
    
    <!-- 删除确认对话框 -->
    <div v-if="showDeleteConfirm" class="modal">
      <div class="modal-content">
        <h3>确认删除</h3>
        <p>您确定要删除这条消息吗？此操作无法撤销。</p>
        <div class="form-actions">
          <button type="button" class="btn-secondary" @click="showDeleteConfirm = false">取消</button>
          <button type="button" class="btn" @click="confirmDelete">确认删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useContactStore } from '@/store/modules/contact'

const contactStore = useContactStore()
const messages = ref([])
const loading = ref(false)
const showDeleteConfirm = ref(false)
const messageToDelete = ref(null)

// 通知信息
const notification = reactive({
  show: false,
  message: '',
  type: 'success'
})

// 获取消息列表
const fetchMessages = async () => {
  loading.value = true
  try {
    const result = await contactStore.fetchMessages()
    if (result.success) {
      messages.value = contactStore.messages
    } else {
      showNotification(`获取消息失败: ${result.error}`, 'error')
    }
  } catch (error) {
    showNotification(`获取消息失败: ${error.message}`, 'error')
  } finally {
    loading.value = false
  }
}

// 标记消息为已读
const markAsRead = async (id) => {
  try {
    const result = await contactStore.markAsRead(id)
    if (result.success) {
      showNotification('消息已标记为已读', 'success')
    } else {
      showNotification(`操作失败: ${result.error}`, 'error')
    }
  } catch (error) {
    showNotification(`操作失败: ${error.message}`, 'error')
  }
}

// 删除消息
const deleteMessage = (id) => {
  messageToDelete.value = id
  showDeleteConfirm.value = true
}

// 确认删除消息
const confirmDelete = async () => {
  if (!messageToDelete.value) return
  
  try {
    const result = await contactStore.deleteMessage(messageToDelete.value)
    if (result.success) {
      showNotification('消息已删除', 'success')
      showDeleteConfirm.value = false
      messageToDelete.value = null
    } else {
      showNotification(`删除失败: ${result.error}`, 'error')
    }
  } catch (error) {
    showNotification(`删除失败: ${error.message}`, 'error')
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

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  fetchMessages()
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h2 {
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: 40px 0;
  color: #64748b;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.message-item {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  background-color: var(--bg-color);
  transition: var(--transition);
}

.message-item.unread {
  border-left: 3px solid var(--primary-color);
  background-color: rgba(37, 99, 235, 0.05);
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.message-info h3 {
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.message-contacts {
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #64748b;
}

.message-date {
  font-size: 0.85rem;
  color: #94a3b8;
}

.message-actions {
  display: flex;
  gap: 10px;
}

.message-actions button {
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-content {
  color: #475569;
  line-height: 1.6;
}

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
  max-width: 400px;
}

.modal-content h3 {
  margin-bottom: 15px;
}

.modal-content p {
  margin-bottom: 20px;
  color: #475569;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>