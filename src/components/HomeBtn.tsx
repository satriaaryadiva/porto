/* eslint-disable react/display-name */
"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import React, { forwardRef } from "react";

const MotionLink = motion(
  forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(
    (props, ref) => <Link ref={ref} {...props} />
  )
);

const HomeBtn = () => {
  return (
    <MotionLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: -3 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      href="/"
      aria-label="Home"
      className="group fixed top-4 left-4 z-50 flex items-center justify-center rounded-full bg-foreground/10 backdrop-blur-md p-2 xs:p-3"
    >
      <Home className="w-6 h-6 xs:w-7 xs:h-7 text-foreground" strokeWidth={1.5} />
      {/* Tooltip */}
      <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 scale-0 opacity-0 rounded-md bg-background px-2 py-1 text-sm text-foreground shadow-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
        Home
      </span>
    </MotionLink>
  );
};

export default HomeBtn;
