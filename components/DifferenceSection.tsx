"use client";

import React from "react";
import {
  Link2,
  BrainCircuit,
  Bot,
  Layers,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

export default function DifferenceSection() {
  const steps = [
    {
      num: "01",
      title: "Connect the Systems",
      desc: "Break system silos by integrating ERP, CRM, HRMS, cloud storage, and legacy transactional databases.",
      icon: Link2,
    },
    {
      num: "02",
      title: "Create Enterprise Context",
      desc: "Transform disparate records, unstructured documents, and video interactions into unified context graphs.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Apply Intelligence",
      desc: "Layer enterprise-grade semantic search, reasoning engines, and custom machine learning algorithms.",
      icon: BrainCircuit,
    },
    {
      num: "04",
      title: "Deploy AI Agents",
      desc: "Empower autonomous, specialized agents to collaborate with humans and execute multi-stage workflows.",
      icon: Bot,
    },
    {
      num: "05",
      title: "Automate the Workflow",
      desc: "Redesign end-to-end operational handoffs to run automatically with built-in auditability and compliance.",
      icon: Sparkles,
    },
    {
      num: "06",
      title: "Continuously Learn",
      desc: "Close the feedback loop so every agent decision, user interaction, and completed task optimizes the system.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            THE WAVELYN DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Don't Deploy More AI Tools. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Build an Intelligent Enterprise.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Many enterprises are experimenting with isolated copilots, chatbots and fragmented AI tools. The result can become another layer of disconnected technology. Wavelyn takes a connected, outcome-led approach.
          </p>
        </div>

        {/* 6 Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-600 bg-sky-100/60 px-2.5 py-1 rounded-md">
                    STEP {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:text-sky-600 group-hover:border-sky-200 flex items-center justify-center transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2 group-hover:text-sky-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
