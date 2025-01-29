"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";
import { IProjectsData } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const ProjectList = ( ) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full   flex flex-col items-center justify-center"
    >
      
      < ProjectLayout />
    </motion.div>
  );
};

export default ProjectList;
