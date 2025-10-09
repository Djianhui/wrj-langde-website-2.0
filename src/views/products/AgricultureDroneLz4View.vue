<template>
  <div class="product-detail-page page-content">
    <!-- 产品头部 -->
    <div class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <RouterLink to="/">首页</RouterLink>
          <span>/</span>
          <RouterLink to="/technology">产品中心</RouterLink>
          <span>/</span>
          <span>低空经济</span>
          <span>/</span>
          <span>农业植保</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">X50无人机</h1>
          <p class="product-subtitle">智慧农业精准作业解决方案</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/agriculture-drone-lz4.png" alt="X50无人机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>在现代农业迈向智能化、精准化的今天，X50无人机无人机无人机应运而生。它不仅仅是一台飞行器，更是您田间管理的智能助手，致力于以科技力量革新传统植保作业，为农作物保驾护航，为种植者降本增效。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品参数</h2>
        <table class="spec-table">
          <tbody>
            <tr>
              <td class="spec-category" rowspan="6">植保参数</td>
              <td class="spec-label">药箱容量</td>
              <td class="spec-value">25L</td>
            </tr>
            <tr>
              <td class="spec-label">作业喷幅宽度</td>
              <td class="spec-value">8-20m</td>
            </tr>
            <tr>
              <td class="spec-label">作业效率时间</td>
              <td class="spec-value">8m40s（飞距）</td>
            </tr>
            <tr>
              <td class="spec-label">喷洒流量</td>
              <td class="spec-value">12-24L/min</td>
            </tr>
            <tr>
              <td class="spec-label">喷洒系统</td>
              <td class="spec-value">离心喷头 x2</td>
            </tr>
            <tr>
              <td class="spec-label">飞机自重</td>
              <td class="spec-value">34kg</td>
            </tr>
            <tr>
              <td class="spec-category" rowspan="4">整机参数</td>
              <td class="spec-label">电池容量</td>
              <td class="spec-value">18530000mah</td>
            </tr>
            <tr>
              <td class="spec-label">电池重量</td>
              <td class="spec-value">14.6kg</td>
            </tr>
            <tr>
              <td class="spec-label">整机展开尺寸</td>
              <td class="spec-value">2989x3115x872mm</td>
            </tr>
            <tr>
              <td class="spec-label">整机折叠尺寸</td>
              <td class="spec-value">1240x840x872mm</td>
            </tr>
            <tr>
              <td class="spec-category" rowspan="5">飞行参数</td>
              <td class="spec-label">飞行高度</td>
              <td class="spec-value">≤20m</td>
            </tr>
            <tr>
              <td class="spec-label">飞行时间</td>
              <td class="spec-value">22m45s</td>
            </tr>
            <tr>
              <td class="spec-label">飞行速度</td>
              <td class="spec-value">1~12m/s</td>
            </tr>
            <tr>
              <td class="spec-label">空中悬停</td>
              <td class="spec-value">可悬停力位悬停</td>
            </tr>
            <tr>
              <td class="spec-label">突发控制风速</td>
              <td class="spec-value">≤6级</td>
            </tr>
            <tr>
              <td class="spec-category" rowspan="2">发射器</td>
              <td class="spec-label">频率</td>
              <td class="spec-value">2.4HZ</td>
            </tr>
            <tr>
              <td class="spec-label">电源</td>
              <td class="spec-value">锂电池</td>
            </tr>
            <tr>
              <td class="spec-category" rowspan="2">接收机</td>
              <td class="spec-label">频率</td>
              <td class="spec-value">2.4HZ</td>
            </tr>
            <tr>
              <td class="spec-label">通道</td>
              <td class="spec-value">12</td>
            </tr>
          </tbody>
        </table>
        <div class="spec-note">
          <p><strong>配置包含：</strong>无人机*1，电池*1，遥控器*1，充电器*1。</p>
        </div>
      </div>
      
       <!-- 产品特点 -->
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="high-efficiency" :size="32" />
            </div>
            <h3>效果显著</h3>
            <p>高杆作物也能打透。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="smart-spraying" :size="32" />
            </div>
            <h3>效率革新</h3>
            <p>8米大喷幅。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="cost-effective" :size="32" />
            </div>
            <h3>效益为王</h3>
            <p>万亩飞防,一周搞定。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="efficient-operation" :size="32" />
            </div>
            <h3>有效作业面积</h3>
            <p>220亩地/小时。</p>
          </div>  
        </div>
      </div>
      
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <CustomIcons name="field-crops" :size="40" />
            <span>大田作物</span>
          </div>
          <div class="application-item">
            <CustomIcons name="orchard-management" :size="40" />
            <span>果园管理</span>
          </div>
          <div class="application-item">
            <CustomIcons name="vegetable-planting" :size="40" />
            <span>蔬菜种植</span>
          </div>
          <div class="application-item">
            <CustomIcons name="economic-crops" :size="40" />
            <span>经济作物</span>
          </div>
        </div>
      </div>
      
      <!-- 联系咨询 -->
      <div class="product-contact">
        <div class="contact-content">
          <h2>需要了解更多？</h2>
          <p>我们的专业团队随时为您提供技术支持和解决方案</p>
          <RouterLink to="/contact" class="btn btn-primary">联系我们</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CustomIcons from '@/components/icons/CustomIcons.vue'

