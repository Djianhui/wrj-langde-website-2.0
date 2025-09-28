<template>
  <!-- 全局加载蒙层 -->
  <div class="app-loading" v-if="isLoading">
    <div class="loading-content">
      <div class="loading-logo">朗德智能</div>
      <div class="loading-spinner">
        <div class="spinner"></div>
      </div>
      <div class="loading-text">{{ isZh ? '加载中...' : 'Loading...' }}</div>
    </div>
  </div>

  <header :class="{'scrolled': isScrolled}" v-show="!isLoading">
    <div class="container">
      <!-- <div class="logo">
        <img src="/images/about/logo-ld.png" :alt="isZh ? '朗德智能' : 'Lande Intelligent'" class="logo-img">
      </div> -->
      <nav :class="{'active': isMenuActive}">
        <ul>
          <li v-for="(item, index) in currentNavItems" :key="index" 
              :class="{'nav-item-active': currentRoute === item.id, 'has-dropdown': item.children}"
              @mouseenter="showDropdown(item.id)"
              @mouseleave="hideDropdown(item.id)">
            <RouterLink :to="item.link" :class="{'active': currentRoute === item.id}" @click="closeMenu">
              <span class="nav-item-text">{{ item.text }}</span>
              <span v-if="item.id === 'products'" class="nav-item-badge">{{ isZh ? '核心' : 'Core' }}</span>
              <i v-if="item.children" class="fas fa-chevron-down nav-arrow dropdown-arrow"></i>
              <i v-else class="fas fa-chevron-right nav-arrow"></i>
            </RouterLink>
            
            <!-- 多级下拉菜单 -->
            <div v-if="item.children" 
                 class="dropdown-menu" 
                 :class="{'show': activeDropdown === item.id}"
                 @mouseenter="keepDropdown(item.id)"
                 @mouseleave="hideDropdown(item.id)">
              <div class="dropdown-content">
                <!-- 一级分类 -->
                <div v-for="category in item.children" :key="category.id" class="dropdown-category">
                  <div class="category-header" 
                       @click="handleCategoryClick(category)">
                    <span class="category-title">{{ category.text }}</span>
                    <i v-if="category.children" class="fas fa-chevron-right category-arrow"></i>
                  </div>
                  
                  <!-- 二级分类 -->
                  <div v-if="category.children" class="subcategory-list">
                    <div v-for="subcategory in category.children" :key="subcategory.id" class="subcategory-item">
                      <div class="subcategory-header"
                           @click="handleCategoryClick(subcategory)">
                        <span class="subcategory-title">{{ subcategory.text }}</span>
                        <i v-if="subcategory.children" class="fas fa-chevron-right subcategory-arrow"></i>
                      </div>
                      
                      <!-- 三级分类 -->
                      <div v-if="subcategory.children" class="product-list">
                        <RouterLink v-for="product in subcategory.children" 
                                    :key="product.id" 
                                    :to="product.link" 
                                    class="product-item"
                                    @click="handleProductClick(product.id)">
                          {{ product.text }}
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item-lang">
            <a href="#" class="lang-switch" @click.prevent="handleLanguageSwitch">
              <i class="fas fa-globe"></i>
              <span>{{ languageStore.currentLanguageText() }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu-btn" :class="{'active': isMenuActive}" @click.stop="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

  <!-- 移动菜单蒙层 -->
  <div class="mobile-menu-overlay" :class="{'active': isMenuActive}" @click="closeMenu"></div>

  <RouterView v-show="!isLoading" @page-loaded="handlePageLoaded" />
  
  <!-- 浮动语言切换按钮 -->
  <LanguageSwitcher floating v-show="!isLoading && !isMenuActive" />

  <footer v-show="!isLoading">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="/images/about/logo-ld.png" :alt="isZh ? '朗德智能' : 'Lande Intelligent'" class="footer-logo-img">
          <p>{{ currentFooterData.slogan }}</p>
        </div>
        <div class="footer-links">
          <div class="link-group" v-for="(group, index) in currentFooterData.linkGroups" :key="index">
            <h3>{{ group.title }}</h3>
            <ul>
              <li v-for="(link, linkIndex) in group.links" :key="linkIndex">
                <RouterLink :to="link.url">{{ link.text }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ currentFooterData.copyright }}</p>
        <p>{{ currentFooterData.icp }}</p>
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
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useLanguage } from '@/mixins/language'

