<template>
  <div class="case-detail-page">
    <template v-if="caseData">
      <!-- Section 1: Case Overview (Hero) -->
      <section class="overview-section">
        <div class="container">
          <div class="back-link">
            <RouterLink to="/cases">
              <i class="fas fa-arrow-left"></i>
              <span>{{ isZh ? '返回案例列表' : 'Back to Cases' }}</span>
            </RouterLink>
          </div>

          <div class="overview-grid">
            <!-- Large Image -->
            <div class="overview-media">
              <img
                :src="caseData.image || '/images/cases/default.jpg'"
                :alt="caseData.title"
                @error="onImageError"
              />
              <div class="media-overlay"></div>
              <div class="media-caption">
                <span class="media-tag">{{ caseData.tag }}</span>
                <h1 class="media-title">{{ caseData.title }}</h1>
              </div>
            </div>

            <!-- Meta Card -->
            <aside class="meta-card">
              <div>
                <h2 class="meta-heading">{{ isZh ? '项目概览' : 'Project Overview' }}</h2>
                <div class="meta-list">
                  <div class="meta-item">
                    <p class="meta-label">
                      <i class="far fa-calendar"></i>
                      {{ isZh ? '发布日期' : 'Published' }}
                    </p>
                    <p class="meta-value">{{ caseData.date }}</p>
                  </div>
                  <div class="meta-item">
                    <p class="meta-label">
                      <i class="fas fa-layer-group"></i>
                      {{ isZh ? '应用领域' : 'Industry' }}
                    </p>
                    <p class="meta-value">{{ caseData.tag }}</p>
                  </div>
                  <div class="meta-item" v-if="caseData.results && caseData.results.length">
                    <p class="meta-label">
                      <i class="fas fa-bullseye"></i>
                      {{ isZh ? '核心成果' : 'Key Outcomes' }}
                    </p>
                    <ul class="meta-results">
                      <li v-for="(r, i) in caseData.results.slice(0, 3)" :key="i">
                        <span class="dot"></span>
                        <span>{{ r }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="meta-divider">
                <p class="meta-label">{{ isZh ? '负责团队' : 'Delivery Team' }}</p>
                <p class="meta-value">{{ isZh ? '朗德智能交付中心' : 'Lande Delivery Center' }}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Section 2: Highlight + Metrics -->
      <section class="insight-section">
        <div class="container">
          <div class="insight-grid">
            <!-- Text: Highlight & Content Summary -->
            <div class="insight-text">
              <div class="insight-block">
                <h3 class="insight-heading">
                  <i class="fas fa-exclamation-triangle"></i>
                  {{ isZh ? '核心价值' : 'Core Value' }}
                </h3>
                <p class="insight-paragraph">{{ caseData.summary }}</p>
              </div>

              <div class="insight-card">
                <h3 class="insight-heading">
                  <i class="fas fa-shield-alt"></i>
                  {{ isZh ? '朗德智能解决方案' : 'Lande Solution' }}
                </h3>
                <p class="insight-paragraph insight-quote">
                  <i class="fas fa-quote-left"></i>
                  {{ caseData.highlight }}
                </p>
                <ul class="check-list" v-if="caseData.results && caseData.results.length">
                  <li v-for="(r, i) in caseData.results" :key="i">
                    <i class="fas fa-check-circle"></i>
                    <span>{{ r }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Metrics Bento -->
            <div class="metrics-bento">
              <div
                v-for="(metric, i) in metricsCards"
                :key="i"
                class="metric-card"
                :class="{ 'metric-card--wide': metric.wide }"
              >
                <p class="metric-label">{{ metric.label }}</p>
                <div class="metric-value">
                  <span class="metric-number">{{ metric.number }}</span>
                  <span class="metric-unit" v-if="metric.unit">{{ metric.unit }}</span>
                </div>
                <p class="metric-hint" v-if="metric.hint">
                  <i class="fas fa-arrow-trend-up" v-if="metric.trend"></i>
                  {{ metric.hint }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Details + Testimonial -->
      <section class="details-section">
        <div class="container">
          <div class="details-grid">
            <div class="details-content">
              <h3 class="section-heading">{{ isZh ? '项目详情' : 'Project Details' }}</h3>
              <div class="rich-text" v-html="caseData.content"></div>
            </div>

            <aside class="testimonial">
              <i class="fas fa-quote-left testimonial-icon"></i>
              <blockquote class="testimonial-text">
                {{ isZh
                  ? '朗德智能的系统让防区真正做到"可见、可控、可管"，极大提升了运营安全底线。'
                  : 'Lande\'s system makes our protection zone truly "visible, controllable and manageable", significantly raising our operational safety baseline.' }}
              </blockquote>
              <!-- <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <p class="author-name">{{ isZh ? '项目客户' : 'Project Client' }}</p>
                  <p class="author-title">{{ caseData.tag }} · {{ isZh ? '负责人' : 'Director' }}</p>
                </div>
              </div> -->
            </aside>
          </div>
        </div>
      </section>

      <!-- Section 4: Related Cases -->
      <section class="related-section" v-if="relatedCases.length > 0">
        <div class="container">
          <div class="related-header">
            <h2 class="section-heading">{{ isZh ? '相关应用案例' : 'Related Cases' }}</h2>
            <RouterLink to="/cases" class="view-all">
              <span>{{ isZh ? '查看全部' : 'View All' }}</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>

          <div class="related-grid">
            <RouterLink
              v-for="item in relatedCases"
              :key="item.id"
              :to="`/cases/${item.id}`"
              class="related-card"
            >
              <div class="related-media">
                <img
                  :src="item.image || '/images/cases/default.jpg'"
                  :alt="item.title"
                  @error="onImageError"
                />
              </div>
              <div class="related-body">
                <span class="related-tag">{{ item.tag }}</span>
                <h4 class="related-title">{{ item.title }}</h4>
                <p class="related-desc">{{ item.summary }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>
    </template>

    <div v-else class="not-found-wrapper">
      <div v-if="isLoading" class="spinner"></div>
      <div v-else class="not-found">
        <h2>{{ isZh ? '未找到案例' : 'Case Not Found' }}</h2>
        <p>
          {{ isZh
            ? '您查找的案例不存在或已被移除'
            : 'The case you are looking for does not exist or has been removed' }}
        </p>
        <RouterLink to="/cases" class="not-found-btn">
          <i class="fas fa-arrow-left"></i>
          {{ isZh ? '返回案例列表' : 'Back to Cases' }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCasesStore } from '../store/modules/cases'
import { useLanguage } from '@/mixins/language'

const { isZh } = useLanguage()
const route = useRoute()
const casesStore = useCasesStore()
const isLoading = ref(true)

const caseData = computed(() => {
  isLoading.value = false
  return casesStore.getCaseById(route.params.id)
})

const relatedCases = computed(() => {
  if (!caseData.value) return []
  const all = casesStore.getAllCases || []
  const currentId = parseInt(route.params.id)
  // 优先取同 tag 的案例
  const sameTag = all.filter(
    item => item.id !== currentId && item.tag === caseData.value.tag
  )
  if (sameTag.length >= 3) return sameTag.slice(0, 3)
  // 不足 3 条时，用其他案例补齐
  const others = all.filter(
    item => item.id !== currentId && item.tag !== caseData.value.tag
  )
  return [...sameTag, ...others].slice(0, 3)
})

// 从 results 构造 metrics 卡片（支持数字提取+单位）
const metricsCards = computed(() => {
  const results = caseData.value?.results || []
  if (!results.length) return []

  const cards = results.slice(0, 4).map((text, idx) => {
    const match = String(text).match(/([<>≥≤]?\s*\d+[\.\d]*%?\+?)\s*(.*)/)
    if (match) {
      const numberPart = match[1].trim()
      const rest = match[2].trim()
      return {
        label: rest || (isZh.value ? '核心指标' : 'Key Metric'),
        number: numberPart,
        unit: '',
        hint: text,
        trend: idx === 0,
        wide: idx === 0
      }
    }
    return {
      label: isZh.value ? '关键成果' : 'Key Outcome',
      number: '★',
      unit: '',
      hint: text,
      trend: false,
      wide: idx === 0
    }
  })
  return cards
})

const onImageError = (e) => {
  e.target.src = '/images/cases/default.jpg'
}
</script>

<style scoped>
.case-detail-page {
  background: #fbf8ff;
  color: #191b25;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
}

/* Section 1: Overview */
.overview-section {
  padding: 80px 0 48px;
}

.back-link {
  margin-bottom: 24px;
}

.back-link a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #003ec7;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
}

.back-link a:hover {
  text-decoration: underline;
}

.back-link i {
  font-size: 14px;
}

.overview-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: stretch;
}

.overview-media {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #ededfb;
  height: 500px;
  border: 1px solid rgba(195, 197, 217, 0.3);
}

.overview-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(46, 48, 58, 0.75) 0%, transparent 55%);
  pointer-events: none;
}

