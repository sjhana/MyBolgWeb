import { Suspense } from "react";
import BlackHole from "../../../public/Blackhole";
import ResponsiveGroup from "./rCompents/ResponsiveGroup";
import RotatingGroup from "./rCompents/RotatingGroup";

interface BlackHoleProps {
  speed?: [number, number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
}

export default function BlackHoleModel({speed=[0, 0, 0], rotation=[0,0,0], position=[0,0,0]}: BlackHoleProps) {
  return (
    <Suspense fallback={null}>
      <ResponsiveGroup position={position}>
        <RotatingGroup speed={speed} rotation={rotation} >
          <BlackHole/>
        </RotatingGroup>
      </ResponsiveGroup>
    </Suspense>
  )
}