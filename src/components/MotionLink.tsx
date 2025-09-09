/* eslint-disable react/display-name */
"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";

// bikin motion wrapper yang ngerti <a>
const MotionLink = motion(
  forwardRef<HTMLAnchorElement, LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ children, ...props }, ref) => (
      <Link ref={ref} {...props}>
        {children}
      </Link>
    )
  )
);

MotionLink.displayName = "MotionLink";

export default MotionLink;
