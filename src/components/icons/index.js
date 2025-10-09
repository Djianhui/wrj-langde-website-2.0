// 自定义SVG图标库索引
export const iconList = {
  // 产品特点图标
  'defense-system': '四位一体防御系统',
  'signal-isolation': '干扰信号隔离', 
  'continuous-work': '可连续工作',
  'scalability': '可扩展性',
  'vehicle-integration': '车载一体化设计',
  'omnidirectional-detection': '全向侦测干扰',
  'defense-distance': '防御距离',
  'drone-types': '防范机型',
  'smart-spraying': '智能喷洒',
  'route-planning': '路径规划',
  'obstacle-avoidance': '智能避障',
  'efficient-operation': '高效作业',
  
  // 应用场景图标
  'airport-security': '机场安防',
  'important-facilities': '重要设施',
  'border-protection': '边境防护',
  'area-monitoring': '区域监控',
  'field-crops': '大田作物',
  'orchard-management': '果园管理',
  'vegetable-planting': '蔬菜种植',
  'economic-crops': '经济作物'
}

// 按功能分类的图标
export const iconCategories = {
  features: {
    defense: ['defense-system', 'signal-isolation', 'continuous-work', 'scalability'],
    vehicle: ['vehicle-integration', 'omnidirectional-detection', 'defense-distance', 'drone-types'],
    agriculture: ['smart-spraying', 'route-planning', 'obstacle-avoidance', 'efficient-operation']
  },
  applications: {
    security: ['airport-security', 'important-facilities', 'border-protection', 'area-monitoring'],
    agriculture: ['field-crops', 'orchard-management', 'vegetable-planting', 'economic-crops']
  }
}

export default iconList