// 获取路由
const router = useRouter()

// 获取语言相关功能
const languageStore = useLanguageStore()
const { isZh, isEn, currentLanguage } = useLanguage()

// 语言相关的便捷计算属性
const translationsStore = useTranslationsStore()

// 提供语言相关的依赖注入
provide('currentLanguage', currentLanguage)
provide('isZh', isZh)
provide('isEn', isEn)

// 全局加载状态
const isLoading = ref(true)
// 提供全局加载状态给子组件
provide('isLoading', isLoading)

// 页面滚动状态
const isScrolled = ref(false)
// 移动菜单状态
const isMenuActive = ref(false)
// 下拉菜单状态
const activeDropdown = ref(null)
let dropdownTimeout = null

// 获取当前语言的导航项
const currentNavItems = computed(() => {
  return translationsStore.getNavItems(languageStore.language)
})

// 获取当前语言的页脚数据
const currentFooterData = computed(() => {
  return translationsStore.getFooterData(languageStore.language)
})

// 原有的页脚数据（如果不使用翻译）
const footerData = {
  slogan: '智能反无人机系统，守护空域安全',
  copyright: '© 2025 杭州朗德智能科技有限公司 版权所有',
  icp: '',
  linkGroups: [
    {
      title: '关于我们',
      links: [
        { text: '企业简介', url: '/about' },
        { text: '企业文化', url: '/about/culture' },
        { text: '发展历程', url: '/about/history' },
        { text: '荣誉资质', url: '/about/honors' }
      ]
    },
    {
      title: '新闻中心',
      links: [
        { text: '企业新闻', url: '/news/company' },
        { text: '行业动态', url: '/news/industry' },
        { text: '媒体报道', url: '/news/media' },
        { text: '技术博客', url: '/news/blog' }
      ]
    }
  ]
}

const route = useRoute()
const contentStore = useContentStore()

const currentRoute = computed(() => {
  const path = route.path
  if (path === '/') return 'home'
  return path.split('/')[1]
})

// 处理页面加载完成事件
const handlePageLoaded = () => {
  // 页面内容加载完成后立即隐藏加载界面，不添加延迟
  isLoading.value = false
  
  // 添加安全机制：即使没有收到页面加载完成事件，也确保在合理时间后显示内容
  const safetyTimer = setTimeout(() => {
    if (isLoading.value) {
      console.log('安全机制触发：强制显示页面内容')
      isLoading.value = false
    }
  }, 2000) // 缩短最大等待时间
  
  // 组件卸载时清除计时器
  onUnmounted(() => {
    clearTimeout(safetyTimer)
  })
}

// 预加载基础数据
const preloadBaseData = async () => {
  try {
    // 获取网站基本信息
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

// 生命周期钩子 - 组件挂载完成
onMounted(async () => {
  // 预加载基础数据但不等待它完成
  preloadBaseData().catch(error => {
    console.error('基础数据加载失败:', error)
  })
  
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll)
  
  // 监听点击事件，点击菜单外部时关闭菜单
  document.addEventListener('click', (e) => {
    const target = e.target
    const isMenuBtn = target.closest('.mobile-menu-btn')
    const isMenu = target.closest('nav')
    
    if (!isMenuBtn && !isMenu && isMenuActive.value) {
      closeMenu()
    }
  })
  
  // 无论如何，确保页面最终显示出来
  // 如果是首页，默认加载一些时间，给初始加载界面展示机会
  setTimeout(() => {
    isLoading.value = false
  }, route.path === '/' ? 800 : 300)
  
  // 监听语言变化事件
  document.addEventListener('languageChanged', (e) => {
    // 语言变化后可以在这里执行一些操作
    console.log('Language changed to:', e.detail)
  })

  await contentStore.initializeContent()
})

// 监听路由变化
watch(() => route.path, () => {
  // 路由变化时关闭菜单
  closeMenu()
  // 路由变化时显示加载状态
  isLoading.value = true
  // 非首页快速恢复
  if (route.path !== '/') {
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  }
})

// 处理滚动事件
const handleScroll = () => {
  // 设置导航栏滚动状态
  isScrolled.value = window.scrollY > 50
}

// 切换移动菜单
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
  
  // 菜单打开时禁止页面滚动
  if (isMenuActive.value) {
    document.body.style.overflow = 'hidden'
    // 添加点击动画效果
    const menuBtn = document.querySelector('.mobile-menu-btn')
    if (menuBtn) {
      menuBtn.classList.add('menu-btn-clicked')
      setTimeout(() => {
        menuBtn.classList.remove('menu-btn-clicked')
      }, 300)
    }
  } else {
    document.body.style.overflow = ''
  }
}

