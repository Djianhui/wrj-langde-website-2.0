<template>
  <div class="scene-container" ref="sceneContainer">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>{{ isZh ? '加载中...' : 'Loading...' }}</p>
    </div>
    <div v-if="error" class="error-overlay">
      <p>{{ isZh ? '加载失败，请刷新页面重试' : 'Loading failed, please refresh the page' }}</p>
    </div>
    <div class="scene-overlay">
      <div class="main-title">
        <h1>{{ isZh ? '智能全域电磁安防一体化平台' : 'Intelligent all-domain electromagnetic security integrated platform' }}</h1>
        <!-- <p>{{ isZh ? '领先的反无人机系统及反无人机解决方案提供商' : 'Leading provider of anti-drone systems and solutions' }}</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import * as THREE from 'three';
import { useLanguage } from '@/mixins/language';

// 使用语言功能
const { isZh, isEn } = useLanguage();

// 状态管理
const isLoading = ref(true);
const error = ref(false);
const sceneContainer = ref(null);

let scene, camera, renderer, clock;
let drone, radar, defenseSystem, cityModel;
let radarWave, dataOverlay;

// 动画阶段
const PHASE = {
  DRONE_APPROACH: 0,
  RADAR_DETECT: 1,
  DEFENSE_ACTIVATE: 2
};
let currentPhase = PHASE.DRONE_APPROACH;
let phaseTime = 0;

// 设备检测
const isMobile = computed(() => {
  return window.innerWidth <= 768;
});

// 初始化3D场景
const initScene = () => {
  // 创建场景
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a192f, 0.001);
  
  // 创建相机
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.set(0, 100, 300);
  camera.lookAt(0, 0, 0);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: !isMobile.value, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(isMobile.value ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
  renderer.setClearColor(0x0a192f, 1);
  
  // 添加渲染器到DOM
  if (sceneContainer.value) {
    sceneContainer.value.appendChild(renderer.domElement);
  }
  
  // 初始化时钟
  clock = new THREE.Clock();
  
  // 添加光源
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // 添加聚光灯
  const spotLight = new THREE.SpotLight(0x38bdf8, 2);
  spotLight.position.set(0, 200, 100);
  spotLight.angle = Math.PI / 6;
  spotLight.penumbra = 0.2;
  spotLight.distance = 500;
  spotLight.castShadow = isMobile.value ? false : true;
  scene.add(spotLight);
  
  // 创建城市天际线
  createCityscape();
  
  // 创建雷达系统
  createRadarSystem();
  
  // 创建无人机
  createDrone();
  
  // 创建防御系统
  createDefenseSystem();
  
  // 创建数据可视化效果
  createDataVisualizations();
  
  // 设置事件监听器
  window.addEventListener('resize', onWindowResize);
};

