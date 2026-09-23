"use client";

import React from "react";
import { Compass, ShieldCheck, MapPin, Building, Target } from "lucide-react";

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-5 bg-sky-600 rounded-full" />
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                ABOUT WAVELYN AI
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Turning the Possibilities of AI into Practical Business Outcomes.
            </h2>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <Building className="w-3.5 h-3.5 text-sky-600" />
              <span>A Brand of Drivita LLC</span>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              From the Eastern Coast of the United States, Wavelyn AI brings together enterprise intelligence, AI agents, workflow automation and custom AI engineering to help organizations understand their business, automate processes and create better experiences.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our approach is simple: <strong className="text-slate-900 font-semibold">start with a real business problem, apply the right intelligence, and build for measurable impact.</strong> Rather than deploying disconnected tools, we craft solutions designed for enterprise resilience and continuous learning.
            </p>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Target className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="font-bold text-xs text-slate-900 mb-1">Outcome-Led</h4>
                <p className="text-[11px] text-slate-600">Every deployment is evaluated by measurable ROI and speed.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-xs text-slate-900 mb-1">Enterprise-Grade</h4>
                <p className="text-[11px] text-slate-600">Security, compliance, and multi-tenant data safety by design.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-cyan-600 mb-2" />
                <h4 className="font-bold text-xs text-slate-900 mb-1">Eastern Coast Roots</h4>
                <p className="text-[11px] text-slate-600">Serving regional enterprises and global corporations.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 sm:p-10 text-white border border-slate-800 shadow-2xl relative">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-cyan-400 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                Executive Mission
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                "Start Anywhere. Connect Everything."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From one AI use case to enterprise-wide intelligence and autonomous operations, Wavelyn helps businesses move forward — one practical outcome at a time.
              </p>
            </div>
          </div>

        </div>

        {/* Core Philosophy Banner (Start Anywhere. Connect Everything) */}
        <div className="mt-16 lg:mt-20 bg-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 block mb-2">
                OUR CORE PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Start Anywhere. Connect Everything.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                Start with an asynchronous interview, a customer-service agent, enterprise intelligence use case or one automated workflow — then expand horizontally across your business.
              </p>
            </div>

            {/* 4 Phases Progression Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex flex-col justify-center">
                <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-400 block mb-1">
                  PHASE 1
                </span>
                <span className="font-bold text-sm sm:text-base text-white block">
                  One Use Case
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">
                  Immediate ROI in days
                </span>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex flex-col justify-center">
                <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-400 block mb-1">
                  PHASE 2
                </span>
                <span className="font-bold text-sm sm:text-base text-white block">
                  One Department
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">
                  Process redesign
                </span>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex flex-col justify-center">
                <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-400 block mb-1">
                  PHASE 3
                </span>
                <span className="font-bold text-sm sm:text-base text-white block">
                  Connected Enterprise
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">
                  Cross-functional context
                </span>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/90 border-2 border-cyan-500 text-center flex flex-col justify-center shadow-[0_0_20px_rgba(6,182,212,0.18)]">
                <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-400 block mb-1">
                  TARGET STATE
                </span>
                <span className="font-bold text-sm sm:text-base text-white block">
                  Autonomous Operations
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 mt-1 block">
                  Self-optimizing enterprise
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
