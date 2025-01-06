"use client";
import dynamic from "next/dynamic";


const TypingAnimation = dynamic(() => import("./typing"), { ssr: false });

const Welcome = () => {
  return (
    <div className="flex fixed sm:text-2xl  text-sm items-center w-30 mx-5 left-20 h-fit text-left top-2 mt-20 bg-gray-900 text-white">
      <TypingAnimation text="Hello,i'm satria,web developer , click the button below to see my work  " speed={120} />
    </div>
  );
};

export default Welcome;
