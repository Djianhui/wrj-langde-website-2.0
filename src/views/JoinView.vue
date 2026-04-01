<template>
  <div class="join-page page-content">
    <div class="container">
      <h1 class="section-title">{{ jobsData.title }}</h1>
      
      <div class="join-intro">
        <p>{{ jobsData.description }}</p>
      </div>
      
      <div class="join-positions">
        <h2>{{ jobsData.positions }}</h2>
        
        <div class="position-list">
          <div class="position-item" v-for="position in currentPositions" :key="position.id">
            <div class="position-header">
              <h3>{{ position.title }}</h3>
              <span class="position-location">{{ position.location }}</span>
            </div>
            <div class="position-details">
              <div class="position-requirements">
                <h4>{{ jobsData.requirements }}：</h4>
                <ul>
                  <li v-for="(req, index) in position.requirements" :key="index">{{ req }}</li>
                </ul>
              </div>
              <div class="position-responsibilities">
                <h4>{{ jobsData.responsibilities }}：</h4>
                <ul>
                  <li v-for="(resp, index) in position.responsibilities" :key="index">{{ resp }}</li>
                </ul>
              </div>
            </div>
            <div class="position-footer">
              <button class="btn btn-primary" @click="applyPosition(position.id)">{{ jobsData.apply }}</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="join-contact">
        <h2>{{ t('contact', '联系我们') }}</h2>
        <p v-if="isZh">如果您对我们的职位感兴趣，请将简历发送至：<a href="mailto:hr@landeintelligent.com">173462959@qq.com</a></p>
        <p v-else>If you are interested in our positions, please send your resume to: <a href="mailto:hr@landeintelligent.com">173462959@qq.com</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/mixins/language'

// 获取语言相关功能
const { t, isZh, isEn, getJobsData } = useLanguage()

// 获取招聘信息数据
const jobsData = computed(() => getJobsData())

// 职位数据，根据语言切换
const zhPositions = [
  {
    id: 1,
    title: '人工智能算法工程师',
    location: '杭州',
    requirements: [
      '计算机科学、人工智能或相关专业硕士及以上学历',
      '熟悉机器学习、深度学习算法，有相关项目经验',
      '熟练掌握Python，熟悉常用的机器学习框架如TensorFlow、PyTorch等',
      '良好的算法设计和问题解决能力'
    ],
    responsibilities: [
      '负责公司AI产品的算法研发和优化',
      '参与解决方案的技术设计和实现',
      '跟踪和研究前沿AI技术，并应用到产品中'
    ]
  },
  {
    id: 2,
    title: '前端开发工程师',
    location: '杭州',
    requirements: [
      '计算机相关专业本科及以上学历',
      '熟练掌握HTML、CSS、JavaScript，熟悉Vue.js等前端框架',
      '了解响应式设计和前端性能优化',
      '具有良好的团队协作能力'
    ],
    responsibilities: [
      '负责公司产品的前端开发和维护',
      '与后端开发人员协作，实现产品功能',
      '优化用户界面和用户体验'
    ]
  },
  {
    id: 3,
    title: '产品经理',
    location: '杭州',
    requirements: [
      '本科及以上学历，3年以上产品经理经验',
      '熟悉产品设计流程，有AI或物联网产品经验优先',
      '良好的沟通能力和团队协作能力',
      '有创新思维和解决问题的能力'
    ],
    responsibilities: [
      '负责公司产品的规划和设计',
      '收集和分析用户需求，制定产品开发计划',
      '协调各部门资源，推动产品落地'
    ]
  }
]

