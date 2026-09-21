"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import CustomerStoriesSection from "@/components/CustomerStoriesSection";
import DifferenceSection from "@/components/DifferenceSection";
import AboutSection from "@/components/AboutSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import DemoModal from "@/components/DemoModal";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Wavelyn Vision");
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoProduct, setDemoProduct] = useState("Wavelyn Vision");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenContact = (topic?: string) => {
    if (topic) setContactTopic(topic);
    setIsContactOpen(true);
  };

  const handleOpenDemo = (product?: string) => {
    if (product) setDemoProduct(product);
    setIsDemoOpen(true);
  };

  const handleSelectSearchResult = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Top Floating Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact("General Enterprise Inquiry")}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenContact={() => handleOpenContact("Executive Conversation")}
        onOpenDemo={() => handleOpenDemo("Wavelyn Vision")}
      />

      {/* Products Section */}
      <ProductsSection
        onOpenProductDemo={(productName) => handleOpenDemo(productName)}
      />

      {/* Solutions Section */}
      <SolutionsSection
        onOpenSolutionModal={(solutionTitle) => handleOpenContact(`Solution: ${solutionTitle}`)}
      />

      {/* Services Section */}
      <ServicesSection
        onOpenContact={() => handleOpenContact("Custom Engineering & Modernization")}
      />

      {/* Industries Section */}
      <IndustriesSection
        onOpenIndustryModal={(industryName) => handleOpenContact(`Industry: ${industryName}`)}
      />

      {/* Customer Stories Section */}
      <CustomerStoriesSection
        onOpenStoryModal={(storyTitle) => handleOpenContact(`Story Inquiry: ${storyTitle}`)}
      />

      {/* The Wavelyn Difference */}
      <DifferenceSection />

      {/* About Wavelyn AI & Drivita LLC */}
      <AboutSection
        onOpenContact={() => handleOpenContact("Leadership & Corporate Connection")}
      />

      {/* Luminous Dark Bottom CTA Banner */}
      <CtaBanner
        onOpenContact={() => handleOpenContact("Build What's Next")}
      />

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultTopic={contactTopic}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        activeProduct={demoProduct}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />
    </main>
  );
}