// 创建城市天际线
const createCityscape = () => {
  cityModel = new THREE.Group();
  
  // 创建简单的建筑物
  const buildingGeometries = [
    new THREE.BoxGeometry(20, 100, 20),
    new THREE.BoxGeometry(30, 60, 30),
    new THREE.BoxGeometry(15, 120, 15),
    new THREE.BoxGeometry(25, 80, 25),
    new THREE.BoxGeometry(40, 40, 40)
  ];
  
  const buildingMaterial = new THREE.MeshPhongMaterial({
    color: 0x0a192f,
    emissive: 0x103a65,
    specular: 0x3498db,
    shininess: 30
  });

  // 添加多个建筑物，形成城市轮廓
  // 移动端减少建筑物数量以提高性能
  const buildingCount = isMobile.value ? 20 : 50;
  
  for (let i = 0; i < buildingCount; i++) {
    const geoIndex = Math.floor(Math.random() * buildingGeometries.length);
    const building = new THREE.Mesh(buildingGeometries[geoIndex], buildingMaterial);
    
    // 随机位置
    building.position.x = (Math.random() - 0.5) * 500;
    building.position.z = (Math.random() - 0.5) * 500;
    building.position.y = buildingGeometries[geoIndex].parameters.height / 2 - 50;
    
    // 添加窗户效果（网格材质）
    // 移动端减少窗户数量以提高性能
    if (!isMobile.value) {
      const windowMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.5 + Math.random() * 0.5
      });
      
      const windowSize = 2;
      const windowSpacing = 4;
      const windowRows = Math.floor(buildingGeometries[geoIndex].parameters.height / windowSpacing);
      const windowCols = Math.floor(buildingGeometries[geoIndex].parameters.width / windowSpacing);
      
      for (let row = 0; row < windowRows; row++) {
        for (let col = 0; col < windowCols; col++) {
          // 只在一些位置添加窗户
          if (Math.random() > 0.3) {
            const windowGeo = new THREE.BoxGeometry(windowSize, windowSize, 1);
            const windowMesh = new THREE.Mesh(windowGeo, windowMaterial);
            
            windowMesh.position.x = (col * windowSpacing) - (buildingGeometries[geoIndex].parameters.width / 2) + windowSpacing;
            windowMesh.position.y = (row * windowSpacing) - (buildingGeometries[geoIndex].parameters.height / 2) + windowSpacing;
            windowMesh.position.z = buildingGeometries[geoIndex].parameters.depth / 2 + 0.1;
            
            building.add(windowMesh);
          }
        }
      }
    }
    
    cityModel.add(building);
  }
  
  // 添加地面
  const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
  const groundMaterial = new THREE.MeshPhongMaterial({
    color: 0x0f172a,
    emissive: 0x071426,
    side: THREE.DoubleSide
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -50;
  cityModel.add(ground);
  
  // 添加城市网格效果
  // 移动端减少网格线密度以提高性能
  const gridHelper = new THREE.GridHelper(1000, isMobile.value ? 20 : 50, 0x38bdf8, 0x103a65);
  gridHelper.position.y = -49.9;
  cityModel.add(gridHelper);
  
  scene.add(cityModel);
};

// 创建雷达系统
const createRadarSystem = () => {
  radar = new THREE.Group();
  
  // 雷达基座
  const baseGeometry = new THREE.CylinderGeometry(20, 25, 10, isMobile.value ? 16 : 32);
  const baseMaterial = new THREE.MeshPhongMaterial({
    color: 0x78716c,
    emissive: 0x292524,
    specular: 0xffffff
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  radar.add(base);
  
  // 雷达碟形天线
  const dishGeometry = new THREE.SphereGeometry(15, isMobile.value ? 16 : 32, isMobile.value ? 8 : 16, 0, Math.PI);
  const dishMaterial = new THREE.MeshPhongMaterial({
    color: 0xf8fafc,
    emissive: 0x94a3b8,
    side: THREE.DoubleSide
  });
  const dish = new THREE.Mesh(dishGeometry, dishMaterial);
  dish.rotation.x = Math.PI / 2;
  dish.position.y = 10;
  radar.add(dish);
  
  // 雷达天线
  const antennaGeometry = new THREE.CylinderGeometry(0.5, 0.5, 20, 8);
  const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0xf8fafc });
  const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
  antenna.position.y = 20;
  radar.add(antenna);
  
  // 雷达波效果
  const radarWaveGeometry = new THREE.RingGeometry(5, 60, isMobile.value ? 16 : 32);
  const radarWaveMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0
  });
  radarWave = new THREE.Mesh(radarWaveGeometry, radarWaveMaterial);
  radarWave.rotation.x = -Math.PI / 2;
  radarWave.position.y = 5;
  radar.add(radarWave);
  
  // 设置雷达位置
  radar.position.set(100, -45, -50);
  scene.add(radar);
};

