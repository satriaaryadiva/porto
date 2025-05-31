"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { ReactNode, Suspense } from "react";

const RenderModel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Canvas
      className={clsx("absolute bg-red-400 opacity-35 inset-0 w-fit h-fit z-50", className)}
      camera={{ position: [0, 0, 5], fov: 65 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Environment preset="dawn" />
        {children}
        <OrbitControls enableZoom={true} />
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
