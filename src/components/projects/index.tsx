'use client';

import { IProjectsData } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectListProps {
  projects: IProjectsData[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10 md:px-12 lg:px-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
        >
          <div className="relative w-full h-64">
            <Image src={project.image} alt={project.name} fill className="object-cover" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-accent">{project.name}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
            <p className="text-xs text-gray-500">
              Released on: {new Date(project.date).toLocaleDateString()}
            </p>
            <Link
              href={project.demoLink}
              target="_blank"
              className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-center text-gray-900 bg-accent rounded-lg hover:bg-accent/90" name={"sequence"}            >
              View Demo
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
