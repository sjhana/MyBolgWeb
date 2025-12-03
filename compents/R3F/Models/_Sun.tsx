import { NumberUniform } from "three/src/renderers/common/Uniform.js";
import Sun from "../../../my-web-fontend/public/Sun";
import ResponsiveGroup from "./rCompents/ResponsiveGroup";
import RotatingGroup from "./rCompents/RotatingGroup";
import { Suspense } from "react";

interface SunProps {
    speed?: [number, number, number];
    position?: [number, number, number];
    size?: number;
}

export default function SunModel({speed=[0, 0, 0], position=[0,0,0], size=0.25}: SunProps){

    return(
        <Suspense>
            <ResponsiveGroup position={position} size={size}>
                <RotatingGroup speed={speed}>
                    <Sun/>
                </RotatingGroup>
            </ResponsiveGroup>
        </Suspense>
    )
}