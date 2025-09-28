<template>
  <div class="home-view">
    <div class="home-loading" v-if="isPageLoading">
      <div class="loading-spinner-container">
        <div class="loading-spinner"></div>
        <span>{{ isZh ? '页面加载中...' : 'Loading...' }}</span>
      </div>
    </div>
    <div v-else-if="loadError" class="error-container">
      <div class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        <p>{{ isZh ? '加载失败，请刷新页面重试' : 'Loading failed, please refresh and try again' }}</p>
        <button class="btn btn-primary" @click="initPageData">
          {{ isZh ? '重试' : 'Retry' }}
        </button>
      </div>
    </div>
    <template v-else>
      <DroneDefenseScene />
      <main>
      <!-- 主横幅 - 添加更具科技感的设计 -->
      <section class="hero defense-hero">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#4facfe" />
              <stop offset="100%" stop-color="#00f2fe" />
            </linearGradient>
          </defs>
        </svg>
        <div class="hero-content-wrapper">
          <div class="container">
            <div class="hero-content">
              <!-- <div class="tech-badge">{{ isZh ? '领先科技 · 智能防御' : 'Leading Technology · Smart Defense' }}</div> -->
              <div class="hero-logo">
                <img src="/images/about/logo.png" alt="LANDER" class="brand-logo-img" @error="handleImageError">
              </div>
              <h2 class="tech-headline">{{ currentSiteInfo.slogan }}</h2>
              <!-- <p>{{ currentSiteInfo.description }}</p> -->
              <!-- <div class="hero-buttons">
                <RouterLink to="/technology" class="btn btn-primary">
                  {{ isZh ? '无线技术核心驱动' : 'Anti-Drone Solutions' }}
                  <span class="btn-arrow"><i class="fas fa-arrow-right"></i></span>
                </RouterLink>
                <RouterLink to="/contact" class="btn btn-outline">
                  {{ isZh ? '安全咨询' : 'Security Consultation' }}
                  <span class="btn-arrow"><i class="fas fa-arrow-right"></i></span>
                </RouterLink>
              </div> -->
              <!-- <div class="hero-stats">
                <div class="stat">
                  <div class="stat-circle">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                      <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path class="circle" stroke-dasharray="99.9, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span class="stat-number">99.9%</span>
                  </div>
                  <span class="stat-label">{{ isZh ? '拦截成功率' : 'Interception Rate' }}</span>
                </div>
                <div class="stat">
                  <div class="stat-circle">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                      <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path class="circle" stroke-dasharray="90, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span class="stat-number">10km+</span>
                  </div>
                  <span class="stat-label">{{ isZh ? '探测范围' : 'Detection Range' }}</span>
                </div>
                <div class="stat">
                  <div class="stat-circle">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                      <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path class="circle" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span class="stat-number">24/7</span>
                  </div>
                  <span class="stat-label">{{ isZh ? '全天候防护' : '24/7 Protection' }}</span>
                </div>
              </div> -->
              <!-- <div class="scrolldown-wrapper">
                <a href="#features" class="scrolldown">
                  <span>{{ isZh ? '探索更多' : 'Explore More' }}</span>
                  <i class="fas fa-chevron-down"></i>
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </section>

      <!-- 安全防御特性展示 - 新增板块 -->
      <section id="features" class="defense-features section">
        <div class="tech-particles"></div>
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">{{ isZh ? '核心优势' : 'Core Advantages' }}</h2>
            <p class="section-desc">{{ isZh ? '专业的反无人机系统，提供全方位的安全防护能力' : 'Professional anti-drone system providing comprehensive security protection' }}</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>{{ isZh ? '全方位防护' : 'Comprehensive Protection' }}</h3>
              <p>{{ isZh ? '多传感器融合探测系统，实现360°无死角覆盖，有效防御各类无人机威胁' : 'Multi-sensor fusion detection system, achieving 360° coverage with no blind spots, effectively defending against various drone threats' }}</p>
              <div class="feature-info">
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '雷达 + 光电 + 频谱' : 'Radar, optoelectronics, spectrum' }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '三位一体的多维度立体探测' : 'Three-in-one multi-dimensional three-dimensional detection' }}</span>
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <h3>{{ isZh ? '快速响应' : 'Rapid Response' }}</h3>
              <p>{{ isZh ? '自动识别威胁等级，毫秒级决策，秒级拦截，确保关键区域安全' : 'Automatic threat level identification, millisecond-level decision making, second-level interception, ensuring key area security' }}</p>
              <div class="feature-info">
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '360 度无盲区覆盖' : '360-degree blind spot-free coverage' }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '立体化分层防御' : 'Three-dimensional hierarchical defense' }}</span>
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3>{{ isZh ? '智能分析' : 'Intelligent Analysis' }}</h3>
              <p>{{ isZh ? 'AI深度学习算法，准确识别无人机型号与意图，误报率低于0.1%' : 'AI deep learning algorithms, accurately identifying drone models and intentions, with a false alarm rate below 0.1%' }}</p>
              <div class="feature-info">
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '精确识别2000+型号无人机' : 'Precisely Identify 2000+ Drone Models' }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '行为意图智能分析' : 'Behavioral Intent Intelligent Analysis' }}</span>
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-cogs"></i>
              </div>
              <h3>{{ isZh ? '系统集成' : 'System Integration' }}</h3>
              <p>{{ isZh ? '模块化设计，可灵活适配各类场景需求，与现有安防系统无缝对接' : 'Modular design, flexibly adapting to various scenario requirements, seamlessly connecting with existing security systems' }}</p>
              <div class="feature-info">
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '支持多协议数据接口' : 'Support for Multi-protocol Data Interfaces' }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-check"></i>
                  <span>{{ isZh ? '定制化方案开发' : 'Customized Solution Development' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 关于我们 -->
      <section id="about" class="about section">
        <div class="about-shape"></div>
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">{{ isZh ? '关于我们' : 'About Us' }}</h2>
            <p class="section-desc">{{ isZh ? '朗德智能专注于无人机技术研发与反无人机系统集成' : 'Lande Intelligent focuses on drone technology R&D and anti-drone system integration' }}</p>
          </div>
          <div class="about-content">
            <div class="about-text">
              <div class="about-badge">{{ isZh ? '专业 · 创新 · 可靠' : 'Professional · Innovative · Reliable' }}</div>
              <h3>{{ displayedAboutData.title }}</h3>
              <p v-for="(paragraph, index) in displayedAboutData.paragraphs" :key="index">{{ paragraph }}</p>
              <div class="about-stats">
                <div class="stat-item" v-for="(stat, index) in displayedAboutData.stats" :key="index">
                  <div class="stat-bg"></div>
                  <span class="stat-num" v-html="stat.value"></span>
                  <span class="stat-desc">{{ stat.description }}</span>
                </div>
              </div>
              <div class="about-actions">
                <RouterLink to="/about" class="btn btn-primary">{{ isZh ? '了解更多' : 'Learn More' }}</RouterLink>
                <RouterLink to="/join" class="btn btn-outline">{{ isZh ? '加入我们' : 'Join Us' }}</RouterLink>
              </div>
            </div>
            <div class="about-img">
              <div class="img-frame">
                <img :src="displayedAboutData.image" alt="朗德智能公司环境" @error="handleImageError">
                <div class="img-badge">
                  <span>{{ isZh ? '创立于2025年' : 'Founded in 2025' }}</span>
                  <span class="img-badge-sep"></span>
                  <span>{{ isZh ? '国家高新技术企业' : 'National High-Tech Enterprise' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <a :href="`mailto:${currentSiteInfo.contactInfo.email}`" class="info-link">{{ isZh ? '发送邮件' : 'Send Email' }} <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      


 
    </main>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, inject, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/store/modules/content'
import { useRouter } from 'vue-router'
import ContactForm from '@/components/ContactForm.vue'
import DroneDefenseScene from '@/components/DroneDefenseScene.vue'
import DroneDefenseAnimation from '@/components/DroneDefenseAnimation.vue'
import CompanyMap from '@/components/CompanyMap.vue'
import { useLanguage } from '@/mixins/language'

// 使用语言相关功能
const { isZh, isEn, currentLanguage, getTechnologies, getCurrentSiteInfo, getCurrentTechnologies, getCurrentCases, getCurrentNews, getCurrentAboutData } = useLanguage()

const router = useRouter()
const contentStore = useContentStore()
const { siteInfo, technologies, cases, news, aboutData } = storeToRefs(contentStore)

// 获取当前语言的技术数据
const currentTechnologies = computed(() => {
  // 尝试从语言混入获取
  const techsFromMixin = getTechnologies();
  if (techsFromMixin && techsFromMixin.length > 0) {
    return techsFromMixin;
  }
  
  // 尝试从contentStore的计算属性获取
  const techsFromStore = getCurrentTechnologies.value;
  if (techsFromStore && techsFromStore.length > 0) {
    return techsFromStore;
  }
  
  // 使用默认数据
  return defaultTechnologies.value;
});

// 获取网站基本信息
const currentSiteInfo = computed(() => {
  // 尝试从contentStore的计算属性获取
  const infoFromStore = getCurrentSiteInfo.value;
  if (infoFromStore && infoFromStore.companyName) {
    return infoFromStore;
  }
  
  // 使用默认数据
  return defaultSiteInfo.value;
});

// 从App.vue中获取全局加载状态
const globalLoading = inject('isLoading', ref(true))
// 页面本地加载状态
const isPageLoading = ref(true)

// 默认技术数据
const defaultTechnologies = computed(() => {
  return isZh.value ? [
    {
      id: 'detection',
      title: '无人机探测系统',
      description: '多传感器融合的无人机探测系统，可实现全天候、全方位监控',
      icon: 'fas fa-shield-alt',
      details: '采用雷达、光电、无线电信号等多种探测手段相结合，探测距离可达10公里，能够有效识别小型低空慢速目标...',
      image: '/images/tech/detection.jpg'
    },
    {
      id: 'jamming',
      title: '电子干扰系统',
      description: '高效定向干扰系统，可阻断无人机控制链路和导航信号',
      icon: 'fas fa-shield-alt',
      details: '针对常见无人机通信频段设计的智能干扰系统，可实现定向精准干扰，防止误伤其他电子设备...',
      image: '/images/tech/jamming.jpg'
    },
    {
      id: 'interception',
      title: '无人机拦截系统',
      description: '多种拦截手段组合的综合防御系统，可安全处置入侵无人机',
      icon: 'fas fa-shield-alt',
      details: '集成网枪、捕获无人机等多种物理拦截手段，同时搭载智能决策系统，可根据场景自动选择最佳拦截方案...',
      image: '/images/tech/interception.jpg'
    }
  ] : [
    {
      id: 'detection',
      title: 'Drone Detection System',
      description: 'Multi-sensor fusion detection system for all-weather, all-round surveillance',
      icon: 'fas fa-shield-alt',
      details: 'Combines radar, optoelectronic, and radio signal detection methods, with a detection range of up to 10 kilometers, effectively identifying small low-altitude slow-moving targets...',
      image: '/images/tech/detection.jpg'
    },
    {
      id: 'jamming',
      title: 'Electronic Jamming System',
      description: 'Efficient directional jamming system that blocks drone control links and navigation signals',
      icon: 'fas fa-shield-alt',
      details: 'Smart jamming system designed for common drone communication bands, enabling precise directional jamming to prevent damage to other electronic devices...',
      image: '/images/tech/jamming.jpg'
    },
    {
      id: 'interception',
      title: 'Drone Interception System',
      description: 'Comprehensive defense system combining multiple interception methods for safe disposal of intruding drones',
      icon: 'fas fa-shield-alt',
      details: 'Integrates multiple physical interception methods such as net guns and capture drones, equipped with intelligent decision-making systems to automatically select the best interception solution based on the scenario...',
      image: '/images/tech/interception.jpg'
    }
  ];
});

// 默认网站基本信息
const defaultSiteInfo = computed(() => {
  return isZh.value ? {
    companyName: '杭州朗德智能科技有限公司',
    slogan: '智能全域电磁安防一体化平台',
    description: '',
    contactInfo: {
      address: '浙江省杭州市滨江区科技园区创新大厦A座15楼',
      phone: '0571-8888 9999',
      email: 'info@landedrone.com'
    }
  } : {
    companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
    slogan: 'Intelligent all-domain electromagnetic security integrated platform',
    description: '',
    contactInfo: {
      address: '15F, Building A, Innovation Tower, Science & Technology Park, Binjiang District, Hangzhou, Zhejiang',
      phone: '0571-8888 9999',
      email: 'info@landedrone.com'
    }
  };
});

// 默认关于我们数据
const defaultAboutData = computed(() => {
  return isZh.value ? {
    title: '杭州朗德智能科技有限公司',
    paragraphs: [
      '杭州朗德智能科技有限公司成立于2025年4月14日，企业注册地址位于浙江省杭州市上城区环站东路768号东站花园商务中心1幢12楼1208室，经营范围包含：智能无人飞行器制造；智能无人飞行器销售；人工智能应用软件开发；人工智能硬件销售；智能机器人的研发等。',
      '朗德智能秉持"科技护航，安全至上"的企业理念，以技术创新为驱动，以客户需求为导向，打造了一系列具有自主知识产权的无人机产品和反无人机系统。目前，公司产品已在国防安全、电力巡检、边境监控、机场防护等多个领域得到广泛应用。'
    ],
    stats: [
      { value: '2025', description: '成立于浙江杭州' },
      { value: '50+', description: '核心专利技术' },
      { value: '100+', description: '成功项目案例' }
    ],
    image: '/images/about/company.jpg'
  } : {
    title: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
    paragraphs: [
      'Hangzhou Lande Intelligent Technology Co., Ltd. was established on April 14, 2025. The company is registered at Room 1208, 12F, Building 1, East Station Garden Business Center, 768 Huanzhan East Road, Shangcheng District, Hangzhou, Zhejiang Province. Its business scope includes: intelligent UAV manufacturing; intelligent UAV sales; AI application software development; AI hardware sales; intelligent robot R&D, etc.',
      'Lande Intelligent adheres to the corporate philosophy of "Technology Protection, Safety First", driven by technological innovation and guided by customer needs. It has created a series of drone products and anti-drone systems with independent intellectual property rights. Currently, the company\'s products have been widely applied in various fields such as defense security, power inspection, border monitoring, and airport protection.'
    ],
    stats: [
      { value: '2025', description: 'Founded in Hangzhou, Zhejiang' },
      { value: '50+', description: 'Core patents' },
      { value: '100+', description: 'Successful projects' }
    ],
    image: '/images/about/company.jpg'
  };
});

// 默认案例数据
const defaultCases = computed(() => {
  return isZh.value ? [
    {
      id: 1,
      title: '某国际机场反无人机防御系统部署',
      summary: '为大型国际机场提供全方位的反无人机防御系统，实现24小时不间断保护，有效防止无人机干扰航班起降。',
      image: '/images/cases/military-defense.jpg',
      tag: '空域安全',
      highlight: '先进的雷达探测和干扰技术，为机场空域提供全方位防护，有效拦截非法入侵无人机',
      results: ['探测范围覆盖机场全域', '无人机威胁处置成功率99.9%', '系统可靠性达99.99%']
    },
    {
      id: 2,
      title: '边境地区侦察无人机监控系统',
      summary: '为边境地区提供高性能侦察无人机系统，实现大范围边境线的智能化、自动化监控。',
      image: '/images/cases/border-security.jpg',
      tag: '安全防护',
      highlight: '高性能侦察无人机系统实现大范围监控，提升边境安全防护能力',
      results: ['边境监控覆盖率提升80%', '异常事件响应时间缩短70%', '24小时全天候监控能力']
    },
    {
      id: 3,
      title: '大型电网输电线路巡检无人机系统',
      summary: '为国家电网提供专业工业无人机巡检系统，实现输电线路的自动化检测和故障预警。',
      image: '/images/cases/power-inspection.jpg',
      tag: '工业应用',
      highlight: '专业工业无人机系统提供高效线路巡检，预警潜在故障，降低维护成本',
      results: ['线路巡检效率提升300%', '故障预警准确率达95%', '人力成本降低60%']
    }
  ] : [
    {
      id: 1,
      title: 'Airport Anti-Drone Defense System Deployment',
      summary: 'Providing comprehensive anti-drone defense systems for large international airports, achieving 24-hour uninterrupted protection and effectively preventing drones from interfering with flights.',
      image: '/images/cases/military-defense.jpg',
      tag: 'Airspace Security',
      highlight: 'Advanced radar detection and jamming technology provides comprehensive protection for airport airspace, effectively intercepting illegal intruding drones',
      results: ['Detection range covers the entire airport', '99.9% success rate in drone threat handling', '99.99% system reliability']
    },
    {
      id: 2,
      title: 'Border Area Reconnaissance Drone Monitoring System',
      summary: 'Providing high-performance reconnaissance drone systems for border areas to achieve intelligent, automated monitoring of large border areas.',
      image: '/images/cases/border-security.jpg',
      tag: 'Security Protection',
      highlight: 'High-performance reconnaissance drone system achieves wide-range monitoring, enhancing border security protection capabilities',
      results: ['Border monitoring coverage increased by 80%', 'Abnormal event response time reduced by 70%', '24-hour all-weather monitoring capability']
    },
    {
      id: 3,
      title: 'Large-scale Power Grid Line Inspection Drone System',
      summary: 'Providing professional industrial drone inspection systems for the national power grid to achieve automated detection and fault early warning for power transmission lines.',
      image: '/images/cases/power-inspection.jpg',
      tag: 'Industrial Applications',
      highlight: 'Professional industrial drone system provides efficient line inspection, warning of potential failures, and reducing maintenance costs',
      results: ['Line inspection efficiency increased by 300%', 'Fault early warning accuracy reached 95%', 'Labor costs reduced by 60%']
    }
  ];
});

// 默认新闻数据
const defaultNews = computed(() => {
  return isZh.value ? [
    {
      id: 1,
      category: 'company',
      title: '朗德智能推出新一代高性能反无人机系统',
      summary: '近日，朗德智能正式发布新一代高性能反无人机系统，该系统集成了先进的雷达探测、人工智能识别和精准干扰技术。',
      date: '2025-06-15',
      day: '15',
      month: '06 / 2025'
    },
    {
      id: 2,
      category: 'company',
      title: '朗德智能反无人机系统在国际防务展览会获得广泛关注',
      summary: '朗德智能参加2025年国际防务展览会，展示的系列无人机产品获得国内外客户广泛关注和好评。',
      date: '2025-06-08',
      day: '08',
      month: '06 / 2025'
    },
    {
      id: 3,
      category: 'company',
      title: '朗德智能与航空航天大学建立产学研合作',
      summary: '朗德智能与国内知名航空航天大学签署战略合作协议，双方将在无人机技术研发和人才培养方面展开深度合作。',
      date: '2025-05-30',
      day: '30',
      month: '05 / 2025'
    }
  ] : [
    {
      id: 1,
      category: 'company',
      title: 'Lande Intelligent Launches New Generation of High-Performance Anti-Drone Systems',
      summary: 'Recently, Lande Intelligent officially released a new generation of high-performance anti-drone systems, integrating advanced radar detection, AI recognition, and precise jamming technologies.',
      date: '2025-06-15',
      day: '15',
      month: '06 / 2025'
    },
    {
      id: 2,
      category: 'company',
      title: 'Lande Intelligent Anti-Drone Systems Receive Wide Attention at International Defense Exhibition',
      summary: 'Lande Intelligent participated in the 2025 International Defense Exhibition, where its series of drone products received widespread attention and praise from domestic and international customers.',
      date: '2025-06-08',
      day: '08',
      month: '06 / 2025'
    },
    {
      id: 3,
      category: 'company',
      title: 'Lande Intelligent Establishes Industry-Academia-Research Cooperation with Aerospace University',
      summary: 'Lande Intelligent signed a strategic cooperation agreement with a renowned domestic aerospace university, and the two parties will engage in in-depth cooperation in drone technology R&D and talent training.',
      date: '2025-05-30',
      day: '30',
      month: '05 / 2025'
    }
  ];
});

// 根据默认数据或API数据获取最新新闻
const latestNews = computed(() => {
  const newsFromStore = getCurrentNews.value;
  if (newsFromStore && Array.isArray(newsFromStore) && newsFromStore.length > 0) {
    return newsFromStore.slice(0, 3);
  }
  return defaultNews.value;
});

// 根据默认数据或API数据获取案例
const casesWithHighlights = computed(() => {
  const casesFromStore = getCurrentCases.value;
  if (casesFromStore && Array.isArray(casesFromStore) && casesFromStore.length > 0) {
    return casesFromStore.slice(0, 3);
  }
  return defaultCases.value;
});

// 根据默认数据或API数据获取关于我们数据
const displayedAboutData = computed(() => {
  const aboutDataFromStore = getCurrentAboutData.value;
  if (aboutDataFromStore && aboutDataFromStore.title) {
    return aboutDataFromStore;
  }
  return defaultAboutData.value;
});

// 监听全局数据加载完成
watch(globalLoading, (newVal) => {
  if (!newVal) {
    // 全局加载完成后，延迟一小段时间再显示页面，确保动画流畅
    setTimeout(() => {
      isPageLoading.value = false
    }, 300)
  }
})

// 技术卡片悬停效果
const handleTechHover = (event) => {
  const card = event.currentTarget
  card.style.transform = 'translateY(-10px)'
  card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)'
}

const handleTechLeave = (event) => {
  const card = event.currentTarget
  card.style.transform = ''
  card.style.boxShadow = ''
}

// 案例卡片悬停效果
const handleCaseHover = (event) => {
  const card = event.currentTarget
  const overlay = card.querySelector('.case-overlay')
  if (overlay) {
    overlay.style.opacity = '1'
  }
}

const handleCaseLeave = (event) => {
  const card = event.currentTarget
  const overlay = card.querySelector('.case-overlay')
  if (overlay) {
    overlay.style.opacity = '0'
  }
}

// 监听语言变化
watch(currentLanguage, () => {
  // 当语言变化时，可以在这里执行一些操作
  console.log('语言已变更:', currentLanguage.value)
})

// 导航到指定案例分类
const navigateToCase = (tag) => {
  router.push({
    path: '/cases',
    query: { category: tag }
  })
}

// 处理新闻项悬停
const handleNewsHover = (event) => {
  event.currentTarget.style.transform = 'translateY(-5px)'
  event.currentTarget.style.boxShadow = 'var(--shadow)'
}

const handleNewsLeave = (event) => {
  event.currentTarget.style.transform = 'translateY(0)'
  event.currentTarget.style.boxShadow = 'none'
}

// 处理图片加载错误
const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/800x450?text=图片加载失败'
}

// 处理地址图片加载错误
const handleAddressImageError = (event) => {
  event.target.src = '/images/company/company-location-placeholder.jpg.svg'
}

// 翻译案例标签
const translateCaseTag = (tag) => {
  if (!tag) return '';
  
  const tagMap = {
    '空域安全': 'Airspace Security',
    '安防监控': 'Security Monitoring',
    '工业应用': 'Industrial Applications',
    '安全防护': 'Security Protection'
  }
  return tagMap[tag] || tag
}

// 翻译案例标题
const translateCaseTitle = (title) => {
  if (!title) return '';
  
  if (title.includes('机场')) {
    return 'Airport Anti-Drone Defense System Deployment'
  } else if (title.includes('边境')) {
    return 'Border Area Drone Surveillance System'
  } else if (title.includes('电网')) {
    return 'Large-scale Power Grid Line Inspection Drone System'
  }
  return title
}

// 翻译案例高亮内容
const translateCaseHighlight = (highlight) => {
  if (!highlight) return '';
  
  if (highlight.includes('先进的雷达探测')) {
    return 'Advanced radar detection and jamming technology provides comprehensive protection for airport airspace, effectively intercepting illegal intruding drones'
  } else if (highlight.includes('高性能侦察')) {
    return 'High-performance reconnaissance drone system achieves wide-range monitoring, enhancing border security protection capabilities'
  } else if (highlight.includes('专业工业无人机')) {
    return 'Professional industrial drone system provides efficient line inspection, warning of potential failures, and reducing maintenance costs'
  }
  return highlight
}

// 组件挂载时，初始化数据
onMounted(() => {
  // 组件挂载后将isPageLoading设置为false
  // 添加一点延迟，让页面有时间准备
  setTimeout(() => {
    isPageLoading.value = false
    // 发送页面加载完成事件
    emit('page-loaded')
  }, 500)
})

// 定义emit
const emit = defineEmits(['page-loaded'])
</script>

<style scoped>
/* 主横幅增强，适配3D背景 */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: transparent; /* 移除背景，使3D场景可见 */
}

.hero-content-wrapper {
  position: relative;
  width: 100%;
  z-index: 2; /* 确保内容在3D场景上方 */
  background: linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%);
  padding: 80px 0;
  backdrop-filter: blur(5px);
}

