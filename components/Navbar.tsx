"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/constants/data";

function usePhilippinesTime() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit", // Added seconds so you can see it working
      timeZone: "Asia/Manila",
      hour12: false,
    });

  const [time, setTime] = useState("");

  useEffect(() => {
    // Set time immediately on mount
    setTime(fmt());
    
    // Update every 1 second
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function NavBar() {
  const [active, setActive] = useState("Home");
  const time = usePhilippinesTime(); // This now holds your live time

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach((label) => {
      const el = document.getElementById(label.toLowerCase());
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(label);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (label: string) => {
    const el = document.getElementById(label.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="w-full border-b sticky top-0 z-50"
      style={{ backgroundColor: "#f5f0e8", borderColor: "#e8e0d0" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 gap-6">

          {/* Left: avatar + name + role */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img
              src="/Images/remove2.png"
              alt="Rizaldy Condino"
              className="w-8 h-8 rounded-full object-cover grayscale sepia contrast-125 brightness-95"
            />
            <span className="text-sm" style={{ color: "#1a1a1a", fontWeight: 500 }}>
              Rizaldy Condino
            </span>
            <span
              className="text-xs tracking-widest uppercase hidden sm:inline"
              style={{ color: "#9e9080" }}
            >
              Junior Full Stack
            </span>
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((label) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => scrollToSection(label)}
                  className="relative px-3.5 py-1 text-sm transition-colors outline-none cursor-pointer"
                  style={{ color: isActive ? "#1a1a1a" : "#7a6f65" }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ backgroundColor: "#1a1a1a" }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: location · time + CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#9e9080" }}
            >
              Philippines · {time} PST
            </span>
            <a
              href="#contact"
              className="text-sm px-4 py-1.5 border rounded-sm transition-colors hover:opacity-80"
              style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
            >
              Get in touch →
            </a>
          </div>

          {/* Mobile: just the CTA */}
          <a
            href="#contact"
            className="md:hidden text-sm px-3 py-1.5 border rounded-sm"
            style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
          >
            Contact
          </a>

        </div>
      </div>
    </header>
  );
}