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
        <p v-if="isZh">如果您对我们的职位感兴趣，请将简历发送至：<a href="mailto:hr@landeintelligent.com">1547554068@qq.com</a></p>
        <p v-else>If you are interested in our positions, please send your resume to: <a href="mailto:hr@landeintelligent.com">1547554068@qq.com</a></p>
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
    alert('感谢您的申请，请将简历发送至1547554068@qq.com，并注明职位编号：' + id)
  } else {
    alert('Thank you for your application. Please send your resume to 1547554068@qq.com, and specify position ID: ' + id)
  }
}
</script>

<style scoped>
.join-page {
  padding-top: 100px;
  padding-bottom: 80px;
}

.join-intro {
  margin: 40px 0;
  text-align: center;
}

.join-intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #334155;
  max-width: 800px;
  margin: 0 auto;
}

.join-positions {
  margin: 60px 0;
}

.join-positions h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 30px;
}

.position-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.position-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--shadow);
  padding: 30px;
  transition: transform 0.3s ease;
}

.position-item:hover {
  transform: translateY(-5px);
}

.position-header {
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 15px;
}

.position-header h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.position-location {
  display: inline-block;
  background-color: #f1f5f9;
  padding: 5px 10px;
  border-radius: 4px;
  color: #64748b;
  font-size: 0.9rem;
}

.position-details {
  margin-bottom: 20px;
}

.position-requirements, .position-responsibilities {
  margin-bottom: 20px;
}

.position-details h4 {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 10px;
}

.position-details ul {
  list-style-type: disc;
  padding-left: 20px;
}

.position-details li {
  margin-bottom: 8px;
  color: #64748b;
  line-height: 1.6;
}

.position-footer {
  text-align: right;
}

.join-contact {
  text-align: center;
  margin-top: 80px;
  padding: 40px;
  background-color: #f8fafc;
  border-radius: 8px;
}

.join-contact h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.join-contact p {
  font-size: 1.1rem;
  color: #334155;
}

.join-contact a {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
}

.join-contact a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .position-list {
    grid-template-columns: 1fr;
  }
}
</style> 