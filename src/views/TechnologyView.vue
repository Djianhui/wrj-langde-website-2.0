<template>
  <div class="technology-page page-content">
    <!-- 技术页面头部 -->
    <div class="tech-hero">
      <div class="container">
        <div class="tech-hero-wrapper">
          <div class="tech-hero-content">
            <h1 class="tech-headline">{{ techPageTexts.title }}</h1>
            <p class="tech-subheading">{{ techPageTexts.subtitle }}</p>
          </div>
          <div class="tech-hero-images">
            <div class="product-images-grid">
              <div class="product-image-item" v-for="n in 6" :key="n" :class="`product-image-${n}`">
                <img :src="`/images/tech/0${n}.${n === 1 ? 'jpg' : 'png'}`" :alt="`产品图片${n}`" @error="handleImageError">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-particles"></div>
    </div>
    
    <div class="container">
      <!-- 产品分类展示 -->
      <div class="product-categories">
        <div class="categories-header">
          <h2 class="section-title">低空安全系列产品</h2>
          <p class="section-subtitle">朗德智能全系列产品解决方案</p>
        </div>
        
        <div class="categories-content">
          <!-- 左侧产品分类树 -->
          <div class="category-tree">
            <div class="tree-container">
              <div class="tree-item root-item">
                <div class="tree-node" @click="toggleCategory('root')">
                  <i class="fas fa-chevron-down tree-icon" :class="{'expanded': expandedCategories.root}"></i>
                  <span class="node-text">产品分类</span>
                </div>
                
                <div v-show="expandedCategories.root" class="tree-children">
                  <!-- 立体防控 -->
                  <div class="tree-item level-1">
                    <div class="tree-node" @click="toggleCategory('defense'); selectCategory('defense')">
                      <i class="fas fa-chevron-right tree-icon" :class="{'expanded': expandedCategories.defense}"></i>
                      <span class="node-text">立体防控</span>
                    </div>
                    
                    <div v-show="expandedCategories.defense" class="tree-children">
                      <!-- 侦探感知 -->
                      <div class="tree-item level-2">
                        <div class="tree-node" @click="toggleCategory('detection'); selectCategory('detection')">
                          <i class="fas fa-chevron-right tree-icon" :class="{'expanded': expandedCategories.detection}"></i>
                          <span class="node-text">侦探感知</span>
                        </div>
                        
                        <div v-show="expandedCategories.detection" class="tree-children">
                          <div class="tree-item level-3" @click="selectCategory('radar')">
                            <div class="tree-node">
                              <i class="fas fa-dot-circle tree-icon"></i>
                              <span class="node-text">雷达探测</span>
                            </div>
                          </div>
                          <div class="tree-item level-3" @click="selectCategory('optical')">
                            <div class="tree-node">
                              <i class="fas fa-dot-circle tree-icon"></i>
                              <span class="node-text">光电识别</span>
                            </div>
                          </div>
                          <div class="tree-item level-3" @click="selectCategory('spectrum')">
                            <div class="tree-node">
                              <i class="fas fa-dot-circle tree-icon"></i>
                              <span class="node-text">频谱侦测</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- 干扰反制 -->
                      <div class="tree-item level-2" @click="selectCategory('jamming')">
                        <div class="tree-node">
                          <i class="fas fa-circle tree-icon"></i>
                          <span class="node-text">干扰反制</span>
                        </div>
                      </div>
                      
                      <!-- 一体化防御 -->
                      <div class="tree-item level-2" @click="selectCategory('integrated')">
                        <div class="tree-node">
                          <i class="fas fa-circle tree-icon"></i>
                          <span class="node-text">一体化防御</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 低空经济 -->
                  <div class="tree-item level-1">
                    <div class="tree-node" @click="toggleCategory('lowAltitude'); selectCategory('lowAltitude')">
                      <i class="fas fa-chevron-right tree-icon" :class="{'expanded': expandedCategories.lowAltitude}"></i>
                      <span class="node-text">低空经济</span>
                    </div>
                    
                    <div v-show="expandedCategories.lowAltitude" class="tree-children">
                      <div class="tree-item level-2" @click="selectCategory('agriculture')">
                        <div class="tree-node">
                          <i class="fas fa-circle tree-icon"></i>
                          <span class="node-text">农业植保</span>
                        </div>
                      </div>
                      <div class="tree-item level-2" @click="selectCategory('patrol')">
                        <div class="tree-node">
                          <i class="fas fa-circle tree-icon"></i>
                          <span class="node-text">巡查防护</span>
                        </div>
                      </div>
                      <div class="tree-item level-2" @click="selectCategory('fpv')">
                        <div class="tree-node">
                          <i class="fas fa-circle tree-icon"></i>
                          <span class="node-text">FPV</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 右侧产品列表展示 -->
          <div class="category-details">
            <div class="product-list">
              <div class="product-list-header">
                <h3 class="list-title">{{ getCurrentCategoryTitle }}</h3>
                <p class="list-subtitle">{{ getCurrentCategorySubtitle }}</p>
              </div>
              
              <div class="products-grid">
                <!-- 显示当前页的产品 -->
                <div v-for="product in getCurrentPageProducts" :key="product.id" 
                     class="product-card" @click="goToProductDetail(product.link)">
                  <div class="product-image">
                    <img :src="product.image" :alt="product.name" @error="handleProductImageError">
                    <div class="product-overlay">
                      <i class="fas fa-eye"></i>
                    </div>
                  </div>
                  <div class="product-info">
                    <h4 class="product-name">{{ product.name }}</h4>
                    <p class="product-description">{{ product.description }}</p>
                    <div class="product-features">
                      <span v-for="feature in product.features" :key="feature" class="feature-tag">
                        {{ feature }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 分页 -->
              <div class="pagination">
                <button @click="prevPage" :disabled="currentPage === 1" class="page-btn">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="page-btn">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
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
import { useRouter } from 'vue-router'

// 获取语言相关功能
const { isZh, currentLanguage, getTechnologies } = useLanguage()

// 获取语言store以监听语言变化
const languageStore = useLanguageStore()

// 获取路由对象
const router = useRouter()

const contentStore = useContentStore()
const { technologies, partners } = storeToRefs(contentStore)

// 强制刷新标记
const forceRender = ref(0)

// 产品分类状态管理
const expandedCategories = ref({
  root: true, // 默认展开产品中心
  defense: false,
  detection: false,
  lowAltitude: false
})

const selectedCategory = ref(null)

// 分页状态
const currentPage = ref(1)
const itemsPerPage = ref(6) // 按照图片显示，一行三个，两行共六个

// 计算当前分类的产品
const getCurrentCategoryProducts = computed(() => {
  // 如果没有选择分类，返回所有产品
  if (!selectedCategory.value) {
    const products = []
    for (const category in productLists) {
      products.push(...productLists[category].products)
    }
    return products
  }
  // 如果选择了分类，返回该分类的产品
  const categoryData = getCategoryProducts(selectedCategory.value)
  return categoryData.products || []
})

const totalPages = computed(() => {
  return Math.ceil(getCurrentCategoryProducts.value.length / itemsPerPage.value)
})

// 产品列表数据
const productLists = {
  defense: {
    title: '立体防控系列产品',
    subtitle: '先进的空域安全防护解决方案',
    products: [
      {
        id: 'radar-001',
        name: '雷达探测系统',
        description: '高精度雷达目标探测与跟踪',
        image: '/images/products/radar-system.jpg',
        link: '/products/defense/detection/radar',
        features: ['高精度', '全天候', '远距离']
      },
      {
        id: 'optical-001',
        name: '光电识别系统',
        description: '可见光与红外双光谱识别',
        image: '/images/products/optical-system.jpg',
        link: '/products/defense/detection/optical',
        features: ['智能识别', '夜视能力', '高清成像']
      },
      {
        id: 'spectrum-001',
        name: '频谱侦测系统',
        description: '无线电信号侦测与分析',
        image: '/images/products/spectrum-system.jpg',
        link: '/products/defense/detection/spectrum',
        features: ['宽频侦测', '协议分析', '实时监控']
      },
      {
        id: 'jamming-001',
        name: '干扰反制系统',
        description: '定向干扰与精准反制',
        image: '/images/products/jamming-system.jpg',
        link: '/products/defense/jamming',
        features: ['定向干扰', '多频段', '智能控制']
      },
      {
        id: 'integrated-001',
        name: '一体化防御系统',
        description: '集成化智能防御平台',
        image: '/images/products/integrated-system.jpg',
        link: '/products/defense/integrated',
        features: ['系统集成', '智能决策', '移动部署']
      }
    ]
  },
  detection: {
    title: '侦探感知系列产品',
    subtitle: '先进的无人机目标侦测识别技术',
    products: [
      {
        id: 'radar-fixed',
        name: '固定式无线电侦测',
        description: '设备工作稳定、侦测距离远，支持多种部署方式',
        image: '/images/products/fixed-detector.jpg',
        link: '/products/defense/detection/radar',
        features: ['固定部署', '稳定可靠', '远距离侦测']
      },
      {
        id: 'radar-portable',
        name: '手提式无线电侦测',
        description: '穿便设计，便携携带，可实现对频范围内的无人机的侦测',
        image: '/images/products/portable-detector.jpg',
        link: '/products/defense/detection/radar',
        features: ['便携式', '快速部署', '灵活机动']
      },
      {
        id: 'optical-tracking',
        name: '光电识别跟踪',
        description: '集高清可见光摄像机、制冷红外热成像仪、激光照明等于一体',
        image: '/images/products/optical-tracking.jpg',
        link: '/products/defense/detection/optical',
        features: ['高清成像', '红外热成像', '激光照明']
      },
      {
        id: 'radar-lowalt',
        name: '低空探测雷达',
        description: '低空防御系统的重要组成部分',
        image: '/images/products/lowalt-radar.jpg',
        link: '/products/defense/detection/radar',
        features: ['低空专用', '高精度', '快速响应']
      }
    ]
  },
  radar: {
    title: '雷达探测系列产品',
    subtitle: '高精度雷达目标探测与跟踪技术',
    products: [
      {
        id: 'radar-remote',
        name: '无人机远程识别侦测',
        description: '支持独立侦测识别无人机的远程识别及频率信号',
        image: '/images/products/remote-detection.jpg',
        link: '/products/defense/detection/radar',
        features: ['远程识别', '频率信号', '独立侦测']
      },
      {
        id: 'radar-fixed-wireless',
        name: '固定式无线电侦测',
        description: '设备工作稳定、侦测距离远，支持多种部署方式',
        image: '/images/products/fixed-wireless.jpg',
        link: '/products/defense/detection/radar',
        features: ['稳定运行', '多种部署', '远距离侦测']
      },
      {
        id: 'radar-portable-wireless',
        name: '手提式无线电侦测',
        description: '穿便设计，便携携带，可实现对频范围内的无人机的侦测',
        image: '/images/products/portable-wireless.jpg',
        link: '/products/defense/detection/radar',
        features: ['便携设计', '灵活侦测', '快速响应']
      }
    ]
  },
  optical: {
    title: '光电识别系列产品',
    subtitle: '可见光与红外双光谱识别技术',
    products: [
      {
        id: 'optical-tracking-system',
        name: '光电识别跟踪',
        description: '集高清可见光摄像机、制冷红外热成像仪、激光照明等于一体',
        image: '/images/products/optical-tracking-full.jpg',
        link: '/products/defense/detection/optical',
        features: ['高清可见光', '红外热成像', '激光照明']
      }
    ]
  },
  spectrum: {
    title: '频谱侦测系列产品',
    subtitle: '无线电信号侦测与分析技术',
    products: [
      {
        id: 'spectrum-detector',
        name: '物联感知',
        description: '支持独立侦测识别无人机的远程识别及频率信号',
        image: '/images/products/iot-sensor.jpg',
        link: '/products/defense/detection/spectrum',
        features: ['物联网', '远程识别', '频率分析']
      }
    ]
  },
  jamming: {
    title: '干扰反制系列产品',
    subtitle: '定向干扰与精准反制技术',
    products: [
      {
        id: 'jamming-system',
        name: '干扰反制系统',
        description: '采用先进的定向干扰技术，对入侵无人机进行精准反制',
        image: '/images/products/jamming-full.jpg',
        link: '/products/defense/jamming',
        features: ['定向干扰', '精准反制', '智能控制']
      }
    ]
  },
  integrated: {
    title: '一体化防御系列产品',
    subtitle: '集成化智能防御平台',
    products: [
      {
        id: 'integrated-defense',
        name: '一体化防御系统',
        description: '集侦测、识别、预警、反制于一体的智能化防御平台',
        image: '/images/products/integrated-full.jpg',
        link: '/products/defense/integrated',
        features: ['系统集成', '智能决策', '移动部署']
      }
    ]
  },
  lowAltitude: {
    title: '低空经济系列产品',
    subtitle: '智能化低空作业解决方案',
    products: [
      {
        id: 'agriculture-drone',
        name: '农业植保系统',
        description: '提供高效、精准的农业植保作业服务',
        image: '/images/products/agriculture-full.jpg',
        link: '/products/low-altitude/agriculture',
        features: ['精准喷洒', '智能规划', '高效作业']
      },
      {
        id: 'patrol-drone',
        name: '巡查防护系统',
        description: '提供自动化的巡查防护服务，保障区域安全',
        image: '/images/products/patrol-full.jpg',
        link: '/products/low-altitude/patrol',
        features: ['自动巡航', '实时监控', '异常报警']
      },
      {
        id: 'fpv-drone',
        name: 'FPV系统',
        description: '提供专业的FPV飞行体验和竞技服务',
        image: '/images/products/fpv-full.jpg',
        link: '/products/low-altitude/fpv',
        features: ['沉浸体验', '竞技比赛', '技能培训']
      }
    ]
  },
  agriculture: {
    title: '农业植保系列产品',
    subtitle: '智能化农业植保作业服务',
    products: [
      {
        id: 'agriculture-system',
        name: '农业植保系统',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-system.jpg',
        link: '/products/low-altitude/agriculture',
        features: ['精准喷洒', '智能规划', '数据分析']
      }
    ]
  },
  patrol: {
    title: '巡查防护系列产品',
    subtitle: '智能化巡查防护解决方案',
    products: [
      {
        id: 'patrol-system',
        name: '巡查防护系统',
        description: '提供自动化的巡查防护服务，保障区域安全',
        image: '/images/products/patrol-system.jpg',
        link: '/products/low-altitude/patrol',
        features: ['自动巡航', '实时监控', '异常报警']
      }
    ]
  },
  fpv: {
    title: 'FPV系列产品',
    subtitle: '第一人称沉浸式飞行体验',
    products: [
      {
        id: 'fpv-system',
        name: 'FPV系统',
        description: '提供专业的FPV飞行体验和竞技服务',
        image: '/images/products/fpv-system.jpg',
        link: '/products/low-altitude/fpv',
        features: ['沉浸体验', '竞技比赛', '技能培训']
      }
    ]
  }
}
const categoryData = {
  defense: {
    title: '立体防控系统',
    subtitle: '全方位空域安全防护解决方案',
    description: '集成侦探、识别、预警、干扰反制于一体的智能化防御系统',
    image: '/images/products/defense-system.jpg',
    link: '/products/defense',
    features: [
      { icon: 'fas fa-radar', title: '多元侦测', description: '雷达、光电、频谱多重侦测手段' },
      { icon: 'fas fa-shield-alt', title: '智能防御', description: '自动识别、分级预警、精准反制' },
      { icon: 'fas fa-network-wired', title: '系统集成', description: '统一指挥平台，多设备协同作业' }
    ],
    specs: [
      { name: '侦测距离', value: '≥10km' },
      { name: '识别精度', value: '≥95%' },
      { name: '反应时间', value: '<3秒' }
    ]
  },
  detection: {
    title: '侦探感知系统',
    subtitle: '先进的无人机目标侦测识别技术',
    description: '采用多传感器融合技术，实现全天候、全方位目标侦测',
    image: '/images/products/detection-system.jpg',
    link: '/products/defense/detection',
    features: [
      { icon: 'fas fa-satellite-dish', title: '雷达侦测', description: '高精度雷达系统，可探测微小目标' },
      { icon: 'fas fa-eye', title: '光电识别', description: '可见光/红外双光谱成像识别' },
      { icon: 'fas fa-wifi', title: '频谱侦测', description: '无线电信号侦测和分析' }
    ],
    specs: [
      { name: '侦测范围', value: '360°全方位' },
      { name: '最小目标', value: '0.01m²' },
      { name: '侦测高度', value: '20m-3000m' }
    ]
  },
  radar: {
    title: '雷达探测系统',
    subtitle: '高精度雷达目标探测与跟踪',
    description: '采用先进的相控阵雷达技术，实现对小型无人机的精准探测',
    image: '/images/tech/05.png',
    link: '/products/defense/detection/radar',
    features: [
      { icon: 'fas fa-crosshairs', title: '精准定位', description: '毫米级定位精度' },
      { icon: 'fas fa-tachometer-alt', title: '快速响应', description: '毫秒级目标检测' },
      { icon: 'fas fa-chart-line', title: '轨迹跟踪', description: '实时轨迹预测分析' }
    ],
    specs: [
      { name: '探测距离', value: '5-10km' },
      { name: '定位精度', value: '±1m' },
      { name: '工作频段', value: 'Ku段' }
    ]
  },
  optical: {
    title: '光电识别系统',
    subtitle: '可见光与红外双光谱识别',
    description: '采用先进的光电成像技术，实现对无人机的视觉识别和分类',
    image: '/images/products/optical-detection.jpg',
    link: '/products/defense/detection/optical',
    features: [
      { icon: 'fas fa-camera', title: '高清成像', description: '4K超高清光电成像' },
      { icon: 'fas fa-thermometer-half', title: '红外探测', description: '热成像夜视探测能力' },
      { icon: 'fas fa-brain', title: 'AI识别', description: '智能目标识别算法' }
    ],
    specs: [
      { name: '视野范围', value: '360°全景' },
      { name: '变焦倍数', value: '30倍光学变焦' },
      { name: '识别精度', value: '≥96%' }
    ]
  },
  spectrum: {
    title: '频谱侦测系统',
    subtitle: '无线电信号侦测与分析',
    description: '对无人机的控制信号进行侦测、识别和分析，判断其类型和威胁等级',
    image: '/images/tech/05.png',
    link: '/products/defense/detection/spectrum',
    features: [
      { icon: 'fas fa-signal', title: '信号侦测', description: '宽频无线电信号侦测' },
      { icon: 'fas fa-search', title: '协议分析', description: '深度协议解析与识别' },
      { icon: 'fas fa-database', title: '特征库', description: '丰富的信号特征数据库' }
    ],
    specs: [
      { name: '频率范围', value: '400MHz-6GHz' },
      { name: '侦测灵敏度', value: '-110dBm' },
      { name: '识别类型', value: '50+种无人机' }
    ]
  },
  jamming: {
    title: '干扰反制系统',
    subtitle: '定向干扰与精准反制',
    description: '采用先进的定向干扰技术，对入侵无人机进行精准反制',
    image: '/images/products/jamming-system.jpg',
    link: '/products/defense/jamming',
    features: [
      { icon: 'fas fa-wifi', title: '信号干扰', description: '多频段定向干扰' },
      { icon: 'fas fa-location-arrow', title: 'GPS屏蔽', description: '导航信号干扰屏蔽' },
      { icon: 'fas fa-bullseye', title: '精准打击', description: '定向能量聚焦打击' }
    ],
    specs: [
      { name: '干扰距离', value: '1-3km' },
      { name: '功率输出', value: '100W' },
      { name: '频段覆盖', value: '2.4G/5.8G' }
    ]
  },
  integrated: {
    title: '一体化防御系统',
    subtitle: '集成化智能防御平台',
    description: '集侦测、识别、预警、反制于一体的智能化防御平台',
    image: '/images/products/integrated-defense.jpg',
    link: '/products/defense/integrated',
    features: [
      { icon: 'fas fa-cogs', title: '系统集成', description: '多子系统一体化集成' },
      { icon: 'fas fa-brain', title: '智能决策', description: 'AI智能分析决策系统' },
      { icon: 'fas fa-mobile-alt', title: '移动部署', description: '快速部署机动作业' }
    ],
    specs: [
      { name: '防护半径', value: '0.5-5km' },
      { name: '部署时间', value: '<30分钟' },
      { name: '同时目标', value: '32个' }
    ]
  },
  lowAltitude: {
    title: '低空经济系统',
    subtitle: '智能化低空作业解决方案',
    description: '为低空经济发展提供专业的无人机作业解决方案',
    image: '/images/products/low-altitude-economy.jpg',
    link: '/products/low-altitude',
    features: [
      { icon: 'fas fa-seedling', title: '智慧农业', description: '精准农业作业服务' },
      { icon: 'fas fa-search-location', title: '巡检监控', description: '智能巡检监控系统' },
      { icon: 'fas fa-video', title: 'FPV体验', description: '第一人称飞行体验' }
    ],
    specs: [
      { name: '服务领域', value: '3大类别' },
      { name: '作业效率', value: '提升1000%' },
      { name: '成本降低', value: '60%' }
    ]
  },
  agriculture: {
    title: '农业植保系统',
    subtitle: '智能化农业植保作业服务',
    description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
    image: '/images/products/agriculture-drone.jpg',
    link: '/products/low-altitude/agriculture',
    features: [
      { icon: 'fas fa-spray-can', title: '精准喷洒', description: '变量喷洒技术' },
      { icon: 'fas fa-map', title: '地图规划', description: '智能路径规划' },
      { icon: 'fas fa-chart-bar', title: '数据分析', description: '作业数据统计' }
    ],
    specs: [
      { name: '喷洒精度', value: '±5cm' },
      { name: '作业效率', value: '200亩/小时' },
      { name: '载荷容量', value: '20L' }
    ]
  },
  patrol: {
    title: '巡查防护系统',
    subtitle: '智能化巡查防护解决方案',
    description: '提供自动化的巡查防护服务，保障区域安全',
    image: '/images/products/patrol-drone.jpg',
    link: '/products/low-altitude/patrol',
    features: [
      { icon: 'fas fa-route', title: '自动巡航', description: '智能路径巡航' },
      { icon: 'fas fa-video', title: '实时监控', description: '高清视频监控' },
      { icon: 'fas fa-bell', title: '异常报警', description: '智能异常识别' }
    ],
    specs: [
      { name: '巡航时间', value: '4小时' },
      { name: '监控范围', value: '5km半径' },
      { name: '视频质量', value: '4K超高清' }
    ]
  },
  fpv: {
    title: 'FPV系统',
    subtitle: '第一人称沉浸式飞行体验',
    description: '提供专业的FPV飞行体验和竞技服务',
    image: '/images/products/fpv-drone.jpg',
    link: '/products/low-altitude/fpv',
    features: [
      { icon: 'fas fa-vr-cardboard', title: '沉浸体验', description: '第一人称视角' },
      { icon: 'fas fa-trophy', title: '竞技比赛', description: '专业竞技平台' },
      { icon: 'fas fa-graduation-cap', title: '培训教育', description: 'FPV技能培训' }
    ],
    specs: [
      { name: '飞行速度', value: '150km/h' },
      { name: '图传延迟', value: '<20ms' },
      { name: '控制距离', value: '2km' }
    ]
  }
}

// 切换分类展开状态
const toggleCategory = (categoryId) => {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]
}

