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
          <h1 class="product-title">三通道无人机打击枪</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/strike-gun.png" alt="三通道无人机打击枪" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>三通道无人机打击枪是一款专为应 对非法无人机入侵而设计的高效安防工具，其工作在 5.8GHz、2.4GHz、1.5GHz三个核心频段，精准干扰无 人机的遥控指令与视频传输链路，实现无人机的安全驱 离或强制返航。设备采用便捷的枪型设计，便于单兵操 作与迅速布防。</p>
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
                <th class="spec-label-header">参数类型</th>
                <th class="spec-header">技术参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="spec-label">工作模式</td>
                <td class="spec-cell">无线电干扰</td>
              </tr>
              <tr>
                <td class="spec-label">干扰频段及发射功率</td>
                <td class="spec-cell">1.5GHz - 10W<br>2.4GHz - 30W<br>5.8GHz - 20W</td>
              </tr>
              <tr>
                <td class="spec-label">工作距离</td>
                <td class="spec-cell">开阔地≥1500米</td>
              </tr>
              <tr>
                <td class="spec-label">天线类型</td>
                <td class="spec-cell">高增益9dB定向天线</td>
              </tr>
              <tr>
                <td class="spec-label">天线夾角</td>
                <td class="spec-cell">30°</td>
              </tr>
              <tr>
                <td class="spec-label">供电电源</td>
                <td class="spec-cell">内置式电池：24V/5Ah</td>
              </tr>
              <tr>
                <td class="spec-label">工作时间</td>
                <td class="spec-cell">干扰端工作时间可达40分钟</td>
              </tr>
              <tr>
                <td class="spec-label">重量</td>
                <td class="spec-cell">约4KG（含电池）</td>
              </tr>
              <tr>
                <td class="spec-label">拓展功能</td>
                <td class="spec-cell">配有标准导轨，可安装瑟伴弹夾、夜视仪、执法记录仪等</td>
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
  width: 30%;
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

.spec-cell {
  color: #374151;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  padding-left: 20px;
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
    min-width: 600px;
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
  
  .spec-cell {
    text-align: center;
    padding-left: 6px;
  }
}
</style>