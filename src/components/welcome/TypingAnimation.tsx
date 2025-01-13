"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: React.ReactNode; // Mendukung teks atau elemen JSX
  speed?: number; // Kecepatan animasi dalam milidetik (opsional)
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50, // Default kecepatan 50ms per karakter
}) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // Teks yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Indeks karakter yang sedang diketik
  const stringText = typeof text === "string" ? text : ""; // Konversi elemen JSX ke string jika diperlukan

  useEffect(() => {
    if (currentIndex < stringText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + stringText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, stringText, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono relative bg-gray-900 text-yellow-400 rounded-md p-4 text-lg sm:text-xl md:text-2xl shadow-lg"
    >
      <motion.span>
        {displayedText}
        <motion.span
          className="inline-block bg-yellow-400 w-[2px] h-6 md:h-7 ml-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </motion.span>
    </motion.div>
  );
};

export default TypingAnimation;
