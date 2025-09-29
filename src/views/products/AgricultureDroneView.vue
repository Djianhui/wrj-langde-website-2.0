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
          <h1 class="product-title">农业植保无人机</h1>
          <p class="product-subtitle">智慧农业精准作业解决方案</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/agriculture-drone.jpg" alt="农业植保无人机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>农业植保无人机是专为现代农业精准作业设计的智能化飞行平台。采用先进的飞控系统和精准喷洒技术，能够在复杂农田环境中实现自主飞行和精确药剂喷洒，大幅提升农业生产效率，降低人工成本和农药使用量。</p>
          <p>产品集成了GPS导航、图像识别、智能避障等多项先进技术，支持地面站规划飞行路径，可实现厘米级精度的定点喷洒。同时具备强大的环境适应性和作业稳定性，是推进农业现代化和智慧农业发展的重要工具。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
        <div class="specification-table">
          <div class="spec-row">
            <div class="spec-label">最大起飞重量</div>
            <div class="spec-value">42kg</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">载重能力</div>
            <div class="spec-value">20L</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">续航时间</div>
            <div class="spec-value">45分钟（空载）</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">飞行速度</div>
            <div class="spec-value">0-15m/s</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">喷洒幅宽</div>
            <div class="spec-value">6-8米</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">喷洒流量</div>
            <div class="spec-value">0.5-8L/min</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">作业效率</div>
            <div class="spec-value">120-150亩/小时</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">喷洒精度</div>
            <div class="spec-value">±5%</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作温度</div>
            <div class="spec-value">-10℃ ~ +50℃</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">抗风能力</div>
            <div class="spec-value">6级风</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">防护等级</div>
            <div class="spec-value">IP56</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">定位精度</div>
            <div class="spec-value">±2.5cm（RTK）</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">控制距离</div>
            <div class="spec-value">≥ 5km</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">图传距离</div>
            <div class="spec-value">≥ 3km</div>
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
            <h3>精准喷洒技术</h3>
            <p>采用变量喷洒技术，根据作物需求精准控制药剂用量，减少浪费，提高药效</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-route"></i>
            </div>
            <h3>智能路径规划</h3>
            <p>自动生成最优飞行路径，支持地块分割和断点续喷，确保全覆盖无遗漏</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-virus"></i>
            </div>
            <h3>智能避障系统</h3>
            <p>配备多传感器避障系统，自动识别障碍物并规避，确保飞行安全</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-battery-full"></i>
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
  width: 320px;
  height: 550px;
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