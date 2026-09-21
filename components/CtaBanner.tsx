"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenContact: () => void;
}

export default function CtaBanner({ onOpenContact }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 border-t border-slate-800">
      {/* Background Luminous Wave Image & Radiance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_wave.jpg"
          alt="Wavelyn AI Ambient Wave"
          fill
          className="object-cover object-center opacity-40 mix-blend-screen scale-105 animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Content */}
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 block">
              LET'S BUILD WHAT'S NEXT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Turn Possibilities into Progress.
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Talk to our team and explore how Wavelyn AI can help your organization move forward.
            </p>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

        </div>

        {/* Bottom Tagline Watermark (Matching Reference: "RIDE THE WAVE OF INTELLIGENCE") */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-mono">
          <span>Wavelyn AI Enterprise Architecture</span>
          <span className="tracking-widest uppercase text-cyan-400/90 font-bold mt-2 sm:mt-0">
            RIDE THE WAVE OF INTELLIGENCE
          </span>
        </div>
      </div>
    </section>
  );
}
