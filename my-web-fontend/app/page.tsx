"use client";
import { Canvas } from "@react-three/fiber"
import { useState } from "react";
import CameraRig from "../compents/CameraRig";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [active, setActive] = useState(false)


  return (
    <div>
      <div className="h-auto w-auto">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <mesh scale={active ? 1.5 : 1} onClick={() => setActive(!active)}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhongMaterial color="royalblue" />
          </mesh>
          <CameraRig 
            pivotPoint={[0, 0, 2]} 
            initialCameraPosition={[0, 0, 0]} // 相机距离中心点 Z轴 10个单位
          />

        </Canvas>
      </div>
      <p>Hello👋</p>
    </div>
  )
}