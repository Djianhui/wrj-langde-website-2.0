<template>
  <header :class="{'scrolled': isScrolled}">
    <div class="nav-container">
      <!-- Logo -->
      <div class="nav-logo">
        <img src="/images/about/logo.png" alt="朗德智能" class="nav-logo-img">
        <span class="nav-logo-text">朗德智能科技</span>
      </div>

      <!-- Nav links -->
      <nav :class="{'active': isMenuActive}">
        <ul>
          <li v-for="(item, index) in currentNavItems" :key="index"
              :class="{'has-dropdown': item.children}"
              @mouseenter="showDropdown(item.id)"
              @mouseleave="hideDropdown(item.id)">
            <RouterLink :to="item.link" :class="{'active': currentRoute === item.id}" @click="closeMenu">
              {{ item.text }}
              <i v-if="item.children" class="fas fa-chevron-down dropdown-arrow"></i>
            </RouterLink>

            <!-- 多级下拉菜单 -->
            <div v-if="item.children"
                 class="dropdown-menu"
                 :class="{'show': activeDropdown === item.id}"
                 @mouseenter="keepDropdown(item.id)"
                 @mouseleave="hideDropdown(item.id)">
              <div class="dropdown-content">
                <div class="menu-levels">
                  <div class="level-column level-1-column">
                    <div class="level-header">产品分类</div>
                    <div v-for="category in item.children"
                         :key="category.id"
                         class="menu-item level-1-item"
                         :class="{'active': hoveredCategory?.id === category.id}"
                         @mouseenter="setHoveredCategory(category)"
                         @click="handleCategoryClick(category)">
                      <div class="item-content">
                        <span class="item-title">{{ category.text }}</span>
                        <i v-if="category.children" class="fas fa-chevron-right item-arrow"></i>
                      </div>
                    </div>
                  </div>

                  <div v-if="hoveredCategory && hoveredCategory.children"
                       class="level-column level-2-column">
                    <div class="level-header">{{ hoveredCategory.text }}</div>
                    <div v-for="subcategory in hoveredCategory.children"
                         :key="subcategory.id"
                         class="menu-item level-2-item"
                         :class="{'active': hoveredSubcategory?.id === subcategory.id}"
                         @mouseenter="setHoveredSubcategory(subcategory)"
                         @click="handleCategoryClick(subcategory)">
                      <div class="item-content">
                        <span class="item-title">{{ subcategory.text }}</span>
                        <i v-if="subcategory.children" class="fas fa-chevron-right item-arrow"></i>
                      </div>
                    </div>
                  </div>

                  <div v-if="hoveredSubcategory && hoveredSubcategory.children"
                       class="level-column level-3-column">
                    <div class="level-header">{{ hoveredSubcategory.text }}</div>
                    <div v-for="product in hoveredSubcategory.children"
                         :key="product.id"
                         class="menu-item level-3-item"
                         @click="handleProductClick(product.id)">
                      <div class="item-content">
                        <span class="item-title">{{ product.text }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

     <!-- 右侧：联系我们按钮 -->
      <div class="nav-actions">
        <RouterLink to="/contact" class="nav-cta">联系我们</RouterLink>
      </div>

      <!-- 移动端汉堡菜单 -->
      <div class="mobile-menu-btn" :class="{'active': isMenuActive}" @click.stop="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

  <!-- 移动菜单蒙层 -->
  <div class="mobile-menu-overlay" :class="{'active': isMenuActive}" @click="closeMenu"></div>

  <RouterView />

  <footer class="site-footer">
    <div class="site-footer-inner">
      <!-- 第 1 列：Logo + slogan + 社交图标 -->
      <div class="footer-col footer-brand">
        <div class="footer-logo-row">
          <img src="/images/about/logo.png" :alt="isZh ? '朗德智能' : 'Lande Intelligent'" class="footer-brand-logo">
          <span class="footer-brand-name">{{ isZh ? '朗德智能科技' : 'Lande Intelligent' }}</span>
        </div>
        <p class="footer-slogan">
          {{ isZh
            ? '科技护航，安全至上。我们专注于低空空域安全，提供全流程、全手段的无人机防御解决方案。'
            : 'Technology protects, safety first. We focus on low-altitude airspace security with end-to-end anti-drone defense solutions.' }}
        </p>
        <div class="footer-socials">
          <a :href="`mailto:${footerContact.email}`" class="footer-social" :aria-label="isZh ? '邮箱' : 'Email'">
            <i class="fas fa-envelope"></i>
          </a>
          <a :href="`tel:${footerContact.phone}`" class="footer-social" :aria-label="isZh ? '电话' : 'Phone'">
            <i class="fas fa-phone"></i>
          </a>
        </div>
      </div>

      <!-- 第 2 列：快速链接 -->
      <div class="footer-col">
        <h6 class="footer-col-title">{{ isZh ? '快速链接' : 'Quick Links' }}</h6>
        <ul class="footer-link-list">
          <li><RouterLink to="/">{{ isZh ? '首页' : 'Home' }}</RouterLink></li>
          <li><RouterLink to="/technology">{{ isZh ? '产品中心' : 'Products' }}</RouterLink></li>
          <li><RouterLink to="/cases">{{ isZh ? '应用案例' : 'Cases' }}</RouterLink></li>
          <li><RouterLink to="/about">{{ isZh ? '关于我们' : 'About Us' }}</RouterLink></li>
        </ul>
      </div>

      <!-- 第 3 列：法律与支持 -->
      <!-- <div class="footer-col">
        <h6 class="footer-col-title">{{ isZh ? '法律与支持' : 'Legal & Support' }}</h6>
        <ul class="footer-link-list">
          <li><a href="#">{{ isZh ? '隐私政策' : 'Privacy Policy' }}</a></li>
          <li><RouterLink to="/join">{{ isZh ? '诚聘英才' : 'Careers' }}</RouterLink></li>
        </ul>
      </div> -->

      <!-- 第 4 列：联系详情 -->
      <div class="footer-col">
        <h6 class="footer-col-title">{{ isZh ? '联系详情' : 'Contact Details' }}</h6>
        <p class="footer-contact-line">
          <i class="fas fa-map-marker-alt footer-contact-icon"></i>
          <span><span class="footer-contact-label">{{ isZh ? '地址：' : 'Address: ' }}</span>{{ footerContact.address }}</span>
        </p>
        <p class="footer-contact-line">
          <i class="fas fa-phone-alt footer-contact-icon"></i>
          <span><span class="footer-contact-label">{{ isZh ? '电话：' : 'Phone: ' }}</span>{{ footerContact.phone }}</span>
        </p>
        <p class="footer-contact-line">
          <i class="fas fa-envelope footer-contact-icon"></i>
          <span><span class="footer-contact-label">{{ isZh ? '邮箱：' : 'Email: ' }}</span>{{ footerContact.email }}</span>
        </p>
      </div>
    </div>

    <div class="site-footer-bottom">
      <div class="site-footer-bottom-inner">
        <p>{{ currentFooterData.copyright }}{{ currentFooterData.icp ? ' | ' + currentFooterData.icp : '' }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed, watch, provide, onUnmounted, nextTick } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useContentStore } from '@/store/modules/content'
