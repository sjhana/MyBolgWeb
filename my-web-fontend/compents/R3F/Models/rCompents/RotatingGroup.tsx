import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface RotatingGroupProps {
  speed?: [number, number, number];
  children?: React.ReactNode;
  rotation?: [number, number, number];
}

export default function RotatingGroup({speed = [0, 0, 0], children, rotation = [0, 0, 0], scale=[1, 1, 1]}: RotatingGroupProps) {
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