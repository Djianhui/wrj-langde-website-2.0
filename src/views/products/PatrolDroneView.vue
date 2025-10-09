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
          <span>低空经济</span>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>巡查防护</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">巡查矢量多旋翼无人机</h1>
          <p class="product-subtitle">专为复杂环境下的高效巡查任务而设计</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/patrol-drone.png" alt="巡查矢量多旋翼无人机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>它是一款革命性的矢量多旋翼无人机，凭借其独特的倾转机构与先进控制算法，打破了传统无人机的机动性限制。它集超高机动、全自主飞行与多功能光电侦察于一体，专为复杂环境下的高效巡查任务而设计。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品参数</h2>
        <table class="spec-table">
          <tbody>
            <tr>
              <td class="spec-label">机型</td>
              <td class="spec-value">矢量多轴</td>
            </tr>
            <tr>
              <td class="spec-label">携行尺寸</td>
              <td class="spec-value">950*380*200mm</td>
            </tr>
            <tr>
              <td class="spec-label">携行重量</td>
              <td class="spec-value">≤3kg</td>
            </tr>
            <tr>
              <td class="spec-label">最大载荷重量</td>
              <td class="spec-value">5kg</td>
            </tr>
            <tr>
              <td class="spec-label">最大起飞重量</td>
              <td class="spec-value">19kg</td>
            </tr>
            <tr>
              <td class="spec-label">最大平飞速度</td>
              <td class="spec-value">≥100km/h</td>
            </tr>
            <tr>
              <td class="spec-label">巡航速度</td>
              <td class="spec-value">72km/h</td>
            </tr>
            <tr>
              <td class="spec-label">续航时间</td>
              <td class="spec-value">40min</td>
            </tr>
            <tr>
              <td class="spec-label">任务半径</td>
              <td class="spec-value">10km</td>
            </tr>
            <tr>
              <td class="spec-label">抗风等级</td>
              <td class="spec-value">8级</td>
            </tr>
            <tr>
              <td class="spec-label">最少操作人数</td>
              <td class="spec-value">1人</td>
            </tr>
            <tr>
              <td class="spec-label">工作温度</td>
              <td class="spec-value">-25~50°C</td>
            </tr>
          </tbody>
        </table>
        <div class="spec-note">
          <p><strong>注意事项：</strong>本产品为专业级巡查防护无人机，适用于安防巡逻、环境监测等任务场景。</p>
        </div>
      </div>
      
       <!-- 产品特点 -->
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="vector-mobility" :size="32" />
            </div>
            <h3>全向倾转，超高机动</h3>
            <p>独特的矢量动力设计，使其能够实现前后、左右全向倾转飞行，机动性远超常规机型。加速性能卓越，6秒内即可突破100公里/小时，迅速抵达任务空域。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="compact-portable" :size="32" />
            </div>
            <h3>紧凑便携，快速部署</h3>
            <p>机体设计精巧，携行尺寸仅为950*380*200mm，携行重量≤23kg，支持单人携行与快速部署，满足野外机动作业需求。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="day-night-patrol" :size="32" />
            </div>
            <h3>昼夜全天候巡查</h3>
            <p>集成双可见光、红外热成像及激光测距仪的光电载荷，赋予其强大的昼夜观测、温度感知与目标定位能力，无论白昼黑夜，洞察力始终在线。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="autonomous-flight" :size="32" />
            </div>
            <h3>全自主智能飞行</h3>
            <p>具备全自主飞行与作业能力，操作简便。系统能根据预设任务规划，自动完成数据采集与飞行作业，显著提升效率并降低操作门槛。</p>
          </div>  
        </div>
      </div>
      
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="security-patrol" :size="32" />
            </div>
            <span>安防巡逻</span>
          </div>
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="environmental-monitoring" :size="32" />
            </div>
            <span>环境监测</span>
          </div>
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="infrastructure-inspection" :size="32" />
            </div>
            <span>基础设施巡检</span>
          </div>
          <div class="application-item">
            <div class="app-icon">
              <CustomIcons name="emergency-response" :size="32" />
            </div>
            <span>应急响应</span>
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
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  font-weight: 500;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
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
  width: 420px;
  height: auto;
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
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
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

/* 产品参数表格样式 */
.spec-table {
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-collapse: collapse;
}

.spec-table th,
.spec-table td {
  padding: 20px 24px;
  text-align: left;
  border-bottom: 1px solid rgba(226, 232, 240, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-table thead th {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
}

.spec-label {
  font-weight: 600;
  color: #374151;
  background: rgba(248, 250, 252, 0.8);
  border-right: 1px solid rgba(226, 232, 240, 0.3);
  font-size: 0.95rem;
}

.spec-value {
  color: #1e293b;
  font-weight: 500;
  font-size: 0.95rem;
}

.spec-table tbody tr:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  transform: translateX(4px);
}

.spec-table tbody tr:last-child td {
  border-bottom: none;
}

.spec-note {
  margin-top: 32px;
  padding: 20px 24px;
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.3);
  color: #64748b;
  font-size: 0.95rem;
}

.spec-note p {
  margin: 0;
  text-align: center;
  font-weight: 500;
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
  
  /* 表格移动端适配 */
  .spec-table {
    font-size: 0.9rem;
    margin: 0 -16px;
    border-radius: 16px;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 12px 15px;
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
  
  .spec-table {
    font-size: 0.8rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 10px 12px;
  }
}
</style>