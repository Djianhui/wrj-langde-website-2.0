import { useLanguageStore } from '@/store/modules/language'
import { useTranslationsStore } from '@/store/modules/translations'

export default {
  install: (app) => {
    // 获取store实例
    const languageStore = useLanguageStore()
    const translationsStore = useTranslationsStore()
    
    // 定义全局属性
    app.config.globalProperties.$language = languageStore.language
    app.config.globalProperties.$isZh = () => languageStore.isZh()
    app.config.globalProperties.$isEn = () => languageStore.isEn()
    
    // 简易翻译函数
    app.config.globalProperties.$t = (key, defaultValue = '') => {
      const ui = translationsStore.getUI(languageStore.language)
      return ui[key] || defaultValue
    }
    
    // 切换语言方法
    app.config.globalProperties.$toggleLanguage = () => {
      languageStore.toggleLanguage()
      return languageStore.language
    }
    
    // 设置特定语言方法
    app.config.globalProperties.$setLanguage = (lang) => {
      languageStore.setLanguage(lang)
      return languageStore.language
    }
    
    // 获取翻译内容的方法
    app.config.globalProperties.$getNavItems = () => translationsStore.getNavItems(languageStore.language)
    app.config.globalProperties.$getFooterData = () => translationsStore.getFooterData(languageStore.language)
    app.config.globalProperties.$getSiteInfo = () => translationsStore.getSiteInfo(languageStore.language)
    app.config.globalProperties.$getTechnologies = () => translationsStore.getTechnologies(languageStore.language)
    app.config.globalProperties.$getCaseCategories = () => translationsStore.getCaseCategories(languageStore.language)
    app.config.globalProperties.$getAboutData = () => translationsStore.getAboutData(languageStore.language)
    app.config.globalProperties.$getJobsData = () => translationsStore.getJobsData(languageStore.language)
    app.config.globalProperties.$getContactForm = () => translationsStore.getContactForm(languageStore.language)
    app.config.globalProperties.$getNewsPage = () => translationsStore.getNewsPage(languageStore.language)
    app.config.globalProperties.$getCasesPage = () => translationsStore.getCasesPage(languageStore.language)
    
    // 添加全局指令
    app.directive('i18n', {
      // 当绑定元素的父组件挂载时调用
      mounted(el, binding) {
        // 获取UI翻译
        const ui = translationsStore.getUI(languageStore.language)
        // 设置元素内容
        el.textContent = ui[binding.value] || binding.value
        
        // 添加语言变化监听器
        const updateText = () => {
          const currentUi = translationsStore.getUI(languageStore.language)
          el.textContent = currentUi[binding.value] || binding.value
        }
        
        // 保存监听器引用以便清除
        el._i18nHandler = () => updateText()
        document.addEventListener('languageChanged', el._i18nHandler)
      },
      // 当包含组件卸载时调用
      unmounted(el) {
        // 移除监听器
        document.removeEventListener('languageChanged', el._i18nHandler)
        delete el._i18nHandler
      }
    })
  }
} 