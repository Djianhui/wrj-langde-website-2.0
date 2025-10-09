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
          <h1 class="product-title">X-25农业植保无人机</h1>
          <p class="product-subtitle">智慧农业精准作业解决方案</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/agriculture-drone.png" alt="X-25农业植保无人机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>在现代农业迈向智能化、精准化的今天，X-25农业植保无人机应运而生。它不仅仅是一台飞行器，更是您田间管理的智能助手，致力于以科技力量革新传统植保作业，为农作物保驾护航，为种植者降本增效。</p>
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
              <td class="spec-value">10L</td>
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
              <CustomIcons name="smart-spraying" :size="32" />
            </div>
            <h3>智能喷酒</h3>
            <p>标准载荷10kg,每小时作业可达50-70亩，药泵与飞节约药剂的同时行速度联动更好的实现了精准喷洒，也防止了药害的发生。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="route-planning" :size="32" />
            </div>
            <h3>简单、智能、易操作</h3>
            <p>多元化的作业模式为植保工作带来更多的便利。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="obstacle-avoidance" :size="32" />
            </div>
            <h3>智能避障系统</h3>
            <p>配备多传感器避障系统，自动识别障碍物并规避，确保飞行安全</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="efficient-operation" :size="32" />
            </div>
            <h3>高效作业</h3>
            <p>高性能锂电池组，单次飞行时间可达45分钟，满足大面积连续作业需求</p>
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
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.product-detail-page {
  padding-top: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
}

.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
}

.product-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="40" r="0.3" fill="%23ffffff" opacity="0.08"/><circle cx="40" cy="80" r="0.4" fill="%23ffffff" opacity="0.12"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
  pointer-events: none;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.breadcrumb a:hover {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.breadcrumb span {
  margin: 0 12px;
  color: rgba(255, 255, 255, 0.6);
}

.product-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.product-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  position: relative;
  z-index: 1;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  inset: -10px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 20px;
  opacity: 0.1;
  z-index: -1;
}

.product-image img {
  width: 420px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
  object-fit: cover;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image img:hover {
  transform: scale(1.02);
  box-shadow: 0 35px 80px rgba(59, 130, 246, 0.2);
}

.product-info h2 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.01em;
}

.product-info p {
  font-size: 1.15rem;
  line-height: 1.75;
  color: #475569;
  margin-bottom: 30px;
  font-weight: 400;
}

.section-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

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
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 70px rgba(59, 130, 246, 0.15);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 400;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 100px;
}

.application-item {
  text-align: center;
  padding: 40px 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.application-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.application-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
  color: white;
}

.application-item:hover::before {
  opacity: 1;
}

.application-item i {
  font-size: 2.8rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  display: block;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover i {
  color: white;
  -webkit-text-fill-color: white;
  transform: scale(1.1);
}

.application-item span {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover span {
  color: white;
}

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

.product-specifications {
  margin-bottom: 100px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 产品参数表格样式 */
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

.spec-category-header {
  width: 15%;
}

.spec-label-header {
  width: 35%;
}

.spec-header {
  width: 50%;
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
  padding: 70px 60px;
  text-align: center;
  color: white;
  margin: 100px 0;
  position: relative;
  overflow: hidden;
}

.product-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>') repeat;
  pointer-events: none;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-content h2 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.contact-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  font-weight: 400;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 18px 40px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #3730a3;
  backdrop-filter: blur(20px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  color: #3730a3;
  text-decoration: none;
  background: white;
}

@media (max-width: 768px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 30px 20px;
    margin: 60px 0;
  }
  
  .product-image img {
    width: 280px;
    height: 240px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 80px;
  }
  
  .feature-card {
    padding: 35px 25px;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .application-item {
    padding: 30px 20px;
  }
  
  .product-title {
    font-size: 2.2rem;
    line-height: 1.2;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  
  .product-contact {
    padding: 50px 30px;
    margin: 80px 0;
  }
  
  .contact-content h2 {
    font-size: 2.2rem;
  }
  
  .product-specifications {
    padding: 30px 20px;
    margin-bottom: 80px;
  }
  
  /* 表格移动端适配 */
  .spec-table {
    font-size: 0.9rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 15px 12px;
  }
  
  .spec-category-header,
  .spec-label-header,
  .spec-header {
    width: auto;
  }
  
  .spec-category {
    font-size: 0.85rem;
  }
  
  .btn {
    padding: 16px 32px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .product-hero {
    padding: 120px 0 60px;
  }
  
  .product-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.9rem;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .product-contact {
    padding: 40px 20px;
  }
  
  .contact-content h2 {
    font-size: 1.9rem;
  }
  
  .spec-table {
    font-size: 0.8rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 12px 10px;
  }
}
</style>