.media-caption {
  position: absolute;
  left: 48px;
  right: 48px;
  bottom: 48px;
  color: #ffffff;
}

.media-tag {
  display: inline-block;
  background: #003ec7;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 6px 12px;
  border-radius: 4px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.media-title {
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

.meta-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #c3c5d9;
  border-radius: 8px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08);
}

.meta-heading {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #191b25;
  margin: 0 0 32px;
}

.meta-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.meta-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #434656;
  margin: 0 0 6px;
}

.meta-label i {
  font-size: 14px;
  color: #003ec7;
}

.meta-value {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #191b25;
  margin: 0;
}

.meta-results {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta-results li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #191b25;
  line-height: 1.5;
}

.meta-results .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #003ec7;
  flex-shrink: 0;
}

.meta-divider {
  padding-top: 24px;
  border-top: 1px solid #c3c5d9;
  margin-top: 48px;
}

/* Section 2: Insight + Metrics */
.insight-section {
  background: #f3f2ff;
  border-top: 1px solid rgba(195, 197, 217, 0.5);
  border-bottom: 1px solid rgba(195, 197, 217, 0.5);
  padding: 80px 0;
}

.insight-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 24px;
}

.insight-text {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.insight-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #191b25;
  margin: 0 0 24px;
}

.insight-heading i {
  color: #003ec7;
  font-size: 28px;
}

