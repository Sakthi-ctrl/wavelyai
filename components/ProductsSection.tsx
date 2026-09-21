"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Video,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Layers,
  Zap,
  Bot,
  Search,
  Check,
  UserCheck,
} from "lucide-react";

interface ProductsSectionProps {
  onOpenProductDemo: (productName: string) => void;
}

export default function ProductsSection({ onOpenProductDemo }: ProductsSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-5 bg-sky-600 rounded-full" />
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                OUR PRODUCTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Three AI Products. One Intelligent Enterprise.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-3xl">
              Deploy each independently — or connect them to create an intelligent, autonomous enterprise.
            </p>
          </div>
          <a
            href="#how-they-work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 group shrink-0"
          >
            <span>View Architecture</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Main Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Product 1: Wavelyn Vision */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header & Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                  <Video className="w-6 h-6 text-sky-600" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Video Intelligence
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Wavelyn Vision
              </h3>
              <p className="text-xs font-semibold text-sky-600 mb-3">
                Asynchronous Video Intelligence Platform
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Capture, interview, assess and understand people through AI-powered asynchronous video. AI-powered evaluation workflows for talent, customers and stakeholders.
              </p>

              {/* UI Preview Mockup */}
              <div className="relative rounded-xl border border-slate-200 bg-slate-950 overflow-hidden shadow-inner aspect-[16/10] mb-6">
                <Image
                  src="/images/candidate_interview.jpg"
                  alt="Wavelyn Vision Async Interview"
                  fill
                  className="object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />

                {/* Live Candidate Match Score Indicator */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm text-white text-[11px] font-bold flex items-center gap-1 shadow">
                  <UserCheck className="w-3 h-3" />
                  <span>94% Score</span>
                </div>

                {/* Subtitle tag */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700 text-left">
                  <p className="text-[11px] font-medium text-slate-200 truncate">
                    "Describe how you solved a complex system outage."
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] text-cyan-300 font-mono">
                      Sentiment: Confident • Tech Depth: High
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenProductDemo("Wavelyn Vision")}
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 pt-2 border-t border-slate-100 group-hover:translate-x-0.5 transition-all text-left"
            >
              <span>Explore Vision Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Product 2: Wavelyn Intelligence */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header & Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                  <Database className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Enterprise System
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Wavelyn Intelligence
              </h3>
              <p className="text-xs font-semibold text-emerald-600 mb-3">
                Enterprise Intelligence System
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Connect multiple systems into one AI intelligence layer. Search, analyze and generate insights across ERP, CRM, HRMS, databases and legacy files.
              </p>

              {/* UI Preview Mockup */}
              <div className="relative rounded-xl border border-slate-200 bg-slate-900 p-4 shadow-inner aspect-[16/10] mb-6 flex flex-col justify-between text-left">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-bold text-emerald-300 tracking-wider">
                      ONE VIEW • INFINITE INSIGHTS
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    8 Systems Synced
                  </span>
                </div>

                {/* Search Bar Simulation */}
                <div className="my-auto bg-slate-950/80 rounded-lg p-2.5 border border-slate-700/80 flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-mono truncate">
                    "Find Q3 churn risks across CRM & support tickets"
                  </span>
                </div>

                {/* Mini Graph Indicators */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-800/80 rounded-md p-1.5 text-center">
                    <span className="text-[10px] text-slate-400 block">Context Nodes</span>
                    <span className="text-xs font-bold text-emerald-400">1.4M</span>
                  </div>
                  <div className="bg-slate-800/80 rounded-md p-1.5 text-center">
                    <span className="text-[10px] text-slate-400 block">Sync Latency</span>
                    <span className="text-xs font-bold text-cyan-400">&lt; 18ms</span>
                  </div>
                  <div className="bg-slate-800/80 rounded-md p-1.5 text-center">
                    <span className="text-[10px] text-slate-400 block">Accuracy</span>
                    <span className="text-xs font-bold text-sky-400">99.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenProductDemo("Wavelyn Intelligence")}
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 pt-2 border-t border-slate-100 group-hover:translate-x-0.5 transition-all text-left"
            >
              <span>Explore Intelligence Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Product 3: Wavelyn Autonomy */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header & Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Agentic Automation
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Wavelyn Autonomy
              </h3>
              <p className="text-xs font-semibold text-purple-600 mb-3">
                AI Workflow & Agentic Automation Platform
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                AI agents that orchestrate workflows across people, systems and data — for autonomous, intelligent, self-optimizing business operations.
              </p>

              {/* UI Preview Mockup: Pipeline Flow */}
              <div className="relative rounded-xl border border-slate-200 bg-slate-900 p-4 shadow-inner aspect-[16/10] mb-6 flex flex-col justify-center gap-2 text-left">
                <div className="flex items-center justify-between text-[11px] text-purple-300 font-semibold mb-1">
                  <span>AGENT PIPELINE SEQUENCE</span>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live
                  </span>
                </div>

                {/* 4 Pipeline Stages from Reference */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-800 border border-purple-500/30 rounded-lg p-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-950 text-purple-300 flex items-center justify-center text-[10px] font-bold">
                      1
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-purple-200 block">Trigger</span>
                      <span className="text-[9px] text-slate-400">Event Ingestion</span>
                    </div>
                  </div>

                  <div className="bg-slate-800 border border-purple-500/30 rounded-lg p-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-950 text-purple-300 flex items-center justify-center text-[10px] font-bold">
                      2
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-purple-200 block">Analyze</span>
                      <span className="text-[9px] text-slate-400">Context Mining</span>
                    </div>
                  </div>

                  <div className="bg-slate-800 border border-purple-500/30 rounded-lg p-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-950 text-purple-300 flex items-center justify-center text-[10px] font-bold">
                      3
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-purple-200 block">Decide</span>
                      <span className="text-[9px] text-slate-400">Business Logic</span>
                    </div>
                  </div>

                  <div className="bg-purple-900/50 border border-purple-400 rounded-lg p-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-white block">Execute</span>
                      <span className="text-[9px] text-purple-200">Autonomous Action</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenProductDemo("Wavelyn Autonomy")}
              className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 pt-2 border-t border-slate-100 group-hover:translate-x-0.5 transition-all text-left"
            >
              <span>Explore Autonomy Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* "How They Work Together" Feature Flow (Matching Reference Image) */}
        <div id="how-they-work" className="mt-16 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            How They Work Together
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* The 4 Connected Steps */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              
              {/* Step 1: Capture */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-sky-50/50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-3 font-bold text-sm">
                  1
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Capture</h5>
                  <p className="text-xs text-slate-600">
                    People & interactions: Video, Voice, Text via Wavelyn Vision
                  </p>
                </div>
                <div className="mt-3 text-slate-400 text-right">→</div>
              </div>

              {/* Step 2: Understand */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-emerald-50/50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 font-bold text-sm">
                  2
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Understand</h5>
                  <p className="text-xs text-slate-600">
                    Enterprise context across all systems via Wavelyn Intelligence
                  </p>
                </div>
                <div className="mt-3 text-slate-400 text-right">→</div>
              </div>

              {/* Step 3: Decide */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-amber-50/50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-3 font-bold text-sm">
                  3
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Decide</h5>
                  <p className="text-xs text-slate-600">
                    Apply machine intelligence, policies, and business logic
                  </p>
                </div>
                <div className="mt-3 text-slate-400 text-right">→</div>
              </div>

              {/* Step 4: Act & Automate */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-purple-50/50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3 font-bold text-sm">
                  4
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Act & Automate</h5>
                  <p className="text-xs text-slate-600">
                    AI agents execute workflows & drive outcomes via Wavelyn Autonomy
                  </p>
                </div>
                <div className="mt-3 text-purple-500 font-bold text-right">✔</div>
              </div>

            </div>

            {/* Right Callout Card (Matching Reference: "From Insights to Impact.") */}
            <div className="lg:col-span-3 bg-slate-950 rounded-2xl p-6 text-white text-center flex flex-col items-center justify-center border border-slate-800 shadow-md">
              <span className="text-base font-extrabold text-white tracking-tight mb-2">
                From Insights to Impact.
              </span>
              <p className="text-xs text-slate-400 mb-4">
                People & Video → Systems → Intelligence → Agents → Autonomous Workflows
              </p>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-6 h-0.5 bg-cyan-400 rounded-full" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="w-6 h-0.5 bg-sky-500 rounded-full" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
