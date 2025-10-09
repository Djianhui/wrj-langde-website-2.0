<template>
  <div class="product-detail-page page-content">
    <!-- 产品头部 -->
    <div class="product-hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="breadcrumb">
          <RouterLink to="/">首页</RouterLink>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <RouterLink to="/technology">产品中心</RouterLink>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>立体防控</span>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>干扰反制</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">固定式无人机反制设备</h1>
          <p class="product-subtitle">多频段定向宽带压制干扰能力，智能驱离和迫降解决方案</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/jamming-system.png" alt="固定式无人机反制设备" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>具有多个频段的定向宽带压制干扰能力，可自动对准入侵的“低慢小”无人机的遥控信号和GNSS导航信号进行压制干扰，达到驱离或者迫降的目的 </p>
          <p>可按频段灵活设置干扰，支持用户定义组合, 支持通过有线网络与探测设备联动使用</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
   <div class="specification-table">
  <div class="spec-row">
    <div class="spec-label">工作模式</div>
    <div class="spec-value">无线电干扰</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">工作频段</div>
    <div class="spec-value">900MHz、1.5GHz、2.4GHz、5.8GHz</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">干扰半径</div>
    <div class="spec-value">≥1000m城市环境<br>≥1500m空旷区域<br>(视机型/环境情况而定)</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">天线类型</div>
    <div class="spec-value">高增益全向天线</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">响应时间</div>
    <div class="spec-value">≤4s</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">发射功率</div>
    <div class="spec-value">≥450W</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">拓展功能</div>
    <div class="spec-value">可根据客户要求添加干扰频段<br>及功率，可集成无人机探测系<br>统且支持组网工作</div>
  </div>
</div>
      </div>
      
       <!-- 产品特点 -->
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="multi-frequency-jamming" :size="32" />
            </div>
            <h3>多频段同时压制</h3>
            <p> 确保压制无人机可能的遥控频段和导航信号</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="directional-jamming" :size="32" />
            </div>
            <h3>定向干扰</h3>
            <p>对周围其它方向的设备基本不受影响，附带杀伤小，可实现黑白名单干扰</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="frequency-customization" :size="32" />
            </div>
            <h3>多频段定制</h3>
            <p>可配置多个干扰频段，成本经济可行</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="all-weather-operation" :size="32" />
            </div>
            <h3>全天候全天时</h3>
            <p>不受雨雪雾霄影响，可实现 7*24小时 360°全方位实时干扰</p>
          </div>  
        </div>
      </div>
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="airport-security" :size="32" />
            </div>
            <span>机场安防</span>
          </div>
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="important-facilities" :size="32" />
            </div>
            <span>重要设施</span>
          </div>
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="border-protection" :size="32" />
            </div>
            <span>边境防护</span>
          </div>
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="area-monitoring" :size="32" />
            </div>
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
/* 现代化设计系统 */
.product-detail-page {
  padding-top: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="30" cy="30" r="30"/></g></svg>') repeat;
  opacity: 0.3;
  z-index: 1;
}

.product-hero .container {
  position: relative;
  z-index: 2;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  z-index: 5;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}

.breadcrumb a:hover {
  color: white;
}

.breadcrumb span {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.4);
}

.product-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.product-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.9;
  letter-spacing: 0.01em;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  margin: 100px 0;
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
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.product-image img:hover {
  transform: scale(1.02);
}

.product-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.product-info p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 32px;
  font-weight: 400;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  text-align: center;
  padding: 48px 32px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.95);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
  font-weight: 400;
  font-size: 1rem;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 100px;
}

.application-item {
  text-align: center;
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}

.app-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100());
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

.application-item span {
  font-weight: 600;
  color: #1e293b;
  font-size: 1rem;
}

.product-specifications {
  margin-bottom: 100px;
}

.spec-note {
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 40px;
  font-style: italic;
  font-weight: 400;
}

.specification-table {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid rgba(226, 232, 240, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-row:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  transform: translateX(4px);
}

.spec-label {
  padding: 20px 24px;
  font-weight: 600;
  color: #374151;
  background: rgba(248, 250, 252, 0.8);
  border-right: 1px solid rgba(226, 232, 240, 0.3);
  font-size: 0.95rem;
}

.spec-value {
  padding: 20px 24px;
  color: #1e293b;
  font-weight: 500;
  font-size: 0.95rem;
}

.product-contact {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 32px;
  padding: 80px 60px;
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
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="30"/></g></svg>') repeat;
  opacity: 0.3;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.contact-content p {
  font-size: 1.125rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: white;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .product-overview {
    gap: 60px;
  }
  
  .features-grid {
    gap: 30px;
  }
  
  .applications-grid {
    gap: 24px;
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
    gap: 40px;
    margin: 60px 0;
  }
  
  .product-image img {
    width: 280px;
    height: 240px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .feature-card {
    padding: 32px 24px;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .application-item {
    padding: 24px 16px;
  }
  
  .product-contact {
    padding: 60px 32px;
    border-radius: 24px;
  }
  
  .contact-content h2 {
    font-size: 2rem;
  }
  
  .specification-table {
    margin: 0 -16px;
    border-radius: 16px;
  }
  
  .spec-row {
    grid-template-columns: 1fr;
  }
  
  .spec-label {
    border-right: none;
    border-bottom: 1px solid rgba(226, 232, 240, 0.3);
    background: rgba(59, 130, 246, 0.1);
    font-weight: 600;
  }
  
  .spec-value {
    padding-top: 12px;
  }
}

@media (max-width: 480px) {
  .product-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
  }
  
  .feature-icon {
    width: 64px;
    height: 64px;
  }
  
  .app-icon {
    width: 48px;
    height: 48px;
  }
  
  .feature-card h3 {
    font-size: 1.2rem;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>