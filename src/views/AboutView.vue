<template>
  <div class="about-page">
    <!-- ===== Hero Banner ===== -->
    <section class="about-hero">
      <div class="hero-bg">
        <img src="/images/about/about_bj.jpg" :alt="isZh ? '低空安全' : 'Low Altitude Security'" class="hero-bg-img" @error="onHeroImgError">
        <div class="hero-bg-gradient"></div>
        <div class="hero-bg-grid"></div>
      </div>
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            <span class="hero-badge-text">{{ isZh ? 'LOW ALTITUDE SECURITY PIONEER' : 'LOW ALTITUDE SECURITY PIONEER' }}</span>
          </div>
          <h1 class="hero-title">
            <template v-if="isZh">领航低空安全未来<br>领军低空安全未来</template>
            <template v-else>Pioneering the Future<br>of Low Altitude Security</template>
          </h1>
          <p class="hero-desc">
            {{ isZh
              ? '杭州朗德智能科技致力于构建全方位的低空安全防御体系，为全球航空安全与国防事业提供卓越的智能无人机防控解决方案。'
              : 'Hangzhou Lande Intelligent Technology is dedicated to building a comprehensive low-altitude security defense system, providing superior intelligent UAV countermeasure solutions for global aviation safety and national defense.' }}
          </p>
        </div>
      </div>
    </section>

    <!-- ===== Company Introduction ===== -->
    <section class="company-intro">
      <div class="lander-container">
        <div class="intro-grid">
          <div class="intro-image">
            <div class="intro-image-bg"></div>
            <img src="/images/about/about_02.png" :alt="isZh ? '研发实验室' : 'R&D Lab'" @error="onIntroImgError">
            <div class="intro-image-badge">
              <div class="badge-year">2025</div>
              <div class="badge-text">{{ isZh ? '创立于中国·杭州' : 'Founded in Hangzhou, China' }}</div>
            </div>
          </div>
          <div class="intro-text">
            <div class="section-eyebrow">Company Profile</div>
            <h2 class="section-h2">{{ isZh ? '杭州朗德智能科技有限公司' : 'Hangzhou Lande Intelligent Technology Co., Ltd.' }}</h2>
            <div class="intro-paragraphs">
              <p>{{ isZh
                ? '成立于2025年，朗德智能科技坐落于充满创新活力的杭州。作为一家专注于无人机防控与低空经济领域的高新技术企业，我们深耕于射频干扰、协议解码及雷达探测等核心技术的研发与应用。'
                : 'Founded in 2025 and based in innovation-rich Hangzhou, Lande Intelligent Technology is a high-tech enterprise focused on UAV countermeasures and the low-altitude economy, with deep expertise in RF jamming, protocol decoding and radar detection.' }}</p>
              <p>{{ isZh
                ? '在低空经济飞速发展的当下，安全已成为核心基石。我们依托深厚的军工级技术背景，为大型活动、重点基建、边境安防及企业私域提供端到端的低空安保服务。我们的愿景是让天空更透明、让地面更安全。'
                : 'As the low-altitude economy grows rapidly, security has become the cornerstone. Backed by solid military-grade technology, we deliver end-to-end low-altitude security services for major events, critical infrastructure, border defense and private enterprises. Our vision: a more transparent sky and a safer ground.' }}</p>
            </div>
            <div class="intro-stats">
              <div class="intro-stat-card">
                <div class="stat-num">3+</div>
                <div class="stat-label">{{ isZh ? '核心专利技术' : 'Core Patents' }}</div>
              </div>
              <div class="intro-stat-card">
                <div class="stat-num">17+</div>
                <div class="stat-label">{{ isZh ? '核心软件著作权' : 'Mil-grade Tested' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Core Values (Bento) ===== -->
    <section class="core-values">
      <div class="lander-container values-header">
        <div class="section-eyebrow">Core Values</div>
        <h2 class="section-h2">{{ isZh ? '驱动卓越的核心价值' : 'Core Values Driving Excellence' }}</h2>
      </div>
      <div class="lander-container values-grid">
        <div v-for="(v, idx) in coreValues" :key="idx" class="value-card">
          <div class="value-icon">
            <i :class="v.icon"></i>
          </div>
          <h3 class="value-title">{{ v.title }}</h3>
          <p class="value-desc">{{ v.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ===== Development Roadmap ===== -->
    <section class="roadmap">
      <div class="lander-container">
        <div class="roadmap-grid">
          <div class="roadmap-intro">
            <div class="section-eyebrow">Roadmap</div>
            <h2 class="section-h2">{{ isZh ? '征程与里程碑' : 'Journey & Milestones' }}</h2>
            <p class="roadmap-desc">{{ isZh
              ? '从西子湖畔的初创梦想，到如今低空安防领域的领航者，每一步都凝聚着朗德人的智慧与汗水。'
              : 'From a startup dream by West Lake to a pioneer in low-altitude security — every step is powered by the wisdom and dedication of the Lande team.' }}</p>
          </div>
          <div class="timeline">
            <div class="timeline-line"></div>
            <div v-for="(m, idx) in milestones" :key="idx" class="milestone" :class="{ 'is-active': m.active }">
              <div class="milestone-dot"><span></span></div>
              <div class="milestone-date">{{ m.date }}</div>
              <h4 class="milestone-title">{{ m.title }}</h4>
              <p class="milestone-desc">{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Team & R&D ===== -->
    <section class="rnd-section">
      <div class="lander-container">
        <div class="rnd-grid">
          <div class="rnd-text">
            <div class="section-eyebrow light">R&amp;D &amp; Engineering</div>
            <h2 class="section-h2 light">{{ isZh ? '严苛标准的科研基因' : 'Rigorous R&D DNA' }}</h2>
            <p class="rnd-desc">{{ isZh
              ? '我们的技术核心来源于一流航空航天实验室，团队由多位拥有10年以上国防科技背景的专家领衔。每一个算法、每一个电路、每一颗螺丝，都经过超千小时的实地模拟测试。'
              : 'Our technical core stems from top aerospace laboratories, led by experts with 10+ years of defense tech experience. Every algorithm, circuit and component is validated through thousands of hours of field simulation.' }}</p>
            <div class="rnd-badges">
              <div class="rnd-badge primary">
                <i class="fas fa-medal"></i>
                <div>
                  <div class="rnd-badge-title">{{ isZh ? '军工级测试标准 (GJB 150A)' : 'Military Grade Testing (GJB 150A)' }}</div>
                  <div class="rnd-badge-sub">{{ isZh ? '通过高温、低温、盐雾、振动及冲击测试' : 'Passed temperature, salt spray, vibration & shock tests' }}</div>
                </div>
              </div>
              <div class="rnd-badge">
                <i class="fas fa-shield-alt"></i>
                <div>
                  <div class="rnd-badge-title">{{ isZh ? '零延迟态势感知' : 'Zero Latency Situational Awareness' }}</div>
                  <div class="rnd-badge-sub">{{ isZh ? '全天候 24/7 无盲区自动预警，响应时间 < 1s' : '24/7 blind-spot free auto warning, response &lt; 1s' }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rnd-panel">
            <div class="rnd-panel-grid"></div>
            <img src="/images/about/about_03.png" :alt="isZh ? '科研实验室' : 'R&D Lab'" class="rnd-panel-img" @error="onRndImgError">
            <div class="rnd-panel-stats">
              <div class="rnd-stat-card">
                <div class="rnd-stat-num">70%</div>
                <div class="rnd-stat-label">{{ isZh ? '研发人员占比' : 'R&D Headcount' }}</div>
              </div>
              <div class="rnd-stat-card">
                <div class="rnd-stat-num">12k+</div>
                <div class="rnd-stat-label">{{ isZh ? '模拟对抗实验' : 'Simulations Run' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/mixins/language'

const { isZh } = useLanguage()

const coreValues = computed(() => isZh.value ? [
  { icon: 'fas fa-check-circle', title: '卓越品质', desc: '我们坚持近乎苛刻的制造标准，确保每一台设备都能在极寒、极热及高电磁干扰等极端环境下稳定运行。' },
  { icon: 'fas fa-handshake',   title: '诚实守信', desc: '以客户价值为中心，通过透明的服务流程与可靠的售后保障，构建深厚的全球伙伴信任体系。' },
  { icon: 'fas fa-rocket',      title: '科技创新', desc: '将AI深度学习应用于信号分析，持续突破技术边界，引领低空安全防御从"被动阻截"向"主动态势感知"跨越。' }
] : [
  { icon: 'fas fa-check-circle', title: 'Superior Quality', desc: 'We uphold near-uncompromising manufacturing standards to guarantee stable operation in extreme cold, heat, and high-EMI environments.' },
  { icon: 'fas fa-handshake',   title: 'Integrity & Trust', desc: 'Customer value is at our core. Transparent processes and reliable aftercare build lasting partnerships worldwide.' },
  { icon: 'fas fa-rocket',      title: 'Tech Innovation', desc: 'Applying deep learning to signal analysis, we push the boundary from passive countermeasures to proactive situational awareness.' }
])

const milestones = computed(() => isZh.value ? [
  { date: '2025 Q2', title: '杭州朗德正式扬帆起航', desc: '确立"低空大脑"研发战略，组建核心研发团队。', active: true },
  { date: '2026 Q3', title: 'LD-Series 第一代防控系统交付', desc: '在多地政府试点项目中获得极高评价，突破全频段干扰核心技术。', active: false },
  { date: '未来愿景', title: '构建全球无缝低空安全网', desc: '推动行业标准制定，实现防、管、控一体化的低空数字底座。', active: false }
] : [
  { date: '2025 Q2', title: 'Lande Officially Sets Sail', desc: 'Established the "Low Altitude Brain" R&D strategy and assembled the core team.', active: true },
  { date: '2026 Q3', title: 'LD-Series Gen-1 Delivered', desc: 'Highly rated in multi-region government pilots; breakthrough in full-band jamming.', active: false },
  { date: 'Future',  title: 'A Global Seamless Low-Altitude Security Net', desc: 'Driving industry standards and an integrated detect-manage-control digital foundation.', active: false }
])

const onHeroImgError = (e) => { e.target.src = '/images/about/company.jpg' }
const onIntroImgError = (e) => { e.target.src = '/images/about/about_02.png' }
const onRndImgError = (e) => { e.target.src = '/images/about/about_03.png' }
</script>

<style scoped>
/* ===== TOKENS ===== */
.about-page {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #fbf8ff;
  color: #191b25;
  -webkit-font-smoothing: antialiased;
}

.lander-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #003ec7;
  margin-bottom: 12px;
}
.section-eyebrow.light { color: #b7c4ff; }

.section-h2 {
  font-family: 'Manrope', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #191b25;
  margin: 0 0 24px;
}
.section-h2.light { color: #ffffff; }

/* ===== HERO ===== */
.about-hero {
  position: relative;
  height: 614px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #2e303a;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.hero-bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #2e303a 0%, rgba(46, 48, 58, 0.6) 55%, transparent 100%);
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #003ec7 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.08;
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

.hero-content { max-width: 768px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(0, 82, 255, 0.2);
  border-radius: 999px;
  margin-bottom: 24px;
}

.hero-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #003ec7;
  box-shadow: 0 0 0 0 rgba(0, 62, 199, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(0, 62, 199, 0.6); }
  70%  { box-shadow: 0 0 0 8px rgba(0, 62, 199, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 62, 199, 0); }
}

.hero-badge-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: #dde1ff;
}

.hero-title {
  font-family: 'Manrope', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 24px;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(225, 225, 239, 0.8);
  max-width: 640px;
  margin: 0;
}

/* ===== Company Introduction ===== */
.company-intro {
  padding: 80px 0;
  background: #fbf8ff;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.intro-image {
  position: relative;
}

.intro-image-bg {
  position: absolute;
  inset: -16px;
  background: rgba(0, 62, 199, 0.05);
  border-radius: 16px;
  transition: background 0.3s ease;
}

.intro-image:hover .intro-image-bg { background: rgba(0, 62, 199, 0.1); }

.intro-image img {
  position: relative;
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 18px 40px rgba(25, 27, 37, 0.12);
}

.intro-image-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid rgba(115, 118, 136, 0.2);
  z-index: 2;
}

.badge-year {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #003ec7;
  line-height: 1;
}

.badge-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #737688;
  margin-top: 4px;
}

.intro-paragraphs p {
  font-size: 18px;
  line-height: 1.7;
  color: #434656;
  margin: 0 0 16px;
}
.intro-paragraphs p:last-child { margin-bottom: 0; }

.intro-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
}

.intro-stat-card {
  padding: 24px;
  background: #ededfb;
  border-radius: 12px;
}

.stat-num {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #003ec7;
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 16px;
  color: #737688;
}

/* ===== Core Values ===== */
.core-values {
  padding: 80px 0;
  background: #f3f2ff;
}

.values-header { text-align: center; margin-bottom: 48px; }

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.value-card {
  padding: 48px;
  background: #fbf8ff;
  border-radius: 12px;
  border: 1px solid rgba(115, 118, 136, 0.2);
  transition: all 0.3s ease;
}

.value-card:hover {
  box-shadow: 0 14px 32px rgba(0, 62, 199, 0.08);
  transform: translateY(-4px);
}

.value-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(0, 62, 199, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #003ec7;
  font-size: 22px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  background: #003ec7;
  color: #ffffff;
}

.value-title {
  font-family: 'Manrope', 'PingFang SC', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #191b25;
  margin: 0 0 12px;
}

.value-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #434656;
  margin: 0;
}

/* ===== Roadmap ===== */
.roadmap {
  padding: 80px 0;
  background: #fbf8ff;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
}

.roadmap-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #434656;
  margin: 0;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.timeline-line {
  position: absolute;
  left: 15px;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: #c3c5d9;
}

.milestone {
  position: relative;
  padding-left: 48px;
}

.milestone-dot {
  position: absolute;
  left: 0;
  top: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e7e7f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.milestone-dot span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #737688;
}

.milestone.is-active .milestone-dot {
  background: #dde1ff;
}
.milestone.is-active .milestone-dot span {
  background: #003ec7;
}

.milestone-date {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #737688;
  margin-bottom: 4px;
}
.milestone.is-active .milestone-date { color: #003ec7; }

.milestone-title {
  font-family: 'Manrope', 'PingFang SC', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #191b25;
  margin: 0 0 6px;
}

.milestone-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #434656;
  margin: 0;
}

/* ===== R&D Section ===== */
.rnd-section {
  padding: 80px 0;
  background: #2e303a;
  color: #ffffff;
}

.rnd-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.rnd-desc {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(225, 225, 239, 0.8);
  margin: 0 0 48px;
}

.rnd-badges {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.rnd-badge {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 4px solid transparent;
}

.rnd-badge.primary { border-left-color: #003ec7; }

.rnd-badge i {
  font-size: 24px;
  color: #b7c4ff;
  flex-shrink: 0;
}

.rnd-badge-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.rnd-badge-sub {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(225, 225, 239, 0.6);
}

.rnd-panel {
  position: relative;
  padding: 24px;
  background: rgba(225, 225, 239, 0.05);
  border-radius: 12px;
  overflow: hidden;
}

.rnd-panel-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #003ec7 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.08;
}

.rnd-panel-img {
  position: relative;
  width: 100%;
  height: 256px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.rnd-panel-stats {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.rnd-stat-card {
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  text-align: center;
}

.rnd-stat-num {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #b7c4ff;
  line-height: 1;
  margin-bottom: 6px;
}

.rnd-stat-label {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(225, 225, 239, 0.6);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .intro-grid,
  .rnd-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .roadmap-grid { grid-template-columns: 1fr; gap: 32px; }
  .values-grid { grid-template-columns: 1fr 1fr; }
  .hero-title { font-size: 40px; }
}

@media (max-width: 768px) {
  .about-hero { height: auto; padding: 100px 0 80px; }
  .hero-title { font-size: 32px; }
  .hero-desc { font-size: 16px; }
  .company-intro,
  .core-values,
  .roadmap,
  .rnd-section { padding: 56px 0; }
  .values-grid { grid-template-columns: 1fr; }
  .intro-image img { height: 280px; }
  .section-h2 { font-size: 26px; }
  .value-card { padding: 32px 24px; }
  .intro-stats { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .hero-badge-text { font-size: 10px; letter-spacing: 0.1em; }
  .hero-title { font-size: 28px; }
  .intro-image-badge { padding: 12px 14px; }
  .badge-year { font-size: 20px; }
}
</style>