// 关闭移动菜单
const closeMenu = () => {
  if (isMenuActive.value) {
    isMenuActive.value = false
    document.body.style.overflow = ''
    
    // 关闭时也添加按钮动画
    const menuBtn = document.querySelector('.mobile-menu-btn')
    if (menuBtn) {
      menuBtn.classList.add('menu-btn-clicked')
      setTimeout(() => {
        menuBtn.classList.remove('menu-btn-clicked')
      }, 300)
    }
  }
  // 同时关闭下拉菜单
  hideDropdown()
}

// 显示下拉菜单
const showDropdown = (itemId) => {
  if (dropdownTimeout) {
    clearTimeout(dropdownTimeout)
  }
  activeDropdown.value = itemId
}

// 隐藏下拉菜单
const hideDropdown = (itemId = null) => {
  dropdownTimeout = setTimeout(() => {
    if (!itemId || activeDropdown.value === itemId) {
      activeDropdown.value = null
    }
  }, 200)
}

// 保持下拉菜单显示
const keepDropdown = (itemId) => {
  if (dropdownTimeout) {
    clearTimeout(dropdownTimeout)
  }
  activeDropdown.value = itemId
}

// 处理分类点击
const handleCategoryClick = (category) => {
  // 发出分类选择事件
  const event = new CustomEvent('categorySelected', {
    detail: {
      categoryId: category.id,
      categoryText: category.text
    }
  })
  window.dispatchEvent(event)
  
  // 跳转到产品中心页面
  if (route.path !== '/technology') {
    router.push('/technology').then(() => {
      // 页面跳转完成后滚动到产品列表
      setTimeout(() => {
        scrollToProductList()
      }, 300)
    })
  } else {
    // 如果已经在产品中心页面，直接滚动到产品列表
    setTimeout(() => {
      scrollToProductList()
    }, 100)
  }
  
  hideDropdown()
  closeMenu()
}

// 处理产品点击
const handleProductClick = (productId) => {
  // 发出产品选择事件
  const event = new CustomEvent('productSelected', {
    detail: {
      productId: productId
    }
  })
  window.dispatchEvent(event)
  
  hideDropdown()
  closeMenu()
}

// 滚动到产品列表区域
const scrollToProductList = () => {
  // 查找产品列表容器，优先使用最精确的选择器
  const productListElement = document.querySelector('#product-list-container') || 
                           document.querySelector('.category-details') ||
                           document.querySelector('.product-list') ||
                           document.querySelector('.products-grid')
  
  if (productListElement) {
    // 计算滚动位置，考虑固定导航栏的高度
    const navHeight = 90 // 导航栏高度（考虑padding）
    const elementTop = productListElement.offsetTop
    const scrollTop = Math.max(0, elementTop - navHeight)
    
    console.log('滚动到产品列表:', {
      elementTop,
      navHeight,
      scrollTop
    })
    
    // 平滑滚动到目标位置
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    })
  } else {
    console.log('未找到产品列表元素，使用默认滚动')
    // 如果找不到具体元素，滚动到页面中间位置
    window.scrollTo({
      top: window.innerHeight * 0.5,
      behavior: 'smooth'
    })
  }
}

