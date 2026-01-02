"use client";

import { GithubIcon, ExternalLink } from "lucide-react";


interface Project {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    github?: string;
    live?: string;
}

interface ProjectsProps {
    projectsData: Project[];
}

export default function Projects({ projectsData }: ProjectsProps) {
    return (
        <section id="projects" className="relative py-16 sm:py-24 px-3 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Featured Projects</h2>
                    <p className="text-slate-400 text-sm sm:text-lg">Real-world projects demonstrating DevOps expertise</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="group glass border-green-500/20 hover:border-green-500/50 rounded-lg p-4 sm:p-8 transition-all duration-300 hover:bg-green-500/5"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">{project.title}</h3>
                                        <p className="text-slate-300 text-sm sm:text-lg mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                                    </div>
                                    
                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center flex-shrink-0">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm font-semibold"
                                            >
                                                <GithubIcon className="w-4 h-4" />
                                                <span className="hidden sm:inline">GitHub</span>
                                                <span className="sm:hidden">Github</span>
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 text-xs sm:text-sm font-semibold"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="hidden sm:inline">Live</span>
                                                <span className="sm:hidden">Live</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                                    {project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                            <span className="line-clamp-1">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-slate-800 border border-slate-700 text-green-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
