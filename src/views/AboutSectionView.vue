<template>
  <div class="about-section-page page-content">
    <div class="container">
      <h1 class="section-title">关于我们</h1>
      <div class="about-section-content">
        <p>详细内容页面正在建设中，请稍后访问。</p>
        <RouterLink to="/about" class="btn">返回关于我们</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const sectionId = route.params.section
</script>

<style scoped>
.about-section-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.about-section-content {
  margin-top: 50px;
  text-align: center;
}

.about-section-content p {
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: #64748b;
}
</style> 