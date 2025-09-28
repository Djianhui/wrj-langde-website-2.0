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
                  <li class="breadcrumb-item active">农业植保</li>
                </ol>
              </nav>
              <h1 class="product-title">农业植保无人机</h1>
              <p class="product-subtitle">智慧农业精准作业解决方案</p>
              <div class="product-features">
                <span class="feature-tag">精准喷洒</span>
                <span class="feature-tag">智能飞控</span>
                <span class="feature-tag">高效作业</span>
                <span class="feature-tag">环保安全</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-image">
              <img src="/images/products/agriculture-drone.jpg" alt="农业植保无人机" class="img-fluid">
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
              <p class="section-subtitle">现代农业智能化作业的理想选择</p>
            </div>
            <div class="overview-content">
              <p>农业植保无人机是专为现代农业精准作业设计的智能化飞行平台。采用先进的飞控系统和精准喷洒技术，能够在复杂农田环境中实现自主飞行和精确药剂喷洒，大幅提升农业生产效率，降低人工成本和农药使用量。</p>
              <p>产品集成了GPS导航、图像识别、智能避障等多项先进技术，支持地面站规划飞行路径，可实现厘米级精度的定点喷洒。同时具备强大的环境适应性和作业稳定性，是推进农业现代化和智慧农业发展的重要工具。</p>
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
          <p class="section-subtitle">高效精准，智能环保的农业作业利器</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-crosshairs"></i>
              </div>
              <h4>精准喷洒技术</h4>
              <p>采用变量喷洒技术，根据作物需求精准控制药剂用量，减少浪费，提高药效</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-route"></i>
              </div>
              <h4>智能路径规划</h4>
              <p>自动生成最优飞行路径，支持地块分割和断点续喷，确保全覆盖无遗漏</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-virus"></i>
              </div>
              <h4>智能避障系统</h4>
              <p>配备多传感器避障系统，自动识别障碍物并规避，确保飞行安全</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-tint"></i>
              </div>
              <h4>大容量药箱</h4>
              <p>20L大容量药箱设计，单次作业覆盖面积大，减少补给次数，提升作业效率</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-battery-full"></i>
              </div>
              <h4>长续航能力</h4>
              <p>高性能锂电池组，单次飞行时间可达45分钟，满足大面积连续作业需求</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h4>智能控制系统</h4>
              <p>配备专业地面站软件，支持手机APP控制，操作简单，上手容易</p>
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
          <p class="section-subtitle">优异性能参数，满足各类农业作业需求</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>飞行性能</h4>
              <ul class="specs-list">
                <li><span class="spec-label">最大起飞重量：</span>42kg</li>
                <li><span class="spec-label">载重能力：</span>20L</li>
                <li><span class="spec-label">续航时间：</span>45分钟（空载）</li>
                <li><span class="spec-label">飞行速度：</span>0-15m/s</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>喷洒系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">喷洒幅宽：</span>6-8米</li>
                <li><span class="spec-label">喷洒流量：</span>0.5-8L/min</li>
                <li><span class="spec-label">作业效率：</span>120-150亩/小时</li>
                <li><span class="spec-label">喷洒精度：</span>±5%</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>环境适应</h4>
              <ul class="specs-list">
                <li><span class="spec-label">工作温度：</span>-10℃ ~ +50℃</li>
                <li><span class="spec-label">抗风能力：</span>6级风</li>
                <li><span class="spec-label">防护等级：</span>IP56</li>
                <li><span class="spec-label">定位精度：</span>±2.5cm（RTK）</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="specs-group">
              <h4>控制系统</h4>
              <ul class="specs-list">
                <li><span class="spec-label">控制距离：</span>≥5km</li>
                <li><span class="spec-label">图传距离：</span>≥3km</li>
                <li><span class="spec-label">飞行模式：</span>手动/自主</li>
                <li><span class="spec-label">安全保护：</span>失控返航</li>
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
          <p class="section-subtitle">广泛适用于各类农业作物的植保作业</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-seedling"></i>
              </div>
              <h5>大田作物</h5>
              <p>水稻、小麦、玉米等大田作物的病虫害防治和营养喷施</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-apple-alt"></i>
              </div>
              <h5>果园管理</h5>
              <p>果树的精准施药，减少农药残留，提高果品质量</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-carrot"></i>
              </div>
              <h5>蔬菜种植</h5>
              <p>设施农业和露地蔬菜的病虫害综合防治</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="application-card">
              <div class="app-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h5>经济作物</h5>
              <p>茶叶、棉花等经济作物的精细化管理和植保作业</p>
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
            <h3>了解更多农业植保无人机信息</h3>
            <p>我们的农业专家将为您提供专业的植保解决方案和技术支持</p>
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
  name: 'AgricultureDroneView',
  mounted() {
    // 设置页面标题
    document.title = '农业植保无人机 - 朗德智能科技'
  }
}
</script>

<style scoped>
.product-detail {
  padding-top: 100px;
}

.product-header {
  padding: 80px 0;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
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
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
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
  border-bottom: 2px solid #4CAF50;
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
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
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
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
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
  color: #4CAF50;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  color: #4CAF50;
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