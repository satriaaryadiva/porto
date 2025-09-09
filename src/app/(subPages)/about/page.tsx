import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import { Headphone } from "@/components/models/about/Headphone";
import { Mouse } from "@/components/models/about/Mouse";
import { Controller } from "@/components/models/about/Controller";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Subtle Background Models */}
      <div className="fixed top-0 left-0 -z-50 w-full h-full flex justify-center items-center opacity-10">
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

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fadeInUp">
          <Image
            src="/image/3d-portrait-people.png"
            alt="Satria Arya Diva"
            width={280}
            height={280}
            priority
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="mt-8 font-bold text-4xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white tracking-tight animate-fadeInUp delay-200">
          Satria Arya Diva
        </h1>

        <p className="mt-4 max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fadeInUp delay-400">
          Front-End Developer yang menciptakan pengalaman digital sederhana,
          elegan, dan penuh detail.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 animate-fadeInUp delay-600">
          <Link
            href="mailto:satriaarya125@gmail.com"
            className="px-8 py-3 rounded-full font-medium text-white bg-black dark:bg-white dark:text-black hover:opacity-80 transition"
          >
            Hire Me
          </Link>

          <Link
            href="https://www.linkedin.com/in/satria-arya-diva"
            target="_blank"
            className="px-8 py-3 rounded-full font-medium border border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Collaboration
          </Link>
        </div>
      </div>

      {/* About Details */}
      <AboutDetails />
    </>
  );
}
