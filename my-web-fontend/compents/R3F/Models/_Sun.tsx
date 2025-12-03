import Sun from "../../../public/Sun";
import ResponsiveGroup from "./rCompents/ResponsiveGroup";
import RotatingGroup from "./rCompents/RotatingGroup";
import { Suspense } from "react";

interface SunProps {
    speed?: [number, number, number];
    position?: [number, number, number];
}

export default function SunModel({speed=[0, 0, 0], position=[0,0,0]}: SunProps){

    return(
        <Suspense>
            <ResponsiveGroup position={position}>
                <RotatingGroup speed={speed}>
                    <Sun/>
                </RotatingGroup>
            </ResponsiveGroup>
        </Suspense>
    )
}