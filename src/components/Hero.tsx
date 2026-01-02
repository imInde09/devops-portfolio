"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    visibleLogs: string[];
    showHero: boolean;
}

export default function Hero({ visibleLogs, showHero }: HeroProps) {
    return (
        <section className="relative flex flex-col items-center pt-8 sm:pt-12 lg:pt-20 px-3 sm:px-6 pb-6 sm:pb-8 lg:pb-12">
            <div className="max-w-4xl w-full">
                {!showHero ? (
                    <div className="glass border-green-500/40 rounded-lg p-4 sm:p-8 animate-fade-in">
                        <div className="font-mono text-xs sm:text-sm text-green-400 space-y-0.5 h-64 sm:h-96 overflow-hidden">
                            {visibleLogs.map((log, i) => (
                                <div key={i} className="animate-slide-in-bottom break-words">
                                    {log}
                                    {i === visibleLogs.length - 1 && (
                                        <span className="animate-pulse">▊</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 sm:space-y-8 animate-fade-in">
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center lg:items-start">
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-green-500/50 group hover:border-green-400 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br z-10 pointer-events-none" />
                                    <Image
                                        src="/profile.jpg"
                                        alt="Prathamesh Inde"
                                        fill
                                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 256px"
                                        className="object-cover"
                                        priority
                                        quality={95}
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 w-full text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight sm:tracking-tighter mb-3 sm:mb-4">
                                    <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                                        DevOps & SRE
                                    </span>
                                    <br />
                                    <span className="text-white">Platform Engineer</span>
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 mt-4 sm:mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Cloud Platform & DevOps Engineer with 3+ years of experience building scalable CI/CD automation
                                    pipelines, optimizing cloud-native infrastructure across AWS, GCP, and Azure. Certified across
                                    multiple cloud platforms with a strong foundation in security, observability, and automation engineering.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                                    <a
                                        href="#experience"
                                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-sm sm:text-base"
                                    >
                                        Explore My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-green-500/50 rounded-lg hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 text-sm sm:text-base"
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
