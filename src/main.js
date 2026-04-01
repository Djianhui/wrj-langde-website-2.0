import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/responsive.css'

// 导入 Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// 导入语言相关的store和插件
import { useLanguageStore } from './store/modules/language'
import { useTranslationsStore } from './store/modules/translations'
import i18nPlugin from './plugins/i18n'

// 检查并打印localStorage中的值
function checkLocalStorage() {
  console.group('【localStorage检查】');
  try {
    // 获取当前所有keys
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    console.log('所有localStorage键:', keys);
    
    // 检查language项
    const langValue = localStorage.getItem('language');
    console.log('language值:', langValue);
    console.log('language类型:', typeof langValue);
    
    // 检查值是否正确
    if (langValue !== 'zh' && langValue !== 'en') {
      console.warn('language值无效! 期望"zh"或"en", 而实际值是:', langValue);
    } else {
      console.log('language值有效:', langValue);
    }
  } catch (error) {
    console.error('检查localStorage出错:', error);
  }
  console.groupEnd();
}

// 调试信息：启动时检查localStorage中的语言设置
console.log('应用启动：localStorage中的language =', localStorage.getItem('language'));
checkLocalStorage();

// 预加载关键图片 - 减少预加载的图片数量，只保留最关键的
const preloadImages = () => {
  const imagesToPreload = [
    // 只预加载最关键的图片
    '/images/tech/detection.jpg',
    '/images/tech/jamming.jpg'
  ]
  
  return Promise.all(imagesToPreload.map(src => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = img.onerror = resolve
      img.src = src
    })
  }))
}

// 在应用创建前，先初始化语言设置
console.log('----------------- Vue应用初始化 ------------------');

// 优先获取强制设置的语言变量
if (window.__forceLanguage) {
  console.log('检测到强制语言变量:', window.__forceLanguage);
  localStorage.setItem('language', window.__forceLanguage);
  document.cookie = `language=${window.__forceLanguage}; path=/; max-age=${60*60*24*30}`;
}
// 其次获取全局变量中的语言设置
else if (window.__reloadLanguage) {
  console.log('检测到全局语言变量:', window.__reloadLanguage);
}

// 检查所有可能的语言来源
const checkLanguageSources = () => {
  // 首先检查强制语言变量
  const forceLang = window.__forceLanguage;
  if (forceLang === 'zh' || forceLang === 'en') {
    console.log('强制使用语言:', forceLang);
    return forceLang;
  }
  
  // 从localStorage读取
  const localStorageLang = (() => {
    try {
      const lang = localStorage.getItem('language');
      console.log('localStorage中的语言:', lang, '，类型:', typeof lang);
      return lang;
    } catch (e) {
      console.error('读取localStorage失败:', e);
      return null;
    }
  })();
  
  // 从cookie读取
  const cookieLang = (() => {
    try {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'language') {
          console.log('cookie中的语言:', value, '，类型:', typeof value);
          return value;
        }
      }
      return null;
    } catch (e) {
      console.error('读取cookie失败:', e);
      return null;
    }
  })();
  
  // 从全局变量读取
  const globalLang = window.__reloadLanguage;
  console.log('全局变量中的语言:', globalLang, '，类型:', typeof globalLang);
  
  // 从HTML标签读取
  const htmlLang = document.documentElement.lang;
  console.log('HTML lang属性:', htmlLang, '，类型:', typeof htmlLang);
  
  // 输出所有来源
  console.table({
    'forceLang': forceLang,
    'localStorage': localStorageLang,
    'cookie': cookieLang,
    'globalVar': globalLang,
    'htmlLang': htmlLang
  });
  
  // 决定使用哪个语言值
  let finalLang;
  
  if (globalLang === 'zh' || globalLang === 'en') {
    finalLang = globalLang;
    console.log('使用全局变量中的语言:', finalLang);
  }
  else if (localStorageLang === 'zh' || localStorageLang === 'en') {
    finalLang = localStorageLang;
    console.log('使用localStorage中的语言:', finalLang);
  }
  else if (cookieLang === 'zh' || cookieLang === 'en') {
    finalLang = cookieLang;
    console.log('使用cookie中的语言:', finalLang);
  }
  else {
    // 默认中文
    finalLang = 'zh';
    console.log('无有效语言设置，使用默认语言:', finalLang);
  }
  
  return finalLang;
};

// 检查并保存语言设置
const finalLang = checkLanguageSources();
console.log('最终确定的语言:', finalLang);

// 确保语言设置正确保存
try {
  localStorage.setItem('language', finalLang);
  document.cookie = `language=${finalLang}; path=/; max-age=${60*60*24*30}`;
  window.__reloadLanguage = finalLang;
  console.log('已更新所有语言来源为:', finalLang);
} catch (e) {
  console.error('保存语言设置失败:', e);
}

// 创建Vue应用实例
const app = createApp(App)

// 创建并注册Pinia
const pinia = createPinia()
app.use(pinia)

// 初始化语言store
const languageStore = useLanguageStore(pinia)
const translationsStore = useTranslationsStore(pinia)

// 调试信息：初始化languageStore后的language值
console.log('languageStore初始化后的language值:', languageStore.language, '，类型:', typeof languageStore.language);
console.log('从store获取语言是否为中文:', languageStore.isZh(), '，是否为英文:', languageStore.isEn());

// 注册路由和i18n插件
app.use(router)
app.use(i18nPlugin)

// 启动应用 - 减少加载时间
const initApp = async () => {
  try {
    // 再次检查语言状态
    console.log('应用挂载前再次检查语言状态:');
    checkLocalStorage();
    console.log('此时store中的language:', languageStore.language, '，类型:', typeof languageStore.language);
    
    // 监听语言变化事件
    document.addEventListener('languageChanged', (event) => {
      console.log('【主应用】检测到languageChanged事件:', event.detail, '，类型:', typeof event.detail);
      console.log('【主应用】事件触发时localStorage值:', localStorage.getItem('language'), '，类型:', typeof localStorage.getItem('language'));
      console.log('【主应用】事件触发时store值:', languageStore.language, '，类型:', typeof languageStore.language);
    });
    
    // 挂载应用，不等待图片预加载
    app.mount('#app')
    
    // 在后台预加载图片
    preloadImages().catch(error => {
      console.error('图片预加载失败:', error)
    })
    
    // 隐藏初始加载界面
    const initLoading = document.getElementById('init-loading')
    if (initLoading) {
      initLoading.style.opacity = '0'
      initLoading.style.transition = 'opacity 0.3s' // 缩短过渡时间
      setTimeout(() => {
        initLoading.style.display = 'none'
      }, 300) // 缩短等待时间
    }
  } catch (error) {
    console.error('应用初始化失败:', error)
    // 出错时也挂载应用，确保用户能看到界面
    app.mount('#app')
  }
}

// 执行初始化
initApp() 