"use client";

import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Recognition {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon?: string; // main certificate image
  url?: string;  // certificate / paper link
  color: string;
}

interface RecognitionsProps {
  recognitions: Recognition[];
}

export default function Recognitions({ recognitions }: RecognitionsProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative py-16 sm:py-24 px-3 sm:px-6 bg-gradient-to-b from-amber-950/30 to-orange-950/30 border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Recognitions & Awards
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg">
            Achievements and recognition from industry leaders
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl p-5 sm:p-6 border border-amber-500/30
                         bg-gradient-to-br from-amber-950/40 to-orange-950/40
                         hover:border-orange-500 transition-all duration-300
                         hover:shadow-lg hover:shadow-orange-500/30 group"
            >
              {/* Glow layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${recognition.color}
                            opacity-5 group-hover:opacity-10 transition-all duration-300`}
              />

              <div className="relative flex flex-col h-full">
                {/* Image */}
                {recognition.icon && (
                  <div
                    className="mb-4 rounded-lg overflow-hidden cursor-pointer
                               transition-all duration-300
                               group-hover:scale-[1.02]
                               group-hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]"
                    onClick={() => setActiveImage(recognition.icon!)}
                  >
                    <Image
                      src={recognition.icon}
                      alt={recognition.title}
                      width={400}
                      height={240}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors">
                    {recognition.title}
                  </h3>
                </div>

                {/* Issuer */}
                <p className="text-slate-400 text-sm mb-3">
                  {recognition.issuer}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed flex-1">
                  {recognition.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-slate-500 text-xs font-medium">
                    {recognition.date}
                  </span>

                  {recognition.url && (
                    <a
                      href={recognition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5
                                 text-xs font-semibold rounded-md
                                 border border-amber-500/40 text-amber-400
                                 hover:bg-amber-500/10 hover:border-amber-400
                                 transition-all"
                    >
                      Visit Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <Image
            src={activeImage}
            alt="Certificate preview"
            width={800}
            height={600}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
