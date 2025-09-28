document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 滚动时高亮当前导航项
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // 移动端菜单切换
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // 移动端菜单按钮动画
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // 点击导航链接关闭移动端菜单
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuBtn.classList.remove('active');
                nav.classList.remove('active');
                
                const spans = menuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (this.getAttribute('href') !== '#') {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 解决方案卡片动画
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // 技术项动画
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 表单验证
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = 'var(--border-color)';
                }
            });
            
            if (isValid) {
                // 在这里添加表单提交逻辑
                alert('感谢您的咨询，我们将尽快与您联系！');
                this.reset();
            } else {
                alert('请填写所有必填字段');
            }
        });
    }
    
    // 如果存在案例轮播，实现简单轮播功能
    const casesSlider = document.querySelector('.cases-slider');
    if (casesSlider && casesSlider.children.length > 3) {
        let currentSlide = 0;
        const slideCount = casesSlider.children.length;
        const slideWidth = casesSlider.children[0].offsetWidth;
        
        // 克隆第一个轮播项添加到末尾（无限轮播）
        const firstSlideClone = casesSlider.children[0].cloneNode(true);
        casesSlider.appendChild(firstSlideClone);
        
        // 设置容器宽度
        casesSlider.style.width = `${slideWidth * (slideCount + 1)}px`;
        casesSlider.style.display = 'flex';
        casesSlider.style.transition = 'transform 0.5s ease';
        
        // 自动轮播
        setInterval(() => {
            currentSlide++;
            casesSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            
            // 当到达克隆项时，无缝切换回第一项
            if (currentSlide >= slideCount) {
                setTimeout(() => {
                    casesSlider.style.transition = 'none';
                    currentSlide = 0;
                    casesSlider.style.transform = `translateX(0)`;
                    setTimeout(() => {
                        casesSlider.style.transition = 'transform 0.5s ease';
                    }, 50);
                }, 500);
            }
        }, 5000);
    }
}); 