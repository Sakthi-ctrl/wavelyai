"use client";

import React, { useState } from "react";
import { Search, X, ArrowRight, Video, Database, Cpu, Building2, ShoppingBag, ShieldCheck } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (hash: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectResult }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const searchableItems = [
    { title: "Wavelyn Vision", category: "Products", target: "#products", desc: "Asynchronous video intelligence platform" },
    { title: "Wavelyn Intelligence", category: "Products", target: "#products", desc: "Enterprise intelligence layer and semantic search" },
    { title: "Wavelyn Autonomy", category: "Products", target: "#products", desc: "AI workflow and agentic automation platform" },
    { title: "Qualified Lead Generation", category: "Solutions", target: "#solutions", desc: "Engage, score and route leads" },
    { title: "Autonomous Hiring", category: "Solutions", target: "#solutions", desc: "Async video interviews and evaluation" },
    { title: "Employee Onboarding & Offboarding", category: "Solutions", target: "#solutions", desc: "Autonomous HR & IT workflows" },
    { title: "Customer Feedback Autonomy", category: "Solutions", target: "#solutions", desc: "Omnichannel sentiment intelligence" },
    { title: "Retail", category: "Industries", target: "#industries", desc: "Customer intelligence and feedback" },
    { title: "Government & Public Sector", category: "Industries", target: "#industries", desc: "Citizen services and cross-department intelligence" },
    { title: "BFSI (Banking & Finance)", category: "Industries", target: "#industries", desc: "Document intelligence & workflows" },
    { title: "Universities & Education", category: "Industries", target: "#industries", desc: "Admissions and student engagement" },
    { title: "Custom AI Development", category: "Services", target: "#services", desc: "GenAI, AI Agents, RAG and Copilots" },
    { title: "Future Send Case Study", category: "Customer Stories", target: "#customer-stories", desc: "Intelligent messaging platform" },
    { title: "Home Equipment Services Case Study", category: "Customer Stories", target: "#customer-stories", desc: "AI-powered service operations" },
    { title: "About Wavelyn AI & Drivita LLC", category: "About", target: "#about", desc: "Eastern Coast corporate background & mission" },
  ];

  const filtered = searchableItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Search Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search products, solutions, industries, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filtered.length > 0 ? (
            <div className="space-y-1">
              {filtered.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectResult(item.target);
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl hover:bg-slate-100 flex items-center justify-between text-left transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-sky-600">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              No results found for "{query}". Try "Vision", "Hiring", or "Retail".
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
