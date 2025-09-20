"use client";

import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import { Headphone } from "@/components/models/about/Headphone";
import Link from "next/link";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/welcome/TypingAnimation";

export default function About() {
  // scroll smooth ke section contact
  const ToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Background Models */}
      <div className="top-0 left-0 z-[-1] w-full h-full opacity-[0.05]">
        <div className="absolute inset-0 flex justify-center items-center">
          <RenderModel>
            <Headphone />
          </RenderModel>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen mb-5 flex flex-col items-center justify-center text-center px-6">
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
          className="mt-6 font-extrabold text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <TypingAnimation text="Satria Arya Diva" speed={100} />
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="mt-4 max-w-lg text-base sm:text-lg text-white leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.7 }}
        >
          <TypingAnimation text="A Self Taught Frontend Developer. I specialize in crafting seamless user journeys and intuitive experiences. With a keen eye for design and a passion for coding, I bring your vision to life." />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <Link
            href="/contact"
            className="px-7 py-3 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Hire Me
          </Link>

          <button
            onClick={ToContact}
            className="px-7 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Collaboration
          </button>
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
    </div>
  );
}
