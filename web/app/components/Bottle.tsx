"use client";

import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Bottle() {
  const { scene } = useGLTF("/model/shampoo.glb");
  const texture = useTexture("/56.png");

  const ref = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.name === "Retopo_Circle005") {
        child.material = new THREE.MeshPhysicalMaterial({
          map: texture,
        });
      }
    }
  });

  return <primitive ref={ref} object={scene} scale={0.14} position={[0,-0.8, 0]}
    rotation={[
      0,
      Math.PI / 4,
      0
    ]}
  />;
}