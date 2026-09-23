"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Tier: Brand, Navigation & Socials */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-100">
          
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-11 sm:h-12 w-48 sm:w-56">
              <Image
                src="/images/logo.png"
                alt="Wavelyn AI - Ride the Wave of Intelligence"
                fill
                className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-700">
            <Link href="#products" className="hover:text-sky-600 transition-colors">
              Product
            </Link>
            <Link href="#solutions" className="hover:text-sky-600 transition-colors">
              Solutions
            </Link>
            <Link href="#services" className="hover:text-sky-600 transition-colors">
              Services
            </Link>
            <Link href="#industries" className="hover:text-sky-600 transition-colors">
              Industries
            </Link>
            <Link href="#customer-stories" className="hover:text-sky-600 transition-colors">
              Customer Stories
            </Link>
            <Link href="#about" className="hover:text-sky-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2Z"/>
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Line: Copyright & Regional Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Wavelyn AI — A Brand of Drivita LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-2 font-medium text-slate-600">
            <span>From the Eastern Coast to a More Intelligent World.</span>
            <span className="text-cyan-500 text-sm font-bold">~</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