.insight-paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #434656;
  margin: 0;
}

.insight-card {
  background: #ffffff;
  border: 1px solid #c3c5d9;
  border-radius: 8px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08);
}

.insight-card .insight-paragraph {
  font-size: 16px;
  margin: 0 0 24px;
}

.insight-quote {
  position: relative;
  padding-left: 36px;
  color: #191b25;
  font-style: italic;
}

.insight-quote i {
  position: absolute;
  left: 0;
  top: 4px;
  color: #003ec7;
  opacity: 0.3;
  font-size: 22px;
}

.check-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #191b25;
}

.check-list i {
  color: #003ec7;
  font-size: 20px;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Metrics Bento */
.metrics-bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  align-content: start;
}

.metric-card {
  background: #ffffff;
  border: 1px solid #c3c5d9;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08);
  position: relative;
  overflow: hidden;
}

.metric-card--wide {
  grid-column: span 2;
}

.metric-card--wide::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background: linear-gradient(90deg, transparent, rgba(0, 62, 199, 0.08));
  pointer-events: none;
}

.metric-label {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #434656;
  margin: 0 0 8px;
  position: relative;
  z-index: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.metric-value {
  display: flex;
  align-items: baseline;
  gap: 6px;
  position: relative;
  z-index: 1;
}

.metric-number {
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #003ec7;
}

.metric-card:not(.metric-card--wide) .metric-number {
  font-size: 36px;
  color: #191b25;
}

.metric-unit {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #434656;
}

.metric-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0 0;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #00677f;
  position: relative;
  z-index: 1;
}

