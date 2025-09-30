import { defineStore } from 'pinia'
import { useLanguageStore } from './language'
import { computed } from 'vue'

export const useCasesStore = defineStore('cases', {
  state: () => {
    const languageStore = useLanguageStore();
    
    return {
      language: computed(() => languageStore.language),
      cases: {
        zh: [
          {
            id: 1,
            title: '军事要地无人机防御系统',
            tag: '军事安全',
            date: '2024-05-15',
            image: '/images/cases/military-defense.jpg',
            summary: '为北部军事要地部署朗德智能防御系统，实现全天候无人机侦测和拦截能力，保障军事基地安全。',
            highlight: '实现100%无人机探测率，干扰范围达5公里，零安全事故',
            content: `
              <h2>项目背景</h2>
              <p>随着无人机技术的快速发展，非授权无人机对军事设施的安全威胁日益严峻。某北部军事基地面临频繁的无人机侵入事件，需要部署先进的防御系统以保障基地安全。</p>
              
              <h2>面临挑战</h2>
              <ul>
                <li>复杂的地形环境和严苛的气候条件</li>
                <li>全天候24小时不间断防护需求</li>
                <li>需要对多种类型无人机实现高精度识别</li>
                <li>系统需要与现有军事安防体系无缝集成</li>
              </ul>
              
              <h2>解决方案</h2>
              <p>朗德智能为该军事基地定制了全方位无人机防御系统，包括：</p>
              <ul>
                <li><strong>全向雷达探测系统</strong>：采用毫米波雷达阵列，探测范围达7公里，可在复杂气象条件下准确识别目标</li>
                <li><strong>光电跟踪系统</strong>：配备高清热成像和可见光摄像机，实现目标精确跟踪和识别</li>
                <li><strong>电磁干扰设备</strong>：可对多频段进行定向干扰，强制无人机降落或返航</li>
                <li><strong>指挥控制中心</strong>：集中显示探测信息，提供态势感知和自动化响应流程</li>
              </ul>
              
              <h2>部署成效</h2>
              <p>系统部署后取得了显著成效：</p>
              <ul>
                <li>100%的无人机探测率，无漏检现象</li>
                <li>干扰成功率达98%，拦截距离最远达5公里</li>
                <li>系统全年运行稳定，零误报，零安全事故</li>
                <li>部署后未再发生无人机侵入事件</li>
              </ul>
              
              <h2>客户评价</h2>
              <p>"朗德智能的防御系统为我们的军事设施提供了坚实的安全保障。系统稳定性和可靠性远超预期，是军事设施防空的理想选择。"</p>
              <p style="text-align: right;">— 军事基地安全主管</p>
            `,
            results: [
              '100%无人机探测率',
              '干扰范围达5公里',
              '全年运行零误报',
              '部署后无侵入事件'
            ]
          },
          
          {
            id: 3,
            title: '电力设施无人机巡检系统',
            tag: '工业应用',
            date: '2024-01-10',
            image: '/images/cases/power-inspection.jpg',
            summary: '为某省电力公司打造智能无人机巡检系统，大幅提升巡检效率和故障发现率，降低运维成本。',
            highlight: '巡检效率提升300%，故障提前发现率提升60%，年节省成本超500万',
            content: `
              <h2>项目背景</h2>
              <p>某省电力公司负责管理超过2000公里的高压输电线路和数百座输电塔，传统人工巡检方式耗时长、效率低、安全风险高，急需引入智能化巡检手段。</p>
              
              <h2>面临挑战</h2>
              <ul>
                <li>输电线路分布广泛，地形复杂</li>
                <li>需要高清晰度图像以识别微小缺陷</li>
                <li>自动化程度要求高，减少人工干预</li>
                <li>需适应各种恶劣天气条件</li>
                <li>数据量大，需高效处理和分析</li>
              </ul>
              
              <h2>解决方案</h2>
              <p>朗德智能为客户提供了全流程无人机巡检解决方案：</p>
              <ul>
                <li><strong>工业级巡检无人机</strong>：抗风能力强，续航时间长，搭载高清和红外相机</li>
                <li><strong>自动巡检规划系统</strong>：根据电力设施分布自动规划巡检路线</li>
                <li><strong>AI缺陷识别系统</strong>：自动分析图像，识别绝缘子损坏、导线异常等问题</li>
                <li><strong>数据管理平台</strong>：存储和管理巡检数据，支持历史对比分析</li>
                <li><strong>无人机自动充电站</strong>：部署在关键节点，实现无人机自主充电和任务继续</li>
              </ul>
              
              <h2>部署成效</h2>
              <p>系统部署一年后，取得显著成效：</p>
              <ul>
                <li>巡检效率提升300%，单日巡检里程从50公里提升到200公里</li>
                <li>故障提前发现率提升60%，减少了突发停电事件</li>
                <li>巡检人员减少70%，年节省人工成本超过500万元</li>
                <li>数据积累形成设备健康档案，支持预测性维护</li>
              </ul>
              
              <h2>客户评价</h2>
              <p>"朗德智能的无人机巡检系统彻底改变了我们的工作方式，不仅提高了效率，更重要的是提升了安全性和可靠性。我们现在能发现许多以前容易被忽视的问题。"</p>
              <p style="text-align: right;">— 电力公司运维总监</p>
            `,
            results: [
              '巡检效率提升300%',
              '故障提前发现率提升60%',
              '巡检人员减少70%',
              '年节省成本500万+'
            ]
          },
          
        ],
        en: [
          {
            id: 1,
            title: 'Military Site Anti-Drone Defense System',
            tag: 'Military Security',
            date: '2024-05-15',
            image: '/images/cases/military-defense.jpg',
            summary: 'Deployed Lande Intelligent defense system for a northern military site, achieving all-weather drone detection and interception capabilities to secure the military base.',
            highlight: 'Achieved 100% drone detection rate, jamming range of 5km, zero security incidents',
            content: `
              <h2>Project Background</h2>
              <p>With the rapid development of drone technology, unauthorized drones pose an increasing security threat to military facilities. A northern military base was facing frequent drone intrusion incidents and needed to deploy an advanced defense system to ensure base security.</p>
              
              <h2>Challenges</h2>
              <ul>
                <li>Complex terrain environment and harsh climate conditions</li>
                <li>24-hour all-weather protection requirements</li>
                <li>Need for high-precision identification of various drone types</li>
                <li>System integration with existing military security systems</li>
              </ul>
              
              <h2>Solution</h2>
              <p>Lande Intelligent customized a comprehensive drone defense system for the military base, including:</p>
              <ul>
                <li><strong>Omnidirectional radar detection system</strong>: Utilizing millimeter-wave radar arrays, with a detection range of 7 kilometers, capable of accurately identifying targets in complex weather conditions</li>
                <li><strong>Optoelectronic tracking system</strong>: Equipped with high-definition thermal imaging and visible light cameras to achieve precise target tracking and identification</li>
                <li><strong>Electromagnetic interference equipment</strong>: Capable of directional interference across multiple frequency bands, forcing drones to land or return</li>
                <li><strong>Command and control center</strong>: Centralizing detection information, providing situational awareness and automated response procedures</li>
              </ul>
              
              <h2>Deployment Results</h2>
              <p>The system achieved significant results after deployment:</p>
              <ul>
                <li>100% drone detection rate, no missed detections</li>
                <li>98% jamming success rate, with interception distances reaching up to 5 kilometers</li>
                <li>Year-round stable system operation, zero false alarms, zero security incidents</li>
                <li>No drone intrusion incidents after deployment</li>
              </ul>
              
              <h2>Client Testimonial</h2>
              <p>"Lande Intelligent's defense system provides solid security protection for our military facilities. The system stability and reliability far exceed expectations, making it an ideal choice for military facility air defense."</p>
              <p style="text-align: right;">— Military Base Security Director</p>
            `,
            results: [
              '100% drone detection rate',
              'Jamming range of 5km',
              'Zero false alarms year-round',
              'No intrusion incidents post-deployment'
            ]
          },
          {
            id: 2,
            title: 'Major Sports Event Airspace Security',
            tag: 'Public Security',
            date: '2024-03-20',
            image: '/images/cases/military-defense.jpg',
            summary: 'Provided comprehensive airspace security for a major international sports event, achieving zero drone interference incidents throughout the event.',
            highlight: 'Secured a 14-day event, intercepted 37 unauthorized drones, ensuring smooth event proceedings',
            content: `
              <h2>Project Background</h2>
              <p>A major international sports event held in early 2024 attracted global attention while also facing drone interference and security risks. The organizing committee needed a reliable airspace security system to ensure the event would not be disturbed by drones.</p>
              
              <h2>Challenges</h2>
              <ul>
                <li>Multiple venues with dispersed deployment, wide coverage area</li>
                <li>Densely populated areas with high security requirements</li>
                <li>Need to distinguish between authorized and unauthorized drones</li>
                <li>System needed rapid deployment without affecting normal event operations</li>
                <li>Coordination needed with police and other security forces</li>
              </ul>
              
              <h2>Solution</h2>
              <p>Lande Intelligent provided a temporarily deployed comprehensive defense solution for the event:</p>
              <ul>
                <li><strong>Mobile radar detection vehicles</strong>: Deployed around major venues to form a seamless coverage network</li>
                <li><strong>Portable jamming equipment</strong>: Provided to security personnel for precise directional interception</li>
                <li><strong>Authorized drone management system</strong>: Providing electronic identification for official media drones to prevent mistaken interception</li>
                <li><strong>Unified command platform</strong>: Integrating all detection data for unified scheduling and command</li>
              </ul>
              
              <h2>Deployment Results</h2>
              <p>During the 14-day event:</p>
              <ul>
                <li>The system detected 46 unauthorized drone instances</li>
                <li>Successfully intercepted 37 drones, with the remaining drones departing after early warnings</li>
                <li>All competition venues achieved zero drone interference</li>
                <li>System response time under 3 seconds, not affecting event proceedings</li>
              </ul>
              
              <h2>Client Testimonial</h2>
              <p>"Lande Intelligent's system operates very stably, is easy to operate, and responds quickly. It provided strong security protection for the event, allowing us to focus on the event itself."</p>
              <p style="text-align: right;">— Event Security Director</p>
            `,
            results: [
              'Intercepted 37 unauthorized drones',
              'Covered 8 major venues',
              'System response time <3 seconds',
              'Zero interference incidents during the event'
            ]
          },
          {
            id: 3,
            title: 'Power Facility Drone Inspection System',
            tag: 'Industrial Application',
            date: '2024-01-10',
            image: '/images/cases/power-inspection.jpg',
            summary: 'Provided intelligent drone inspection system for a power company in a province, significantly improving inspection efficiency and fault discovery rate, and reducing maintenance costs.',
            highlight: 'Inspection efficiency increased by 300%, fault discovery rate increased by 60%, annual cost savings exceeding 5 million',
            content: `
              <h2>Project Background</h2>
              <p>A power company in a province is responsible for managing more than 2000 kilometers of high-voltage transmission lines and hundreds of transmission towers. Traditional manual inspection methods are time-consuming, inefficient, and high in security risks, so it is necessary to introduce intelligent inspection methods.</p>
              
              <h2>Challenges</h2>
              <ul>
                <li>Extensive distribution of transmission lines, complex terrain</li>
                <li>Need for high-definition images to identify small defects</li>
                <li>High automation requirements, reducing manual intervention</li>
                <li>Need to adapt to various weather conditions</li>
                <li>Large amount of data, need for efficient processing and analysis</li>
              </ul>
              
              <h2>Solution</h2>
              <p>Lande Intelligent provided a full-process drone inspection solution for customers:</p>
              <ul>
                <li><strong>Industrial-grade inspection drone</strong>: Strong wind resistance, long endurance, equipped with high-definition and infrared cameras</li>
                <li><strong>Automatic inspection planning system</strong>: Automatically plan inspection routes based on the distribution of power facilities</li>
                <li><strong>AI defect recognition system</strong>: Automatically analyze images to identify issues such as insulator damage and line abnormalities</li>
                <li><strong>Data management platform</strong>: Store and manage inspection data, support historical comparison analysis</li>
                <li><strong>Drone automatic charging station</strong>: Deployed at key nodes to realize autonomous charging and task continuation of drones</li>
              </ul>
              
              <h2>Deployment Results</h2>
              <p>After one year of system deployment, significant results were achieved:</p>
              <ul>
                <li>Inspection efficiency increased by 300%, single-day inspection mileage from 50 kilometers to 200 kilometers</li>
                <li>Fault discovery rate increased by 60%, reducing sudden power outages</li>
                <li>Inspection personnel reduced by 70%, annual cost savings exceeding 5 million yuan</li>
                <li>Data accumulation formed equipment health archives, supporting predictive maintenance</li>
              </ul>
              
              <h2>Client Testimonial</h2>
              <p>"Lande Intelligent's drone inspection system has completely changed our work style. Not only has efficiency improved, but more importantly, safety and reliability have been significantly improved. We can now find many problems that were previously overlooked."</p>
              <p style="text-align: right;">— Power Company Maintenance Director</p>
            `,
            results: [
              'Inspection efficiency increased by 300%',
              'Fault discovery rate increased by 60%',
              'Inspection personnel reduced by 70%',
              'Annual cost savings exceeding 5 million'
            ]
          },
          {
            id: 4,
            title: 'Smart Agriculture Drone Application',
            tag: 'Agricultural Application',
            date: '2023-11-25',
            image: '/images/cases/military-defense.jpg',
            summary: 'Provided intelligent drone solution for a large agricultural base in the south, achieving precise spraying, reducing the amount of pesticide used, and increasing crop yield.',
            highlight: 'Covered 5000 acres of farmland, pesticide usage reduced by 30%, crop yield increased by 15%, labor cost reduced by 60%',
            content: `
              <h2>Project Background</h2>
              <p>A large agricultural base in the south grows more than 5000 acres of rice. Traditional manual spraying methods have problems such as large amount of pesticide usage, low efficiency, and uneven coverage. Seeking intelligent pest control solutions to improve efficiency and reduce environmental impact.</p>
              
              <h2>Challenges</h2>
              <ul>
                <li>Large farmland area, uneven terrain</li>
                <li>Need for precise control of spraying range and dosage</li>
                <li>Reduce pesticide usage while ensuring prevention and control effects</li>
                <li>Easy to operate, suitable for local farmers</li>
                <li>Equipment maintenance and service support needs</li>
              </ul>
              
              <h2>Solution</h2>
              <p>Lande Intelligent provided a full set of intelligent agricultural pest control solutions for customers:</p>
              <ul>
                <li><strong>20-liter load-carrying drone</strong>: Single-time operation area of 15-20 acres, good atomization effect</li>
                <li><strong>Precise positioning system</strong>: Centimeter-level positioning to ensure no repeated spraying or missed spraying</li>
                <li><strong>Smart spraying system</strong>: Automatically adjust spraying amount based on crop type and growth stage</li>
                <li><strong>Farmland planning software</strong>: Automatically plan the optimal spraying route based on farmland shape</li>
                <li><strong>Technical training and maintenance service</strong>: Provide training and technical support for local farmers</li>
              </ul>
              
              <h2>Deployment Results</h2>
              <p>After one planting season, significant results were achieved:</p>
              <ul>
                <li>Spraying efficiency increased by 800%, 5000 acres of farmland can be completed once in 3 days</li>
                <li>Pesticide usage reduced by 30%, reducing environmental impact</li>
                <li>Spraying uniformity improved, better prevention and control effects, disease and pest incidence rate decreased by 40%</li>
                <li>Crop yield increased by 15%, quality improved</li>
                <li>Labor cost reduced by 60%, avoiding direct contact with pesticides for farmers</li>
              </ul>
              
              <h2>Client Testimonial</h2>
              <p>"Lande Intelligent's drone spraying has greatly changed our agricultural production method. Not only is it labor-saving and time-saving, but also more efficient and profitable. Most importantly, it reduces pesticide usage, which is better for the environment and farmers."</p>
              <p style="text-align: right;">— Agricultural Base Director</p>
            `,
            results: [
              'Spraying efficiency increased by 800%',
              'Pesticide usage reduced by 30%',
              'Crop yield increased by 15%',
              'Labor cost reduced by 60%'
            ]
          },
          {
            id: 5,
            title: 'Urban Emergency Response Drone System',
            tag: 'Emergency Rescue',
            date: '2023-09-08',
            image: '/images/cases/military-defense.jpg',
            summary: 'Provided emergency rescue drone system for a coastal city, helping disaster monitoring, rescue operations, and post-disaster assessment.',
            highlight: 'Emergency response time shortened by 70%, rescue success rate increased by 40%, achieving 24-hour all-weather monitoring',
            content: `
              <h2>Project Background</h2>
              <p>A coastal city in a province faces natural disasters such as typhoons and floods year-round. Traditional emergency response methods have limitations in information acquisition and rescue efficiency. It is necessary to improve emergency response capabilities and efficiency.</p>
              
              <h2>Challenges</h2>
              <ul>
                <li>Stable flight demand in adverse weather conditions</li>
                <li>24-hour all-weather monitoring demand</li>
                <li>Large-scale rapid search capability</li>
                <li>Multi-department coordination and information sharing</li>
                <li>Emergency communication support capability</li>
              </ul>
              
              <h2>Solution</h2>
              <p>Lande Intelligent created a comprehensive emergency drone solution for the city:</p>
              <ul>
                <li><strong>All-weather emergency monitoring drone</strong>: Wind and rain resistant design, equipped with visible light and infrared cameras</li>
                <li><strong>Rescue-specific drone</strong>: Equipped with high-magnification zoom camera and thermal imaging equipment, capable of dropping rescue equipment</li>
                <li><strong>Emergency communication drone</strong>: Can establish temporary communication network above disaster areas</li>
                <li><strong>Drone command system</strong>: Centralize management of all drones, implement task allocation and data summary</li>
                <li><strong>Quick deployment plan</strong>: Vehicle launch platform, realizing rapid arrival and takeoff</li>
              </ul>
              
              <h2>Deployment Results</h2>
              <p>After system deployment, it played an important role in many emergency events:</p>
              <ul>
                <li>Emergency response time shortened from 40 minutes to 12 minutes, increased by 70%</li>
                <li>Disaster assessment area expanded by 5 times, accuracy increased by 80%</li>
                <li>Successfully rescued 15 trapped people in a mountainous flood</li>
                <li>Emergency communication drone provided 72-hour uninterrupted communication support for disaster-affected areas</li>
                <li>Disaster warning time ahead by 2-3 hours, winning precious time for evacuation</li>
              </ul>
              
              <h2>Client Testimonial</h2>
              <p>"Lande Intelligent's emergency drone system greatly improved our emergency rescue capabilities, especially in complex terrain and adverse weather conditions, providing us with a 'heavenly eye', making rescue actions more accurate and effective."</p>
              <p style="text-align: right;">— City Emergency Management Bureau Director</p>
            `,
            results: [
              'Emergency response time shortened by 70%',
              'Rescue success rate increased by 40%',
              'Disaster assessment area expanded by 5 times',
              'Provided 72-hour emergency communication'
            ]
          },
          {
            id: 6,
            title: 'Border Security Drone Monitoring System',
            tag: 'Border Security',
            date: '2023-07-12',
            image: '/images/cases/border-security.jpg',
            summary: 'Provided intelligent drone monitoring system for a western border area, achieving 24-hour uninterrupted monitoring and warning of the border.',
            highlight: 'Covered 150 kilometers of border, unauthorized border intrusion interception rate increased by 85%, border defense efficiency increased by 200%',
            content: `
              <h2>Project Background</h2>
              <p>A western border area in a province has complex terrain and long borderline. Human patrol exists in blind areas and low efficiency. It is necessary to use technical means to improve border security control capabilities.</p>
              
              <h2>Challenges</h2>
              <ul>
                <li>Long borderline of 150 kilometers, complex terrain</li>
                <li>Extreme climate conditions (high temperature, sandstorm, etc.)</li>
                <li>Limited power supply, poor communication conditions</li>
                <li>Need for long-term uninterrupted monitoring</li>
                <li>Target automatic recognition and warning capabilities</li>
              </ul>
              
              <h2>Solution</h2>
              <p>Lande Intelligent customized a drone monitoring system for border security:</p>
              <ul>
                <li><strong>Long-endurance border patrol drone</strong>: Single-time flight coverage of 50 kilometers of border, endurance of 4 hours</li>
                <li><strong>Fixed-wing/multi-rotor mixed cluster</strong>: Advantageous complementarity, full-aspect monitoring</li>
                <li><strong>Solar drone base station</strong>: Deployed at key positions to provide charging and data relay</li>
                <li><strong>AI recognition system</strong>: Automatically recognize personnel and vehicle activities, graded warning</li>
                <li><strong>Low-bandwidth data transmission plan</strong>: Adapt to border communication conditions</li>
              </ul>
              
              <h2>Deployment Results</h2>
              <p>After system deployment, border security situation significantly improved:</p>
              <ul>
                <li>Realized 100% coverage monitoring of 150 kilometers of border, no blind spots</li>
                <li>Unauthorized border intrusion incidents decreased by 60%, interception rate increased by 85%</li>
                <li>Border defense personnel patrol efficiency increased by 200%, from "carpet search" to "precise strike"</li>
                <li>System still maintained above 95% availability in extreme conditions</li>
                <li>Border management cost reduced by 40%, emergency response time reduced by 75%</li>
              </ul>
              
              <h2>Client Testimonial</h2>
              <p>"Lande Intelligent's border monitoring system has completely changed our work style. The area that used to require hundreds of people to patrol day and night can now be efficiently controlled with a small number of people and drones, and the security protection capability has been significantly improved."</p>
              <p style="text-align: right;">— Border Management Department Director</p>
            `,
            results: [
              'Covered 150 kilometers of border',
              'Unauthorized border intrusion interception rate increased by 85%',
              'Border defense efficiency increased by 200%',
              'Emergency response time reduced by 75%'
            ]
          }
        ]
      }
    };
  },
  
  getters: {
    getAllCases(state) {
      return state.cases[state.language] || state.cases.zh;
    },
    
    getCaseById: (state) => (id) => {
      const currentCases = state.cases[state.language] || state.cases.zh;
      return currentCases.find(c => c.id === parseInt(id));
    }
  }
}) 