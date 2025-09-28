<template>
  <div class="admin-layout">
    <!-- 侧边栏 -->
    <div class="admin-sidebar" :class="{ 'active': isSidebarOpen }">
      <div class="logo">
        <h2>朗德智能</h2>
        <p>管理后台</p>
      </div>
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'admin-dashboard' }" active-class="active">
              <i class="fas fa-tachometer-alt"></i> 控制面板
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'admin-content' }" active-class="active">
              <i class="fas fa-edit"></i> 内容管理
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'admin-messages' }" active-class="active">
              <i class="fas fa-envelope"></i> 消息管理
            </RouterLink>
          </li>
          <li>
            <a href="#" @click.prevent="logout">
              <i class="fas fa-sign-out-alt"></i> 退出登录
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
    <!-- 移动端切换按钮 -->
    <div class="admin-toggle" @click="toggleSidebar" v-if="isMobile">
      <i class="fas" :class="isSidebarOpen ? 'fa-times' : 'fa-bars'"></i>
    </div>
    
    <!-- 内容区域 -->
    <div class="admin-content">
      <header class="admin-header">
        <h1>{{ pageTitle }}</h1>
        <div class="user-info">
          <span>{{ user.username }}</span>
        </div>
      </header>
      
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/store/modules/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const route = useRoute()
const router = useRouter()

// 侧边栏状态
const isSidebarOpen = ref(false)
const isMobile = ref(false)

// 页面标题
const pageTitle = computed(() => {
  switch (route.name) {
    case 'admin-dashboard':
      return '控制面板'
    case 'admin-content':
      return '内容管理'
    case 'admin-messages':
      return '消息管理'
    default:
      return '管理后台'
  }
})

// 切换侧边栏
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// 登出
const logout = () => {
  authStore.logout()
  router.push('/admin/login')
}

// 检查窗口大小
const checkWindowSize = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) {
    isSidebarOpen.value = false
  }
}

// 监听路由变化，在移动端时关闭侧边栏
watch(route, () => {
  if (isMobile.value) {
    isSidebarOpen.value = false
  }
})

onMounted(() => {
  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
  
  // 初始化用户认证状态
  authStore.initAuth()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize)
})
</script>

<style scoped>
/* 样式从全局样式继承 */
.admin-sidebar nav ul li a,
.admin-sidebar nav ul li a i {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-info span {
  font-weight: 500;
}
</style> 