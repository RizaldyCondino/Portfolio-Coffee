"use client";

import React from "react";

interface MarqueeItem {
  id: string;
  content: React.ReactNode;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
  speed?: number; // Duration in seconds
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
}

// Color Theme Palette
const PALETTE = {
  ORANGE: "#bf5220",
  CREAM: "#f5f0e8",
  BORDER: "#e0d8cc",
  MUTED: "#9e9080",
  INK: "#1a1a1a",
};

export default function InfiniteMarquee({
  items,
  speed = 25,
  pauseOnHover = true,
  reverse = false,
  className = "",
}: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div className="rfm-marquee-container">
        <div
          className="rfm-marquee"
          style={
            {
              "--duration": `${speed}s`,
              "--direction": reverse ? "reverse" : "normal",
              "--pause-on-hover": pauseOnHover ? "paused" : "running",
            } as React.CSSProperties
          }
        >
          {/* Spread items twice to create the seamless loop */}
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-3 shrink-0 flex items-center justify-center rounded-md p-3 shadow-sm transition-colors duration-200"
              style={{
                backgroundColor: PALETTE.CREAM,
                borderColor: PALETTE.BORDER,
                borderWidth: "1px",
                borderStyle: "solid",
                color: PALETTE.INK,
                // Soft shadow matching the palette tone instead of pure harsh black
                boxShadow: `0 1px 3px 0 rgba(158, 144, 128, 0.15), 0 1px 2px -1px rgba(158, 144, 128, 0.15)`,
              }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}