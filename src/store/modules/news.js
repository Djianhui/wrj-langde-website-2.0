import { defineStore } from 'pinia'
import { useLanguageStore } from './language'
import { computed } from 'vue'

export const useNewsStore = defineStore('news', {
  state: () => {
    const languageStore = useLanguageStore();
    
    return {
      language: computed(() => languageStore.language),
      news: {
        zh: [
          
          
          {
            id: 3,
            title: '全球反无人机系统市场规模达630亿美元，智能识别与协同反制成技术焦点',
            category: 'industry',
            categoryName: '行业动态',
            date: '2025-11-15',
            image: '/images/products/xyxw.png',
            summary: '2025年全球反无人机系统市场规模达630亿美元，技术创新聚焦智能识别与协同反制，AI声光电复合探测技术识别准确率提升至98%。',
            content: `
              <p>北京，2025年11月15日 — 据最新行业研究报告显示，2025年全球反无人机系统市场规模已达630亿美元，较2024年的85亿美元实现跨越式增长。低空安全已成为全球各国关注的焦点领域。</p>

              <p>技术创新层面，2025年行业焦点集中于智能识别与协同反制。基于人工智能的声光电复合探测技术识别准确率提升至98%，多基站协同干扰系统有效应对无人机蜂群威胁。系统集成化与智能响应成为主导趋势。</p>

              <p>在民用领域，反无人机系统主要用于保障机场、能源网络、港口、数据中心等关键基础设施的安全。其应用场景包括防止无人机"黑飞"、闯入禁飞区、恶意携带危险物品等。国家发改委明确强调"安全是低空经济发展的首要前提"，定调低空经济"无安全，不低空"。</p>

              <p>2025年9月，中科星图"御航·低空反无平台"圆满完成九三阅兵低空安全保障任务，展示了国产反无人机系统的实战能力。同期举办的北京国际两用先进技术装备展上，多款固定翼、旋翼、特种无人机及反无人机装备集中亮相，低空安防与信息安全技术成为焦点。</p>

              <p>广州花都警方已织密无人机"黑飞"管控网，科技赋能助力十五运会低空安保。历正科技低空无人机防控设备制造项目正式落地宜兴，推动低空无人机防御产品实现规模化生产。业内专家指出，2026年的反无人机行业，正是因为有了这些"静默"的守护者，才让低空飞行的安全边界不断清晰。</p>
            `
          },
          {
            id: 4,
            title: '无人机制造销售收入同比激增38.4%，产业进入规模化发展阶段',
            category: 'industry',
            categoryName: '行业动态',
            date: '2025-11-10',
            image: '/images/products/patrol-drone.png',
            summary: '国家税务总局数据显示，10月份我国无人机制造销售收入同比激增38.4%，工业级无人机应用进入规模化阶段，多场景应用重塑产业格局。',
            content: `
              <p>北京，2025年11月10日 — 国家税务总局发布的最新数据显示，10月份我国高技术产业销售收入同比增长13.6%，其中无人机制造销售收入同比激增38.4%。这一亮眼数据背后，是人工智能、大数据等技术与无人机产业的深度融合。</p>

              <p>商务部研究院分析指出，无人机引领低空经济腾飞，政策技术双轮驱动，多场景应用重塑产业格局。无人机物流、农业植保、电力巡检、应急救援等应用场景不断拓展，推动着产业向更深层次发展。</p>

              <p>农业无人机市场持续扩大。根据《大疆&农民日报：农业无人机行业白皮书（2024&2025）》显示，农业无人机作业面积持续增长，精准农业成为新趋势。赛迪研究院报告也指出，高层建筑消防场景无人机应用正在提升消防救援效能。</p>

              <p>工业级无人机应用进入规模化阶段。电力巡检、油气管道巡查、通信基站维护等传统领域需求稳定增长，同时城市空中交通、无人机配送等新兴领域也在快速崛起。</p>

              <p>产业的快速发展也对反无人机技术提出了更高要求。如何在保障低空飞行安全的同时，有效防范非授权无人机的威胁，成为行业面临的重要课题。反无人机技术与无人机产业的协同发展，将是未来低空经济健康发展的关键。</p>
            `
          }
        ],
        en: [
          
          {
            id: 3,
            title: 'Global Anti-Drone System Market Reaches $63 Billion, Smart Recognition and Coordinated Countermeasures Become Tech Focus',
            category: 'industry',
            categoryName: 'Industry Updates',
            date: '2025-11-15',
            image: '/images/products/radar-detection.png',
            summary: 'The global anti-drone system market reached $63 billion in 2025. Technology innovation focuses on smart recognition and coordinated countermeasures, with AI-powered acoustic-optical detection achieving 98% accuracy.',
            content: `
              <p>Beijing, November 15, 2025 — According to the latest industry research report, the global anti-drone system market has reached $63 billion in 2025, a leap-forward growth from $8.5 billion in 2024. Low-altitude security has become a focus area for countries worldwide.</p>

              <p>In terms of technology innovation, the industry focus in 2025 concentrates on smart recognition and coordinated countermeasures. AI-based acoustic-optical composite detection technology has improved recognition accuracy to 98%, and multi-base station coordinated jamming systems effectively address drone swarm threats. System integration and intelligent response have become dominant trends.</p>

              <p>In the civilian sector, anti-drone systems are mainly used to ensure the security of critical infrastructure such as airports, energy networks, ports, and data centers. Application scenarios include preventing unauthorized drone flights, intrusions into no-fly zones, and malicious carrying of dangerous items. The National Development and Reform Commission explicitly emphasizes that "safety is the primary prerequisite for low-altitude economic development."</p>

              <p>In September 2025, the "Yuhang Low-Altitude Anti-Drone Platform" by Zhongke Xingtu successfully completed the low-altitude security mission for the September 3rd military parade, demonstrating the combat capabilities of domestic anti-drone systems. At the same time, the Beijing International Dual-Use Advanced Technology Equipment Exhibition showcased multiple fixed-wing, rotary-wing, and special-purpose drones and anti-drone equipment.</p>

              <p>Guangzhou Huadu Police have established a comprehensive drone "illegal flight" control network, with technology empowerment supporting the 15th National Games low-altitude security. Lizheng Technology\'s low-altitude drone defense equipment manufacturing project has officially landed in Yixing, promoting large-scale production of low-altitude drone defense products.</p>
            `
          },
          {
            id: 4,
            title: 'Drone Manufacturing Sales Revenue Surges 38.4% Year-on-Year, Industry Enters Large-Scale Development Stage',
            category: 'industry',
            categoryName: 'Industry Updates',
            date: '2025-11-10',
            image: '/images/products/patrol-drone.png',
            summary: 'State Taxation Administration data shows drone manufacturing sales revenue surged 38.4% year-on-year in October. Industrial drone applications enter large-scale development stage.',
            content: `
              <p>Beijing, November 10, 2025 — The latest data released by the State Taxation Administration shows that in October, China\'s high-tech industry sales revenue increased by 13.6% year-on-year, with drone manufacturing sales revenue surging by 38.4%. Behind this impressive data is the deep integration of artificial intelligence, big data, and other technologies with the drone industry.</p>

              <p>Analysis by the Ministry of Commerce Research Institute points out that drones are leading the takeoff of the low-altitude economy, with policy and technology driving dual-wheel drive, and multi-scenario applications reshaping the industrial pattern. Drone logistics, agricultural plant protection, power inspection, emergency rescue, and other application scenarios continue to expand, driving the industry to deeper levels.</p>

              <p>The agricultural drone market continues to expand. According to the "DJI & Farmers Daily: Agricultural Drone Industry White Paper (2024 & 2025)," the operating area of agricultural drones continues to grow, and precision agriculture has become a new trend. The CCID Research Institute report also points out that drone applications in high-rise building fire scenes are improving fire rescue efficiency.</p>

              <p>Industrial drone applications have entered a large-scale development stage. Traditional fields such as power inspection, oil and gas pipeline inspection, and communication base station maintenance have stable growth in demand, while emerging fields such as urban air mobility and drone delivery are also rapidly rising.</p>

              <p>The rapid development of the industry has also put forward higher requirements for anti-drone technology. How to ensure low-altitude flight safety while effectively preventing threats from unauthorized drones has become an important issue facing the industry. The coordinated development of anti-drone technology and the drone industry will be the key to the healthy development of the future low-altitude economy.</p>
            `
          }
        ]
      },
      categories: {
        zh: [
          { id: 'all', name: '全部' },
          { id: 'company', name: '公司新闻' },
          { id: 'industry', name: '行业动态' },
          { id: 'media', name: '媒体报道' },
          { id: 'blog', name: '技术博客' }
        ],
        en: [
          { id: 'all', name: 'All' },
          { id: 'company', name: 'Company News' },
          { id: 'industry', name: 'Industry Updates' },
          { id: 'media', name: 'Media Coverage' },
          { id: 'blog', name: 'Tech Blog' }
        ]
      }
    };
  },
  
  getters: {
    getAllNews(state) {
      return state.news[state.language] || state.news.zh;
    },
    getNewsByCategory: (state) => (category) => {
      const currentNews = state.news[state.language] || state.news.zh;
      if (category === 'all') return currentNews;
      return currentNews.filter(item => item.category === category);
    },
    getNewsById: (state) => (id) => {
      const currentNews = state.news[state.language] || state.news.zh;
      return currentNews.find(item => item.id === parseInt(id));
    },
    getCategories(state) {
      return state.categories[state.language] || state.categories.zh;
    }
  }
}); 