import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTranslationsStore = defineStore('translations', () => {
  // 导航项
  const navItems = reactive({
    zh: [
      { text: '首页', link: '/', id: 'home' },
      { 
        text: '产品中心', 
        link: '/technology',
        id: 'products',
        children: [
          {
            text: '立体防控',
            id: 'defense',
            children: [
              {
                text: '侦探感知',
                id: 'detection',
                children: [
                  { text: '雷达探测', link: '/products/defense/detection/radar', id: 'radar' },
                  { text: '光电识别', link: '/products/defense/detection/optical', id: 'optical' },
                  { text: '频谱侦测', link: '/products/defense/detection/spectrum', id: 'spectrum' }
                ]
              },
              { text: '干扰反制', link: '/products/defense/jamming', id: 'jamming' },
              { text: '一体化防御', link: '/products/defense/integrated', id: 'integrated' }
            ]
          },
          {
            text: '低空经济',
            id: 'low-altitude',
            children: [
              { text: '农业植保', link: '/products/low-altitude/agriculture', id: 'agriculture' },
              { text: '巡查防护', link: '/products/low-altitude/patrol', id: 'patrol' },
              { text: 'FPV', link: '/products/low-altitude/fpv', id: 'fpv' }
            ]
          }
        ]
      },
      { text: '应用案例', link: '/cases', id: 'cases' },
      { text: '新闻中心', link: '/news', id: 'news' },
      { text: '关于我们', link: '/about', id: 'about' },
      { text: '招聘信息', link: '/join', id: 'join' }
    ],
    en: [
      { text: 'Home', link: '/', id: 'home' },
      { 
        text: 'Product Center', 
        link: '/technology',
        id: 'products',
        children: [
          {
            text: 'Defense & Control',
            id: 'defense',
            children: [
              {
                text: 'Detection & Sensing',
                id: 'detection',
                children: [
                  { text: 'Radar Detection', link: '/products/defense/detection/radar', id: 'radar' },
                  { text: 'Optical Recognition', link: '/products/defense/detection/optical', id: 'optical' },
                  { text: 'Spectrum Monitoring', link: '/products/defense/detection/spectrum', id: 'spectrum' }
                ]
              },
              { text: 'Jamming & Counter', link: '/products/defense/jamming', id: 'jamming' },
              { text: 'Integrated Defense', link: '/products/defense/integrated', id: 'integrated' }
            ]
          },
          {
            text: 'Low-Altitude Economy',
            id: 'low-altitude',
            children: [
              { text: 'Agricultural Protection', link: '/products/low-altitude/agriculture', id: 'agriculture' },
              { text: 'Patrol & Protection', link: '/products/low-altitude/patrol', id: 'patrol' },
              { text: 'FPV Systems', link: '/products/low-altitude/fpv', id: 'fpv' }
            ]
          }
        ]
      },
      { text: 'Case Studies', link: '/cases', id: 'cases' },
      { text: 'News', link: '/news', id: 'news' },
      { text: 'About Us', link: '/about', id: 'about' },
      { text: 'Careers', link: '/join', id: 'join' }
    ]
  })
  
  // 网站基本信息
  const siteInfo = reactive({
    zh: {
      companyName: '杭州朗德智能科技有限公司',
      slogan: '智能全域电磁安防一体化平台',
      description: '领先的反无人机系统及反无人机解决方案提供商',
      contactInfo: {
        address: '浙江省杭州市滨江区科技园区创新大厦A座15楼',
        phone: '0571-8888 9999',
        email: 'info@landedrone.com'
      }
    },
    en: {
      companyName: 'Hangzhou Lande Intelligent Technology Co., Ltd.',
      slogan: 'Intelligent all-domain electromagnetic security integrated platform',
      description: 'Leading provider of anti-drone systems and solutions',
      contactInfo: {
        address: '15F, Building A, Innovation Tower, Science & Technology Park, Binjiang District, Hangzhou, Zhejiang',
        phone: '0571-8888 9999',
        email: 'info@landedrone.com'
      }
    }
  })
  
  // 页脚数据
  const footerData = reactive({
    zh: {
      slogan: '智能全域电磁安防一体化平台',
      copyright: '© 2025 杭州朗德智能科技有限公司 版权所有',
      icp: '',
      linkGroups: [
        {
          title: '关于我们',
          links: [
            { text: '企业简介', url: '/about' },
            { text: '企业文化', url: '/about/culture' },
            { text: '发展历程', url: '/about/history' },
            { text: '荣誉资质', url: '/about/honors' }
          ]
        },
        {
          title: '新闻中心',
          links: [
            { text: '企业新闻', url: '/news/company' },
            { text: '行业动态', url: '/news/industry' },
            { text: '媒体报道', url: '/news/media' },
            { text: '技术博客', url: '/news/blog' }
          ]
        }
      ]
    },
    en: {
      slogan: 'Intelligent all-domain electromagnetic security integrated platform',
      copyright: '© 2025 Hangzhou Lande Intelligent Technology Co., Ltd. All Rights Reserved',
      icp: 'Zhejiang ICP No.20xxxxxx-1',
      linkGroups: [
        {
          title: 'About Us',
          links: [
            { text: 'Company Profile', url: '/about' },
            { text: 'Corporate Culture', url: '/about/culture' },
            { text: 'Development History', url: '/about/history' },
            { text: 'Honors & Qualifications', url: '/about/honors' }
          ]
        },
        {
          title: 'News Center',
          links: [
            { text: 'Company News', url: '/news/company' },
            { text: 'Industry Updates', url: '/news/industry' },
            { text: 'Media Coverage', url: '/news/media' },
            { text: 'Technical Blog', url: '/news/blog' }
          ]
        }
      ]
    }
  })
  
  // 技术相关翻译
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
        details: 'Providing customized anti-drone defense system integration solutions for airports, ports, power plants and other important infrastructure, ensuring system compatibility and reliability...',
        image: '/images/tech/integration.jpg'
      }
    ]
  })
  
  // 案例分类数据
  const caseCategories = reactive({
    zh: [
      {
        id: 'military',
        name: '军事安全',
        tag: '军事安全',
        icon: 'fas fa-shield-alt',
        desc: '为军事设施提供高效防护'
      },
      {
        id: 'public',
        name: '公共安全',
        tag: '公共安全',
        icon: 'fas fa-city',
        desc: '保障大型活动空域安全'
      },
      {
        id: 'industry',
        name: '工业应用',
        tag: '工业应用',
        icon: 'fas fa-industry',
        desc: '智能巡检提升运维效率'
      },
      {
        id: 'emergency',
        name: '应急救援',
        tag: '应急救援',
        icon: 'fas fa-ambulance',
        desc: '快速响应灾害现场需求'
      },
      {
        id: 'agriculture',
        name: '农业应用',
        tag: '农业应用',
        icon: 'fas fa-leaf',
        desc: '智慧农业提升生产效率'
      },
      {
        id: 'border',
        name: '边境安全',
        tag: '边境安全',
        icon: 'fas fa-map-marked-alt',
        desc: '保障边境区域安全'
      }
    ],
    en: [
      {
        id: 'military',
        name: 'Military Security',
        tag: 'Military Security',
        icon: 'fas fa-shield-alt',
        desc: 'Efficient protection for military facilities'
      },
      {
        id: 'public',
        name: 'Public Security',
        tag: 'Public Security',
        icon: 'fas fa-city',
        desc: 'Ensuring airspace security for large events'
      },
      {
        id: 'industry',
        name: 'Industrial Applications',
        tag: 'Industrial Applications',
        icon: 'fas fa-industry',
        desc: 'Smart inspection improves operational efficiency'
      },
      {
        id: 'emergency',
        name: 'Emergency Rescue',
        tag: 'Emergency Rescue',
        icon: 'fas fa-ambulance',
        desc: 'Rapid response to disaster scene requirements'
      },
      {
        id: 'agriculture',
        name: 'Agricultural Applications',
        tag: 'Agricultural Applications',
        icon: 'fas fa-leaf',
        desc: 'Smart agriculture improves production efficiency'
      },
      {
        id: 'border',
        name: 'Border Security',
        tag: 'Border Security',
        icon: 'fas fa-map-marked-alt',
        desc: 'Ensuring security in border areas'
      }
    ]
  })
  
  // 关于我们页面数据
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
        'Hangzhou Lande Intelligent Technology Co., Ltd. was established on April 14, 2025. The company is registered at Room 1208, 12th Floor, Building 1, East Station Garden Business Center, 768 Huanzhan East Road, Shangcheng District, Hangzhou, Zhejiang Province. Our business scope includes: intelligent UAV manufacturing; intelligent UAV sales; AI application software development; AI hardware sales; intelligent robot R&D, etc.',
        'Lande Intelligent adheres to the corporate philosophy of "Technology Protection, Safety First", driven by technological innovation and guided by customer needs. We have developed a series of drone products and anti-drone systems with independent intellectual property rights. Currently, our products have been widely applied in various fields such as defense security, power inspection, border monitoring, and airport protection.'
      ],
      stats: [
        { value: '2025', description: 'Founded in Hangzhou' },
        { value: '50+', description: 'Core Patents' },
        { value: '100+', description: 'Successful Projects' }
      ],
      culture: {
        vision: 'To become a leading international provider of drone and anti-drone systems',
        mission: 'Using technology to protect airspace security and promote intelligent development',
        values: ['Innovation Driven', 'Quality First', 'Customer Oriented', 'Win-Win Cooperation']
      },
      history: [
        { year: 2020, event: 'Company established, focusing on drone technology R&D' },
        { year: 2021, event: 'Received angel round funding, launched first reconnaissance drone product' },
        { year: 2022, event: 'Completed Series A funding, expanded R&D team to 50 people, obtained multiple core patents' },
        { year: 2023, event: 'Launched anti-drone defense system, obtained national high-tech enterprise certification' },
        { year: 2024, event: 'Completed Series B funding, established drone technology research institute, began international market expansion' },
        { year: 2025, event: 'Served over 100 clients, exceeded 100 successful cases, products exported to multiple countries' }
      ],
      image: '/images/about/company.jpg'
    }
  })
  
  // 招聘信息页面数据
  const jobsData = reactive({
    zh: {
      title: '加入我们',
      subtitle: '与行业精英一起，共创无人机技术的未来',
      description: '朗德智能致力于打造一个开放、创新、充满活力的工作环境。我们重视人才发展，提供具有竞争力的薪酬福利和广阔的职业发展空间。如果您对无人机技术充满热情，欢迎加入我们的团队！',
      benefits: [
        { title: '有竞争力的薪酬', desc: '提供行业领先的薪酬待遇和完善的福利体系' },
        { title: '职业发展', desc: '清晰的晋升通道和丰富的培训资源' },
        { title: '创新环境', desc: '鼓励创新思维，支持技术探索' },
        { title: '团队协作', desc: '开放包容的团队文化，共同成长' }
      ],
      positions: '当前职位',
      location: '工作地点',
      type: '工作类型',
      salary: '薪资范围',
      responsibilities: '工作职责',
      requirements: '任职要求',
      apply: '申请职位',
      noPositions: '暂无合适职位',
      checkLater: '请稍后再来查看'
    },
    en: {
      title: 'Join Us',
      subtitle: 'Create the future of drone technology with industry elites',
      description: 'Lande Intelligent is committed to creating an open, innovative, and dynamic work environment. We value talent development and provide competitive compensation and benefits, as well as broad career development opportunities. If you are passionate about drone technology, we welcome you to join our team!',
      benefits: [
        { title: 'Competitive Salary', desc: 'Industry-leading compensation and comprehensive benefits' },
        { title: 'Career Development', desc: 'Clear promotion paths and rich training resources' },
        { title: 'Innovative Environment', desc: 'Encouraging innovative thinking and supporting technical exploration' },
        { title: 'Team Collaboration', desc: 'Open and inclusive team culture, growing together' }
      ],
      positions: 'Current Positions',
      location: 'Location',
      type: 'Job Type',
      salary: 'Salary Range',
      responsibilities: 'Responsibilities',
      requirements: 'Requirements',
      apply: 'Apply',
      noPositions: 'No suitable positions currently',
      checkLater: 'Please check back later'
    }
  })
  
  // 联系表单文本
  const contactForm = reactive({
    zh: {
      name: '您的姓名',
      email: '电子邮箱',
      phone: '联系电话',
      company: '公司名称',
      subject: '咨询主题',
      message: '留言内容',
      submit: '提交信息',
      success: '信息已成功提交，我们将尽快与您联系！',
      error: '提交失败，请稍后再试或直接联系我们',
      required: '此项为必填',
      emailInvalid: '请输入有效的电子邮箱',
      phoneInvalid: '请输入有效的电话号码',
      subjectOptions: [
        '产品咨询',
        '技术支持',
        '合作洽谈',
        '其他问题'
      ]
    },
    en: {
      name: 'Your Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit',
      success: 'Information submitted successfully, we will contact you soon!',
      error: 'Submission failed, please try again later or contact us directly',
      required: 'This field is required',
      emailInvalid: 'Please enter a valid email',
      phoneInvalid: 'Please enter a valid phone number',
      subjectOptions: [
        'Product Inquiry',
        'Technical Support',
        'Business Cooperation',
        'Other Questions'
      ]
    }
  })
  
  // 新闻中心页面文本
  const newsPage = reactive({
    zh: {
      title: '新闻中心',
      subtitle: '了解朗德智能最新动态与行业资讯',
      categories: {
        all: '全部',
        company: '公司新闻',
        industry: '行业动态',
        technology: '技术资讯',
        media: '媒体报道'
      },
      readMore: '阅读更多',
      noNews: '无相关新闻',
      publishedOn: '发布于',
      share: '分享',
      relatedNews: '相关新闻',
      backToList: '返回列表',
      prevPage: '上一页',
      nextPage: '下一页',
      prevArticle: '上一篇',
      nextArticle: '下一篇',
      newsNotFound: '未找到新闻',
      newsNotFoundMessage: '您查找的新闻不存在或已被移除'
    },
    en: {
      title: 'News Center',
      subtitle: 'Learn about Lande Intelligent\'s latest developments and industry information',
      categories: {
        all: 'All',
        company: 'Company News',
        industry: 'Industry Updates',
        technology: 'Tech News',
        media: 'Media Coverage'
      },
      readMore: 'Read More',
      noNews: 'No relevant news',
      publishedOn: 'Published on',
      share: 'Share',
      relatedNews: 'Related News',
      backToList: 'Back to List',
      prevPage: 'Previous',
      nextPage: 'Next',
      prevArticle: 'Previous Article',
      nextArticle: 'Next Article',
      newsNotFound: 'News Not Found',
      newsNotFoundMessage: 'The news you are looking for does not exist or has been removed'
    }
  })
  
  // 案例页面文本
  const casesPage = reactive({
    zh: {
      title: '应用案例',
      subtitle: '探索朗德智能在各领域的成功实践',
      filter: '筛选案例',
      all: '全部案例',
      results: '成果展示',
      challenge: '项目挑战',
      solution: '解决方案',
      viewDetails: '查看详情',
      backToList: '返回列表',
      relatedCases: '相关案例'
    },
    en: {
      title: 'Case Studies',
      subtitle: 'Explore Lande Intelligent\'s successful practices in various fields',
      filter: 'Filter Cases',
      all: 'All Cases',
      results: 'Results',
      challenge: 'Challenge',
      solution: 'Solution',
      viewDetails: 'View Details',
      backToList: 'Back to List',
      relatedCases: 'Related Cases'
    }
  })
  
  // 公共UI元素翻译
  const ui = reactive({
    zh: {
      loading: '加载中...',
      readMore: '阅读更多',
      viewAll: '查看全部',
      contact: '联系我们',
      submit: '提交',
      search: '搜索',
      menu: '菜单导航',
      home: '首页',
      error404: '页面未找到',
      error404Message: '您访问的页面不存在或已被移除',
      backToHome: '返回首页',
      learnMore: '了解更多',
      viewDetails: '查看详情',
      joinUs: '加入我们',
      sendEmail: '发送邮件',
      callUs: '拨打电话',
      getDirections: '获取导航'
    },
    en: {
      loading: 'Loading...',
      readMore: 'Read More',
      viewAll: 'View All',
      contact: 'Contact Us',
      submit: 'Submit',
      search: 'Search',
      menu: 'Navigation',
      home: 'Home',
      error404: 'Page Not Found',
      error404Message: 'The page you are looking for does not exist or has been removed',
      backToHome: 'Back to Home',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      joinUs: 'Join Us',
      sendEmail: 'Send Email',
      callUs: 'Call Us',
      getDirections: 'Get Directions'
    }
  })
  
  // 获取当前语言的导航项
  const getNavItems = (lang) => {
    return navItems[lang] || navItems.zh
  }
  
  // 获取当前语言的页脚数据
  const getFooterData = (lang) => {
    return footerData[lang] || footerData.zh
  }
  
  // 获取当前语言的网站基本信息
  const getSiteInfo = (lang) => {
    return siteInfo[lang] || siteInfo.zh
  }
  
  // 获取当前语言的技术数据
  const getTechnologies = (lang) => {
    return technologies[lang] || technologies.zh
  }
  
  // 获取当前语言的案例分类数据
  const getCaseCategories = (lang) => {
    return caseCategories[lang] || caseCategories.zh
  }
  
  // 获取当前语言的关于我们数据
  const getAboutData = (lang) => {
    return aboutData[lang] || aboutData.zh
  }
  
  // 获取当前语言的招聘信息数据
  const getJobsData = (lang) => {
    return jobsData[lang] || jobsData.zh
  }
  
  // 获取当前语言的联系表单文本
  const getContactForm = (lang) => {
    return contactForm[lang] || contactForm.zh
  }
  
  // 获取当前语言的新闻中心页面文本
  const getNewsPage = (lang) => {
    return newsPage[lang] || newsPage.zh
  }
  
  // 获取当前语言的案例页面文本
  const getCasesPage = (lang) => {
    return casesPage[lang] || casesPage.zh
  }
  
  // 获取当前语言的UI元素
  const getUI = (lang) => {
    return ui[lang] || ui.zh
  }
  
  return {
    getNavItems,
    getFooterData,
    getSiteInfo,
    getTechnologies,
    getCaseCategories,
    getAboutData,
    getJobsData,
    getContactForm,
    getNewsPage,
    getCasesPage,
    getUI
  }
}) 