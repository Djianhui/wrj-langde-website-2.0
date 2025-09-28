<template>
  <div class="drone-system-page page-content">
    <!-- 无人机系统页面头部 -->
    <div class="drone-hero">
      <div class="container">
        <div class="drone-hero-content">
          <h1 class="drone-headline">{{ dronePageTexts.title }}</h1>
          <p class="drone-subheading">{{ dronePageTexts.subtitle }}</p>
        </div>
      </div>
      <div class="drone-particles"></div>
    </div>
    
    <div class="container">
      <!-- 无人机系统部分 -->
      <div class="drone-sections">
        <div class="drone-section" v-for="(system, index) in currentDroneSystems" :key="system.id" :class="{ 'reverse': index % 2 === 1 }">
          <div class="drone-content">
            <div class="drone-index">0{{ index + 1 }}</div>
            <div class="drone-badge">{{ getDroneTag(index) }}</div>
            <h2>{{ system.title }}</h2>
            <div class="drone-desc" v-html="system.details"></div>
            
            <!-- 无人机亮点 -->
            <div class="drone-highlights">
              <div class="highlight-item">
                <div class="highlight-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="highlight-text">
                  {{ getDroneHighlight(system.id, 0) }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="highlight-text">
                  {{ getDroneHighlight(system.id, 1) }}
                </div>
              </div>
            </div>
            
            <div class="drone-features">
              <div class="feature" v-for="(feature, fidx) in system.features" :key="fidx">
                <div class="feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <div class="feature-text">
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- 无人机指标展示 -->
            <div class="drone-metrics-mini">
              <div class="metric-mini-item" v-for="(metric, midx) in getDroneMetrics(system.id)" :key="midx">
                <div class="metric-mini-value">{{ metric.value }}</div>
                <div class="metric-mini-label">{{ metric.label }}</div>
              </div>
            </div>
          </div>
          <div class="drone-image">
            <div class="image-wrapper">
              <div class="drone-decoration"></div>
              <img :src="system.image" :alt="system.title" @error="handleImageError">
              <div class="image-overlay"></div>
              <div class="drone-tag">{{ getDroneTag(index) }}</div>
              
              <!-- 无人机应用场景 -->
              <div class="drone-applications">
                <div class="application-title">{{ dronePageTexts.applicableScenarios }}</div>
                <div class="application-items">
                  <span v-for="(app, aidx) in getDroneApplications(system.id)" :key="aidx">{{ app }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 无人机系统优势 -->
      <div class="drone-advantages">
        <h2 class="section-subtitle">{{ dronePageTexts.advantages }}</h2>
        <p class="section-desc">{{ dronePageTexts.advantagesSubtitle }}</p>
        
        <div class="advantages-grid">
          <div class="advantage-card" v-for="(advantage, index) in currentAdvantages" :key="index">
            <div class="advantage-icon">
              <i :class="advantage.icon"></i>
            </div>
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- 无人机系统性能指标 -->
      <div class="drone-metrics">
        <div class="metrics-content">
          <h2 class="section-subtitle">{{ dronePageTexts.metrics }}</h2>
          <p class="section-desc">{{ dronePageTexts.metricsSubtitle }}</p>
          
          <div class="metrics-list">
            <div class="metric-item" v-for="(metric, index) in currentMetrics" :key="index">
              <div class="metric-value">{{ metric.value }}</div>
              <div class="metric-info">
                <h3>{{ metric.title }}</h3>
                <p>{{ metric.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="metrics-image">
          <img src="/images/drone/performance.jpg" alt="无人机系统性能指标" @error="handleMetricsImageError">
        </div>
      </div>
      
      <!-- 技术合作伙伴 -->
      <div class="drone-partners">
        <h2 class="section-subtitle">{{ dronePageTexts.partners }}</h2>
        <p class="section-desc">{{ dronePageTexts.partnersSubtitle }}</p>
        
        <div class="partners-grid">
          <div class="partner-logo" v-for="partner in partners" :key="partner.id">
            <img :src="partner.logo" :alt="partner.name">
            <div class="partner-hover">
              <span>{{ partner.name }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 无人机系统咨询 -->
      <div class="drone-cta">
        <div class="cta-content">
          <h2>{{ dronePageTexts.needConsultation }}</h2>
          <p>{{ dronePageTexts.consultationDesc }}</p>
          <RouterLink to="/contact" class="btn btn-primary">{{ dronePageTexts.contactUs }}</RouterLink>
        </div>
        <div class="cta-pattern"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/store/modules/content'
import { useLanguage } from '@/mixins/language'
import { useLanguageStore } from '@/store/modules/language'

// 获取语言相关功能
const { isZh, currentLanguage } = useLanguage()

// 获取语言store以监听语言变化
const languageStore = useLanguageStore()

const contentStore = useContentStore()
const { partners } = storeToRefs(contentStore)

// 强制刷新标记
const forceRender = ref(0)

// 无人机系统数据
const droneSystems = ref([
  {
    id: 'surveillance',
    title: '监控无人机系统',
    details: '高性能监控无人机系统，集成先进的图像识别和实时传输技术，为安全监控提供全方位的空中解决方案。',
    image: '/images/drone/surveillance.jpg',
    features: [
      { icon: 'fas fa-eye', title: '高清监控', description: '4K超高清摄像头，支持30倍光学变焦' },
      { icon: 'fas fa-wifi', title: '实时传输', description: '5G低延迟数据传输，实时图像回传' },
      { icon: 'fas fa-clock', title: '长续航', description: '120分钟超长续航时间' },
      { icon: 'fas fa-shield', title: '抗干扰', description: '军工级抗电磁干扰能力' }
    ]
  },
  {
    id: 'patrol',
    title: '巡逻无人机系统',
    details: '智能化巡逻无人机系统，配备AI识别算法，自主规划路径，24小时不间断巡逻，保障区域安全。',
    image: '/images/drone/patrol.jpg',
    features: [
      { icon: 'fas fa-route', title: '自主导航', description: 'GPS+视觉导航双重定位系统' },
      { icon: 'fas fa-brain', title: 'AI识别', description: '智能目标识别与行为分析' },
      { icon: 'fas fa-battery-full', title: '智能充电', description: '自动返航充电，无人值守运行' },
      { icon: 'fas fa-cloud', title: '云端管理', description: '云平台统一管理与数据分析' }
    ]
  },
  {
    id: 'rescue',
    title: '救援无人机系统',
    details: '专业救援无人机系统，具备夜视能力和恶劣天气适应性，快速响应紧急情况，为救援行动提供空中支援。',
    image: '/images/drone/rescue.jpg',
    features: [
      { icon: 'fas fa-thermometer-half', title: '热成像', description: '高精度热成像系统，夜间搜救能力' },
      { icon: 'fas fa-parachute-box', title: '投送能力', description: '紧急物资投送，救生设备快速部署' },
      { icon: 'fas fa-wind', title: '抗风能力', description: '7级风力下稳定飞行' },
      { icon: 'fas fa-mobile-alt', title: '通信中继', description: '应急通信中继站功能' }
    ]
  },
  {
    id: 'inspection',
    title: '巡检无人机系统',
    details: '工业级巡检无人机系统，专用于电力、石化、建筑等行业设施检查，提高检测效率，降低安全风险。',
    image: '/images/drone/inspection.jpg',
    features: [
      { icon: 'fas fa-search', title: '精密检测', description: '毫米级精度缺陷检测能力' },
      { icon: 'fas fa-bolt', title: '电力专用', description: '电力线路专用检测模块' },
      { icon: 'fas fa-database', title: '数据记录', description: '完整的检测数据记录与分析' },
      { icon: 'fas fa-tools', title: '维护提醒', description: '智能维护计划与提醒系统' }
    ]
  }
])

const droneSystemsEn = ref([
  {
    id: 'surveillance',
    title: 'Surveillance Drone System',
    details: 'High-performance surveillance drone system integrating advanced image recognition and real-time transmission technology.',
    image: '/images/drone/surveillance.jpg',
    features: [
      { icon: 'fas fa-eye', title: 'HD Monitoring', description: '4K ultra-high definition camera with 30x optical zoom' },
      { icon: 'fas fa-wifi', title: 'Real-time Transmission', description: '5G low-latency data transmission' },
      { icon: 'fas fa-clock', title: 'Long Endurance', description: '120 minutes ultra-long flight time' },
      { icon: 'fas fa-shield', title: 'Anti-interference', description: 'Military-grade electromagnetic interference resistance' }
    ]
  },
  {
    id: 'patrol',
    title: 'Patrol Drone System',
    details: 'Intelligent patrol drone system equipped with AI recognition algorithms and autonomous path planning.',
    image: '/images/drone/patrol.jpg',
    features: [
      { icon: 'fas fa-route', title: 'Autonomous Navigation', description: 'GPS + visual navigation dual positioning system' },
      { icon: 'fas fa-brain', title: 'AI Recognition', description: 'Intelligent target recognition and behavior analysis' },
      { icon: 'fas fa-battery-full', title: 'Smart Charging', description: 'Automatic return and charging, unmanned operation' },
      { icon: 'fas fa-cloud', title: 'Cloud Management', description: 'Unified cloud platform management and data analysis' }
    ]
  },
  {
    id: 'rescue',
    title: 'Rescue Drone System',
    details: 'Professional rescue drone system with night vision capability and severe weather adaptability.',
    image: '/images/drone/rescue.jpg',
    features: [
      { icon: 'fas fa-thermometer-half', title: 'Thermal Imaging', description: 'High-precision thermal imaging system' },
      { icon: 'fas fa-parachute-box', title: 'Delivery Capability', description: 'Emergency supply delivery, rapid deployment' },
      { icon: 'fas fa-wind', title: 'Wind Resistance', description: 'Stable flight in force 7 winds' },
      { icon: 'fas fa-mobile-alt', title: 'Communication Relay', description: 'Emergency communication relay station function' }
    ]
  },
  {
    id: 'inspection',
    title: 'Inspection Drone System',
    details: 'Industrial-grade inspection drone system designed for facility inspection in various industries.',
    image: '/images/drone/inspection.jpg',
    features: [
      { icon: 'fas fa-search', title: 'Precision Detection', description: 'Millimeter-level precision defect detection capability' },
      { icon: 'fas fa-bolt', title: 'Power Specialized', description: 'Specialized detection modules for power lines' },
      { icon: 'fas fa-database', title: 'Data Recording', description: 'Complete detection data recording and analysis' },
      { icon: 'fas fa-tools', title: 'Maintenance Reminder', description: 'Intelligent maintenance planning and reminder system' }
    ]
  }
])

// 当前语言的无人机系统数据
// 无人机页面文本
const dronePageTexts = computed(() => {
  forceRender.value;
  return isZh.value ? {
    title: '无人机系统',
    subtitle: '朗德智能提供全系列无人机解决方案，涵盖监控、巡逻、救援、巡检等多个应用领域，为各行业提供高效、可靠的空中作业平台。',
    advantages: '系统优势',
    advantagesSubtitle: '我们的无人机系统具备强大的技术优势，为客户提供专业、安全、高效的空中解决方案',
    metrics: '性能指标',
    metricsSubtitle: '朗德智能无人机系统的核心性能指标，展示我们的技术实力和产品优势',
    partners: '合作伙伴',
    partnersSubtitle: '我们与业界知名的无人机技术提供商合作，共同推进无人机技术的创新与应用',
    needConsultation: '需要无人机解决方案？',
    consultationDesc: '我们的无人机专家为您提供量身定制的解决方案和专业技术支持',
    contactUs: '联系我们',
    applicableScenarios: '适用场景'
  } : {
    title: 'Drone Systems',
    subtitle: 'Lande Intelligent provides comprehensive drone solutions covering surveillance, patrol, rescue, inspection and other application areas.',
    advantages: 'System Advantages',
    advantagesSubtitle: 'Our drone systems possess powerful technical advantages, providing professional, safe and efficient aerial solutions',
    metrics: 'Performance Metrics',
    metricsSubtitle: 'Core performance metrics of Lande Intelligent drone systems, demonstrating our technical strength',
    partners: 'Partners',
    partnersSubtitle: 'We cooperate with well-known drone technology providers to jointly promote innovation and application',
    needConsultation: 'Need Drone Solutions?',
    consultationDesc: 'Our drone experts provide customized solutions and professional technical support',
    contactUs: 'Contact Us',
    applicableScenarios: 'Applicable Scenarios'
  }
})

// 无人机标签
const getDroneTag = (index) => {
  const tagsZh = ['智能监控', '自主巡逻', '应急救援', '精准巡检'];
  const tagsEn = ['Smart Surveillance', 'Autonomous Patrol', 'Emergency Rescue', 'Precision Inspection'];
  const tags = isZh.value ? tagsZh : tagsEn;
  return tags[index % tags.length];
}

// 无人机系统优势数据
const advantages = ref([
  { icon: 'fas fa-helicopter', title: '多样化平台', description: '多旋翼、固定翼、复合翼等多种平台选择，满足不同应用需求' },
  { icon: 'fas fa-microchip', title: '智能控制', description: '先进的飞控系统，支持自主飞行、避障、精准定位等智能功能' },
  { icon: 'fas fa-weather-sunny', title: '全天候作业', description: '适应各种恶劣天气条件，具备夜间作业和复杂环境适应能力' },
  { icon: 'fas fa-network-wired', title: '系统集成', description: '完整的地面站系统，支持多机协同作业和统一管理控制' }
])

const advantagesEn = ref([
  { icon: 'fas fa-helicopter', title: 'Diverse Platforms', description: 'Multiple platform options including multi-rotor, fixed-wing, and hybrid aircraft' },
  { icon: 'fas fa-microchip', title: 'Intelligent Control', description: 'Advanced flight control system supporting autonomous flight, obstacle avoidance, and precise positioning' },
  { icon: 'fas fa-weather-sunny', title: 'All-weather Operations', description: 'Adaptable to various harsh weather conditions with night operation capabilities' },
  { icon: 'fas fa-network-wired', title: 'System Integration', description: 'Complete ground station system supporting multi-aircraft coordination and unified management' }
])

const currentAdvantages = computed(() => {
  return isZh.value ? advantages.value : advantagesEn.value;
})

// 性能指标数据
const metrics = ref([
  { value: '50km', title: '最大航程', description: '单次飞行最大航程可达50公里，覆盖范围广' },
  { value: '8h', title: '续航时间', description: '专业级无人机最长续航时间达8小时' },
  { value: '5000m', title: '作业高度', description: '最大作业高度5000米，适应高原环境' },
  { value: '15kg', title: '载荷能力', description: '最大载荷15公斤，满足各种设备搭载需求' }
])

const metricsEn = ref([
  { value: '50km', title: 'Maximum Range', description: 'Maximum flight range of 50 kilometers per flight with wide coverage' },
  { value: '8h', title: 'Endurance Time', description: 'Professional drone maximum endurance time up to 8 hours' },
  { value: '5000m', title: 'Operating Altitude', description: 'Maximum operating altitude of 5000 meters, adaptable to plateau environments' },
  { value: '15kg', title: 'Payload Capacity', description: 'Maximum payload of 15 kilograms, meeting various equipment mounting requirements' }
])

// 无人机亮点数据
const getDroneHighlight = (systemId, index) => {
  const highlightsZh = {
    'surveillance': ['采用最新的图像处理技术，实现毫秒级目标识别和跟踪', '支持多光谱成像，在各种光照条件下保持清晰监控效果'],
    'patrol': ['智能路径规划算法，根据任务需求自动优化巡逻路线', '异常行为自动识别，及时发现安全隐患并预警'],
    'rescue': ['配备专业救援设备投送系统，可快速部署救生器材', '具备恶劣天气作业能力，在紧急情况下保障救援行动'],
    'inspection': ['高精度缺陷检测技术，发现肉眼难以察觉的设备问题', 'AI辅助分析系统，自动生成检测报告和维护建议']
  };
  const highlightsEn = {
    'surveillance': ['Employs latest image processing technology for millisecond-level target recognition and tracking', 'Supports multispectral imaging, maintaining clear monitoring effects under various lighting conditions'],
    'patrol': ['Intelligent path planning algorithm automatically optimizes patrol routes based on mission requirements', 'Automatic abnormal behavior recognition, timely detection of security risks and early warning'],
    'rescue': ['Equipped with professional rescue equipment delivery system for rapid deployment of life-saving equipment', 'Capable of operating in harsh weather conditions, ensuring rescue operations in emergency situations'],
    'inspection': ['High-precision defect detection technology discovers equipment problems invisible to the naked eye', 'AI-assisted analysis system automatically generates inspection reports and maintenance recommendations']
  };
  const highlights = isZh.value ? highlightsZh : highlightsEn;
  return highlights[systemId] ? highlights[systemId][index] : (isZh.value ? '先进技术，行业领先' : 'Advanced technology, industry-leading');
}

// 无人机指标数据
const getDroneMetrics = (systemId) => {
  const metricsZh = {
    'surveillance': [{ value: '4K', label: '视频分辨率' }, { value: '30x', label: '光学变焦' }, { value: '10km', label: '传输距离' }],
    'patrol': [{ value: 'GPS+视觉', label: '导航方式' }, { value: 'AI算法', label: '识别技术' }, { value: '24/7', label: '工作模式' }],
    'rescue': [{ value: '热成像', label: '夜视能力' }, { value: '7级风', label: '抗风等级' }, { value: '应急投送', label: '特殊功能' }],
    'inspection': [{ value: '毫米级', label: '检测精度' }, { value: '电力专用', label: '应用领域' }, { value: 'AI分析', label: '数据处理' }]
  };
  const metricsEn = {
    'surveillance': [{ value: '4K', label: 'Video Resolution' }, { value: '30x', label: 'Optical Zoom' }, { value: '10km', label: 'Transmission Range' }],
    'patrol': [{ value: 'GPS+Visual', label: 'Navigation Method' }, { value: 'AI Algorithm', label: 'Recognition Technology' }, { value: '24/7', label: 'Working Mode' }],
    'rescue': [{ value: 'Thermal Imaging', label: 'Night Vision' }, { value: 'Force 7 Wind', label: 'Wind Resistance' }, { value: 'Emergency Drop', label: 'Special Function' }],
    'inspection': [{ value: 'Millimeter', label: 'Detection Accuracy' }, { value: 'Power Specialized', label: 'Application Field' }, { value: 'AI Analysis', label: 'Data Processing' }]
  };
  const metrics = isZh.value ? metricsZh : metricsEn;
  return metrics[systemId] || [];
}

// 无人机应用场景
const getDroneApplications = (systemId) => {
  const applicationsZh = {
    'surveillance': ['机场安防', '边境巡查', '城市监控', '大型活动', '重点区域'],
    'patrol': ['园区巡逻', '交通监管', '环境监测', '农业植保', '物流配送'],
    'rescue': ['灾害救援', '海上搜救', '山地救援', '医疗急救', '应急通信'],
    'inspection': ['电力巡检', '石化检测', '建筑检查', '管道巡查', '设备维护']
  };
  const applicationsEn = {
    'surveillance': ['Airport Security', 'Border Patrol', 'Urban Monitoring', 'Major Events', 'Key Areas'],
    'patrol': ['Park Patrol', 'Traffic Control', 'Environmental Monitoring', 'Agricultural Protection', 'Logistics Delivery'],
    'rescue': ['Disaster Rescue', 'Maritime Search', 'Mountain Rescue', 'Medical Emergency', 'Emergency Communication'],
    'inspection': ['Power Inspection', 'Petrochemical Detection', 'Building Inspection', 'Pipeline Survey', 'Equipment Maintenance']
  };
  const applications = isZh.value ? applicationsZh : applicationsEn;
  return applications[systemId] || (isZh.value ? ['通用场景'] : ['General Scenarios']);
}

// 强制刷新视图的函数
const refreshView = () => {
  forceRender.value += 1;
  window.dispatchEvent(new Event('resize'));
}

// 监听语言变化
watch(() => languageStore.language, () => {
  console.log('语言已切换，刷新无人机系统页面内容');
  setTimeout(() => {
    refreshView();
  }, 100);
}, { immediate: true });

// 组件挂载时执行初始化和刷新
onMounted(async () => {
  await contentStore.fetchContent('partners')
  emit('page-loaded')
  refreshView();
})

// 定义emit
const emit = defineEmits(['page-loaded'])

// 处理图片加载错误
const handleImageError = (event) => {
  const droneElement = event.target.closest('.drone-section');
  const index = Array.from(droneElement.parentNode.children).indexOf(droneElement);
  const system = currentDroneSystems.value[index];
  if (system) {
    event.target.src = `/images/drone/${system.id || 'surveillance'}.jpg`;
  } else {
    event.target.src = '/images/drone/surveillance.jpg';
  }
}

// 处理性能指标图片错误
const handleMetricsImageError = (event) => {
  event.target.src = '/images/drone/performance.jpg';
}
</script>

<style scoped>
/* 无人机系统页面基础样式 */
.drone-system-page {
  padding-top: 0;
  padding-bottom: 80px;
  overflow-x: hidden;
}

/* 无人机系统页面头部 */
.drone-hero {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  padding: 150px 0 100px;
  position: relative;
  overflow: hidden;
  margin-bottom: 80px;
}

.drone-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%23fbbf2422"/></svg>');
  background-size: 30px 30px;
  opacity: 0.3;
  animation: particleMove 60s linear infinite;
}

@keyframes particleMove {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

.drone-hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 2;
}

.drone-badge {
  display: inline-block;
  background: rgba(251, 191, 36, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 20px;
  border: 1px solid rgba(251, 191, 36, 0.3);
  box-shadow: 0 5px 15px rgba(251, 191, 36, 0.2);
}

.drone-headline {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.drone-headline::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
}

.drone-subheading {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* 无人机系统部分 */
.drone-sections {
  margin-top: 60px;
}

.drone-section {
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  gap: 60px;
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.5s ease;
}

.drone-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
  background-size: 200% 100%;
  animation: gradientMove 5s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.drone-section:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
}

.drone-section.reverse {
  flex-direction: row-reverse;
}

.drone-content, .drone-image {
  flex: 1;
  position: relative;
}

.drone-index {
  position: absolute;
  top: -40px;
  left: 0;
  font-size: 8rem;
  font-weight: 800;
  color: rgba(251, 191, 36, 0.07);
  line-height: 1;
  z-index: 0;
}

.drone-content h2 {
  font-size: 2.4rem;
  background: linear-gradient(90deg, #1e293b, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
}

.drone-content h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 2px;
}

/* 无人机亮点样式 */
.drone-highlights {
  margin-bottom: 30px;
  background: rgba(254, 252, 232, 0.7);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.highlight-item:last-child {
  margin-bottom: 0;
}

.highlight-icon {
  color: #fbbf24;
  margin-right: 12px;
  font-size: 1.1rem;
  margin-top: 2px;
}

.highlight-text {
  font-size: 1rem;
  color: #334155;
  line-height: 1.6;
}

/* 无人机特性增强样式 */
.drone-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  overflow: hidden;
}

.feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #fbbf24, #f59e0b);
  opacity: 0;
  transition: all 0.3s ease;
}

.feature:hover {
  background: #fff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-5px);
}

.feature:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(251, 191, 36, 0.2);
  transition: all 0.3s ease;
}

.feature:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-text h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #1e293b;
}

.feature-text p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* 无人机指标迷你展示 */
.drone-metrics-mini {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
}

.metric-mini-item {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
  border-radius: 16px;
  padding: 15px;
  text-align: center;
  flex: 1;
  transition: all 0.3s ease;
  border: 1px solid rgba(251, 191, 36, 0.15);
}

.metric-mini-item:hover {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%);
  transform: translateY(-5px);
}

.metric-mini-value {
  font-size: 1.6rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.metric-mini-label {
  font-size: 0.85rem;
  color: #64748b;
}

/* 无人机图片增强样式 */
.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  transform: perspective(1000px) rotateY(0deg);
}

.drone-section:hover .image-wrapper {
  transform: perspective(1000px) rotateY(2deg);
}

.drone-section.reverse:hover .image-wrapper {
  transform: perspective(1000px) rotateY(-2deg);
}

.drone-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3));
  border-radius: 50%;
  filter: blur(60px);
  z-index: 1;
  animation: pulse 5s infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.2); opacity: 0.8; }
}