// 获取分类产品列表
const getCategoryProducts = (categoryId) => {
  return productLists[categoryId] || { title: '', subtitle: '', products: [] }
}

// 获取当前分类的标题
const getCurrentCategoryTitle = computed(() => {
  if (!selectedCategory.value) {
    return '全部产品'
  }
  const categoryData = getCategoryProducts(selectedCategory.value)
  return categoryData.title || '产品列表'
})

// 获取当前分类的副标题
const getCurrentCategorySubtitle = computed(() => {
  if (!selectedCategory.value) {
    return '朗德智能全系列产品解决方案'
  }
  const categoryData = getCategoryProducts(selectedCategory.value)
  return categoryData.subtitle || '专业的产品解决方案'
})

// 跳转到产品详情页
const goToProductDetail = (link) => {
  if (link) {
    router.push(link)
  }
}

// 分页操作
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// 获取当前页的产品
const getCurrentPageProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return getCurrentCategoryProducts.value.slice(startIndex, endIndex)
})

// 处理产品图片加载错误
const handleProductImageError = (event) => {
  event.target.src = '/images/products/default-product.jpg'
}

// 选择分类
const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId
  currentPage.value = 1 // 重置到第一页
}

// 获取分类数据
const getCategoryData = (categoryId) => {
  return categoryData[categoryId] || {}
}

