'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Harry(props: any) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb');
  const modelRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Handle pergerakan mouse
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animasi real-time
  useFrame((state) => {
    const model = modelRef.current;
    if (model) {
      const t = state.clock.getElapsedTime();

      // Idle: Floating, breathing effect
      model.position.y = -2 + Math.sin(t * 2) * 0.1;

      // Sedikit tilt Z untuk efek realisme
      model.rotation.z = Math.sin(t * 1.5) * 0.02;

      // Mouse-controlled rotation
      const targetY = mouse.current.x * 0.5; // rotasi Y
      const targetX = mouse.current.y * 0.3; // rotasi X
      model.rotation.y += (targetY - model.rotation.y) * 0.1;
      model.rotation.x += (targetX - model.rotation.x) * 0.1;
    }
  });

  return (
    <group
      {...props}
      ref={modelRef}
      position={[0, -2, 0]}
      scale={[2, 2, 2]}
      rotation={[0.25, -0.25, 0]}
    >
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={(nodes.Object_7 as any).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.Object_7 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_9 as any).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.Object_9 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_11 as any).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Object_11 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_13 as any).geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={(nodes.Object_13 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_15 as any).geometry}
        material={materials.Wolf3D_Hair}
        skeleton={(nodes.Object_15 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_17 as any).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Object_17 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_19 as any).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Object_19 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_21 as any).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Object_21 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_23 as any).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Object_23 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_25 as any).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Object_25 as any).skeleton}
      />
    </group>
  );
}

useGLTF.preload('/models/scene-transformed.glb');
