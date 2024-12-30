import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import { Headphone } from "@/components/models/about/Headphone";
import { Mouse } from "@/components/models/about/Mouse";
import { Controller } from "@/components/models/about/Controller";

export default function About() {
  return (
    <>
      {/* Background */}
      <div
        className="-z-50 top-0 left-0 fixed w-full h-full bg-cover bg-center opacity-25"
       
      ></div>

      {/* Models */}
      <div className="absolute w-full h-screen top-0 left-0">
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

      {/* Text Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div  className=" border-solid border-b-4 border-b-teal-400 absolute w-full text-center top-[45%] md:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          
          <Image
              src="/image/3d-portrait-people.png"
              alt="Logo"
              width={400}
              height={400}
              className="flex justify-cent"/>
         <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-xl lg:text-8xl xl:text-8xl text-accent">
            Satria Arya Diva{" "}
          
          </h1>
        </div>
      </div>

      {/* About Details */}
      <AboutDetails />
    </>
  );
}
