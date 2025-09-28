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
          <li v-for="(item, index) in currentNavItems" :key="index" :class="{'nav-item-active': currentRoute === item.id}">
            <RouterLink :to="item.link" :class="{'active': currentRoute === item.id}" @click="closeMenu">
              <span class="nav-item-text">{{ item.text }}</span>
              <span v-if="item.id === 'technology'" class="nav-item-badge">{{ isZh ? '核心' : 'Core' }}</span>
              <i class="fas fa-chevron-right nav-arrow"></i>
            </RouterLink>
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