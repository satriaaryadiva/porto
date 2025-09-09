'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactCards from '@/components/contact/card'
import Form from '@/components/contact/Form'

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <Image
        src="/background/contact-background.png"
        alt="background"
        priority
        fill
        className="-z-10 object-cover object-center opacity-30"
      />

      {/* Animated blobs */}
      <AnimatedBlobs />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Hero + Cards */}
          <div className="space-y-10">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent to-pink-500">
                Connect & Hire — Let’s Build Something Iconic
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Mau collab, proyek freelance, atau sekadar say hi? Gue selalu
                open buat ngobrol dan bikin sesuatu yang gokil bareng 🚀
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <ContactCards />
            </motion.div>
          </div>

          {/* Right: Glass Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl p-6 md:p-8 border border-gray-800 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg shadow-xl"
          >
            <Form />
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} Satria — Crafted with caffeine & code
      </footer>
    </main>
  )
}

/* ----------------------------- Animated Blobs ---------------------------- */
function AnimatedBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute -left-32 -top-20 w-[36rem] h-[36rem] rounded-full blur-3xl bg-gradient-to-r from-purple-600/40 to-indigo-400/20"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -right-40 bottom-10 w-[28rem] h-[28rem] rounded-full blur-2xl bg-gradient-to-tr from-pink-500/20 to-yellow-400/10"
      />
    </div>
  )
}
