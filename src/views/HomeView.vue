<template>
  <div class="home-view">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

    <main>
      <!-- ===== HERO ===== -->
      <section class="hero-section">
        <div class="hero-bg-layer">
          <div class="hero-gradient-overlay"></div>
          <div class="hero-bg-img" :style="{backgroundImage: `url('/images/cases/index_01.png')`}"></div>
        </div>
        <div class="hero-container">
          <div class="hero-content">
            <!-- 徽章 -->
            <div class="hero-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;flex-shrink:0">
                <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
              </svg>
              <span>{{ isZh ? '自主知识产权 · 低空安全领航者' : 'Independent IP · Low-Altitude Safety Leader' }}</span>
            </div>

            <!-- 标题 -->
            <h1 class="hero-title">
              {{ isZh ? '科技护航，' : 'Technology Protects,' }}<br/>
              <span class="hero-title-accent">{{ isZh ? '安全至上' : 'Safety First' }}</span>
            </h1>

            <!-- 副标题 -->
            <p class="hero-desc">
              {{ isZh
                ? '杭州朗德智能科技致力于打造具有自主知识产权的无人机产品和反无人机系统，为全球低空安全保驾护航。'
                : 'Hangzhou Lande Intelligent Technology is dedicated to creating drone products and anti-drone systems with independent IP, safeguarding global low-altitude safety.' }}
            </p>

            <!-- CTA 按钮 -->
            <div class="hero-btns">
              <RouterLink to="/technology" class="btn-primary-solid">
                {{ isZh ? '了解防控方案' : 'Explore Solutions' }}
                <svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
              <RouterLink to="/technology" class="btn-surface">
                {{ isZh ? '查看产品目录' : 'View Product Catalog' }}
              </RouterLink>
            </div>

            <!-- 统计数据 -->
            <div class="hero-stats">
              <div class="stat-item">
                <p class="stat-num">2025</p>
                <p class="stat-label">{{ isZh ? '公司创立于杭州' : 'Founded in Hangzhou' }}</p>
              </div>
              <div class="stat-item">
                <p class="stat-num">100%</p>
                <p class="stat-label">{{ isZh ? '自主研发产权' : 'Self-developed IP' }}</p>
              </div>
              <div class="stat-item">
                <p class="stat-num">24/7</p>
                <p class="stat-label">{{ isZh ? '全方位安全防御' : 'Comprehensive Defense' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== 核心技术领域 ===== -->
      <section class="products-section">
        <div class="lander-container">
          <!-- 标题行 -->
          <div class="products-header">
            <div>
              <h2 class="sec-title">{{ isZh ? '核心技术领域' : 'Core Technology Domains' }}</h2>
              <p class="sec-desc">{{ isZh
                ? '针对低空领域的复杂挑战，我们提供从全时域侦测到全手段反制的闭环解决方案，深度赋能低空经济。'
                : 'For complex challenges in the low-altitude domain, we provide closed-loop solutions from full-time detection to full-means countermeasures.' }}</p>
            </div>
            <!-- <div class="nav-arrows">
              <button class="arrow-btn">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="arrow-btn">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div> -->
          </div>

          <!-- 无人机防控类 -->
          <div class="cat-block">
            <div class="cat-row">
              <div class="cat-line"></div>
              <h3 class="cat-name primary-cat">{{ isZh ? '无人机防控类' : 'Anti-Drone Defense' }}</h3>
              <div class="cat-line"></div>
            </div>
            <div class="p-cards-grid">
              <div class="p-card glass-card" v-for="(card, i) in preventionCards" :key="i">
                <div class="p-card-img">
                  <img :src="card.image" :alt="isZh ? card.titleZh : card.titleEn" @error="onImgError">
                  <span class="p-card-tag">{{ isZh ? card.tagZh : card.tagEn }}</span>
                </div>
                <div class="p-card-body">
                  <h4>{{ isZh ? card.titleZh : card.titleEn }}</h4>
                  <ul>
                    <li v-for="(f, fi) in (isZh ? card.featZh : card.featEn)" :key="fi">
                      <span class="dot-primary"></span>{{ f }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 低空经济类 -->
          <div class="cat-block">
            <div class="cat-row">
              <div class="cat-line"></div>
              <h3 class="cat-name secondary-cat">{{ isZh ? '低空经济类' : 'Low-Altitude Economy' }}</h3>
              <div class="cat-line"></div>
            </div>
            <div class="bento-grid">
              <!-- 大卡 -->
              <div class="bento-main glass-card">
                <div class="bento-main-inner">
                  <div class="bento-main-text">
                    <span class="bento-label">{{ isZh ? '专业植保' : 'Agricultural' }}</span>
                    <h4>{{ isZh ? '农业植保无人机' : 'Agricultural Drone' }}</h4>
                    <p>{{ isZh
                      ? '采用先进的载重系统与喷洒技术，支持全自主航线规划，极大提升农作业效率，引领智慧农业转型。'
                      : 'Advanced payload and spraying tech with autonomous route planning, greatly improving agricultural efficiency.' }}</p>
                    <RouterLink to="/technology" class="bento-link">
                      {{ isZh ? '查看详情' : 'View Details' }}
                      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </RouterLink>
                  </div>
                  <div class="bento-main-img">
                    <img src="/images/tech/detection.jpg" alt="农业植保" @error="onImgError">
                  </div>
                </div>
              </div>
              <!-- 小卡 -->
              <div class="bento-side glass-card">
                <div class="bento-side-img">
                  <img src="/images/tech/index_06.jpg" alt="FPV" @error="onImgError">
                </div>
                <h4>{{ isZh ? 'FPV/巡查无人机' : 'FPV / Patrol Drone' }}</h4>
                <p>{{ isZh ? '针对电力、安防等领域设计的高性能飞行平台。' : 'High-performance platform for power inspection and security.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== 全场景应用覆盖 ===== -->
      <section class="scenes-section">
        <div class="lander-container">
          <div class="text-center-block">
            <h2 class="sec-title">{{ isZh ? '全场景应用覆盖' : 'Full-Scenario Coverage' }}</h2>
            <p class="sec-desc">{{ isZh
              ? '朗德智能科技的产品已成功部署于多个关键领域，在复杂环境下展现卓越的可靠性与有效性。'
              : 'Lande Intelligent products have been deployed in multiple critical sectors, demonstrating outstanding reliability.' }}</p>
          </div>
          <div class="scenes-grid">
            <div class="scene-card" v-for="(s, i) in scenarioItems" :key="i">
              <img :src="s.image" :alt="isZh ? s.titleZh : s.titleEn" @error="onImgError">
              <div class="scene-overlay">
                <h5>{{ isZh ? s.titleZh : s.titleEn }}</h5>
                <p>{{ isZh ? s.descZh : s.descEn }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== 关于我们 ===== -->
      <section class="about-section">
        <div class="about-deco-stripe"></div>
        <div class="lander-container">
          <div class="about-grid">
            <!-- 左侧文字 -->
            <div>
              <h2 class="sec-title">{{ isZh ? '关于朗德智能科技' : 'About Lande Intelligent' }}</h2>
              <div class="about-body">
                <p v-for="(para, i) in displayedAboutData.paragraphs" :key="i">{{ para }}</p>
              </div>
              <div class="about-feats">
                <div class="about-feat">
                  <div class="feat-icon-box">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                    </svg>
                  </div>
                  <div>
                    <h6>{{ isZh ? '卓越品质' : 'Premium Quality' }}</h6>
                    <p>{{ isZh ? '严苛的军工级测试标准' : 'Military-grade testing standards' }}</p>
                  </div>
                </div>
                <div class="about-feat">
                  <div class="feat-icon-box">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.09v7.82L12 19.82 4 15.91V8.09L12 4.18zM8 9v2h8V9H8zm0 4v2h8v-2H8z"/>
                    </svg>
                  </div>
                  <div>
                    <h6>{{ isZh ? '系统整合' : 'System Integration' }}</h6>
                    <p>{{ isZh ? '软硬件一体化深度融合' : 'Deep hardware-software integration' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右侧图片 -->
            <div class="about-img-col">
              <div class="about-img-frame">
                <img :src="displayedAboutData.image || '/images/about/company.jpg'" alt="朗德智能科技" @error="onImgError">
              </div>
              <div class="about-badge-float">
                <span class="badge-big"> 17</span>
                <span class="badge-small">{{ isZh ? '软件著作权' : 'Core Patents' }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useContentStore } from '@/store/modules/content'
import { useLanguage } from '@/mixins/language'

const { isZh, getCurrentAboutData } = useLanguage()

// 初始化 store（触发数据预加载）
useContentStore()

// 防控类产品卡片
const preventionCards = computed(() => [
  {
    image: '/images/tech/index_02.jpg',
    tagZh: '侦探感知', tagEn: 'Detection',
    titleZh: '侦探感知系统', titleEn: 'Detection & Sensing System',
    featZh: ['雷达探测系统', '高精度光电识别', '全频谱侦测模块'],
    featEn: ['Radar Detection', 'High-Precision EO Recognition', 'Full-Spectrum Detection']
  },
  {
    image: '/images/tech/jamming.jpg',
    tagZh: '干扰反制', tagEn: 'Jamming',
    titleZh: '防御打击装备', titleEn: 'Defense Strike Equipment',
    featZh: ['固定式全向侦测干扰', '便携式无人机打击枪', '多波段定向压制'],
    featEn: ['Fixed Omnidirectional Jamming', 'Portable Strike Gun', 'Multi-Band Suppression']
  },
  {
    image: '/images/tech/interception.jpg',
    tagZh: '一体化防御', tagEn: 'Integrated',
    titleZh: '综合防御系统', titleEn: 'Integrated Defense System',
    featZh: ['车载侦打一体系统', '四位一体智能防御阵列', '区域级低空网格化监控'],
    featEn: ['Vehicle-mounted System', 'Four-in-one Defense Array', 'Regional Grid Monitoring']
  }
])

// 应用场景
const scenarioItems = computed(() => [
  {
    titleZh: '国防安全', titleEn: 'National Defense',
    descZh: '为军事基地的低空空域提供实时防御与干扰反制。',
    descEn: 'Real-time defense and jamming for military base airspace.',
    image: '/images/cases/index_08.png'
  },
  {
    titleZh: '电力巡检', titleEn: 'Power Inspection',
    descZh: '利用无人机搭载热成像仪，精准识别输电线路隐患。',
    descEn: 'Using drones with thermal imaging to identify transmission line risks.',
    image: '/images/cases/index_09.png'
  },
  {
    titleZh: '边境监控', titleEn: 'Border Surveillance',
    descZh: '构建全天候无人化边境巡逻网络，提升边防态势感知能力。',
    descEn: 'Building all-weather unmanned border patrol networks.',
    image: '/images/cases/index_10.png'
  },
  {
    titleZh: '机场防护', titleEn: 'Airport Protection',
    descZh: '部署无损干扰系统，有效阻止黑飞无人机闯入机场敏感空域。',
    descEn: 'Non-destructive jamming preventing illegal drones from airport airspace.',
    image: '/images/cases/index_11.png'
  }
])

// 关于我们数据
const defaultAboutData = computed(() => isZh.value ? {
  paragraphs: [
    '杭州朗德智能科技有限公司成立于2025年4月14日，坐落于创新高地中国杭州。我们是一家专注于无人机及反无人机系统研发、生产与销售的高科技企业。',
    '公司核心团队由来自航空航天、电子对抗、人工智能等领域的资深专家组成。我们坚持"技术驱动、安全为本"的核心价值观，致力于为全球客户提供最前沿的低空安全解决方案。'
  ],
  image: '/images/about/company.jpg'
} : {
  paragraphs: [
    'Hangzhou Lande Intelligent Technology Co., Ltd. was established in April 2025, located in Hangzhou, China. We are a high-tech enterprise focused on R&D, production and sales of drones and anti-drone systems.',
    'Our core team consists of senior experts from aerospace, electronic warfare, and artificial intelligence fields. We adhere to "Technology Drives, Safety First", providing cutting-edge low-altitude security solutions.'
  ],
  image: '/images/about/company.jpg'
})

const displayedAboutData = computed(() => {
  const d = getCurrentAboutData.value
  return (d && d.paragraphs) ? d : defaultAboutData.value
})

const onImgError = (e) => {
  e.target.style.background = 'linear-gradient(135deg,#e2e8f0,#cbd5e1)'
  e.target.style.display = 'block'
}

const emit = defineEmits(['page-loaded'])
</script>

<style scoped>
/* ===== TOKENS ===== */
:root {
  --primary: #003ec7;
  --secondary: #00677f;
  --surface: #fbf8ff;
  --surface-low: #f3f2ff;
  --surface-high: #e7e7f5;
  --on-surface: #191b25;
  --on-surface-var: #434656;
  --outline-var: #c3c5d9;
}

.home-view {
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #fbf8ff;
  color: #191b25;
}

.fas, .fa {
  font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", FontAwesome;
}

/* ===== LAYOUT ===== */
.lander-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== LOADING ===== */
.page-loading {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #fbf8ff;
  color: #64748b;
  font-size: 1rem;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 62, 199, 0.15);
  border-top-color: #003ec7;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ===== HERO ===== */
.hero-section {
  position: relative;
  min-height: 85vh;
  overflow: hidden;
  background: #fbf8ff;
}

.hero-bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* 从左侧浅色渐变到透明，右侧露出图片 */
.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    #fbf8ff 0%,
    rgba(251, 248, 255, 0.85) 45%,
    rgba(251, 248, 255, 0.3) 70%,
    transparent 100%
  );
}

.hero-bg-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
}

/* 容器：用 calc 动态计算左边距，与 .nav-container（max-width:1280 margin:0 auto padding:0 24px）的 logo 位置完全对齐 */
.hero-container {
  position: relative !important;
  z-index: 2;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  /* 左右 padding = max(24, (视窗宽 - 1280) / 2 + 24)，与 .nav-container 中 logo 的实际位置一致 */
  padding: 80px max(24px, calc((100vw - 1280px) / 2 + 24px)) 56px !important;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.hero-content {
  max-width: 580px;
  /* 覆盖全局 main.css 的 .hero-content { margin: 0 auto; padding-top: 80px; } */
  margin: 0 !important;
  padding-top: 0 !important;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

/* 徽章 */
.hero-badge {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  width: fit-content;
  max-width: 100%;
  gap: 8px;
  background: rgba(0, 62, 199, 0.08);
  color: #003ec7;
  border: 1px solid rgba(0, 62, 199, 0.18);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

/* 标题 */
.hero-title {
  font-family: 'Manrope', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #191b25;
  margin-bottom: 20px;
}

.hero-title-accent {
  color: #003ec7;
}

/* 副标题 */
.hero-desc {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #434656;
  margin-bottom: 36px;
  max-width: 480px;
}

/* 按钮组 */
.hero-btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 0;
}

.btn-primary-solid {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #003ec7;
  color: #fff;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: box-shadow 0.25s, transform 0.2s;
  box-shadow: 0 4px 14px rgba(0, 62, 199, 0.3);
}

.btn-primary-solid:hover {
  box-shadow: 0 10px 28px rgba(0, 62, 199, 0.45);
  transform: translateY(-2px);
}

.btn-surface {
  display: inline-flex;
  align-items: center;
  background: #e7e8ec;
  color: #191b25;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(195, 197, 217, 0.4);
  transition: background 0.2s, transform 0.2s;
}

.btn-surface:hover {
  background: #dcdde3;
  transform: translateY(-2px);
}

/* 统计数据：推到 Hero 底部 */
.hero-stats {
  margin-top: auto;
  padding-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  border-top: 1px solid rgba(195, 197, 217, 0.25);
  max-width: 540px;
}

.stat-num {
  font-family: 'Manrope', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #003ec7;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.stat-label {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.4;
}

/* Hero 响应式 */
@media (max-width: 1100px) {
  .hero-title { font-size: 2.6rem; }
}

@media (max-width: 900px) {
  .hero-title { font-size: 2.4rem; }
  .hero-container { padding: 72px 24px 40px !important; }
  .hero-gradient-overlay {
    background: linear-gradient(to right, #fbf8ff 0%, rgba(251,248,255,0.92) 60%, rgba(251,248,255,0.5) 100%);
  }
  .stat-num { font-size: 1.5rem; }
}

@media (max-width: 600px) {
  .hero-section { min-height: auto; }
  .hero-container { padding: 60px 20px 36px !important; min-height: auto; }
  .hero-title { font-size: 2rem; }
  .hero-desc { font-size: 0.95rem; }
  .hero-btns { flex-direction: column; margin-bottom: 32px; }
  .btn-primary-solid, .btn-surface { width: 100%; justify-content: center; }
  .hero-stats { grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 24px; }
  .stat-num { font-size: 1.25rem; }
  .hero-bg-img { opacity: 0.15; }
  .hero-gradient-overlay { background: rgba(251,248,255,0.7); }
}

/* ===== SHARED SECTION STYLES ===== */
.sec-title {
  font-family: 'Manrope', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #191b25;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

.sec-desc {
  font-size: 0.97rem;
  color: #434656;
  line-height: 1.65;
}

.text-center-block {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 56px;
}

/* Glass card style */
.glass-card {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(115, 118, 136, 0.1);
}

/* ===== PRODUCTS SECTION ===== */
.products-section {
  padding: 80px 0;
  background: #fbf8ff;
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 56px;
}

.products-header > div:first-child {
  max-width: 540px;
}

.nav-arrows {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.arrow-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1.5px solid #c3c5d9;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #434656;
  transition: all 0.2s;
}

.arrow-btn:hover {
  background: #003ec7;
  border-color: #003ec7;
  color: #fff;
}

/* Category header */
.cat-block { margin-bottom: 56px; }

.cat-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}

.cat-line {
  flex: 1;
  height: 1px;
  background: rgba(195, 197, 217, 0.35);
}

.cat-name {
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
}

.primary-cat { color: #003ec7; }
.secondary-cat { color: #00677f; }

/* 3-column product cards */
.p-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.p-card {
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow 0.35s, transform 0.3s;
}

.p-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 62, 199, 0.1);
}

.p-card-img {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.p-card-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
}

.p-card:hover .p-card-img img { transform: scale(1.06); }

.p-card-tag {
  position: absolute;
  top: 14px; left: 14px;
  background: #003ec7;
  color: #fff;
  padding: 3px 12px;
  border-radius: 4px;
  font-size: 0.73rem;
  font-weight: 700;
}

.p-card-body {
  padding: 18px 18px 22px;
}

.p-card-body h4 {
  font-family: 'Manrope', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #191b25;
  margin-bottom: 12px;
}

.p-card-body ul {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.p-card-body li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  color: #434656;
}

.dot-primary {
  width: 6px; height: 6px;
  background: #003ec7;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Bento grid */
.bento-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.bento-main {
  border-radius: 14px;
  padding: 28px;
  transition: box-shadow 0.3s, transform 0.3s;
}

.bento-main:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 103, 127, 0.1);
}

.bento-main-inner {
  display: flex;
  gap: 28px;
  align-items: center;
}

.bento-main-text { flex: 1; }

.bento-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  color: #00677f;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.bento-main-text h4 {
  font-family: 'Manrope', sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #191b25;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

.bento-main-text p {
  font-size: 0.93rem;
  color: #434656;
  line-height: 1.65;
  margin-bottom: 22px;
}

.bento-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #003ec7;
  font-weight: 700;
  font-size: 0.93rem;
  text-decoration: none;
  transition: gap 0.2s;
}

.bento-link:hover { gap: 10px; }

.bento-main-img {
  width: 46%;
  flex-shrink: 0;
  aspect-ratio: 16/10;
  border-radius: 10px;
  overflow: hidden;
}

.bento-main-img img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.bento-side {
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, transform 0.3s;
}

.bento-side:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 62, 199, 0.08);
}

.bento-side-img {
  aspect-ratio: 1/1;
  overflow: hidden;
}

.bento-side-img img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.bento-side h4 {
  font-family: 'Manrope', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #191b25;
  padding: 18px 18px 8px;
}

.bento-side p {
  font-size: 0.86rem;
  color: #434656;
  padding: 0 18px 18px;
  line-height: 1.55;
}

/* Products responsive */
@media (max-width: 1100px) {
  .p-cards-grid { grid-template-columns: repeat(2, 1fr); }
  .bento-grid { grid-template-columns: 1fr; }
  .bento-main-inner { flex-direction: column; }
  .bento-main-img { width: 100%; aspect-ratio: 16/9; }
  .bento-side-img { aspect-ratio: 16/9; }
}

@media (max-width: 767px) {
  .products-section { padding: 60px 0; }
  .products-header { flex-direction: column; align-items: flex-start; }
  .p-cards-grid { grid-template-columns: 1fr; }
  .sec-title { font-size: 1.65rem; }
}

/* ===== SCENARIOS SECTION ===== */
.scenes-section {
  padding: 80px 0;
  background: #f3f2ff;
}

.scenes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.scene-card {
  position: relative;
  height: 384px; /* h-96 = 24rem */
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}

.scene-card img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
}

.scene-card:hover img { transform: scale(1.08); }

.scene-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(25, 27, 37, 0.9) 0%, rgba(25,27,37,0.15) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px;
}

.scene-overlay h5 {
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.scene-overlay p {
  font-size: 0.82rem;
  color: rgba(195, 197, 217, 0.85);
  line-height: 1.5;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.3s, transform 0.3s;
}

.scene-card:hover .scene-overlay p {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1100px) {
  .scenes-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .scenes-section { padding: 60px 0; }
  .scenes-grid { grid-template-columns: 1fr; }
  .scene-card { height: 260px; }
}

/* ===== ABOUT SECTION ===== */
.about-section {
  padding: 80px 0;
  background: #fbf8ff;
  position: relative;
  overflow: hidden;
}

/* 斜切装饰带 */
.about-deco-stripe {
  position: absolute;
  right: 0;
  top: 0;
  width: 33%;
  height: 100%;
  background: rgba(0, 62, 199, 0.04);
  transform: skewX(-8deg) translateX(30%);
  z-index: 0;
}

.about-section .lander-container {
  position: relative;
  z-index: 1;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-body p {
  font-size: 0.97rem;
  color: #434656;
  line-height: 1.75;
  margin-bottom: 16px;
}

.about-feats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 28px;
  padding-top: 28px;
}

.about-feat {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.feat-icon-box {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: rgba(0, 62, 199, 0.08);
  color: #003ec7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s, color 0.25s;
}

.about-feat:hover .feat-icon-box {
  background: #003ec7;
  color: #fff;
}

.about-feat h6 {
  font-size: 0.93rem;
  font-weight: 700;
  color: #191b25;
  margin: 0 0 4px;
}

.about-feat p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
}

.about-img-col {
  position: relative;
}

.about-img-frame {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.12);
}

.about-img-frame img {
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.about-img-frame:hover img { transform: scale(1.04); }

/* 浮动专利徽章 */
.about-badge-float {
  position: absolute;
  bottom: -20px;
  left: -28px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 62, 199, 0.15);
  border-radius: 14px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 28px rgba(0, 62, 199, 0.1);
}

.badge-big {
  font-family: 'Manrope', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #003ec7;
  line-height: 1;
  margin-bottom: 3px;
}

.badge-small {
  font-size: 0.77rem;
  font-weight: 600;
  color: #64748b;
}

@media (max-width: 1000px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  .about-badge-float { left: 16px; bottom: 16px; }
}

@media (max-width: 767px) {
  .about-section { padding: 60px 0; }
  .about-feats { grid-template-columns: 1fr; }
}
</style>
