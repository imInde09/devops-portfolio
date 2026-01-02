"use client";

import { Shield, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  expiresIn?: string;
  color: string;
  url: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="relative py-16 sm:py-24 px-3 sm:px-6 bg-gradient-to-b from-purple-950/30 to-blue-950/30 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</h2>
          <p className="text-slate-400 text-sm sm:text-lg">Industry-recognized credentials validating expertise</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg p-5 sm:p-8 border border-blue-500/30 hover:border-purple-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-purple-500/30 bg-gradient-to-br from-blue-950/40 to-purple-950/40"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-all duration-300`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">{cert.issuer}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 text-xs sm:text-sm">
                  <p className="text-slate-500">Issued: {cert.year}</p>
                  {cert.expiresIn && <p className="text-purple-400">Expires: {cert.expiresIn}</p>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
