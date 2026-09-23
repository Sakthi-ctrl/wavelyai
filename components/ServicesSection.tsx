"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Boxes,
  ArrowRight,
  Layers,
  Sparkles,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const servicePillars = [
    {
      title: "Custom AI Development",
      icon: Cpu,
      description:
        "Bespoke intelligence architecture built directly into your core business operations and secure infrastructure.",
      tags: [
        "GenAI",
        "AI Agents",
        "RAG Architecture",
        "Enterprise Copilots",
        "Computer Vision",
        "NLP",
        "Predictive AI",
        "Knowledge Systems",
      ],
      badge: "High Precision",
    },
    {
      title: "Custom Software Development",
      icon: Code2,
      description:
        "Full-cycle engineering that translates business requirements into resilient, enterprise-grade digital software.",
      tags: [
        "Web Applications",
        "Mobile Apps (iOS/Android)",
        "Enterprise Platforms",
        "SaaS Products",
        "Client Portals",
        "REST & GraphQL APIs",
        "Cloud Architecture",
      ],
      badge: "Full Lifecycle",
    },
    {
      title: "AI Integration & Modernization",
      icon: Boxes,
      description:
        "Bridge legacy infrastructure with state-of-the-art machine intelligence without disrupting ongoing operations.",
      tags: [
        "ERP Modernization",
        "CRM Sync",
        "HRMS & SIS Integration",
        "Relational & Vector DBs",
        "Document Ingestion",
        "Legacy Systems Wrap",
        "Real-Time ETL",
      ],
      badge: "Zero Downtime",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              AI & Digital Engineering Services
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-3xl">
              When the business challenge requires something unique, Wavelyn combines AI expertise with software engineering to design and build bespoke solutions around your enterprise.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">
              Our Guarantee
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              Build new. Modernize existing. Make it intelligent.
            </span>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 text-cyan-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-sky-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pillar.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 text-slate-700 hover:text-sky-700 text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Discuss Engineering Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
