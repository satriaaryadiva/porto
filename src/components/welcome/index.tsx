"use client";

import TypingAnimation from "./TypingAnimation";

const Welcome = () => {
  return (
    <div
      className="fixed z-50 text-white font-bold text-sm sm:text-2xl 
      flex items-center justify-start text-left bg-opacity-15 
      h-fit w-fit
        top-1 
      sm:top-auto sm:left-auto sm:bottom-4 sm:right-4"
    >
    <TypingAnimation
  text="Hello, I'm  Satria , I'm a web developer. Click the button below to know more 📈🚀"
  speed={100}
/>

    </div>
  );
};

export default Welcome;