// 创建无人机
const createDrone = () => {
  drone = new THREE.Group();
  
  // 无人机主体
  const bodyGeometry = new THREE.BoxGeometry(10, 2, 10);
  const bodyMaterial = new THREE.MeshPhongMaterial({
    color: 0x1e293b,
    emissive: 0x334155,
    specular: 0xffffff
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  drone.add(body);
  
  // 无人机旋翼
  const rotorGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 8);
  const rotorMaterial = new THREE.MeshPhongMaterial({ color: 0xdc2626 });
  
  // 创建四个旋翼
  const rotorPositions = [
    { x: -5, y: 1, z: -5 },
    { x: 5, y: 1, z: -5 },
    { x: -5, y: 1, z: 5 },
    { x: 5, y: 1, z: 5 }
  ];
  
  rotorPositions.forEach(pos => {
    const rotor = new THREE.Mesh(rotorGeometry, rotorMaterial);
    rotor.position.set(pos.x, pos.y, pos.z);
    drone.add(rotor);
    
    // 旋翼叶片
    const bladeGeometry = new THREE.BoxGeometry(8, 0.2, 0.5);
    const bladeMaterial = new THREE.MeshPhongMaterial({ color: 0xf8fafc });
    const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
    blade.position.y = 0.5;
    rotor.add(blade);
  });
  
  // 无人机摄像头
  const cameraGeometry = new THREE.SphereGeometry(1, 16, 16);
  const cameraMaterial = new THREE.MeshPhongMaterial({ color: 0x0ea5e9 });
  const droneCamera = new THREE.Mesh(cameraGeometry, cameraMaterial);
  droneCamera.position.set(0, 0, -5);
  drone.add(droneCamera);
  
  // 设置无人机初始位置
  drone.position.set(-400, 100, -200);
  drone.rotation.y = Math.PI / 4;
  scene.add(drone);
};

// 创建防御系统
const createDefenseSystem = () => {
  defenseSystem = new THREE.Group();
  
  // 防御系统基座
  const baseGeometry = new THREE.BoxGeometry(20, 5, 20);
  const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x475569 });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  defenseSystem.add(base);
  
  // 防御系统炮塔
  const turretGeometry = new THREE.CylinderGeometry(5, 8, 10, isMobile.value ? 8 : 16);
  const turretMaterial = new THREE.MeshPhongMaterial({
    color: 0x0f172a,
    emissive: 0x1e293b,
    specular: 0xf8fafc
  });
  const turret = new THREE.Mesh(turretGeometry, turretMaterial);
  turret.position.y = 7.5;
  defenseSystem.add(turret);
  
  // 防御系统炮管
  const barrelGeometry = new THREE.CylinderGeometry(2, 2, 15, isMobile.value ? 8 : 16);
  const barrelMaterial = new THREE.MeshPhongMaterial({ color: 0x64748b });
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
  barrel.rotation.x = -Math.PI / 4;
  barrel.position.set(0, 15, -5);
  defenseSystem.add(barrel);
  
  // 防御系统指示灯
  const lightGeometry = new THREE.SphereGeometry(1, 16, 16);
  const lightMaterial = new THREE.MeshBasicMaterial({
    color: 0xef4444
  });
  const light = new THREE.Mesh(lightGeometry, lightMaterial);
  light.position.set(0, 15, 0);
  defenseSystem.add(light);
  
  // 设置防御系统位置
  defenseSystem.position.set(-80, -50, 50);
  scene.add(defenseSystem);
};

// 创建数据可视化效果
const createDataVisualizations = () => {
  dataOverlay = new THREE.Group();
  
  // 创建雷达显示屏
  const screenGeometry = new THREE.PlaneGeometry(50, 50);
  const screenTexture = createRadarScreenTexture();
  const screenMaterial = new THREE.MeshBasicMaterial({
    map: screenTexture,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
  });
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(100, 20, -50);
  screen.rotation.y = Math.PI / 4;
  dataOverlay.add(screen);
  
  // 创建信号波纹
  for (let i = 0; i < 3; i++) {
    const waveGeometry = new THREE.RingGeometry(5 + i * 10, 8 + i * 10, isMobile.value ? 16 : 32);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3 - i * 0.1
    });
    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.position.set(0, 100 + i * 10, 0);
    wave.rotation.x = Math.PI / 2;
    dataOverlay.add(wave);
  }
  
  scene.add(dataOverlay);
};

