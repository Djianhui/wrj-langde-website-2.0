<template>
  <div class="contact-page page-content">
    <!-- 背景装饰 -->
    <div class="contact-bg-pattern"></div>
    
    <div class="container">
      <!-- 页面标题区域 -->
      <div class="page-header">
        <h1 class="section-title">{{ isZh ? '联系我们' : 'Contact Us' }}</h1>
        <div class="contact-intro">
          <p>{{ isZh ? '如果您对我们的产品和服务有任何疑问，或者希望了解更多信息，请随时与我们联系。我们的专业团队将很乐意为您提供帮助。' : 'If you have any questions about our products and services, or want to learn more, please feel free to contact us. Our professional team will be happy to help you.' }}</p>
        </div>
      </div>
      
      <!-- 主要内容区域 -->
      <div class="contact-content">
        <!-- 联系信息卡片 -->
        <div class="contact-info">
          <div class="info-card featured-card">
            <div class="info-header">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div class="info-badge">{{ isZh ? '地址' : 'ADDRESS' }}</div>
            </div>
            <h3>{{ isZh ? '公司地址' : 'Company Address' }}</h3>
            <p class="address-text">{{ currentSiteInfo.contactInfo.address }}</p>
            
            <!-- 地址地图图片 -->
            <div class="address-image">
              <img src="/images/company/company-location.jpg.svg" alt="公司地址" @error="handleAddressImageError">
              <div class="address-overlay">
                <div class="address-marker">
                  <div class="marker-icon">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 2C6.34 2 5 3.34 5 5c0 2.63 3 6.5 3 6.5s3-3.87 3-6.5c0-1.66-1.34-3-3-3z"/>
                      <circle cx="8" cy="5" r="1" fill="white"/>
                    </svg>
                  </div>
                  <span>{{ isZh ? '朗德智能' : 'Lande Intelligence' }}</span>
                </div>
              </div>
            </div>
            
            <div class="contact-actions">
              <a href="https://ditu.amap.com/search?query=浙江省杭州市西湖区文三路478号华星科技大厦" target="_blank" class="contact-link primary-link">
                <svg viewBox="0 0 16 16" fill="currentColor" class="link-icon">
                  <path d="M8 2C6.34 2 5 3.34 5 5c0 2.63 3 6.5 3 6.5s3-3.87 3-6.5c0-1.66-1.34-3-3-3z"/>
                </svg>
                {{ isZh ? '获取导航' : 'Get Directions' }}
                <svg viewBox="0 0 16 16" fill="currentColor" class="arrow-icon">
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-header">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.76 19.76 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.76 19.76 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>
                </svg>
              </div>
              <div class="info-badge">{{ isZh ? '热线' : 'PHONE' }}</div>
            </div>
            <h3>{{ isZh ? '联系电话' : 'Contact Phone' }}</h3>
            <p class="contact-value">{{ currentSiteInfo.contactInfo.phone }}</p>
            <p class="contact-value secondary">400-688-7842</p>
            <div class="contact-actions">
              <a :href="`tel:${currentSiteInfo.contactInfo.phone}`" class="contact-link primary-link">
                <svg viewBox="0 0 16 16" fill="currentColor" class="link-icon">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.848c-.297.059-.605-.05-.821-.267L5.934 7.356a.827.827 0 0 1-.267-.821l.418-1.805a.678.678 0 0 0-.122-.58L4.169 2.843a.678.678 0 0 0-.515-.515z"/>
                </svg>
                {{ isZh ? '拨打电话' : 'Call Us' }}
                <svg viewBox="0 0 16 16" fill="currentColor" class="arrow-icon">
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-header">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div class="info-badge">{{ isZh ? '邮箱' : 'EMAIL' }}</div>
            </div>
            <h3>{{ isZh ? '电子邮箱' : 'Email Address' }}</h3>
            <p class="contact-value">{{ currentSiteInfo.contactInfo.email }}</p>
            <p class="contact-value secondary">1547556971@qq.com</p>
            <div class="contact-actions">
              <a :href="`mailto:${currentSiteInfo.contactInfo.email}`" class="contact-link primary-link">
                <svg viewBox="0 0 16 16" fill="currentColor" class="link-icon">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
                {{ isZh ? '发送邮件' : 'Send Email' }}
                <svg viewBox="0 0 16 16" fill="currentColor" class="arrow-icon">
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-header">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" class="icon-svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-badge">{{ isZh ? '时间' : 'TIME' }}</div>
            </div>
            <h3>{{ isZh ? '工作时间' : 'Working Hours' }}</h3>
            <p class="contact-value">{{ isZh ? '周一至周五: 9:00 - 18:00' : 'Mon - Fri: 9:00 - 18:00' }}</p>
            <p class="contact-value secondary">{{ isZh ? '周末及节假日休息' : 'Weekends & Holidays: Closed' }}</p>
          </div>
        </div>
        
        <!-- 联系表单 -->
        <div class="contact-form-container">
          <div class="form-header">
            <h2>{{ isZh ? '在线咨询' : 'Online Inquiry' }}</h2>
            <p>{{ isZh ? '填写以下表单，我们会尽快与您联系' : 'Fill out the form below and we will contact you as soon as possible' }}</p>
          </div>
          <ContactForm />
        </div>
      </div>
      
      <!-- 地图区域 -->
     
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ContactForm from '@/components/ContactForm.vue'
import { useLanguage } from '@/mixins/language'

