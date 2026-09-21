"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, Sparkles, Activity, ShieldCheck, Compass } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export default function HeroSection({ onOpenContact, onOpenDemo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] lg:min-h-[92vh] pt-32 pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-950 flex items-center"
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
        {/* Radial cyan glow accent */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Floating Ambient Callout Badges across the Full-Width Wave (Reference Matching) */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge 1: PEOPLE POTENTIAL */}
        <div className="absolute top-24 right-[42%] flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-xl animate-float pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>PEOPLE POTENTIAL</span>
        </div>

        {/* Badge 2: INTELLIGENCE IN ACTION */}
        <div className="absolute top-16 right-[24%] flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-sky-400/40 text-sky-300 text-xs font-bold tracking-wider uppercase shadow-xl pointer-events-auto">
          <Activity className="w-3.5 h-3.5 text-sky-400" />
          <span>INTELLIGENCE IN ACTION</span>
        </div>

        {/* Badge 3: A BRIGHTER TOMORROW */}
        <div className="absolute top-20 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-blue-400/40 text-blue-200 text-xs font-bold tracking-wider uppercase shadow-xl pointer-events-auto">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>A BRIGHTER TOMORROW</span>
        </div>

        {/* Bottom Inset Ribbon: "From the Eastern Coast to a More Intelligent World." */}
        <div className="absolute bottom-12 right-8 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-white shadow-2xl pointer-events-auto">
          <div className="flex flex-col text-right">
            <span className="text-xs font-semibold text-slate-200">
              From the Eastern Coast to a More Intelligent World.
            </span>
            <div className="flex items-center justify-end gap-1.5 mt-0.5">
              <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
              <span className="h-[2px] w-12 bg-sky-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Regional / Enterprise Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>EASTERN COAST ENTERPRISE AI • GLOBAL IMPACT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Real Possibilities <br />
            <span className="text-slate-200">with </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-2xl font-semibold text-slate-100 leading-snug">
            Practical AI solutions that help businesses move forward.
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Wavelyn AI helps organizations understand, automate and grow with AI — from the Eastern Coast to every industry, globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cyan-500/40"
            >
              <span>Start the Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-slate-900/70 hover:bg-slate-800/90 text-white font-semibold text-sm sm:text-base border border-slate-700/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:border-slate-500"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-cyan-400">
                <Play className="w-3 h-3 fill-cyan-400 ml-0.5" />
              </div>
              <span>See How It Works</span>
            </button>
          </div>

          {/* Architecture Micro Flow */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-slate-400 flex-wrap">
            <span className="text-slate-300">Architecture:</span>
            <span className="text-cyan-400">Capture</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-400">Understand</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-400">Decide</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-400">Act</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-300 font-bold">Automate</span>
          </div>

        </div>
      </div>
    </section>
  );
}