// 下载产品手册
const downloadBrochure = (categoryId) => {
  // 这里可以实现下载逻辑
  console.log('下载产品手册:', categoryId)
  alert('产品手册下载功能开发中...')
}

// 处理图片加载错误
const handleImageError = (event) => {
  event.target.src = '/images/products/default-product.jpg'
}

// 处理默认图片加载错误
const handleDefaultImageError = (event) => {
  event.target.src = '/images/products/product-overview-default.jpg'
}

// 当前语言的技术数据
const currentTechnologies = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新计算
  return contentStore.currentTechnologies
})

// 技术页面文本
const techPageTexts = computed(() => {
  forceRender.value; // 添加依赖以便在语言切换时重新计算
  return isZh.value ? {
    title: '创新型无线安防产品',
    subtitle: '助力夯实安全防线',
    advantages: '技术优势',
    advantagesSubtitle: '我们的技术优势源自持续的研发投入与创新，为客户提供全方位的技术保障',
    metrics: '技术指标',
    metricsSubtitle: '朗德智能反无人机系统的核心技术指标，展示我们的技术实力',
    partners: '合作伙伴',
    partnersSubtitle: '我们与行业领先的技术提供商紧密合作，共同推动智能技术的应用与发展',
    needConsultation: '需要技术咨询？',
    consultationDesc: '我们的技术专家随时为您提供专业支持与解决方案',
    contactUs: '联系我们',
    applicableScenarios: '适用场景'
  } : {
    title: 'Innovative wireless security products',
    subtitle: 'Help to strengthen the safety defense line',
    advantages: 'Technical Advantages',
    advantagesSubtitle: 'Our technical advantages come from continuous R&D investment and innovation, providing comprehensive technical support for our clients',
    metrics: 'Technical Metrics',
    metricsSubtitle: 'Core technical metrics of Lande Intelligent anti-drone systems, demonstrating our technical capability',
    partners: 'Partners',
    partnersSubtitle: 'We work closely with industry-leading technology providers to jointly promote the application and development of intelligent technology',
    needConsultation: 'Need Technical Consultation?',
    consultationDesc: 'Our technical experts are ready to provide professional support and solutions for you',
    contactUs: 'Contact Us',
    applicableScenarios: 'Applicable Scenarios'
  }
})

