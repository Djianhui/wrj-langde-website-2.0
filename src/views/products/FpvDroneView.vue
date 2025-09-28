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
                  <li class="breadcrumb-item active">FPV</li>
                </ol>
              </nav>
              <h1 class="product-title">FPV竞速无人机</h1>
              <p class="product-subtitle">极致性能的竞技飞行体验平台</p>
              <div class="product-features">
                <span class="feature-tag">极速飞行</span>
                <span class="feature-tag">灵活操控</span>
                <span class="feature-tag">高清图传</span>
                <span class="feature-tag">模块化设计</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-image">
              <img src="/images/products/fpv-drone.jpg" alt="FPV竞速无人机" class="img-fluid">
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
              <p class="section-subtitle">专业级FPV竞速体验，释放飞行激情</p>
            </div>
            <div class="overview-content">
              <p>FPV竞速无人机是专为竞技飞行和专业应用设计的高性能飞行平台。采用碳纤维轻量化机身设计，配备高功率电机和高效螺旋桨，能够实现极致的飞行性能和灵活的操控体验。</p>
              <p>产品搭载高清数字图传系统，为飞手提供实时、清晰的第一人称视角飞行体验。模块化设计支持快速维护和个性化定制，广泛应用于FPV竞速、特技表演、航拍创作、专业培训等领域。</p>
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
          <p class="section-subtitle">极致性能，专业品质的竞速无人机</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h4>极致速度性能</h4>
              <p>最高飞行速度可达200km/h，强劲动力系统提供澎湃的飞行体验</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-feather-alt"></i>
              </div>
              <h4>轻量化设计</h4>
              <p>碳纤维机身，整机重量仅250g，完美的推重比确保灵活操控</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h4>高清数字图传</h4>
              <p>720P/1080P实时图传，延迟低至20ms，提供清晰流畅的FPV体验</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <h4>精准操控系统</h4>
              <p>专业级遥控器，支持多种飞行模式，满足不同技能水平飞手需求</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-puzzle-piece"></i>
              </div>
              <h4>模块化架构</h4>
              <p>组件可快速拆装，支持个性化改装和快速维护，延长使用寿命</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>碰撞保护</h4>
              <p>桨叶保护装置和冲击吸收设计，有效保护机身和降低维修成本</p>
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
          <p class="section-subtitle">专业级配置参数，满足竞技飞行需求</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>飞行性能</h4>
              <ul class="specs-list">
                <li><span class="spec-label">整机重量：</span>250g</li>
                <li><span class="spec-label">最大速度：</span>200km/h</li>
                <li><span class="spec-label">续航时间：</span>8-12分钟</li>
                <li><span class="spec-label">最大升限：</span>500m</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>动力系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">电机规格：</span>2207 2750KV</li>
                <li><span class="spec-label">螺旋桨：</span>5英寸三叶桨</li>
                <li><span class="spec-label">电池：</span>6S 1550mAh LiPo</li>
                <li><span class="spec-label">推重比：</span>8:1</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>图传系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">传输距离：</span>≥2km</li>
                <li><span class="spec-label">图传延迟：</span>≤20ms</li>
                <li><span class="spec-label">视频分辨率：</span>1080P 60fps</li>
                <li><span class="spec-label">频段：</span>5.8G数字图传</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>控制系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">控制距离：</span>≥3km</li>
                <li><span class="spec-label">控制延迟：</span>≤5ms</li>
                <li><span class="spec-label">飞控系统：</span>F7飞控芯片</li>
                <li><span class="spec-label">陀螺仪：</span>6轴陀螺仪</li>
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
          <p class="section-subtitle">多元化应用，满足不同飞行需求</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-trophy"></i>
              </div>
              <h5>竞速比赛</h5>
              <p>专业FPV竞速赛事，挑战极限速度和飞行技巧</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-star"></i>
              </div>
              <h5>特技表演</h5>
              <p>空中特技表演，展示精湛飞行技艺和创意动作</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-video"></i>
              </div>
              <h5>影视航拍</h5>
              <p>影视制作中的高速航拍镜头，创造震撼视觉效果</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h5>飞行培训</h5>
              <p>专业飞手培训和技能提升的理想训练平台</p>
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
            <h3>了解更多FPV竞速无人机信息</h3>
            <p>我们的飞行专家将为您提供专业的竞速无人机解决方案和技术支持</p>
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
  name: 'FpvDroneView',
  mounted() {
    // 设置页面标题
    document.title = 'FPV竞速无人机 - 朗德智能科技'
  }
}
</script>

<style scoped>
.product-detail {
  padding-top: 100px;
}

.product-header {
  padding: 80px 0;
  background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
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
  background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
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
  border-bottom: 2px solid #9C27B0;
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
  background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
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
  background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
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
  color: #9C27B0;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  color: #9C27B0;
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