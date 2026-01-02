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
    <section className="relative py-24 px-6 bg-gradient-to-b from-purple-950/30 to-blue-950/30 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</h2>
          <p className="text-slate-400 text-lg">Industry-recognized credentials validating expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg p-8 border border-blue-500/30 hover:border-purple-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-purple-500/30 bg-gradient-to-br from-blue-950/40 to-purple-950/40"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-all duration-300`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Issued: {cert.year}</p>
                  {cert.expiresIn && <p className="text-xs text-purple-400">Expires: {cert.expiresIn}</p>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