// 技术标签
const getTechTag = (index) => {
  const tagsZh = ['智能识别', '精准定位', '实时防护', '数据分析', '系统集成', '智能控制'];
  const tagsEn = ['Intelligent Recognition', 'Precise Positioning', 'Real-time Protection', 'Data Analysis', 'System Integration', 'Smart Control'];
  const tags = isZh.value ? tagsZh : tagsEn;
  return tags[index % tags.length];
}

// 技术优势数据
const advantages = ref([
  {
    icon: 'fas fa-brain',
    title: '智能算法',
    description: '自主研发的深度学习算法，实现高精度目标识别与跟踪，误报率低于0.1%'
  },
  {
    icon: 'fas fa-shield-alt',
    title: '全方位防护',
    description: '多传感器融合技术，实现360°无死角覆盖，有效防御各类无人机威胁'
  },
  {
    icon: 'fas fa-bolt',
    title: '快速响应',
    description: '毫秒级决策系统，秒级拦截，确保关键区域安全，平均响应时间<3秒'
  },
  {
    icon: 'fas fa-cogs',
    title: '系统集成',
    description: '模块化设计，可灵活适配各类场景需求，与现有安防系统无缝对接'
  }
])

const advantagesEn = ref([
  {
    icon: 'fas fa-brain',
    title: 'Intelligent Algorithms',
    description: 'Self-developed deep learning algorithms achieving high-precision target recognition and tracking with false alarm rate below 0.1%'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'All-round Protection',
    description: 'Multi-sensor fusion technology enables 360° coverage with no blind spots, effectively defending against various drone threats'
  },
  {
    icon: 'fas fa-bolt',
    title: 'Rapid Response',
    description: 'Millisecond-level decision system, second-level interception, ensuring security of key areas with average response time <3s'
  },
  {
    icon: 'fas fa-cogs',
    title: 'System Integration',
    description: 'Modular design, adaptable to various scenario requirements, seamlessly integrating with existing security systems'
  }
])