const enPositions = [
  {
    id: 1,
    title: 'AI Algorithm Engineer',
    location: 'Hangzhou',
    requirements: [
      'Master\'s degree or above in Computer Science, AI, or related fields',
      'Familiar with machine learning and deep learning algorithms, with relevant project experience',
      'Proficient in Python, familiar with common machine learning frameworks such as TensorFlow, PyTorch, etc.',
      'Good algorithm design and problem-solving skills'
    ],
    responsibilities: [
      'Responsible for algorithm R&D and optimization of company\'s AI products',
      'Participate in the technical design and implementation of solutions',
      'Track and research cutting-edge AI technologies and apply them to products'
    ]
  },
  {
    id: 2,
    title: 'Front-end Developer',
    location: 'Hangzhou',
    requirements: [
      'Bachelor\'s degree or above in Computer Science or related fields',
      'Proficient in HTML, CSS, JavaScript, familiar with front-end frameworks such as Vue.js',
      'Understanding of responsive design and front-end performance optimization',
      'Good teamwork ability'
    ],
    responsibilities: [
      'Responsible for front-end development and maintenance of company products',
      'Collaborate with back-end developers to implement product features',
      'Optimize user interface and user experience'
    ]
  },
  {
    id: 3,
    title: 'Product Manager',
    location: 'Hangzhou',
    requirements: [
      'Bachelor\'s degree or above, 3+ years of product manager experience',
      'Familiar with product design process, AI or IoT product experience preferred',
      'Good communication and teamwork skills',
      'Innovative thinking and problem-solving ability'
    ],
    responsibilities: [
      'Responsible for company product planning and design',
      'Collect and analyze user requirements, formulate product development plans',
      'Coordinate departmental resources to drive product implementation'
    ]
  }
]

// 根据当前语言获取职位列表
const currentPositions = computed(() => {
  return isZh.value ? zhPositions : enPositions
})

// 申请职位方法
const applyPosition = (id) => {
  if (isZh.value) {
    alert('感谢您的申请，请将简历发送至173462959@qq.com，并注明职位编号：' + id)
  } else {
    alert('Thank you for your application. Please send your resume to 173462959@qq.com, and specify position ID: ' + id)
  }
}
</script>

<style scoped>
.join-page {
  padding-top: 100px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
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

.join-intro {
  margin: 60px 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.join-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.join-intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #475569;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

.join-positions {
  margin: 80px 0;
}

.join-positions h2 {
  font-size: 2.4rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
  font-weight: 600;
  text-align: center;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  position: relative;
}

.join-positions h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.position-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 40px;
}

.position-item {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  padding: 40px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.position-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.position-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 80px rgba(59, 130, 246, 0.15);
}

.position-item:hover::before {
  transform: scaleX(1);
}

.position-header {
  margin-bottom: 24px;
  border-bottom: 2px solid rgba(59, 130, 246, 0.1);
  padding-bottom: 20px;
}

.position-header h3 {
  font-size: 1.6rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.position-location {
  display: inline-block;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%);
  color: #3b82f6;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.15);
  font-family: 'Inter', sans-serif;
}

.position-details {
  margin-bottom: 32px;
}

.position-requirements, .position-responsibilities {
  margin-bottom: 24px;
}

.position-details h4 {
  font-size: 1.2rem;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  position: relative;
  padding-left: 20px;
}

.position-details h4::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

.position-details ul {
  list-style: none;
  padding-left: 0;
}

.position-details li {
  margin-bottom: 12px;
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  position: relative;
  padding-left: 24px;
  font-family: 'Inter', sans-serif;
}

.position-details li::before {
  content: '\2022';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
  font-size: 1.2rem;
}

.position-footer {
  text-align: right;
  padding-top: 20px;
  border-top: 1px solid rgba(59, 130, 246, 0.1);
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.3px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

.join-contact {
  text-align: center;
  margin-top: 100px;
  padding: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.join-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
}

.join-contact h2 {
  font-size: 2.2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.join-contact p {
  font-size: 1.15rem;
  color: #475569;
  line-height: 1.7;
  font-family: 'Inter', sans-serif;
}

.join-contact a {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;
}

.join-contact a:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

@media (max-width: 768px) {
  .join-page {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .join-intro {
    padding: 40px 30px;
    margin: 40px 0;
  }
  
  .join-positions h2 {
    font-size: 2rem;
  }
  
  .position-list {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .position-item {
    padding: 30px;
  }
  
  .position-header h3 {
    font-size: 1.4rem;
  }
  
  .join-contact {
    padding: 40px 30px;
    margin-top: 60px;
  }
  
  .join-contact h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.9rem;
  }
  
  .join-intro {
    padding: 30px 20px;
  }
  
  .position-item {
    padding: 25px;
  }
  
  .position-header h3 {
    font-size: 1.3rem;
  }
  
  .position-details h4 {
    font-size: 1.1rem;
  }
  
  .btn {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
  
  .join-contact {
    padding: 30px 20px;
  }
}
</style> 