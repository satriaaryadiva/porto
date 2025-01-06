"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string; // Teks yang akan ditampilkan
  speed?: number; // Kecepatan animasi dalam milidetik (opsional)
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50, // Default kecepatan 100ms per karakter
}) => {
  const [displayedText, setDisplayedText] =useState<string>(""); // Teks yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] =useState<number>(0); // Indeks karakter yang sedang diketik

 useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono text-lg sm:text-xl md:text-2xl text-accent"
    >
      {displayedText}
      <motion.span
        className="inline-block bg-accent w-2 h-6 md:h-7 sm:w-2.5 ml-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.span>
  );
};

export default TypingAnimation;
