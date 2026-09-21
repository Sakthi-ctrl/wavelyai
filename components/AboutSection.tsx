"use client";

import React from "react";
import { Compass, ShieldCheck, MapPin, Building, Award, Target, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenContact: () => void;
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

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold shadow transition-all"
              >
                <span>Connect with Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Mission Card & Metrics */}
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
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                From one AI use case to enterprise-wide intelligence and autonomous operations, Wavelyn helps businesses move forward — one practical outcome at a time.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Parent Entity:</span>
                  <strong className="text-slate-200 font-semibold">Drivita LLC</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Brand:</span>
                  <strong className="text-cyan-300 font-semibold">Wavelyn AI</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Headquarters:</span>
                  <strong className="text-slate-200 font-semibold">Eastern Coast, USA</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Coverage:</span>
                  <strong className="text-slate-200 font-semibold">7 Key Global Industries</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
