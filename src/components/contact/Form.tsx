"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = (params: Record<string, unknown>) => {
    const toastId = toast.loading("Mengirim pesan...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: { throttle: 10000 },
        }
      )
      .then(() => {
        toast.success("Pesan berhasil dikirim! 🎉", { id: toastId });
        reset();
      })
      .catch((error) => {
        toast.error("Gagal mengirim pesan 😢", { id: toastId });
        console.error("FAILED...", error.message);
      });
  };

  const getFormattedDate = () => {
    const now = new Date();
    return {
      sent_day: now.toLocaleDateString("id-ID", { weekday: "long" }),
      sent_date: now.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      sent_time: now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
  };

  const onSubmit = (data: FormData) => {
    const { sent_day, sent_date, sent_time } = getFormattedDate();

    sendEmail({
      to_name: "Satria Arya",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      sent_day,
      sent_date,
      sent_time,
    });
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-lg w-full bg-slate-900/70 shadow-2xl rounded-3xl p-8 space-y-6 
                   border border-cyan-400/40 backdrop-blur-2xl"
      >
        <h2 className="text-3xl font-bold text-white text-center tracking-wide">
          Hubungi Saya ✨
        </h2>
        <p className="text-slate-300 text-center">
          Isi formulir di bawah untuk ngobrol bareng 🚀
        </p>

        <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Input Wrapper */}
          {[
            {
              name: "name",
              type: "text",
              placeholder: "Nama Anda",
              icon: <User className="w-5 h-5 text-cyan-400" />,
              rules: {
                required: "Nama wajib diisi!",
                minLength: { value: 3, message: "Minimal 3 karakter." },
              },
              error: errors.name?.message,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Anda",
              icon: <Mail className="w-5 h-5 text-cyan-400" />,
              rules: { required: "Email wajib diisi!" },
              error: errors.email?.message,
            },
          ].map((field, i) => (
            <motion.div
              key={i}
              variants={item}
              animate={field.error ? { x: [-8, 8, -8, 0] } : {}}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                {field.icon}
              </div>
              <input
                type={field.type}
                {...register(field.name as keyof FormData, field.rules)}
                placeholder={field.placeholder}
                className="peer w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-cyan-400/30 
                           text-white placeholder-transparent 
                           focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                           transition-all duration-300 outline-none"
              />
              <label
                className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 transition-all 
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 
                           peer-placeholder-shown:text-base peer-focus:top-1 
                           peer-focus:text-xs peer-focus:text-cyan-300"
              >
                {field.placeholder}
              </label>
              {field.error && (
                <p className="text-red-400 text-sm mt-1">{field.error}</p>
              )}
            </motion.div>
          ))}

          {/* Textarea */}
          <motion.div
            variants={item}
            animate={errors.message ? { x: [-8, 8, -8, 0] } : {}}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute left-3 top-4">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
            </div>
            <textarea
              {...register("message", {
                required: "Pesan wajib diisi!",
                minLength: { value: 30, message: "Minimal 30 karakter." },
                maxLength: { value: 500, message: "Maksimal 500 karakter." },
              })}
              placeholder="Pesan Anda"
              className="peer w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-cyan-400/30 
                         text-white placeholder-transparent h-32 resize-none
                         focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                         transition-all duration-300 outline-none"
            />
            <label
              className="absolute left-10 top-4 text-gray-400 transition-all 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 
                         peer-placeholder-shown:text-base peer-focus:top-1 
                         peer-focus:text-xs peer-focus:text-cyan-300"
            >
              Pesan Anda
            </label>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* Tombol */}
          <motion.button
            variants={item}
            type="submit"
            className="relative w-full py-3 rounded-xl font-semibold text-white 
                       bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                       shadow-lg hover:shadow-cyan-400/50 
                       transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Kirim Pesan 🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
          </motion.button>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Form;
