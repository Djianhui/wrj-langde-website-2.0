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
              <i class="fas fa-crosshairs"></i>
            </div>
            <h3>四位一体防御体系</h3>
            <p> 系统集成了雷达探测、电磁干扰、导航诱骗以 及外置频谱监测等先进技术，形成强大的四位 一体防御体系。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3>干扰信号隔离</h3>
            <p>自动隔离非安全的GPS  L1和BDS  B1信号，确保 授时设备正常工作。具有静态、动态用户轨迹 生成功能。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>可连续工作</h3>
            <p>设备能够全天候持续监测打击和记录防区空域 ,即使在浓雾和雷雨等恶劣天气条件下也能保 持稳定运行。</p>
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

.spec-category {
  background-color: #f1f5f9 !important;
  font-weight: 600;
  color: #1e293b;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  writing-mode: vertical-lr;
  text-orientation: mixed;
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