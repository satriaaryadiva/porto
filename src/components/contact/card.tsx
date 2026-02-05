"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, Mail, Linkedin, Target } from "lucide-react";

const cards = [
  {
    icon: <MessageCircleMore className="w-10 h-10 text-green-500" />,
    title: "WhatsApp",
    target: "_blank",
    desc: "Chat with me directly",
    action: "Send Message →",
    link: "https://wa.me/6283867691938", // Ganti dengan nomor kamu
    color: "text-green-500",
  },
  {
    icon: <Mail className="w-10 h-10 text-blue-500" />,
    title: "Email",
    target: "_self", // Ganti dengan ID form email kamu
    desc: "Send me an email",
    action: "Write Email →",
    link: "#form", // Ganti dengan email kamu
    color: "text-blue-500",
  },
  {
    icon: <Linkedin className="w-10 h-10 text-blue-600" />,
    title: "LinkedIn",
    target: "_blank",
    desc: "Connect professionally",
    action: "Connect →",
    link: "https://linkedin.com/in/satria-arya-diva-392428219/", // Ganti dengan profil kamu
    color: "text-blue-600",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ContactCards() {
  return (
    <div className="flex flex-col   md:flex-row justify-center items-center gap-6 w-full pt-6">
      {cards.map((card, i) => (
        <motion.a
          key={i}
          href={card.link}
          target={card.target}
          rel="noopener noreferrer"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          className="bg-[#1e293b] rounded-xl  w-72 p-6 text-center shadow-md hover:scale-[1.03] transition-transform duration-300    hover:bg-[#383e46] hover:shadow-lg border border-gray-700 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4 flex justify-center ">{card.icon}</div>
          <h3 className="text-white font-semibold text-lg mb-1">{card.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{card.desc}</p>
          <p className={`${card.color} text-sm font-medium hover:underline`}>
            {card.action}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
