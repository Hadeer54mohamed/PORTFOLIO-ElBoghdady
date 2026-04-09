"use client";

import { useEffect, useState } from "react";
import IntroSplash from "@/components/sections/IntroSplash";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {showSplash && <IntroSplash isVisible={showSplash} />}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-700 ${
          showSplash ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
