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
          <span>雷达探测</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">低空探测雷达</h1>
          <p class="product-subtitle">高精度雷达目标探测与跟踪技术</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/tech/03.png" alt="低空探测雷达" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>该设备可接收并截获各类雷达信号，通过数字信道化处理，精准测量信号的载频、脉宽、到达时间（TOA）、方向（DOA）、幅度等特征参数，生成脉冲描述字（PDW）数据；同时具备设定脉冲中频波形信号的采集与下传功能。
设备支持六/八通道干涉仪、DBF测向等多种工作模式，能实时记录并输出频谱、幅度、脉冲描述字（PDW）及阵列中频原始数据，实现雷达信号的全流程特征提取与数据留存。</p>
        </div>
      </div>
      
  
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <p class="spec-note">* 注意：外观、规格和功能可能有所不同，恕不另行通知。</p>
        <div class="specification-table">
          <!-- <div class="spec-row spec-header">
            <div class="spec-label">型号</div>
            <div class="spec-value">TXPD3000</div>
          </div> -->
          <div class="spec-row">
            <div class="spec-label">雷达类型</div>
            <div class="spec-value">频率调制连续波 (FMCW)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">频率范围</div>
            <div class="spec-value">K 波段 (24GHz)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">扫描类型</div>
            <div class="spec-value">机械扫描</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">刷新率</div>
            <div class="spec-value">3s / 6s</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">检测范围</div>
            <div class="spec-value">≥ 3km @ RCS=0.01 m²</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">距离分辨率</div>
            <div class="spec-value">±3.75m @ RCS=0.01 m²</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">方位角</div>
            <div class="spec-value">0°~360°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">方位精度</div>
            <div class="spec-value">≤ 1°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">俯仰角</div>
            <div class="spec-value">0 ~ 30°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">俯仰精度</div>
            <div class="spec-value">≤ 2°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">目标速度检测范围</div>
            <div class="spec-value">±30 m/s</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">同时跟踪</div>
            <div class="spec-value">100</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">发射功率</div>
            <div class="spec-value">≤10W</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">系统功率</div>
            <div class="spec-value">100-240V AC</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">整机平均功耗</div>
            <div class="spec-value">≤160W</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">防护等级</div>
            <div class="spec-value">IP65</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作温度</div>
            <div class="spec-value">-40 ~ 60°C</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">外部尺寸</div>
            <div class="spec-value">< 740*600*600 mm</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">重量</div>
            <div class="spec-value">≤30kg</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">通讯接口</div>
            <div class="spec-value">RJ45</div>
          </div>
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
            <h3>数字信道化处理</h3>
            <p>采用自主研发的数字信道化处理方法，适应复杂电磁环境下多个同时到达信号测量</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3>高精度测向</h3>
            <p>自主研发的多通道干涉仪测向方法</p>
            <p>测向精度高，解模糊概率高</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>支持多站协同定位</h3>
            <p>支持多站测向交叉及多站</p>
            <p>时差（TDOA）协同定位</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>功耗低 </h3>
            <p>功耗小于40W</p>
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