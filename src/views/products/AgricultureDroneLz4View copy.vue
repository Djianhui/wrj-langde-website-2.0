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
              <i class="fas fa-crosshairs"></i>
            </div>
            <h3>效果显著</h3>
            <p>高杆作物也能打透。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-route"></i>
            </div>
            <h3>效率革新</h3>
            <p>8米大喷幅。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-virus"></i>
            </div>
            <h3>效益为王</h3>
            <p>万亩飞防,一周搞定。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-battery-full"></i>
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
            <i class="fas fa-seedling"></i>
            <span>大田作物</span>
          </div>
          <div class="application-item">
            <i class="fas fa-apple-alt"></i>
            <span>果园管理</span>
          </div>
          <div class="application-item">
            <i class="fas fa-carrot"></i>
            <span>蔬菜种植</span>
          </div>
          <div class="application-item">
            <i class="fas fa-leaf"></i>
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
.product-detail-page {
  padding-top: 0;
}

.product-hero {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  padding: 150px 0 80px;
  color: white;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: white;
}

.breadcrumb span {
  margin: 0 10px;
  color: rgba(255, 255, 255, 0.5);
}

.product-title {
  font-size: 3rem;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  width: 420px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  object-position: center;
}

.product-info h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1e293b;
}

.product-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 30px;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 50px;
  color: #1e293b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 80px;
}

.feature-card {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  color: white;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1e293b;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 80px;
}

.application-item {
  text-align: center;
  padding: 30px 20px;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.application-item:hover {
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.application-item i {
  font-size: 2.5rem;
  color: #4facfe;
  margin-bottom: 15px;
  display: block;
}

.application-item span {
  font-weight: 600;
  color: #1e293b;
}

.product-specifications {
  margin-bottom: 80px;
}

/* 产品参数表格样式 */
.spec-table {
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  border-collapse: collapse;
}

.spec-table th,
.spec-table td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.spec-table thead th {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  font-weight: 600;
  text-align: center;
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
  background-color: #f8fafc;
  font-weight: 600;
  color: #374151;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid #e2e8f0;
}

.spec-label {
  font-weight: 500;
  color: #374151;
  background-color: #f1f5f9;
  border-right: 1px solid #e2e8f0;
}

.spec-value {
  color: #1e293b;
  font-weight: 400;
}

.spec-table tbody tr:hover {
  background-color: rgba(79, 172, 254, 0.05);
}

.spec-table tbody tr:last-child td {
  border-bottom: none;
}

.spec-note {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
}

.spec-note p {
  margin: 0;
  text-align: center;
}

.product-contact {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
  color: white;
  margin: 80px 0;
}

.contact-content h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.contact-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(79, 172, 254, 0.4);
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .product-image img {
    width: 280px;
    height: 240px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .product-title {
    font-size: 2rem;
  }
  
  .product-contact {
    padding: 40px 20px;
  }
  
  /* 表格移动端适配 */
  .spec-table {
    font-size: 0.9rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 12px 15px;
  }
  
  .spec-category-header,
  .spec-label-header,
  .spec-header {
    width: auto;
  }
  
  .spec-category {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .spec-table {
    font-size: 0.8rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 10px 12px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>