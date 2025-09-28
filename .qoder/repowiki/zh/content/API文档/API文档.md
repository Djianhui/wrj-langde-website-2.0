
# API文档

<cite>
**Referenced Files in This Document**   
- [src/api/index.js](file://src/api/index.js)
- [src/store/modules/auth.js](file://src/store/modules/auth.js)
- [data/content.json](file://data/content.json)
- [data/users.json](file://data/users.json)
</cite>

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
- [src/store