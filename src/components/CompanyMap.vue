<template>
  <div class="map-container" ref="mapContainer">
    <div class="map-loading" v-if="loading">
      <div class="loading-spinner"></div>
      <span>地图加载中...</span>
    </div>
    <div id="company-map" class="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  address: {
    type: String,
    default: '浙江省杭州市滨江区科技园区创新大厦A座15楼'
  },
  title: {
    type: String,
    default: '杭州朗德智能科技有限公司'
  }
});

const mapContainer = ref(null);
const loading = ref(true);
let map = null;
let marker = null;
let mapScript = null;

// 初始化地图
const initMap = () => {
  // 确保AMap已加载
  if (typeof AMap === 'undefined') {
    setTimeout(initMap, 100);
    return;
  }
  
  loading.value = false;
  
  // 创建地图实例
  map = new AMap.Map('company-map', {
    zoom: 15,
    viewMode: '3D',
    pitch: 30,
    mapStyle: 'amap://styles/dark'
  });
  
  // 使用地理编码服务将地址转换为经纬度
  const geocoder = new AMap.Geocoder();
  geocoder.getLocation(props.address, (status, result) => {
    if (status === 'complete' && result.info === 'OK') {
      const location = result.geocodes[0].location;
      
      // 设置地图中心点
      map.setCenter([location.lng, location.lat]);
      
      // 添加标记
      marker = new AMap.Marker({
        position: [location.lng, location.lat],
        title: props.title,
        animation: 'AMAP_ANIMATION_DROP'
      });
      
      // 创建信息窗体
      const infoWindow = new AMap.InfoWindow({
        content: `<div class="info-window">
                    <h3>${props.title}</h3>
                    <p>${props.address}</p>
                    <a href="https://uri.amap.com/marker?position=${location.lng},${location.lat}&name=${encodeURIComponent(props.title)}" target="_blank">导航到这里</a>
                  </div>`,
        offset: new AMap.Pixel(0, -30)
      });
      
      // 添加标记到地图
      marker.setMap(map);
      
      // 绑定事件
      marker.on('click', () => {
        infoWindow.open(map, marker.getPosition());
      });
      
      // 自动打开信息窗体
      infoWindow.open(map, marker.getPosition());
    } else {
      console.error('地理编码失败');
      
      // 如果地理编码失败，使用杭州市中心作为默认位置
      map.setCenter([120.209947, 30.245853]);
    }
  });
  
  // 添加控件
  map.addControl(new AMap.ToolBar({
    position: 'RB'
  }));
  
  map.addControl(new AMap.Scale());
};

// 加载高德地图API
const loadMapScript = () => {
  return new Promise((resolve, reject) => {
    // 检查是否已加载
    if (window.AMap) {
      resolve();
      return;
    }
    
    // 创建script标签
    mapScript = document.createElement('script');
    mapScript.type = 'text/javascript';
    mapScript.async = true;
    // 使用演示API密钥（实际使用时请替换为您自己的密钥）
    mapScript.src = 'https://webapi.amap.com/maps?v=2.0&key=e8489ef608e4af8f7da2f4e0f3d27a5b&plugin=AMap.Geocoder,AMap.ToolBar,AMap.Scale';
    
    // 加载成功回调
    mapScript.onload = () => {
      resolve();
    };
    
    // 加载失败回调
    mapScript.onerror = () => {
      reject(new Error('高德地图API加载失败'));
    };
    
    // 添加到页面
    document.head.appendChild(mapScript);
  });
};

onMounted(async () => {
  try {
    await loadMapScript();
    initMap();
  } catch (error) {
    console.error('地图加载失败:', error);
    loading.value = false;
  }
});

onBeforeUnmount(() => {
  // 销毁地图实例
  if (map) {
    map.destroy();
    map = null;
  }
});
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map {
  width: 100%;
  height: 100%;
}

.map-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.8);
  color: #fff;
  z-index: 10;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(79, 172, 254, 0.3);
  border-top: 4px solid rgba(79, 172, 254, 1);
  border-radius: 50%;
  margin-bottom: 15px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

:deep(.info-window) {
  padding: 10px;
  max-width: 250px;
}

:deep(.info-window h3) {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #4facfe;
}

:deep(.info-window p) {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #333;
}

:deep(.info-window a) {
  color: #4facfe;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  margin-top: 5px;
}

:deep(.info-window a:hover) {
  text-decoration: underline;
}
</style> 