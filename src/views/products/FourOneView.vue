<template>
  <div class="product-detail-page page-content">
    <!-- 产品头部 -->
    <div class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <RouterLink to="/">首页</RouterLink>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <RouterLink to="/technology">产品中心</RouterLink>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>立体防控</span>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>一体化防御</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">四位一体无人机立体防御系统</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/four-one.png" alt="四位一体无人机立体防御系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>无人机立体防御系统是针对低空安全威胁的综 合解决方案，集成了雷达探测、电磁干扰、导航诱骗以及外置 频谱监测等先进技术，形成强大的四位一体防御体系。系统可自动识别并追踪入侵多旋翼无人机，运用智能分析与雷 达准确定位。针对威胁，系统灵活采取电磁干扰或发射微功率 伪卫星信号策略，迫使无人机偏离航线，飞离防护区外，从而 保护敏感区域和重大活动的低空安全，实现全方位防护。</p>
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
                      <th class="spec-label-header">功能模块</th>
                      <th class="spec-header">技术参数</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- 雷达探测 -->
                    <tr>
                      <td rowspan="4" class="spec-category">雷达探测</td>
                      <td class="spec-cell">工作频段：C 波段</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">雷达频率：5400MHz~5600MHz</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">探测距离：MAX: ≥1.5km, MIN: ≤100m</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">覆盖角度：方位覆盖360°,俯仰覆盖40°</td>
                    </tr>
                    
                    <!-- 频谱侦测(可选) -->
                    <tr>
                      <td rowspan="3" class="spec-category">频谱侦测(可选)</td>
                      <td class="spec-cell">探测频段：70MHz~6GHz</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">探测角度：360°</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">探测距离：≥5km</td>
                    </tr>
                    
                    <!-- 无线电干扰 -->
                    <tr>
                      <td rowspan="2" class="spec-category">无线电干扰</td>
                      <td class="spec-cell">干扰频段：1550~1620MHz / 400~2500MHz / 5150~5850MHz</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">干扰半径：≥1.0km</td>
                    </tr>
                    
                    <!-- 导航诱骗 -->
                    <tr>
                      <td rowspan="3" class="spec-category">导航诱骗</td>
                      <td class="spec-cell">诱骗频段：GPS/GALILEO/GLONASS/北斗</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">诱骗距离：≥1.0km</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">诱骗方式：迫降、驱离</td>
                    </tr>
                    
                    <!-- 参数指标 -->
                    <tr>
                      <td rowspan="3" class="spec-category">参数指标</td>
                      <td class="spec-cell">电源电压：AC180V~250V</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">功　　率：≤100W(探测模式)、≤600W(反制模式)</td>
                    </tr>
                    <tr>
                      <td class="spec-cell">尺　　寸：585mm*585mm*1460mm</td>
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
              <CustomIcons name="defense-system" :size="32" />
            </div>
            <h3>四位一体防御体系</h3>
            <p> 系统集成了雷达探测、电磁干扰、导航诱骗以 及外置频谱监测等先进技术，形成强大的四位 一体防御体系。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="signal-isolation" :size="32" />
            </div>
            <h3>干扰信号隔离</h3>
            <p>自动隔离非安全的GPS  L1和BDS  B1信号，确保 授时设备正常工作。具有静态、动态用户轨迹 生成功能。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="continuous-work" :size="32" />
            </div>
            <h3>可连续工作</h3>
            <p>设备能够全天候持续监测打击和记录防区空域 ,即使在浓雾和雷雨等恶劣天气条件下也能保 持稳定运行。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="scalability" :size="32" />
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
            <CustomIcons name="airport-security" :size="40" />
            <span>机场安防</span>
          </div>
          <div class="application-item">
            <CustomIcons name="important-facilities" :size="40" />
            <span>重要设施</span>
          </div>
          <div class="application-item">
            <CustomIcons name="border-protection" :size="40" />
            <span>边境防护</span>
          </div>
          <div class="application-item">
            <CustomIcons name="area-monitoring" :size="40" />
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
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.product-detail-page {
  padding-top: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
}

.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
}

