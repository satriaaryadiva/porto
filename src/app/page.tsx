"use client";

import Image from "next/image";

import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Welcome from "@/components/welcome";
import AnimeMaleModel from "@/components/models/Harry";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Background Layer */}
      <div className="absolute mix-blend-multiply inset-0 -z-50">
        {/* FireFlies removed to avoid duplication with Layout */}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* 3D Model Section */}
      <section className="flex h-screen w-full items-center justify-center">
        <RenderModel>
          <AnimeMaleModel />
        </RenderModel>
      </section>

      {/* Welcome Section */}
      <Welcome />
    </main>
  );
}
