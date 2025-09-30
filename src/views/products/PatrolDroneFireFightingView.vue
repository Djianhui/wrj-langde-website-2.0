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
          <span>巡查防护</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">消防多旋翼无人机</h1>
          <p class="product-subtitle">充分发挥无人机机动灵活的特点，可与消防车辆高效配合，快速抵达并展开作业，构成“车机配合”的高效灭火体系。</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/fire-fighting.png" alt="消防多旋翼无人机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>它是一款专为现代消防救援任务设计的重型多旋翼无人机。它创新性地实现了与地面灭火剂供应系统的联动，可挂载最大50mm口径的专用水带，直击高层建筑火灾痛点，将灭火能力有效延伸至百米高空。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品参数</h2>
        <table class="spec-table">
          <tbody>
            <tr>
              <td class="spec-label">标准载荷</td>
              <td class="spec-value">50KG</td>
            </tr>
            <tr>
              <td class="spec-label">最大载荷</td>
              <td class="spec-value">100KG</td>
            </tr>
            <tr>
              <td class="spec-label">作业/遥控半径</td>
              <td class="spec-value">5km</td>
            </tr>
            <tr>
              <td class="spec-label">最大飞行时间</td>
              <td class="spec-value">30min</td>
            </tr>
            <tr>
              <td class="spec-label">最大起飞重量</td>
              <td class="spec-value">150kg</td>
            </tr>
            <tr>
              <td class="spec-label">电池配置</td>
              <td class="spec-value">28000mAh * 4</td>
            </tr>
            <tr>
              <td class="spec-label">整机重量</td>
              <td class="spec-value">65kg</td>
            </tr>
            <tr>
              <td class="spec-label">展开尺寸</td>
              <td class="spec-value">2324mm / 4324mm（不同状态）</td>
            </tr>
            <tr>
              <td class="spec-label">破窗能力</td>
              <td class="spec-value">12-10A-12mm中型钢化玻璃</td>
            </tr>
            <tr>
              <td class="spec-label">伦置设备</td>
              <td class="spec-value">10倘三轴万向云台系统</td>
            </tr>
            <tr>
              <td class="spec-label">腘准系统</td>
              <td class="spec-value">1000mW高功率激光瞄准器</td>
            </tr>
          </tbody>
        </table>
        <div class="spec-note">
          <p><strong>注意事项：</strong>本产品为专业级消防无人机，适用于高层建筑火灾救援、突发火情处置等任务场景。</p>
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
            <h3>极速爬升，高效灭火</h3>
            <p>具备强大的动力性能，可在8秒内爬升100米，迅速抵达着火窗口等关键位置，实现对高层/超高层火灾的快速压制，弥补了传统举高消防装备的不足。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-route"></i>
            </div>
            <h3>车机联动，持续作战</h3>
            <p>通过专用水带连接地面消防车或固定灭火剂供应源，突破了无人机自带载荷的限制，可实现长时间、大流量的持续灭火作业，标准载荷50KG，最大载荷可达100KG。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-virus"></i>
            </div>
            <h3>实战验证，安全可靠</h3>
            <p>经过多种火场环境的实战考验，水带作业端配备脱钩保险装置，确保紧急情况下能快速脱离，保障飞行器安全。专用控制系统针对火场复杂环境优化，使作业更安全、更简单。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-battery-full"></i>
            </div>
            <h3>机动灵活，部署快捷</h3>
            <p>充分发挥无人机机动灵活的特点，整机重量65kg，可与消防车辆高效配合，快速抵达并展开作业，构成“车机配合”的高效灭火体系。</p>
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