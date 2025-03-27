"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";

type GLTFResult = {
  nodes: { [key: string]: Mesh };
  materials: { [key: string]: THREE.Material };
};

export default function My3DModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/models/model.glb"
  ) as unknown as GLTFResult;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <mesh
        geometry={nodes["Cube"]?.geometry}
        material={materials["CubeMaterial"]}
      />
    </group>
  );
}
