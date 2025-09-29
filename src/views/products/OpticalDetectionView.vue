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
          <img src="/images/products/optical.png" alt="光电识别系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>该光电跟踪装置内置高清可见光透雾网络摄像头加热成像摄像机，内置智能目标检测和跟踪算法，在可见光、低照度、恶劣雾霾天气和夜间实现24小时不间断的目标识别和跟踪。机身采用高强度减震合金压铸外壳，整体三防喷涂、隔热、耐高温耐寒、耐冲击、耐腐蚀，具有良好的抗风减震性能。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
       <div class="specification-table">
  <div class="spec-row">
    <div class="spec-label">最大分辨率</div>
    <div class="spec-value">1080P(1920x1080)</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">焦距</div>
    <div class="spec-value">6.5～312mm 48倍光学连续变焦</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">最低照度</div>
    <div class="spec-value">彩色:0.002Lux 黑白:0.0002Lux@(AGC ON)</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">透雾功能</div>
    <div class="spec-value">光学透雾、电子透雾</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">探测器类型</div>
    <div class="spec-value">非制冷氧化钒焦平面探测器</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">图像分辨率</div>
    <div class="spec-value">640x512, 热成像编码:1280x1024</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">热像镜头焦距</div>
    <div class="spec-value">75mm</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">视频压缩标准</div>
    <div class="spec-value">H.265 / H.264 / MJPEG</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">帧率</div>
    <div class="spec-value">25/30fps</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">OSD 字符叠加</div>
    <div class="spec-value">多区智能OSD，支持多行国标字符，字体大小、颜色、位置可自定义</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">转台旋转范围</div>
    <div class="spec-value">水平:0°～360°连续无限位旋转；垂直: -90°～+90°</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">预置位</div>
    <div class="spec-value">256个</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">目标探测性能</div>
    <div class="spec-value">可见光≥2.5Km 热成像≥1.2Km<br>(无人机35x35cm, 能见度≥20Km，温度≤20℃，湿度≤40%)</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">支持的协议</div>
    <div class="spec-value">IPv4, TCP/IP, UDP, HTTP, DHCP, RTP/RTCP/RTSP, FTP, UPnP, DDNS, NTP, IGMP, ICMP</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">兼容协议</div>
    <div class="spec-value">ONVIF, GB/T 28181</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">通讯接口</div>
    <div class="spec-value">1个RJ45, 10M/100M自适应以太网接口</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">工作温度/湿度</div>
    <div class="spec-value">-35℃～+60℃ / ＜90%RH</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">云台防护等级</div>
    <div class="spec-value">IP66</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">电源输入</div>
    <div class="spec-value">AC220V转DC24V±15%防水电源</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">功率</div>
    <div class="spec-value">正常工作≤30W</div>
  </div>
  <div class="spec-row">
    <div class="spec-label">重量(净重)</div>
    <div class="spec-value">＜8KG</div>
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
            <h3>黑白名单功能</h3>
            <p>4K超高清光电成像，提供清晰的目标图像</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-thermometer-half"></i>
            </div>
            <h3>多光谱全天候监测</h3>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>远程探测和发现目标</h3>
          </div>
           <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>智能区域计算</h3>
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