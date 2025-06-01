"use client";

import React, { ReactNode, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import clsx from "clsx";

// Kamera cinematic: memutar lambat pada sumbu Y
const CinematicRig = ({ children }: { children: ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const RenderModel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Canvas
      className={clsx("absolute inset-0 w-full h-full -z-30", className)}
      shadows
      camera={{ position: [0, 0, 5], fov: 65 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
        />
        <CinematicRig>{children}</CinematicRig>
        <Environment preset="dawn" backgroundBlurriness={10} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
