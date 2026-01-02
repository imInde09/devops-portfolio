"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-blue-950/30 to-purple-950/30 border-t border-blue-500/20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let&apos;s Build Together</h2>
                    <p className="text-slate-400 text-lg">
                        Looking to transform your infrastructure or discuss DevOps strategies?
                    </p>
                </div>

                <div className="glass border-blue-500/30 rounded-lg p-12 mb-8 bg-gradient-to-br from-blue-950/40 to-purple-950/40">
                    <div className="font-mono text-left text-sm space-y-1 mb-6">
                        <div className="text-blue-400">$ whoami</div>
                        <div className="text-purple-400">Prathamesh Inde – DevOps & SRE Engineer</div>
                        <div className="text-blue-400">$ contact</div>
                        <div className="text-slate-300">prathameshinde86@gmail.com</div>
                        <div className="text-slate-300">Mumbai, India</div>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="mailto:prathameshinde86@gmail.com"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                        Send Email
                    </a>
                    <a
                        href="https://github.com/imInde09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-blue-500/50 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 justify-center"
                    >
                        <FaGithub className="w-5 h-5" />
                        View GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prathameshinde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-blue-500/50 rounded-lg hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2 justify-center"
                    >
                        <FaLinkedin className="w-5 h-5" />
                       LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