// 创建雷达屏幕纹理
const createRadarScreenTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = isMobile.value ? 128 : 256;
  canvas.height = isMobile.value ? 128 : 256;
  const context = canvas.getContext('2d');
  
  // 背景
  context.fillStyle = '#0f172a';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // 网格线
  context.strokeStyle = '#38bdf8';
  context.lineWidth = 1;
  
  // 绘制网格
  context.beginPath();
  for (let i = 0; i < canvas.width; i += isMobile.value ? 64 : 32) {
    context.moveTo(i, 0);
    context.lineTo(i, canvas.height);
    context.moveTo(0, i);
    context.lineTo(canvas.width, i);
  }
  context.stroke();
  
  // 绘制雷达扫描线
  context.strokeStyle = '#4ade80';
  context.lineWidth = 2;
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.4, 0, Math.PI / 2);
  context.stroke();
  
  // 绘制雷达中心
  context.fillStyle = '#38bdf8';
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
  context.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// 窗口大小调整
const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // 更新渲染器像素比
  renderer.setPixelRatio(isMobile.value ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
};

// 动画更新
const animate = () => {
  const delta = clock.getDelta();
  phaseTime += delta;
  
  // 根据当前阶段执行不同的动画
  switch (currentPhase) {
    case PHASE.DRONE_APPROACH:
      animateDroneApproach(delta);
      break;
    case PHASE.RADAR_DETECT:
      animateRadarDetection(delta);
      break;
    case PHASE.DEFENSE_ACTIVATE:
      animateDefenseActivation(delta);
      break;
  }
  
  // 持续动画效果
  animateContinuousEffects(delta);
  
  // 渲染场景
  renderer.render(scene, camera);
  window.animationFrameId = requestAnimationFrame(animate);
};

// 无人机接近动画
const animateDroneApproach = (delta) => {
  // 无人机飞行
  drone.position.x += 50 * delta;
  drone.position.z += 30 * delta;
  
  // 无人机旋翼旋转
  drone.children.forEach((child, index) => {
    if (index > 0 && index < 5) { // 旋翼索引
      child.rotation.y += 10 * delta * (index % 2 === 0 ? 1 : -1);
    }
  });
  
  // 当无人机靠近时，切换到雷达探测阶段
  if (drone.position.x > -100) {
    currentPhase = PHASE.RADAR_DETECT;
    phaseTime = 0;
  }
};

// 雷达探测动画
const animateRadarDetection = (delta) => {
  // 雷达碟形天线旋转
  radar.children[1].rotation.z += 1 * delta;
  
  // 雷达波效果
  if (radarWave.material.opacity < 0.8) {
    radarWave.material.opacity += delta;
  }
  radarWave.scale.x += 2 * delta;
  radarWave.scale.y += 2 * delta;
  radarWave.scale.z += 2 * delta;
  
  if (radarWave.scale.x > 3) {
    radarWave.scale.set(1, 1, 1);
    radarWave.material.opacity = 0;
  }
  
  // 雷达锁定无人机
  const radarToTarget = new THREE.Vector3().subVectors(drone.position, radar.position).normalize();
  radar.children[2].quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), radarToTarget);
  
  // 当雷达探测持续一段时间后，切换到防御系统激活阶段
  if (phaseTime > 3) {
    currentPhase = PHASE.DEFENSE_ACTIVATE;
    phaseTime = 0;
  }
};

