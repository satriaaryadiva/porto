"use client"

import Image from "next/image"
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/Form"
import ContactCards from "@/components/contact/card"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function Contact() {
  // Cursor-following orb setup
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const orbX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const orbY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src={bg}
          priority
          sizes="100vw"
          alt="background-image"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Cursor-following orb */}
      <motion.div
        style={{
          translateX: orbX,
          translateY: orbY,
        }}
        className="fixed top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-sky-500/30 blur-3xl -z-40"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-24 px-4 sm:px-10 space-y-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-6 max-w-4xl"
        >
          <h1 className="relative font-extrabold text-4xl sm:text-6xl bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent drop-shadow-xl">
            Let’s Create Magic Together ✨
          </h1>
          <p className="text-slate-700/80 dark:text-slate-200/90 font-medium text-base sm:text-lg leading-relaxed">
            Whether it’s a project, collaboration, or just a chat —{" "}
            <span className="font-bold text-purple-500">reach out</span> and let’s
            make it extraordinary.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center"
        >
          <motion.div
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative z-10 backdrop-blur-2xl bg-white/30 dark:bg-slate-900/30 rounded-3xl shadow-2xl p-8 w-full sm:w-4/5 lg:w-2/3 border border-white/20"
          >
            <ContactCards />
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full flex   justify-center items-center"
        >
          
            <Form />
          
        </motion.div>
      </article>
    </>
  )
}
