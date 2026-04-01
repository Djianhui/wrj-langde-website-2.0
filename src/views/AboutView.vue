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
                <div v-for="(address, index) in currentSiteInfo.contactInfo.addresses" :key="index" class="address-item">
                  <div class="address-label">
                    <span class="location-badge" :class="index === 0 ? 'headquarters' : 'branch'">
                      <i class="fas fa-building"></i>
                      {{ index === 0 ? (isZh ? '公司总部' : 'Headquarters') : (isZh ? '分公司' : 'Branch Office') }}
                    </span>
                  </div>
                  <p>{{ address }}</p>
                  <div class="address-image">
                    <img :src="index === 0 ? '/images/company/company-location.jpg.svg' : '/images/company/csdz.png'" alt="公司地址" @error="handleAddressImageError">
                    <div class="address-overlay">
                      <div class="address-marker">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>{{ isZh ? '朗德智能' : 'Lande' }}</span>
                      </div>
                    </div>
                  </div>
                  <a :href="`https://ditu.amap.com/search?query=${encodeURIComponent(address)}`" target="_blank" class="info-link">{{ isZh ? '获取导航' : 'Get Directions' }} <i class="fas fa-arrow-right"></i></a>
                </div>
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
      phone: '13548973785',
      email: '173462959@qq.com'
    }
  } : {
    companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
    contactInfo: {
      address: '15F, Building A, Innovation Tower, Science & Technology Park, Binjiang District, Hangzhou, Zhejiang',
      phone: '13548973785',
      email: '173462959@qq.com'
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
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.company-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%);
  color: #3b82f6;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;
}

.about-intro {
  display: flex;
  gap: 60px;
  align-items: center;
  margin: 60px 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.about-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 24px;
  line-height: 1.8;
  color: #1e293b;
  font-size: 1.15rem;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
}

.about-image {
  flex: 1;
  position: relative;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.02);
}

.image-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(59, 130, 246, 0.9);
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
  font-family: 'Inter', sans-serif;
}

.about-sections {
  margin: 100px 0;
}

.about-section {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 100px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0 15px 50px rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.08);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.about-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 80px rgba(59, 130, 246, 0.12);
}

.about-section.reverse {
  flex-direction: row-reverse;
}

.section-text, .section-image {
  flex: 1;
}

.section-text h2 {
  font-size: 2.2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  position: relative;
  font-weight: 600;
  letter-spacing: -0.01em;
  font-family: 'Inter', sans-serif;
}

.section-text h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.section-text div {
  margin-bottom: 32px;
  line-height: 1.8;
  color: #475569;
  font-size: 1.05rem;
  font-family: 'Inter', sans-serif;
}

.section-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
  transition: transform 0.5s ease;
}

.section-image:hover img {
  transform: scale(1.05);
}

.about-stats {
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(20px);
  padding: 80px 60px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.about-stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.stat-item {
  text-align: center;
  padding: 0 30px;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent);
}

.stat-item h3 {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
}

.stat-item p {
  color: #475569;
  font-weight: 500;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
}

.join-us {
  text-align: center;
  margin: 100px 0 60px;
  padding: 80px 60px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.03) 100%);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.join-us::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.join-us h2 {
  font-size: 2.8rem;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
}

.join-us p {
  max-width: 600px;
  margin: 0 auto 40px;
  color: #475569;
  font-size: 1.15rem;
  line-height: 1.7;
  font-family: 'Inter', sans-serif;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.9);
  color: #3b82f6;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
  text-decoration: none;
  border: 1px solid rgba(59, 130, 246, 0.2);
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.3px;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.25);
  background: #3b82f6;
  color: white;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #fff;
  border: none;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
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
  padding: 100px 0;
  position: relative;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%233b82f633"/></svg>');
  background-size: 30px 30px;
  opacity: 0.4;
}

.contact .section-title {
  font-size: 2.8rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.02em;
  font-family: 'Inter', sans-serif;
}

.contact .section-desc {
  text-align: center;
  color: #475569;
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.contact .container {
  position: relative;
  z-index: 2;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin-top: 60px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.info-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 50px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 80px rgba(59, 130, 246, 0.15);
}

.info-card:hover::before {
  transform: scaleX(1);
}

.info-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.info-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: 20px;
  margin-right: 18px;
  flex-shrink: 0;
  border: 1px solid rgba(59, 130, 246, 0.15);
  transition: all 0.3s ease;
}

.info-card:hover .info-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: scale(1.1);
}

.info-header h3 {
  font-size: 1.3rem;
  color: #1e293b;
  margin: 0;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.info-card p {
  color: #64748b;
  margin-bottom: 20px;
  line-height: 1.7;
  font-size: 1.05rem;
  font-family: 'Inter', sans-serif;
}

.address-item {
  margin-bottom: 30px;
}

.address-item:last-child {
  margin-bottom: 0;
}

.address-label {
  margin-bottom: 12px;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.location-badge.headquarters {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.location-badge.branch {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.location-badge i {
  font-size: 0.75rem;
}

.address-item p {
  margin-bottom: 10px;
}

.address-item .info-link {
  margin-top: 8px;
}

.info-link {
  display: inline-flex;
  align-items: center;
  color: #3b82f6;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 16px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 50px;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.info-link:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
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