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
          <span>干扰反制</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">固定式无人机反制设备</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/fixed-countermeasures.png" alt="固定式无人机反制设备" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>固定式无人机反制设备采用高增益全向    射频干扰技术，可覆盖20MHz~6GHz的全频段，频段可自 由编写，适用于更多无人机机型。发现可疑目标后，发射 大功率射频干扰信号，瘫痪无人机的卫星导航、无线遥控 及无线图传链路，迫使无人机原地悬停、降落或原路返回</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
            <div class="specification-table">
              <div class="spec-row">
                <div class="spec-label">工作模式</div>
                <div class="spec-value">无线电扫频干扰</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">工作频段</div>
                <div class="spec-value">20MHz ~ 6GHz</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">干扰半径</div>
                <div class="spec-value">城市环境≥1000m<br>空旷区域≥3000m（无人机反制）</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">天线类型</div>
                <div class="spec-value">高增益全向 8 通道</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">干扰方向</div>
                <div class="spec-value">360°</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">干扰模式</div>
                <div class="spec-value">全数字信号源合成干扰源技术</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">发射功率</div>
                <div class="spec-value">≥450W</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">电源适应性</div>
                <div class="spec-value">AC220V市电<br>或增加内置电池DC24-28V</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">拓展功能</div>
                <div class="spec-value">可增加单通道功率，可集成频谱探测设备且支持组网工作</div>
              </div>
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
            <h3>20MHz~6GHz全频覆盖</h3>
            <p> 配备高增益全向天线系统，采用全频段干扰方 式，覆盖20MHz~6GHz，且频段可自由编写， 覆盖95%无人机机型。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3>干扰距离远</h3>
            <p>在平地无遮挡空旷区域干扰半径距离可达3公里， 城市环境干扰半径距离可达1公里。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>一机多用</h3>
            <p>可单独做无人机打击设备，亦可做排爆干扰仪、 信号屏蔽器、对讲机屏蔽器使用。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>可扩展性强</h3>
            <p>设备可根据客户需求定制多模块、定制单通道 功率，可集成无人机探测系统，实现无人机侦 测反制一体化，支持设备组网工作。</p>
          </div>  
        </div>
      </div>
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <i class="fas fa-plane"></i>
            <span>机场安防</span>
          </div>
          <div class="application-item">
            <i class="fas fa-building"></i>
            <span>重要设施</span>
          </div>
          <div class="application-item">
            <i class="fas fa-shield-alt"></i>
            <span>边境防护</span>
          </div>
          <div class="application-item">
            <i class="fas fa-eye"></i>
            <span>区域监控</span>
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