"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenContact, onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-slate-100 py-3"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center group py-0.5">
          <div className="relative h-10 sm:h-11 w-44 sm:w-52">
            <Image
              src="/images/logo.png"
              alt="Wavelyn AI - Ride the Wave of Intelligence"
              fill
              priority
              className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Reference Design Matching) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link
            href="#home"
            className="text-sky-600 hover:text-sky-700 transition-colors relative py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
          </Link>
          <Link
            href="#products"
            className="hover:text-sky-600 transition-colors py-1"
          >
            Products
          </Link>
          <Link
            href="#solutions"
            className="hover:text-sky-600 transition-colors py-1"
          >
            Solutions
          </Link>
          <Link
            href="#services"
            className="hover:text-sky-600 transition-colors py-1"
          >
            Services
          </Link>
          <Link
            href="#industries"
            className="hover:text-sky-600 transition-colors py-1"
          >
            Industries
          </Link>
          <Link
            href="#customer-stories"
            className="hover:text-sky-600 transition-colors py-1"
          >
            Customer Stories
          </Link>
          <Link
            href="#about"
            className="hover:text-sky-600 transition-colors py-1"
          >
            About
          </Link>
        </nav>

        {/* Right CTA and Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-100 rounded-full transition-all"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-full"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-slate-800">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sky-600 font-bold"
            >
              Home
            </Link>
            <Link
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Products
            </Link>
            <Link
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Solutions
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Services
            </Link>
            <Link
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Industries
            </Link>
            <Link
              href="#customer-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Customer Stories
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              About
            </Link>
          </nav>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-950 text-white text-sm font-semibold shadow"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
