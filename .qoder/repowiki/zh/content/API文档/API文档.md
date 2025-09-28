# API文档

<cite>
**本文档引用的文件**   
- [src/api/index.js](file://src/api/index.js) - *API请求配置与拦截器实现*
- [src/store/modules/auth.js](file://src/store/modules/auth.js) - *认证状态管理逻辑*
- [data/content.json](file://data/content.json) - *网站内容数据模型*
- [data/users.json](file://data/users.json) - *用户凭证存储示例*
</cite>

## 更新摘要
**已做更改**   
- 完善了 `/admin/content` 接口的详细说明，包括GET和PUT操作
- 补充了JWT令牌在请求头中的使用方式及前端自动注入机制
- 明确了 `content.json` 数据模型中各字段的实际含义与结构
- 增加了curl命令和Axios调用示例
- 添加了JWT安全建议与当前刷新机制缺失的说明

## 目录
1. [简介](#简介)
2. [认证接口](#认证接口)
3. [内容管理接口](#内容管理接口)
4. [数据模型](#数据模型)
5. [客户端集成示例](#客户端集成示例)
6. [安全说明](#安全说明)

## 简介
本文档详细描述了本项目提供的RESTful API，涵盖所有公开接口。API使用JSON作为数据传输格式，通过JWT（JSON Web Token）进行身份验证。主要功能包括管理员登录认证和网站内容的管理。后端API基础路径为`/api`，前端通过axios库进行请求，并自动在请求头中添加JWT令牌。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L0-L94)

## 认证接口
### `/auth/login` (POST)
此端点用于管理员用户登录，获取访问受保护资源所需的JWT令牌。

*   **请求方法**: POST
*   **请求URL**: `/api/auth/login`
*   **请求头**:
    *   `Content-Type: application/json`
*   **请求体 (JSON)**:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

| 字段 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| `username` | string | 是 | 用户名 |
| `password` | string | 是 | 密码 |

*   **成功响应 (HTTP 200)**:
    *   返回包含JWT令牌和用户信息的JSON对象。

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| `token` | string | JWT访问令牌 |
| `user` | object | 登录成功的用户信息 |

*   **错误响应**:
    *   **401 未授权**: 提供的凭据无效。
        ```json
        { "error": "认证失败" }
        ```
    *   其他可能的错误会返回相应的错误消息。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L87-L90)
- [src/store/modules/auth.js](file://src/store/modules/auth.js#L20-L50)

## 内容管理接口
### `/admin/content/{type}` (GET, PUT)
该接口用于管理员对网站内容进行读取和更新操作，需携带有效的JWT令牌。

#### GET 获取内容
*   **请求方法**: GET
*   **请求URL**: `/api/admin/content/{type}`
*   **请求头**:
    *   `Authorization: Bearer <token>`
*   **路径参数**:
    *   `type`: 内容类型，如 `site-info`, `solutions`, `technologies`, `cases` 等
*   **成功响应 (HTTP 200)**:
    *   返回指定类型的内容数据，支持多语言结构（zh/en）。

```json
{
  "zh": {
    "companyName": "杭州朗德智能科技有限公司",
    "slogan": "智能科技，创造可能"
  },
  "en": {
    "companyName": "Hangzhou Lande Intelligent Technology Co., Ltd.",
    "slogan": "Intelligent technology, creating possibilities"
  }
}
```

#### PUT 更新内容
*   **请求方法**: PUT
*   **请求URL**: `/api/admin/content/{type}`
*   **请求头**:
    *   `Authorization: Bearer <token>`
    *   `Content-Type: application/json`
*   **路径参数**:
    *   `type`: 要更新的内容类型
*   **请求体 (JSON)**:

```json
{
  "data": {
    "zh": {
      "companyName": "新公司名称"
    }
  },
  "language": "zh"
}
```

| 字段 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| `data` | object | 是 | 包含要更新内容的对象 |
| `language` | string | 否 | 指定更新的语言版本，默认为当前系统语言 |

*   **成功响应 (HTTP 200)**:
    ```json
    { "success": true }
    ```
*   **错误响应**:
    *   **401 未授权**: 令牌无效或缺失。
    *   **403 禁止访问**: 用户权限不足。
    *   **400 错误请求**: 请求体格式不正确。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L50-L53)
- [src/store/modules/content.js](file://src/store/modules/content.js#L598-L647)

## 数据模型
### content.json 数据结构
该文件定义了网站核心内容的数据模型，包含以下主要字段：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| `site-info` | object | 网站基本信息，包括公司名称、口号、联系方式等 |
| `solutions` | array | 解决方案列表，每个方案包含ID、标题、描述、详情和图片链接 |
| `technologies` | array | 核心技术列表，描述反无人机系统的各项技术能力 |
| `cases` | array | 典型案例集合，展示成功应用项目 |
| `news` | array | 新闻动态信息，用于首页展示 |
| `about` | object | 关于我们页面内容，包含企业介绍、文化、历史等 |
| `jobs` | array | 招聘职位信息列表 |

所有内容均支持中英文双语结构（`zh` 和 `en` 属性），便于国际化展示。

**Section sources**
- [data/content.json](file://data/content.json#L0-L27)

## 客户端集成示例
### 使用 curl 发送请求
```bash
# 登录并获取token
TOKEN=$(curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}' | jq -r .token)

# 使用token获取内容
curl -X GET http://localhost:3000/api/admin/content/site-info \
  -H "Authorization: Bearer $TOKEN"
```

### 使用 JavaScript Axios 调用
```javascript
import axios from 'axios';

// 配置实例
const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

// 自动注入token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('admin-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 登录
async function login(username, password) {
  try {
    const response = await api.post('/auth/login', { username, password });
    localStorage.setItem('admin-token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('登录失败:', error.response?.data);
  }
}

// 更新内容
async function updateSiteInfo(data) {
  try {
    const response = await api.put('/admin/content/site-info', { data });
    console.log('更新成功:', response.data);
  } catch (error) {
    console.error('更新失败:', error.response?.data);
  }
}
```

**Section sources**
- [src/api/index.js](file://src/api/index.js#L4-L35)

## 安全说明
*   所有受保护的API端点均需在请求头中提供有效的JWT令牌：`Authorization: Bearer <token>`。
*   JWT令牌通过 `/auth/login` 接口颁发，目前**尚未实现令牌刷新机制**，过期后需重新登录。
*   建议将令牌存储在 `localStorage` 或 `sessionStorage` 中，并注意防范XSS攻击。
*   敏感操作应增加二次确认或验证码机制。
*   生产环境中应使用HTTPS协议以确保传输安全。
*   用户凭证明文存储于 `users.json` 文件中，仅用于开发测试，请勿在生产环境使用。

**Section sources**
- [src/api/index.js](file://src/api/index.js#L15-L25)
- [data/users.json](file://data/users.json#L0-L7)