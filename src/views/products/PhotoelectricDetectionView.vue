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
          <h1 class="product-title">光电探测设备</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/photoelectric-detection.png" alt="光电探测设备" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>光电跟踪设备内置高清可见光透雾网络摄像机加热成像摄像机加激光测距仪，内置智能目标检测与跟踪算法，实现白天、夜间、恶劣雾霾天气、夜间等全天候24小时不间断目标识别并跟踪。</p>
          <p>• 光电跟踪设备内置高清可见光透雾网络摄像机加热成像摄像机，内置智能目标检测与跟踪算法</p>
          <p>• 能对自动识别的目标（无人机）进行自动锁定和跟踪，也可通过雷达或者频谱来引导跟踪；</p>
          <p>• 集成先进的同步自动变焦和快速对焦算法，根据目标视场的大小，镜头快速变倍至指定倍数，同时聚焦至指定位置；</p>
          <p>• 选用高精度步进电机，提供多个高精度预置位和自学习轨迹，采用全数码控制，可任意迅速定位及连续追踪扫描。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
        <div class="specification-table">
          <table class="spec-table">
           
            <tbody>
              <tr>
                <td class="spec-label">侦测距离</td>
                <td colspan="3" class="spec-category">≥5KM</td>
              </tr>
              <tr>
                <td class="spec-label">侦测频段</td>
                <td colspan="3" class="spec-category">70MHZ-6000MHZ备注:其他频段可定制</td>
              </tr>
              <tr>
                <td class="spec-label">覆盖范围</td>
                <td colspan="3" class="spec-category">360°</td>
              </tr>
              <tr>
                <td class="spec-label">雷达探测距离</td>
                <td colspan="3" class="spec-category">≥50.0km (无人机)</td>
              </tr>
              <tr>
                <td class="spec-label"></td>
                <td colspan="3" class="spec-category">≥8.0km (行人)</td>
              </tr>
              <tr>
                <td class="spec-label"></td>
                <td colspan="3" class="spec-category">≥10.0km (车辆)</td>
              </tr>
              <tr>
                <td class="spec-label"></td>
                <td colspan="3" class="spec-category">≥15.0km (船只)</td>
              </tr>
              <tr>
                <td class="spec-label">探测条件</td>
                <td colspan="3" class="spec-category">在大气能见度≥20km，湿度≤50%RH，温差>6k的情况下，对0.3m*0.3m无人机目标</td>
              </tr>
              <tr>
                <td class="spec-label">光电探测距离</td>
                <td class="spec-cell">可见光探测距离 ≥5000m</td>
                <td class="spec-cell"></td>
                <td class="spec-cell">热像探测距离 ≥1500m</td>
              </tr>
              <tr>
                <td class="spec-label"></td>
                <td class="spec-cell">跟踪距离 ≥4000m</td>
                <td class="spec-cell">红外探测</td>
                <td class="spec-cell">跟踪距离 ≥1000m</td>
              </tr>
              <tr>
                <td class="spec-label"></td>
                <td class="spec-cell">识别距离 ≥3000m</td>
                <td class="spec-cell">识别距离 ≥1000m</td>
                <td class="spec-cell"></td>
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
            <h3>雷达+频谱+光电三级联动</h3>
            <p>探测系统由频谱侦测、雷达探测和光电跟踪组成，结合主动与被动探测手段有效互补，实现5 公里范围内的高效无人机监测与跟踪。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-thermometer-half"></i>
            </div>
            <h3>可连续工作</h3>
            <p>设备能够全天候持续监测打击和记录防区空域 ,即使在浓雾和雷雨等恶劣天气条件下也能保 持稳定运行。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>多级别管控</h3>
            <p>雷达探测、无线电侦测和光电跟踪可设置为多 级别联动处置模式，以确保灵活应对各种威胁。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>三位一体防御体系</h3>
            <p>系统集成了雷达探测、电磁频谱、光电监测等先进技术，形成强大的三位 一体防御体系。</p>
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
  margin-bottom: 20px;
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
  padding: 40px 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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

.spec-category {
  background-color: #f1f5f9 !important;
  font-weight: 600;
  color: #1e293b;
  font-size: 16px;
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