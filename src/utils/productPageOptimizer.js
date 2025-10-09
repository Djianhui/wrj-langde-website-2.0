// 产品详情页批量优化脚本
// 用于统一应用现代化样式和自定义图标

export const modernProductStyles = `
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.product-detail-page {
  padding-top: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
}

.product-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 150px 0 80px;
  color: white;
  position: relative;
  overflow: hidden;
}

.product-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="40" r="0.3" fill="%23ffffff" opacity="0.08"/><circle cx="40" cy="80" r="0.4" fill="%23ffffff" opacity="0.12"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
  pointer-events: none;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.breadcrumb a:hover {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.breadcrumb span {
  margin: 0 12px;
  color: rgba(255, 255, 255, 0.6);
}

.product-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.product-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  position: relative;
  z-index: 1;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.product-image {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.product-image::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 20px;
  opacity: 0.1;
  z-index: -1;
}

.product-image img {
  width: 416px;
  height: 416px;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
  object-fit: cover;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image img:hover {
  transform: scale(1.02);
  box-shadow: 0 35px 80px rgba(59, 130, 246, 0.2);
}

.product-info h2 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.01em;
}

.product-info p {
  font-size: 1.15rem;
  line-height: 1.75;
  color: #475569;
  margin-bottom: 30px;
  font-weight: 400;
}

.section-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 100px;
}

.feature-card {
  text-align: center;
  padding: 50px 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 70px rgba(59, 130, 246, 0.15);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 400;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 100px;
}

.application-item {
  text-align: center;
  padding: 40px 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.application-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.application-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.15);
  color: white;
}

.application-item:hover::before {
  opacity: 1;
}

.application-item span {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover span {
  color: white;
}

.product-contact {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  padding: 70px 60px;
  text-align: center;
  color: white;
  margin: 100px 0;
  position: relative;
  overflow: hidden;
}

.product-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>') repeat;
  pointer-events: none;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-content h2 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.contact-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  font-weight: 400;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 18px 40px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #3730a3;
  backdrop-filter: blur(20px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  color: #3730a3;
  text-decoration: none;
  background: white;
}

/* 图标样式 */
.feature-icon .custom-icon {
  color: white;
}

.feature-icon .custom-icon svg {
  width: 100%;
  height: 100%;
}

.feature-icon .custom-icon svg * {
  stroke: white !important;
}

.feature-icon .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

.application-item .custom-icon {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.application-item:hover .custom-icon svg * {
  stroke: white !important;
  fill: currentColor !important;
}

.application-item:hover .custom-icon svg *[fill="none"] {
  fill: none !important;
}

.application-item:hover .custom-icon svg *[fill="currentColor"] {
  fill: white !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 30px 20px;
    margin: 60px 0;
  }
  
  .product-image img {
    width: 280px;
    height: 240px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 80px;
  }
  
  .feature-card {
    padding: 35px 25px;
  }
  
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .application-item {
    padding: 30px 20px;
  }
  
  .product-title {
    font-size: 2.2rem;
    line-height: 1.2;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  
  .product-contact {
    padding: 50px 30px;
    margin: 80px 0;
  }
  
  .contact-content h2 {
    font-size: 2.2rem;
  }
  
  .btn {
    padding: 16px 32px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .product-hero {
    padding: 120px 0 60px;
  }
  
  .product-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.9rem;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .product-contact {
    padding: 40px 20px;
  }
  
  .contact-content h2 {
    font-size: 1.9rem;
  }
}
`;

// 产品页面图标映射
export const productIconMapping = {
  // 雷达探测系列
  'digital-channelization': '数字信道化处理',
  'precision-direction-finding': '高精度测向', 
  'multi-station-positioning': '多站协同定位',
  'low-power': '低功耗',
  
  // 固定式反制系列
  'full-frequency-coverage': '全频覆盖',
  'jamming-distance': '干扰距离',
  'multi-purpose': '一机多用',
  'scalability': '可扩展性',
  
  // 光电探测系列
  'infrared-imaging': '红外成像',
  'visible-light-imaging': '可见光成像',
  'photoelectric-tracking': '光电跟踪',
  
  // FPV无人机系列
  'high-speed-flight': '高速飞行',
  'racing-performance': '竞技性能',
  
  // 巡检系列
  'inspection-route': '巡检路径',
  'equipment-monitoring': '设备监控',
  'emergency-response': '应急响应',
  
  // 应用场景图标
  'airport-security': '机场安防',
  'important-facilities': '重要设施', 
  'border-protection': '边境防护',
  'area-monitoring': '区域监控'
};