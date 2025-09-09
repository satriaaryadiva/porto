/* eslint-disable react/display-name */
"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";

// bikin motion wrapper yang ngerti <a>
const MotionLink = motion(
  forwardRef<HTMLAnchorElement, LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ children, href, ...props }, ref) => (
      <Link href={href} passHref legacyBehavior>
        <a ref={ref} {...props}>
          {children}
        </a>
      </Link>
    )
  )
);

MotionLink.displayName = "MotionLink";

export default MotionLink;
