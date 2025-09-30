<template>
  <div class="about-page page-content">
    <div class="container">
      <h1 class="section-title">{{ isZh ? '关于我们' : 'About Us' }}</h1>
      
      <div class="about-intro">
        <div class="about-text">
          <div class="company-badge">{{ currentAboutData.title }}</div>
          <p v-for="(paragraph, index) in currentAboutData.paragraphs" :key="index">{{ paragraph }}</p>
        </div>
        <div class="about-image">
          <img :src="currentAboutData.image" :alt="currentAboutData.title" @error="handleImageError">
          <div class="image-caption">
            <span>{{ isZh ? '科技创新 · 智慧赋能' : 'Tech Innovation · Smart Empowerment' }}</span>
          </div>
        </div>
      </div>
      
      <div class="about-sections">
        <div class="about-section" v-for="(section, index) in aboutSections" :key="section.id" :class="{ 'reverse': index % 2 === 1 }">
          <div class="section-text">
            <h2>{{ section.title }}</h2>
            <div v-html="section.content"></div>
            <RouterLink :to="`/about/${section.id}`" class="btn">{{ isZh ? '了解更多' : 'Learn More' }}</RouterLink>
          </div>
          <div class="section-image">
            <img :src="section.image || `https://via.placeholder.com/500x300?text=${section.title}`" :alt="section.title">
          </div>
        </div>
      </div>
      
      <div class="about-stats">
        <div class="stat-item" v-for="(stat, index) in currentAboutData.stats" :key="index">
          <h3 v-html="stat.value"></h3>
          <p>{{ stat.description }}</p>
        </div>
      </div>
      
      <!-- 联系我们 -->
      <section id="contact" class="contact section">
        <div class="contact-bg"></div>
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">{{ isZh ? '联系我们' : 'Contact Us' }}</h2>
            <p class="section-desc">{{ isZh ? '随时随地与我们的专业团队取得联系，解答您的问题与需求' : 'Get in touch with our professional team anytime, anywhere to answer your questions and needs' }}</p>
          </div>
          <div class="contact-content">
            <div class="contact-info">
              <div class="info-card">
                <div class="info-header">
                  <div class="info-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>{{ isZh ? '公司地址' : 'Company Address' }}</h3>
                </div>
                <p>{{ currentSiteInfo.contactInfo.address }}</p>
                <div class="address-image">
                  <img src="/images/company/company-location.jpg.svg" alt="公司地址" @error="handleAddressImageError">
                  <div class="address-overlay">
                    <div class="address-marker">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>{{ isZh ? '朗德智能' : 'Lande' }}</span>
                    </div>
                  </div>
                </div>
                <a href="https://ditu.amap.com/search?query=浙江省杭州市滨江区科技园区创新大厦" target="_blank" class="info-link">{{ isZh ? '获取导航' : 'Get Directions' }} <i class="fas fa-arrow-right"></i></a>
              </div>
              <div class="info-card">
                <div class="info-header">
                  <div class="info-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <h3>{{ isZh ? '联系电话' : 'Phone' }}</h3>
                </div>
                <p>{{ currentSiteInfo.contactInfo.phone }}</p>
                <a :href="`tel:${currentSiteInfo.contactInfo.phone}`" class="info-link">{{ isZh ? '拨打电话' : 'Call Us' }} <i class="fas fa-arrow-right"></i></a>
              </div>
              <div class="info-card">
                <div class="info-header">
                  <div class="info-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <h3>{{ isZh ? '电子邮箱' : 'Email' }}</h3>
                </div>
                <p>{{ currentSiteInfo.contactInfo.email }}</p>
                <!-- <a :href="`mailto:${currentSiteInfo.contactInfo.email}`" class="info-link">{{ isZh ? '发送邮件' : 'Send Email' }} <i class="fas fa-arrow-right"></i></a> -->
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      
      <div class="join-us">
        <h2>{{ isZh ? '加入我们' : 'Join Us' }}</h2>
        <p>{{ isZh ? '朗德智能欢迎有才华、有激情的你加入我们的团队，一起创造智能化未来！' : 'Lande Intelligent welcomes talented and passionate individuals to join our team and create an intelligent future together!' }}</p>
        <RouterLink to="/join" class="btn btn-primary">{{ isZh ? '查看职位' : 'View Positions' }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/store/modules/content'
import ContactForm from '@/components/ContactForm.vue'
import { useLanguage } from '@/mixins/language'

// 使用语言相关功能
const { isZh, isEn, getAboutData, getCurrentSiteInfo } = useLanguage()

const contentStore = useContentStore()
const { aboutSections, aboutData } = storeToRefs(contentStore)

// 获取当前语言的关于我们数据
const currentAboutData = computed(() => getAboutData())

// 获取当前语言的网站信息
const currentSiteInfo = computed(() => {
  // 尝试从contentStore获取
  const siteInfoFromStore = getCurrentSiteInfo.value
  if (siteInfoFromStore && siteInfoFromStore.contactInfo) {
    return siteInfoFromStore
  }
  
  // 使用默认数据
  return isZh.value ? {
    companyName: '杭州朗德智能科技有限公司',
    contactInfo: {
      address: '浙江省杭州市滨江区科技园区创新大厦A座15楼',
      phone: '15211191964',
      email: '1547554061@qq.com'
    }
  } : {
    companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
    contactInfo: {
      address: '15F, Building A, Innovation Tower, Science & Technology Park, Binjiang District, Hangzhou, Zhejiang',
      phone: '15211191964',
      email: '1547554061@qq.com'
    }
  }
})

// 处理图片加载错误
const handleImageError = (event) => {
  const altText = isZh.value ? '朗德智能公司环境' : 'Lande Intelligent Company Environment'
  event.target.src = `https://via.placeholder.com/800x500?text=${altText}`
}

// 处理地址图片加载错误
const handleAddressImageError = (event) => {
  event.target.src = '/images/company/company-location-placeholder.jpg'
}

onMounted(async () => {
  // 获取关于我们页面数据
  await contentStore.fetchContent('about')
})
</script>

<style scoped>
.about-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.company-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(79, 172, 254, 0.2);
}

