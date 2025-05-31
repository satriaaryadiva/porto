import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen scroll-smooth flex-col items-center justify-between relative overflow-hidden">
      <Image
        src={bg}
        alt="background-image"
        fill
        fetchPriority="high"
        sizes="100vw"
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />

      <div className="w-full h-screen relative z-10">
        <RenderModel>
          <Harry />
        </RenderModel>
        <Navigation />
      </div>

      <Welcome />
    </main>
  );
}

