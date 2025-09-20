"use client";

import Image from "next/image";
import bg from "../../public/background/bg2.jpeg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Welcome from "@/components/welcome";
import AnimeMaleModel from "@/components/models/Harry";
import FireFliesBackground from "@/components/FireFliesBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Background Layer */}
      <div className="absolute mix-blend-multiply inset-0 -z-50">
        
        <FireFliesBackground />
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
