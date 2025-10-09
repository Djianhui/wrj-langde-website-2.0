<template>
  <svg 
    :width="size" 
    :height="size" 
    :viewBox="viewBox" 
    :fill="fill" 
    :stroke="stroke"
    :class="iconClass"
  >
    <!-- 四位一体防御系统图标 -->
    <g v-if="name === 'defense-system'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 干扰信号隔离图标 -->
    <g v-if="name === 'signal-isolation'">
      <rect x="3" y="8" width="18" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 12h10M9 10v4M15 10v4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="6" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M10 4l4 4M14 4l-4 4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 可连续工作图标 -->
    <g v-if="name === 'continuous-work'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 可扩展性图标 -->
    <g v-if="name === 'scalability'">
      <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M9 6h6M9 18h6M6 9v6M18 9v6" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 车载一体化设计图标 -->
    <g v-if="name === 'vehicle-integration'">
      <rect x="2" y="11" width="20" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="7" cy="19" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="17" cy="19" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M2 15h20M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="8" r="2" fill="currentColor"/>
    </g>

    <!-- 全向侦测干扰图标 -->
    <g v-if="name === 'omnidirectional-detection'">
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M12 1v6M12 17v6M23 12h-6M7 12H1" stroke="currentColor" stroke-width="2"/>
      <path d="m19.07 4.93-4.24 4.24M9.17 14.83l-4.24 4.24M19.07 19.07l-4.24-4.24M9.17 9.17L4.93 4.93" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    </g>

    <!-- 防御距离图标 -->
    <g v-if="name === 'defense-distance'">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M12 2v2M12 20v2M22 12h-2M2 12h2" stroke="currentColor" stroke-width="2"/>
      <path d="M18.36 5.64l-1.41 1.41M7.05 16.95l-1.41 1.41M18.36 18.36l-1.41-1.41M7.05 7.05L5.64 5.64" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 防范机型图标 -->
    <g v-if="name === 'drone-types'">
      <path d="M12 2L8 6v6l4 4 4-4V6l-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="10" r="2" fill="currentColor"/>
      <path d="M8 6L4 8v4l4 2M16 6l4 2v4l-4 2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 16v6M10 20h4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 智能喷洒图标 -->
    <g v-if="name === 'smart-spraying'">
      <rect x="8" y="4" width="8" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="8" r="2" fill="currentColor"/>
      <path d="M10 18c0 1.1.9 2 2 2s2-.9 2-2M8 18h8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M6 18l-2 2M18 18l2 2M4 20l2-2M20 20l-2-2" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </g>

    <!-- 路径规划图标 -->
    <g v-if="name === 'route-planning'">
      <circle cx="5" cy="5" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="19" cy="5" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="5" cy="19" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="19" cy="19" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 5h8M5 8v8M19 8v8M8 19h8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 智能避障图标 -->
    <g v-if="name === 'obstacle-avoidance'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="15" y="8" width="4" height="8" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 8c-2 0-4 2-4 4s2 4 4 4" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 高效作业图标 -->
    <g v-if="name === 'efficient-operation'">
      <rect x="2" y="8" width="20" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="6" y="10" width="4" height="4" rx="1" fill="currentColor"/>
      <rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor"/>
      <path d="M12 8v8M12 4v4M12 16v4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="20" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 应用场景图标 -->
    <!-- 机场安防 -->
    <g v-if="name === 'airport-security'">
      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16-.21 2.31-.58 3.43-1.06" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M22 7v3M20 5v7M18 3v11" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 9v6M9 12h6" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 重要设施 -->
    <g v-if="name === 'important-facilities'">
      <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 2L4 8h16l-8-6z" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="10" y="14" width="4" height="6" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="11" cy="16" r="1" fill="currentColor"/>
      <rect x="6" y="11" width="2" height="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <rect x="16" y="11" width="2" height="2" stroke="currentColor" stroke-width="1" fill="none"/>
    </g>

    <!-- 边境防护 -->
    <g v-if="name === 'border-protection'">
      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 区域监控 -->
    <g v-if="name === 'area-monitoring'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 1v6M12 17v6M23 12h-6M7 12H1" stroke="currentColor" stroke-width="1"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </g>

    <!-- 农业应用场景图标 -->
    <!-- 大田作物 -->
    <g v-if="name === 'field-crops'">
      <path d="M12 2v20M8 6c0 4 2 6 4 6s4-2 4-6" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M6 10c0 3 1.5 4.5 3 4.5s3-1.5 3-4.5M15 10c0 3 1.5 4.5 3 4.5s3-1.5 3-4.5" stroke="currentColor" stroke-width="2" fill="none"/>
      <ellipse cx="12" cy="20" rx="8" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 果园管理 -->
    <g v-if="name === 'orchard-management'">
      <circle cx="12" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 14v8M8 20h8" stroke="currentColor" stroke-width="2"/>
      <circle cx="10" cy="6" r="2" fill="currentColor"/>
      <circle cx="14" cy="6" r="2" fill="currentColor"/>
      <circle cx="12" cy="10" r="2" fill="currentColor"/>
      <path d="M12 2c-2 0-3 1-3 2s1 2 3 2 3-1 3-2-1-2-3-2z" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 蔬菜种植 -->
    <g v-if="name === 'vegetable-planting'">
      <path d="M12 22v-8M8 18c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 2c-2 0-3 1-3 3v9h6V5c0-2-1-3-3-3z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="5" r="1" fill="currentColor"/>
      <path d="M9 8h6M9 11h6" stroke="currentColor" stroke-width="1"/>
      <ellipse cx="12" cy="20" rx="6" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 雷达探测相关图标 -->
    <!-- 数字信道化处理图标 -->
    <g v-if="name === 'digital-channelization'">
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 7v10M11 7v10M15 7v10M19 7v10" stroke="currentColor" stroke-width="1"/>
      <circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M10 4h4M12 2v4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 高精度测向图标 -->
    <g v-if="name === 'precision-direction-finding'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M12 2v4M12 18v4M2 12h4M22 12h-4" stroke="currentColor" stroke-width="2"/>
      <path d="M12 6l6 6-6 6V6z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    </g>

    <!-- 多站协同定位图标 -->
    <g v-if="name === 'multi-station-positioning'">
      <circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="18" cy="6" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="18" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M9 6l6 0M6 9l6 6M18 9l-6 6" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M10 10l4 4M14 10l-4 4" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 低功耗图标 -->
    <g v-if="name === 'low-power'">
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="8" y="14" width="8" height="4" rx="1" fill="currentColor"/>
      <path d="M12 8v2M10 10h4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="2" r="1" fill="currentColor"/>
      <path d="M10 1h4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 固定式反制设备相关图标 -->
    <!-- 全频覆盖图标 -->
    <g v-if="name === 'full-frequency-coverage'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 干扰距离图标 -->
    <g v-if="name === 'jamming-distance'">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M16.24 7.76a6 6 0 0 1 0 8.49" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14M7.76 7.76a6 6 0 0 0 0 8.49" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 一机多用图标 -->
    <g v-if="name === 'multi-purpose'">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <rect x="14" y="6" width="4" height="4" rx="1" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M6 14h12M6 17h8" stroke="currentColor" stroke-width="1"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 光电探测相关图标 -->
    <!-- 红外成像图标 -->
    <g v-if="name === 'infrared-imaging'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" stroke-width="2"/>
      <path d="M16.95 7.05l1.41-1.41M5.64 18.36l1.41-1.41M7.05 7.05L5.64 5.64M18.36 18.36l-1.41-1.41" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 可见光成像图标 -->
    <g v-if="name === 'visible-light-imaging'">
      <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <path d="M8 5v2M16 5v2" stroke="currentColor" stroke-width="2"/>
      <rect x="6" y="19" width="12" height="2" rx="1" stroke="currentColor" stroke-width="1" fill="none"/>
    </g>

    <!-- 光电跟踪图标 -->
    <g v-if="name === 'photoelectric-tracking'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 4l2 2-2 2-2-2z" fill="currentColor"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 15v5M9 18h6" stroke="currentColor" stroke-width="2"/>
      <path d="M8 8l8 8" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    </g>

    <!-- FPV穿越无人机相关图标 -->
    <!-- 高速飞行图标 -->
    <g v-if="name === 'high-speed-flight'">
      <path d="M12 2L8 6v12l4 4 4-4V6l-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M4 10l4 2-4 2M20 10l-4 2 4 2" stroke="currentColor" stroke-width="2"/>
      <path d="M8 8l-2-2M16 8l2-2M8 16l-2 2M16 16l2 2" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 竞技性能图标 -->
    <g v-if="name === 'racing-performance'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 6l3 6-3 6-3-6z" fill="currentColor"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M8 4l8 8-8 8" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 巡检无人机相关图标 -->
    <!-- 巡检路径图标 -->
    <g v-if="name === 'inspection-route'">
      <path d="M3 7l6 0M17 7l4 0M3 12l18 0M3 17l12 0" stroke="currentColor" stroke-width="2"/>
      <circle cx="6" cy="7" r="2" fill="currentColor"/>
      <circle cx="18" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="17" r="2" fill="currentColor"/>
      <path d="M20 5v14M22 7l-2-2-2 2" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 设备监控图标 -->
    <g v-if="name === 'equipment-monitoring'">
      <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 8l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="9" y="18" width="6" height="2" rx="1" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 16v2" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 应急响应图标 -->
    <g v-if="name === 'emergency-response'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 4l8 8M16 4l-8 8" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 右箭头图标 -->
    <g v-if="name === 'chevron-right'">
      <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 无线电波图标 -->
    <g v-if="name === 'radio-waves'">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M16.24 7.76a6 6 0 0 1 0 8.49" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14M7.76 7.76a6 6 0 0 0 0 8.49" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 目标精度图标 -->
    <g v-if="name === 'target-precision'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 方向查找器图标 -->
    <g v-if="name === 'direction-finder'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 4l4 8-4-2-4 2z" fill="currentColor"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 无人机识别图标 -->
    <g v-if="name === 'drone-recognition'">
      <path d="M12 2L8 6v6l4 4 4-4V6l-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="10" r="2" fill="currentColor"/>
      <path d="M8 6L4 8v4l4 2M16 6l4 2v4l-4 2" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="10" y="15" width="4" height="2" rx="1" fill="currentColor"/>
    </g>

    <!-- 远距离探测图标 -->
    <g v-if="name === 'long-range-detection'">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 自适应学习图标 -->
    <g v-if="name === 'adaptive-learning'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 多目标跟踪图标 -->
    <g v-if="name === 'multi-target-tracking'">
      <circle cx="6" cy="8" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="18" cy="8" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="16" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 8l8 8M16 8l-8 8M6 10v4M18 10v4" stroke="currentColor" stroke-width="1"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </g>

    <!-- ADS-B监视图标 -->
    <g v-if="name === 'ads-b-monitoring'">
      <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12h8M10 10v4M14 10v4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M10 2h4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 夜视图标 -->
    <g v-if="name === 'night-vision'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M16 8l-4 4-4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 城市安全图标 -->
    <g v-if="name === 'urban-security'">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="11" cy="16" r="1" fill="currentColor"/>
    </g>

    <!-- 目标跟踪图标 -->
    <g v-if="name === 'target-tracking'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M12 4l2 2-2 2-2-2z" fill="currentColor"/>
    </g>

    <!-- 实时监控图标 -->
    <g v-if="name === 'real-time-monitoring'">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <path d="M17 2l-10 0M17 22l-10 0" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 矢量机动性图标 -->
    <g v-if="name === 'vector-mobility'">
      <path d="M12 2L8 6v12l4 4 4-4V6l-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M4 10l4 2-4 2M20 10l-4 2 4 2" stroke="currentColor" stroke-width="2"/>
      <path d="M8 8l-3-3M16 8l3-3M8 16l-3 3M16 16l3 3" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 紧凑便携图标 -->
    <g v-if="name === 'compact-portable'">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M8 10h8M8 14h8" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 昼夜巡查图标 -->
    <g v-if="name === 'day-night-patrol'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1"/>
      <circle cx="8" cy="8" r="2" fill="currentColor"/>
      <circle cx="16" cy="16" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 8l2 2-2 2-2-2z" fill="currentColor"/>
    </g>

    <!-- 自主飞行图标 -->
    <g v-if="name === 'autonomous-flight'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 安防巡逻图标 -->
    <g v-if="name === 'security-patrol'">
      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 9v6M9 12h6" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 环境监测图标 -->
    <g v-if="name === 'environmental-monitoring'">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </g>

    <!-- 基础设施巡检图标 -->
    <g v-if="name === 'infrastructure-inspection'">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 2L3 8h18l-9-6z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="14" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12h8M8 17h8" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 极速爬升图标 -->
    <g v-if="name === 'rapid-ascent'">
      <path d="M12 2L8 6v12l4 4 4-4V6l-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 6v12M9 9l3-3 3 3" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="18" r="2" fill="currentColor"/>
    </g>

    <!-- 车机联动图标 -->
    <g v-if="name === 'vehicle-linkage'">
      <rect x="2" y="11" width="20" height="8" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="7" cy="19" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="17" cy="19" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 2L8 6v5h8V6l-4-4z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M10 8h4" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 实战验证图标 -->
    <g v-if="name === 'combat-tested'">
      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="8" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 机动灵活图标 -->
    <g v-if="name === 'mobile-flexible'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" stroke-width="1"/>
    </g>

    <!-- 灭火救援图标 -->
    <g v-if="name === 'fire-fighting'">
      <path d="M12 2c3 0 6 2 6 6 0 4-3 8-6 12-3-4-6-8-6-12 0-4 3-6 6-6z" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="8" r="2" fill="currentColor"/>
      <path d="M8 16l8 0M10 19l4 0" stroke="currentColor" stroke-width="2"/>
    </g>

    <!-- 高层建筑救援图标 -->
    <g v-if="name === 'high-rise-emergency'">
      <rect x="8" y="2" width="8" height="20" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M6 22h12M10 6h4M10 10h4M10 14h4M10 18h4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M4 18l4-4 4 4" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>

    <!-- 快速响应图标 -->
    <g v-if="name === 'rapid-response'">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" stroke-width="2" fill="none"/>
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  fill: {
    type: String,
    default: 'none'
  },
  stroke: {
    type: String,
    default: 'currentColor'
  },
  className: {
    type: String,
    default: ''
  }
})

const viewBox = computed(() => '0 0 24 24')
const iconClass = computed(() => `custom-icon ${props.className}`)
</script>

<style scoped>
.custom-icon {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: inherit;
}

.custom-icon:hover {
  transform: scale(1.05);
}

/* 确保SVG继承父元素的颜色 */
.custom-icon svg {
  color: inherit;
}

/* 应用场景项目悬停时的白色图标效果 */
.application-item:hover .custom-icon {
  color: white;
}

.application-item:hover .custom-icon svg * {
  stroke: white !important;
  fill: white !important;
}

.application-item:hover .custom-icon svg *[fill="none"] {
  fill: none !important;
}

.application-item:hover .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

/* 特点卡片图标样式 */
.feature-icon .custom-icon {
  color: white;
}

.feature-icon .custom-icon svg * {
  stroke: white;
}

.feature-icon .custom-icon svg *[fill="currentColor"] {
  fill: white;
}
</style>