import { useLanguageStore } from '@/store/modules/language'
import { useTranslationsStore } from '@/store/modules/translations'
import { useLanguage } from '@/mixins/language'

const router = useRouter()
const languageStore = useLanguageStore()
const { isZh, isEn, currentLanguage } = useLanguage()
const translationsStore = useTranslationsStore()

provide('currentLanguage', currentLanguage)
provide('isZh', isZh)
provide('isEn', isEn)

const isScrolled = ref(false)
const isMenuActive = ref(false)
const activeDropdown = ref(null)
const hoveredCategory = ref(null)
const hoveredSubcategory = ref(null)
let dropdownTimeout = null

const currentNavItems = computed(() => {
  return translationsStore.getNavItems(languageStore.language)
})

const currentFooterData = computed(() => {
  return translationsStore.getFooterData(languageStore.language)
})

// 页脚联系信息（优先从 site-info store 取，缺失时使用默认）
const footerContact = computed(() => {
  const zh = isZh.value
  return {
    address: zh ? '浙江省杭州市上城区明石路515号明石商业大厦9楼9173室' : 'Yuhang District, Hangzhou, Zhejiang, China',
    phone: '13548973785',
    email: '173462959@qq.com'
  }
})

const route = useRoute()
const contentStore = useContentStore()