.drone-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.8s ease;
  z-index: 2;
  position: relative;
}

.drone-section:hover .drone-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(26, 54, 93, 0.7), transparent);
  z-index: 3;
}

.drone-tag {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(26, 54, 93, 0.8);
  color: #fff;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 4;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 无人机应用场景 */
.drone-applications {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(26, 54, 93, 0.8);
  border-radius: 16px;
  padding: 15px;
  backdrop-filter: blur(5px);
  z-index: 4;
  max-width: 60%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.application-title {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
}

.application-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 50%;
}

.application-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.application-items span {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

/* 无人机系统优势 */
.drone-advantages {
  margin: 100px 0;
  text-align: center;
}

.section-subtitle {
  font-size: 2.2rem;
  color: #1e293b;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.section-subtitle::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 2px;
}

.section-desc {
  max-width: 700px;
  margin: 0 auto 50px;
  color: #64748b;
  font-size: 1.05rem;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.advantage-card {
  background: #fff;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.advantage-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  color: #fbbf24;
  transition: all 0.3s ease;
}

.advantage-card:hover .advantage-icon {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #fff;
  box-shadow: 0 10px 20px rgba(251, 191, 36, 0.3);
}

.advantage-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1e293b;
}

.advantage-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* 无人机系统性能指标 */
.drone-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin: 100px 0;
  background: rgba(254, 252, 232, 0.5);
  border-radius: 20px;
  padding: 50px;
  position: relative;
  overflow: hidden;
}

.drone-metrics::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.03) 0%, rgba(245, 158, 11, 0.03) 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
}

