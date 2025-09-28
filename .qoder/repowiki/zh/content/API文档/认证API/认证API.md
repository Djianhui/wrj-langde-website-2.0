
# 认证API

<cite>
**本文档引用的文件**   
- [src/api/index.js](file://src/api/index.js)
- [src/store/modules/auth.js](file://src/store/modules/auth.js)
- [src/views/admin/AdminLoginView.vue](file://src/views/admin/AdminLoginView.vue)
- [src/router/index.js](file://src/router/index.js)
</cite>

## 目录
1. [认证API概述](#认证api概述)
2. [/auth/login端点](#authlogin端点)
3. [/auth/validate端点](#authvalidate端点)
4. [/auth/me端点](#authme端点)
5. [JWT令牌管理](#jwt令牌管理)
6. [安全建议](#安全建议)
7. [代码示例](#代码示例)

## 认证API概述

本项目实现了一套完整的管理员认证系统，主要包含三个核心API端点：`/auth/login`用于用户登录和获取JWT令牌，`/auth/validate`用于验证令牌的有效性，以及`/auth/me`用于获取当前登录用户的详细信息。整个认证流程基于JSON Web Token (JWT)技术，并通过Axios请求拦截器在前端自动处理令牌的注入与刷新。

系统的认证状态由Pinia状态管理库统一维护，包括用户的登录状态、JWT令牌和用户信息。当用户成功登录后，令牌和用户数据会被存储在浏览器的`localStorage`中，以确保页面刷新后仍能保持登录状态。同时，系统还实现了路由守卫机制，确保只有经过身份验证的用户才能访问受保护的管理后台页面。

**Section sources**
- [src/store/modules/auth.js](file://src/store/modules/auth.js)
- [src/router/index.js](file://src/router/index.js)

## /auth/login端点

`/auth/login`端点是一个POST请求，用于处理管理员用户的登录操作。客户端需要提供用户名和密码进行身份验证。

### 请求体格式
请求体必须为JSON格式，包含以下两个字段：
- `username`: 用户名（字符串）
- `password`: 密码（字符串）

```json
{
  "username": "admin",
  "password": "password123"
}
```

### 成功响应
当认证成功时，服务器会返回一个包含JWT令牌和用户信息的JSON对象。

**响应结构:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "administrator"
  }
}
```
- `token`: JWT令牌字符串，用于后续请求的身份验证。
- `user`: 包含已登录用户基本信息的对象。

### 错误响应
该端点可能返回以下HTTP错误码：

| 状态码 | 原因 | 描述 |
| :--- | :--- | :--- |
| 400 | Bad Request | 请求体格式无效，例如缺少`username`或`password`字段。 |
| 401 | Unauthorized | 认证失败，提供的用户名或密码不正确。 |

**Section sources**
- [src/api/index.js](file://src/api/index.js#L28-L30)
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L15-L45)

## /auth/validate端点

`/auth/validate`端点用于验证JWT令牌的有效性。这是一个POST请求，客户端需要在请求头中携带有效的Bearer令牌。

### 验证机制
当客户端调用此端点时，服务器会解析并验证请求头中的JWT令牌。验证过程包括检查令牌的签名、过期时间等。

### 响应结构
服务器会返回一个JSON对象，指示令牌是否有效。

```json
{
  "valid": true
}
```
- `valid`: 布尔值，`true`表示令牌有效，`false`表示令牌无效或已过期。

如果令牌无效或缺失，服务器将返回401 Unauthorized状态码，此时前端的响应拦截器会自动清除本地存储的令牌，并将用户重定向到登录页面。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L32-L34)
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L65-L75)

## /auth/me端点

`/auth/me`端点用于获取当前登录用户的详细信息。这是一个GET请求，同样需要在请求头中携带有效的JWT令牌。

### 流程说明
1.  客户端发起对`/auth/me`的GET请求。
2.  Axios请求拦截器自动从`localStorage`中读取`admin-token`，并将其添加到`Authorization`头中，格式为`Bearer <token>`。
3.  服务器验证令牌后，返回与该令牌关联的用户信息。

### 响应结构
成功响应将返回一个包含用户信息的JSON对象。

```json
{
  "id": 1,
  "username": "admin",
  "email": "admin@landeintelligent.com",
  "role": "administrator",
  "createdAt": "2023-01-01T00:00:00Z"
}
```

此端点是构建个性化用户体验的基础，例如在管理后台显示用户的姓名和角色。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L36-L38)
- [src/api/index.js](file://src/api/index.js#L5-L15)

## JWT令牌管理

本系统的JWT令牌管理策略如下：

- **过期时间**: JWT令牌设置有固定的过期时间（通常为几小时），以增强安全性。一旦令牌过期，用户需要重新登录。
- **无刷新机制**: 当前系统**没有实现**令牌刷新（refresh token）机制。这意味着当令牌过期后，用户必须重新输入用户名和密码进行登录，而不能通过一个长期有效的刷新令牌来获取新的访问令牌。
- **存储位置**: JWT令牌和用户信息被存储在浏览器的`localStorage`中。这种方式便于持久化，但需要注意防范跨站脚本（XSS）攻击。

**Section sources**
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L2-L10)
- [src/api/index.js](file://src/api/index.js#L10-L14)

## 安全建议

为了确保认证系统的安全性，建议遵循以下最佳实践：

1.  **强制使用HTTPS**: 所有API请求都必须通过HTTPS传输，以防止JWT令牌在传输过程中被窃听和劫持。
2.  **防范XSS攻击**: 由于令牌存储在`localStorage`中，必须严格防范跨站脚本（XSS）攻击。确保所有用户输入的内容在渲染到页面前都经过适当的转义和清理。
3.  **设置合理的过期时间**: JWT令牌的过期时间不宜过长，以减少令牌泄露后的风险窗口。
4.  **避免敏感信息**: 不要在JWT令牌的payload中存放过于敏感的信息（如密码、身份证号等），因为payload部分是Base64编码的，可以被轻易解码。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L10-L14)

## 代码示例

以下是使用JavaScript Axios调用认证API的完整示例。

### JavaScript Axios调用示例

```javascript
import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// 请求拦截器 - 自动添加Authorization头
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('admin-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 登录函数
async function login(username, password) {
  try {
    const response = await api.post('/auth/login', { username, password });
    
    // 登录成功，存储令牌和用户信息
    localStorage.setItem('admin-token',