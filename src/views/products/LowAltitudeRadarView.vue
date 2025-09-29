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
          <span>立体防控</span>
          <span>/</span>
          <span>侦探感知</span>
          <span>/</span>
          <span>雷达探测</span>
       
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">低空安防雷达</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/low-altitude-radar.png" alt="低空安防雷达" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>监测设备主要用于边境、机场、 军事基地等重点区域内无人机的探测、警戒和目标指示 ,能够准确的给出目标的航迹信息。高实时灵敏度目标 实时探测，及时跟踪显示能力。用于低慢小飞行器探测 的雷达一般称为低空警戒雷达。具备全天候全天时工作 能力，适应夜晚、雨雪、雾霾、扬尘等恶劣环境。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
            <div class="product-specifications">
              <h2 class="section-title">产品规格</h2>
              <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
              <div class="specification-table">
                <table class="spec-table">
                  <thead>
                    <tr>
                      <th class="spec-label-header">产品名称</th>
                      <th class="spec-header">C波段</th>
                      <th class="spec-header">X波段</th>
                      <th class="spec-header">S波段</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="spec-label">工作体制</td>
                      <td colspan="3" class="spec-category">相控阵体制(方位相扫)</td>
                    </tr>
                    <tr>
                      <td class="spec-label">工作频段</td>
                      <td class="spec-cell">C波段</td>
                      <td class="spec-cell">X波段</td>
                      <td class="spec-cell">S波段</td>
                    </tr>
                    <tr>
                      <td class="spec-label">探测威力</td>
                      <td class="spec-cell">100m~1.5km(无人机)</td>
                      <td class="spec-cell">100m~2.0km(无人机)</td>
                      <td class="spec-cell">150m~5.0km(无人机)</td>
                    </tr>
                    <tr>
                      <td class="spec-label">方位覆盖</td>
                      <td colspan="3" class="spec-category">0°~360°</td>
                    </tr>
                    <tr>
                      <td class="spec-label">仰角覆盖</td>
                      <td class="spec-cell">0°~30°</td>
                      <td class="spec-cell">0°~40°</td>
                      <td class="spec-cell">0°~40°</td>
                    </tr>
                    <tr>
                      <td class="spec-label">探测速度</td>
                      <td class="spec-cell">0.5m/s~30m/s</td>
                      <td class="spec-cell">0.5m/s~30m/s</td>
                      <td class="spec-cell">0.5m/s~45m/s</td>
                    </tr>
                    <tr>
                      <td class="spec-label">方位精度</td>
                      <td colspan="3" class="spec-category">≤1.0°</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      
      <!-- 产品特点 -->
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-camera"></i>
            </div>
            <h3>采用先进的DBF技术</h3>
            <p>可发射多波束技术可以提高 抗干扰能力，雷达视频融合无盲区主动立体防 御。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-thermometer-half"></i>
            </div>
            <h3>可选C、X、S波段</h3>
            <p> 根据不同场景可选择C波段、X波段、S波段等 配置，来满足使用需求。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>多目标检测</h3>
            <p>同时监测多达上百批目标，架设方便，灵活性 高。</p>
          </div>
           <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>监测距离远</h3>
            <p>对于无人机有效探测距离可达100m~2.0km，距 离远，是一种原理先进的传感器，在陆海空领 域都有非常广泛的应用</p>
          </div>
        </div>
      </div>
      
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <i class="fas fa-moon"></i>
            <span>夜间监控</span>
          </div>
          <div class="application-item">
            <i class="fas fa-building"></i>
            <span>城市安防</span>
          </div>
          <div class="application-item">
            <i class="fas fa-eye"></i>
            <span>目标跟踪</span>
          </div>
          <div class="application-item">
            <i class="fas fa-video"></i>
            <span>实时监控</span>
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
/* 复用RadarDetectionView.vue的样式 */
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
  width: 416px;
  height: 416px;
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

.product-specs h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #1e293b;
}

.specs-grid {
  display: grid;
  gap: 15px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.spec-label {
  font-weight: 500;
  color: #374151;
}

.spec-value {
  font-weight: 600;
  color: #4facfe;
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

.spec-note {
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 30px;
  font-style: italic;
}

.specification-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}

.spec-label-header {
  background: #f8f9fa;
  color: #374151;
  padding: 20px 15px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  border: 1px solid #dee2e6;
}

.spec-table thead th {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 20px 15px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  border: 1px solid #dee2e6;
}

.spec-label {
  background-color: #f8f9fa;
  color: #374151;
  padding: 15px;
  font-weight: 600;
  text-align: center;
  border: 1px solid #dee2e6;
  font-size: 15px;
}

.spec-table tbody td {
  padding: 15px;
  text-align: center;
  border: 1px solid #dee2e6;
  transition: background-color 0.2s ease;
}

.spec-table tbody tr:nth-child(even) .spec-cell {
  background-color: #f8f9fa;
}

.spec-table tbody tr:hover .spec-cell {
  background-color: #e3f2fd;
}

.spec-table tbody tr:hover .spec-label {
  background-color: #e8f5e8;
}

.spec-cell {
  color: #374151;
  font-size: 15px;
  font-weight: 500;
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
  
  .specification-table {
    margin: 0 -10px;
    overflow-x: auto;
  }
  
  .spec-table {
    min-width: 700px;
  }
  
  .spec-label-header,
  .spec-table thead th {
    padding: 12px 8px;
    font-size: 14px;
  }
  
  .spec-label,
  .spec-table tbody td {
    padding: 10px 6px;
    font-size: 13px;
  }
}
</style>