.product-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="40" r="0.3" fill="%23ffffff" opacity="0.08"/><circle cx="40" cy="80" r="0.4" fill="%23ffffff" opacity="0.12"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
  pointer-events: none;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.breadcrumb a:hover {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.breadcrumb span {
  margin: 0 12px;
  color: rgba(255, 255, 255, 0.6);
}

.product-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.product-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  position: relative;
  z-index: 1;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.product-image {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.product-image::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 20px;
  opacity: 0.1;
  z-index: -1;
}

.product-image img {
  width: 416px;
  height: 416px;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
  object-fit: cover;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image img:hover {
  transform: scale(1.02);
  box-shadow: 0 35px 80px rgba(59, 130, 246, 0.2);
}

.product-info h2 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.01em;
}

.product-info p {
  font-size: 1.15rem;
  line-height: 1.75;
  color: #475569;
  margin-bottom: 30px;
  font-weight: 400;
}

.section-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  text-align: center;
  padding: 50px 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 70px rgba(59, 130, 246, 0.15);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 400;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 100px;
}

.application-item {
  text-align: center;
  padding: 40px 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.application-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.application-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
  color: white;
}

.application-item:hover::before {
  opacity: 1;
}

.application-item i {
  font-size: 2.8rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  display: block;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover i {
  color: white;
  -webkit-text-fill-color: white;
  transform: scale(1.1);
}

.application-item span {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-icon .custom-icon {
  color: white;
}

.feature-icon .custom-icon svg {
  width: 100%;
  height: 100%;
}

.feature-icon .custom-icon svg * {
  stroke: white !important;
}

.feature-icon .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

.application-item .custom-icon {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover .custom-icon svg * {
  stroke: white !important;
  fill: currentColor !important;
}

.application-item:hover .custom-icon svg *[fill="none"] {
  fill: none !important;
}

.application-item:hover .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

.product-specifications {
  margin-bottom: 100px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}

.spec-label-header {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #1e293b;
  padding: 25px 20px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  border: 1px solid #e2e8f0;
  letter-spacing: -0.01em;
}

.spec-table thead th {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 25px 20px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  letter-spacing: -0.01em;
}

.spec-label {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #1e293b;
  padding: 20px 18px;
  font-weight: 700;
  text-align: center;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  width: 30%;
}

.spec-table tbody td {
  padding: 20px 18px;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-table tbody tr:nth-child(even) .spec-cell {
  background: linear-gradient(135deg, #f8fafc 0%, #f9fafb 100%);
}

.spec-table tbody tr:hover .spec-cell {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  transform: scale(1.01);
}

.spec-table tbody tr:hover .spec-label {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  color: #1e40af;
}

.spec-cell {
  color: #374151;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  padding-left: 25px;
  line-height: 1.6;
}

.spec-category {
  background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%) !important;
  font-weight: 700;
  color: #3730a3;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  letter-spacing: 0.05em;
}

.product-contact {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  padding: 70px 60px;
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>') repeat;
  pointer-events: none;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-content h2 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.contact-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  font-weight: 400;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 18px 40px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #3730a3;
  backdrop-filter: blur(20px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  color: #3730a3;
  text-decoration: none;
  background: white;
}

@media (max-width: 768px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 30px 20px;
    margin: 60px 0;
  }
  
  .product-image img {
    width: 280px;
    height: 240px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 80px;
  }
  
  .feature-card {
    padding: 35px 25px;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .application-item {
    padding: 30px 20px;
  }
  
  .product-title {
    font-size: 2.2rem;
    line-height: 1.2;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  
  .product-contact {
    padding: 50px 30px;
    margin: 80px 0;
  }
  
  .contact-content h2 {
    font-size: 2.2rem;
  }
  
  .product-specifications {
    padding: 30px 20px;
    margin-bottom: 80px;
  }
  
  .specification-table {
    margin: 0 -10px;
    overflow-x: auto;
  }
  
  .spec-table {
    min-width: 600px;
  }
  
  .spec-label-header,
  .spec-table thead th {
    padding: 15px 10px;
    font-size: 15px;
  }
  
  .spec-label,
  .spec-table tbody td {
    padding: 12px 8px;
    font-size: 14px;
  }
  
  .spec-cell {
    text-align: center;
    padding-left: 8px;
    font-size: 13px;
  }
  
  .btn {
    padding: 16px 32px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .product-hero {
    padding: 120px 0 60px;
  }
  
  .product-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.9rem;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .product-contact {
    padding: 40px 20px;
  }
  
  .contact-content h2 {
    font-size: 1.9rem;
  }
}
</style>