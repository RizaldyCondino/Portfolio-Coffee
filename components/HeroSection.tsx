'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "0.6", label: "Corporate\nYears" },
  { value: "10k+", label: "Lines of Code\nWritten" },
  { value: "∞", label: "Google / Docs\nSearches" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export function HeroSection() {
  return (
    <section style={{ backgroundColor: "#f5f0e8",  }} className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12 md:py-16 lg:py-15">
        
        <div className="flex flex-col md:flex-row items-start lg:items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 min-w-0 w-full">
         
            <motion.div
              className="flex items-center gap-2 text-xs tracking-widest uppercase mb-6 md:mb-8 font-medium"
              style={{ color: "#9e9080" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse"
                style={{ backgroundColor: "#4caf6e" }}
              />
              Built to Learn · Ready to Contribute
            </motion.div>

            {/* Heading with Staggered Animation */}
            <motion.h1
              className="leading-none tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3.5rem, 7vw, 6.5rem)", fontWeight: 700 }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 }
                }
              }}
            >
              <motion.span className="block" style={{ color: "#1a1a1a" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                Learn.
              </motion.span>
              <motion.span className="block" style={{ color: "#1a1a1a" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                Build.
              </motion.span>
              <motion.span className="block" style={{ color: "#bf5220" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                Loop.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="mt-6 max-w-md leading-relaxed text-sm md:text-base" 
              style={{ color: "#7a6f65" }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              I'm an aspiring Junior FullStack who enjoys building modern, responsive, and functional web applications. I like turning ideas into clean and user-friendly interfaces while continuously learning and improving my skills as a developer.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="px-6 py-3 text-sm font-semibold tracking-wide rounded transition-all duration-200 shadow-sm hover:opacity-90 text-center cursor-pointer"
                style={{ backgroundColor: "#1a1a1a", color: "#f5f0e8", fontFamily: "'Space Grotesk', sans-serif" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
              </motion.a>

              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="px-6 py-3 text-sm font-semibold tracking-wide rounded border transition-all duration-200 text-center hover:bg-neutral-100 cursor-pointer"
                style={{ borderColor: "#e8e0d0", color: "#1a1a1a", backgroundColor: "transparent", fontFamily: "'Space Grotesk', sans-serif" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content Column */}
          <div className="shrink-0 w-full max-w-[340px] md:w-[40vw] lg:w-[450px] xl:w-[520px] lg:max-w-none mx-auto md:mx-0">
            
            {/* Sketch Image */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src="/Images/remove2.png"
                alt="Rizaldy Condino portrait sketch"
                className="w-full h-auto object-contain grayscale sepia contrast-125 brightness-95 transition-all duration-300 group-hover:contrast-100 group-hover:sepia-0"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center justify-center gap-4 sm:gap-8 mt-8 pt-6 border-t md:border-t-0" 
              style={{ borderColor: "#e8e0d0" }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.6 }
                }
              }}
            >
              {stats.map((s) => (
                <motion.div 
                  key={s.label} 
                  className="flex-1 sm:flex-initial text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div
                    className="leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[10px] sm:text-xs uppercase tracking-widest mt-1.5 leading-tight whitespace-pre-line"
                    style={{ color: "#9e9080" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}