const currentRoute = computed(() => {
  const path = route.path
  if (path === '/') return 'home'
  return path.split('/')[1]
})

const preloadBaseData = async () => {
  try {
    const result = await contentStore.fetchContent('site-info')
    if (result === null && contentStore.error) {
      console.error('基础数据加载失败:', contentStore.error)
      return false
    }
    return true
  } catch (error) {
    console.error('基础数据加载失败:', error)
    return false
  }
}

onMounted(async () => {
  preloadBaseData().catch(error => {
    console.error('基础数据加载失败:', error)
  })

  window.addEventListener('scroll', handleScroll)

  document.addEventListener('click', (e) => {
    const target = e.target
    const isMenuBtn = target.closest('.mobile-menu-btn')
    const isMenu = target.closest('nav')
    const isDropdown = target.closest('.dropdown-menu')
    const isProductCenter = target.closest('.has-dropdown')

    if (!isMenuBtn && !isMenu && !isDropdown && !isProductCenter) {
      if (isMenuActive.value) closeMenu()
      if (activeDropdown.value) hideDropdownImmediately()
    }
  })

  await contentStore.initializeContent()
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  if (activeDropdown.value && window.scrollY > 50) {
    hideDropdownImmediately()
  }
}

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
  document.body.style.overflow = isMenuActive.value ? 'hidden' : ''
}

const closeMenu = () => {
  if (isMenuActive.value) {
    isMenuActive.value = false
    document.body.style.overflow = ''
  }
  hideDropdown()
}

const showDropdown = (itemId) => {
  if (dropdownTimeout) clearTimeout(dropdownTimeout)
  activeDropdown.value = itemId
  hoveredCategory.value = null
  hoveredSubcategory.value = null
}

const hideDropdown = (itemId = null) => {
  dropdownTimeout = setTimeout(() => {
    if (!itemId || activeDropdown.value === itemId) {
      activeDropdown.value = null
      hoveredCategory.value = null
      hoveredSubcategory.value = null
    }
  }, 200)
}

const keepDropdown = (itemId) => {
  if (dropdownTimeout) clearTimeout(dropdownTimeout)
  activeDropdown.value = itemId
}

const setHoveredCategory = (category) => {
  hoveredCategory.value = category
  hoveredSubcategory.value = null
}

const setHoveredSubcategory = (subcategory) => {
  hoveredSubcategory.value = subcategory
}

const handleCategoryClick = (category) => {
  const event = new CustomEvent('categorySelected', {
    detail: { categoryId: category.id, categoryText: category.text }
  })
  window.dispatchEvent(event)
  hideDropdownImmediately()

  if (route.path !== '/technology') {
    router.push('/technology').then(() => {
      setTimeout(() => scrollToProductList(), 1000)
    })
  } else {
    setTimeout(() => scrollToProductList(), 200)
  }
  closeMenu()
}

const handleProductClick = (productId) => {
  const event = new CustomEvent('productSelected', { detail: { productId } })
  window.dispatchEvent(event)
  hideDropdownImmediately()
  closeMenu()

  if (router.currentRoute.value.path !== '/technology') {
    router.push('/technology').then(() => {
      setTimeout(() => scrollToProductList(), 300)
    })
  } else {
    setTimeout(() => scrollToProductList(), 100)
  }
}

const hideDropdownImmediately = () => {
  if (dropdownTimeout) clearTimeout(dropdownTimeout)
  activeDropdown.value = null
  hoveredCategory.value = null
  hoveredSubcategory.value = null
}

const scrollToProductList = () => {
  hideDropdownImmediately()
  const productElement = document.querySelector('.product-categories')
  if (productElement) {
    const rect = productElement.getBoundingClientRect()
    const targetPos = Math.max(200, rect.top + window.pageYOffset - 100)
    window.scrollTo({ top: targetPos, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 800, behavior: 'smooth' })
  }
}

watch(() => languageStore.language, async () => {
  await nextTick()
  window.dispatchEvent(new Event('resize'))
  setTimeout(() => {
    const currentPath = router.currentRoute.value.fullPath
    const refreshPath = currentPath.includes('?')
      ? `${currentPath}&_t=${Date.now()}`
      : `${currentPath}?_t=${Date.now()}`
    router.replace(refreshPath)
  }, 300)
})
</script>

<style>
@import './assets/base.css';

[v-cloak] {
  display: none;
}

