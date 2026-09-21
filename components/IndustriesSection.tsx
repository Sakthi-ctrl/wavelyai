"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Landmark,
  Building2,
  GraduationCap,
  Building,
  Hotel,
  Truck,
  ArrowRight,
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenIndustryModal: (industryName: string) => void;
}

const industriesList = [
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    image: "/images/ind_retail.jpg",
    details: "Customer intelligence, lead generation, service automation and feedback intelligence.",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    icon: Landmark,
    image: "/images/ind_gov.jpg",
    details: "Citizen services, knowledge assistants, workflow automation and cross-department intelligence.",
  },
  {
    id: "bfsi",
    name: "BFSI",
    icon: Building2,
    image: "/images/ind_bfsi.jpg",
    details: "Customer engagement, document intelligence, internal knowledge, workflow and service automation.",
  },
  {
    id: "education",
    name: "Universities & Education",
    icon: GraduationCap,
    image: "/images/ind_edu.jpg",
    details: "Admissions, asynchronous interviews, student engagement, enrollment workflows and institutional intelligence.",
  },
  {
    id: "realestate",
    name: "Real Estate & Infrastructure",
    icon: Building,
    image: "/images/ind_realestate.jpg",
    details: "Lead qualification, tenant/customer engagement, project intelligence and workflow automation.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    image: "/images/ind_hospitality.jpg",
    details: "Guest engagement, feedback intelligence, service requests and operations automation.",
  },
  {
    id: "logistics",
    name: "Transportation & Logistics",
    icon: Truck,
    image: "/images/ind_logistics.jpg",
    details: "Customer communication, operational intelligence, document workflows and exception management.",
  },
];

export default function IndustriesSection({ onOpenIndustryModal }: IndustriesSectionProps) {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-5 bg-sky-600 rounded-full" />
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
                INDUSTRIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Built for Every Industry.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-3xl">
              Industry-ready solutions. Real-world impact. Wavelyn technology is industry-agnostic, pairing core AI products with industry-specific workflows and business context.
            </p>
          </div>

          <button
            onClick={() => onOpenIndustryModal("All Industries Overview")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 group shrink-0"
          >
            <span>Explore All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 7 Photographic Industry Cards Matching Reference Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {industriesList.map((item) => {
            const Icon = item.icon;
            const isHovered = activeIndustry === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndustry(item.id)}
                onMouseLeave={() => setActiveIndustry(null)}
                onClick={() => onOpenIndustryModal(item.name)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-56 sm:h-64 flex flex-col justify-end p-4 border border-slate-800/40 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/20 group-hover:from-slate-950/95 group-hover:via-slate-950/80 transition-all duration-300" />

                {/* Card Content */}
                <div className="relative z-10 text-center flex flex-col items-center justify-end h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:text-cyan-400 group-hover:border-cyan-400/50 flex items-center justify-center mb-3 transition-colors shadow">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide text-center leading-tight mb-1">
                    {item.name}
                  </h3>

                  {/* Hover Details Preview */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 overflow-hidden pt-1">
                    <p className="text-[10px] text-slate-300 line-clamp-3 leading-snug">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
