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
                  <li class="breadcrumb-item">立体防控</li>
                  <li class="breadcrumb-item active">一体化防御</li>
                </ol>
              </nav>
              <h1 class="product-title">一体化防御系统</h1>
              <p class="product-subtitle">全方位空域安全防护解决方案</p>
              <div class="product-features">
                <span class="feature-tag">多层防护</span>
                <span class="feature-tag">智能决策</span>
                <span class="feature-tag">协同作战</span>
                <span class="feature-tag">实时响应</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-image">
              <img src="/images/products/integrated-defense.jpg" alt="一体化防御系统" class="img-fluid">
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
              <p class="section-subtitle">集探测、识别、跟踪、处置于一体的综合防御平台</p>
            </div>
            <div class="overview-content">
              <p>一体化防御系统是我们基于多年技术积累和实战经验开发的综合性空域安全防护解决方案。系统集成了雷达探测、光电识别、频谱监测、电子干扰、物理拦截等多种技术手段，通过智能化的指挥控制平台实现协同作战，为重要区域提供全方位、多层次的安全防护。</p>
              <p>系统采用模块化设计，可根据不同应用场景灵活配置，既可作为固定部署的区域防护系统，也可快速机动部署应对临时安保需求。通过人工智能算法实现威胁自动识别和分级处置，大幅提升防护效率和准确性。</p>
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
          <p class="section-subtitle">多维度安全防护，智能化威胁处置</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>多层防护体系</h4>
              <p>构建探测预警、识别确认、拦截处置三层防护体系，确保威胁及时发现和有效处置</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h4>智能决策引擎</h4>
              <p>基于AI算法的智能决策系统，自动评估威胁等级，选择最优处置方案</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-network-wired"></i>
              </div>
              <h4>协同作战能力</h4>
              <p>多设备、多系统协同联动，实现区域内全覆盖、无死角防护</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              <h4>快速响应机制</h4>
              <p>毫秒级威胁识别，秒级响应处置，确保关键时刻的快速反应</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-cogs"></i>
              </div>
              <h4>模块化设计</h4>
              <p>模块化架构设计，支持根据需求灵活配置，便于维护和升级扩展</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h4>便携部署</h4>
              <p>支持车载机动部署，可快速响应临时安保需求，适应多种作战环境</p>
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
          <p class="section-subtitle">卓越性能参数，满足严苛应用需求</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>探测性能</h4>
              <ul class="specs-list">
                <li><span class="spec-label">探测距离：</span>≥10km（雷达）/ ≥5km（光电）</li>
                <li><span class="spec-label">探测精度：</span>±1m（距离）/ ±0.1°（角度）</li>
                <li><span class="spec-label">目标容量：</span>≥200个同时跟踪</li>
                <li><span class="spec-label">识别准确率：</span>≥99%</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>处置能力</h4>
              <ul class="specs-list">
                <li><span class="spec-label">干扰距离：</span>≥3km</li>
                <li><span class="spec-label">拦截成功率：</span>≥95%</li>
                <li><span class="spec-label">响应时间：</span>≤3秒</li>
                <li><span class="spec-label">同时处置：</span>≥10个目标</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>系统配置</h4>
              <ul class="specs-list">
                <li><span class="spec-label">工作温度：</span>-40℃ ~ +70℃</li>
                <li><span class="spec-label">防护等级：</span>IP65</li>
                <li><span class="spec-label">供电方式：</span>AC 220V / 发电机</li>
                <li><span class="spec-label">部署时间：</span>≤30分钟</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>通信接口</h4>
              <ul class="specs-list">
                <li><span class="spec-label">数据链路：</span>有线/无线双模式</li>
                <li><span class="spec-label">网络协议：</span>TCP/IP、UDP</li>
                <li><span class="spec-label">远程控制：</span>支持</li>
                <li><span class="spec-label">数据存储：</span>≥1TB</li>
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
          <p class="section-subtitle">广泛适用于各类重要区域安全防护</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-plane"></i>
              </div>
              <h5>机场安全</h5>
              <p>为机场净空区提供全方位防护，确保航班安全运行</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h5>军事基地</h5>
              <p>为军事重地提供多层次防护，保障国防安全</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <h5>核电站</h5>
              <p>为核设施提供严密防护，确保核安全无虞</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-users"></i>
              </div>
              <h5>大型活动</h5>
              <p>为重要会议、体育赛事等提供临时安保服务</p>
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
            <h3>了解更多一体化防御系统信息</h3>
            <p>我们的专业团队将为您提供详细的产品介绍和定制化解决方案</p>
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
  name: 'IntegratedDefenseView',
  mounted() {
    // 设置页面标题
    document.title = '一体化防御系统 - 朗德智能科技'
  }
}
</script>

<style scoped>
.product-detail {
  padding-top: 100px;
}

.product-header {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  border-bottom: 2px solid #667eea;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: #667eea;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  color: #667eea;
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