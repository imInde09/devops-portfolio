"use client";

import { useState } from "react";
import { IconType } from "react-icons/lib";

interface TechTool {
  name: string;
  icon: IconType;
  category: string;
}

interface SkillsProps {
  techTools: TechTool[];
}

/* ---------------- COMPONENT ---------------- */

export default function Skills({ techTools }: SkillsProps) {
    const [showTechCategory, setShowTechCategory] = useState(true);

    const categories = Array.from(
        new Set(techTools.map((tool) => tool.category))
    );

    return (
        <section
            id="skills"
            className="relative py-24 px-6 bg-gradient-to-b from-blue-950/30 via-purple-950/30 to-slate-950/30 border-y border-blue-500/20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Technologies & Tools
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Expertise across DevOps, Cloud, and Infrastructure Automation
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setShowTechCategory(true)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${showTechCategory
                                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                : "border border-blue-500/30 text-slate-300"
                            }`}
                    >
                        By Category
                    </button>

                    <button
                        onClick={() => setShowTechCategory(false)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${!showTechCategory
                                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                : "border border-blue-500/30 text-slate-300"
                            }`}
                    >
                        All Technologies
                    </button>

                </div>

                {/* ALL TECHNOLOGIES */}
                {!showTechCategory && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {techTools.map((tool, idx) => (
                            <div
                                key={idx}
                                className="group rounded-xl p-5 bg-blue-950/40 border border-blue-500/20 text-center hover:scale-105 transition"
                            >
                                <tool.icon className="mx-auto mb-3 h-9 w-9 text-blue-400 group-hover:text-purple-400 transition" />
                                <p className="font-semibold text-sm text-white">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* BY CATEGORY */}
                {showTechCategory && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="rounded-xl border border-blue-500/20 bg-blue-950/30 p-4"
                            >
                                {/* Category header */}
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                                    <h3 className="text-sm font-semibold text-blue-300">
                                        {category}
                                    </h3>
                                </div>

                                {/* Tools grid – compact */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {techTools
                                        .filter((tool) => tool.category === category)
                                        .map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className="group flex flex-col items-center justify-center rounded-md p-2 bg-slate-900/40 border border-slate-700/30 hover:border-blue-400/50 transition"
                                            >
                                                <tool.icon className="h-5 w-5 text-slate-300 group-hover:text-blue-400 transition" />
                                                <span className="mt-0.5 text-[11px] text-slate-300 text-center leading-tight">
                                                    {tool.name}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