// 使用语言相关功能
const { isZh, isEn, getCurrentSiteInfo } = useLanguage()

// 获取当前语言的网站信息
const currentSiteInfo = computed(() => {
  const siteInfoFromStore = getCurrentSiteInfo.value
  if (siteInfoFromStore && siteInfoFromStore.contactInfo) {
    return siteInfoFromStore
  }
  
  // 使用默认数据
  return isZh.value ? {
    companyName: '杭州朗德智能科技有限公司',
    contactInfo: {
      address: '浙江省杭州市西湖区文三路478号华星科技大厦A座5楼',
      phone: '1547554068',
      email: '1547554068@qq.com'
    }
  } : {
    companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
    contactInfo: {
      address: '5F, Building A, Huaxing Technology Building, No. 478 Wensan Road, Xihu District, Hangzhou, Zhejiang',
      phone: '1547554068',
      email: '1547554068@qq.com'
    }
  }
})

// 处理地址图片加载错误
const handleAddressImageError = (event) => {
  event.target.src = '/images/company/company-location-placeholder.jpg'
}

// 处理地图图片加载错误
const handleMapImageError = (event) => {
  const altText = isZh.value ? '公司地图' : 'Company Map'
  event.target.src = `https://via.placeholder.com/1200x400?text=${altText}`
}
</script>

<style scoped>
/* 全局样式优化 */
* {
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.contact-page {
  padding-top: 100px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.contact-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 15% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 85% 75%, rgba(147, 197, 253, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 45% 85%, rgba(59, 130, 246, 0.03) 0%, transparent 40%);
  opacity: 0.8;
}

/* 页面标题区域 */
.page-header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  font-family: 'Inter', sans-serif;
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

.contact-intro {
  max-width: 800px;
  margin: 30px auto 0;
}

.contact-intro p {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.8;
  font-family: 'Inter', sans-serif;
}

/* 主要内容区域 */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin-bottom: 100px;
  position: relative;
  z-index: 2;
}

/* 联系信息卡片 */
.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.info-card {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  padding: 0;
  box-shadow: 
    0 8px 32px rgba(59, 130, 246, 0.08),
    0 2px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(59, 130, 246, 0.4) 50%, 
    transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.info-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(59, 130, 246, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.info-card:hover::before {
  opacity: 1;
}

/* 特色卡片（地址卡片）*/
.info-card.featured-card {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.02) 0%, 
    rgba(255, 255, 255, 0.95) 25%,
    rgba(255, 255, 255, 0.9) 100%);
}

.info-card.featured-card::before {
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(59, 130, 246, 0.6) 50%, 
    transparent 100%);
}

/* 信息头部区域 */
.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 24px;
}

.info-icon {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    rgba(147, 197, 253, 0.15) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(59, 130, 246, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(-45deg) translateX(-100%);
  transition: transform 0.6s ease;
}

.info-card:hover .info-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.1) rotate(8deg);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.info-card:hover .info-icon::before {
  transform: rotate(-45deg) translateX(100%);
}

.icon-svg {
  width: 32px;
  height: 32px;
  color: #3b82f6;
  transition: all 0.4s ease;
}

.info-card:hover .icon-svg {
  color: #ffffff;
  transform: scale(1.1);
}

.info-badge {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  font-family: 'Inter', sans-serif;
}

.info-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 32px 20px;
  line-height: 1.3;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
}

