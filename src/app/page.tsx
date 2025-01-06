import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    
      <Image
        src={bg}
        alt="background-image"
        fill
        priority
        sizes="100vw"
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />
      <Welcome />
      <div className="w-full h-screen">
        <Navigation />
        
        <RenderModel>
        
          <Harry />
        </RenderModel>
      </div>
    </main>
  );
}
