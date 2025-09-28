<template>
  <div class="product-detail">
    <!-- 产品头部 -->
    <section class="product-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="product-info">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">首页</router-link></li>
                  <li class="breadcrumb-item"><router-link to="/technology">产品中心</router-link></li>
                  <li class="breadcrumb-item">低空经济</li>
                  <li class="breadcrumb-item active">巡查防护</li>
                </ol>
              </nav>
              <h1 class="product-title">巡查防护无人机</h1>
              <p class="product-subtitle">全天候智能巡检安防解决方案</p>
              <div class="product-features">
                <span class="feature-tag">全天候巡检</span>
                <span class="feature-tag">智能识别</span>
                <span class="feature-tag">实时传输</span>
                <span class="feature-tag">自主巡航</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-image">
              <img src="/images/products/patrol-drone.jpg" alt="巡查防护无人机" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="section-header text-center">
              <h2>产品概述</h2>
              <p class="section-subtitle">高效智能的安防巡检专业平台</p>
            </div>
            <div class="overview-content">
              <p>巡查防护无人机是专为安防监控和巡检作业设计的多功能飞行平台。集成了高清摄像头、红外热像仪、激光测距仪等多种传感器设备，能够在各种复杂环境下执行安防巡逻、设施检查、应急响应等任务。</p>
              <p>产品具备全天候作业能力，支持自主规划巡检路线和目标识别，可实现远程实时监控和数据传输。广泛应用于电力巡检、边界巡逻、森林防火、交通监控等领域，是现代化安防体系的重要组成部分。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心特点 -->
    <section class="product-features-section">
      <div class="container">
        <div class="section-header text-center">
          <h2>核心特点</h2>
          <p class="section-subtitle">全方位监控，智能化巡检的专业选择</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-video"></i>
              </div>
              <h4>高清视频监控</h4>
              <p>4K超高清摄像头，30倍光学变焦，支持红外夜视，全天候监控无死角</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-thermometer-half"></i>
              </div>
              <h4>红外热成像</h4>
              <p>高精度红外热像仪，可检测温度异常，适用于电力设备巡检和人员搜救</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h4>AI智能识别</h4>
              <p>基于深度学习的目标识别算法，自动识别异常情况并及时告警</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-route"></i>
              </div>
              <h4>自主巡航</h4>
              <p>支持预设巡检路线，自主起降和巡航，可设置巡检点位和停留时间</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-wifi"></i>
              </div>
              <h4>实时数据传输</h4>
              <p>4G/5G无线传输，实时回传高清视频和数据，支持远程指挥调度</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>恶劣环境适应</h4>
              <p>IP67防护等级，抗风抗雨，适应各种恶劣天气条件作业</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术规格 -->
    <section class="product-specs">
      <div class="container">
        <div class="section-header text-center">
          <h2>技术规格</h2>
          <p class="section-subtitle">专业级性能配置，满足严苛巡检需求</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>飞行性能</h4>
              <ul class="specs-list">
                <li><span class="spec-label">最大起飞重量：</span>15kg</li>
                <li><span class="spec-label">续航时间：</span>120分钟</li>
                <li><span class="spec-label">最大速度：</span>20m/s</li>
                <li><span class="spec-label">最大升限：</span>6000m</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>载荷系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">光电吊舱：</span>30倍光学变焦</li>
                <li><span class="spec-label">热像仪：</span>640×512分辨率</li>
                <li><span class="spec-label">激光测距：</span>≥20km</li>
                <li><span class="spec-label">云台精度：</span>±0.01°</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>通信系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">控制距离：</span>≥50km</li>
                <li><span class="spec-label">图传距离：</span>≥30km</li>
                <li><span class="spec-label">数据链路：</span>双向加密</li>
                <li><span class="spec-label">频段：</span>2.4G/5.8G</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>环境适应</h4>
              <ul class="specs-list">
                <li><span class="spec-label">工作温度：</span>-20℃ ~ +60℃</li>
                <li><span class="spec-label">抗风等级：</span>7级风</li>
                <li><span class="spec-label">防护等级：</span>IP67</li>
                <li><span class="spec-label">起降方式：</span>垂直起降</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="product-applications">
      <div class="container">
        <div class="section-header text-center">
          <h2>应用场景</h2>
          <p class="section-subtitle">广泛应用于各类安防监控和巡检任务</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <h5>电力巡检</h5>
              <p>电力线路、变电站设备巡检，热点故障检测和设备状态监控</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h5>边界巡逻</h5>
              <p>边境线、厂区周界等重要区域的常态化巡逻和入侵检测</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-fire"></i>
              </div>
              <h5>森林防火</h5>
              <p>森林火灾预警、火点定位和火势监控，提供实时火情信息</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-road"></i>
              </div>
              <h5>交通监控</h5>
              <p>高速公路、桥梁隧道等重要交通设施的安全监控和应急响应</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系咨询 -->
    <section class="product-contact">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3>了解更多巡查防护无人机信息</h3>
            <p>我们的安防专家将为您提供专业的巡检解决方案和技术支持服务</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <router-link to="/contact" class="btn btn-primary btn-lg">
              <i class="fas fa-phone me-2"></i>联系我们
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PatrolDroneView',
  mounted() {
    // 设置页面标题
    document.title = '巡查防护无人机 - 朗德智能科技'
  }
}
</script>

<style scoped>
.product-detail {
  padding-top: 100px;
}

.product-header {
  padding: 80px 0;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  color: white;
}

.breadcrumb {
  background: none;
  padding: 0;
  margin-bottom: 20px;
}

.breadcrumb-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.breadcrumb-item.active {
  color: white;
}

.product-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.product-subtitle {
  font-size: 1.2rem;
  margin-bottom: 25px;
  opacity: 0.9;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.product-image img {
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.product-overview {
  padding: 80px 0;
  background: #f8f9fa;
}

.section-header {
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #2c3e50;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
}

.overview-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #495057;
}

.product-features-section {
  padding: 80px 0;
}

.feature-card {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.feature-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
}

.feature-card p {
  color: #6c757d;
  line-height: 1.6;
}

.product-specs {
  padding: 80px 0;
  background: #f8f9fa;
}

.specs-group {
  margin-bottom: 40px;
}

.specs-group h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c3e50;
  border-bottom: 2px solid #FF6B6B;
  padding-bottom: 10px;
}

.specs-list {
  list-style: none;
  padding: 0;
}

.specs-list li {
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
}

.spec-label {
  font-weight: 600;
  min-width: 120px;
  color: #495057;
}

.product-applications {
  padding: 80px 0;
}

.application-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.application-card:hover {
  transform: translateY(-3px);
}

.app-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.application-card h5 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
}

.application-card p {
  color: #6c757d;
  line-height: 1.6;
}

.product-contact {
  padding: 60px 0;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  color: white;
}

.product-contact h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.product-contact p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.btn-primary {
  background: white;
  border-color: white;
  color: #FF6B6B;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  color: #FF6B6B;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .product-title {
    font-size: 2rem;
  }
  
  .product-features {
    justify-content: center;
  }
  
  .feature-card,
  .application-card {
    margin-bottom: 20px;
  }
}
</style>