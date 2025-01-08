import {
  Github,
  Home,
  Instagram,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";
import { IBtnList } from "@/app/data";

const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto font-extrabold" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "instagram":
      return <Instagram className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion.create(Link);

interface INavBtn extends IBtnList {
  x: number | string;
  y: number | string;
  labelDirection?: "left" | "right";
}

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}: INavBtn) => {
  return (
    <ResponsiveComponent>
      {({ size }: { size: number }) => {
        return size && size >= 480 ? (
          <div
            className="w-fit absolute font-black cursor-pointer z-50"
            style={{ transform: `translate(${x},${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent bg-cyan-300 rounded-full text-black">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute border-white border-2 border-solid peer-hover:inline-block px-2 py-1 left-full mx-0 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50">
            <NavLink
              href={link}
              variants={item}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full  font-extrabold flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-10 h-10 bg-cyan-300 text-black text-xl rounded-full font-black xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 top-full mx-2  -translate-y-1/2 bg-background text-foreground   text-sm rounded-md border-2 border-white font-extraboldshadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
