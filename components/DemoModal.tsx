"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Play, Video, Database, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct?: string;
}

export default function DemoModal({ isOpen, onClose, activeProduct = "Wavelyn Vision" }: DemoModalProps) {
  const [tab, setTab] = useState<string>(activeProduct || "Wavelyn Vision");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center">
              <Play className="w-5 h-5 fill-cyan-400 ml-0.5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Interactive Architecture Walkthrough
              </h3>
              <p className="text-xs text-slate-400">
                Explore how Wavelyn transforms data and human interaction into autonomous enterprise operations.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 overflow-x-auto">
          {[
            { name: "Wavelyn Vision", icon: Video },
            { name: "Wavelyn Intelligence", icon: Database },
            { name: "Wavelyn Autonomy", icon: Cpu },
          ].map((item) => {
            const Icon = item.icon;
            const active = tab.includes(item.name) || item.name.includes(tab);
            return (
              <button
                key={item.name}
                onClick={() => setTab(item.name)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-xl border-t border-x transition-all ${
                  active
                    ? "bg-white border-slate-200 text-sky-600 shadow-sm"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {tab.includes("Vision") && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow">
                  <Image
                    src="/images/candidate_interview.jpg"
                    alt="Wavelyn Vision Interview Mockup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs text-cyan-300 font-mono">
                    AI Emotion & Sentiment: Calm • Technical Score: 94%
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  <h4 className="text-lg font-bold text-slate-950">
                    Asynchronous Video Intelligence
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wavelyn Vision replaces synchronous screening bottlenecks. Candidates or customers record responses on their schedule; our multimodal AI extracts technical depth, confidence indicators, and speech sentiment instantly.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Multilingual natural speech transcription & summarization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Objective rubric-based competency scoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Direct connection into Wavelyn Intelligence layer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {tab.includes("Intelligence") && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/2 p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-emerald-400">
                    <span>CONNECTED REPOSITORY</span>
                    <span>ACTIVE</span>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-300">
                    &gt; SELECT * FROM enterprise_graph WHERE entity = 'Customer_Feedback'
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-400">
                    <p>• Salesforce CRM: 42,000 Records Synced</p>
                    <p>• SAP ERP: Financial Context Associated</p>
                    <p>• Zendesk / Service: 1,800 Open Tickets Mapped</p>
                    <p>• SharePoint / Files: Vector Index Updated (0.8s)</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  <h4 className="text-lg font-bold text-slate-950">
                    Unified Enterprise Intelligence Layer
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Stop letting critical information stagnate in departmental silos. Wavelyn Intelligence harmonizes video transcripts, customer emails, ERP transactions, and relational data into a unified, queryable context graph.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Sub-second semantic RAG over millions of records
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Role-based enterprise permissions & compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Real-time anomaly detection and operational alerts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {tab.includes("Autonomy") && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/2 p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 text-white shadow space-y-3">
                  <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wide">
                    Agent Orchestration Engine
                  </span>
                  <div className="space-y-2">
                    <div className="p-2 bg-slate-900 rounded-lg border border-purple-500/30 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Lead Qualified</span>
                      <span className="text-emerald-400 font-bold">Triggered</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded-lg border border-purple-500/30 flex items-center justify-between text-xs">
                      <span className="text-slate-300">ERP Inventory Check</span>
                      <span className="text-cyan-400 font-bold">Automated</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded-lg border border-purple-500/30 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Contract Generated</span>
                      <span className="text-purple-300 font-bold">Signed</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  <h4 className="text-lg font-bold text-slate-950">
                    Autonomous Business Process Automation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wavelyn Autonomy deploys coordinated AI agents capable of reasoning, validating, and executing complex tasks across internal software and human teams.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      Autonomous execution with human-in-the-loop safeguards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      Self-healing workflow retry logic
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      Full audit logs for SOC2 & enterprise compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Wavelyn AI Enterprise Stack • Drivita LLC
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
}
