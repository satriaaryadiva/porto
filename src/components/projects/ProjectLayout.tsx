'use client';

import {   projectsData } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectList = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 gap-8 p-6 md:p-10"
    >
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          className="bg-background bg-gray-900  rounded-lg shadow-md      hover:scale-105 transition-transform duration-300 transform ease-in-out hover:shadow-xl"
        >
          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />

          {/* Project Details */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-accent mb-2">{project.name}</h3>
            <p className="text-sm text-muted mb-4">{project.description}</p>
            <p className="text-xs text-foreground mb-2">
              Date: {new Date(project.date).toDateString()}
            </p>
            <Link
              href={project.demoLink}
              target="_blank"
              className="text-sm text-accent underline"
            >
              View Demo
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
