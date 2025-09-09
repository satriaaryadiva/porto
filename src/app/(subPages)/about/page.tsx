"use client";

import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import { Headphone } from "@/components/models/about/Headphone";
import { Mouse } from "@/components/models/about/Mouse";
import { Controller } from "@/components/models/about/Controller";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Background Models */}
      <div className=" top-0 left-0 Z-z-50 w-full h-full opacity-[0.05]">
        <div className="absolute inset-0 flex justify-center items-center">
          <RenderModel>
            <Headphone />
          </RenderModel>
          <RenderModel>
            <Mouse />
          </RenderModel>
          <RenderModel>
            <Controller />
          </RenderModel>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/image/3d-portrait-people.png"
            alt="Satria Arya Diva"
            width={200}
            height={200}
            priority
            className="rounded-full border-4 border-blue-500 shadow-xl"
          />
        </motion.div>

        {/* Nama */}
        <motion.h1
          className="mt-6 font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Satria Arya Diva
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 max-w-lg text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Front-End Developer yang fokus pada UI modern, interaktif, dan penuh
          detail.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <Link
            href="mailto:satriaarya125@gmail.com"
            className="px-7 py-3 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Hire Me
          </Link>

          <Link
            href="https://www.linkedin.com/in/satria-arya-diva"
            target="_blank"
            className="px-7 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Collaboration
          </Link>
        </motion.div>
      </div>

      {/* About Details */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        <AboutDetails />
      </motion.div>
    </>
  );
}
