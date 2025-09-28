<template>
  <div class="admin-login">
    <div class="login-container">
      <div class="login-logo">
        <h2>朗德智能</h2>
        <p>管理后台</p>
      </div>
      
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="credentials.username" class="form-control" required>
        </div>
        
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="credentials.password" class="form-control" required>
        </div>
        
        <div v-if="error" class="alert alert-error">
          {{ error }}
        </div>
        
        <button type="submit" class="btn" :disabled="loading">
          <span v-if="loading">登录中...</span>
          <span v-else>登录</span>
        </button>
      </form>
      
      <div class="login-footer">
        <p>© {{ new Date().getFullYear() }} 杭州朗德智能科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter()
const authStore = useAuthStore()
const { loading, error } = storeToRefs(authStore)

const credentials = reactive({
  username: '',
  password: ''
})

const login = async () => {
  const result = await authStore.login(credentials)
  if (result.success) {
    router.push('/admin')
  }
}
</script>

<style scoped>
.admin-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--light-bg);
}

.login-container {
  width: 100%;
  max-width: 400px;
  background-color: var(--bg-color);
  border-radius: 8px;
  box-shadow: var(--shadow);
  padding: 40px;
}

.login-logo {
  text-align: center;
  margin-bottom: 30px;
}

.login-logo h2 {
  font-size: 2rem;
  color: var(--primary-color);
}

.login-logo p {
  color: #64748b;
}

.login-form {
  margin-bottom: 30px;
}

.login-footer {
  text-align: center;
  font-size: 0.9rem;
  color: #64748b;
}

.btn {
  width: 100%;
}
</style> 