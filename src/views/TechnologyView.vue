<template>
  <div class="technology-page page-content">
    <div class="container product-center-container">
      <!-- 产品分类展示 -->
      <div class="product-categories">
        <div class="categories-header">
        </div>
        
        <div class="categories-content">
          <!-- 左侧产品分类树 -->
          <div class="category-tree">
            <!-- 分类标题头部 -->
            <div class="category-header">
              <span class="header-text">产品分类</span>
            </div>
            
            <div class="tree-container">
              <div class="tree-item root-item">
                <div class="tree-node" @click="toggleCategory('root')" data-category="root">
                  <i class="fas fa-microchip tree-icon" :class="{'expanded': expandedCategories.root}"></i>
                  <span class="node-text">产品中心</span>
                </div>
                
                <div v-show="expandedCategories.root" class="tree-children">
                  <!-- 立体防控 -->
                  <div class="tree-item level-1">
                    <div class="tree-node" @click="toggleCategory('defense'); selectCategory('defense')" data-category="defense">
                      <i class="fas fa-shield-alt tree-icon" :class="{'expanded': expandedCategories.defense}"></i>
                      <span class="node-text">立体防控</span>
                    </div>
                    
                    <div v-show="expandedCategories.defense" class="tree-children">
                      <!-- 侦探感知 -->
                      <div class="tree-item level-2">
                        <div class="tree-node" @click="toggleCategory('detection'); selectCategory('detection')" data-category="detection">
                          <i class="fas fa-radar tree-icon" :class="{'expanded': expandedCategories.detection}"></i>
                          <span class="node-text">侦探感知</span>
                        </div>
                        
                        <div v-show="expandedCategories.detection" class="tree-children">
                          <div class="tree-item level-3" @click="selectCategory('radar')">
                            <div class="tree-node" data-category="radar">
                              <i class="fas fa-satellite-dish tree-icon"></i>
                              <span class="node-text">雷达探测</span>
                            </div>
                          </div>
                          <div class="tree-item level-3" @click="selectCategory('optical')">
                            <div class="tree-node" data-category="optical">
                              <i class="fas fa-eye tree-icon"></i>
                              <span class="node-text">光电识别</span>
                            </div>
                          </div>
                          <div class="tree-item level-3" @click="selectCategory('spectrum')">
                            <div class="tree-node" data-category="spectrum">
                              <i class="fas fa-wave-square tree-icon"></i>
                              <span class="node-text">频谱侦测</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- 干扰反制 -->
                      <div class="tree-item level-2" @click="selectCategory('jamming')">
                        <div class="tree-node" data-category="jamming">
                          <i class="fas fa-wifi tree-icon"></i>
                          <span class="node-text">干扰反制</span>
                        </div>
                      </div>
                      
                      <!-- 一体化防御 -->
                      <div class="tree-item level-2" @click="selectCategory('integrated')">
                        <div class="tree-node" data-category="integrated">
                          <i class="fas fa-cogs tree-icon"></i>
                          <span class="node-text">一体化防御</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 低空经济 -->
                  <div class="tree-item level-1">
                    <div class="tree-node" @click="toggleCategory('lowAltitude'); selectCategory('lowAltitude')" data-category="lowAltitude">
                      <i class="fas fa-helicopter tree-icon" :class="{'expanded': expandedCategories.lowAltitude}"></i>
                      <span class="node-text">低空经济</span>
                    </div>
                    
                    <div v-show="expandedCategories.lowAltitude" class="tree-children">
                      <div class="tree-item level-2" @click="selectCategory('agriculture')">
                        <div class="tree-node" data-category="agriculture">
                          <i class="fas fa-seedling tree-icon"></i>
                          <span class="node-text">农业植保</span>
                        </div>
                      </div>
                      <div class="tree-item level-2" @click="selectCategory('patrol')">
                        <div class="tree-node" data-category="patrol">
                          <i class="fas fa-search-location tree-icon"></i>
                          <span class="node-text">巡查防护</span>
                        </div>
                      </div>
                      <div class="tree-item level-2" @click="selectCategory('fpv')">
                        <div class="tree-node" data-category="fpv">
                          <i class="fas fa-gamepad tree-icon"></i>
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
          <div class="category-details" id="product-list-container">
            <div class="product-list">
              <div class="product-list-header">
                <h3 class="list-title">{{ getCurrentCategoryTitle }}</h3>
                <p class="list-subtitle">{{ getCurrentCategorySubtitle }}</p>
              </div>
              
              <div class="products-grid">
                <!-- 显示当前页的产品 -->
                <div v-for="product in getCurrentPageProducts" :key="product.id" 
                     class="product-card" @click="goToProductDetail(product.link)"
                     :data-product-id="product.id" :data-product-link="product.link">
                  <div class="product-image">
                    <img :src="product.image" :alt="product.name" @error="handleProductImageError">
                    <div class="product-overlay">
                      <i class="fas fa-eye"></i>
                    </div>
                  </div>
                  <div class="product-info">
                    <h4 class="product-name">{{ product.name }}</h4>
                    <p class="product-description">{{ product.description }}</p>
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
import { ref, onMounted, computed, watch, onUnmounted, nextTick } from 'vue'
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
  defense: true, // 默认展开立体防控
  detection: true, // 默认展开侦探感知
  lowAltitude: true // 默认展开低空经济
})