// 根据当前语言获取技术优势数据
const currentAdvantages = computed(() => {
  return isZh.value ? advantages.value : advantagesEn.value;
})

// 技术指标数据
const metrics = ref([
  {
    value: '99.9%',
    title: '识别准确率',
    description: '基于深度学习的目标识别算法，准确率高达99.9%'
  },
  {
    value: '10km+',
    title: '探测范围',
    description: '先进雷达系统，探测范围超过10公里'
  },
  {
    value: '<3s',
    title: '响应时间',
    description: '从探测到响应，全流程时间少于3秒'
  },
  {
    value: '24/7',
    title: '全天候工作',
    description: '全天候不间断工作，适应各种复杂环境'
  }
])

const metricsEn = ref([
  {
    value: '99.9%',
    title: 'Recognition Accuracy',
    description: 'Deep learning-based target recognition algorithm with accuracy up to 99.9%'
  },
  {
    value: '10km+',
    title: 'Detection Range',
    description: 'Advanced radar system with detection range exceeding 10 kilometers'
  },
  {
    value: '<3s',
    title: 'Response Time',
    description: 'Less than 3 seconds for the entire process from detection to response'
  },
  {
    value: '24/7',
    title: 'All-weather Operation',
    description: 'Continuous operation in all weather conditions, adapting to various complex environments'
  }
])

// 根据当前语言获取技术指标数据
const currentMetrics = computed(() => {
  return isZh.value ? metrics.value : metricsEn.value;
})

// 技术亮点数据
const getTechHighlight = (techId, index) => {
  const highlightsZh = {
    'detection': [
      '采用多传感器融合技术，实现全天候、全天时、全方位探测',
      '探测距离可达10公里以上，覆盖面积超过300平方公里'
    ],
    'jamming': [
      '智能干扰技术可精准识别无人机通信频段，实现定向干扰',
      '多频段覆盖，有效应对各类商业和自研无人机系统'
    ],
    'interception': [
      '采用专利拦截技术，无人机捕获成功率高达99.9%',
      '可同时拦截多架无人机，应对集群威胁'
    ],
    'command': [
      '自主研发的指挥控制系统，响应时间低至毫秒级',
      '支持多平台部署，实现跨区域联动防御'
    ],
    'ai': [
      'AI深度学习算法，可识别2000+型号无人机，准确率超过99.8%',
      '自主学习能力，持续优化识别模型，应对新型无人机威胁'
    ],
    'integration': [
      '模块化设计，可灵活配置不同功能组件，满足多样化需求',
      '兼容第三方安防系统，无缝集成现有安全架构'
    ]
  };
  
  const highlightsEn = {
    'detection': [
      'Employs multi-sensor fusion technology for all-weather, all-time, all-direction detection',
      'Detection distance of over 10 kilometers, covering an area exceeding 300 square kilometers'
    ],
    'jamming': [
      'Intelligent jamming technology precisely identifies drone communication bands for directional interference',
      'Multi-band coverage effectively counters various commercial and custom drone systems'
    ],
    'interception': [
      'Patented interception technology with 99.9% drone capture success rate',
      'Capable of simultaneously intercepting multiple drones to counter swarm threats'
    ],
    'command': [
      'Self-developed command and control system with millisecond-level response time',
      'Supports multi-platform deployment for cross-regional coordinated defense'
    ],
    'ai': [
      'AI deep learning algorithm can identify 2000+ drone models with accuracy exceeding 99.8%',
      'Self-learning capability continuously optimizes recognition models to address new drone threats'
    ],
    'integration': [
      'Modular design allows flexible configuration of different functional components to meet diverse needs',
      'Compatible with third-party security systems, seamlessly integrating with existing security architectures'
    ]
  };
  
  const highlights = isZh.value ? highlightsZh : highlightsEn;
  return highlights[techId] ? highlights[techId][index] : (isZh.value ? '先进技术，行业领先' : 'Advanced technology, industry-leading');
}

