"use client";

import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  highlights: string[];
  github: string;
}

interface ProjectsProps {
  projectsData: Project[];
}

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg">Real-world projects demonstrating DevOps expertise</p>
        </div>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group glass border-green-500/20 hover:border-green-500/50 rounded-lg p-8 transition-all duration-300 hover:bg-green-500/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-semibold">GitHub</span>
                      </a>
                    )}
                  </div>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-cyan-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ml-6 hidden md:flex items-center justify-center w-32 h-32 rounded-lg bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-1">Impact</div>
                    <div className="text-lg font-bold text-green-400">{project.impact}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
