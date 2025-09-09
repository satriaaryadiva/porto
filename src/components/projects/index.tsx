'use client';

import { IProjectsData } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectListProps {
  projects: IProjectsData[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
        🚧 No projects available yet
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 px-6 py-12 md:px-12 lg:px-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <h1>Projects</h1>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          whileHover={{ y: -6, scale: 1.03 }}
          className="relative bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-xl border border-gray-700"
        >
          {/* Thumbnail */}
          <div className="relative w-full h-56">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-110"
              unoptimized // kalau pakai local images di public/
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-accent tracking-tight">
              {project.name}
            </h3>

            <p className="text-sm text-gray-300 line-clamp-3">
              {project.description}
            </p>

            <p className="text-xs font-medium text-gray-400 uppercase">
              {project.tools}
            </p>

            <p className="text-xs text-gray-500">
              📅 {new Date(project.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>

            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-accent rounded-lg hover:bg-accent/90 transition-colors"
            >
              View Demo <ExternalLink size={16} />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
