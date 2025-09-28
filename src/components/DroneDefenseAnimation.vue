<template>
  <div class="defense-animation-container" ref="container">
    <div class="loading-overlay" v-if="loading">
      <div class="loading-spinner"></div>
      <div class="loading-text">加载中...</div>
    </div>
    <canvas ref="canvas" class="defense-canvas"></canvas>
    <div class="animation-controls">
      <button @click="resetAnimation" class="control-btn">
        <i class="fas fa-redo"></i>
      </button>
      <button @click="toggleAnimation" class="control-btn">
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

// 组件状态
const container = ref(null);
const canvas = ref(null);
const loading = ref(true);
const isPlaying = ref(true);

// Three.js 变量
let scene, camera, renderer, controls;
let clock = new THREE.Clock();
let mixer;
let radar, drone, defenseSystem;
let radarAnimation, droneAnimation;
let radarBeam, detectionRadius;
let animationFrameId;

// 初始化场景
const initScene = () => {
  // 创建场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a192f);
  scene.fog = new THREE.Fog(0x0a192f, 10, 50);

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    60,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 5, 10);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;

  // 添加轨道控制
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 3;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI / 2;

  // 添加灯光
  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0x4facfe, 2, 20);
  pointLight.position.set(0, 5, 0);
  scene.add(pointLight);

  // 创建地面
  const groundGeometry = new THREE.PlaneGeometry(100, 100);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.8,
    metalness: 0.2
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // 添加网格
  const gridHelper = new THREE.GridHelper(100, 100, 0x4facfe, 0x334155);
  gridHelper.position.y = 0.01;
  scene.add(gridHelper);

  // 创建雷达基站
  createRadarBase();
  
  // 创建无人机
  createDrone();
  
  // 创建防御系统
  createDefenseSystem();
  
  // 添加粒子效果
  createParticles();
  
  // 开始动画
  startAnimations();
  
  // 添加窗口大小调整监听
  window.addEventListener('resize', onWindowResize);

  // 加载完成
  loading.value = false;
};

// 创建雷达基站
const createRadarBase = () => {
  // 雷达底座
  const baseGeometry = new THREE.CylinderGeometry(1.2, 1.5, 0.5, 32);
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.7,
    metalness: 0.5
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 0.25;
  base.castShadow = true;
  base.receiveShadow = true;
  scene.add(base);

  // 雷达柱
  const poleGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 16);
  const poleMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.5,
    metalness: 0.7
  });
  const pole = new THREE.Mesh(poleGeometry, poleMaterial);
  pole.position.y = 1.5;
  pole.castShadow = true;
  scene.add(pole);

  // 雷达盘
  const radarGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32);
  const radarMaterial = new THREE.MeshStandardMaterial({
    color: 0x4facfe,
    roughness: 0.3,
    metalness: 0.8,
    emissive: 0x4facfe,
    emissiveIntensity: 0.2
  });
  radar = new THREE.Mesh(radarGeometry, radarMaterial);
  radar.position.y = 2.5;
  radar.castShadow = true;
  scene.add(radar);

  // 雷达天线
  const antennaGeometry = new THREE.BoxGeometry(0.1, 0.8, 0.1);
  const antennaMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.3,
    metalness: 0.8
  });
  const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
  antenna.position.y = 0.4;
  radar.add(antenna);

  // 雷达扫描光束
  const beamGeometry = new THREE.ConeGeometry(5, 10, 32, 1, true);
  const beamMaterial = new THREE.MeshBasicMaterial({
    color: 0x4facfe,
    transparent: true,
    opacity: 0.2,
    side: THREE.DoubleSide
  });
  radarBeam = new THREE.Mesh(beamGeometry, beamMaterial);
  radarBeam.position.y = -5;
  radarBeam.rotation.x = Math.PI;
  radar.add(radarBeam);

  // 检测半径可视化
  const detectionGeometry = new THREE.RingGeometry(0, 8, 32);
  const detectionMaterial = new THREE.MeshBasicMaterial({
    color: 0x4facfe,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide
  });
  detectionRadius = new THREE.Mesh(detectionGeometry, detectionMaterial);
  detectionRadius.rotation.x = -Math.PI / 2;
  detectionRadius.position.y = 0.05;
  scene.add(detectionRadius);
};

