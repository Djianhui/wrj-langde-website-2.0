import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 从localStorage获取token
    const token = localStorage.getItem('admin-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      // 处理401错误（未授权）
      if (error.response.status === 401) {
        localStorage.removeItem('admin-token')
        localStorage.removeItem('admin-user')
        // 如果是在管理后台，则跳转到登录页面
        if (window.location.pathname.startsWith('/admin')) {
          window.location.href = '/admin/login'
        }
      }
    }
    return Promise.reject(error)
  }
)

// 内容相关API
export const contentApi = {
  // 获取内容
  getContent: (type) => api.get(`/content/${type}`),
  
  // 更新内容（需要管理员权限）
  updateContent: (type, data) => api.put(`/admin/content/${type}`, data),
  
  // 上传图片（需要管理员权限）
  uploadImage: (formData) => api.post('/admin/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 认证相关API
export const authApi = {
  // 登录
  login: (credentials) => api.post('/auth/login', credentials),
  
  // 验证token
  validateToken: () => api.post('/auth/validate'),
  
  // 获取用户信息
  getUserInfo: () => api.get('/auth/me')
}

// 联系表单相关API
export const contactApi = {
  // 提交联系表单
  submitForm: (formData) => api.post('/contact', formData),
  
  // 获取消息列表（需要管理员权限）
  getMessages: () => api.get('/admin/messages'),
  
  // 标记消息为已读（需要管理员权限）
  markAsRead: (id) => api.put(`/admin/messages/${id}/read`),
  
  // 删除消息（需要管理员权限）
  deleteMessage: (id) => api.delete(`/admin/messages/${id}`)
}

export default {
  contentApi,
  authApi,
  contactApi
} 