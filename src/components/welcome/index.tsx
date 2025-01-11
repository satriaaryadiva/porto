"use client";
 


 import TypingAnimation from "./TypingAnimation";

const Welcome = () => {
  
  return (
    <div className="flex fixed sm:text-2xl w-4/5 h-fit  sm:w-20 sm:h-40 z-50 bg-opacity-15 justify-center sm:justify-end sm:text-wrap   m-auto   text-sm items-center       text-left  mt-20 bg-gray-900 text-white">
      <TypingAnimation text="Hello,i'm satria, i'm a web developer , click the button below to see my work  " speed={120} />
    </div>
  );
};

export default Welcome;