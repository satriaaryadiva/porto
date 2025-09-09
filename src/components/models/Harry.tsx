'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Spartan(props: any) {
const { scene } = useGLTF('/models/spartan_armour_mkv_-_halo_reach.glb');
  const modelRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const [startAnim, setStartAnim] = useState(true);
  const animProgress = useRef(0);

  // Enable transparent material for fade-in
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = 0;
      }
    });
  }, [scene]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const model = modelRef.current;
    if (!model) return;

    const t = state.clock.getElapsedTime();

    if (startAnim && animProgress.current < 1) {
      animProgress.current += delta * 1.5;
      const progress = Math.min(animProgress.current, 1);

      // Transisi posisi, scale, rotasi
      model.position.y = -4 + progress * 2; // y: -4 → -2
      const scale = progress * 1; // scale dari 0 → 1
      model.scale.set(scale, scale, scale);
      model.rotation.y = -Math.PI + progress * Math.PI;

      // Transisi opacity
      model.traverse((child: any) => {
        if (child.isMesh && child.material.opacity !== undefined) {
          child.material.opacity = progress;
        }
      });
    } else {
      // Idle floating + rotasi mouse
      model.position.y = -2 + Math.sin(t * 2) * 0.05;
      model.rotation.z = Math.sin(t * 1.5) * 0.01;

      const targetY = mouse.current.x * 1;
      const targetX = mouse.current.y * 0.2;
      model.rotation.y += (targetY - model.rotation.y) * 1.2;
      model.rotation.x += (targetX - model.rotation.x) * 1.2;
    }
  });

  return (
    <group ref={modelRef} {...props} position={[0, 0, 0]} scale={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/spartan_armour_mkv_-_halo_reach.glb');