/* ===== 导航栏 — 精确对齐参考 HTML ===== */
header {
  position: sticky !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  /* bg-surface/80 = rgba(251,248,255,0.8) */
  background: rgba(251, 248, 255, 0.8) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  /* border-outline-variant/30 = rgba(195,197,217,0.3) */
  border-bottom: 1px solid rgba(195, 197, 217, 0.3);
  box-shadow: none !important;
  z-index: 1000;
  padding: 0 !important;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

header.scrolled {
  background: rgba(251, 248, 255, 0.96) !important;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.06) !important;
}

/* px-gutter=24px, max-w-container-max=1280px */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
}

/* Logo: gap-sm=12px */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  text-decoration: none;
}

/* h-10=40px */
.nav-logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* font-headline-md: Manrope 24px 600, text-primary=#003ec7 */
.nav-logo-text {
  font-family: 'Manrope', 'PingFang SC', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #003ec7;
  white-space: nowrap;
  letter-spacing: 0;
  line-height: 1.3;
}

/* Nav: gap-lg=48px */
nav ul {
  display: flex;
  align-items: center;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  position: relative;
}

/* text-body-md: Inter 16px, text-on-surface-variant=#434656 */
/* 注：覆盖 base.css 中 nav ul li a 的 border-radius/background/padding/::before */
nav ul li a {
  display: flex !important;
  align-items: center;
  gap: 4px;
  padding: 6px 2px !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  font-family: 'Inter', 'PingFang SC', sans-serif;
  color: #434656 !important;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  white-space: nowrap;
  background: transparent !important;
  border-radius: 0 !important;
  letter-spacing: 0;
  transform: none !important;
}

/* 禁用 base.css 的 ::before 渐变伪元素下划线 */
nav ul li a::before {
  display: none !important;
  content: none !important;
}

nav ul li a:hover {
  color: #003ec7 !important;
  background: transparent !important;
  transform: none !important;
}

/* active：纯下划线风格，无胶囊背景 */
nav ul li a.active {
  color: #003ec7 !important;
  font-weight: 700 !important;
  background: transparent !important;
  border-radius: 0 !important;
}

/* 使用 ::after 伪元素做居中短下划线（覆盖 base.css 的 display:none） */
nav ul li a.active::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  left: 2px;
  right: 2px;
  bottom: -4px;
  height: 2.5px;
  background: #003ec7 !important;
  border-radius: 2px;
  opacity: 1 !important;
}

.dropdown-arrow {
  font-size: 10px;
  transition: transform 0.25s ease;
  opacity: 0.5;
  margin-left: 2px;
}

.has-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
  opacity: 1;
}

/* Right actions */
.nav-actions {
  display: flex;
  align-items: center;
  /* gap-md=24px */
  gap: 24px;
  flex-shrink: 0;
}

/* bg-surface-container=#ededfb, rounded-full, px-4 py-2, border-outline-variant/30 */
.nav-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ededfb;
  border: 1px solid rgba(195, 197, 217, 0.3);
  border-radius: 100px;
  padding: 8px 16px;
}

.nav-search-icon {
  font-size: 18px;
  color: #737688;
}

/* text-sm=14px, w-32=128px, placeholder:text-outline=#737688 */
.nav-search-input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: #191b25;
  width: 128px;
  font-family: 'Inter', 'PingFang SC', sans-serif;
}

.nav-search-input::placeholder {
  color: #737688;
}

/* bg-primary px-6 py-2.5 rounded-lg font-bold */
.nav-cta {
  display: inline-flex;
  align-items: center;
  background: #003ec7;
  color: #ffffff !important;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', 'PingFang SC', sans-serif;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}

.nav-cta:hover {
  opacity: 0.9;
}

.nav-cta:active {
  transform: scale(0.97);
}

/* Mobile */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  z-index: 1001;
  padding: 11px 6px;
  background: transparent;
  border: none;
  -webkit-tap-highlight-color: transparent;
}

