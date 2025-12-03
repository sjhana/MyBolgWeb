import { ReactNode, useRef } from "react";
import BlackHole from "../../../public/Blackhole";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

interface RotatingGroupProps {
  speed?: [number, number, number];
  children?: React.ReactNode;
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

// 合并接口
type ParentProps = RotatingGroupProps & React.JSX.IntrinsicElements['group'];

function ResponsiveGroup({ children }:{children: ReactNode}) {
  // 1. 获取视口信息
  // viewport.width 是当前相机视角下，z=0 平面的 3D 宽度单位
  const { viewport } = useThree();

  // 2. 编写响应式逻辑
  // 逻辑示例：让模型的大小始终等于视口宽度的 20%
  // Math.min 是为了防止在超宽屏上模型变得大得离谱，设置一个上限 (比如最大 scale 为 3)
  const scale = Math.min(viewport.width * 0.25, 3);
  
  // 或者：针对手机和桌面的简单断点逻辑
  // const isMobile = viewport.width < 5; // 5 是一个经验值，通常对应手机竖屏
  // const scale = isMobile ? 0.8 : 1.5;

  return <group scale={scale}>{children}</group>;
}

// BlackHole旋转动作组件
function RotatingGroup({speed = [0, 0, 0], children, rotation = [0, 0, 0], scale=[1, 1, 1]}: RotatingGroupProps) {
    const groupRef = useRef<THREE.Group>(null)
    useFrame((state, delta) => {
    // delta 是两帧之间的时间间隔，乘以它可以保证旋转速度在不同刷新率屏幕上一致
    // speed 是旋转速度，数字越大转越快
    groupRef.current.rotation.x += delta * speed[0]; 
    groupRef.current.rotation.y += delta * speed[1]; 
    groupRef.current.rotation.z += delta * speed[2]; 
  });
  return (
  <group rotation={rotation} scale={scale}>
    <group ref={groupRef}>
    {children}
    </group>
  </group>);
}

export default function BlackHoleModel(props: ParentProps) {
  const {speed, rotation, scale} = props;
  return (
    <ResponsiveGroup>
      <RotatingGroup speed={speed} rotation={rotation} >
        <BlackHole scale={scale}/>
      </RotatingGroup>
    </ResponsiveGroup>
  )
}