.metrics-content {
  position: relative;
  z-index: 1;
}

.metrics-content .section-subtitle,
.metrics-content .section-desc {
  text-align: left;
}

.metrics-content .section-subtitle::after {
  left: 0;
  transform: none;
}

.metrics-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.metric-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.metric-value {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex-shrink: 0;
  width: 100px;
  text-align: center;
}

.metric-info h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #1e293b;
}

.metric-info p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

.metrics-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 合作伙伴 */
.drone-partners {
  text-align: center;
  margin: 100px 0;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.partner-logo {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.partner-logo:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.partner-logo img {
  max-width: 80%;
  max-height: 60px;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.partner-logo:hover img {
  filter: grayscale(0);
  transform: scale(0.9);
}

.partner-hover {
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(26, 54, 93, 0.8);
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.partner-logo:hover .partner-hover {
  bottom: 0;
}

/* 无人机系统咨询 */
.drone-cta {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  border-radius: 20px;
  padding: 60px;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-top: 100px;
}

.cta-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%23fbbf2422" stroke-width="1"/></svg>');
  background-size: 20px 20px;
  opacity: 0.2;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.cta-content h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 30px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  color: #fff;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(251, 191, 36, 0.3);
  border: none;
  font-size: 1rem;
  text-decoration: none;
}

.btn-primary:hover {
  box-shadow: 0 15px 25px rgba(251, 191, 36, 0.4);
  transform: translateY(-3px);
  color: #fff;
  text-decoration: none;
}

/* 响应式样式 */
@media (max-width: 1200px) {
  .drone-headline {
    font-size: 3rem;
  }
  
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .drone-metrics {
    grid-template-columns: 1fr;
    padding: 40px;
  }
  
  .metrics-image {
    order: -1;
  }
}

@media (max-width: 992px) {
  .drone-section {
    flex-direction: column;
    gap: 40px;
  }
  
  .drone-section.reverse {
    flex-direction: column;
  }
  
  .drone-features {
    grid-template-columns: 1fr;
  }
  
  .drone-cta {
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .drone-hero {
    padding: 120px 0 80px;
  }
  
  .drone-headline {
    font-size: 2.5rem;
  }
  
  .drone-subheading {
    font-size: 1.1rem;
  }
  
  .drone-content h2 {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1.8rem;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .partners-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  
  .metric-value {
    font-size: 2rem;
    width: 80px;
  }
}

@media (max-width: 576px) {
  .drone-badge {
    font-size: 0.8rem;
  }
  
  .drone-headline {
    font-size: 2rem;
  }
  
  .drone-cta {
    padding: 30px;
  }
  
  .feature {
    padding: 15px;
  }
  
  .feature-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .drone-metrics {
    padding: 30px 20px;
  }
  
  .metric-item {
    padding: 15px;
  }
  
  .metric-value {
    font-size: 1.8rem;
    width: 70px;
  }
}
</style>