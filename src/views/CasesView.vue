<template>
  <div class="cases-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">{{ casesPage.title }}</h1>
        <p class="hero-desc">{{ casesPage.subtitle }}</p>
      </div>
    </section>

    <!-- Filter Tags -->
    <section class="filter-section">
      <div class="container filter-bar">
        <button
          v-for="category in currentCategories"
          :key="category.id"
          class="filter-chip"
          :class="{ active: activeCategory === category.id }"
          @click="filterByCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
    </section>

    <!-- Case Grid -->
    <section class="grid-section">
      <div class="container">
        <div class="cases-grid">
          <RouterLink
            v-for="item in paginatedCases"
            :key="item.id"
            :to="`/cases/${item.id}`"
            class="case-card"
          >
            <div class="card-media">
              <img
                :src="item.image || '/images/cases/yyal01.png'"
                :alt="item.title"
                @error="onImageError"
              />
              <div class="card-tag">
                <i :class="getTagIcon(item.tag)"></i>
                <span>{{ item.tag }}</span>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-desc">{{ item.summary }}</p>
              <div class="card-footer">
                <span>{{ casesPage.viewDetails }}</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </RouterLink>
        </div>

        <div v-if="paginatedCases.length === 0" class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>{{ casesPage.noCases || (isZh ? '暂无相关案例' : 'No related cases') }}</p>
        </div>

        <!-- Pagination -->
        <div class="pagination" v-if="totalPages > 1">
          <button
            class="page-btn"
            :disabled="currentPage <= 1"
            @click="changePage(currentPage - 1)"
          >
            <i class="fas fa-chevron-left"></i>
            <span>{{ casesPage.prevPage }}</span>
          </button>
          <div class="page-numbers">
            <button
              v-for="page in totalPages"
              :key="page"
              class="page-number"
              :class="{ active: currentPage === page }"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="page-btn"
            :disabled="currentPage >= totalPages"
            @click="changePage(currentPage + 1)"
          >
            <span>{{ casesPage.nextPage }}</span>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useCasesStore } from '../store/modules/cases'
import { useLanguage } from '@/mixins/language'
import { useLanguageStore } from '@/store/modules/language'

const { isZh, getCasesPage } = useLanguage()
const languageStore = useLanguageStore()

const casesPage = computed(() => {
  const translations = getCasesPage()
  return {
    ...translations,
    prevPage: isZh.value ? '上一页' : 'Previous',
    nextPage: isZh.value ? '下一页' : 'Next'
  }
})

const casesStore = useCasesStore()
const cases = computed(() => casesStore.getAllCases)

const forceRender = ref(0)
const currentPage = ref(1)
const casesPerPage = 6

const currentCategories = computed(() => {
  forceRender.value
  const allOption = { id: 'all', name: casesPage.value.all }
  const aiOption = {
    id: 'ai',
    name: isZh.value ? 'AI 应用' : 'AI Application',
    tag: isZh.value ? 'AI 应用' : 'AI Application'
  }
  return [allOption, aiOption]
})

const activeCategory = ref('all')

const filteredCases = computed(() => {
  forceRender.value
  if (activeCategory.value === 'all') return cases.value
  if (activeCategory.value === 'ai') {
    return cases.value.filter(item => item.tag === 'AI 应用' || item.tag === 'AI Application')
  }
  return cases.value
})

const paginatedCases = computed(() => {
  const start = (currentPage.value - 1) * casesPerPage
  return filteredCases.value.slice(start, start + casesPerPage)
})

const totalPages = computed(() => Math.ceil(filteredCases.value.length / casesPerPage))

const filterByCategory = (id) => {
  activeCategory.value = id
  currentPage.value = 1
}

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getTagIcon = (tag) => {
  const map = {
    'AI 应用': 'fas fa-brain',
    'AI Application': 'fas fa-brain'
  }
  return map[tag] || 'fas fa-tag'
}

const onImageError = (e) => {
  e.target.src = '/images/cases/default.jpg'
}

watch(activeCategory, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value)
  }
})

watch(() => languageStore.language, () => {
  setTimeout(() => {
    forceRender.value += 1
    if (activeCategory.value !== 'all') activeCategory.value = 'all'
  }, 100)
}, { immediate: true })

onMounted(() => {
  forceRender.value += 1
})
</script>

<style scoped>
.cases-page {
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

/* Hero */
.hero-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(195, 197, 217, 0.3);
  padding: 80px 0 64px;
}

.hero-title {
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #191b25;
  margin: 0 0 12px;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #434656;
  max-width: 640px;
  margin: 0;
}

/* Filter */
.filter-section {
  position: sticky;
  top: 80px;
  z-index: 40;
  background: rgba(251, 248, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(195, 197, 217, 0.3);
  padding: 16px 0;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-chip {
  padding: 10px 20px;
  border: 1px solid #737688;
  background: transparent;
  color: #434656;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
}

.filter-chip:hover {
  border-color: #003ec7;
  color: #003ec7;
}

.filter-chip.active {
  background: #003ec7;
  color: #ffffff;
  border-color: #003ec7;
}

/* Grid */
.grid-section {
  padding: 80px 0 100px;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.case-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(195, 197, 217, 0.5);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.case-card:hover {
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
  transform: translateY(-2px);
}

.card-media {
  position: relative;
  height: 256px;
  overflow: hidden;
  background: #ededfb;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-card:hover .card-media img {
  transform: scale(1.05);
}

.card-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: #003ec7;
  padding: 6px 10px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.card-tag i {
  font-size: 14px;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex-grow: 1;
}

.card-title {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #191b25;
  margin: 0 0 12px;
  transition: color 0.2s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-card:hover .card-title {
  color: #003ec7;
}

.card-desc {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #434656;
  margin: 0 0 20px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(195, 197, 217, 0.4);
  color: #003ec7;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.card-footer i {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.case-card:hover .card-footer i {
  transform: translateX(4px);
}

/* Empty */
.empty-state {
  padding: 100px 0;
  text-align: center;
  color: #737688;
}

.empty-state i {
  font-size: 48px;
  color: #c3c5d9;
  margin-bottom: 20px;
}

.empty-state p {
  font-size: 18px;
  margin: 0;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 80px;
}

.page-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #ffffff;
  border: 1px solid #c3c5d9;
  border-radius: 6px;
  color: #434656;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-btn:not(:disabled):hover {
  border-color: #003ec7;
  color: #003ec7;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 6px;
}

.page-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #c3c5d9;
  border-radius: 6px;
  color: #434656;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-number:hover:not(.active) {
  border-color: #003ec7;
  color: #003ec7;
}

.page-number.active {
  background: #003ec7;
  color: #ffffff;
  border-color: #003ec7;
}

/* Responsive */
@media (max-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .hero-section {
    padding: 56px 0 40px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-desc {
    font-size: 16px;
  }

  .grid-section {
    padding: 48px 0 80px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .filter-section {
    top: 64px;
    padding: 12px 0;
  }
}

@media (max-width: 480px) {
  .page-numbers {
    display: none;
  }

  .card-media {
    height: 220px;
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    font-size: 20px;
  }
}
</style>
