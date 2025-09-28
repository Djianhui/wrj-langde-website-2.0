<template>
  <div class="product-detail-page page-content">
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
          <img src="/images/tech/05.png" alt="频谱侦测系统" @error="handleImageError">
        </div>
        <div class="product-info">
          <h2>产品概述</h2>
          <p>对无人机的控制信号进行侦测、识别和分析，判断其类型和威胁等级。系统具备宽频无线电信号侦测、深度协议解析与识别能力。</p>
          
          <div class="product-specs">
            <h3>技术规格</h3>
            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-label">频率范围</span>
                <span class="spec-value">400MHz-6GHz</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">侦测灵敏度</span>
                <span class="spec-value">-110dBm</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">识别类型</span>
                <span class="spec-value">50+种无人机</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="product-features">
        <h2 class="section-title">产品特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-signal"></i>
            </div>
            <h3>信号侦测</h3>
            <p>宽频无线电信号侦测，覆盖主要通信频段</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-search"></i>
            </div>
            <h3>协议分析</h3>
            <p>深度协议解析与识别，准确判断无人机类型</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-database"></i>
            </div>
            <h3>特征库</h3>
            <p>丰富的信号特征数据库，持续更新升级</p>
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

const emit = defineEmits(['page-loaded'])

const handleImageError = (event) => {
  event.target.src = '/images/products/default-product.jpg'
}

onMounted(() => {
  emit('page-loaded')
})
</script>

<style scoped>
/* 使用相同的样式结构 */
.product-detail-page { padding-top: 0; }
.product-hero { background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%); padding: 150px 0 80px; color: white; }
.breadcrumb { margin-bottom: 30px; font-size: 0.9rem; }
.breadcrumb a { color: rgba(255, 255, 255, 0.7); text-decoration: none; }
.breadcrumb a:hover { color: white; }
.breadcrumb span { margin: 0 10px; color: rgba(255, 255, 255, 0.5); }
.product-title { font-size: 3rem; margin-bottom: 20px; background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.product-subtitle { font-size: 1.2rem; opacity: 0.9; }
.product-overview { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin: 80px 0; align-items: center; }
.product-image img { width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); }
.product-info h2 { font-size: 2rem; margin-bottom: 20px; color: #1e293b; }
.product-info p { font-size: 1.1rem; line-height: 1.8; color: #64748b; margin-bottom: 30px; }
.product-specs h3 { font-size: 1.3rem; margin-bottom: 20px; color: #1e293b; }
.specs-grid { display: grid; gap: 15px; }
.spec-item { display: flex; justify-content: space-between; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
.spec-label { font-weight: 500; color: #374151; }
.spec-value { font-weight: 600; color: #4facfe; }
.section-title { text-align: center; font-size: 2.2rem; margin-bottom: 50px; color: #1e293b; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 80px; }
.feature-card { text-align: center; padding: 40px 20px; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease; }
.feature-card:hover { transform: translateY(-10px); }
.feature-icon { width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 1.8rem; color: white; }
.feature-card h3 { font-size: 1.3rem; margin-bottom: 15px; color: #1e293b; }
.feature-card p { color: #64748b; line-height: 1.6; }
.product-contact { background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%); border-radius: 20px; padding: 60px; text-align: center; color: white; margin: 80px 0; }
.contact-content h2 { font-size: 2.2rem; margin-bottom: 15px; }
.contact-content p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 30px; }
.btn { display: inline-flex; align-items: center; padding: 14px 30px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; }
.btn-primary { background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); color: white; box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 25px rgba(79, 172, 254, 0.4); color: white; text-decoration: none; }
@media (max-width: 768px) { .product-overview { grid-template-columns: 1fr; gap: 40px; } .features-grid { grid-template-columns: 1fr; } .product-title { font-size: 2rem; } .product-contact { padding: 40px 20px; } }
</style>