// 技术指标数据
const getTechMetrics = (techId) => {
  const metricsZh = {
    'detection': [
      { value: '10km+', label: '探测范围' },
      { value: '99.8%', label: '识别率' },
      { value: '<1.5s', label: '响应时间' }
    ],
    'jamming': [
      { value: '3km+', label: '干扰距离' },
      { value: '全频段', label: '覆盖范围' },
      { value: '30min+', label: '持续工作' }
    ],
    'interception': [
      { value: '99.9%', label: '拦截率' },
      { value: '8架/次', label: '同时拦截' },
      { value: '全自动', label: '操作模式' }
    ],
    'command': [
      { value: '毫秒级', label: '响应速度' },
      { value: '100+', label: '节点接入' },
      { value: '24/7', label: '运行时间' }
    ],
    'ai': [
      { value: '2000+', label: '识别型号' },
      { value: '99.8%', label: '准确率' },
      { value: '自学习', label: '算法特性' }
    ],
    'integration': [
      { value: '全兼容', label: '系统对接' },
      { value: '模块化', label: '设计理念' },
      { value: '定制化', label: '部署方案' }
    ]
  };
  
  const metricsEn = {
    'detection': [
      { value: '10km+', label: 'Detection Range' },
      { value: '99.8%', label: 'Recognition Rate' },
      { value: '<1.5s', label: 'Response Time' }
    ],
    'jamming': [
      { value: '3km+', label: 'Jamming Distance' },
      { value: 'Full-band', label: 'Coverage' },
      { value: '30min+', label: 'Continuous Operation' }
    ],
    'interception': [
      { value: '99.9%', label: 'Interception Rate' },
      { value: '8 drones', label: 'Simultaneous Interception' },
      { value: 'Automated', label: 'Operation Mode' }
    ],
    'command': [
      { value: 'ms-level', label: 'Response Speed' },
      { value: '100+', label: 'Node Access' },
      { value: '24/7', label: 'Operation Time' }
    ],
    'ai': [
      { value: '2000+', label: 'Recognized Models' },
      { value: '99.8%', label: 'Accuracy' },
      { value: 'Self-learning', label: 'Algorithm Feature' }
    ],
    'integration': [
      { value: 'Compatible', label: 'System Connection' },
      { value: 'Modular', label: 'Design Concept' },
      { value: 'Customized', label: 'Deployment Solution' }
    ]
  };
  
  const metrics = isZh.value ? metricsZh : metricsEn;
  return metrics[techId] || [];
}

// 技术应用场景
const getTechApplications = (techId) => {
  const applicationsZh = {
    'detection': ['机场', '边境', '重要设施', '大型活动', '军事基地'],
    'jamming': ['要地防护', '反恐行动', '重要会议', 'VIP安保', '军事设施'],
    'interception': ['高危区域', '禁飞区', '军事基地', '核设施', '政府机构'],
    'command': ['应急指挥', '区域联防', '大型活动', '城市安防', '边境巡逻'],
    'ai': ['智能监控', '威胁识别', '行为分析', '态势感知', '预警系统'],
    'integration': ['智慧城市', '机场安防', '边境防护', '电力巡检', '港口安全']
  };
  
  const applicationsEn = {
    'detection': ['Airports', 'Borders', 'Critical Facilities', 'Major Events', 'Military Bases'],
    'jamming': ['Key Area Protection', 'Counter-terrorism', 'Important Meetings', 'VIP Security', 'Military Facilities'],
    'interception': ['High-risk Areas', 'No-fly Zones', 'Military Bases', 'Nuclear Facilities', 'Government Institutions'],
    'command': ['Emergency Command', 'Regional Defense', 'Major Events', 'Urban Security', 'Border Patrol'],
    'ai': ['Smart Monitoring', 'Threat Identification', 'Behavior Analysis', 'Situation Awareness', 'Early Warning'],
    'integration': ['Smart Cities', 'Airport Security', 'Border Protection', 'Power Inspection', 'Port Security']
  };
  
  const applications = isZh.value ? applicationsZh : applicationsEn;
  return applications[techId] || (isZh.value ? ['通用场景'] : ['General Scenarios']);
}

// 强制刷新视图的函数
const refreshView = () => {
  forceRender.value += 1; // 改变forceRender的值
  // 触发页面样式重新计算
  window.dispatchEvent(new Event('resize'));
}

// 监听语言变化
watch(() => languageStore.language, () => {
  // 当语言变化时，确保页面内容刷新
  console.log('语言已切换，刷新技术页面内容');
  // 延迟执行以确保store数据已更新
  setTimeout(() => {
    refreshView();
  }, 100);
}, { immediate: true }); // 立即执行一次确保初始化

// 组件挂载时执行初始化和刷新
onMounted(async () => {
  await Promise.all([
    contentStore.fetchContent('technologies'),
    contentStore.fetchContent('partners')
  ])
  
  // 为技术项目添加图片字段
  if (technologies.value && technologies.value.length > 0) {
    technologies.value = technologies.value.map(tech => {
      return {
        ...tech,
        image: tech.image || getTechImage(tech.id)
      }
    })
  }
  
  // 通知父组件页面已加载完成
  emit('page-loaded')
  
  // 刷新视图
  refreshView();
})

// 定义emit
const emit = defineEmits(['page-loaded'])

// 获取技术图片
const getTechImage = (techId) => {
  const techImages = {
    'detection': '/images/tech/detection.jpg',
    'jamming': '/images/tech/jamming.jpg',
    'interception': '/images/tech/interception.jpg',
    'command': '/images/tech/command.jpg',
    'ai': '/images/tech/ai.jpg',
    'integration': '/images/tech/integration.jpg'
  }
  
  return techImages[techId] || '/images/tech/detection.jpg'
}

</script>

<style scoped>
/* 技术页面基础样式 */
.technology-page {
  padding-top: 0;
  padding-bottom: 80px;
  overflow-x: hidden;
}

/* 技术页面头部 */
.tech-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 150px 0 100px;
  position: relative;
  overflow: hidden;
  margin-bottom: 80px;
}

.tech-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="%234facfe22"/></svg>');
  background-size: 30px 30px;
  opacity: 0.3;
  animation: particleMove 60s linear infinite;
}

