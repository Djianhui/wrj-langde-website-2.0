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
          <span>光电识别</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">光电识别系统</h1>
          <p class="product-subtitle">可见光与红外双光谱识别技术</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/optical-detection.jpg" alt="光电识别系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>采用先进的光电成像技术，实现对无人机的视觉识别和分类。系统集成4K超高清光电成像、热成像夜视探测和智能目标识别算法。</p>
          
          <div class="product-specs">
            <h3>技术规格</h3>
            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-label">视野范围</span>
                <span class="spec-value">360°全景</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">变焦倍数</span>
                <span class="spec-value">30倍光学变焦</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">识别精度</span>
                <span class="spec-value">≥96%</span>
              </div>
            </div>
          </div>
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
            <h3>高清成像</h3>
            <p>4K超高清光电成像，提供清晰的目标图像</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-thermometer-half"></i>
            </div>
            <h3>红外探测</h3>
            <p>热成像夜视探测能力，全天候监控</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>AI识别</h3>
            <p>智能目标识别算法，准确分类目标</p>
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
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
}

.product-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
  grid-template-columns: repeat(3, 1fr);
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
}
</style>