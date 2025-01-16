"use client";

import TypingAnimation from "./TypingAnimation";

const Welcome = () => {
  return (
    <div
      className="fixed z-50 text-white font-bold text-sm sm:text-2xl
      flex items-center justify-start bg-opacity-15
      h-fit w-fit top-2 m-auto sm:bottom-4 sm:right-4 ease-in-out sm:top-auto sm:left-auto"
    >
      <TypingAnimation
        text="Hello, I'm Satria, a web developer. Click the floating button to know more 📈🚀"
        speed={100}
      />
    </div>
  );
};

export default Welcome;
