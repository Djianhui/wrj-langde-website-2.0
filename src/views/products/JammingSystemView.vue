<template>
  <div class="product-detail-page page-content">
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
          <h1 class="product-title">干扰反制系统</h1>
          <p class="product-subtitle">定向干扰与精准反制技术</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/jamming-system.jpg" alt="干扰反制系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>采用先进的定向干扰技术，对入侵无人机进行精准反制。系统具备多频段定向干扰、导航信号干扰屏蔽和定向能量聚焦打击能力。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
        <div class="specification-table">
          <div class="spec-row">
            <div class="spec-label">干扰距离</div>
            <div class="spec-value">1-3km</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">功率输出</div>
            <div class="spec-value">100W</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">频段覆盖</div>
            <div class="spec-value">2.4G/5.8G</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">干扰型式</div>
            <div class="spec-value">定向干扰</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">打击方式</div>
            <div class="spec-value">能量聚焦</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">反应时间</div>
            <div class="spec-value">≤ 3s</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作环境</div>
            <div class="spec-value">-20℃ ~ +60℃</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">防护等级</div>
            <div class="spec-value">IP65</div>
          </div>
        </div>
      </div>
      
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-wifi"></i>
            </div>
            <h3>信号干扰</h3>
            <p>多频段定向干扰，有效阻断无人机控制信号</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-location-arrow"></i>
            </div>
            <h3>GPS屏蔽</h3>
            <p>导航信号干扰屏蔽，迫使无人机失去定位</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3>精准打击</h3>
            <p>定向能量聚焦打击，确保干扰效果</p>
          </div>
        </div>
      </div>
      
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

const emit = defineEmits(['page-loaded'])

const handleImageError = (event) => {
  event.target.src = '/images/products/default-product.jpg'
}

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