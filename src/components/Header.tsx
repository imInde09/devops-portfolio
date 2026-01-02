"use client";

import { Terminal } from "lucide-react";

export default function Header() {
  return (
    <nav className="relative border-b border-blue-500/20 glass backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
            <Terminal className="w-6 h-6 text-slate-950" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Prathamesh.Inde</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#expertise" className="text-sm hover:text-blue-400 transition">
            Skills
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
