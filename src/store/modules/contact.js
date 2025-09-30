import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import axios from 'axios'
import { useLanguageStore } from './language'
import { useTranslationsStore } from './translations'

export const useContactStore = defineStore('contact', () => {
  // 获取语言store
  const languageStore = useLanguageStore()
  const translationsStore = useTranslationsStore()
  
  // 联系表单数据
  const contactForm = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: ''
  })

  // 表单提交状态
  const submitting = ref(false)
  const success = ref(false)
  const error = ref(null)
  
  // 获取的表单消息列表（用于管理后台）
  const messages = ref([])

  // 获取当前语言的表单翻译
  const formTranslations = computed(() => {
    return translationsStore.getContactForm(languageStore.language)
  })
  
  // 提交表单
  const submitContactForm = async () => {
    submitting.value = true
    success.value = false
    error.value = null
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 默认提交成功
    success.value = true
    submitting.value = false
    resetForm()
    
    return { success: true }
  }
  
  // 重置表单
  const resetForm = () => {
    contactForm.name = ''
    contactForm.email = ''
    contactForm.phone = ''
    contactForm.subject = ''
    contactForm.company = ''
    contactForm.message = ''
  }
  
  // 获取消息列表（用于管理后台）
  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/admin/messages')
      messages.value = response.data
      return { success: true }
    } catch (e) {
      console.error('Error fetching messages:', e)
      return { success: false, error: e.message }
    }
  }
  
  // 标记消息为已读（用于管理后台）
  const markAsRead = async (id) => {
    try {
      await axios.put(`/api/admin/messages/${id}/read`)
      
      // 更新本地数据
      const index = messages.value.findIndex(msg => msg.id === id)
      if (index !== -1) {
        messages.value[index].read = true
      }
      
      return { success: true }
    } catch (e) {
      console.error(`Error marking message ${id} as read:`, e)
      return { success: false, error: e.message }
    }
  }
  
  // 删除消息（用于管理后台）
  const deleteMessage = async (id) => {
    try {
      await axios.delete(`/api/admin/messages/${id}`)
      
      // 更新本地数据
      messages.value = messages.value.filter(msg => msg.id !== id)
      
      return { success: true }
    } catch (e) {
      console.error(`Error deleting message ${id}:`, e)
      return { success: false, error: e.message }
    }
  }
  
  return {
    contactForm,
    submitting,
    success,
    error,
    messages,
    formTranslations,
    submitContactForm,
    resetForm,
    fetchMessages,
    markAsRead,
    deleteMessage
  }
}) 