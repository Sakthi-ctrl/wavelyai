"use client";

import React, { useState } from "react";
import {
  Users,
  UserCheck,
  FileCheck2,
  MessageSquareHeart,
  RefreshCw,
  Headphones,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface SolutionsSectionProps {
  onOpenSolutionModal: (solutionTitle: string) => void;
}

const solutionsData = [
  {
    id: "lead-gen",
    title: "Qualified Lead Generation",
    description:
      "Engage prospects, qualify intent, enrich information, score opportunities and route qualified leads to sales teams instantly.",
    products: "Intelligence + Autonomy",
    icon: Users,
    color: "sky",
    metrics: "3.4x Conversion Rate",
  },
  {
    id: "auto-hiring",
    title: "Autonomous Hiring",
    description:
      "Candidate screening, asynchronous video interviews, AI-assisted multi-parameter evaluation, automated scheduling and hiring pipelines.",
    products: "Vision + Intelligence + Autonomy",
    icon: UserCheck,
    color: "cyan",
    metrics: "72% Reduction in Time-to-Hire",
  },
  {
    id: "onboarding",
    title: "Employee Onboarding & Offboarding",
    description:
      "Coordinate HR, payroll, IT provisioning, compliance, training and exit activities seamlessly using collaborative AI agents.",
    products: "Intelligence + Autonomy",
    icon: FileCheck2,
    color: "blue",
    metrics: "100% Audit Compliance",
  },
  {
    id: "feedback-autonomy",
    title: "Customer Feedback Autonomy",
    description:
      "Collect omnichannel feedback, analyze nuanced sentiment and themes, detect systemic friction points, and initiate proactive remediation.",
    products: "Vision + Intelligence + Autonomy",
    icon: MessageSquareHeart,
    color: "indigo",
    metrics: "Real-time Sentiment Scoring",
  },
  {
    id: "process-automation",
    title: "Autonomous Business Process Automation",
    description:
      "Transform complex multi-system, multi-department enterprise processes into resilient, AI-agent-orchestrated autonomous workflows.",
    products: "Intelligence + Autonomy",
    icon: RefreshCw,
    color: "sky",
    metrics: "85% Manual Task Elimination",
  },
  {
    id: "b2c-support",
    title: "B2C Customer Service",
    description:
      "24×7 empathetic conversational assistance for inquiries, order changes, payment transactions, and intelligent priority escalation.",
    products: "Intelligence + Autonomy",
    icon: Headphones,
    color: "cyan",
    metrics: "&lt; 15s Avg Resolution Time",
  },
];

export default function SolutionsSection({ onOpenSolutionModal }: SolutionsSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-5 bg-sky-600 rounded-full" />
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                SOLUTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              AI Solutions for What Matters.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-3xl">
              Solve key business challenges with ready-to-deploy, outcome-driven AI solutions.
            </p>
          </div>
          <button
            onClick={() => onOpenSolutionModal("All Solutions Overview")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 group shrink-0"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onOpenSolutionModal(item.title)}
                className="cursor-pointer bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Hover Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Icon & Products Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-500 text-sky-600 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">
                      {item.products}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">
                    {item.metrics}
                  </span>
                  <span className="font-bold text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Philosophy Banner from Content */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                The Wavelyn Paradigm
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-100">
                "We don't just add AI to existing processes. We redesign processes around intelligence and autonomy."
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenSolutionModal("Business Process Transformation")}
            className="shrink-0 px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold tracking-wide transition-all shadow"
          >
            Explore Framework
          </button>
        </div>

      </div>
    </section>
  );
}
