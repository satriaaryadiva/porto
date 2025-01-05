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
        className="-z-50 top-0 left-0 fixed w-full h-full bg-cover flex flex-row justify-strecth       bg-center opacity-25"
       
      ><RenderModel>
      <Headphone />
    </RenderModel>
    <RenderModel>
      <Mouse />
    </RenderModel><RenderModel>
          <Controller />
        </RenderModel></div>

      {/* Models */}
     
      
 

      {/* Text Section */}
      <div className="relative w-full  h-full   "><Image
              src="/image/3d-portrait-people.png"
              alt="Logo"
              width={300}
              priority
              height={300}
              className="flex justify-central m-auto h-auto w-auto"/>
     
        <div  className="    absolute   py-5 mt-4 rounded-2xl bg-black sm:bg-transparent  w-full text-center top-[45%]   left-1/2 -translate-y-1/2 -translate-x-1/2">
          
        
         <h1 className="font-bold md:font-extrabold text-4xl xs:text-5xl sm:text-6xl   lg:text-8xl xl:text-8xl text-accent">
            Satria Arya Diva{" "}
          
          </h1>
        </div>
      </div>

      {/* About Details */}
      <AboutDetails />
    </>
  );
}
