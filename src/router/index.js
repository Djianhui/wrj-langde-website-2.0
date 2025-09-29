import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/TechnologyView.vue')
    },
    // 产品中心路由
    {
      path: '/products/defense/detection/radar',
      name: 'radar-detection',
      component: () => import('../views/products/RadarDetectionView.vue')
    },
      {
      path: '/products/defense/detection/fixed',
      name: 'fixed-detector',
      component: () => import('../views/products/FixedDetectorView.vue')
    },
      {
      path: '/products/defense/detection/low-altitude-radar',
      name: 'fixed-detector',
      component: () => import('../views/products/LowAltitudeRadarView.vue')
    },
    {
      path: '/products/defense/detection/optical',
      name: 'optical-detection',
      component: () => import('../views/products/OpticalDetectionView.vue')
    },
    {
      path: '/products/defense/detection/spectrum',
      name: 'spectrum-detection',
      component: () => import('../views/products/SpectrumDetectionView.vue')
    },
    {
      path: '/products/defense/jamming',
      name: 'jamming-system',
      component: () => import('../views/products/JammingSystemView.vue')
    },
    {
      path: '/products/defense/integrated',
      name: 'integrated-defense',
      component: () => import('../views/products/IntegratedDefenseView.vue')
    },
    {
      path: '/products/low-altitude/agriculture',
      name: 'agriculture-drone',
      component: () => import('../views/products/AgricultureDroneView.vue')
    },
    {
      path: '/products/low-altitude/patrol',
      name: 'patrol-drone',
      component: () => import('../views/products/PatrolDroneView.vue')
    },
    {
      path: '/products/low-altitude/fpv',
      name: 'fpv-drone',
      component: () => import('../views/products/FpvDroneView.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('../views/CasesView.vue')
    },
    {
      path: '/cases/:id',
      name: 'case-detail',
      component: () => import('../views/CaseDetailView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/:category',
      name: 'news-category',
      component: () => import('../views/NewsCategoryView.vue')
    },
    {
      path: '/news/detail/:id',
      name: 'news-detail',
      component: () => import('../views/NewsDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about/:section',
      name: 'about-section',
      component: () => import('../views/AboutSectionView.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // 管理后台路由
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/admin/AdminLoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'admin-dashboard',
          component: () => import('../views/admin/DashboardView.vue')
        },
        {
          path: 'content',
          name: 'admin-content',
          component: () => import('../views/admin/ContentView.vue')
        },
        {
          path: 'messages',
          name: 'admin-messages',
          component: () => import('../views/admin/MessagesView.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（如浏览器前进/后退），则恢复到保存的位置
    if (savedPosition) {
      return savedPosition
    }
    
    // 如果是从导航栏跳转到产品中心页面，不自动滚动到顶部
    // 让 App.vue 中的滚动逻辑处理
    if (to.path === '/technology' && from.path !== '/technology') {
      return false // 不进行自动滚动
    }
    
    // 其他情况滚动到顶部
    return { top: 0 }
  }
})

// 路由守卫，用于管理员认证
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查用户是否已登录
    const isLoggedIn = localStorage.getItem('admin-token')
    if (!isLoggedIn) {
      // 如果没有登录，重定向到登录页面
      next({ name: 'admin-login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router 