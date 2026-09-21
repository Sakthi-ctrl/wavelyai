"use client";

import React from "react";
import Image from "next/image";
import { Send, Home, ArrowRight, CheckCircle2, Zap, Smartphone, Wrench } from "lucide-react";

interface CustomerStoriesSectionProps {
  onOpenStoryModal: (storyTitle: string) => void;
}

export default function CustomerStoriesSection({ onOpenStoryModal }: CustomerStoriesSectionProps) {
  return (
    <section id="customer-stories" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-5 bg-sky-600 rounded-full" />
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                CUSTOMER STORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Real Businesses. Measurable Impact.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-3xl">
              Proof of delivery and business value across high-scale intelligent platforms and real-world operations.
            </p>
          </div>

          <button
            onClick={() => onOpenStoryModal("All Customer Case Studies")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 group shrink-0"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2 Featured Story Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Story 1: Future Send */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="p-8">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-sm">
                  <Send className="w-6 h-6 text-sky-600 ml-0.5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Future Send</h3>
                  <p className="text-xs font-semibold text-sky-600">
                    Intelligent Messaging Platform
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                How Wavelyn designed and built a modern messaging platform to simplify and improve digital customer engagement across omni-channel ecosystems.
              </p>

              {/* Badges & Visual Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                {/* 3 Pill Badges */}
                <div className="sm:col-span-4 space-y-2.5">
                  <div className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>Engage</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>Automate</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Scale</span>
                  </div>
                </div>

                {/* Smartphone Preview Mockup */}
                <div className="sm:col-span-8 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/future_send.jpg"
                    alt="Future Send Intelligent Messaging"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    Cloud Native • AI Messaging
                  </div>
                </div>
              </div>

              {/* Challenge & Solution Points */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 text-xs text-slate-700">
                <p>
                  <strong className="text-slate-900">Challenge:</strong> Create a modern communication platform capable of simplifying and improving digital engagement.
                </p>
                <p>
                  <strong className="text-slate-900">Solution:</strong> Designed and developed a platform combining messaging workflows, application engineering and intelligent capabilities.
                </p>
              </div>
            </div>

            <div className="px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Capabilities: Messaging • Workflow • Cloud Platform
              </span>
              <button
                onClick={() => onOpenStoryModal("Future Send")}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read the Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Story 2: Home Equipment Services */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="p-8">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-sm">
                  <Home className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Home Equipment Services</h3>
                  <p className="text-xs font-semibold text-amber-600">
                    AI-Powered Service Operations
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                How Wavelyn transformed customer service and field operations with AI-driven workflows and intelligent automation across the complete lifecycle.
              </p>

              {/* Badges & Visual Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                {/* 3 Pill Badges */}
                <div className="sm:col-span-4 space-y-2.5">
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Faster Service</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>Happier Customers</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>Higher Efficiency</span>
                  </div>
                </div>

                {/* Field Service Photo Preview */}
                <div className="sm:col-span-8 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/service_tech.jpg"
                    alt="Home Equipment Services Operations"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    Field Ops • Smart Dispatch
                  </div>
                </div>
              </div>

              {/* Complete Service Lifecycle Workflow from Content */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-1.5 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">
                  Full Service Lifecycle Orchestration:
                </span>
                <p className="text-[11px] text-slate-600 font-mono">
                  Customer Request → AI Qualification → Scheduling → Tech Coordination → Customer Communication → Completion → Feedback
                </p>
              </div>
            </div>

            <div className="px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Impact: 40% Cost Savings • Zero Lost Leads
              </span>
              <button
                onClick={() => onOpenStoryModal("Home Equipment Services")}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read the Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
