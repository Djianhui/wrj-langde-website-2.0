import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('admin-token') || '')
  const user = ref(JSON.parse(localStorage.getItem('admin-user') || '{}'))
  const isAuthenticated = ref(!!token.value)
  const loading = ref(false)
  const error = ref(null)

  // 登录
  const login = async (credentials) => {
    loading.value = true
    error.value = null
    
    try {
      // 在实际项目中，这里应该调用真实的API
      const response = await axios.post('/api/auth/login', credentials)
      
      if (response.data.token) {
        token.value = response.data.token
        user.value = response.data.user
        isAuthenticated.value = true
        
        // 保存到本地存储
        localStorage.setItem('admin-token', token.value)
        localStorage.setItem('admin-user', JSON.stringify(user.value))
        
        return { success: true }
      } else {
        throw new Error('认证失败')
      }
    } catch (e) {
      error.value = e.message || '登录失败，请检查账号和密码'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // 登出
  const logout = () => {
    token.value = ''
    user.value = {}
    isAuthenticated.value = false
    
    // 清除本地存储
    localStorage.removeItem('admin-token')
    localStorage.removeItem('admin-user')
  }

  // 验证令牌
  const validateToken = async () => {
    if (!token.value) return false
    
    try {
      const response = await axios.post('/api/auth/validate', { token: token.value })
      return response.data.valid
    } catch (e) {
      logout()
      return false
    }
  }

  // 初始化用户认证状态
  const initAuth = async () => {
    if (token.value) {
      const isValid = await validateToken()
      isAuthenticated.value = isValid
      if (!isValid) logout()
    }
  }

  return {
    token,
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    validateToken,
    initAuth
  }
}) 