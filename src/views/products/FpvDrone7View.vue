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
          <span>低空经济</span>
          <CustomIcons name="chevron-right" :size="16" class="breadcrumb-separator" />
          <span>FPV</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">7寸穿越机</h1>
          <p class="product-subtitle">为探索更远的风景而生</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <!-- 产品概述 -->
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/fpv-7.png" alt="7寸穿越机" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>这款7寸穿越机专为长航时巡航、远距离勘探与平稳航拍优化设计，在澎湃动力与高效续航之间取得完美平衡，是您穿越山海、拓展视野的可靠伙伴。</p>
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
              <td class="spec-value">三叶桨 7.5*3.7*3</td>
            </tr>
            <tr>
              <td class="spec-label">动力电机</td>
              <td class="spec-value">尺寸规格 2809，kv值 1250</td>
            </tr>
            <tr>
              <td class="spec-label">电调</td>
              <td class="spec-value">BLITZ E55S 4 合 1，单路电流 55A</td>
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
              <td class="spec-value">Chimera7 7 寸机架，或其他 7 寸机架</td>
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
              <td class="spec-value">推荐规格 6s 5600mah 95C</td>
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
          <p><strong>注意事项：</strong>本配置为竞技级FPV组装方案，适用于 7 寸机架规格，具体配件可根据预算和使用需求进行调整。</p>
        </div>
      </div>
      
       <!-- 产品特点 -->
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="flight-control" :size="32" />
            </div>
            <h3>专业飞行大脑</h3>
            <p>可选用F4或F7高性能飞控，作为系统的智慧中枢，确保飞行姿态稳定，响应精准，为远征飞行提供可靠保障。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="cruise-body" :size="32" />
            </div>
            <h3>专属巡航机身</h3>
            <p>基于Chimera7等经典7寸机架，优化气动布局，为搭载大容量电池提供充足空间，天生为长途飞行打造。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="endurance" :size="32" />
            </div>
            <h3>卓越续航能力</h3>
            <p>续航表现远超同级。空载状态下续航可达约18分钟，即使在1.5kg的载荷下，仍能提供约10分钟的有效飞行时间，让创作与探索从容不迫。</p>
          </div>
         <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="cruise-speed" :size="32" />
            </div>
            <h3>高效巡航速度</h3>
            <p>可与广受好评的ELRS TX12遥控器及从入门到专业的各类FPV眼镜无缝协作，为您提供从操控到观看到的完整第一视角飞行体验。</p>
          </div>  
        </div>
      </div>
      
      <!-- 应用场景 -->
      <div class="product-applications">
        <h2 class="section-title">应用场景</h2>
        <div class="applications-grid">
          <div class="application-item">
            <CustomIcons name="long-range-cruise" :size="40" />
            <span>远距巡航</span>
          </div>
          <div class="application-item">
            <CustomIcons name="aerial-exploration" :size="40" />
            <span>航拍勘探</span>
          </div>
          <div class="application-item">
            <CustomIcons name="landscape-photography" :size="40" />
            <span>风景摄影</span>
          </div>
          <div class="application-item">
            <CustomIcons name="professional-mapping" :size="40" />
            <span>测绘作业</span>
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
  width: 420px;
  height: auto;
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

.application-item span {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover span {
  color: white;
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

/* 产品参数表格样式 */
.spec-table {
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-collapse: collapse;
}

.spec-table th,
.spec-table td {
  padding: 20px 25px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-table thead th {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.01em;
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
  background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
  font-weight: 700;
  color: #3730a3;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid #e2e8f0;
  letter-spacing: 0.05em;
  font-size: 16px;
}

.spec-label {
  font-weight: 600;
  color: #1e293b;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-right: 1px solid #e2e8f0;
  font-size: 15px;
}

.spec-value {
  color: #374151;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
}

.spec-table tbody tr:hover {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  transform: scale(1.01);
}

.spec-table tbody tr:hover .spec-category {
  background: linear-gradient(135deg, #c7d2fe 0%, #ddd6fe 100%);
  color: #1e40af;
}

.spec-table tbody tr:hover .spec-label {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  color: #1e40af;
}

.spec-table tbody tr:last-child td {
  border-bottom: none;
}

.spec-note {
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  color: #475569;
  font-size: 0.95rem;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.spec-note p {
  margin: 0;
  text-align: center;
  font-weight: 500;
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
  
  /* 表格移动端适配 */
  .spec-table {
    font-size: 0.9rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 15px 12px;
  }
  
  .spec-category-header,
  .spec-label-header,
  .spec-header {
    width: auto;
  }
  
  .spec-category {
    font-size: 0.85rem;
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
  
  .spec-table {
    font-size: 0.8rem;
  }
  
  .spec-table th,
  .spec-table td {
    padding: 12px 10px;
  }
}
</style>