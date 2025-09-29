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
              <i class="fas fa-signal"></i>
            </div>
            <h3>无源探测 </h3>
            <p>被动接收信号，不发射电磁信号，战术隐蔽性高。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-search"></i>
            </div>
            <h3>精准识别</h3>
            <p>产品集成协议解析算法，能够精准识别主流无人机的经度、维度、高度、遥控器位置。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-database"></i>
            </div>
            <h3>精准测向</h3>
            <p>协议解析模式≤0.5（° RMS），AOA 测向模式≤3（° RMS）</p>
          </div>
           <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-database"></i>
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
.product-specifications { margin-bottom: 80px; }
.spec-note { text-align: center; color: #64748b; font-size: 0.9rem; margin-bottom: 30px; font-style: italic; }
.specification-table { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; }
.spec-row { display: grid; grid-template-columns: 1fr 2fr; border-bottom: 1px solid #e2e8f0; transition: background-color 0.2s ease; }
.spec-row:last-child { border-bottom: none; }
.spec-row:hover { background-color: #f8fafc; }
.spec-header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; font-weight: 600; }
.spec-header:hover { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.spec-row .spec-label { padding: 15px 20px; font-weight: 500; color: #374151; background-color: #f8fafc; border-right: 1px solid #e2e8f0; }
.spec-header .spec-label { background: transparent; color: white; border-right: 1px solid rgba(255, 255, 255, 0.2); }
.spec-row .spec-value { padding: 15px 20px; color: #1e293b; font-weight: 400; }
.spec-header .spec-value { color: white; font-weight: 600; }
.section-title { text-align: center; font-size: 2.2rem; margin-bottom: 50px; color: #1e293b; }
.features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 80px; }
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
@media (max-width: 768px) { .product-overview { grid-template-columns: 1fr; gap: 40px; } .features-grid { grid-template-columns: 1fr; } .product-title { font-size: 2rem; } .product-contact { padding: 40px 20px; } .specification-table { margin: 0 -10px; } .spec-row { grid-template-columns: 1fr; } .spec-label { border-right: none; border-bottom: 1px solid #e2e8f0; font-weight: 600; background-color: #f1f5f9; } .spec-header .spec-label { background: rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.2); } .spec-value { padding-top: 10px; } }
</style>