@keyframes particleMove {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

.tech-hero-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  position: relative;
  z-index: 2;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

.tech-hero-content {
  flex: 0 0 500px;
  color: #fff;
  text-align: center;
  padding-right: 20px;
}

.tech-hero-images {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 每张图片的自定义尺寸 - 根据原始比例设置 */
.product-image-1 {
  width: 100px;
  height: 240px;
}

.product-image-2 {
  width: 100px;
  height: 240px;
}

.product-image-3 {
  width: 160px;
  height: 280px;
}

.product-image-4 {
  width: 160px;
  height: 280px;
}

.product-image-5 {
  width: 300px;
  height: 280px;
}

.product-image-6 {
  width: 300px;
  height: 280px;
}

.product-images-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 20px;
  max-width: 1000px;
  width: 100%;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
}

.product-image-item {
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image-item:hover {
  transform: translateY(-8px) scale(1.05);
}

.product-image-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
  border-radius: 8px;
  display: block;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

.product-image-item:hover img {
  filter: drop-shadow(0 15px 30px rgba(79, 172, 254, 0.3));
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent);
  z-index: 3;
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
}

.tech-headline {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.tech-headline::after {
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

.tech-subheading {
  font-size: 2.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* 技术部分 */
.tech-sections {
  margin-top: 60px;
}

.tech-section {
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

.tech-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4facfe, #00f2fe, #4facfe);
  background-size: 200% 100%;
  animation: gradientMove 5s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.tech-section:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
}

.tech-section.reverse {
  flex-direction: row-reverse;
}

.tech-content, .tech-image {
  flex: 1;
  position: relative;
}

.tech-index {
  position: absolute;
  top: -40px;
  left: 0;
  font-size: 8rem;
  font-weight: 800;
  color: rgba(79, 172, 254, 0.07);
  line-height: 1;
  z-index: 0;
}

.tech-badge {
  display: inline-block;
  background: rgba(79, 172, 254, 0.1);
  color: #4facfe;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
  border: 1px solid rgba(79, 172, 254, 0.2);
  box-shadow: 0 5px 15px rgba(79, 172, 254, 0.1);
}

.tech-content h2 {
  font-size: 2.4rem;
  background: linear-gradient(90deg, #1e293b, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
}

.tech-content h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
}

.tech-desc {
  margin-bottom: 30px;
  line-height: 1.8;
  color: #475569;
  font-size: 1.05rem;
}

/* 技术亮点样式 */
.tech-highlights {
  margin-bottom: 30px;
  background: rgba(241, 245, 249, 0.7);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(226, 232, 240, 0.8);
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
  color: #4facfe;
  margin-right: 12px;
  font-size: 1.1rem;
  margin-top: 2px;
}

.highlight-text {
  font-size: 1rem;
  color: #334155;
  line-height: 1.6;
}

/* 技术特性增强样式 */
.tech-features {
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
  background: linear-gradient(to bottom, #4facfe, #00f2fe);
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(79, 172, 254, 0.2);
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

/* 技术指标迷你展示 */
.tech-metrics-mini {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
}

.metric-mini-item {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
  border-radius: 16px;
  padding: 15px;
  text-align: center;
  flex: 1;
  transition: all 0.3s ease;
  border: 1px solid rgba(79, 172, 254, 0.15);
}

.metric-mini-item:hover {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%);
  transform: translateY(-5px);
}

.metric-mini-value {
  font-size: 1.6rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.metric-mini-label {
  font-size: 0.85rem;
  color: #64748b;
}

/* 技术图片增强样式 */
.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  transform: perspective(1000px) rotateY(0deg);
}

.tech-section:hover .image-wrapper {
  transform: perspective(1000px) rotateY(2deg);
}

.tech-section.reverse:hover .image-wrapper {
  transform: perspective(1000px) rotateY(-2deg);
}

.tech-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.3), rgba(0, 242, 254, 0.3));
  border-radius: 50%;
  filter: blur(60px);
  z-index: 1;
  animation: pulse 5s infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.2); opacity: 0.8; }
}

.tech-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.8s ease;
  z-index: 2;
  position: relative;
}

.tech-section:hover .tech-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent);
  z-index: 3;
}

.tech-tag {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(15, 23, 42, 0.8);
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

/* 技术应用场景 */
.tech-applications {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(15, 23, 42, 0.8);
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
  background: linear-gradient(135deg, #4facfe, #00f2fe);
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

.application-items span:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* 技术优势 */
.tech-advantages {
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
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
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
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  color: #4facfe;
  transition: all 0.3s ease;
}

.advantage-card:hover .advantage-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
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

/* 技术指标 */
.tech-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin: 100px 0;
  background: rgba(241, 245, 249, 0.5);
  border-radius: 20px;
  padding: 50px;
  position: relative;
  overflow: hidden;
}

.tech-metrics::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.03) 0%, rgba(0, 242, 254, 0.03) 100%);
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
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
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
.tech-partners {
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
  background: rgba(15, 23, 42, 0.8);
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.partner-logo:hover .partner-hover {
  bottom: 0;
}

/* 技术咨询 */
.tech-cta {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%234facfe22" stroke-width="1"/></svg>');
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
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
  border: none;
  font-size: 1rem;
}

.btn-primary:hover {
  box-shadow: 0 15px 25px rgba(79, 172, 254, 0.4);
  transform: translateY(-3px);
}

/* 响应式样式 */
/* 1200px以下 - 4列布局 */
@media (max-width: 1200px) {
  .tech-headline {
    font-size: 3rem;
  }
  
  .tech-hero-wrapper {
    gap: 80px;
    max-width: 1400px;
  }
  
  .tech-hero-content {
    flex: 0 0 450px;
    text-align: center;
  }
  
  .product-images-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    max-width: 800px;
  }
  
  .product-image-1 {
    width: 240px;
    height: 200px;
  }
  
  .product-image-2 {
    width: 110px;
    height: 90px;
  }
  
  .product-image-3 {
    width: 260px;
    height: 190px;
  }
  
  .product-image-4 {
    width: 115px;
    height: 100px;
  }
  
  .product-image-5 {
    width: 250px;
    height: 180px;
  }
  
  .product-image-6 {
    width: 105px;
    height: 95px;
  }
  
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .tech-metrics {
    grid-template-columns: 1fr;
    padding: 40px;
  }
  
  .metrics-image {
    order: -1;
  }
}

/* 992px以下 - 3列布局 */
@media (max-width: 992px) {
  .tech-hero-wrapper {
    gap: 60px;
  }
  
  .tech-hero-content {
    flex: 0 0 400px;
    text-align: center;
  }
  
  .product-images-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 600px;
  }
  
  .product-image-1 {
    width: 200px;
    height: 170px;
  }
  
  .product-image-2 {
    width: 95px;
    height: 75px;
  }
  
  .product-image-3 {
    width: 260px;
    height: 190px;
  }
  
  .product-image-4 {
    width: 100px;
    height: 85px;
  }
  
  .product-image-5 {
    width: 210px;
    height: 150px;
  }
  
  .product-image-6 {
    width: 90px;
    height: 80px;
  }
  
  .tech-section {
    flex-direction: column;
    gap: 40px;
  }
  
  .tech-section.reverse {
    flex-direction: column;
  }
  
  .tech-features {
    grid-template-columns: 1fr;
  }
  
  .tech-cta {
    padding: 40px;
  }
}

