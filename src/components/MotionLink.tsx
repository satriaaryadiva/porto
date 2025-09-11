"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";

const MotionLink = motion(
  forwardRef<
    HTMLAnchorElement,
    LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
  >(function MotionLink({ children, href, ...props }, ref) {
    return (
      <Link href={href} ref={ref} {...props}>
        {children}
      </Link>
    );
  })
);

MotionLink.displayName = "MotionLink";

export default MotionLink;