.about-intro {
  display: flex;
  gap: 50px;
  align-items: center;
  margin: 50px 0;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #334155;
  font-size: 1.1rem;
}

.about-image {
  flex: 1;
  position: relative;
}

.about-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.image-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.7);
  color: #fff;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(5px);
}

.about-sections {
  margin: 80px 0;
}

.about-section {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 80px;
}

.about-section.reverse {
  flex-direction: row-reverse;
}

.section-text, .section-image {
  flex: 1;
}

.section-text h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  position: relative;
}

.section-text h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 3px;
}

.section-text div {
  margin-bottom: 30px;
  line-height: 1.8;
  color: #334155;
}

.section-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: var(--shadow);
  transition: transform 0.5s ease;
}

.section-image:hover img {
  transform: scale(1.03);
}

.about-stats {
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 250, 251, 0.7) 100%);
  padding: 60px;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.stat-item {
  text-align: center;
  padding: 0 20px;
}

.stat-item h3 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.stat-item p {
  color: #334155;
  font-weight: 500;
}

.join-us {
  text-align: center;
  margin: 80px 0 40px;
  padding: 60px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.05) 100%);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.join-us h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.join-us p {
  max-width: 600px;
  margin: 0 auto 30px;
  color: #334155;
  font-size: 1.1rem;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: #fff;
  color: var(--primary-color);
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
  text-decoration: none;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  border: none;
}

@media (max-width: 991px) {
  .about-intro {
    flex-direction: column;
  }
  
  .about-section {
    flex-direction: column;
  }
  
  .about-section.reverse {
    flex-direction: column;
  }
  
  .about-stats {
    flex-wrap: wrap;
    gap: 30px;
  }
  
  .stat-item {
    width: 45%;
  }
}

@media (max-width: 767px) {
  .stat-item {
    width: 100%;
    margin-bottom: 30px;
  }
  
  .about-stats {
    padding: 30px;
  }
  
  .join-us {
    padding: 30px;
  }
}

/* 联系我们部分样式 */
.contact {
  padding: 80px 0;
  position: relative;
  background: #f8fafc;
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%234facfe22"/></svg>');
  background-size: 20px 20px;
  opacity: 0.5;
}

.contact .container {
  position: relative;
  z-index: 2;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  margin-top: 50px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.info-card {
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.info-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4facfe;
  font-size: 18px;
  margin-right: 15px;
  flex-shrink: 0;
}

.info-header h3 {
  font-size: 1.2rem;
  color: #0f172a;
  margin: 0;
}

.info-card p {
  color: #64748b;
  margin-bottom: 20px;
  line-height: 1.6;
}

.info-link {
  display: inline-flex;
  align-items: center;
  color: #4facfe;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-top: 15px;
  text-decoration: none;
}

.info-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.info-link:hover {
  color: #0f172a;
}

.info-link:hover i {
  transform: translateX(5px);
}

/* 地址图片样式 */
.address-image {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin: 15px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.address-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.address-image:hover img {
  transform: scale(1.05);
}

.address-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  display: flex;
  align-items: center;
  justify-content: center;
}

.address-marker {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.address-image:hover .address-marker {
  transform: translateY(-5px);
}

.address-marker i {
  color: #4facfe;
  font-size: 18px;
  margin-right: 8px;
}

.address-marker span {
  font-weight: 600;
  color: #0f172a;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .info-card:first-child {
    grid-row: auto;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .address-image {
    height: 150px;
  }
  
  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  .info-header h3 {
    font-size: 1.1rem;
  }
}
</style> 