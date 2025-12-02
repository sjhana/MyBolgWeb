"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// 定义组件 props
interface CameraRigProps {
  pivotPoint?: [number, number, number]; // 旋转的中心点
  initialCameraPosition?: [number, number, number]; // 相机初始位置
}

export default function CameraRig({ 
  pivotPoint = [0, 0, 0], 
  initialCameraPosition = [0, 0, 5] 
}: CameraRigProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // 使用 ref 来存储目标旋转角度，而不是 state，以避免 React 频繁重渲染导致卡顿
  const targetRotation = useRef(0);

  // 1. 监听鼠标滚轮事件
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // 这里的 0.001 是灵敏度，可以根据需要调整
      // event.deltaY 是滚轮滚动的距离
      targetRotation.current += event.deltaY * 0.0001;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // 2. 在每一帧中平滑更新旋转 (使用 Lerp 插值)
  useFrame((state, delta) => {
    if (groupRef.current) {
      // 核心算法：让当前的 rotation.z 慢慢接近 targetRotation
      // 5 * delta 控制平滑速度（阻尼感），数值越大越快
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current,
        5 * delta
      );
    }
  });

  return (
    // 3. 这是一个“支架” Group，它的位置就是你的旋转中心点
    <group ref={groupRef} position={pivotPoint}>
      
      {/* 4. 相机放在支架里面。
          注意：因为相机是子元素，这里的 position 是相对于 pivotPoint 的偏移量 
      */}
      <PerspectiveCamera 
        makeDefault // 设为默认相机，接管 Canvas 的渲染
        position={initialCameraPosition} 
        fov={50}
      />
      
    </group>
  );
}