// 处理语言切换
const handleLanguageSwitch = () => {
  console.log('App.vue中的语言切换按钮被点击');
  
  // 获取当前语言
  const currentLang = languageStore.language;
  console.log('当前语言:', currentLang);
  
  // 切换语言
  languageStore.toggleLanguage();
  
  // 确保localStorage中的语言已更新
  console.log('切换后的语言:', localStorage.getItem('language'));
  
  // 直接刷新页面
  setTimeout(() => {
    console.log('执行页面刷新');
    window.location.reload();
  }, 100);
}

// 定义强制刷新标记
const refreshKey = ref(0)

// 监听语言变化
watch(() => languageStore.language, async (newLang) => {
  console.log('语言已变更，开始强制刷新视图:', newLang);
  
  // 临时显示加载界面
  isLoading.value = true;
  
  // 等待下一个DOM更新周期
  await nextTick();
  
  // 触发全局resize事件以重新计算布局
  window.dispatchEvent(new Event('resize'));
  
  // 触发特定元素的刷新
  const contentElements = document.querySelectorAll('.news-list, .tech-sections, .cases-grid, .news-article');
  contentElements.forEach(el => {
    if(el) {
      // 触发重绘
      el.style.opacity = '0.9';
      setTimeout(() => {
        el.style.opacity = '1';
      }, 50);
    }
  });
  
  // 短暂延迟后隐藏加载界面
  setTimeout(() => {
    isLoading.value = false;
    
    // 刷新当前路由
    const currentPath = router.currentRoute.value.fullPath;
    const refreshPath = currentPath.includes('?') 
      ? `${currentPath}&_t=${Date.now()}` 
      : `${currentPath}?_t=${Date.now()}`;
    
    router.replace(refreshPath);
  }, 300);
})
</script>

<style>
/* 导入主样式 */
@import './assets/base.css';

/* 全局加载样式 */
.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.8; transform: scale(1); }
}

.loading-spinner {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(79, 172, 254, 0.2);
  border-top: 4px solid #4facfe;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

/* 添加平滑淡入效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 隐藏未加载数据的内容 */
[v-cloak] {
  display: none;
}

/* 导航项特效样式 */
.nav-item-active {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.nav-item-text {
  position: relative;
  z-index: 1;
}

.nav-item-badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 3px 8px rgba(56, 189, 248, 0.3);
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
}

.nav-item-active .nav-item-badge {
  opacity: 1;
  transform: translateY(0);
}

.nav-item-lang {
  margin-left: 10px;
}

.nav-arrow {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

nav ul li a:hover .nav-arrow,
nav ul li a.active .nav-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #4facfe;
}

@media (max-width: 767px) {
  .nav-item-lang {
    margin-left: 0;
    margin-top: 15px;
  }
  
  .nav-item-badge {
    position: relative;
    top: 0;
    right: 0;
    display: inline-block;
    margin-left: 8px;
    opacity: 1;
    transform: none;
  }
  
  .nav-arrow {
    opacity: 1;
    transform: none;
    font-size: 1rem;
  }
}

/* 添加菜单按钮点击动画 */
.menu-btn-clicked {
  transform: scale(0.9);
  transition: transform 0.2s ease;
}

.menu-btn-clicked span {
  background: #00f2fe !important;
}

/* 多级下拉菜单样式 */
.has-dropdown {
  position: relative;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.has-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 280px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.99) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1000;
  padding: 15px 0;
  margin-top: 10px;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-content {
  max-height: 500px;
  overflow-y: auto;
}

.dropdown-category {
  margin-bottom: 8px;
}

/* 一级分类样式优化 */
.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 8px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.08) 0%, rgba(0, 242, 254, 0.08) 100%);
  position: relative;
  overflow: hidden;
}

.category-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.category-header:hover::before {
  transform: scaleY(1);
}

.category-header:hover {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.18) 0%, rgba(0, 242, 254, 0.18) 100%);
  border-color: rgba(79, 172, 254, 0.4);
  color: #ffffff;
  transform: translateX(8px) scale(1.02);
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.25);
}

