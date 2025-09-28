import { computed, inject } from 'vue'
import { useLanguageStore } from '@/store/modules/language'
import { useTranslationsStore } from '@/store/modules/translations'
import { useContentStore } from '@/store/modules/content'
import { useContactStore } from '@/store/modules/contact'
import { useCasesStore } from '@/store/modules/cases'

/**
 * 创建组件使用的语言相关功能
 * 在组件中使用: const { isZh, isEn, toggleLanguage, currentLanguage } = useLanguage()
 */
export function useLanguage() {
  // 使用store
  const languageStore = useLanguageStore()
  const translationsStore = useTranslationsStore()
  const contentStore = useContentStore()
  const contactStore = useContactStore()
  const casesStore = useCasesStore()
  
  // 尝试从provide/inject机制获取，如果没有则直接使用store
  const injectedLanguage = inject('currentLanguage', null)
  const injectedIsZh = inject('isZh', null)
  const injectedIsEn = inject('isEn', null)
  
  // 当前语言
  const currentLanguage = injectedLanguage || computed(() => languageStore.language)
  
  // 是否为中文
  const isZh = injectedIsZh || computed(() => languageStore.isZh())
  
  // 是否为英文
  const isEn = injectedIsEn || computed(() => languageStore.isEn())
  
  // 切换语言
  const toggleLanguage = () => languageStore.toggleLanguage()
  
  // 设置特定语言
  const setLanguage = (lang) => languageStore.setLanguage(lang)
  
  // 获取当前语言的UI文本
  const getUI = () => translationsStore.getUI(currentLanguage.value)
  
  // 获取当前语言的导航项
  const getNavItems = () => translationsStore.getNavItems(currentLanguage.value)
  
  // 获取当前语言的页脚数据
  const getFooterData = () => translationsStore.getFooterData(currentLanguage.value)
  
  // 获取当前语言的网站基本信息
  const getSiteInfo = () => translationsStore.getSiteInfo(currentLanguage.value)
  
  // 获取当前语言的技术数据
  const getTechnologies = () => translationsStore.getTechnologies(currentLanguage.value)
  
  // 获取当前语言的案例分类数据
  const getCaseCategories = () => translationsStore.getCaseCategories(currentLanguage.value)
  
  // 获取当前语言的关于我们数据
  const getAboutData = () => translationsStore.getAboutData(currentLanguage.value)
  
  // 获取当前语言的招聘信息数据
  const getJobsData = () => translationsStore.getJobsData(currentLanguage.value)
  
  // 获取当前语言的联系表单文本
  const getContactForm = () => translationsStore.getContactForm(currentLanguage.value)
  
  // 获取当前语言的新闻中心页面文本
  const getNewsPage = () => translationsStore.getNewsPage(currentLanguage.value)
  
  // 获取当前语言的案例页面文本
  const getCasesPage = () => translationsStore.getCasesPage(currentLanguage.value)
  
  // 新增：从contentStore获取数据
  const getCurrentSiteInfo = computed(() => contentStore.currentSiteInfo)
  const getCurrentTechnologies = computed(() => contentStore.currentTechnologies)
  const getCurrentSolutions = computed(() => contentStore.currentSolutions)
  const getCurrentCases = computed(() => contentStore.currentCases)
  const getCurrentNews = computed(() => contentStore.currentNews)
  const getCurrentAboutData = computed(() => contentStore.currentAboutData)
  const getCurrentJobs = computed(() => contentStore.currentJobs)
  
  // 新增：从contactStore获取表单翻译
  const getFormTranslations = computed(() => contactStore.formTranslations)
  
  // 新增：从casesStore获取案例数据
  const getAllCases = computed(() => casesStore.getAllCases)
  const getCaseById = (id) => casesStore.getCaseById(id)
  
  // 简易翻译函数，适用于简单文本
  const t = (key, defaultValue = '') => {
    const ui = getUI()
    return ui[key] || defaultValue
  }
  
  return {
    currentLanguage,
    isZh,
    isEn,
    toggleLanguage,
    setLanguage,
    t,
    getUI,
    getNavItems,
    getFooterData,
    getSiteInfo,
    getTechnologies,
    getCaseCategories,
    getAboutData,
    getJobsData,
    getContactForm,
    getNewsPage,
    getCasesPage,
    // 新增的内容store数据
    getCurrentSiteInfo,
    getCurrentTechnologies,
    getCurrentSolutions,
    getCurrentCases,
    getCurrentNews,
    getCurrentAboutData,
    getCurrentJobs,
    // 新增的联系表单相关
    getFormTranslations,
    // 新增的案例数据
    getAllCases,
    getCaseById
  }
} 