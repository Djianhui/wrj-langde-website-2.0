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
          <span>一体化防御</span>
       
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">固定式无人机侦测设备</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/integrated.png" alt="固定式无人机侦测设备" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>固定式无人机侦测设备，专为现代空域 安全设计，融合先进无线电与AI技术。其优势在于自主研发喇 叭状天线，搭配高性能组件，实现70MHz-6GHz宽频精准监 测，覆盖各类无人机信号。借助智能算法与庞大数据库，设 备能深度识别超过400种无人机，确保在复杂环境中仍能进行 超广范围、高精度监测，广泛应用于各类安全监管场景</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
            <div class="specification-table">
        <div class="spec-row">
          <div class="spec-label">工作模式</div>
          <div class="spec-value">无线电接收</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">工作频段</div>
          <div class="spec-value">70MHz~6GHz</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">探测半径</div>
          <div class="spec-value">≥5000m</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">识别半径距离</div>
          <div class="spec-value">≥5000米，能识别无人机品牌和型号</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">探测角度</div>
          <div class="spec-value">360°</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">探测角度精度误差（均方根）</div>
          <div class="spec-value">距离5km或以上 ≤ 1°</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">无人机无线电拦截响应时间</div>
          <div class="spec-value">≤2s</div>
        </div>
        <div class="spec-row">
          <div class="spec-label">最低探测高度</div>
          <div class="spec-value">≤0m</div>
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
            <h3>侦测距离远、精度高</h3>
            <p>设备采用全向360°无死角探测，侦测半径距离 可达5km，探测范围超广搭配自主研发低噪放和腔体滤波器，有效降低 信号接收中的噪声干扰，确保信号的纯净度与 强度，从而提升整体系统的灵敏度和准确性。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-thermometer-half"></i>
            </div>
            <h3>自学习特征数据库</h3>
            <p>系统可自动分析目标信号参数，使用样本库自 动识别无人机品牌和型号，并建立电子指纹档 案库，供后续报警使用。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>多目标定位侧向</h3>
            <p>可实现对多台无人机同时进行测向，并将多目 标的无人机角度在地图上同时显示</p>
          </div>
           <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>ADS-B监视技术</h3>
            <p>设备够接收并解码附近无人机通过ADS-B系统 广播的实时信息。信息包含无人机的身份识别 、位置、高度、速度、航向和垂直速度等数据</p>
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

.spec-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s ease;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-row:hover {
  background-color: #f8fafc;
}

.spec-header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  font-weight: 600;
}

.spec-header:hover {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.spec-label {
  padding: 15px 20px;
  font-weight: 500;
  color: #374151;
  background-color: #f8fafc;
  border-right: 1px solid #e2e8f0;
}

.spec-header .spec-label {
  background: transparent;
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.spec-value {
  padding: 15px 20px;
  color: #1e293b;
  font-weight: 400;
}

.spec-header .spec-value {
  color: white;
  font-weight: 600;
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
  }
  
  .spec-row {
    grid-template-columns: 1fr;
  }
  
  .spec-label {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
    font-weight: 600;
    background-color: #f1f5f9;
  }
  
  .spec-header .spec-label {
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .spec-value {
    padding-top: 10px;
  }
}
</style>