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
          <span>侦探感知</span>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>雷达探测</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">近海安防雷达监测设备</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/fixed-detector.png" alt="近海安防雷达监测设备" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>近海安防雷达监测设备主要由单个独立的雷达 阵面组成，用于在近海和内河区域，监控船只的探测、 警戒和目标指示，能够准确的给出目标的航迹信息。独 特的产品设备优势为海域侦测提供安全保障。小巧便捷 架设方便、重量轻，操作轻松简单，是一款性比价非常 高的海上雷达侦测设备。</p>
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
                      <th class="spec-header">SZMD-JH501(A型)</th>
                      <th class="spec-header">SZMD-JH501(B型)</th>
                      <th class="spec-header">SZMD-JH501(C型)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="spec-label">工作体制</td>
                      <td class="spec-cell">C波段 相控阵体制(方位相扫)</td>
                      <td class="spec-cell">C波段 相控阵体制(方位相扫)</td>
                      <td class="spec-cell">C波段 相控阵体制(方位相扫)</td>
                    </tr>
                    <tr>
                      <td class="spec-label">探测威力</td>
                      <td class="spec-cell">30m~1.2km (船只)</td>
                      <td class="spec-cell">100m~3.0km (船只)</td>
                      <td class="spec-cell">100m~5.0km (船只)</td>
                    </tr>
                    <tr>
                      <td class="spec-label">方位覆盖</td>
                      <td class="spec-cell">≥90°</td>
                      <td class="spec-cell">90°/180°/270°/360°</td>
                      <td class="spec-cell">90°/180°/270°/360°</td>
                    </tr>
                    <tr>
                      <td class="spec-label">仰角覆盖</td>
                      <td class="spec-cell">≥18°</td>
                      <td class="spec-cell">≥18°</td>
                      <td class="spec-cell">≥18°</td>
                    </tr>
                    <tr>
                      <td class="spec-label">探测速度</td>
                      <td class="spec-cell">0.5m/s~30m/s</td>
                      <td class="spec-cell">0.5m/s~30m/s</td>
                      <td class="spec-cell">0.5m/s~35m/s</td>
                    </tr>
                    <tr>
                      <td class="spec-label">方位精度</td>
                      <td class="spec-cell">≤1.0°</td>
                      <td class="spec-cell">≤1.0°</td>
                      <td class="spec-cell">≤1.0°</td>
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
              <CustomIcons name="long-distance-monitoring" :size="32" />
            </div>
            <h3>监测距离远</h3>
            <p>对于船只有效探测距离可达100m~5.0km，距离远， 是一种原理先进的传感器， 在近海领域都有非常广泛的应用。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="video-evidence" :size="32" />
            </div>
            <h3>录像取证</h3>
            <p>架设方便、重量轻、操作简单，执法过程录像取证系统记录入侵目标的视频和入侵轨迹。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="environmental-adaptation" :size="32" />
            </div>
            <h3>环境适应性强</h3>
            <p>可在恶劣天气下工作， 全天候运行， 可按照预案设置智能工作。</p>
          </div>
           <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="high-convenience" :size="32" />
            </div>
            <h3>便捷性更高</h3>
            <p>便携、重量轻、体积小;  对架设环境要求较低可在灯杆或原有基建上进行安装，节约资源。</p>
          </div>
        </div>
      </div>
      
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <CustomIcons name="night-vision" :size="40" />
            <span>夜间监控</span>
          </div>
          <div class="application-item">
            <CustomIcons name="urban-security" :size="40" />
            <span>城市安防</span>
          </div>
          <div class="application-item">
            <CustomIcons name="target-tracking" :size="40" />
            <span>目标跟踪</span>
          </div>
          <div class="application-item">
            <CustomIcons name="real-time-monitoring" :size="40" />
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
/* 现代化产品详情页基础样式 */
.product-detail-page {
  padding-top: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 现代化产品头部 */
.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
}

.product-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%23ffffff15"/></svg>');
  background-size: 30px 30px;
  opacity: 0.3;
  animation: particleMove 60s linear infinite;
}

@keyframes particleMove {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.breadcrumb a:hover {
  color: white;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
}

.breadcrumb span {
  margin: 0 10px;
  color: rgba(255, 255, 255, 0.5);
}

.product-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
}

.product-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 2;
}

/* 现代化产品概述区域 */
.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  margin: 100px 0;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.7);
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
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 24px;
  z-index: -1;
}

.product-image img {
  width: 416px;
  height: 416px;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.15);
  object-fit: cover;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image:hover img {
  transform: scale(1.05);
  box-shadow: 0 35px 70px rgba(59, 130, 246, 0.2);
}

.product-info h2 {
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: -0.01em;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-info p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 30px;
  font-weight: 400;
}

/* 现代化章节标题 */
.section-title {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 60px;
  color: #1e293b;
  font-weight: 800;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

/* 现代化特点和应用场景区域 */
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
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.7);
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
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 80px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.4);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #1e293b;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #64748b;
  line-height: 1.7;
  font-size: 1.1rem;
  font-weight: 400;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.application-item {
  text-align: center;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.12);
  transform: translateY(-8px);
}

.application-item i {
  font-size: 3rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  display: block;
}

.application-item span {
  font-weight: 600;
  color: #1e293b;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

/* 现代化产品规格和联系区域 */
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
  margin-bottom: 30px;
  font-style: italic;
  font-weight: 500;
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
  font-family: 'Inter', sans-serif;
}

.spec-label-header {
  background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
  color: #3730a3;
  padding: 20px 15px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  border: 1px solid rgba(226, 232, 240, 0.8);
  letter-spacing: -0.01em;
}

.spec-table thead th {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 20px 15px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  border: 1px solid rgba(226, 232, 240, 0.8);
  letter-spacing: -0.01em;
}

.spec-label {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #1e293b;
  padding: 15px;
  font-weight: 600;
  text-align: center;
  border: 1px solid rgba(226, 232, 240, 0.8);
  font-size: 15px;
}

.spec-table tbody td {
  padding: 15px;
  text-align: center;
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-table tbody tr:hover {
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
  background: rgba(248, 250, 252, 0.5);
}

.spec-table tbody tr:nth-child(even) .spec-cell {
  background: rgba(241, 245, 249, 0.5);
}

.spec-table tbody tr:hover .spec-cell {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  color: #1e40af;
}

.product-contact {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  padding: 80px 60px;
  text-align: center;
  color: white;
  margin: 100px 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
}

.product-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%23ffffff15"/></svg>');
  background-size: 30px 30px;
  opacity: 0.3;
}

.contact-content {
  position: relative;
  z-index: 2;
}

.contact-content h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-content p {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 40px;
  font-weight: 400;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  color: #3b82f6;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.3);
  color: #3b82f6;
  text-decoration: none;
  background: rgba(255, 255, 255, 1);
}

/* 自定义图标样式 */
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

/* 现代化响应式设计 */
@media (max-width: 1200px) {
  .product-overview {
    gap: 60px;
    padding: 50px;
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
    gap: 50px;
    padding: 40px 30px;
    margin: 60px 0;
  }
  
  .product-image img {
    width: 300px;
    height: 300px;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
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

@media (max-width: 480px) {
  .product-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .product-contact {
    padding: 40px 20px;
  }
}
</style>