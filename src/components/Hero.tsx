"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  visibleLogs: string[];
  showHero: boolean;
}

export default function Hero({ visibleLogs, showHero }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        {!showHero ? (
          <div className="glass border-green-500/40 rounded-lg p-8 animate-fade-in">
            <div className="font-mono text-sm text-green-400 space-y-0.5 h-96 overflow-hidden">
              {visibleLogs.map((log, i) => (
                <div key={i} className="animate-slide-in-bottom">
                  {log}
                  {i === visibleLogs.length - 1 && (
                    <span className="animate-pulse">▊</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-green-500/50 group hover:border-green-400 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 z-10 pointer-events-none" />
                  <Image
                    src="/profile.jpg"
                    alt="Prathamesh Inde"
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover"
                    priority
                    quality={95}
                  />
                </div>
                <p className="text-center mt-4 text-sm text-slate-400">
                  💡 Your profile photo
                </p>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                  <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                    DevOps & SRE
                  </span>
                  <br />
                  <span className="text-white">Platform Engineer</span>
                </h1>
                <p className="text-lg text-slate-300 mt-6 leading-relaxed max-w-2xl">
                  Cloud Platform & DevOps Engineer with 3+ years of experience building scalable CI/CD automation
                  pipelines, optimizing cloud-native infrastructure across AWS, GCP, and Azure. Certified across
                  multiple cloud platforms with a strong foundation in security, observability, and automation engineering.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                  >
                    Explore My Work <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-green-500/50 rounded-lg hover:border-green-400 hover:bg-green-500/10 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
