"use client";
import { Canvas } from "@react-three/fiber"
import CameraRig from "@/compents/R3F/Camera/CameraRig";
import Navbar from "@/compents/Navbar";
import BlackHoleModel from "@/compents/R3F/Models/_BlackHole";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar/>
      <Canvas className="bg-black">
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <BlackHoleModel 
            rotation={[Math.PI / 16, 0, Math.PI / 16]}
            speed={[0, 0.1, 0]}
          />
        </Suspense>
        <CameraRig 
          pivotPoint={[0, 0, 30]} // 旋转中心点
          initialCameraPosition={[0, 0, 0]} // 相机距离中心点 Y轴 10个单位
        />
      </Canvas>
    </div>
  )
}