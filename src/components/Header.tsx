"use client";

import { Terminal } from "lucide-react";

export default function Header() {
    return (
        <nav className="relative border-b border-blue-500/20 glass backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    {/* Logo box */}
                    <div className="w-10 h-10 rounded-lg border border-blue-500/40 flex items-center justify-center
                  transition-all duration-300
                  group-hover:border-blue-400
                  group-hover:shadow-lg group-hover:shadow-blue-500/40">
                        <span className="font-bold text-sm text-blue-400
                     transition-colors duration-300
                     group-hover:text-blue-300">
                            PI
                        </span>
                    </div>

                    {/* Name */}
                    <span className="font-semibold text-lg text-slate-200
                   transition-all duration-300
                   group-hover:text-white">
                        Prathamesh Inde
                    </span>
                </div>


                <div className="flex items-center gap-8">
                    <a href="#skills" className="text-sm hover:text-blue-400 transition">
                        Skills
                    </a>
                    <a href="#experience" className="text-sm hover:text-blue-400 transition">
                        Experience
                    </a>
                    <a href="#projects" className="text-sm hover:text-blue-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="text-sm hover:text-blue-400 transition">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
