"use client";
import { Environment } from "@react-three/drei";
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
      className={clsx("absolute inset-0 w-full h-full z-0", className)}
      camera={{ position: [0, 0, 5], fov: 65 }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
