import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'
import axios from 'axios'
import { useLanguageStore } from './language'

export const useContentStore = defineStore('content', () => {
  // 获取语言store
  const languageStore = useLanguageStore()
  
  // 状态管理
  const loading = ref(false)
  const error = ref(null)
  const isInitialized = ref(false)
  
  // 添加一个强制刷新的标记
  const refreshTrigger = ref(0)
  
  // 监听语言变化，触发刷新
  watch(() => languageStore.language, async (newLang, oldLang) => {
    console.log('ContentStore检测到语言变化，从', oldLang, '变为', newLang);
    await initializeContent()
  })

  // 初始化内容
  const initializeContent = async () => {
    if (loading.value) return
    
    try {
      loading.value = true
      error.value = null
      
      // 这里可以添加实际的API调用来获取数据
      // 现在我们使用本地数据
      await new Promise(resolve => setTimeout(resolve, 100)) // 模拟API调用
      
      refreshTrigger.value++
      isInitialized.value = true
    } catch (err) {
      console.error('Failed to initialize content:', err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  // 网站基本信息
  const siteInfo = reactive({
    zh: {
      companyName: '杭州朗德智能科技有限公司',
      slogan: '智能全域电磁安防一体化平台',
      description: '领先的反无人机系统及反无人机解决方案提供商',
      contactInfo: {
        address: '浙江省杭州市滨江区科技园区创新大厦A座15楼',
        phone: '15211191964',
        email: '1547554061@qq.com'
      }
    },
    en: {
      companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
      slogan: 'Intelligent all-domain electromagnetic security integrated platform',
      description: 'Leading provider of anti-drone systems and solutions',
      contactInfo: {
        address: '15F, Building A, Innovation Tower, Science & Technology Park, Binjiang District, Hangzhou, Zhejiang',
        phone: '15211191964',
        email: '1547554061@qq.com'
      }
    }
  })

  // 根据当前语言获取网站基本信息
  const getSiteInfo = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? siteInfo.zh : siteInfo.en
  })

  // 获取加载状态
  const getLoadingState = computed(() => ({
    loading: loading.value,
    error: error.value,
    isInitialized: isInitialized.value
  }))

  // 解决方案数据 - 修改为无人机系列
  const solutions = reactive({
    zh: [
      {
        id: 'reconnaissance',
        title: '侦察无人机',
        description: '高续航、高稳定性的侦察无人机，搭载高清光电吊舱，可执行边境巡逻、目标侦察等任务。',
        image: 'https://via.placeholder.com/600x400?text=侦察无人机',
        details: '朗德侦察无人机采用碳纤维复合材料机身，具备超长续航能力，搭载多光谱传感器和实时图像处理系统...'
      },
      {
        id: 'multipurpose',
        title: '多用途无人机',
        description: '模块化设计的多用途无人机，可根据不同任务快速更换载荷，适用于安防、测绘、搜救等场景。',
        image: 'https://via.placeholder.com/600x400?text=多用途无人机',
        details: '朗德多用途无人机采用模块化设计理念，支持热成像相机、高清变焦相机、激光雷达等多种载荷的快速切换...'
      },
      {
        id: 'industrial',
        title: '工业无人机',
        description: '专为工业场景设计的无人机系统，可执行电力巡检、设备检测、红外热成像分析等任务。',
        image: 'https://via.placeholder.com/600x400?text=工业无人机',
        details: '朗德工业无人机针对复杂工业环境优化设计，具备高防尘防水等级，抗电磁干扰能力强，可在恶劣环境下稳定工作...'
      },
      {
        id: 'agriculture',
        title: '农业无人机',
        description: '大载荷、高效率的农业植保无人机，具备智能作业规划、精准喷洒功能，提高农业生产效率。',
        image: 'https://via.placeholder.com/600x400?text=农业无人机',
        details: '朗德农业无人机搭载智能作业系统，支持地形自适应喷洒，药量智能调节，单次作业效率可达60亩/小时...'
      }
    ],
    en: [
      {
        id: 'reconnaissance',
        title: 'Reconnaissance Drones',
        description: 'High endurance, high stability reconnaissance drone equipped with HD electro-optical payload, capable of border patrol and target reconnaissance.',
        image: 'https://via.placeholder.com/600x400?text=Reconnaissance Drone',
        details: 'Lande reconnaissance drones feature carbon fiber composite airframes, ultra-long endurance capabilities, and are equipped with multi-spectral sensors and real-time image processing systems...'
      },
      {
        id: 'multipurpose',
        title: 'Multipurpose Drones',
        description: 'Modular design multipurpose drones that can quickly change payloads for different missions, suitable for security, mapping, search and rescue scenarios.',
        image: 'https://via.placeholder.com/600x400?text=Multipurpose Drone',
        details: 'Lande multipurpose drones adopt a modular design philosophy, supporting quick switching between thermal cameras, HD zoom cameras, LiDAR and other payloads...'
      },
      {
        id: 'industrial',
        title: 'Industrial Drones',
        description: 'Drone systems designed specifically for industrial scenarios, capable of power line inspection, equipment inspection, infrared thermal imaging analysis, and more.',
        image: 'https://via.placeholder.com/600x400?text=Industrial Drone',
        details: 'Lande industrial drones are optimized for complex industrial environments, featuring high dust and water resistance ratings and strong electromagnetic interference resistance for stable operation in harsh environments...'
      },
      {
        id: 'agriculture',
        title: 'Agricultural Drones',
        description: 'High payload, high efficiency agricultural drones with intelligent operation planning and precise spraying functions to improve agricultural production efficiency.',
        image: 'https://via.placeholder.com/600x400?text=Agricultural Drone',
        details: 'Lande agricultural drones are equipped with intelligent operation systems, supporting terrain-adaptive spraying, intelligent dosage adjustment, with operation efficiency up to 60 mu/hour...'
      }
    ]
  })

  // 根据当前语言获取解决方案数据
  const currentSolutions = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? solutions.zh : solutions.en
  })

  // 核心技术数据
  const technologies = reactive({
    zh: [
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
      },
      {
        id: 'command',
        title: '指挥控制平台',
        description: '集中式指挥平台，实现无人机威胁的实时监控和处置',
        icon: 'fas fa-desktop',
        details: '基于人工智能的威胁评估系统，提供可视化指挥界面，支持多设备协同防御，自动记录处置过程...',
        image: '/images/tech/command.jpg'
      },
      {
        id: 'ai',
        title: '人工智能识别系统',
        description: '基于深度学习的无人机目标识别系统，可准确区分无人机类型',
        icon: 'fas fa-brain',
        details: '采用深度神经网络算法，通过海量样本训练，能够在复杂背景下准确识别各类无人机，误报率低于1%...',
        image: '/images/tech/ai.jpg'
      },
      {
        id: 'integration',
        title: '系统集成方案',
        description: '根据不同场景定制的防御解决方案，实现无缝集成',
        icon: 'fas fa-puzzle-piece',
        details: '针对机场、港口、电厂等不同重要基础设施，提供定制化的反无人机防御系统集成方案，确保系统兼容性和可靠性...',
        image: '/images/tech/integration.jpg'
      }
    ],
    en: [
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
      },
      {
        id: 'command',
        title: 'Command & Control Platform',
        description: 'Centralized command platform for real-time monitoring and handling of drone threats',
        icon: 'fas fa-desktop',
        details: 'AI-based threat assessment system providing visual command interface, supporting multi-device collaborative defense, and automatically recording the handling process...',
        image: '/images/tech/command.jpg'
      },
      {
        id: 'ai',
        title: 'AI Recognition System',
        description: 'Deep learning-based drone target recognition system that accurately identifies drone types',
        icon: 'fas fa-brain',
        details: 'Using deep neural network algorithms and trained with massive samples, capable of accurately identifying various drones in complex backgrounds with a false alarm rate below 1%...',
        image: '/images/tech/ai.jpg'
      },
      {
        id: 'integration',
        title: 'System Integration Solutions',
        description: 'Customized defense solutions for different scenarios, achieving seamless integration',
        icon: 'fas fa-puzzle-piece',
        details: 'Provides customized anti-drone defense system integration solutions for different critical infrastructures such as airports, ports, and power plants, ensuring system compatibility and reliability...',
        image: '/images/tech/integration.jpg'
      }
    ]
  })

  // 根据当前语言获取技术数据
  const currentTechnologies = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? technologies.zh : technologies.en
  })

  // 典型案例数据
  const cases = reactive({
    zh: [
      {
        id: 1,
        title: '某国际机场反无人机防御系统部署',
        summary: '为大型国际机场提供全方位的反无人机防御系统，实现24小时不间断保护，有效防止无人机干扰航班起降。',
        image: '/images/cases/military-defense.jpg',
        content: '本项目为某国际机场实施反无人机综合防御系统...',
        results: ['探测范围覆盖机场全域', '无人机威胁处置成功率99.9%', '系统可靠性达99.99%', '机场航班延误率降低30%'],
        date: '2024-05-15'
      },
      {
        id: 2,
        title: '边境地区侦察无人机监控系统',
        summary: '为边境地区提供高性能侦察无人机系统，实现大范围边境线的智能化、自动化监控。',
        image: '/images/cases/border-security.jpg',
        content: '该项目覆盖500公里边境线，部署了朗德高性能侦察无人机系统...',
        results: ['边境监控覆盖率提升80%', '异常事件响应时间缩短70%', '24小时全天候监控能力'],
        date: '2024-04-20'
      },
      {
        id: 3,
        title: '大型电网输电线路巡检无人机系统',
        summary: '为国家电网提供专业工业无人机巡检系统，实现输电线路的自动化检测和故障预警。',
        image: '/images/cases/power-inspection.jpg',
        content: '该项目为国家电网建设智能化无人机巡检系统...',
        results: ['线路巡检效率提升300%', '故障预警准确率达95%', '人力成本降低60%', '恶劣天气下仍可正常作业'],
        date: '2024-03-10'
      }
    ],
    en: [
      {
        id: 1,
        title: 'Anti-Drone Defense System Deployment at International Airport',
        summary: 'Providing comprehensive anti-drone defense systems for large international airports, achieving 24-hour uninterrupted protection and effectively preventing drones from interfering with flights.',
        image: '/images/cases/military-defense.jpg',
        content: 'This project implements a comprehensive anti-drone defense system for an international airport...',
        results: ['Detection range covers the entire airport', '99.9% success rate in drone threat handling', '99.99% system reliability', '30% reduction in flight delay rate'],
        date: '2024-05-15'
      },
      {
        id: 2,
        title: 'Border Area Reconnaissance Drone Monitoring System',
        summary: 'Providing high-performance reconnaissance drone systems for border areas to achieve intelligent, automated monitoring of large border areas.',
        image: '/images/cases/border-security.jpg',
        content: 'This project covers a 500-kilometer border, deploying Lande high-performance reconnaissance drone systems...',
        results: ['Border monitoring coverage increased by 80%', 'Abnormal event response time reduced by 70%', '24-hour all-weather monitoring capability'],
        date: '2024-04-20'
      },
      {
        id: 3,
        title: 'Large-Scale Power Grid Line Inspection Drone System',
        summary: 'Providing professional industrial drone inspection systems for the national power grid to achieve automated detection and fault early warning for power transmission lines.',
        image: '/images/cases/power-inspection.jpg',
        content: 'This project builds an intelligent drone inspection system for the national power grid...',
        results: ['Line inspection efficiency increased by 300%', 'Fault early warning accuracy reached 95%', 'Labor costs reduced by 60%', 'Normal operation even in adverse weather conditions'],
        date: '2024-03-10'
      }
    ]
  })

  // 根据当前语言获取案例数据
  const currentCases = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? cases.zh : cases.en
  })

  // 新闻数据
  const news = reactive({
    zh: [
      {
        id: 1,
        category: 'company',
        title: '朗德智能推出新一代高性能反无人机系统',
        summary: '近日，朗德智能正式发布新一代高性能反无人机系统，该系统集成了先进的雷达探测、人工智能识别和精准干扰技术。',
        content: '详细新闻内容...',
        image: 'https://via.placeholder.com/600x400?text=反无人机系统新闻',
        date: '2025-06-15',
        day: '15',
        month: '06 / 2025'
      },
      {
        id: 2,
        category: 'company',
        title: '朗德智能反无人机系统在国际防务展览会获得广泛关注',
        summary: '朗德智能参加2025年国际防务展览会，展示的系列无人机产品获得国内外客户广泛关注和好评。',
        content: '详细新闻内容...',
        image: 'https://via.placeholder.com/600x400?text=展会新闻',
        date: '2025-06-08',
        day: '08',
        month: '06 / 2025'
      },
      {
        id: 3,
        category: 'company',
        title: '朗德智能与航空航天大学建立产学研合作',
        summary: '朗德智能与国内知名航空航天大学签署战略合作协议，双方将在无人机技术研发和人才培养方面展开深度合作。',
        content: '详细新闻内容...',
        image: 'https://via.placeholder.com/600x400?text=战略合作新闻',
        date: '2025-05-30',
        day: '30',
        month: '05 / 2025'
      }
    ],
    en: [
      {
        id: 1,
        category: 'company',
        title: 'Lande Intelligent Launches New Generation of High-Performance Anti-Drone Systems',
        summary: 'Recently, Lande Intelligent officially released a new generation of high-performance anti-drone systems, integrating advanced radar detection, AI recognition, and precise jamming technologies.',
        content: 'Detailed news content...',
        image: 'https://via.placeholder.com/600x400?text=Anti-Drone System News',
        date: '2025-06-15',
        day: '15',
        month: '06 / 2025'
      },
      {
        id: 2,
        category: 'company',
        title: 'Lande Intelligent Anti-Drone Systems Receive Wide Attention at International Defense Exhibition',
        summary: 'Lande Intelligent participated in the 2025 International Defense Exhibition, where its series of drone products received widespread attention and praise from domestic and international customers.',
        content: 'Detailed news content...',
        image: 'https://via.placeholder.com/600x400?text=Exhibition News',
        date: '2025-06-08',
        day: '08',
        month: '06 / 2025'
      },
      {
        id: 3,
        category: 'company',
        title: 'Lande Intelligent Establishes Industry-Academia-Research Cooperation with Aerospace University',
        summary: 'Lande Intelligent signed a strategic cooperation agreement with a renowned domestic aerospace university, and the two parties will engage in in-depth cooperation in drone technology R&D and talent training.',
        content: 'Detailed news content...',
        image: 'https://via.placeholder.com/600x400?text=Strategic Cooperation News',
        date: '2025-05-30',
        day: '30',
        month: '05 / 2025'
      }
    ]
  })

  // 根据当前语言获取新闻数据
  const currentNews = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? news.zh : news.en
  })

  // 关于我们数据
  const aboutData = reactive({
    zh: {
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
      culture: {
        vision: '成为国际领先的无人机和反无人机系统提供商',
        mission: '用科技守护空域安全，助力智能化发展',
        values: ['创新驱动', '质量至上', '客户为本', '协作共赢']
      },
      history: [
        { year: 2020, event: '公司成立，专注无人机技术研发' },
        { year: 2021, event: '获得天使轮融资，推出首款侦察无人机产品' },
        { year: 2022, event: '完成A轮融资，研发团队扩展至50人，获得多项核心专利' },
        { year: 2023, event: '推出反无人机防御系统，获得国家高新技术企业认证' },
        { year: 2024, event: '完成B轮融资，成立无人机技术研究院，开始国际市场拓展' },
        { year: 2025, event: '服务客户突破100家，成功案例超过100个，产品远销海外多个国家' }
      ],
      image: '/images/about/company.jpg'
    },
    en: {
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
      culture: {
        vision: 'To become a world-leading provider of drone and anti-drone systems',
        mission: 'Secure airspace with technology and facilitate intelligent development',
        values: ['Innovation-driven', 'Quality First', 'Customer-oriented', 'Win-win Cooperation']
      },
      history: [
        { year: 2020, event: 'Company established, focusing on drone technology R&D' },
        { year: 2021, event: 'Received angel round financing, launched first reconnaissance drone product' },
        { year: 2022, event: 'Completed Series A financing, expanded R&D team to 50 people, obtained multiple core patents' },
        { year: 2023, event: 'Launched anti-drone defense system, certified as a national high-tech enterprise' },
        { year: 2024, event: 'Completed Series B financing, established drone technology institute, began international market expansion' },
        { year: 2025, event: 'Served over 100 clients, with more than 100 successful cases, products exported to multiple countries' }
      ],
      image: '/images/about/company.jpg'
    }
  })

  // 根据当前语言获取关于我们数据
  const currentAboutData = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? aboutData.zh : aboutData.en
  })

  // 招聘信息数据
  const jobs = reactive({
    zh: [
      {
        id: 1,
        title: '无人机系统工程师',
        responsibilities: '负责无人机飞控系统开发，优化飞行性能，解决技术难题。',
        requirements: '航空航天、自动化相关专业硕士及以上学历，有无人机系统开发经验。',
        location: '杭州',
        type: '全职',
        salary: '25k-40k'
      },
      {
        id: 2,
        title: '反无人机系统工程师',
        responsibilities: '负责反无人机探测与干扰系统开发，实现高效精准的无人机防御。',
        requirements: '电子信息、通信工程相关专业，熟悉雷达信号处理和干扰技术。',
        location: '杭州',
        type: '全职',
        salary: '20k-35k'
      },
      {
        id: 3,
        title: '人工智能算法工程师',
        responsibilities: '负责无人机目标识别算法开发，提高识别准确率和实时性。',
        requirements: '计算机、人工智能相关专业，精通深度学习和计算机视觉技术。',
        location: '杭州',
        type: '全职',
        salary: '30k-50k'
      }
    ],
    en: [
      {
        id: 1,
        title: 'Drone System Engineer',
        responsibilities: 'Responsible for drone flight control system development, optimizing flight performance, solving technical problems.',
        requirements: 'Master\'s degree or above in aerospace, automation or related fields, with experience in drone system development.',
        location: 'Hangzhou',
        type: 'Full-time',
        salary: '25k-40k'
      },
      {
        id: 2,
        title: 'Anti-Drone System Engineer',
        responsibilities: 'Responsible for anti-drone detection and jamming system development, achieving efficient and precise drone defense.',
        requirements: 'Degree in electronic information, communication engineering or related fields, familiar with radar signal processing and jamming technology.',
        location: 'Hangzhou',
        type: 'Full-time',
        salary: '20k-35k'
      },
      {
        id: 3,
        title: 'AI Algorithm Engineer',
        responsibilities: 'Responsible for drone target recognition algorithm development, improving recognition accuracy and real-time performance.',
        requirements: 'Degree in computer science, artificial intelligence or related fields, proficient in deep learning and computer vision technologies.',
        location: 'Hangzhou',
        type: 'Full-time',
        salary: '30k-50k'
      }
    ]
  })

  // 根据当前语言获取招聘信息数据
  const currentJobs = computed(() => {
    if (!isInitialized.value) return null
    return languageStore.language === 'zh' ? jobs.zh : jobs.en
  })

  // 获取内容数据
  const fetchContent = async (contentType) => {
    if (!isInitialized.value) return null
    
    try {
      loading.value = true
      error.value = null
      
      // 构建API请求URL
      const url = `/content/${contentType}`
      
      // 发送请求
      const response = await axios.get(url)
      
      // 更新相应的数据
      if (contentType === 'site-info') {
        // 更新网站基本信息
        Object.assign(siteInfo.zh, response.data?.zh || {})
        Object.assign(siteInfo.en, response.data?.en || {})
      } else if (contentType === 'technologies') {
        // 更新技术数据
        if (response.data?.zh) technologies.zh = response.data.zh
        if (response.data?.en) technologies.en = response.data.en
      } else if (contentType === 'solutions') {
        // 更新解决方案数据
        if (response.data?.zh) solutions.zh = response.data.zh
        if (response.data?.en) solutions.en = response.data.en
      } else if (contentType === 'cases') {
        // 更新案例数据
        if (response.data?.zh) cases.zh = response.data.zh
        if (response.data?.en) cases.en = response.data.en
      } else if (contentType === 'news') {
        // 更新新闻数据
        if (response.data?.zh) news.zh = response.data.zh
        if (response.data?.en) news.en = response.data.en
      } else if (contentType === 'about') {
        // 更新关于我们数据
        if (response.data?.zh) Object.assign(aboutData.zh, response.data.zh)
        if (response.data?.en) Object.assign(aboutData.en, response.data.en)
      } else if (contentType === 'jobs') {
        // 更新职位数据
        if (response.data?.zh) jobs.zh = response.data.zh
        if (response.data?.en) jobs.en = response.data.en
      }
      
      // 清除加载状态
      loading.value = false
      return response.data
    } catch (err) {
      console.error(`获取${contentType}数据失败:`, err)
      error.value = err.message || '数据加载失败'
      loading.value = false
      
      // 不抛出错误，而是返回null，让调用者决定如何处理
      return null
    }
  }

  // 更新内容的方法 (用于管理后台)
  const updateContent = async (contentType, data, lang) => {
    if (!isInitialized.value) return null
    
    try {
      // 在实际应用中，这里应该是向API发送更新请求
      await axios.put(`/api/admin/content/${contentType}`, {
        data,
        language: lang || languageStore.language
      })
      
      return { success: true }
    } catch (error) {
      console.error(`Error updating ${contentType}:`, error)
      return { success: false, error: error.message }
    }
  }

  return {
    // 状态
    loading,
    error,
    isInitialized,
    
    // 计算属性
    getSiteInfo,
    getLoadingState,
    
    // 方法
    initializeContent,
    
    // 数据
    siteInfo,
    currentSiteInfo: getSiteInfo,
    solutions,
    currentSolutions,
    technologies,
    currentTechnologies,
    cases,
    currentCases,
    news,
    currentNews,
    aboutData,
    currentAboutData,
    jobs,
    currentJobs,
    fetchContent,
    updateContent
  }
}) 