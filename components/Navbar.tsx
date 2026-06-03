"use client";

import { useState, useEffect } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/constants/data";

function usePhilippinesTime() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Manila",
      hour12: false,
    });

  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function NavBar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const time = usePhilippinesTime();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;

      let current = navLinks[0];
      navLinks.forEach((label) => {
        const el = document.getElementById(label.toLowerCase());
        if (el && el.offsetTop <= scrollY) {
          current = label;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (label: string) => {
    const el = document.getElementById(label.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
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
              <span
                className="text-sm"
                style={{ color: "#1a1a1a", fontWeight: 500 }}
              >
                Rizaldy Condino
              </span>
              <span
                className="text-xs tracking-widest uppercase hidden sm:inline"
                style={{ color: "#9e9080" }}
              >
                Junior Full Stack
              </span>
            </div>

            {/* Center: nav links (desktop) */}
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

            {/* Right: location · time + CTA (desktop) */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "#9e9080" }}
              >
                Philippines · {time} PST
              </span>

              <a
                href="#contact"
                className="flex items-center gap-1.5 text-sm px-4 py-1.5 border rounded-sm transition-colors hover:opacity-80"
                style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
              >
                Get in touch <FiArrowRight size={13} />
              </a>
            </div>

            {/* Mobile: hamburger button */}
            <button
              className="md:hidden flex items-center justify-center w-8 h-8 outline-none cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX size={18} color="#1a1a1a" />
              ) : (
                <FiMenu size={18} color="#1a1a1a" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className="fixed top-14 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          backgroundColor: "#f5f0e8",
          borderBottom: "1px solid #e8e0d0",
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((label) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => scrollToSection(label)}
                className="flex items-center justify-between w-full px-0 py-3 text-sm border-b outline-none cursor-pointer text-left"
                style={{
                  color: isActive ? "#1a1a1a" : "#7a6f65",
                  borderColor: "#e8e0d0",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {label}
                {isActive && (
                  <span className="text-xs" style={{ color: "#9e9080" }}>
                    ●
                  </span>
                )}
              </button>
            );
          })}

          {/* Bottom section */}
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#9e9080" }}
            >
              Philippines · {time} PST
            </span>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 text-sm px-4 py-2 border rounded-sm transition-colors hover:opacity-80 w-full"
              style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
            >
              Get in touch <FiArrowRight size={13} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}