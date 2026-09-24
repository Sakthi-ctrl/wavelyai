"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export default function HeroSection({ onOpenContact, onOpenDemo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[82vh] lg:min-h-[86vh] pt-36 sm:pt-40 lg:pt-44 pb-24 sm:pb-28 lg:pb-32 overflow-hidden bg-slate-950 flex items-center"
    >
      {/* FULL-WIDTH BACKGROUND IMAGE (User-provided luminous cyber wave) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_wave_full.png"
          alt="Wavelyn AI - Full Width Luminous Wave"
          fill
          priority
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Directional Shading & Readability Overlays */}
        {/* Left-to-right gradient ensuring crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        {/* Top subtle vignette for navbar blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-transparent to-slate-950/90" />
        {/* Radial cyan glow accent */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.14] sm:leading-[1.1] mb-6 sm:mb-8">
            Real Possibilities <br />
            <span className="text-slate-200">with </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-slate-200/90 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-2xl mb-9 sm:mb-11">
            Wavelyn AI helps organizations understand, automate and grow with AI — from the Eastern Coast to every industry, globally.
          </p>

        </div>
      </div>
    </section>
  );
}