.address-text,
.contact-value {
  color: #64748b;
  line-height: 1.6;
  margin: 0 32px 16px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

.contact-value.secondary {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.address-image {
  position: relative;
  width: calc(100% - 64px);
  height: 240px;
  border-radius: 18px;
  overflow: hidden;
  margin: 20px 32px 24px;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.address-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.address-image:hover img {
  transform: scale(1.08);
}

.address-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    rgba(0, 0, 0, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.address-marker {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 250, 252, 0.9) 100%);
  border-radius: 50px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 255, 255, 0.6);
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.address-image:hover .address-marker {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
}

.marker-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #3b82f6;
}

.address-marker span {
  font-weight: 700;
  color: #0f172a;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
}

.contact-actions {
  padding: 0 32px 32px;
}

.contact-link.primary-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.contact-link.primary-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.contact-link.primary-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
}

.contact-link.primary-link:hover::before {
  left: 100%;
}

.link-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.arrow-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.contact-link.primary-link:hover .arrow-icon {
  transform: translateX(4px);
}

/* 联系表单容器 */
.contact-form-container {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  padding: 0;
  box-shadow: 
    0 8px 32px rgba(59, 130, 246, 0.08),
    0 2px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.6);
  position: relative;
  overflow: hidden;
}

.contact-form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.form-header {
  padding: 40px 40px 20px;
}

.form-header h2 {
  font-size: 1.8rem;
  color: #0f172a;
  margin-bottom: 15px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
}

.form-header p {
  color: #64748b;
  margin-bottom: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

/* 地图区域 */
.map-section {
  position: relative;
  z-index: 2;
}

.map-section .section-header {
  text-align: center;
  margin-bottom: 50px;
}

.map-title {
  font-size: 2.2rem;
  color: #0f172a;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  position: relative;
}

.map-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.map-desc {
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.map-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 
    0 20px 60px rgba(59, 130, 246, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.6);
  position: relative;
  overflow: hidden;
}

.map-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.map {
  position: relative;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.map:hover img {
  transform: scale(1.05);
}

.map-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.map-info {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 16px 20px;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 300px;
}

.map-marker {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.map-marker svg {
  width: 20px;
  height: 20px;
}

.map-text h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
  font-family: 'Inter', sans-serif;
}

.map-text p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
  font-family: 'Inter', sans-serif;
}

/* 响应式样式 */
@media (max-width: 1200px) {
  .contact-content {
    grid-template-columns: 1fr 1.2fr;
    gap: 50px;
  }
  
  .section-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .info-card.featured-card {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .contact-intro p {
    font-size: 1rem;
    padding: 0 20px;
  }
  
  .info-header {
    padding: 24px 24px 18px;
  }
  
  .info-card h3 {
    margin: 0 24px 16px;
    font-size: 1.2rem;
  }
  
  .address-text,
  .contact-value {
    margin: 0 24px 12px;
    font-size: 0.95rem;
  }
  
  .address-image {
    width: calc(100% - 48px);
    height: 200px;
    margin: 16px 24px 20px;
  }
  
  .contact-actions {
    padding: 0 24px 24px;
  }
  
  .info-icon {
    width: 56px;
    height: 56px;
  }
  
  .icon-svg {
    width: 28px;
    height: 28px;
  }
  
  .form-header {
    padding: 30px 30px 15px;
  }
  
  .form-header h2 {
    font-size: 1.5rem;
  }
  
  .map-container {
    padding: 30px;
  }
  
  .map {
    height: 300px;
  }
  
  .map-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .contact-page {
    padding-top: 70px;
    padding-bottom: 50px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .info-header {
    padding: 20px 20px 16px;
  }
  
  .info-card h3 {
    margin: 0 20px 12px;
    font-size: 1.1rem;
  }
  
  .address-text,
  .contact-value {
    margin: 0 20px 10px;
    font-size: 0.9rem;
  }
  
  .address-image {
    width: calc(100% - 40px);
    height: 180px;
    margin: 12px 20px 16px;
  }
  
  .contact-actions {
    padding: 0 20px 20px;
  }
  
  .contact-link.primary-link {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
  
  .info-icon {
    width: 50px;
    height: 50px;
  }
  
  .icon-svg {
    width: 24px;
    height: 24px;
  }
  
  .info-badge {
    font-size: 0.65rem;
    padding: 3px 8px;
  }
  
  .form-header {
    padding: 24px 24px 12px;
  }
  
  .form-header h2 {
    font-size: 1.3rem;
  }
  
  .map-container {
    padding: 20px;
  }
  
  .map {
    height: 250px;
  }
  
  .map-title {
    font-size: 1.5rem;
  }
  
  .map-info {
    padding: 12px 16px;
    max-width: 250px;
  }
  
  .map-marker {
    width: 35px;
    height: 35px;
  }
  
  .map-marker svg {
    width: 18px;
    height: 18px;
  }
  
  .map-text h4 {
    font-size: 0.9rem;
  }
  
  .map-text p {
    font-size: 0.75rem;
  }
}
</style>