.category-title {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.category-arrow {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.category-header:hover .category-arrow {
  color: #4facfe;
  transform: translateX(4px) scale(1.1);
}

/* 二级分类样式优化 */
.subcategory-list {
  padding-left: 24px;
  margin-top: 10px;
  border-left: 2px solid rgba(56, 189, 248, 0.2);
  position: relative;
}

.subcategory-list::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #38bdf8 0%, rgba(56, 189, 248, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.subcategory-item:hover ~ .subcategory-list::before,
.subcategory-list:hover::before {
  opacity: 1;
}

.subcategory-item {
  margin-bottom: 8px;
}

.subcategory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.06) 0%, rgba(14, 165, 233, 0.06) 100%);
  position: relative;
  overflow: hidden;
}

.subcategory-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #38bdf8 0%, #0ea5e9 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.subcategory-header:hover::before {
  transform: scaleY(1);
}

.subcategory-header:hover {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%);
  border-color: rgba(56, 189, 248, 0.3);
  color: #ffffff;
  transform: translateX(6px);
  box-shadow: 0 5px 20px rgba(56, 189, 248, 0.2);
}

.subcategory-title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.subcategory-arrow {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.subcategory-header:hover .subcategory-arrow {
  color: #38bdf8;
  transform: translateX(3px) scale(1.05);
}

/* 三级产品样式优化 */
.product-list {
  padding-left: 20px;
  margin-top: 8px;
  border-left: 1px solid rgba(100, 116, 139, 0.2);
  position: relative;
}

.product-list::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, #64748b 0%, rgba(100, 116, 139, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-list:hover::before {
  opacity: 1;
}

.product-item {
  display: block;
  padding: 10px 16px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  margin: 3px 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.04) 0%, rgba(71, 85, 105, 0.04) 100%);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.2px;
}

.product-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #64748b 0%, #475569 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.product-item:hover::before {
  transform: scaleY(1);
}

.product-item:hover {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.1) 0%, rgba(71, 85, 105, 0.1) 100%);
  border-color: rgba(100, 116, 139, 0.25);
  color: #e2e8f0;
  transform: translateX(4px);
  text-decoration: none;
  box-shadow: 0 3px 15px rgba(100, 116, 139, 0.15);
  font-weight: 600;
}

/* 滚动条样式 */
.dropdown-content::-webkit-scrollbar {
  width: 4px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: rgba(79, 172, 254, 0.5);
  border-radius: 2px;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: rgba(79, 172, 254, 0.7);
}

/* 响应式处理 */
@media (max-width: 1024px) {
  .dropdown-menu {
    min-width: 250px;
  }
}

/* 移动端隐藏下拉菜单 */
@media (max-width: 767px) {
  .dropdown-menu {
    display: none;
  }
  
  .dropdown-arrow {
    display: none;
  }
  
  .nav-arrow {
    opacity: 1;
    transform: none;
    font-size: 1rem;
  }
}

/* 添加导航链接点击动画 */
nav ul li a:active {
  transform: scale(0.97);
  transition: transform 0.1s ease;
}

/* 移动端导航按钮增强 */
@media (max-width: 767px) {
  .mobile-menu-btn {
    padding: 10px;
    background: rgba(15, 23, 42, 0.6);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .mobile-menu-btn:hover {
    background: rgba(15, 23, 42, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  .mobile-menu-btn.active {
    background: rgba(79, 172, 254, 0.2);
    border-color: rgba(79, 172, 254, 0.3);
  }
}

/* iOS设备兼容性修复 */
@supports (-webkit-touch-callout: none) {
  nav {
    background: rgba(15, 23, 42, 0.98);
  }
  
  .mobile-menu-btn {
    -webkit-tap-highlight-color: transparent;
  }
  
  .mobile-menu-overlay {
    background: rgba(15, 23, 42, 0.9);
  }
}

/* 优化语言切换按钮样式 */
.lang-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(90deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
}

.lang-switch:hover {
  background: linear-gradient(90deg, rgba(79, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.3) 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.lang-switch:active {
  transform: translateY(-1px);
}

.lang-switch i {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 767px) {
  .lang-switch {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    font-size: 1rem;
  }
  
  .lang-switch i {
    font-size: 1.1rem;
  }
}

/* 添加语言切换动画 */
@keyframes langSwitchFade {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.lang-switch span {
  animation: langSwitchFade 0.3s ease forwards;
}
</style> 