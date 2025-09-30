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
            id: 1,
            title: '朗德智能成功研发新一代反无人机系统，拦截距离突破10公里',
            category: 'company',
            categoryName: '公司新闻',
            date: '2024-06-10',
            image: '/images/products/fpv-5.png',
            summary: '朗德智能宣布其新一代反无人机系统"天盾-X"成功通过最终测试，拦截距离突破10公里大关，成为国内领先的反无人机解决方案。',
            content: `
              <p>杭州，2024年6月10日 — 朗德智能科技有限公司今日宣布，经过三年的研发，其新一代反无人机系统"天盾-X"已成功通过最终测试，正式投入市场。该系统在多项关键指标上取得突破，尤其是拦截距离首次超过10公里，大幅领先业内同类产品。</p>

              <p>"天盾-X"系统采用了多项自主研发的创新技术，包括全新的毫米波雷达探测阵列、多频段干扰模块和AI目标识别系统。在实际测试中，系统能够在10秒内探测、识别和干扰非授权无人机，成功率达到98.5%。</p>

              <p>朗德智能CEO王明表示："'天盾-X'系统的成功研发标志着我国反无人机技术迈入了新阶段。我们将这一技术突破应用于国家重要基础设施保护、大型活动安保和边境管控等关键领域，为国家安全提供更加坚实的保障。"</p>

              <p>据了解，"天盾-X"系统已在多个国家重大活动的安保工作中得到应用，表现出色。该系统同时支持固定部署和车载移动部署，具有快速响应、全天候作战和网络协同作战等特点。</p>

              <p>业内专家指出，随着无人机技术的普及，非授权无人机带来的安全威胁日益严峻。朗德智能的这一技术突破，将为解决这一全球性安全挑战提供中国方案。</p>

              <p>朗德智能还宣布，将在下个月举办的国际防务展上全面展示"天盾-X"系统，并计划与多个国家和地区的安全部门开展合作。</p>
            `
          },
          {
            id: 2,
            title: '朗德智能与国家电网达成战略合作，无人机巡检覆盖五省电力设施',
            category: 'company',
            categoryName: '公司新闻',
            date: '2024-05-22',
            image: '/images/products/fpv-7.png',
            summary: '朗德智能与国家电网签署战略合作协议，将在五省区域部署智能无人机巡检系统，实现电力设施的智能化、自动化巡检。',
            content: `
              <p>北京，2024年5月22日 — 朗德智能科技有限公司今日与国家电网有限公司在北京签署战略合作协议，双方将在华东、华北五省区域内合作部署智能无人机巡检系统，覆盖超过10000公里的高压输电线路和3000座变电站。</p>

              <p>根据协议，朗德智能将为国家电网提供包括巡检无人机、自动充电站、智能巡检路径规划和缺陷识别AI系统在内的全套解决方案。该系统将大幅提升电力设施巡检的效率和准确性，降低人工巡检的安全风险和成本。</p>

              <p>国家电网设备部主任李强表示："电力设施的安全运行关系到国计民生。引入朗德智能的无人机巡检系统，是我们推进电网智能化运维的重要一步。这将显著提升我们发现和处理电力设施隐患的能力，提高供电可靠性。"</p>

              <p>朗德智能首席运营官张华介绍，该公司为电力行业定制的无人机巡检系统具有多项特色功能，包括恶劣天气条件下的稳定飞行能力、红外热成像检测、厘米级精准定位和基于深度学习的缺陷自动识别等。系统投入使用后，预计将使巡检效率提高300%以上，每年可为国家电网节省运维成本数亿元。</p>

              <p>据悉，双方合作的第一阶段项目将于今年7月启动，首先在江苏、浙江两省试点，年底前扩展至其他三省。这也是目前国内电力行业最大规模的无人机巡检应用项目。</p>

              <p>业内分析认为，此次合作标志着工业级无人机应用进入规模化阶段，也将为朗德智能在智能无人机领域的领先地位提供有力支撑。</p>
            `
          }
        ],
        en: [
          {
            id: 1,
            title: 'Lande Intelligent Successfully Develops New Generation of Anti-Drone System with 10KM Interception Range',
            category: 'company',
            categoryName: 'Company News',
            date: '2024-06-10',
            image: '/images/about/logo-ld.png',
            summary: 'Lande Intelligent announces its new generation anti-drone system "Sky Shield-X" has successfully passed final testing, with interception distance breaking the 10-kilometer mark, becoming the leading anti-drone solution in China.',
            content: `
              <p>Hangzhou, June 10, 2024 — Hangzhou Lande Intelligent Technology Co., Ltd. announced today that after three years of research and development, its new generation anti-drone system "Sky Shield-X" has successfully passed final testing and is officially entering the market. The system has achieved breakthroughs in several key indicators, especially the interception distance exceeding 10 kilometers for the first time, significantly ahead of similar products in the industry.</p>

              <p>The "Sky Shield-X" system employs multiple innovative technologies developed in-house, including a new millimeter-wave radar detection array, multi-frequency jamming module, and AI target recognition system. In actual tests, the system was able to detect, identify, and interfere with unauthorized drones within 10 seconds, with a success rate of 98.5%.</p>

              <p>Lande Intelligent CEO Wang Ming stated: "The successful development of the 'Sky Shield-X' system marks a new stage in China's anti-drone technology. We will apply this technological breakthrough to critical areas such as national infrastructure protection, large event security, and border control, providing more solid protection for national security."</p>

              <p>It is understood that the "Sky Shield-X" system has been applied in the security work of multiple major national events and has performed excellently. The system supports both fixed deployment and vehicle-mounted mobile deployment, featuring rapid response, all-weather operations, and networked collaborative combat capabilities.</p>

              <p>Industry experts point out that with the popularization of drone technology, the security threats posed by unauthorized drones are becoming increasingly serious. Lande Intelligent's technological breakthrough will provide a Chinese solution to this global security challenge.</p>

              <p>Lande Intelligent also announced that it will fully showcase the "Sky Shield-X" system at the International Defense Exhibition next month and plans to cooperate with security departments in multiple countries and regions.</p>
            `
          },
          {
            id: 2,
            title: 'Lande Intelligent Reaches Strategic Cooperation with State Grid, Drone Inspection to Cover Power Facilities in Five Provinces',
            category: 'company',
            categoryName: 'Company News',
            date: '2024-05-22',
            image: '/images/about/logo-ld.png',
            summary: 'Lande Intelligent signs strategic cooperation agreement with State Grid to deploy intelligent drone inspection systems in five provinces, achieving intelligent and automated inspection of power facilities.',
            content: `
              <p>Beijing, May 22, 2024 — Hangzhou Lande Intelligent Technology Co., Ltd. signed a strategic cooperation agreement with State Grid Corporation of China in Beijing today. The two parties will cooperate to deploy intelligent drone inspection systems in five provinces across Eastern and Northern China, covering over 10,000 kilometers of high-voltage transmission lines and 3,000 substations.</p>

              <p>According to the agreement, Lande Intelligent will provide State Grid with a complete solution including inspection drones, automatic charging stations, intelligent inspection path planning, and AI defect recognition systems. The system will significantly improve the efficiency and accuracy of power facility inspections while reducing the safety risks and costs of manual inspections.</p>

              <p>Li Qiang, Director of the Equipment Department of State Grid, stated: "The safe operation of power facilities is related to the national economy and people's livelihood. Introducing Lande Intelligent's drone inspection system is an important step in promoting the intelligent operation and maintenance of the power grid. This will significantly enhance our ability to discover and address potential hazards in power facilities and improve the reliability of power supply."</p>

              <p>Zhang Hua, Chief Operating Officer of Lande Intelligent, introduced that the company's drone inspection system customized for the power industry has multiple special features, including stable flight capability in adverse weather conditions, infrared thermal imaging detection, centimeter-level precision positioning, and automatic defect recognition based on deep learning. After the system is put into use, it is expected to improve inspection efficiency by more than 300% and save State Grid billions of yuan in maintenance costs annually.</p>

              <p>It is reported that the first phase of the cooperation project will start in July this year, first piloting in Jiangsu and Zhejiang provinces, and expanding to the other three provinces by the end of the year. This is also the largest-scale drone inspection application project in China's power industry currently.</p>

              <p>Industry analysis believes that this cooperation marks the industrial-grade drone application entering a scale-up phase and will provide strong support for Lande Intelligent's leading position in the intelligent drone field.</p>
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