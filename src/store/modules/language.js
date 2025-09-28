import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

/**
 * 从localStorage和cookie尝试获取语言设置
 * @returns {string} 语言设置，默认为'zh'
 */
function getPersistedLanguage() {
  let lang = null;
  
  // 首先从localStorage读取
  try {
    lang = localStorage.getItem('language');
    console.log('从localStorage读取语言:', lang);
  } catch (e) {
    console.error('从localStorage读取语言失败:', e);
  }
  
  // 如果localStorage没有，尝试从cookie读取
  if (!lang || (lang !== 'zh' && lang !== 'en')) {
    try {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'language') {
          lang = value;
          console.log('从cookie读取语言:', lang);
          break;
        }
      }
    } catch (e) {
      console.error('从cookie读取语言失败:', e);
    }
  }
  
  // 如果都没有或无效，使用默认值'zh'
  if (!lang || (lang !== 'zh' && lang !== 'en')) {
    lang = 'zh';
    console.log('使用默认语言:', lang);
  }
  
  return lang;
}

/**
 * 持久化保存语言设置到localStorage和cookie
 * @param {string} lang 语言设置
 */
function persistLanguage(lang) {
  if (lang !== 'zh' && lang !== 'en') {
    console.warn('无效的语言值，不保存:', lang);
    return;
  }
  
  // 保存到localStorage
  try {
    localStorage.setItem('language', lang);
    console.log('已保存到localStorage:', localStorage.getItem('language'));
  } catch (e) {
    console.error('保存到localStorage失败:', e);
  }
  
  // 同时保存到cookie，作为备份
  try {
    document.cookie = `language=${lang}; path=/; max-age=${60*60*24*30}`; // 30天过期
    console.log('已保存到cookie');
  } catch (e) {
    console.error('保存到cookie失败:', e);
  }
}

export const useLanguageStore = defineStore('language', () => {
  console.log('初始化语言store，localStorage中的language =', localStorage.getItem('language'), 
              '，类型:', typeof localStorage.getItem('language'));
  
  // 初始化语言，使用增强的持久化读取方法
  const persistedLang = getPersistedLanguage();
  console.log('持久化存储中的语言值:', persistedLang, '，类型:', typeof persistedLang);
  
  const language = ref(persistedLang);
  
  console.log('language.value初始值:', language.value, '，类型:', typeof language.value);
  
  // 切换语言方法
  const toggleLanguage = () => {
    console.log('切换语言，当前语言:', language.value, '，类型:', typeof language.value);
    
    // 切换语言
    const newLang = language.value === 'zh' ? 'en' : 'zh';
    console.log('新语言将设置为:', newLang, '，类型:', typeof newLang);
    
    // 使用增强的持久化保存方法
    persistLanguage(newLang);
    
    // 更新状态
    language.value = newLang;
    console.log('更新后的language.value:', language.value, '，类型:', typeof language.value);
    
    // 发布语言变化事件
    console.log('触发languageChanged事件:', newLang);
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));
    
    // 更新HTML标签的lang属性
    updateHtmlLang();
    
    // 强制触发页面重新渲染
    console.log('Language changed to:', newLang, ', forcing UI refresh');
    
    // 添加一个小延迟，然后触发resize事件，使页面重新计算样式
    setTimeout(() => {
      // 触发窗口resize事件，使页面重新计算布局
      window.dispatchEvent(new Event('resize'));
      
      // 强制重新渲染页面元素
      document.querySelectorAll('.page-content').forEach(el => {
        // 微小改变opacity以触发重绘
        el.style.opacity = '0.99';
        setTimeout(() => {
          el.style.opacity = '1';
        }, 10);
      });
      
      // 尝试重新加载页面内容区域
      const contentElements = document.querySelectorAll('.news-list, .tech-sections, .case-grid');
      contentElements.forEach(el => {
        // 临时添加class触发重绘
        el.classList.add('language-changed');
        setTimeout(() => {
          el.classList.remove('language-changed');
        }, 50);
      });
    }, 50);
    
    return newLang;
  }
  
  // 设置指定语言
  const setLanguage = (lang) => {
    if (lang === 'zh' || lang === 'en') {
      console.log('设置语言为:', lang);
      
      // 使用增强的持久化保存方法
      persistLanguage(lang);
      
      // 更新状态
      language.value = lang;
      
      // 发布语言变化事件
      document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
      
      // 更新HTML标签的lang属性
      updateHtmlLang();
      return lang;
    }
    return language.value;
  }
  
  // 更新HTML标签的lang属性
  const updateHtmlLang = () => {
    const htmlRoot = document.getElementById('htmlRoot') || document.documentElement;
    if (htmlRoot) {
      htmlRoot.setAttribute('lang', language.value === 'zh' ? 'zh-CN' : 'en');
      console.log('已更新HTML lang属性:', htmlRoot.getAttribute('lang'));
    }
    
    // 更新页面标题和描述
    if (language.value === 'zh') {
      document.title = '朗德智能 - 智能无人机与反无人机解决方案提供商';
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        '朗德智能科技是领先的无人机系统及反无人机解决方案提供商，致力于空域安全防护');
    } else {
      document.title = 'Lande Intelligent - Smart Drone and Anti-Drone Solution Provider';
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'Lande Intelligent Technology is a leading provider of drone systems and anti-drone solutions, committed to airspace security protection');
    }
  }
  
  // 语言文字映射
  const languageText = {
    zh: '中文',
    en: 'English'
  }
  
  // 当前语言文字显示
  const currentLanguageText = () => {
    return language.value === 'zh' ? 'EN' : '中'
  }
  
  // 判断是否为中文
  const isZh = () => language.value === 'zh'
  
  // 判断是否为英文
  const isEn = () => language.value === 'en'
  
  // 监听语言变化
  watch(language, (newLang) => {
    console.log('Language changed to:', newLang);
    
    // 确保localStorage和当前语言值一致
    if (localStorage.getItem('language') !== newLang) {
      console.log('修正localStorage中的语言:', localStorage.getItem('language'), '->', newLang);
      persistLanguage(newLang);
    }
  })
  
  return {
    language,
    toggleLanguage,
    setLanguage,
    languageText,
    currentLanguageText,
    isZh,
    isEn
  }
}) 