import { ReactNode, useRef } from "react";
import BlackHole from "../../../public/Blackhole";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import ResponsiveGroup from "./rCompents/ResponsiveGroup";
import RotatingGroup from "./rCompents/RotatingGroup";

interface BlackHoleProps {
  speed?: [number, number, number];
  rotation?: [number, number, number];
}

export default function BlackHoleModel({speed=[0, 0, 0], rotation=[0,0,0]}: BlackHoleProps) {
  return (
    <ResponsiveGroup>
      <RotatingGroup speed={speed} rotation={rotation} >
        <BlackHole/>
      </RotatingGroup>
    </ResponsiveGroup>
  )
}