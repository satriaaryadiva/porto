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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 px-6 py-12 md:px-12 lg:px-20"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group relative flex flex-col justify-between bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-accent/20 hover:border-accent/30"
        >
          {/* Thumbnail */}
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

            {/* Floating Date Badge */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-gray-300">
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300/90 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tools Badges */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              {project.tools.split(",").map((tool, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded border border-accent/20"
                >
                  {tool.trim()}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-black bg-[#53FC18] rounded-xl hover:bg-[#45d414] transition-all duration-300 shadow-[0_0_15px_rgba(83,252,24,0.3)] hover:shadow-[0_0_25px_rgba(83,252,24,0.5)] transform translate-y-0"
            >
              View Project <ExternalLink size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
