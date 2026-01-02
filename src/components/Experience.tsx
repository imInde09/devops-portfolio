"use client";

import { ChevronRight } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="relative py-24 px-6 bg-gradient-to-b from-purple-950/30 to-blue-950/30 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Professional Journey</h2>
            <p className="text-slate-400 text-lg">A glimpse into my career progression and key milestones</p>
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="ml-0 md:ml-1/2 pl-8 md:pl-8 relative group">
              <div className="absolute -left-4 md:-left-5 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

              <div className="glass border-blue-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all bg-gradient-to-br from-blue-950/40 to-purple-950/40">
                <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                <p className="text-sm text-purple-400 mb-3">
                  {exp.company} · {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2 text-slate-300 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
