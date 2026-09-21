"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, Building, Mail, User } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function ContactModal({ isOpen, onClose, defaultTopic = "" }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: defaultTopic || "Wavelyn Vision",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header Ribbon */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START THE CONVERSATION</span>
          </div>
          
          <h3 className="text-2xl font-extrabold text-white">
            Connect with Wavelyn AI
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Explore how our enterprise intelligence layer and AI agents can transform your operations.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inquiry Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out to Wavelyn AI. An enterprise solutions specialist from our Eastern Coast team will contact you within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="sarah@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-sm text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Global"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-sm text-slate-900 bg-white"
                  >
                    <option value="Wavelyn Vision">Wavelyn Vision (Video Intelligence)</option>
                    <option value="Wavelyn Intelligence">Wavelyn Intelligence (Enterprise Layer)</option>
                    <option value="Wavelyn Autonomy">Wavelyn Autonomy (AI Agents)</option>
                    <option value="Custom AI Engineering">Custom AI & Digital Engineering</option>
                    <option value="General Inquiry">General Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  How can we help move your operations forward?
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of your workflow challenges or enterprise systems..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-sm text-slate-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Protected by enterprise encryption • Drivita LLC
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold uppercase tracking-wider shadow transition-all"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
