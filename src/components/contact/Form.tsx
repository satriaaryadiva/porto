"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

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
      
        toast.success("I have recevied your message, I will get back to you soon!", { id: toastId });
        reset()
      })
      .catch((error) => {
        toast.error("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.", { id: toastId });
        console.error("FAILED...", error.message);
      });
  };

  const getFormattedDate = () => {
    const now = new Date();
    return {
      sent_day: now.toLocaleDateString("id-ID", { weekday: "long" }),
      sent_date: now.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      sent_time: now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", hour12: false }),
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
        className="max-w-lg w-full  bg-slate-900 shadow-xl rounded-2xl p-6 space-y-4 border border-cyan-300"
      >
        <h2 className="text-2xl font-semibold text-white text-center">Hubungi Saya</h2>
        <p className="text-white text-center">Silakan isi formulir di bawah ini</p>
        <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <motion.div variants={item}>
            <input
              type="text"
              {...register("name", {
                required: "Nama wajib diisi!",
                minLength: { value: 3, message: "Nama minimal 3 karakter." },
              })}
              placeholder="Nama Anda"
              className="w-full p-3 border bg-gray-600 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          <motion.div variants={item}>
            <input
              type="email"
              {...register("email", { required: "Email wajib diisi!" })}
              placeholder="Email Anda"
              className="w-full p-3 border bg-gray-600 border-cyan-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          <motion.div variants={item}>
            <textarea
              {...register("message", {
                required: "Pesan wajib diisi!",
                minLength: { value: 30, message: "Pesan minimal 30 karakter." },
                maxLength: { value: 500, message: "Pesan maksimal 500 karakter." },
              })}
              placeholder="Pesan Anda"
              className="w-full p-3 border bg-gray-600 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none h-32 resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </motion.div>

          <motion.button
            variants={item}
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
          >
            Kirim Pesan
          </motion.button>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Form;