.hero-content {
  position: relative;
  max-width: 800px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out;
}

.tech-badge {
  display: inline-block;
  background: rgba(79, 172, 254, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4facfe;
  margin-bottom: 20px;
  border: 1px solid rgba(79, 172, 254, 0.3);
  box-shadow: 0 5px 15px rgba(79, 172, 254, 0.2);
  animation: fadeInDown 0.8s ease-out 0.3s both;
}

/* LANDER Logo样式 */
.hero-logo {
  text-align: center;
  margin-bottom: 30px;
  animation: fadeInDown 0.8s ease-out 0.2s both;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo-img {
  height: 120px;
  max-width: 480px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: brightness(1.1) contrast(1.05) drop-shadow(0 0 20px rgba(79, 172, 254, 0.3));
  border-radius: 8px;
}

.brand-logo-img:hover {
  transform: scale(1.05);
  filter: brightness(1.2) contrast(1.1) drop-shadow(0 0 30px rgba(79, 172, 254, 0.5));
}

.tech-headline {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(90deg, #4facfe 0%, #0a1af0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  position: relative;
}

/* .tech-headline::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
  
} */

/* .tech-headline::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
} */

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border: none;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 15px 25px rgba(79, 172, 254, 0.4);
  transform: translateY(-3px);
}

.btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-outline:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

.btn-arrow {
  margin-left: 10px;
  transition: transform 0.3s ease;
}

.btn:hover .btn-arrow {
  transform: translateX(5px);
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 50px;
  animation: fadeInUp 0.8s ease-out 0.9s both;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-circle {
  position: relative;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circular-chart {
  display: block;
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 2;
}

.circle {
  fill: none;
  stroke: url(#gradient);
  stroke-width: 2.5;
  stroke-linecap: round;
  animation: progress 2s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0, 100;
  }
}

.stat-number {
  position: absolute;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
  font-weight: 500;
}

.scrolldown-wrapper {
  margin-top: 50px;
  text-align: center;
  animation: fadeInUp 0.8s ease-out 1.2s both;
}

.scrolldown {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.scrolldown:hover {
  color: #fff;
}

.scrolldown span {
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.scrolldown i {
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 安全防御特性 */
.defense-features {
  padding: 100px 0;
  position: relative;
  background: #f8fafc;
  overflow: hidden;
}

.tech-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/images/particles.png') repeat;
  opacity: 0.05;
  animation: particleMove 60s linear infinite;
}

@keyframes particleMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1000px 1000px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
}

.section-desc {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.feature-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 32px;
  color: #4facfe;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  transform: scale(1.1);
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #0f172a;
}

.feature-card p {
  color: #64748b;
  margin-bottom: 25px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.feature-info {
  margin-top: auto;
  border-top: 1px solid rgba(203, 213, 225, 0.5);
  padding-top: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #334155;
}

.info-item i {
  color: #4facfe;
  margin-right: 10px;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 991px) {
  .tech-headline {
    font-size: 2.8rem;
  }
  
  .hero-stats {
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }
  
  .hero-stats {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .tech-headline {
    font-size: 2.2rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .stat-circle {
    width: 70px;
    height: 70px;
  }
  
  .stat-number {
    font-size: 1.2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}

/* 反无人机系统部分 */
.defense-tech {
  position: relative;
  background-color: #0a192f;
  color: #fff;
}

.tech-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://via.placeholder.com/1920x1080?text=科技背景');
  background-size: cover;
  opacity: 0.1;
}

.tech-glow {
  position: absolute;
  top: 30%;
  right: 10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(50px);
  animation: glow 8s infinite alternate;
  z-index: 1;
}

@keyframes glow {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.5);
  }
}

.section-header.light .section-title,
.section-header.light .section-desc {
  color: #fff;
}

.section-header.light .section-title::after {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
}

.tech-showcase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 50px 0;
  position: relative;
  z-index: 2;
}

.tech-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.tech-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #4facfe;
  font-size: 24px;
}

.tech-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #fff;
}

.tech-item p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
}

.tech-number {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.05);
  line-height: 1;
}

.tech-video {
  margin-top: 60px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: center;
}

.video-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.video-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(15, 23, 42, 0.8);
  color: #fff;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 2;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
}