// 定义emit
const emit = defineEmits(['page-loaded'])

// 处理图片加载错误
const handleImageError = (event) => {
  event.target.src = '/images/products/default-product.jpg'
}

// 页面加载完成
onMounted(() => {
  emit('page-loaded')
})
</script>

<style scoped>
/* 现代化产品详情页基础样式 */
.product-detail-page {
  padding-top: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 现代化产品头部 */
.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
}

.product-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%23ffffff15"/></svg>');
  background-size: 30px 30px;
  opacity: 0.3;
  animation: particleMove 60s linear infinite;
}

@keyframes particleMove {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.breadcrumb a:hover {
  color: white;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
}

.breadcrumb span {
  margin: 0 10px;
  color: rgba(255, 255, 255, 0.5);
}

.product-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
}

.product-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 2;
}

/* 现代化产品概述区域 */
.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  margin: 100px 0;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.7);
}

.product-image {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.product-image::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 24px;
  z-index: -1;
}

.product-image img {
  width: 420px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.15);
  object-fit: cover;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image:hover img {
  transform: scale(1.05);
  box-shadow: 0 35px 70px rgba(59, 130, 246, 0.2);
}

.product-info h2 {
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: -0.01em;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-info p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 30px;
  font-weight: 400;
}

/* 现代化章节标题 */
.section-title {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 60px;
  color: #1e293b;
  font-weight: 800;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

/* 现代化特点网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  text-align: center;
  padding: 50px 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 80px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.4);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #1e293b;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #64748b;
  line-height: 1.7;
  font-size: 1.1rem;
  font-weight: 400;
}

/* 现代化应用场景和表格样式 */
.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.application-item {
  text-align: center;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.12);
  transform: translateY(-8px);
}

.application-item i {
  font-size: 3rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  display: block;
}

/* 现代化产品参数表格样式 */
.product-specifications {
  margin-bottom: 100px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.spec-table {
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-collapse: collapse;
}

.spec-table th,
.spec-table td {
  padding: 20px 25px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-table thead th {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.01em;
}

.spec-category {
  background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
  font-weight: 700;
  color: #3730a3;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid #e2e8f0;
  letter-spacing: 0.05em;
  font-size: 16px;
}

.spec-label {
  font-weight: 600;
  color: #1e293b;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-right: 1px solid #e2e8f0;
  font-size: 15px;
}

.spec-value {
  color: #374151;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
}

.spec-table tbody tr:hover {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  transform: scale(1.01);
}

.spec-table tbody tr:hover .spec-category {
  background: linear-gradient(135deg, #c7d2fe 0%, #ddd6fe 100%);
  color: #1e40af;
}

.spec-table tbody tr:hover .spec-label {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  color: #1e40af;
}

.spec-table tbody tr:last-child td {
  border-bottom: none;
}

.spec-note {
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  color: #475569;
  font-size: 0.95rem;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.spec-note p {
  margin: 0;
  text-align: center;
  font-weight: 500;
}

.product-contact {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  padding: 80px 60px;
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  color: #3b82f6;
  border: 1px solid rgba(255, 255, 255, 0.7);
}

.btn-primary:hover {
  transform: translateY(-4px) scale(1.05);
  background: rgba(255, 255, 255, 1);
  color: #3b82f6;
}

/* 自定义图标样式 */
.feature-icon .custom-icon {
  color: white;
}

.feature-icon .custom-icon svg {
  width: 100%;
  height: 100%;
}

.feature-icon .custom-icon svg * {
  stroke: white !important;
}

.feature-icon .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

.application-item .custom-icon {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover .custom-icon svg * {
  stroke: white !important;
  fill: currentColor !important;
}

.application-item:hover .custom-icon svg *[fill="none"] {
  fill: none !important;
}

.application-item:hover .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

/* 现代化响应式设计 */
@media (max-width: 1200px) {
  .product-overview {
    gap: 60px;
    padding: 50px;
  }
}

@media (max-width: 768px) {
  .product-hero {
    padding: 120px 0 60px;
  }
  
  .product-title {
    font-size: 2.5rem;
  }
  
  .product-overview {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 40px 30px;
    margin: 60px 0;
  }
  
  .product-image img {
    width: 300px;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .spec-table {
    font-size: 0.9rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 12px 15px;
  }
}

@media (max-width: 480px) {
  .product-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .product-contact {
    padding: 40px 20px;
  }
}
</style>