const selectedCategory = ref(null)

// 分页状态
const currentPage = ref(1)
const itemsPerPage = ref(6) // 按照图片显示，一行三个，两行共六个

// 监听全局分类选择事件
const handleGlobalCategorySelect = (event) => {
  const { categoryId, categoryText } = event.detail
  console.log('接收到全局分类选择:', categoryId, categoryText)
  
  // 根据分类 ID 设置当前选中的分类
  const categoryMapping = {
    'defense': 'defense',
    'detection': 'detection', 
    'low-altitude': 'lowAltitude',
    'radar': 'radar',
    'optical': 'optical',
    'spectrum': 'spectrum',
    'jamming': 'jamming',
    'integrated': 'integrated',
    'agriculture': 'agriculture',
    'patrol': 'patrol',
    'fpv': 'fpv'
  }
  
  const mappedCategory = categoryMapping[categoryId]
  if (mappedCategory) {
    selectCategory(mappedCategory)
    
    // 如果是父级分类，需要展开相应的分类树
    if (categoryId === 'defense') {
      expandedCategories.value.root = true
      expandedCategories.value.defense = true
    } else if (categoryId === 'detection') {
      expandedCategories.value.root = true
      expandedCategories.value.defense = true
      expandedCategories.value.detection = true
    } else if (categoryId === 'low-altitude') {
      expandedCategories.value.root = true
      expandedCategories.value.lowAltitude = true
    }
    
    // 注释滚动功能，由App.vue统一处理
    // nextTick(() => {
    //   setTimeout(() => {
    //     scrollToProductListInPage()
    //   }, 300)
    // })
  }
}

// 初始化时选择FPV分类以显示7寸穿越机
const initializeFpvCategory = () => {
  console.log('初始化FPV分类')
  selectCategory('agriculture')
  expandedCategories.value.root = true
  expandedCategories.value.lowAltitude = true
  
  // 调试信息：检查FPV分类下的产品
  console.log('FPV分类下的产品:', productLists.fpv.products)
  const fpv7Product = productLists.fpv.products.find(p => p.id === 'fpv-system-7')
  console.log('7寸穿越机产品数据:', fpv7Product)
}