.mobile-menu-btn span {
  display: block;
  height: 2px;
  width: 22px;
  background: #434656;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(251, 248, 255, 0.97);
  backdrop-filter: blur(10px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 62, 199, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(195, 197, 217, 0.4);
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  padding: 12px 0;
  pointer-events: none;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-content {
  max-height: 500px;
  overflow: hidden;
}

.menu-levels {
  display: flex;
  min-height: 150px;
}

.level-column {
  padding: 0 12px;
  min-height: 100%;
}

.level-1-column {
  width: 200px;
  background: rgba(0, 62, 199, 0.03);
  border-radius: 8px 0 0 8px;
  border-right: 1px solid rgba(195, 197, 217, 0.3);
}

.level-2-column {
  width: 220px;
  border-right: 1px solid rgba(195, 197, 217, 0.3);
}

.level-3-column {
  width: 260px;
  border-radius: 0 8px 8px 0;
}

.level-header {
  padding: 10px 12px;
  color: #191b25;
  font-weight: 600;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 62, 199, 0.15);
  margin-bottom: 8px;
  font-family: 'Inter', 'PingFang SC', sans-serif;
}

.menu-item {
  margin-bottom: 2px;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
}

.item-title {
  font-size: 13px;
  font-weight: 500;
  font-family: 'Inter', 'PingFang SC', sans-serif;
  color: #434656;
}

.item-arrow {
  font-size: 10px;
  color: #737688;
  transition: all 0.2s ease;
}

.menu-item:hover {
  background: rgba(0, 62, 199, 0.07);
}

.menu-item:hover .item-title {
  color: #003ec7;
}

.menu-item.active {
  background: rgba(0, 62, 199, 0.1);
}

.menu-item.active .item-title {
  color: #003ec7;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .nav-search {
    display: none;
  }
}

