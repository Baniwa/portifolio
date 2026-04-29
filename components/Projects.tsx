"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "This Portfolio",
    description:
      "Built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion. Designed for performance and international visibility. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/Baniwa",
    live: null,
    featured: true,
  },
  {
    title: "PHP Portfolio",
    description:
      "A responsive portfolio website built with PHP and HTML/CSS as part of the Rocketseat training program. Demonstrates clean layout, semantic markup, and server-side templating.",
    tags: ["PHP", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Baniwa/php-portifolio-rocketseat",
    live: null,
    featured: false,
  },
  {
    title: "Task Manager API",
    description:
      "A RESTful backend API for task management built with PHP. Implements CRUD operations, structured routing, and clean separation of concerns.",
    tags: ["PHP", "REST API", "CRUD", "MySQL"],
    github: "https://github.com/Baniwa/crud-tarefas-backend-basico",
    live: null,
    featured: false,
  },
  {
    title: "Travel Guide",
    description:
      "A single-page travel destination guide built as a Rocketseat practical challenge. Focuses on responsive design, typography, and visual storytelling with pure HTML and CSS.",
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/Baniwa/rocketseat-travel-guide",
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-3">03. projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What I&apos;ve Built</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            A selection of projects I&apos;ve worked on — from training exercises to
            production-ready tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-slate-900/50 border rounded-xl p-6 flex flex-col card-hover ${
                project.featured
                  ? "border-violet-500/30"
                  : "border-slate-800/50"
              }`}
            >
              {project.featured && (
                <span className="text-xs text-violet-400 font-mono mb-3">
                  ⭐ Featured
                </span>
              )}
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <GithubIcon size={15} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-violet-400 text-sm transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Baniwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 text-sm transition-colors border border-slate-700 hover:border-violet-500/50 px-5 py-2.5 rounded-lg"
          >
            <GithubIcon size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
