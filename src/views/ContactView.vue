<template>
  <div class="contact-page page-content">
    <div class="container">
      <h1 class="section-title">联系我们</h1>
      
      <div class="contact-intro">
        <p>如果您对我们的产品和服务有任何疑问，或者希望了解更多信息，请随时与我们联系。我们的团队将很乐意为您提供帮助。</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>公司地址</h3>
            <p>浙江省杭州市西湖区文三路478号华星科技大厦A座5楼</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <h3>联系电话</h3>
            <p>0571-88888888</p>
            <p>400-888-8888</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>电子邮箱</h3>
            <p>info@lande-tech.com</p>
            <p>support@lande-tech.com</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>工作时间</h3>
            <p>周一至周五: 9:00 - 18:00</p>
            <p>周末及节假日休息</p>
          </div>
        </div>
        
        <div class="contact-form-container">
          <h2>在线咨询</h2>
          <p>填写以下表单，我们会尽快与您联系</p>
          
          <ContactForm />
        </div>
      </div>
      
      <div class="map-container">
        <h2>公司位置</h2>
        <div class="map">
          <!-- 地图组件或者图片 -->
          <img src="https://via.placeholder.com/1200x400?text=公司地图" alt="公司地图">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<style scoped>
.contact-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.contact-intro {
  max-width: 800px;
  margin: 30px auto 50px;
  text-align: center;
}

.contact-intro p {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.8;
}

.contact-content {
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  flex: 1;
}

.info-card {
  background: var(--bg-color);
  border-radius: 8px;
  padding: 30px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.info-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.info-card p {
  color: #64748b;
  margin-bottom: 10px;
  line-height: 1.6;
}

.contact-form-container {
  flex: 1;
  background: var(--bg-color);
  border-radius: 8px;
  padding: 30px;
  box-shadow: var(--shadow);
}

.contact-form-container h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.contact-form-container p {
  color: #64748b;
  margin-bottom: 30px;
}

.map-container {
  margin-top: 60px;
}

.map-container h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 30px;
  text-align: center;
}

.map {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 响应式样式 */
@media (max-width: 992px) {
  .contact-content {
    flex-direction: column;
  }
  
  .contact-info {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .contact-intro p {
    font-size: 1rem;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .info-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  
  .info-card h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  .contact-form-container {
    padding: 20px;
  }
  
  .contact-form-container h2 {
    font-size: 1.5rem;
  }
  
  .map-container h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .map {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .contact-page {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  
  .contact-intro {
    margin: 20px auto 30px;
  }
  
  .contact-content {
    gap: 30px;
    margin-bottom: 40px;
  }
  
  .contact-info {
    gap: 15px;
  }
  
  .map-container {
    margin-top: 40px;
  }
  
  .map {
    height: 250px;
  }
}
</style> 