// 监听全局产品选择事件
const handleGlobalProductSelect = (event) => {
  const { productId } = event.detail
  console.log('接收到全局产品选择:', productId)
  
  // 根据产品 ID 设置当前选中的分类
  const productMapping = {
    'radar': 'radar',
    'optical': 'optical', 
    'spectrum': 'spectrum',
    'jamming': 'jamming',
    'integrated': 'integrated',
    'agriculture': 'agriculture',
    'patrol': 'patrol',
    'fpv': 'fpv'
  }
  
  const mappedCategory = productMapping[productId]
  if (mappedCategory) {
    selectCategory(mappedCategory)
    
    // 展开相应的分类树
    if (['radar', 'optical', 'spectrum'].includes(productId)) {
      expandedCategories.value.root = true
      expandedCategories.value.defense = true
      expandedCategories.value.detection = true
    } else if (['jamming', 'integrated'].includes(productId)) {
      expandedCategories.value.root = true
      expandedCategories.value.defense = true
    } else if (['agriculture', 'patrol', 'fpv'].includes(productId)) {
      expandedCategories.value.root = true
      expandedCategories.value.lowAltitude = true
    }
    
    // 滚动到产品列表
    nextTick(() => {
      setTimeout(() => {
        scrollToProductListInPage()
      }, 300)
    })
  }
}

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
        name: '低空探测雷达',
        description: '高精度雷达目标探测与跟踪',
        image: '/images/tech/03.png',
        link: '/products/defense/detection/radar',
        features: ['高精度', '全天候', '远距离']
      },
      {
        id: 'optical-001',
        name: '光电识别跟踪',
        description: '集高清可见光摄像机、制冷红外热成像仪、激光照明等于一体',
        image: '/images/products/optical.png',
        link: '/products/defense/detection/optical',
        features: ['智能识别', '夜视能力', '高清成像']
      },
      {
        id: 'photoelectric-detection',
        name: '光电探测设备',
        description: '内置智能目标检测与跟踪算法',
        image: '/images/products/photoelectric-detection.png',
        link: '/products/defense/detection/photoelectric-detection',
        features: ['高清成像', '红外热成像', '激光照明']
      },
      {
        id: 'spectrum-001',
        name: '频谱侦测系统',
        description: '无线电信号侦测与分析',
        image: '/images/products/spectrum.png',
        link: '/products/defense/detection/spectrum',
        features: ['宽频侦测', '协议分析', '实时监控']
      },
      {
        id: 'jamming-001',
        name: '固定式无人机侦测设备',
        description: '定向干扰与精准反制',
        image: '/images/products/jamming-system.png',
        link: '/products/defense/jamming',
        features: ['定向干扰', '多频段', '智能控制']
      },
      {
        id: 'fixed-countermeasures',
        name: '固定式无人机侦测设备',
        description: '射频干扰技术，可覆盖20MHz~6GHz的全频段',
        image: '/images/products/fixed-countermeasures.png',
        link: '/products/defense/fixed-countermeasures',
        features: ['系统集成', '智能决策', '移动部署']
      },
      {
        id: 'strike-gun',
        name: '三通道无人机打击枪',
        description: '射频干扰技术，可覆盖20MHz~6GHz的全频段',
        image: '/images/products/strike-gun.png',
        link: '/products/defense/strike-gun',
        features: ['系统集成', '智能决策', '移动部署']
      },
      
      {
        id: 'fixed-detector',
        name: '近海安防雷达',
        description: '监控船只的探测、 警戒和目标指示',
        image: '/images/products/fixed-detector.png',
        link: '/products/defense/detection/fixed',
        features: ['固定部署', '稳定可靠', '远距离侦测']
      },
      {
        id: 'photoelectric-detection',
        name: '光电探测设备',
        description: '内置智能目标检测与跟踪算法',
        image: '/images/products/photoelectric-detection.png',
        link: '/products/defense/detection/photoelectric-detection',
        features: ['高清成像', '红外热成像', '激光照明']
      },
        {
        id: 'spectrum-integrated-defense',
        name: '固定式无人机侦测设备',
        description: '集侦测、识别、预警、反制于一体的智能化防御平台',
        image: '/images/products/integrated.png',
        link: '/products/defense/integrated',
        features: ['系统集成', '智能决策', '移动部署']
      },
       {
        id: 'vehicle-mounted',
        name: '车载侦打一体系统',
        description: '四面相控阵监测雷达、全频段频谱侦测、光电追踪系统以及全频段无人机干 扰设备四部分组成',
        image: '/images/products/vehicle-mounted.png',
        link: '/products/defense/vehicle-mounted',
        features: ['系统集成', '智能决策', '移动部署']
      },
       {
        id: 'four-one',
        name: '四位一体无人机立体防御系统',
        description: '系统集成了雷达探测、电磁干扰、导航诱骗以 及外置频谱监测等先进技术',
        image: '/images/products/four-one.png',
        link: '/products/defense/four-one',
        features: ['系统集成', '智能决策', '移动部署']
      }
    ]
  },
  detection: {
    title: '侦探感知系列产品',
    subtitle: '先进的无人机目标侦测识别技术',
    products: [
      {
        id: 'fixed-detector',
        name: '近海安防雷达',
        description: '监控船只的探测、 警戒和目标指示',
        image: '/images/products/fixed-detector.png',
        link: '/products/defense/detection/fixed',
        features: ['固定部署', '稳定可靠', '远距离侦测']
      },
      {
        id: 'low-altitude-radar',
        name: '低空安防雷达',
        description: '适应夜晚、雨雪、雾霾、扬尘等恶劣环境',
        image: '/images/products/low-altitude-radar.png',
        link: '/products/defense/detection/low-altitude-radar',
        features: ['便携式', '快速部署', '灵活机动']
      },
        {
        id: 'spectrum-detector',
        name: '频谱侦测系统',
        description: '支持独立侦测识别无人机的远程识别及频率信号',
        image: '/images/products/spectrum.png',
        link: '/products/defense/detection/spectrum',
        features: ['物联网', '远程识别', '频率分析']
      },
      {
        id: 'optical-tracking',
        name: '光电识别跟踪',
        description: '集高清可见光摄像机、制冷红外热成像仪、激光照明等于一体',
        image: '/images/products/optical.png',
        link: '/products/defense/detection/optical',
        features: ['高清成像', '红外热成像', '激光照明']
      },
      {
        id: 'photoelectric-detection',
        name: '光电探测设备',
        description: '内置智能目标检测与跟踪算法',
        image: '/images/products/photoelectric-detection.png',
        link: '/products/defense/detection/photoelectric-detection',
        features: ['高清成像', '红外热成像', '激光照明']
      },
      {
        id: 'radar-lowalt',
        name: '低空探测雷达',
        description: '低空防御系统的重要组成部分',
        image: '/images/products/radar.png',
        link: '/products/defense/detection/radar',
        features: ['低空专用', '高精度', '快速响应']
      },
        {
        id: 'spectrum-integrated-defense',
        name: '固定式无人机侦测设备',
        description: '集侦测、识别、预警、反制于一体的智能化防御平台',
        image: '/images/products/integrated.png',
        link: '/products/defense/integrated',
        features: ['系统集成', '智能决策', '移动部署']
      }
    ]
  },
  radar: {
    title: '雷达探测系列产品',
    subtitle: '高精度雷达目标探测与跟踪技术',
    products: [
      {
        id: 'radar-remote',
        name: '低空探测雷达',
        description: '支持独立侦测识别无人机的远程识别及频率信号',
        image: '/images/tech/03.png',
        link: '/products/defense/detection/radar',
        features: ['远程识别', '频率信号', '独立侦测']
      },
      {
        id: 'fixed-detector',
        name: '近海安防雷达',
        description: '监控船只的探测、 警戒和目标指示',
        image: '/images/products/fixed-detector.png',
        link: '/products/defense/detection/fixed',
        features: ['稳定运行', '多种部署', '远距离侦测']
      },
      {
        id: 'low-altitude-radar',
        name: '低空安防雷达',
        description: '适应夜晚、雨雪、雾霾、扬尘等恶劣环境',
        image: '/images/products/low-altitude-radar.png',
        link: '/products/defense/detection/low-altitude-radar',
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
        image: '/images/products/optical.png',
        link: '/products/defense/detection/optical',
        features: ['高清可见光', '红外热成像', '激光照明']
      },
       {
        id: 'optical-photoelectric-detection',
        name: '光电探测设备',
        description: '内置智能目标检测与跟踪算法',
        image: '/images/products/photoelectric-detection.png',
        link: '/products/defense/detection/photoelectric-detection',
        features: ['高清成像', '红外热成像', '激光照明']
      }
    ]
  },
  spectrum: {
    title: '频谱侦测系列产品',
    subtitle: '无线电信号侦测与分析技术',
    products: [
      {
        id: 'spectrum-detector',
        name: '频谱侦测系统',
        description: '支持独立侦测识别无人机的远程识别及频率信号',
        image: '/images/products/spectrum.png',
        link: '/products/defense/detection/spectrum',
        features: ['物联网', '远程识别', '频率分析']
      },
       {
        id: 'spectrum-integrated-defense',
        name: '固定式无人机侦测设备',
        description: '集侦测、识别、预警、反制于一体的智能化防御平台',
        image: '/images/products/integrated.png',
        link: '/products/defense/integrated',
        features: ['系统集成', '智能决策', '移动部署']
      }
    ]
  },
  jamming: {
    title: '干扰反制系列产品',
    subtitle: '定向干扰与精准反制技术',
    products: [
      {
        id: 'jamming-system',
        name: '固定式无人机侦测设备',
        description: '采用先进的定向干扰技术，对入侵无人机进行精准反制',
        image: '/images/products/jamming-system.png',
        link: '/products/defense/jamming',
        features: ['定向干扰', '精准反制', '智能控制']
      },
       {
        id: 'fixed-countermeasures',
        name: '固定式无人机侦测设备',
        description: '射频干扰技术，可覆盖20MHz~6GHz的全频段',
        image: '/images/products/fixed-countermeasures.png',
        link: '/products/defense/fixed-countermeasures',
        features: ['系统集成', '智能决策', '移动部署']
      },
      {
        id: 'strike-gun',
        name: '三通道无人机打击枪',
        description: '射频干扰技术，可覆盖20MHz~6GHz的全频段',
        image: '/images/products/strike-gun.png',
        link: '/products/defense/strike-gun',
        features: ['系统集成', '智能决策', '移动部署']
      },
    ]
  },
  integrated: {
    title: '一体化防御系列产品',
    subtitle: '集成化智能防御平台',
    products: [
      {
        id: 'vehicle-mounted',
        name: '车载侦打一体系统',
        description: '四面相控阵监测雷达、全频段频谱侦测、光电追踪系统以及全频段无人机干 扰设备四部分组成',
        image: '/images/products/vehicle-mounted.png',
        link: '/products/defense/vehicle-mounted',
        features: ['系统集成', '智能决策', '移动部署']
      },
      {
        id: 'four-one',
        name: '四位一体无人机立体防御系统',
        description: '系统集成了雷达探测、电磁干扰、导航诱骗以 及外置频谱监测等先进技术',
        image: '/images/products/four-one.png',
        link: '/products/defense/four-one',
        features: ['系统集成', '智能决策', '移动部署']
      }
    ]
  },
  lowAltitude: {
    title: '低空经济系列产品',
    subtitle: '智能化低空作业解决方案',
    products: [
        {
        id: 'agriculture-system',
        name: 'X-25农业植保无人机',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-drone.png',
        link: '/products/low-altitude/agriculture',
        features: ['精准喷洒', '智能规划', '数据分析']
      },
       {
        id: 'agriculture-system-lz4',
        name: 'X50无人机',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-drone-lz4.png',
        link: '/products/low-altitude/agriculture-system-lz4',
        features: ['精准喷洒', '智能规划', '数据分析']
      },
        {
        id: 'agriculture-system-la8',
        name: 'LA8-100无人机',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-drone-la8.png',
        link: '/products/low-altitude/agriculture-system-la8',
        features: ['精准喷洒', '智能规划', '数据分析']
      },
       {
        id: 'fpv-system',
        name: '5寸穿越机',
        description: '提供专业的FPV飞行体验和竞技服务',
        image: '/images/products/fpv-5.png',
        link: '/products/low-altitude/fpv',
        features: ['沉浸体验', '竞技比赛', '技能培训']
      },
        {
        id: 'fpv-system-7',
        name: '7寸穿越机',
        description: '为探索更远的风景而生',
        image: '/images/products/fpv-7.png',
        link: '/products/low-altitude/fpv-7',
        features: ['沉浸体验', '竞技比赛', '技能培训']
      },
      {
        id: 'patrol-system',
        name: '巡查矢量多旋翼无人机',
        description: '专为复杂环境下的高效巡查任务而设计',
        image: '/images/products/patrol-drone.png',
        link: '/products/low-altitude/patrol',
        features: ['自动巡航', '实时监控', '异常报警']
      },
      {
        id: 'fire-fighting',
        name: '消防多旋翼无人机',
        description: '充分发挥无人机机动灵活的特点',
        image: '/images/products/fire-fighting.png',
        link: '/products/low-altitude/fire-fighting',
        features: ['自动巡航', '实时监控', '异常报警']
      }
    ]
  },
  agriculture: {
    title: '农业植保系列产品',
    subtitle: '智能化农业植保作业服务',
    products: [
      {
        id: 'agriculture-system',
        name: 'X-25农业植保无人机',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-drone.png',
        link: '/products/low-altitude/agriculture',
        features: ['精准喷洒', '智能规划', '数据分析']
      },
       {
        id: 'agriculture-system-lz4',
        name: 'X50无人机',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-drone-lz4.png',
        link: '/products/low-altitude/agriculture-system-lz4',
        features: ['精准喷洒', '智能规划', '数据分析']
      },
        {
        id: 'agriculture-system-la8',
        name: 'LA8-100无人机',
        description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
        image: '/images/products/agriculture-drone-la8.png',
        link: '/products/low-altitude/agriculture-system-la8',
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
        name: '巡查矢量多旋翼无人机',
        description: '专为复杂环境下的高效巡查任务而设计',
        image: '/images/products/patrol-drone.png',
        link: '/products/low-altitude/patrol',
        features: ['自动巡航', '实时监控', '异常报警']
      },
       {
        id: 'fire-fighting',
        name: '消防多旋翼无人机',
        description: '充分发挥无人机机动灵活的特点',
        image: '/images/products/fire-fighting.png',
        link: '/products/low-altitude/fire-fighting',
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
        name: '5寸穿越机',
        description: '提供专业的FPV飞行体验和竞技服务',
        image: '/images/products/fpv-5.png',
        link: '/products/low-altitude/fpv',
        features: ['沉浸体验', '竞技比赛', '技能培训']
      },
      {
        id: 'fpv-system-7',
        name: '7寸穿越机',
        description: '为探索更远的风景而生',
        image: '/images/products/fpv-7.png',
        link: '/products/low-altitude/fpv-7',
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
    image: '/images/products/optical.png',
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
    image: '/images/products/jamming-system.png',
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
    image: '/images/products/integrated.png',
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
    subtitle: 'X-25农业植保无人机',
    description: '提供高效、精准的农业植保作业服务，提高农业生产效率',
    image: '/images/products/agriculture-drone.png',
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
  console.log('点击产品卡片，跳转链接:', link)
  if (link) {
    try {
      router.push(link)
      console.log('路由跳转成功:', link)
    } catch (error) {
      console.error('路由跳转失败:', error, link)
    }
  } else {
    console.warn('产品链接为空')
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
  
  // 移除所有节点的选中状态
  document.querySelectorAll('.tree-node').forEach(node => {
    node.classList.remove('selected')
  })
  
  // 为当前选中的分类添加选中状态
  nextTick(() => {
    const targetNode = document.querySelector(`[data-category="${categoryId}"]`)
    if (targetNode) {
      targetNode.classList.add('selected')
    }
  })
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
  
  // 监听全局分类选择事件
  window.addEventListener('categorySelected', handleGlobalCategorySelect)
  
  // 监听全局产品选择事件 
  window.addEventListener('productSelected', handleGlobalProductSelect)
  
  // 初始化FPV分类以显示7寸穿越机
  initializeFpvCategory()
  
  // 通知父组件页面已加载完成
  emit('page-loaded')
  
  // 刷新视图
  refreshView();
})

// 组件销毁时清理事件监听器
onUnmounted(() => {
  window.removeEventListener('categorySelected', handleGlobalCategorySelect)
  window.removeEventListener('productSelected', handleGlobalProductSelect)
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
/* ======================================================================
   产品中心 / 技术页面 —— 参考 product.html 设计令牌（Material Design 3）
   色板：#003ec7 primary / #00677f secondary / #fbf8ff surface
        #ffffff surface-container-lowest / #f3f2ff surface-container-low
        #ededfb surface-container / #c3c5d9 outline-variant
        #737688 outline / #191b25 on-surface / #434656 on-surface-variant
   字体：Manrope (headline) + Inter (body)
   间距：xl 80 / lg 48 / md 24 / sm 12 / base 8 / xs 4 / container 1280
   ====================================================================== */

.technology-page {
  padding-top: 0;
  padding-bottom: 80px;
  background: #fbf8ff;
  color: #191b25;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

.technology-page .container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* ---------- Hero ---------- */
.tech-hero {
  background: #fbf8ff;
  padding: 80px 0 48px;
  border-bottom: 1px solid rgba(195, 197, 217, 0.35);
  position: relative;
}

.tech-hero-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.tech-hero-content {
  max-width: 560px;
}

.tech-headline {
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #191b25;
  margin: 0 0 16px;
}

.tech-subheading {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #434656;
  letter-spacing: 0.01em;
  margin: 0;
}

.tech-hero-images {
  display: block;
}

.product-images-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
  gap: 12px;
}

.product-image-item {
  background: #ededfb;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(195, 197, 217, 0.3);
}

.product-image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}

.product-image-item:hover img {
  transform: scale(1.05);
}

.tech-particles { display: none; }

/* ---------- 主容器 ---------- */
.technology-page .product-center-container {
  padding: 140px 48px 64px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.product-categories {
  display: block;
}

.categories-header { display: none; }

.categories-content {
  display: flex;
  gap: 56px;
  align-items: flex-start;
}

/* ---------- 左侧：产品目录树 ---------- */
.category-tree {
  width: 260px;
  flex-shrink: 0;
  position: sticky;
  top: 104px;
}

.category-header {
  border-bottom: 1px solid rgba(195, 197, 217, 0.4);
  padding-bottom: 10px;
  margin-bottom: 16px;
}

.category-header .header-text {
  font-family: 'Manrope', sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: #191b25;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.tree-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tree-item {
  display: flex;
  flex-direction: column;
}

.tree-node {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease, color 0.2s ease;
  color: #434656;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  position: relative;
}

.tree-node .tree-icon {
  font-size: 14px;
  color: #737688;
  transition: transform 0.2s ease;
  width: 18px;
  text-align: center;
}

.tree-node .node-text {
  flex: 1;
}

.tree-node:hover {
  background: #f3f2ff;
  color: #003ec7;
}

.tree-node.selected {
  color: #003ec7;
  background: rgba(0, 62, 199, 0.05);
  font-weight: 600;
}

/* 一级（立体防控 / 低空经济） */
.tree-item.root-item > .tree-node { display: none; }

.tree-item.level-1 {
  margin-top: 8px;
}

.tree-item.level-1 > .tree-node {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #191b25;
  padding: 10px 0;
  border-bottom: 1px solid rgba(195, 197, 217, 0.3);
  border-radius: 0;
  justify-content: space-between;
}

.tree-item.level-1 > .tree-node:hover { background: transparent; color: #003ec7; }

.tree-item.level-1 > .tree-children {
  padding-left: 8px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* 二级（侦探感知 / 干扰反制 / 农业植保...） */
.tree-item.level-2 > .tree-node {
  font-size: 16px;
  font-weight: 600;
  color: #434656;
  padding: 6px 4px;
}

.tree-item.level-2 > .tree-children {
  margin-left: 24px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(195, 197, 217, 0.4);
}

/* 三级（雷达探测 / 光电识别 / 频谱侦测） */
.tree-item.level-3 {
  position: relative;
}

.tree-item.level-3 > .tree-node {
  font-size: 16px;
  font-weight: 400;
  color: #434656;
  padding: 6px 12px;
  border-radius: 0 4px 4px 0;
  margin-left: -1px;
}

.tree-item.level-3 > .tree-node::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: transparent;
  transition: background 0.2s ease;
}

.tree-item.level-3 > .tree-node.selected {
  color: #003ec7;
  background: rgba(0, 62, 199, 0.05);
  font-weight: 700;
}

.tree-item.level-3 > .tree-node.selected::before {
  background: #003ec7;
}

.tree-item.level-3 > .tree-node:hover::before {
  background: rgba(0, 62, 199, 0.4);
}

/* ---------- 右侧：产品列表 ---------- */
.category-details {
  flex: 1;
  min-width: 0;
}

.product-list {
  display: flex;
  flex-direction: column;
}

.product-list-header {
  margin-bottom: 28px;
}

.list-title {
  font-family: 'Manrope', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #191b25;
  margin: 0 0 8px;
}

.list-subtitle {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #434656;
  letter-spacing: 0;
  text-transform: none;
  margin: 0;
  line-height: 1.6;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.product-card {
  background: #ffffff;
  border: 1px solid rgba(195, 197, 217, 0.35);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.product-card:hover {
  border-color: rgba(0, 62, 199, 0.5);
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
  transform: translateY(-2px);
}

.product-image {
  aspect-ratio: 4 / 3;
  background: #ededfb;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
}

.product-image img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
  opacity: 0.95;
  transition: transform 0.7s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.04);
}

.product-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(195, 197, 217, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  inset: auto 12px auto auto;
}

.product-overlay::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00ccf9;
}

.product-overlay i {
  font-size: 10px;
  color: #191b25;
}

.product-overlay::after {
  content: 'Active';
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #191b25;
  letter-spacing: 0.05em;
}

.product-info {
  padding: 48px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #191b25;
  line-height: 1.3;
  margin: 0 0 12px;
  transition: color 0.3s ease;
}

.product-card:hover .product-name {
  color: #003ec7;
}

.product-description {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #434656;
  margin: 0 0 24px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}

/* ---------- 分页 ---------- */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;
}

.page-btn {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #737688;
  background: transparent;
  color: #191b25;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.page-btn:hover:not(:disabled) {
  border-color: #003ec7;
  color: #003ec7;
  background: rgba(0, 62, 199, 0.04);
}

.page-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.page-info {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #434656;
  letter-spacing: 0.05em;
}

/* ---------- 响应式 ---------- */
@media (max-width: 1024px) {
  .tech-hero-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .categories-content {
    flex-direction: column;
    gap: 48px;
  }

  .category-tree {
    width: 100%;
    position: static;
  }
}

@media (max-width: 768px) {
  .technology-page .container,
  .product-center-container {
    padding: 24px;
  }

  .tech-hero {
    padding: 48px 0 32px;
  }

  .tech-headline,
  .list-title {
    font-size: 32px;
  }

  .tech-subheading {
    font-size: 16px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-info {
    padding: 32px;
  }

  .product-images-grid {
    grid-auto-rows: 90px;
  }
}

@media (max-width: 480px) {
  .tech-headline,
  .list-title {
    font-size: 28px;
  }

  .product-info {
    padding: 24px;
  }

  .pagination {
    gap: 16px;
  }
}
</style>

