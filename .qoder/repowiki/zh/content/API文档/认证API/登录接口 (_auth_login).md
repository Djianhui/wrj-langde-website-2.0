# 登录接口 (/auth/login)

<cite>
**本文档中引用的文件**
- [app.js](file://app.js)
- [src/api/index.js](file://src/api/index.js)
- [src/views/admin/AdminLoginView.vue](file://src/views/admin/AdminLoginView.vue)
- [src/store/modules/auth.js](file://src/store/modules/auth.js)
- [server.cjs](file://server.cjs)
- [src/router/index.js](file://src/router/index.js)
</cite>

## 目录
1. [接口概述](#接口概述)
2. [请求参数](#请求参数)
3. [响应结构](#响应结构)
4. [错误处理](#错误处理)
5. [前端集成](#前端集成)
6. [使用示例](#使用示例)
7. [安全机制](#安全机制)
8. [故障排除](#故障排除)

## 接口概述

`/auth/login` 是一个用于用户身份验证的API端点，采用HTTP POST方法接收登录凭据并返回JWT令牌。该接口是整个管理后台系统的认证入口，负责验证用户凭据并建立安全的会话。

### 技术栈
- **后端**: Express.js + JWT认证
- **前端**: Vue.js + Pinia状态管理
- **认证方式**: 基于JWT的无状态认证
- **数据传输**: JSON格式

## 请求参数

### 请求头
```http
Content-Type: application/json
```

### 请求体格式
```json
{
  "username": "string (必需)",
  "password": "string (必需)"
}
```

### 参数说明

| 参数名 | 类型 | 必需 | 描述 |
|--------|------|------|------|
| username | string | 是 | 用户名，用于标识账户 |
| password | string | 是 | 用户密码，明文传输 |

**节源**
- [server.cjs](file://server.cjs#L240-L250)

## 响应结构

### 成功响应 (200 OK)

当用户提供正确的用户名和密码时，系统将返回以下JSON格式的响应：

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

### 响应字段说明

| 字段名 | 类型 | 描述 |
|--------|------|------|
| token | string | JWT访问令牌，有效期24小时 |
| user.id | number | 用户唯一标识符 |
| user.username | string | 用户名 |
| user.role | string | 用户角色权限 |

### 响应头
```http
Content-Type: application/json
```

**节源**
- [server.cjs](file://server.cjs#L240-L260)

## 错误处理

### 400 Bad Request - 输入验证失败
当请求体缺少必要字段或格式不正确时返回：

```json
{
  "message": "请填写所有必填字段"
}
```

### 401 Unauthorized - 认证失败
当用户名或密码错误时返回：

```json
{
  "message": "用户名或密码错误"
}
```

### 403 Forbidden - 令牌无效
当JWT令牌验证失败时返回：

```json
{
  "message": "令牌无效或已过期"
}
```

### 500 Internal Server Error
当服务器内部发生错误时返回：

```json
{
  "message": "服务器内部错误"
}
```

**节源**
- [server.cjs](file://server.cjs#L240-L260)
- [server.cjs](file://server.cjs#L110-L120)

## 前端集成

### API封装层

前端通过`src/api/index.js`中的`authApi.login`方法调用登录接口：

```javascript
// src/api/index.js
export const authApi = {
  // 登录
  login: (credentials) => api.post('/auth/login', credentials),
  
  // 验证token
  validateToken: () => api.post('/auth/validate'),
  
  // 获取用户信息
  getUserInfo: () => api.get('/auth/me')
}
```

### 状态管理

使用Pinia状态管理库维护认证状态：

```javascript
// src/store/modules/auth.js
const login = async (credentials) => {
  loading.value = true
  error.value = null
  
  try {
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
```

### 登录表单组件

Vue组件`AdminLoginView.vue`实现了完整的登录界面：

```vue
<!-- src/views/admin/AdminLoginView.vue -->
<template>
  <form @submit.prevent="login" class="login-form">
    <div class="form-group">
      <label for="username">用户名</label>
      <input type="text" id="username" v-model="credentials.username" class="form-control" required>
    </div>
    
    <div class="form-group">
      <label for="password">密码</label>
      <input type="password" id="password" v-model="credentials.password" class="form-control" required>
    </div>
    
    <div v-if="error" class="alert alert-error">
      {{ error }}
    </div>
    
    <button type="submit" class="btn" :disabled="loading">
      <span v-if="loading">登录中...</span>
      <span v-else>登录</span>
    </button>
  </form>
</template>
```

### 路由守卫

系统使用Vue Router的前置守卫保护需要认证的路由：

```javascript
// src/router/index.js
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查用户是否已登录
    const isLoggedIn = localStorage.getItem('admin-token')
    if (!isLoggedIn) {
      // 如果没有登录，重定向到登录页面
      next({ name: 'admin-login' })
    } else {
      next()
    }
  } else {
    next()
  }
})
```

**节源**
- [src/api/index.js](file://src/api/index.js#L40-L45)
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L15-L40)
- [src/views/admin/AdminLoginView.vue](file://src/views/admin/AdminLoginView.vue#L10-L35)
- [src/router/index.js](file://src/router/index.js#L95-L110)

## 使用示例

### JavaScript Axios调用

```javascript
// 使用原生Axios
import axios from 'axios'

const login = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', {
      username,
      password
    })
    
    // 存储令牌和用户信息
    localStorage.setItem('admin-token', response.data.token)
    localStorage.setItem('admin-user', JSON.stringify(response.data.user))
    
    return { success: true, data: response.data }
  } catch (error) {
    console.error('登录失败:', error.response?.data?.message)
    return { success: false, error: error.response?.data?.message }
  }
}

// 使用封装的API方法
import api from '@/api'

const loginWithApi = async (credentials) => {
  try {
    const result = await api.authApi.login(credentials)
    return { success: true, data: result.data }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
```

### curl命令行示例

```bash
# 发送登录请求
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# 带令牌的请求示例
curl -X GET http://localhost:8080/api/auth/me \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Vue组件集成

```vue
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter()
const authStore = useAuthStore()

const credentials = reactive({
  username: '',
  password: ''
})

const login = async () => {
  const result = await authStore.login(credentials)
  if (result.success) {
    router.push('/admin')
  }
}
</script>
```

**节源**
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L15-L40)
- [src/views/admin/AdminLoginView.vue](file://src/views/admin/AdminLoginView.vue#L40-L50)

## 安全机制

### JWT令牌机制

1. **令牌生成**: 使用`jsonwebtoken`库生成签名令牌
2. **有效期**: 24小时自动过期
3. **签名密钥**: 使用环境变量`JWT_SECRET`进行签名
4. **令牌验证**: 每次请求都携带令牌进行身份验证

### 本地存储安全

```javascript
// 登录成功后存储
localStorage.setItem('admin-token', token.value)
localStorage.setItem('admin-user', JSON.stringify(user.value))

// 登出时清除
localStorage.removeItem('admin-token')
localStorage.removeItem('admin-user')
```

### 前端路由保护

```javascript
// 路由元信息标记
{
  path: '/admin',
  name: 'admin',
  component: AdminView,
  meta: { requiresAuth: true }
}

// 前置守卫检查
const isLoggedIn = localStorage.getItem('admin-token')
if (!isLoggedIn) {
  next({ name: 'admin-login' })
}
```

### 后端认证中间件

```javascript
// JWT验证中间件
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ message: '未提供认证令牌' })
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '令牌无效或已过期' })
    }
    req.user = user
    next()
  })
}
```

**节源**
- [server.cjs](file://server.cjs#L110-L120)
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L37-L40)
- [src/router/index.js](file://src/router/index.js#L95-L110)
- [server.cjs](file://server.cjs#L110-L120)

## 故障排除

### 常见问题及解决方案

#### 1. 登录失败 (401错误)
**症状**: 返回"用户名或密码错误"
**原因**: 
- 用户名或密码输入错误
- 用户名不存在
- 密码不匹配

**解决方案**:
```javascript
// 检查输入验证
if (!credentials.username || !credentials.password) {
  setError('请输入用户名和密码')
  return
}

// 调试输出
console.log('登录凭据:', credentials)
```

#### 2. 令牌验证失败 (403错误)
**症状**: 返回"令牌无效或已过期"
**原因**:
- 令牌已过期
- 令牌被篡改
- JWT_SECRET不匹配

**解决方案**:
```javascript
// 自动登出
localStorage.removeItem('admin-token')
localStorage.removeItem('admin-user')

// 重定向到登录页面
router.push('/admin/login')
```

#### 3. CORS跨域问题
**症状**: 浏览器控制台显示CORS错误
**原因**: 前后端域名不一致

**解决方案**:
```javascript
// 后端启用CORS
app.use(cors())

// 或者指定允许的来源
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
```

#### 4. 本地存储问题
**症状**: 登录后无法保持登录状态
**原因**:
- 浏览器隐私模式
- 本地存储被清除
- 浏览器缓存问题

**解决方案**:
```javascript
// 检查本地存储支持
try {
  localStorage.setItem('test', 'test')
  localStorage.removeItem('test')
} catch (e) {
  console.warn('本地存储不可用，考虑使用Cookie')
}
```

### 调试技巧

#### 1. 启用详细日志
```javascript
// 开发环境启用调试
process.env.NODE_ENV === 'development' && console.log('登录请求:', credentials)
```

#### 2. 检查网络请求
使用浏览器开发者工具：
- Network面板查看请求响应
- Console面板查看错误信息
- Application面板查看本地存储状态

#### 3. 验证JWT令牌
```javascript
// 在浏览器控制台验证令牌
const token = localStorage.getItem('admin-token')
if (token) {
  console.log('令牌:', token)
  // 使用jwt.io验证令牌
}
```

**节源**
- [server.cjs](file://server.cjs#L110-L120)
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L25-L35)
- [src/router/index.js](file://src/router/index.js#L95-L110)