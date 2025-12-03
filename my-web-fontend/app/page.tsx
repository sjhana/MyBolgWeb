"use client";
import { Canvas } from "@react-three/fiber"
import CameraRig from "@/compents/R3F/Camera/CameraRig";
import Navbar from "@/compents/Navbar";
import  BlackHoleModel from "@/compents/R3F/Models/_BlackHole";
import SunModel from "@/compents/R3F/Models/_Sun";
import { CameraControls, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

export default function Home() {
  const [bhActive, setBhActive] = useState(false);

  const cameraControlsRef = useRef<CameraControls>(null!);
  useEffect(()=>{
    if (bhActive) {
      // 👉 激活状态：拉近相机
      // setLookAt(相机X, 相机Y, 相机Z,  目标X, 目标Y, 目标Z,  是否平滑)
      cameraControlsRef.current?.setLookAt(3, 1, 3, -12, -0.5, -12, true);
    } else {
      // 👈 未激活：复位到远处
      cameraControlsRef.current?.setLookAt(0, 0, 0, 0, 0, 0, true);
    }
  }, [bhActive])


  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar/>
      <Canvas className="bg-black">
        <Suspense>
          <Environment 
            background 
            files="/sky1.jpg" 
          />
        </Suspense>
        {/* <CameraControls ref={cameraControlsRef} smoothTime={1.0} />
        <group 
          onClick={(e) => {
            e.stopPropagation(); // 防止事件穿透
            setBhActive(!bhActive); // 切换状态
          }}
          onPointerMissed={() => setBhActive(false)} // 点击背景复位
        > */}
          <BlackHoleModel
            rotation={[-Math.PI / 16, 0, -Math.PI / 9]}
            speed={[0, 0.1, 0]}
            position={[-12, -0.5, -12]}
            size={1}
          />
        {/* </group> */}
        <SunModel
          speed={[0,0.1,0]}
          position={[75, 8, 45]}
          size={1}
        />
        <CameraRig 
          pivotPoint={[0, 0, 0]} // 旋转中心点
          initialCameraPosition={[0, 0, 0]} // 相机距离中心点 Y轴 10个单位
        />
      </Canvas>
    </div>
  )
}