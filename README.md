# 杭州朗德智能科技有限公司官网

这是杭州朗德智能科技有限公司的官方网站项目，采用现代化的Vue 3框架开发，包含完整的前后端实现。

## 技术栈

### 前端
- Vue 3 (使用Composition API)
- Vue Router 4
- Pinia 状态管理
- Axios 请求库
- 响应式设计，支持各种设备尺寸

### 后端
- Express.js
- JWT 身份验证
- 文件系统数据存储
- RESTful API设计
- 文件上传功能

## 功能特点

- 展示公司信息、解决方案、核心技术和案例
- 表单提交功能，支持用户发送咨询信息
- 完整的管理后台系统
  - 内容管理：可编辑网站各部分内容
  - 消息管理：查看、标记和删除用户提交的消息
  - 权限控制：基于JWT的管理员身份验证

## 目录结构

```
lande-project/
├── data/               # 数据存储目录（后端使用）
├── dist/               # 构建输出目录
├── public/             # 静态资源目录
├── src/                # 前端源代码
│   ├── api/            # API接口封装
│   ├── assets/         # 项目资源(CSS, 图片等)
│   ├── components/     # 通用组件
│   ├── router/         # 路由配置
│   ├── store/          # Pinia状态管理
│   ├── views/          # 页面视图组件
│   │   └── admin/      # 管理后台视图
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── uploads/            # 上传文件存储目录
├── server.cjs          # Express后端服务
├── package.json        # 项目配置文件
└── vite.config.js      # Vite配置文件
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
# 仅启动前端
npm run dev

# 仅启动后端
npm run server

# 同时启动前端和后端
npm run dev:all
```

### 构建生产版本

```bash
npm run build
```

### 访问管理后台

访问 `/admin` 路径，使用以下默认账号:
- 用户名: admin
- 密码: admin123

## 未来扩展方向

1. 添加数据库支持，替代文件系统存储
2. 完善内容管理系统，支持更多内容类型的编辑
3. 实现多语言支持
4. 添加SEO优化和站点地图
5. 实现访问统计和分析功能
6. 增加在线客服聊天功能

## 安全注意事项

1. 在生产环境中，务必更改默认的JWT密钥
2. 更改默认管理员账号和密码，并使用加密存储密码
3. 设置合理的上传文件限制和类型验证
4. 添加适当的请求频率限制，防止滥用

## 项目结构

- `index.html` - 网站主页，包含Vue模板结构
- `style.css` - 样式表
- `app.js` - Vue3应用逻辑代码，使用Composition API
- `images/` - 图片资源目录

## 需要添加的资源

在正式上线前，需要添加以下资源：

1. 图片资源：
   - 主横幅背景图：`images/hero-bg.jpg`
   - 解决方案图片：`images/solution-1.jpg`, `images/solution-2.jpg`, `images/solution-3.jpg`, `images/solution-4.jpg`
   - 典型案例图片：`images/case-1.jpg`, `images/case-2.jpg`, `images/case-3.jpg`
   - 公司环境图片：`images/company/about-company.jpg`

2. 内容更新：
   - 公司具体介绍信息
   - 实际的解决方案内容
   - 真实的案例展示
   - 真实的新闻资讯
   - 实际的招聘信息
   - 联系方式更新

## 浏览器兼容性

网站兼容以下浏览器：
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 部署说明

网站可以部署在任何支持静态网站的服务器上，如GitHub Pages、Netlify、Vercel等。 