/* 768px以下 - 垂直布局，2列布局 */
@media (max-width: 768px) {
  .tech-hero {
    padding: 120px 0 80px;
  }
  
  .tech-hero-wrapper {
    flex-direction: column;
    gap: 40px;
    text-align: center;
    align-items: center;
    padding: 0 15px;
  }
  
  .tech-hero-content {
    flex: none;
    text-align: center;
    max-width: 100%;
    padding-right: 0;
  }
  
  .tech-hero-images {
    width: 100%;
    justify-content: center;
  }
  
  .product-images-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 15px;
    max-width: 1000px;
  }
  
  .product-image-1 {
    width: 280px;
    height: 230px;
  }
  
  .product-image-2 {
    width: 230px;
    height: 105px;
  }
  
  .product-image-3 {
    width: 260px;
    height: 190px;
  }
  
  .product-image-4 {
    width: 135px;
    height: 115px;
  }
  
  .product-image-5 {
    width: 290px;
    height: 210px;
  }
  
  .product-image-6 {
    width: 125px;
    height: 110px;
  }
  
  .tech-headline {
    font-size: 2.2rem;
    white-space: nowrap;
  }
  
  .tech-subheading {
    font-size: 1.1rem;
  }
  
  .tech-content h2 {
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

/* 576px以下 - 2列布局 */
@media (max-width: 576px) {
  .tech-badge {
    font-size: 0.8rem;
  }
  
  .tech-headline {
    font-size: 1.8rem;
    white-space: nowrap;
  }
  
  .tech-hero-wrapper {
    gap: 30px;
    padding: 0 10px;
  }
  
  .product-images-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 12px;
    max-width: 320px;
  }
  
  .product-image-1 {
    width: 240px;
    height: 200px;
  }
  
  .product-image-2 {
    width: 110px;
    height: 90px;
  }
  
  .product-image-3 {
    width: 260px;
    height: 192px;
  }
  
  .product-image-4 {
    width: 115px;
    height: 100px;
  }
  
  .product-image-5 {
    width: 125px;
    height: 90px;
  }
  
  .product-image-6 {
    width: 105px;
    height: 95px;
  }
  
  .tech-cta {
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
  
  .tech-metrics {
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

/* 产品分类样式 */
.product-categories {
  padding: 80px 0;
}

.categories-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.categories-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  min-height: 600px;
}

/* 左侧产品分类树 */
.category-tree {
  background: #f8fafc;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.tree-container {
  font-family: 'Microsoft YaHei', sans-serif;
}

.tree-item {
  margin-bottom: 8px;
}

.tree-node {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tree-node:hover {
  background: rgba(79, 172, 254, 0.1);
  transform: translateX(5px);
}

.tree-icon {
  margin-right: 12px;
  font-size: 0.9rem;
  color: #64748b;
  transition: all 0.3s ease;
  width: 16px;
  text-align: center;
}

.tree-icon.expanded {
  transform: rotate(90deg);
  color: #4facfe;
}

.node-text {
  font-size: 1rem;
  color: #1e293b;
  font-weight: 500;
  transition: color 0.3s ease;
}

.tree-node:hover .node-text {
  color: #4facfe;
  font-weight: 600;
}

.root-item .tree-node {
  background: linear-gradient(90deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
  border: 2px solid rgba(79, 172, 254, 0.2);
  font-weight: 600;
}

.root-item .node-text {
  font-size: 1.1rem;
  color: #4facfe;
}

.tree-children {
  margin-left: 20px;
  margin-top: 8px;
  border-left: 2px solid rgba(79, 172, 254, 0.2);
  padding-left: 20px;
  animation: slideDown 0.3s ease;
}

.level-1 .tree-node {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.level-2 .tree-node {
  background: rgba(248, 250, 252, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.6);
}

.level-3 .tree-node {
  background: rgba(241, 245, 249, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.4);
  font-size: 0.9rem;
}

.level-3 .tree-icon {
  color: #9ca3af;
  font-size: 0.7rem;
}

/* 右侧产品列表 */
.product-list {
  padding: 0;
}

.product-list-header {
  margin-bottom: 30px;
  text-align: center;
}

.list-title {
  font-size: 1.8rem;
  color: #1e293b;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.list-subtitle {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.product-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e2e8f0;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: #4facfe;
}

.product-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 172, 254, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.product-overlay i {
  color: white;
  font-size: 2rem;
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  line-height: 1.3;
}

.product-description {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.feature-tag {
  background: rgba(79, 172, 254, 0.1);
  color: #4facfe;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* 分页 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.page-btn {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  color: #64748b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
  background: #4facfe;
  border-color: #4facfe;
  color: white;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
  min-width: 60px;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .product-info {
    padding: 15px;
  }
  
  .list-title {
    font-size: 1.5rem;
  }
  
  .product-image {
    height: 160px;
  }
}

@media (max-width: 480px) {
  .product-image {
    height: 140px;
  }
  
  .product-name {
    font-size: 1rem;
  }
  
  .feature-tag {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
}
.category-details {
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.detail-header {
  margin-bottom: 30px;
}

.detail-title {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.detail-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 15px;
}

.detail-image {
  position: relative;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.detail-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.detail-image:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.detail-image:hover .image-overlay {
  transform: translateY(0);
}

.overlay-content h4 {
  margin-bottom: 8px;
  font-size: 1.2rem;
}

.overlay-content p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.detail-features {
  margin-bottom: 30px;
}

.detail-features h4 {
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.detail-features h4::before {
  content: '\f0c9';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
  color: #4facfe;
}

.features-grid {
  display: grid;
  gap: 15px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(79, 172, 254, 0.05);
  transform: translateX(5px);
}

.feature-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-content h5 {
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 5px;
}

.feature-content p {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
}

.detail-specs {
  margin-bottom: 30px;
}

.detail-specs h4 {
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.detail-specs h4::before {
  content: '\f0ae';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
  color: #4facfe;
}

.specs-list {
  display: grid;
  gap: 12px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.spec-name {
  font-weight: 500;
  color: #374151;
}

.spec-value {
  font-weight: 600;
  color: #4facfe;
  background: rgba(79, 172, 254, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.detail-actions {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
}

.btn-primary {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  box-shadow: 0 5px 15px rgba(79, 172, 254, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.4);
  color: white;
  text-decoration: none;
}

.btn-secondary {
  background: #f8fafc;
  color: #4facfe;
  border: 2px solid #4facfe;
}

.btn-secondary:hover {
  background: #4facfe;
  color: white;
  transform: translateY(-2px);
}

/* 默认展示 */
.default-content {
  text-align: center;
}

.default-image {
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
}

.default-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.default-text h3 {
  font-size: 1.8rem;
  color: #1e293b;
  margin-bottom: 15px;
}

.default-text p {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 30px;
}

.overview-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

/* 动画 */
@keyframes slideDown {
  0% {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .categories-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .category-tree {
    order: 2;
  }
  
  .category-details {
    order: 1;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .categories-content {
    gap: 20px;
  }
  
  .category-tree,
  .category-details {
    padding: 20px;
  }
  
  .detail-title {
    font-size: 1.5rem;
  }
  
  .detail-actions {
    flex-direction: column;
  }
  
  .overview-stats {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .tree-children {
    margin-left: 10px;
    padding-left: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
