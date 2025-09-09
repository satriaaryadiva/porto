"use client";

import { Home } from "lucide-react";
import MotionLink from "./MotionLink";

const NavButton = () => {
  return (
    <MotionLink
    
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      href="/"
      className="group fixed top-4 left-4 z-50 flex items-center justify-center rounded-full bg-foreground/10 backdrop-blur-md p-3"
      aria-label="Home"
    >
      <div></div>
      <Home className="w-6 h-6 text-foreground" strokeWidth={1.5} />
      {/* Tooltip */}
      <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 scale-0 opacity-0 rounded-md bg-background px-2 py-1 text-sm text-foreground shadow-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        Home
      </span>
    </MotionLink>
  );
};

export default NavButton;
