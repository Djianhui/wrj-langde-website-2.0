const { createApp, ref, onMounted, reactive } = Vue;

const app = createApp({
    setup() {
        // 页面滚动状态
        const isScrolled = ref(false);
        // 移动菜单状态
        const isMenuActive = ref(false);
        // 当前活动的导航项
        const currentSection = ref('');
        
        // 导航项数据
        const navItems = [
            { text: '解决方案', link: '#solutions', id: 'solutions' },
            { text: '核心技术', link: '#technology', id: 'technology' },
            { text: '典型案例', link: '#cases', id: 'cases' },
            { text: '新闻资讯', link: '#news', id: 'news' },
            { text: '关于我们', link: '#about', id: 'about' },
            { text: '加入我们', link: '#join', id: 'join' }
        ];
        
        // 主横幅数据
        const heroData = {
            title: '智能科技，创造可能',
            subtitle: '用智能科技赋能产业升级，驱动未来创新',
            buttonText: '预约了解',
            buttonLink: '#contact'
        };
        
        // 解决方案数据
        const solutions = [
            {
                title: '工业自动化解决方案',
                description: '为制造业提供智能化、自动化的生产线解决方案，提高生产效率，降低人力成本。',
                image: 'images/solution-1.jpg'
            },
            {
                title: '智能物联网解决方案',
                description: '构建万物互联的智能网络，实现设备间的智能通信与协作，打造智慧城市、智慧工厂。',
                image: 'images/solution-2.jpg'
            },
            {
                title: '数据分析与优化方案',
                description: '运用大数据技术，分析生产数据，优化生产流程，提高资源利用率。',
                image: 'images/solution-3.jpg'
            },
            {
                title: '智能机器人系统',
                description: '提供工业级智能机器人整体解决方案，实现复杂环境下的自主作业能力。',
                image: 'images/solution-4.jpg'
            }
        ];
        
        // 核心技术数据
        const technologyData = {
            description: '朗德智能自主研发的核心技术体系，为智能制造、智慧城市等领域提供强大的技术支持。',
            items: [
                {
                    title: '人工智能算法',
                    description: '基于深度学习的智能识别与决策系统',
                    icon: 'fas fa-brain'
                },
                {
                    title: '边缘计算架构',
                    description: '低延迟、高可靠的边缘智能处理系统',
                    icon: 'fas fa-network-wired'
                },
                {
                    title: '机器人控制系统',
                    description: '高精度、多自由度的机器人控制平台',
                    icon: 'fas fa-robot'
                },
                {
                    title: '云平台管理系统',
                    description: '可扩展、高性能的云端数据处理中心',
                    icon: 'fas fa-cloud'
                },
                {
                    title: '安全防护技术',
                    description: '多层级的数据与系统安全保障机制',
                    icon: 'fas fa-shield-alt'
                },
                {
                    title: '数据分析引擎',
                    description: '实时数据处理与智能分析预测系统',
                    icon: 'fas fa-chart-line'
                }
            ]
        };
        
        // 典型案例数据
        const cases = [
            {
                title: '某大型制造企业智能工厂改造',
                description: '通过引入朗德智能的智能制造解决方案，该企业生产效率提升35%，能耗降低20%，不良品率下降50%。',
                image: 'images/case-1.jpg'
            },
            {
                title: '杭州未来科技城智慧园区建设',
                description: '为科技园区提供智能化管理系统，实现园区安防、能源、人员、车辆的一体化智能管理。',
                image: 'images/case-2.jpg'
            },
            {
                title: '大型电商智能物流系统',
                description: '为电商企业打造智能物流分拣系统，日处理包裹量提升至50万件，分拣准确率达99.9%。',
                image: 'images/case-3.jpg'
            }
        ];
        
        // 轮播样式
        const sliderStyle = ref({});
        
        // 新闻资讯数据
        const newsItems = [
            {
                day: '15',
                month: '06 / 2025',
                title: '朗德智能荣获2025年度"杭州市创新企业百强"称号',
                summary: '近日，杭州市科技局公布了2025年度"杭州市创新企业百强"名单，朗德智能凭借在人工智能与智能制造领域的突出贡献成功入选。'
            },
            {
                day: '08',
                month: '06 / 2025',
                title: '朗德智能新一代工业机器人控制系统发布',
                summary: '朗德智能今日正式发布新一代工业机器人控制系统，该系统采用自主研发的AI算法，大幅提升了机器人的柔性作业能力。'
            },
            {
                day: '30',
                month: '05 / 2025',
                title: '朗德智能与浙江大学达成战略合作',
                summary: '朗德智能与浙江大学控制科学与工程学院签署战略合作协议，双方将在智能制造、机器人技术等领域展开深度合作。'
            }
        ];
        
        // 关于我们数据
        const aboutData = {
            title: '杭州朗德智能科技有限公司',
            paragraphs: [
                '杭州朗德智能科技有限公司成立于2020年，总部位于浙江杭州，是一家专注于人工智能、工业自动化和智能制造领域的高新技术企业。公司拥有一支由行业资深专家和青年创新人才组成的研发团队，致力于为制造业、物流业等传统产业提供智能化升级解决方案。',
                '朗德智能秉持"智慧创新，德行天下"的企业理念，以技术创新为驱动，以客户需求为导向，打造了一系列具有自主知识产权的核心技术和产品。目前，公司已服务超过100家大中型企业，成功实施了50多个智能化改造项目，获得了客户的广泛认可。'
            ],
            stats: [
                { value: '2020', description: '成立于浙江杭州' },
                { value: '100<sup>+</sup>', description: '服务企业数量' },
                { value: '50<sup>+</sup>', description: '成功项目案例' }
            ],
            image: 'images/about-company.jpg'
        };
        
        // 加入我们数据
        const joinData = {
            description: '朗德智能欢迎优秀人才的加入，与我们一起开创智能科技的未来',
            jobs: [
                {
                    title: '人工智能算法工程师',
                    responsibilities: '负责深度学习算法研发，优化模型性能，解决实际应用中的技术难题。',
                    requirements: '计算机、人工智能相关专业硕士及以上学历，有深度学习项目经验。'
                },
                {
                    title: '机器人控制系统工程师',
                    responsibilities: '负责工业机器人控制系统开发，实现复杂环境下的智能控制。',
                    requirements: '自动化、机电一体化相关专业，熟悉机器人控制原理，有相关项目经验。'
                },
                {
                    title: '解决方案架构师',
                    responsibilities: '负责智能制造解决方案设计，对接客户需求，提供技术咨询。',
                    requirements: '5年以上相关行业经验，熟悉工业自动化系统，具备良好沟通能力。'
                }
            ]
        };
        
        // 联系我们数据
        const contactData = {
            info: [
                {
                    icon: 'fas fa-map-marker-alt',
                    text: '浙江省杭州市滨江区科技园区创新大厦A座15楼'
                },
                {
                    icon: 'fas fa-phone',
                    text: '0571-8888 9999'
                },
                {
                    icon: 'fas fa-envelope',
                    text: 'info@landeintelligent.com'
                }
            ]
        };
        
        // 联系表单数据
        const contactForm = reactive({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        
        // 页脚数据
        const footerData = {
            slogan: '智能科技，创造可能',
            copyright: '© 2025 杭州朗德智能科技有限公司 版权所有',
            icp: '浙ICP备20xxxxxx号-1',
            linkGroups: [
                {
                    title: '解决方案',
                    links: [
                        { text: '工业自动化解决方案', url: '#' },
                        { text: '智能物联网解决方案', url: '#' },
                        { text: '数据分析与优化方案', url: '#' },
                        { text: '智能机器人系统', url: '#' }
                    ]
                },
                {
                    title: '关于我们',
                    links: [
                        { text: '企业简介', url: '#' },
                        { text: '企业文化', url: '#' },
                        { text: '发展历程', url: '#' },
                        { text: '荣誉资质', url: '#' }
                    ]
                },
                {
                    title: '新闻资讯',
                    links: [
                        { text: '企业新闻', url: '#' },
                        { text: '行业动态', url: '#' },
                        { text: '媒体报道', url: '#' },
                        { text: '技术博客', url: '#' }
                    ]
                }
            ]
        };
        
        // 案例轮播引用
        const casesSlider = ref(null);
        
        // 生命周期钩子 - 组件挂载完成
        onMounted(() => {
            // 监听滚动事件
            window.addEventListener('scroll', handleScroll);
            
            // 初始化案例轮播
            if (casesSlider.value && cases.length > 3) {
                setupSlider();
            }
        });
        
        // 处理滚动事件
        const handleScroll = () => {
            // 设置导航栏滚动状态
            isScrolled.value = window.scrollY > 50;
            
            // 根据滚动位置设置当前活动的导航项
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= (sectionTop - 200)) {
                    currentSection.value = section.getAttribute('id');
                }
            });
        };
        
        // 设置轮播
        const setupSlider = () => {
            let currentSlide = 0;
            const slideCount = cases.length;
            const slideWidth = casesSlider.value.children[0].offsetWidth;
            
            // 克隆第一个轮播项添加到末尾（无限轮播）
            const firstSlideClone = casesSlider.value.children[0].cloneNode(true);
            casesSlider.value.appendChild(firstSlideClone);
            
            // 设置容器宽度
            sliderStyle.value = {
                width: `${slideWidth * (slideCount + 1)}px`,
                display: 'flex',
                transition: 'transform 0.5s ease'
            };
            
            // 自动轮播
            setInterval(() => {
                currentSlide++;
                casesSlider.value.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                
                // 当到达克隆项时，无缝切换回第一项
                if (currentSlide >= slideCount) {
                    setTimeout(() => {
                        casesSlider.value.style.transition = 'none';
                        currentSlide = 0;
                        casesSlider.value.style.transform = 'translateX(0)';
                        setTimeout(() => {
                            casesSlider.value.style.transition = 'transform 0.5s ease';
                        }, 50);
                    }, 500);
                }
            }, 5000);
        };
        
        // 切换移动菜单
        const toggleMenu = () => {
            isMenuActive.value = !isMenuActive.value;
        };
        
        // 平滑滚动到锚点
        const scrollToSection = (link) => {
            if (link !== '#') {
                const targetId = link.replace('#', '');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // 如果是移动菜单，则关闭
                    isMenuActive.value = false;
                }
            }
        };
        
        // 处理卡片悬停
        const handleCardHover = (event) => {
            event.currentTarget.style.transform = 'translateY(-10px)';
            event.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        };
        
        const handleCardLeave = (event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.boxShadow = 'var(--shadow)';
        };
        
        // 处理技术项悬停
        const handleTechHover = (event) => {
            event.currentTarget.style.transform = 'translateY(-5px)';
            event.currentTarget.style.boxShadow = 'var(--shadow)';
        };
        
        const handleTechLeave = (event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.boxShadow = 'none';
        };
        
        // 处理新闻项悬停
        const handleNewsHover = (event) => {
            event.currentTarget.style.transform = 'translateY(-5px)';
            event.currentTarget.style.boxShadow = 'var(--shadow)';
        };
        
        const handleNewsLeave = (event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.boxShadow = 'none';
        };
        
        // 处理职位卡片悬停
        const handleJobHover = (event) => {
            event.currentTarget.style.transform = 'translateY(-5px)';
            event.currentTarget.style.boxShadow = 'var(--shadow)';
        };
        
        const handleJobLeave = (event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.boxShadow = 'none';
        };
        
        // 提交联系表单
        const submitContactForm = () => {
            // 验证表单
            let isValid = true;
            
            // 简单验证所有字段是否填写
            for (const key in contactForm) {
                if (!contactForm[key].trim()) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) {
                // 此处应添加实际的表单提交逻辑
                alert('感谢您的咨询，我们将尽快与您联系！');
                
                // 重置表单
                for (const key in contactForm) {
                    contactForm[key] = '';
                }
            } else {
                alert('请填写所有必填字段');
            }
        };
        
        return {
            isScrolled,
            isMenuActive,
            currentSection,
            navItems,
            heroData,
            solutions,
            technologyData,
            cases,
            sliderStyle,
            casesSlider,
            newsItems,
            aboutData,
            joinData,
            contactData,
            contactForm,
            footerData,
            toggleMenu,
            scrollToSection,
            handleCardHover,
            handleCardLeave,
            handleTechHover,
            handleTechLeave,
            handleNewsHover,
            handleNewsLeave,
            handleJobHover,
            handleJobLeave,
            submitContactForm
        };
    }
});

// 挂载应用
app.mount('#app'); 