<template>
  <div class="contact-page page-content">
    <!-- Hero Banner -->
    <section class="contact-hero">
      <div class="contact-hero-bg"></div>
      <div class="contact-hero-inner">
        <div class="contact-hero-content">
          <h1 class="hero-title">{{ isZh ? '联系我们' : 'Contact Us' }}</h1>
          <p class="hero-subtitle">
            {{ isZh
              ? '致力于通过领先的无人机技术与智能感知系统，保障每一片空域的安全与高效。朗德智能，与您共同探索科技的无限可能。'
              : 'Dedicated to safeguarding every inch of airspace through leading UAV technology and intelligent perception systems. Lander Intelligence — exploring the boundless possibilities of technology with you.' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info & Inquiry Form -->
    <section class="contact-main">
      <div class="contact-main-inner">
        <div class="contact-grid">
          <!-- Left: Info Cards -->
          <div class="info-column">
            <!-- 办公地点 -->
            <div class="info-card">
              <div class="info-card-inner">
                <div class="info-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2" fill="none"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2" fill="none"/>
                  </svg>
                </div>
                <div class="info-text">
                  <h3 class="info-title">{{ isZh ? '办公地点' : 'Office Location' }}</h3>
                  <p class="info-desc" v-for="(addr, idx) in currentSiteInfo.contactInfo.addresses" :key="idx">
                    <span v-if="currentSiteInfo.contactInfo.addresses.length > 1" class="addr-label">{{ idx === 0 ? (isZh ? '总部：' : 'HQ: ') : (isZh ? '分部：' : 'Branch: ') }}</span>{{ addr }}
                  </p>
                </div>
              </div>
            </div>

            <!-- 电话 / 邮箱 合并卡 -->
            <div class="info-card">
              <div class="info-card-inner">
                <div class="info-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.76 19.76 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.76 19.76 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" fill="none"/>
                  </svg>
                </div>
                <div class="info-text">
                  <div class="info-block">
                    <h3 class="info-title">{{ isZh ? '电话支持' : 'Phone' }}</h3>
                    <p class="info-desc">{{ currentSiteInfo.contactInfo.phone }}</p>
                  </div>
                  <div class="info-block">
                    <h3 class="info-title">{{ isZh ? '邮箱联系' : 'Email' }}</h3>
                    <p class="info-desc">{{ currentSiteInfo.contactInfo.email }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 工作时间 -->
            <div class="info-card">
              <div class="info-card-inner">
                <div class="info-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-text">
                  <h3 class="info-title">{{ isZh ? '营业时间' : 'Working Hours' }}</h3>
                  <p class="info-desc">
                    {{ isZh ? '周一至周五：09:00 - 18:00' : 'Mon - Fri: 09:00 - 18:00' }}<br/>
                    {{ isZh ? '周六及周日：预约接待' : 'Weekends: By appointment' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Inquiry Form -->
          <div class="form-column">
            <div class="form-card">
              <div class="form-header">
                <h2 class="form-title">{{ isZh ? '在线咨询' : 'Online Inquiry' }}</h2>
                <p class="form-subtitle">
                  {{ isZh ? '请填写以下表单，我们的技术专家将在 24 小时内与您取得联系。' : 'Please fill out the form below. Our specialists will contact you within 24 hours.' }}
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Section -->
    <section class="partner-section">
      <div class="partner-inner">
        <div class="partner-header">
          <span class="partner-label">{{ isZh ? 'GLOBAL NETWORK' : 'GLOBAL NETWORK' }}</span>
          <h2 class="partner-title">{{ isZh ? '全球合作伙伴计划' : 'Global Partner Program' }}</h2>
          <p class="partner-desc">
            {{ isZh
              ? '朗德智能正积极拓展全球业务版图，寻找具备专业资质与行业资源的合作伙伴，共同推进行业级无人机应用的普及。'
              : 'Lander Intelligence is actively expanding its global footprint, seeking partners with professional qualifications and industry resources to jointly advance industrial UAV adoption.' }}
          </p>
        </div>

        <div class="partner-grid">
          <!-- 渠道分销 -->
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 17l-5-5 2-2 3 3 7-7 2 2-9 9z"/>
                <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7"/>
              </svg>
            </div>
            <h4 class="partner-card-title">{{ isZh ? '渠道分销' : 'Channel Distribution' }}</h4>
            <p class="partner-card-desc">{{ isZh ? '共享市场红利与品牌价值' : 'Share market dividends and brand value' }}</p>
          </div>

          <!-- 技术合作 -->
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <h4 class="partner-card-title">{{ isZh ? '技术合作' : 'Technical Collaboration' }}</h4>
            <p class="partner-card-desc">{{ isZh ? '算法共享与系统深度融合' : 'Algorithm sharing and deep system integration' }}</p>
          </div>

          <!-- 特种定制 -->
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h4 class="partner-card-title">{{ isZh ? '特种定制' : 'Custom Solutions' }}</h4>
            <p class="partner-card-desc">{{ isZh ? '为行业客户提供专属解决方案' : 'Tailored solutions for industry clients' }}</p>
          </div>

          <!-- 培训交付 -->
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h4 class="partner-card-title">{{ isZh ? '培训交付' : 'Training & Delivery' }}</h4>
            <p class="partner-card-desc">{{ isZh ? '完善的课程体系与实操训练' : 'Comprehensive curriculum and hands-on training' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-bg"></div>
      <div class="map-grid-overlay"></div>
      <div class="map-center">
        <div class="map-pin">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="pin-icon">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <span class="pin-text">{{ isZh ? '朗德智能总部 · 杭州' : 'Lander HQ · Hangzhou' }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ContactForm from '@/components/ContactForm.vue'
import { useLanguage } from '@/mixins/language'

const { isZh, isEn, getCurrentSiteInfo } = useLanguage()

const currentSiteInfo = computed(() => {
  const siteInfoFromStore = getCurrentSiteInfo.value
  if (siteInfoFromStore && siteInfoFromStore.contactInfo) {
    return siteInfoFromStore
  }
  return isZh.value ? {
    companyName: '杭州朗德智能科技有限公司',
    contactInfo: {
      addresses: [
        '浙江省杭州市上城区明石路515号明石商业大厦9楼9173室',
        '湖南省长沙市岳麓区延年江境酒店 802'
      ],
      phone: '13548973785',
      email: '173462959@qq.com'
    }
  } : {
    companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
    contactInfo: {
      addresses: [
        '15F, Building A, Innovation Tower, Science & Technology Park, Binjiang District, Hangzhou, Zhejiang',
        'Room 802, Yanian Jiangjing Hotel, Yuelu District, Changsha, Hunan'
      ],
      phone: '13548973785',
      email: '173462959@qq.com'
    }
  }
})
</script>

<style scoped>
/* =========================================================
   ContactView — 对标 concat.html (Material Design 3)
   色板：primary #003ec7 / surface #fbf8ff / surface-container-low #f3f2ff
   surface-container-lowest #ffffff / outline-variant #c3c5d9
   on-surface #191b25 / on-surface-variant #434656
   字体：Manrope (headline) + Inter (body)
   间距：xl 80 / lg 48 / md 24 / sm 12 / base 8 / xs 4
   ========================================================= */

.contact-page {
  background: #fbf8ff;
  color: #191b25;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  min-height: 100vh;
  padding-bottom: 0;
}

/* ---------- Hero Banner ---------- */
.contact-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.contact-hero-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(0, 20, 82, 0.72) 0%, rgba(0, 62, 199, 0.55) 45%, rgba(0, 62, 199, 0.2) 100%),
    url('/images/contact/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.contact-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.35;
}

.contact-hero-inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.contact-hero-content {
  max-width: 640px;
}

.hero-title {
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 24px;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #dde1ff;
  margin: 0;
  max-width: 520px;
}

/* ---------- Main Section ---------- */
.contact-main {
  padding: 80px 0;
}

.contact-main-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
  align-items: start;
}

/* ---------- Left: Info Cards ---------- */
.info-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  background: #f3f2ff;
  border: 1px solid rgba(195, 197, 217, 0.35);
  border-radius: 8px;
  padding: 24px;
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.info-card:hover {
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  border-color: rgba(0, 62, 199, 0.3);
  transform: translateY(-2px);
}

.info-card-inner {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.info-icon-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: rgba(0, 62, 199, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #003ec7;
}

.icon-svg {
  width: 24px;
  height: 24px;
}

.info-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-title {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #191b25;
  margin: 0 0 4px;
}

.info-block .info-title {
  font-size: 16px;
  margin: 0;
}

.info-desc {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #434656;
  margin: 0;
}

.info-desc + .info-desc {
  margin-top: 6px;
}

.addr-label {
  display: inline-block;
  min-width: 48px;
  color: #003ec7;
  font-weight: 600;
}

/* ---------- Right: Form Card ---------- */
.form-column {
  min-width: 0;
}

.form-card {
  background: #ffffff;
  border: 1px solid rgba(195, 197, 217, 0.5);
  border-radius: 8px;
  padding: 48px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
}

.form-header {
  margin-bottom: 32px;
}

.form-title {
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #003ec7;
  margin: 0 0 12px;
}

.form-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #434656;
  margin: 0;
}

/* ---------- ContactForm 子组件样式覆盖（使用 :deep） ---------- */
:deep(.contact-form .form-group) {
  margin-bottom: 20px;
}

:deep(.contact-form label) {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #434656;
  margin-bottom: 8px;
}

:deep(.contact-form .form-control) {
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: 1px solid #c3c5d9;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #191b25;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  outline: none;
}

:deep(.contact-form .form-control:focus) {
  border-color: #003ec7;
  box-shadow: 0 0 0 1px #003ec7;
}

:deep(.contact-form textarea.form-control) {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

:deep(.contact-form .btn) {
  width: 100%;
  padding: 14px 24px;
  background: #003ec7;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

:deep(.contact-form .btn:hover) {
  background: #0038b6;
}

:deep(.contact-form .btn:active) {
  transform: scale(0.98);
}

:deep(.contact-form .btn:disabled) {
  background: #737688;
  cursor: not-allowed;
}

:deep(.contact-form .alert) {
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 16px;
}

:deep(.contact-form .alert-success) {
  background: rgba(0, 62, 199, 0.08);
  color: #003ec7;
  border: 1px solid rgba(0, 62, 199, 0.2);
}

:deep(.contact-form .alert-error) {
  background: rgba(186, 26, 26, 0.08);
  color: #ba1a1a;
  border: 1px solid rgba(186, 26, 26, 0.2);
}

/* ---------- Partner Section ---------- */
.partner-section {
  background: #e7e7f5;
  padding: 80px 0;
  overflow: hidden;
}

.partner-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.partner-header {
  text-align: center;
  margin-bottom: 48px;
}

.partner-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #003ec7;
  margin-bottom: 8px;
}

.partner-title {
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #191b25;
  margin: 0 0 12px;
}

.partner-desc {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #434656;
  max-width: 672px;
  margin: 0 auto;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.partner-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.partner-card:hover {
  background: #003ec7;
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 62, 199, 0.25);
}

.partner-icon {
  color: #003ec7;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, transform 0.3s ease;
}

.partner-icon svg {
  width: 40px;
  height: 40px;
}

.partner-card:hover .partner-icon {
  color: #ffffff;
  transform: scale(1.08);
}

.partner-card-title {
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: #191b25;
  margin: 0;
  transition: color 0.3s ease;
}

.partner-card:hover .partner-card-title {
  color: #ffffff;
}

.partner-card-desc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #434656;
  margin: 0;
  transition: color 0.3s ease;
}

.partner-card:hover .partner-card-desc {
  color: rgba(255, 255, 255, 0.85);
}

/* ---------- Map Section ---------- */
.map-section {
  position: relative;
  height: 400px;
  overflow: hidden;
  background: #d9d9e7;
}

.map-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(135deg, rgba(0, 20, 82, 0.35) 0%, rgba(46, 48, 58, 0.25) 50%, rgba(0, 20, 82, 0.35) 100%),
    url('/images/contact/map-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.map-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(183, 196, 255, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(183, 196, 255, 0.05) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.6;
}

.map-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.map-pin {
  background: #fbf8ff;
  border: 1px solid rgba(0, 62, 199, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #003ec7;
  animation: map-pin-pulse 2.4s ease-in-out infinite;
}

.map-pin .pin-icon {
  width: 24px;
  height: 24px;
}

.map-pin .pin-text {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.005em;
  color: #003ec7;
}

@keyframes map-pin-pulse {
  0%, 100% {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(0, 62, 199, 0.45);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 16px rgba(0, 62, 199, 0);
    transform: scale(1.02);
  }
}

/* ---------- 响应式 ---------- */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .form-card {
    padding: 32px;
  }

  .partner-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .contact-hero {
    height: 320px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .contact-main {
    padding: 56px 0;
  }

  .contact-main-inner,
  .contact-hero-inner {
    padding: 0 20px;
  }

  .info-card {
    padding: 20px;
  }

  .info-card-inner {
    gap: 16px;
  }

  .form-card {
    padding: 24px;
  }

  .form-title {
    font-size: 24px;
  }

  .partner-section {
    padding: 56px 0;
  }

  .partner-inner {
    padding: 0 20px;
  }

  .partner-title {
    font-size: 24px;
  }

  .partner-card {
    padding: 32px 20px;
  }

  .map-section {
    height: 320px;
  }

  .map-pin {
    padding: 16px 20px;
  }

  .map-pin .pin-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .contact-hero {
    height: 280px;
  }

  .hero-title {
    font-size: 28px;
  }

  .info-icon-wrap {
    width: 40px;
    height: 40px;
  }

  .icon-svg {
    width: 20px;
    height: 20px;
  }

  .partner-grid {
    grid-template-columns: 1fr;
  }
}
</style>