.video-badge .dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin: 0 10px;
}

.video-container img {
  width: 100%;
  height: auto;
  display: block;
}

.video-caption {
  padding: 20px 0;
}

.video-stats {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.v-stat {
  display: flex;
  flex-direction: column;
}

.v-number {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.v-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.video-caption h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #fff;
}

.video-caption p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 25px;
  font-size: 1rem;
  line-height: 1.6;
}

.btn-video {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 2px solid rgba(79, 172, 254, 0.5);
  color: #4facfe;
}

.btn-video:hover {
  background: rgba(79, 172, 254, 0.1);
  border-color: #4facfe;
}

/* 响应式调整 - 无人机和反无人机系统部分 */
@media (max-width: 1200px) {
  .solutions-grid,
  .tech-showcase {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tech-video {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 767px) {
  .solutions-grid,
  .tech-showcase {
    grid-template-columns: 1fr;
  }
  
  .solution-features {
    grid-template-columns: 1fr;
  }
  
  .video-stats {
    flex-direction: column;
    gap: 15px;
  }
  
  .v-stat {
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  
  .v-number {
    margin-bottom: 0;
  }
}

  /* 应用案例部分增强 */
  .cases {
    background-color: #f1f5f9;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .cases::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 70%);
    z-index: 1;
  }
  
  .tech-dots {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(79, 172, 254, 0.2) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.3;
    z-index: 1;
  }
  
  .cases .container {
    position: relative;
    z-index: 2;
  }
  
  .cases-showcase {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 50px;
  }
  
  /* 新增案例滑块样式 */
  .cases-slider {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .case-slide {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    height: 100%;
    border: 1px solid rgba(226, 232, 240, 0.8);
  }
  
  .case-slide:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .case-image {
    position: relative;
    height: 220px;
    overflow: hidden;
  }
  
  .case-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .case-slide:hover .case-image img {
    transform: scale(1.1);
  }
  
  .case-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    background: rgba(15, 23, 42, 0.7);
    color: #fff;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    backdrop-filter: blur(5px);
  }
  
  .case-content {
    padding: 25px;
  }
  
  .case-content h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    color: #0f172a;
  }
  
  .case-content p {
    color: #64748b;
    margin-bottom: 20px;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  
  .case-link {
    display: inline-flex;
    align-items: center;
    color: #4facfe;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .case-link i {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  .case-link:hover {
    color: #0f172a;
  }
  
  .case-link:hover i {
    transform: translateX(5px);
  }
  
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .cases-cta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 20px;
  }
  
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    color: #fff;
    border: none;
    padding: 14px 28px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
  }
  
  .btn-primary:hover {
    box-shadow: 0 15px 25px rgba(79, 172, 254, 0.4);
    transform: translateY(-3px);
  }
  
  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    color: #4facfe;
    border: 2px solid rgba(79, 172, 254, 0.5);
    padding: 14px 28px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .btn-outline:hover {
    background: rgba(79, 172, 254, 0.1);
    border-color: #4facfe;
    transform: translateY(-3px);
  }
  
  .btn-outline i {
    transition: transform 0.3s ease;
  }
  
  .btn-outline:hover i {
    transform: translateX(5px);
  }
  
  /* 响应式调整 - 应用案例部分 */
  @media (max-width: 1200px) {
    .cases-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  
  @media (max-width: 767px) {
    .cases-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .mini-case {
      flex-direction: row;
      align-items: center;
      text-align: left;
    }
    
    .mini-case-icon {
      margin-right: 15px;
      margin-bottom: 0;
      width: 50px;
      height: 50px;
      font-size: 20px;
      flex-shrink: 0;
    }
    
    .mini-case-content {
      text-align: left;
    }
    
    .cases-cta {
      flex-direction: column;
      gap: 15px;
    }
  }
  
  @media (max-width: 576px) {
    .cases {
      padding: 70px 0;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    
    .section-desc {
      font-size: 1rem;
    }
    
    .mini-case-content h4 {
      font-size: 1rem;
    }
    
    .mini-case-content p {
      font-size: 0.85rem;
    }
    
    .btn-primary, .btn-outline {
      width: 100%;
      justify-content: center;
      padding: 12px 20px;
      font-size: 0.95rem;
    }
  }
  
  /* 关于我们部分 */
  .about {
    padding: 100px 0;
    position: relative;
    background: #fff;
    overflow: hidden;
  }
  
  .about-shape {
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 200%;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.03) 0%, rgba(0, 242, 254, 0.03) 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    z-index: 1;
    animation: morphShape 20s linear infinite alternate;
  }
  
  @keyframes morphShape {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    50% {
      border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%;
    }
    100% {
      border-radius: 40% 60% 30% 70% / 40% 30% 70% 60%;
    }
  }
  
  .about .container {
    position: relative;
    z-index: 2;
  }
  
  .about-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 50px;
    margin-top: 50px;
    align-items: center;
  }
  
  .about-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
    color: #4facfe;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 30px;
    margin-bottom: 20px;
    border: 1px solid rgba(79, 172, 254, 0.3);
  }
  
  .about-text h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 20px;
  }
  
  .about-text p {
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 15px;
  }
  
  .about-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }
  
  .stat-item {
    position: relative;
    padding: 15px;
    border-radius: 16px;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(226, 232, 240, 0.8);
    overflow: hidden;
  }
  
  .stat-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  }
  
  .stat-num {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    margin-bottom: 5px;
  }
  
  .stat-desc {
    font-size: 0.9rem;
    color: #64748b;
  }
  
  .about-actions {
    display: flex;
    gap: 20px;
    margin-top: 30px;
  }
  
  .img-frame {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .img-frame img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.5s ease;
  }
  
  .img-frame:hover img {
    transform: scale(1.05);
  }
  
  .img-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(15, 23, 42, 0.8);
    color: #fff;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: 600;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
  }
  
  .img-badge-sep {
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    margin: 0 10px;
  }
  
  /* 联系我们部分 */
  .contact {
    padding: 100px 0;
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
  
  /* 地图卡片样式 */
  .info-card:first-child {
    grid-row: span 2;
  }
  
  .info-card:first-child .info-link {
    margin-top: 20px;
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
    
    /* LANDER Logo响应式 */
    .brand-logo-img {
      height: 90px;
      max-width: 360px;
    }
    
    .tech-headline {
      font-size: 2.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .brand-logo-img {
      height: 70px;
      max-width: 280px;
    }
    
    .tech-headline {
      font-size: 2.2rem;
    }
  }
  
  @media (max-width: 576px) {
    .brand-logo-img {
      height: 60px;
      max-width: 240px;
    }
    
    .tech-headline {
      font-size: 1.8rem;
    }
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

  /* 页面加载样式 */
  .home-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .loading-spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(79, 172, 254, 0.2);
    border-top: 4px solid #4facfe;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;
  }

  .loading-spinner-container span {
    color: #64748b;
    font-size: 0.9rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 添加错误状态样式 */
  .error-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(15, 23, 42, 0.9);
    z-index: 1000;
  }

  .error-message {
    text-align: center;
    color: #fff;
    padding: 2rem;
  }

  .error-message i {
    font-size: 3rem;
    color: #ef4444;
    margin-bottom: 1rem;
  }

  .error-message p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
</style> 