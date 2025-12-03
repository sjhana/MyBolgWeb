import { useThree } from "@react-three/fiber";
import { ReactNode } from "react";

interface ResponsiveGroupProps {
  children?: ReactNode;
  size?: number;
  position?: [number, number, number];
}

export default function ResponsiveGroup({ children, size=0.25, position=[0,0,0] }:ResponsiveGroupProps) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5; // 5 是一个经验值，通常对应手机竖屏
  const scale = isMobile ? 0.8 : Math.min(viewport.width * size, 3);
  return <group scale={scale} position={position}>{children}</group>;
}
