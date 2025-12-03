import { useThree } from "@react-three/fiber";

export default function ResponsiveGroup({ children, size=0.25 }:{children: ReactNode, size?: number}) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5; // 5 是一个经验值，通常对应手机竖屏
  const scale = isMobile ? 0.8 : Math.min(viewport.width * size, 3);
  return <group scale={scale}>{children}</group>;
}
