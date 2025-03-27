"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import My3DModel from "./My3DModel";

export default function Scene() {
  return (
    <div className="relative w-full h-full">
      <Canvas className="!w-full !h-full">
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} />
        <My3DModel />
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    </div>
  );
}
