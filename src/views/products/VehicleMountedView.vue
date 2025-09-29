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
          <h1 class="product-title">车载侦打一体系统</h1>
          <p class="product-subtitle"></p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/vehicle-mounted.png" alt="车载侦打一体系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>车载侦打一体系统四面相控阵监测雷达、全频段频谱侦测、光电追踪系统以及全频段无人机干 扰设备四部分组成。该系统车载设计，能够同时实现无人机的侦测追踪和干扰反制功能。它可以让无人机在原地 悬停、迫降或返航，从而有效防范无人机进入防区，保障低空空域的安全。</p>
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
                <td class="spec-label">雷达探测</td>
                <td class="spec-cell">工作频段：相控阵雷达+收发合一数字，DB功率水平制<br>工作模式：脉冲压缩制<br>探测距离方位：1500m (RCS=0.01m²) 0°~360°<br>份阐借获：40次/s</td>
              </tr>
              <tr>
                <td class="spec-label">频谱侦测</td>
                <td class="spec-cell">全频段范围：20MHz~6GHz<br>份阐借获方位：半径5~7km, 0°~360°<br>定向照射范围：≥5s<br>份阐借获：50次/s</td>
              </tr>
              <tr>
                <td class="spec-label">无线电干扰</td>
                <td class="spec-cell">433MHz、915MHz、1.5GHz、2.4GHz、5.8GHz主流频段等<br>干扰范围：全方位≥30000M，定向照射≥1000M<br>巢室对抗性：采用智能对抗全频段干扰调制<br>播放尺寸：640×512</td>
              </tr>
              <tr>
                <td class="spec-label">可见光在机型</td>
                <td class="spec-cell">1/2.8英寸 CMOS，200万像素<br>镜头：30倍光学变焦, f=4.3mm~f=高速球129.0mm(相当), f=1.6倍数字用</td>
              </tr>
              <tr>
                <td class="spec-label">红外热成像</td>
                <td class="spec-cell">可见光范围(水平)：63.7°(广角变焦)3°(长焦)<br>最小焦距：10mm(广角变焦)1200mm(长焦)</td>
              </tr>
              <tr>
                <td class="spec-label">光电跟踪</td>
                <td class="spec-cell">图像对比度(50%)：高温目标：0.35 ℃(ICR开启)；0.013 ℃(ICR关闭)<br>正常运作：1.4 ℃(ICR开启)；0.05 ℃(ICR关闭)<br>索照：自动、手动跟踪、巡回、主机、定点跟踪、旅游、扫描重旅游伪目标、<br>扫描、手动</td>
              </tr>
              <tr>
                <td class="spec-label">雷达跟踪</td>
                <td class="spec-cell">扫描速度：自动(视频数据：正常, 低)，一键式自动扫描、手动、无级大、同<br>步巡回模式：有(打开/关闭)<br>对焦与变焦：自动+手动对焦，ICR承交一体化扫描车信号</td>
              </tr>
              <tr>
                <td class="spec-label">对焦模式</td>
                <td class="spec-cell">左右巡回动作：有(打开/关闭)<br>对焦级别时间：有(打开/关闭)</td>
              </tr>
              <tr>
                <td class="spec-label">跟踪与自动跟踪功能</td>
                <td class="spec-cell">真实时间跟踪功能：真实时间跟踪功能跟踪时间约响，在天气良好环境下，最大跟<br>踪距离1.2km（“大疑”天气）</td>
              </tr>
              <tr>
                <td class="spec-label">最大跟踪距离</td>
                <td class="spec-cell">1.5 FOV/s</td>
              </tr>
              <tr>
                <td class="spec-label">跟踪频率精度</td>
                <td class="spec-cell">±1像素</td>
              </tr>
              <tr>
                <td class="spec-label">跟踪范围</td>
                <td class="spec-cell">方位：360°；仰角：-10°~45°</td>
              </tr>
              <tr>
                <td class="spec-label">跟踪角速度</td>
                <td class="spec-cell">≥60°/s</td>
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
            <h3>车载一体化设计</h3>
            <p> 系统采用车载式设计， 一套设备即可完成对无 人机的侦测与反制， 适配不同类型车辆， 轻度 改装即可完成架设安装。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3>全向侦测干扰</h3>
            <p>采用四面相控阵雷达、全频段频谱侦测、光电 追踪系统以及全频段无人机干扰设备，实现全 向360°范围空域的侦测干扰。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>防御距离远</h3>
            <p>侦测半径>1.5公里，反制距离>1公里。(根据环 境和机型不同会存在一定差异)。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>防范机型多</h3>
            <p>采用20-6000MHz无线电干扰对多个频段的无 人机进行干扰，可检测防御99%无人机机型。</p>
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