// 防御系统激活动画
const animateDefenseActivation = (delta) => {
  // 防御系统瞄准无人机
  const targetDir = new THREE.Vector3().subVectors(drone.position, defenseSystem.position).normalize();
  defenseSystem.children[2].quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), targetDir);
  
  // 防御系统灯光闪烁
  defenseSystem.children[3].material.emissiveIntensity = 0.5 + Math.sin(phaseTime * 10) * 0.5;
  
  // 创建激光效果
  if (phaseTime > 1 && phaseTime < 3) {
    const laserGeometry = new THREE.CylinderGeometry(0.5, 0.5, 100, isMobile.value ? 4 : 8);
    const laserMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8
    });
    const laser = new THREE.Mesh(laserGeometry, laserMaterial);
    
    // 计算激光位置和方向
    const barrelEnd = new THREE.Vector3(0, 0, -7.5).applyQuaternion(defenseSystem.children[2].quaternion).add(defenseSystem.children[2].position);
    laser.position.copy(barrelEnd).add(defenseSystem.position);
    laser.quaternion.copy(defenseSystem.children[2].quaternion);
    
    scene.add(laser);
    
    // 短暂显示后移除激光
    setTimeout(() => {
      scene.remove(laser);
    }, 100);
    
    // 无人机被击中效果
    if (phaseTime > 2) {
      drone.rotation.x += delta * 2;
      drone.position.y -= 20 * delta;
    }
  }
  
  // 循环动画 - 当防御系统激活完成后，重置为无人机接近阶段
  if (phaseTime > 6) {
    // 重置无人机位置
    drone.position.set(-400, 100, -200);
    drone.rotation.set(0, Math.PI / 4, 0);
    
    // 重置阶段
    currentPhase = PHASE.DRONE_APPROACH;
    phaseTime = 0;
  }
};

// 持续动画效果
const animateContinuousEffects = (delta) => {
  // 数据波纹动画
  dataOverlay.children.forEach((child, index) => {
    if (index > 0) { // 波纹
      child.rotation.z += 0.2 * delta;
      child.scale.x = 1 + Math.sin(phaseTime + index) * 0.1;
      child.scale.y = 1 + Math.sin(phaseTime + index) * 0.1;
      child.scale.z = 1 + Math.sin(phaseTime + index) * 0.1;
    }
  });
  
  // 相机轻微移动，增加动态感
  camera.position.x = Math.sin(phaseTime * 0.2) * 20;
  camera.position.y = 100 + Math.sin(phaseTime * 0.1) * 10;
  camera.lookAt(0, 0, 0);
};

// 组件挂载时初始化
onMounted(() => {
  // 延迟初始化以避免阻塞页面加载
  setTimeout(() => {
    try {
      initScene();
      
      // 设置渲染器优化选项
      renderer.setPixelRatio(isMobile.value ? 1 : Math.min(window.devicePixelRatio, 2));
      renderer.powerPreference = "high-performance";
      renderer.antialias = !isMobile.value;
      
      // 开启场景优化
      scene.matrixAutoUpdate = false;
      scene.autoUpdate = false;
      
      // 开始动画循环
      animate();
      
      // 更新加载状态
      isLoading.value = false;
    } catch (e) {
      console.error('Scene initialization failed:', e);
      error.value = true;
      isLoading.value = false;
    }
  }, 100);
});

// 组件卸载前清理资源
onBeforeUnmount(() => {
  // 停止动画循环
  if (window.animationFrameId) {
    cancelAnimationFrame(window.animationFrameId);
  }

  window.removeEventListener('resize', onWindowResize);
  if (sceneContainer.value && renderer) {
    sceneContainer.value.removeChild(renderer.domElement);
  }
  
  // 释放资源
  scene.traverse((object) => {
    if (object.geometry) {
      object.geometry.dispose();
    }
    
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach(material => {
          if (material.map) material.map.dispose();
          material.dispose();
        });
      } else {
        if (object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    }
  });
  
  // 清除场景中的所有对象
  while(scene.children.length > 0){ 
    scene.remove(scene.children[0]); 
  }
  
  // 释放渲染器
  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss();
    renderer = null;
  }
  
  // 释放其他资源
  scene = null;
  camera = null;
  clock = null;
  drone = null;
  radar = null;
  defenseSystem = null;
  cityModel = null;
  radarWave = null;
  dataOverlay = null;
});
</script>

<style scoped>
.scene-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.scene-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  pointer-events: none;
}

.main-title {
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 0 20px;
}

.main-title h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
}

.main-title p {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .main-title h1 {
    font-size: 2.5rem;
  }
  
  .main-title p {
    font-size: 1.2rem;
  }
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #38bdf8;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.error-overlay p {
  color: #ef4444;
  font-size: 1.2rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 