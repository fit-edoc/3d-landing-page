"use client";

import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Bottle() {
  const { scene } = useGLTF("/model/shampoo.glb");
  const texture = useTexture("/yo.png");

  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.Y += 0.005;
  });
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  scene.traverse((child) => {
    if (child.isMesh && child.name === "Retopo_Circle005") {
      child.material = new THREE.MeshPhysicalMaterial({
        map: texture,
      });
    }
  });

  return <primitive ref={ref} object={scene} scale={0.14} position={[0, -0.7, 0]}
    rotation={[
      0,
      Math.PI / 4,
      0
    ]}
  />;
}