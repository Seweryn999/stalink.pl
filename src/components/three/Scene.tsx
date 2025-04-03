import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Text3DComponent from "./Text3D";

const Scene: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.style.width = "100%";
        canvasRef.current.style.height = "100vh";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <Canvas
        camera={
          isMobile
            ? { position: [0, 0, 12], fov: 75 }
            : { position: [0, 0, 8], fov: 50 }
        }
        style={{ width: "100%", height: "100%" }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#a3bffa"
        />
        <Text3DComponent
          text="STALINK"
          position={isMobile ? [0, 1, 0] : [0, 0.5, 0]}
        />{" "}
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
        )}
        <EffectComposer>
          <Bloom
            intensity={1.0}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Scene;
