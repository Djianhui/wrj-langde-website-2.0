<template>
  <div class="language-switcher" :class="{ 'floating': floating }">
    <button 
      class="lang-btn" 
      @click="handleLanguageSwitch" 
      :title="isZh ? '切换到英文' : 'Switch to Chinese'"
    >
      <i class="fas fa-globe"></i>
      <span>{{ currentLanguageText }}</span>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useLanguage } from '@/mixins/language'
import { useRouter } from 'vue-router'
import { useLanguageStore } from '@/store/modules/language'

// 组件属性
const props = defineProps({
  floating: {
    type: Boolean,
    default: false
  }
})

// 使用路由
const router = useRouter()

// 使用语言功能
const { isZh, isEn, toggleLanguage } = useLanguage()
const languageStore = useLanguageStore()

// 防止重复点击
const isProcessing = ref(false)

// 当前语言文本
const currentLanguageText = computed(() => {
  return languageStore.language === 'zh' ? 'EN' : '中'
})

// 处理语言切换，切换后强制刷新
const handleLanguageSwitch = () => {
  if (isProcessing.value) {
    console.log('语言切换正在处理中，忽略重复点击');
    return;
  }
  
  isProcessing.value = true;
  console.log('语言切换按钮被点击，当前语言:', languageStore.language, '，类型:', typeof languageStore.language);
  
  try {
    // 获取当前语言
    const currentLang = languageStore.language;
    // 计算新语言
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    
    console.log(`手动设置localStorage['language']从${currentLang}(${typeof currentLang})到${newLang}(${typeof newLang})`);
    
    // 首先直接设置localStorage和cookie，确保页面刷新时能读取到正确值
    localStorage.setItem('language', newLang);
    document.cookie = `language=${newLang}; path=/; max-age=${60*60*24*30}`; // 30天过期
    
    console.log('设置后的localStorage值:', localStorage.getItem('language'));
    console.log('设置后的cookie:', document.cookie);
    
    // 设置全局变量
    window.__reloadLanguage = newLang;
    
    // 插入强制确保语言设置的脚本
    const forceScript = document.createElement('script');
    forceScript.textContent = `
      // 强制设置语言
      window.__forceLanguage = "${newLang}";
      localStorage.setItem('language', "${newLang}");
      document.cookie = 'language=${newLang}; path=/; max-age=${60*60*24*30}';
      console.log('强制设置语言为:', "${newLang}");
    `;
    document.head.appendChild(forceScript);
    
    // 最后调用store的toggleLanguage，但忽略其结果
    // 只让它更新store状态
    languageStore.setLanguage(newLang);
    console.log('已通过setLanguage更新store状态为:', languageStore.language);
    
    // 最后手动触发页面刷新
    console.log('执行页面刷新');
    setTimeout(() => {
      // 再次确保语言设置正确
      localStorage.setItem('language', newLang);
      window.__reloadLanguage = newLang;
      
      // 然后刷新页面
      window.location.reload();
    }, 100);
    
  } catch (error) {
    console.error('语言切换出错:', error);
    isProcessing.value = false;
  }
}

// 组件挂载后，确保全局可以访问到Vue路由
onMounted(() => {
  // 将路由实例暴露给全局，以便language-refresh.js可以访问
  window.__vueRouter = router;
  
  // 组件挂载时检查语言设置
  console.log('LanguageSwitcher挂载，当前语言:', languageStore.language, '，localStorage中:', localStorage.getItem('language'));
  
  // 确保localStorage和store一致
  if (localStorage.getItem('language') !== languageStore.language) {
    console.log('警告：localStorage和store不一致，同步为:', languageStore.language);
    localStorage.setItem('language', languageStore.language);
  }
})
</script>

<style scoped>
.language-switcher {
  display: inline-block;
}

.language-switcher.floating {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(90deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
  cursor: pointer;
}

.lang-btn:hover {
  background: linear-gradient(90deg, rgba(79, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.3) 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.lang-btn:active {
  transform: translateY(-1px);
}

.lang-btn i {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

/* 添加语言切换动画 */
@keyframes langSwitchFade {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.lang-btn span {
  animation: langSwitchFade 0.3s ease forwards;
}

/* 响应式样式 */
@media (max-width: 767px) {
  .language-switcher.floating {
    bottom: 20px;
    right: 20px;
  }
  
  .lang-btn {
    padding: 10px 18px;
  }
}
</style> 