// 创建无人机
const createDrone = () => {
  // 无人机主体
  const droneGeometry = new THREE.BoxGeometry(0.8, 0.2, 0.8);
  const droneMaterial = new THREE.MeshStandardMaterial({
    color: 0xf43f5e,
    roughness: 0.3,
    metalness: 0.7
  });
  drone = new THREE.Mesh(droneGeometry, droneMaterial);
  drone.position.set(7, 4, 7);
  drone.castShadow = true;
  scene.add(drone);

  // 无人机旋翼
  for (let i = 0; i < 4; i++) {
    const rotorGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 16);
    const rotorMaterial = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      roughness: 0.3,
      metalness: 0.5
    });
    const rotor = new THREE.Mesh(rotorGeometry, rotorMaterial);
    
    // 设置旋翼位置
    const x = i % 2 === 0 ? 0.4 : -0.4;
    const z = i < 2 ? 0.4 : -0.4;
    rotor.position.set(x, 0.1, z);
    
    drone.add(rotor);
    
    // 添加旋翼动画
    gsap.to(rotor.rotation, {
      y: Math.PI * 2,
      duration: 0.5,
      repeat: -1,
      ease: "none"
    });
  }

  // 无人机灯光
  const droneLight = new THREE.PointLight(0xf43f5e, 1, 3);
  droneLight.position.y = -0.1;
  drone.add(droneLight);
};

// 创建防御系统
const createDefenseSystem = () => {
  // 防御系统主体
  const defenseGeometry = new THREE.BoxGeometry(1, 0.5, 1);
  const defenseMaterial = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    roughness: 0.3,
    metalness: 0.8
  });
  defenseSystem = new THREE.Mesh(defenseGeometry, defenseMaterial);
  defenseSystem.position.set(-3, 0.25, -3);
  defenseSystem.castShadow = true;
  defenseSystem.receiveShadow = true;
  scene.add(defenseSystem);

  // 防御系统炮塔
  const turretGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.8, 16);
  const turretMaterial = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    roughness: 0.5,
    metalness: 0.7
  });
  const turret = new THREE.Mesh(turretGeometry, turretMaterial);
  turret.position.y = 0.65;
  defenseSystem.add(turret);

  // 防御系统炮管
  const barrelGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
  const barrelMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.3,
    metalness: 0.9
  });
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
  barrel.position.y = 0.5;
  barrel.rotation.x = Math.PI / 4;
  turret.add(barrel);
};

// 创建粒子效果
const createParticles = () => {
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x4facfe,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
};

