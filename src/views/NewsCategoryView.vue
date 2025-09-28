<template>
  <div class="news-category-page page-content">
    <div class="container">
      <h1 class="section-title">新闻分类</h1>
      <div class="news-category-content">
        <p>新闻分类页面正在建设中，请稍后访问。</p>
        <RouterLink to="/news" class="btn">返回新闻列表</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const category = route.params.category
</script>

<style scoped>
.news-category-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.news-category-content {
  margin-top: 50px;
  text-align: center;
}

.news-category-content p {
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: #64748b;
}
</style> 