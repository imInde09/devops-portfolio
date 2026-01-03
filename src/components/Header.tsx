"use client";

import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const RESUME_URL = "https://resume.prathameshinde.site";

    const navLinks = [
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="relative sticky top-0 z-50 border-b border-blue-500/20 bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Name */}
                    <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                        <div
                            className="
                w-8 h-8 sm:w-10 sm:h-10 rounded-lg
                border border-blue-500/40
                flex items-center justify-center
                transition-all duration-300
                group-hover:border-blue-400
                group-hover:shadow-lg group-hover:shadow-blue-500/40
              "
                        >
                            <span
                                className="
                  font-bold text-xs sm:text-sm text-blue-400
                  transition-colors duration-300
                  group-hover:text-blue-300
                "
                            >
                                PI
                            </span>
                        </div>

                        <span
                            className="
                font-semibold text-base sm:text-lg text-slate-200
                transition-all duration-300
                group-hover:text-white
                hidden sm:inline
              "
                        >
                            Prathamesh Inde
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 sm:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 transition"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Resume Button */}
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                ml-2 inline-flex items-center gap-2
                px-4 py-2 rounded-lg text-xs sm:text-sm font-medium
                border border-blue-500/40 text-blue-400
                hover:bg-blue-500/10 hover:border-blue-400
                transition-all
                shadow-sm hover:shadow-blue-500/30
              "
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-blue-400 transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-3 pt-3 border-t border-blue-500/20">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="
                  block px-3 py-2 text-sm
                  text-slate-300 hover:text-blue-400
                  hover:bg-blue-500/10 rounded transition
                "
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Mobile Resume Button */}
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                mt-2 block px-3 py-2 text-sm font-medium
                text-blue-400 border border-blue-500/40 rounded
                hover:bg-blue-500/10 transition
              "
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