.metric-hint i {
  font-size: 12px;
}

/* Section 3: Details + Testimonial */
.details-section {
  padding: 80px 0;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.section-heading {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #191b25;
  margin: 0 0 32px;
}

.rich-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #434656;
}

.rich-text :deep(h2) {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #191b25;
  margin: 32px 0 16px;
  padding-left: 16px;
  position: relative;
}

.rich-text :deep(h2::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 3px;
  background: #003ec7;
  border-radius: 2px;
}

.rich-text :deep(p) {
  margin: 0 0 16px;
}

.rich-text :deep(ul),
.rich-text :deep(ol) {
  margin: 0 0 20px;
  padding-left: 24px;
}

.rich-text :deep(li) {
  margin-bottom: 8px;
  line-height: 1.7;
}

.rich-text :deep(strong) {
  color: #191b25;
  font-weight: 600;
}

.testimonial {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testimonial-icon {
  font-size: 48px;
  color: rgba(0, 62, 199, 0.2);
  margin-bottom: 24px;
}

.testimonial-text {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  color: #191b25;
  margin: 0 0 24px;
  quotes: none;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e1e1ef;
  border: 1px solid #c3c5d9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #434656;
  font-size: 20px;
}

.author-name {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #191b25;
  margin: 0;
}

.author-title {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #434656;
  margin: 2px 0 0;
}

/* Section 4: Related */
.related-section {
  background: #ededfb;
  padding: 80px 0;
}

.related-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(195, 197, 217, 0.6);
}

.related-header .section-heading {
  margin: 0;
  font-size: 32px;
  letter-spacing: -0.01em;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #003ec7;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
}

.view-all:hover {
  text-decoration: underline;
}

.view-all i {
  font-size: 14px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.related-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #c3c5d9;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.related-card:hover {
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.12);
  transform: translateY(-2px);
}

.related-media {
  height: 200px;
  overflow: hidden;
  background: #ededfb;
}

.related-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.related-card:hover .related-media img {
  transform: scale(1.05);
}

.related-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.related-tag {
  display: inline-block;
  background: #e1e1ef;
  color: #434656;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-bottom: 4px;
}

.related-title {
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: #191b25;
  margin: 0;
  transition: color 0.2s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-card:hover .related-title {
  color: #003ec7;
}

.related-desc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #434656;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Not Found */
.not-found-wrapper {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 24px;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(0, 62, 199, 0.15);
  border-top-color: #003ec7;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.not-found {
  max-width: 480px;
  text-align: center;
}

.not-found h2 {
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #191b25;
  margin: 0 0 16px;
}

.not-found p {
  font-size: 16px;
  color: #434656;
  margin: 0 0 32px;
  line-height: 1.6;
}

.not-found-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #003ec7;
  color: #ffffff;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.not-found-btn:hover {
  background: #0038b6;
}

/* Responsive */
@media (max-width: 1024px) {
  .overview-grid,
  .insight-grid,
  .details-grid {
    grid-template-columns: 1fr;
  }

  .overview-media {
    height: 400px;
  }

  .media-title {
    font-size: 36px;
  }

  .details-grid {
    gap: 48px;
  }

  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .overview-section,
  .insight-section,
  .details-section,
  .related-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .overview-media {
    height: 300px;
  }

  .media-caption {
    left: 24px;
    right: 24px;
    bottom: 24px;
  }

  .media-title {
    font-size: 28px;
  }

  .meta-card,
  .insight-card {
    padding: 32px 24px;
  }

  .insight-heading {
    font-size: 24px;
  }

  .metric-card--wide .metric-number {
    font-size: 36px;
  }

  .testimonial-text {
    font-size: 20px;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }

  .related-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .related-header .section-heading {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .metrics-bento {
    grid-template-columns: 1fr;
  }

  .metric-card--wide {
    grid-column: span 1;
  }
}
</style>