@media (max-width: 767px) {
  /* ===== 移动端 header 压缩 ===== */
  header {
    height: 64px;
  }

  .nav-container {
    padding: 0 16px;
  }

  .nav-logo {
    gap: 10px;
  }

  .nav-logo-img {
    height: 36px;
  }

  .nav-logo-text {
    font-size: 17px;
    letter-spacing: 0.01em;
  }

  /* ===== 汉堡按钮：品牌色胶囊，白线醒目 ===== */
  .mobile-menu-btn {
    display: flex !important;
    width: 42px !important;
    height: 42px !important;
    padding: 0 !important;
    gap: 4px !important;
    background: linear-gradient(135deg, #003ec7 0%, #5b8cff 100%) !important;
    border: none !important;
    border-radius: 12px !important;
    box-shadow: 0 6px 16px rgba(0, 62, 199, 0.25),
                0 2px 4px rgba(0, 62, 199, 0.12) !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mobile-menu-btn span {
    display: block !important;
    width: 18px !important;
    height: 2px !important;
    background: #ffffff !important;
    border-radius: 2px !important;
    transition: all 0.3s ease;
  }

  .mobile-menu-btn:hover,
  .mobile-menu-btn:hover span {
    background: inherit;
  }

  .mobile-menu-btn:active {
    transform: scale(0.94);
    box-shadow: 0 2px 6px rgba(0, 62, 199, 0.2) !important;
  }

  .mobile-menu-btn.active {
    background: linear-gradient(135deg, #191b25 0%, #434656 100%) !important;
    border-color: transparent !important;
    box-shadow: 0 6px 16px rgba(25, 27, 37, 0.25) !important;
  }

  .mobile-menu-btn.active span {
    background: #ffffff !important;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(4px, 4px) !important;
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0 !important;
    transform: translateX(-10px) !important;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px) !important;
  }

  /* ===== 移动菜单面板：实底白 + 全屏 + 卡片化 ===== */
  nav {
    display: none;
  }

  nav.active {
    display: flex !important;
    position: fixed !important;
    top: 64px !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: calc(100vh - 64px) !important;
    z-index: 9999 !important;
    flex-direction: column !important;
    align-items: stretch !important;
    padding: 20px 16px 40px !important;
    background: #ffffff !important;
    box-shadow: 0 20px 40px rgba(15, 18, 48, 0.08);
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
    animation: navSlideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes navSlideDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  nav.active ul {
    flex-direction: column;
    width: 100%;
    gap: 4px;
  }

  nav.active ul li {
    width: 100%;
  }

  nav.active ul li a {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px !important;
    font-weight: 600 !important;
    padding: 16px 18px !important;
    color: #0f1230 !important;
    border-radius: 12px;
    background: transparent !important;
    border-left: 3px solid transparent;
    transition: all 0.25s ease;
  }

  nav.active ul li a:hover,
  nav.active ul li a:focus {
    background: linear-gradient(135deg, rgba(0, 62, 199, 0.06) 0%, rgba(91, 140, 255, 0.04) 100%) !important;
    color: #003ec7 !important;
  }

  nav.active ul li a.active {
    background: linear-gradient(135deg, rgba(0, 62, 199, 0.1) 0%, rgba(91, 140, 255, 0.06) 100%) !important;
    color: #003ec7 !important;
    border-left: 3px solid #003ec7;
    padding-left: 15px !important;
  }

  /* 覆盖桌面端 ::after 下划线，避免与左条冲突 */
  nav.active ul li a.active::after {
    display: none !important;
  }

  .nav-actions .nav-cta {
    display: none;
  }

  .dropdown-menu {
    display: none;
  }
}

/* ===== 页脚 — 精细化样式 ===== */
.site-footer {
  position: relative;
  background: linear-gradient(180deg, #f5f5fb 0%, #eaeaf5 100%) !important;
  color: #191b25 !important;
  border-top: 1px solid rgba(195, 197, 217, 0.4);
  padding: 0 !important;
  font-family: 'Inter', 'PingFang SC', sans-serif;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #003ec7 25%, #5b8cff 50%, #003ec7 75%, transparent 100%);
  opacity: 0.85;
}

.site-footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 32px 48px;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr;
  gap: 64px;
}

.footer-col {
  min-width: 0;
}

.footer-col-title {
  position: relative;
  font-size: 15px;
  font-weight: 700;
  color: #0f1230;
  letter-spacing: 0.04em;
  margin: 0 0 28px 0;
  padding-left: 12px;
  font-family: 'Inter', 'PingFang SC', sans-serif;
}

.footer-col-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 14px;
  border-radius: 2px;
  background: linear-gradient(180deg, #003ec7 0%, #5b8cff 100%);
}

/* 第一列：品牌 */
.footer-brand {
  grid-column: span 1;
  max-width: 380px;
}

.footer-logo-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.footer-brand-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

.footer-brand-name {
  font-family: 'Manrope', 'PingFang SC', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #0f1230;
  white-space: nowrap;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.footer-slogan {
  font-size: 13.5px;
  color: #4a4d63;
  line-height: 1.75;
  margin: 0 0 24px 0;
  opacity: 1;
}

/* 社交图标 */
.footer-socials {
  display: flex;
  gap: 12px;
}

.footer-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #ffffff;
  color: #003ec7;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid rgba(0, 62, 199, 0.15);
  box-shadow: 0 1px 2px rgba(15, 18, 48, 0.04);
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.footer-social:hover {
  background: linear-gradient(135deg, #003ec7 0%, #5b8cff 100%);
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 62, 199, 0.28);
}

/* 链接列 */
.footer-link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link-list li {
  margin: 0;
}

.footer-link-list a {
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: #4a4d63;
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
  opacity: 1;
}

.footer-link-list a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background: #003ec7;
  transition: width 0.25s ease;
}

.footer-link-list a:hover {
  color: #003ec7;
  padding-left: 18px;
}

.footer-link-list a:hover::before {
  width: 12px;
}

/* 联系详情 */
.footer-contact-line {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13.5px;
  color: #4a4d63;
  line-height: 1.7;
  margin: 0 0 14px 0;
  opacity: 1;
  word-break: break-word;
}

.footer-contact-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: rgba(0, 62, 199, 0.08);
  color: #003ec7;
  font-size: 11px;
  margin-top: 2px;
}

.footer-contact-label {
  color: #737688;
}

/* 底部版权条 */
.site-footer-bottom {
  border-top: 1px solid rgba(195, 197, 217, 0.5);
  background: rgba(255, 255, 255, 0.4);
}

.site-footer-bottom-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 32px;
  text-align: center;
}

.site-footer-bottom-inner p {
  font-size: 12px;
  color: #737688;
  margin: 0;
  letter-spacing: 0.02em;
  opacity: 1;
}

/* 响应式 */
@media (max-width: 900px) {
  .site-footer-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 56px 24px 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: none;
  }
}

@media (max-width: 520px) {
  .site-footer-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 48px 20px 36px;
  }

  .footer-brand-name {
    font-size: 18px;
  }

  .site-footer-bottom-inner {
    padding: 18px 20px;
  }
}
</style>
