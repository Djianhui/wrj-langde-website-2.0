<template>
  <div class="product-detail-page page-content">
    <div class="product-hero">
      <div class="hero-background"></div>
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
          <span>频谱侦测</span>
        </div>
        <div class="product-hero-content">
          <h1 class="product-title">频谱侦测系统</h1>
          <p class="product-subtitle">无线电信号侦测与分析技术</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="product-overview">
        <div class="product-image">
          <img src="/images/products/spectrum.png" alt="频谱侦测系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>无线电侦测设备的核心功能是捕获无人机的遥控、图传及数传无线电信号，通过对信号特征的分析与识别，精准判断无人机的方位等关键信息。该设备可实现三大核心能力：一是覆盖无人机数传、图传信号的全频段侦测；二是基于信号特征完成无人机类型的识别；三是在探测到目标信号时实时触发报警。</p>
          
        </div>
      </div>
      
      <!-- 产品规格数据表格 -->
      <div class="product-specifications">
        <h2 class="section-title">产品规格</h2>
        <div class="specification-table">
          <div class="spec-row">
            <div class="spec-label">频段</div>
            <div class="spec-value">300MHz~6000MHz</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">方位覆盖</div>
            <div class="spec-value">0~360°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">俯仰覆盖</div>
            <div class="spec-value">0~70°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">探测距离</div>
            <div class="spec-value">≥5km</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">测向精度</div>
            <div class="spec-value">≤3°(RMS)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">定位精度</div>
            <div class="spec-value">±5m</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">探测识别率</div>
            <div class="spec-value">≥95%</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">响应时间</div>
            <div class="spec-value">≤2s</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作时间</div>
            <div class="spec-value">24H*7</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">通信接口</div>
            <div class="spec-value">RJ45 网口 TCP / IP 协议</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">供电方式</div>
            <div class="spec-value">交流220V/直流DC12V</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">功耗</div>
            <div class="spec-value">≤90w</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">尺寸</div>
            <div class="spec-value">600x600x400mm</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">重量</div>
            <div class="spec-value">≤25kg (不含三脚架)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作温度</div>
            <div class="spec-value">-40℃ ~+70℃</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">存储温度</div>
            <div class="spec-value">-45℃ ~+70℃</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">防护等级</div>
            <div class="spec-value">IP66</div>
          </div>
        </div>
      </div>
      
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="radio-waves" :size="32" />
            </div>
            <h3>无源探测 </h3>
            <p>被动接收信号，不发射电磁信号，战术隐蔽性高。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="target-precision" :size="32" />
            </div>
            <h3>精准识别</h3>
            <p>产品集成协议解析算法，能够精准识别主流无人机的经度、维度、高度、遥控器位置。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="direction-finder" :size="32" />
            </div>
            <h3>精准测向</h3>
            <p>协议解析模式≤0.5（° RMS），AOA 测向模式≤3（° RMS）</p>
          </div>
           <div class="feature-card">
            <div class="feature-icon">
              <CustomIcons name="drone-recognition" :size="32" />
            </div>
            <h3>识别机型全</h3>
            <p>识别各类品牌机、穿越机、DIY 图传无人机等多种机型</p>
          </div>
        </div>
      </div>
      
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

const emit = defineEmits(['page-loaded'])

const handleImageError = (event) => {
  event.target.src = '/images/products/default-product.jpg'
}

onMounted(() => {
  emit('page-loaded')
})
</script>

<style scoped>
/* 现代化设计系统 */
.product-detail-page {
  padding-top: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="30" cy="30" r="30"/></g></svg>') repeat;
  opacity: 0.3;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  font-weight: 500;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb a:hover {
  color: white;
}

.breadcrumb span {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.4);
}

.product-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.product-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.9;
  letter-spacing: 0.01em;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin: 100px 0;
  align-items: center;
}

.product-image img {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.product-image img:hover {
  transform: scale(1.02);
}

.product-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.product-info p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 32px;
  font-weight: 400;
}

.product-specifications {
  margin-bottom: 100px;
}

.specification-table {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid rgba(226, 232, 240, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-row:hover {
  background: rgba(59, 130, 246, 0.05);
  transform: translateX(4px);
}

.spec-label {
  padding: 20px 24px;
  font-weight: 600;
  color: #374151;
  background: rgba(248, 250, 252, 0.8);
  border-right: 1px solid rgba(226, 232, 240, 0.3);
  font-size: 0.95rem;
}

.spec-value {
  padding: 20px 24px;
  color: #1e293b;
  font-weight: 500;
  font-size: 0.95rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  text-align: center;
  padding: 48px 32px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.95);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
  font-weight: 400;
  font-size: 1rem;
}

.product-contact {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 32px;
  padding: 80px 60px;
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
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="30"/></g></svg>') repeat;
  opacity: 0.3;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.contact-content p {
  font-size: 1.125rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: white;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .product-overview {
    gap: 60px;
  }
  
  .features-grid {
    gap: 30px;
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
    gap: 40px;
    margin: 60px 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .feature-card {
    padding: 32px 24px;
  }
  
  .product-contact {
    padding: 60px 32px;
    border-radius: 24px;
  }
  
  .contact-content h2 {
    font-size: 2rem;
  }
  
  .specification-table {
    margin: 0 -16px;
    border-radius: 16px;
  }
  
  .spec-row {
    grid-template-columns: 1fr;
  }
  
  .spec-label {
    border-right: none;
    border-bottom: 1px solid rgba(226, 232, 240, 0.3);
    background: rgba(59, 130, 246, 0.1);
    font-weight: 600;
  }
  
  .spec-value {
    padding-top: 12px;
  }
}

@media (max-width: 480px) {
  .product-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
  }
  
  .feature-icon {
    width: 64px;
    height: 64px;
  }
  
  .feature-card h3 {
    font-size: 1.2rem;
  }
}
</style>