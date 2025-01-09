"use client";
 


 import TypingAnimation from "./TypingAnimation";

const Welcome = () => {
  return (
    <div className="flex fixed sm:text-2xl w-10 h-40  z-50 bg-opacity-15 justify-start   m-auto text-wrap text-sm items-center w-30 mx-5 left-2    text-left top-2 mt-20 bg-gray-900 text-white">
      <TypingAnimation text="Hello,i'm satria,web developer , click the button below to see my work  " speed={120} />
    </div>
  );
};

export default Welcome;