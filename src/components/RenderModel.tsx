'use client';

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { ReactNode, Suspense, useEffect } from "react";
import ModelLoader from "./modalLoader";

const CinematicRig = ({ children }: { children: ReactNode }) => {
  return <group>{children}</group>;
};

const RenderModel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  // fix bug ukuran canvas kadang 0
  useEffect(() => {
    const resize = () => window.dispatchEvent(new Event("resize"));
    resize();
  }, []);

  return (
    <Canvas
      className={clsx("fixed w-screen h-screen -z-30 ", className)}
      shadows
      camera={{ position: [0, 0, 5], fov: 65 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<ModelLoader />}>
        {/* Soft ambient light */}
        <ambientLight intensity={0.3} />

        {/* Dramatic spotlight */}
        <spotLight
          position={[5, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />

        {/* Cinematic group */}
        <CinematicRig>{children}</CinematicRig>

        {/* Environment reflection */}
        <Environment preset="apartment" background={false} />

        {/* Disable zoom, fokus interaksi mouse */}
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
