"use client";

import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

type MotionLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
  "aria-label"?: string;
};

const MotionLink = motion(
  forwardRef<HTMLAnchorElement, MotionLinkProps>(function MotionLink(
    { children, className, ...props },
    ref
  ) {
    return (
      <Link {...props} ref={ref} className={className}>
        {children}
      </Link>
    );
  })
);

export default MotionLink;
