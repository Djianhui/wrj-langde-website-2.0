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
          <span>低空经济</span>
          <span>/</span>
          <span>FPV</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">5寸穿越机</h1>
          <p class="product-subtitle">集高性能硬件与精心调校于一身</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/fpv-5.png" alt="5寸穿越机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>为极致速度与操控自由而生！这款5寸穿越机集高性能硬件与精心调校于一身，无论是竞速赛场的激烈角逐，还是自由花飞的创意挥洒，都能为您提供无与伦比的飞行体验。</p>
        </div>
      </div>
      
      <!-- 产品规格 -->
      <div class="product-specifications">
        <h2 class="section-title">零部件组成</h2>
        <table class="spec-table">
          <tbody>
            <tr>
              <td class="spec-category" rowspan="5">飞控组件</td>
              <td class="spec-label">旋翼桨叶</td>
              <td class="spec-value">三叶桨 5.1*3 5*3</td>
            </tr>
            <tr>
              <td class="spec-label">动力电机</td>
              <td class="spec-value">尺寸规格 2207，kv值 1800</td>
            </tr>
            <tr>
              <td class="spec-label">电调</td>
              <td class="spec-value">BLITZ E45S 4 合 1，单路电流 45A</td>
            </tr>
            <tr>
              <td class="spec-label">飞控系统</td>
              <td class="spec-value">F4 或 F7 飞控套装，可选，预设未及预算决定</td>
            </tr>
            <tr>
              <td class="spec-label">图传(机载发射端)</td>
              <td class="spec-value">通信频率 5.8GHz 发射功率 1.6w，通信频率 1.2GHz 发射功率 1.5w，可选</td>
            </tr>
            <tr>
              <td class="spec-category" rowspan="5">控制设备</td>
              <td class="spec-label">FPV 眼镜</td>
              <td class="spec-value">FateCam R1 Mini，射频多列等</td>
            </tr>
            <tr>
              <td class="spec-label">机身控制</td>
              <td class="spec-value">Nazgul XL5 寸 飞机架，或其他 5 寸机架</td>
            </tr>
            <tr>
              <td class="spec-label">遥控接收机</td>
              <td class="spec-value">通信协议 ELRS，工作频率 915MHz，也可根据需要选择其他协议及频率的产品</td>
            </tr>
            <tr>
              <td class="spec-label">GPS 定位模块</td>
              <td class="spec-value">标配不包含该模块，可选配</td>
            </tr>
            <tr>
              <td class="spec-label">动力电池</td>
              <td class="spec-value">推荐规格 6s 5200mah 65C</td>
            </tr>
            <tr>
              <td class="spec-category" rowspan="3">视频系统</td>
              <td class="spec-label">高清摄像头</td>
              <td class="spec-value">ELRS TX12，这套使用者较多，好评度高</td>
            </tr>
            <tr>
              <td class="spec-label">FPV 视频眼镜</td>
              <td class="spec-value">低成本可选择半透明车模屏等款，有更高显示要求可选 DJ| 眼镜等类似产品</td>
            </tr>
            <tr>
              <td class="spec-label">录制存储</td>
              <td class="spec-value">支持SD卡存储，可选配高速存储卡</td>
            </tr>
          </tbody>
        </table>
        <div class="spec-note">
          <p><strong>注意事项：</strong>本配置为竞技级FPV组装方案，具体配件可根据预算和使用需求进行调整。</p>
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
            <h3>澎湃动力系统</h3>
            <p>搭载2207 1800KV大尺寸电机，配合BLITZ E45S 4合1电调（单路45A），构成强大的动力心脏。在6S高压电池的驱动下，爆发力惊人，响应迅如闪电。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-route"></i>
            </div>
            <h3>敏捷机身与清晰视野</h3>
            <p>采用Nazgul XL5等经典5寸机架，兼顾强度与轻量化。搭配RaceCam R1 Mini等低延迟FPV相机，捕捉前方每一个关键细节。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-virus"></i>
            </div>
            <h3>智慧飞行大脑</h3>
            <p>采用主流F4/F7高性能飞控（可选），确保飞行姿态稳定，算法处理迅速，为您提供精准可靠的操控基础。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-battery-full"></i>
            </div>
            <h3>续航时间</h3>
            <p>空载状态16min、1.2kg载荷8min。</p>
          </div>  
        </div>
      </div>
      
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <i class="fas fa-seedling"></i>
            <span>大田作物</span>
          </div>
          <div class="application-item">
            <i class="fas fa-apple-alt"></i>
            <span>果园管理</span>
          </div>
          <div class="application-item">
            <i class="fas fa-carrot"></i>
            <span>蔬菜种植</span>
          </div>
          <div class="application-item">
            <i class="fas fa-leaf"></i>
            <span>经济作物</span>
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
  width: 420px;
  height: auto;
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

/* 产品参数表格样式 */
.spec-table {
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  border-collapse: collapse;
}

.spec-table th,
.spec-table td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.spec-table thead th {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  font-weight: 600;
  text-align: center;
}

.spec-category-header {
  width: 15%;
}

.spec-label-header {
  width: 35%;
}

.spec-header {
  width: 50%;
}

.spec-category {
  background-color: #f8fafc;
  font-weight: 600;
  color: #374151;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid #e2e8f0;
}

.spec-label {
  font-weight: 500;
  color: #374151;
  background-color: #f1f5f9;
  border-right: 1px solid #e2e8f0;
}

.spec-value {
  color: #1e293b;
  font-weight: 400;
}

.spec-table tbody tr:hover {
  background-color: rgba(79, 172, 254, 0.05);
}

.spec-table tbody tr:last-child td {
  border-bottom: none;
}

.spec-note {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
}

.spec-note p {
  margin: 0;
  text-align: center;
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
  
  /* 表格移动端适配 */
  .spec-table {
    font-size: 0.9rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 12px 15px;
  }
  
  .spec-category-header,
  .spec-label-header,
  .spec-header {
    width: auto;
  }
  
  .spec-category {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .spec-table {
    font-size: 0.8rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 10px 12px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>