// 开始动画
const startAnimations = () => {
  // 雷达旋转动画
  radarAnimation = gsap.to(radar.rotation, {
    y: Math.PI * 2,
    duration: 5,
    repeat: -1,
    ease: "none"
  });
  
  // 无人机飞行路径动画
  const droneTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true
  });
  
  droneTimeline.to(drone.position, {
    x: 7,
    y: 4,
    z: -7,
    duration: 5,
    ease: "power1.inOut"
  });
  
  droneTimeline.to(drone.position, {
    x: -7,
    y: 5,
    z: -7,
    duration: 5,
    ease: "power1.inOut"
  });
  
  droneTimeline.to(drone.position, {
    x: -7,
    y: 4,
    z: 7,
    duration: 5,
    ease: "power1.inOut"
  });
  
  droneTimeline.to(drone.position, {
    x: 7,
    y: 5,
    z: 7,
    duration: 5,
    ease: "power1.inOut"
  });
  
  droneAnimation = droneTimeline;
  
  // 检测半径动画
  gsap.to(detectionRadius.material, {
    opacity: 0.3,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  // 防御系统追踪无人机
  gsap.ticker.add(trackDrone);
};

// 防御系统追踪无人机
const trackDrone = () => {
  if (defenseSystem && drone) {
    const defensePosition = new THREE.Vector3();
    defenseSystem.getWorldPosition(defensePosition);
    
    const dronePosition = new THREE.Vector3();
    drone.getWorldPosition(dronePosition);
    
    defenseSystem.lookAt(dronePosition);
    
    // 计算距离
    const distance = defensePosition.distanceTo(dronePosition);
    
    // 当无人机进入检测范围时
    if (distance < 8) {
      // 雷达检测到无人机时的效果
      if (drone.position.y > 0.5) {
        // 发射拦截光束
        if (!window.beamActive) {
          fireDefenseBeam(defensePosition, dronePosition);
          window.beamActive = true;
          
          // 拦截后无人机下降
          gsap.to(drone.position, {
            y: 0.5,
            duration: 2,
            ease: "power1.in",
            onComplete: () => {
              window.beamActive = false;
            }
          });
        }
      }
    }
  }
};

// 发射拦截光束
const fireDefenseBeam = (start, end) => {
  // 创建光束几何体
  const beamGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
  beamGeometry.rotateX(Math.PI / 2);
  
  // 创建光束材质
  const beamMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.8
  });
  
  // 创建光束网格
  const beam = new THREE.Mesh(beamGeometry, beamMaterial);
  scene.add(beam);
  
  // 设置光束位置和方向
  beam.position.copy(start);
  beam.lookAt(end);
  
  // 计算距离
  const distance = start.distanceTo(end);
  beam.scale.set(1, 1, distance);
  beam.position.lerp(end, 0.5);
  
  // 添加光束动画
  gsap.to(beam.material, {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    onComplete: () => {
      scene.remove(beam);
    }
  });
  
  // 添加冲击波效果
  const impactGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const impactMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 1
  });
  
  const impact = new THREE.Mesh(impactGeometry, impactMaterial);
  impact.position.copy(end);
  scene.add(impact);
  
  // 冲击波动画
  gsap.to(impact.scale, {
    x: 5,
    y: 5,
    z: 5,
    duration: 1,
    ease: "power1.out"
  });
  
  gsap.to(impact.material, {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    onComplete: () => {
      scene.remove(impact);
    }
  });
};

// 窗口大小调整
const onWindowResize = () => {
  if (container.value && camera && renderer) {
    camera.aspect = container.value.clientWidth / container.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  }
};

// 动画循环
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  // 更新控制器
  if (controls) controls.update();
  
  // 渲染场景
  if (scene && camera && renderer) {
    renderer.render(scene, camera);
  }
};

// 重置动画
const resetAnimation = () => {
  if (drone) {
    gsap.killTweensOf(drone.position);
    drone.position.set(7, 4, 7);
    startAnimations();
  }
};

// 切换动画播放状态
const toggleAnimation = () => {
  isPlaying.value = !isPlaying.value;
  
  if (isPlaying.value) {
    // 恢复动画
    radarAnimation.play();
    droneAnimation.play();
    gsap.ticker.add(trackDrone);
  } else {
    // 暂停动画
    radarAnimation.pause();
    droneAnimation.pause();
    gsap.ticker.remove(trackDrone);
  }
};

// 组件挂载时
onMounted(() => {
  initScene();
  animate();
});

// 组件卸载前
onBeforeUnmount(() => {
  // 清理动画和事件监听
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  window.removeEventListener('resize', onWindowResize);
  
  // 清理GSAP动画
  gsap.ticker.remove(trackDrone);
  if (radarAnimation) radarAnimation.kill();
  if (droneAnimation) droneAnimation.kill();
  
  // 清理Three.js资源
  if (renderer) {
    renderer.dispose();
  }
  
  if (controls) {
    controls.dispose();
  }
  
  // 清理场景
  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }
});
</script>

<style scoped>
.defense-animation-container {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.defense-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(79, 172, 254, 0.3);
  border-top: 4px solid rgba(79, 172, 254, 1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 15px;
  color: #fff;
  font-size: 14px;
}

.animation-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}

.control-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.7);
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.control-btn:hover {
  background: rgba(79, 172, 254, 0.7);
  transform: scale(1.1);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 767px) {
  .defense-animation-container {
    height: 300px;
  }
}
</style> 