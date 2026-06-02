"use client";

import React from "react";
import InfiniteMarquee from "./InfiniteMarquee";
import { stacksLinks } from "@/constants/data";

interface TechStackMarqueeProps {
  speed?: number;
  className?: string;
  compact?: boolean;        // ← New prop
}

const PALETTE = {
  CREAM: "#f5f0e8",
  MUTED: "#9e9080",
  INK: "#1a1a1a",
};

export default function TechStackMarquee({
  speed = 25,
  className = "",
  compact = false,
}: TechStackMarqueeProps) {
  const currentStacks = stacksLinks || [];

  if (currentStacks.length === 0) return null;

  const marqueeItems = currentStacks.map((tech) => {
    const Icon = tech.icon;

    return {
      id: tech.name,
      content: (
        <div
          className="mx-4 flex items-center gap-2.5 cursor-pointer group"
          title={tech.name}
        >
          {Icon && (
            <Icon
              size={compact ? 28 : 36}
              style={{ color: tech.color }}
              className="transition-transform duration-300 group-hover:scale-110 shrink-0"
            />
          )}
          <span
            className={`font-medium whitespace-nowrap tracking-wide transition-colors duration-300 ${
              compact ? "text-xs" : "text-sm md:text-base"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: PALETTE.INK,
            }}
          >
            {tech.name}
          </span>
        </div>
      ),
    };
  });

  // Compact mode for project cards
  if (compact) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <InfiniteMarquee
            items={marqueeItems}
            speed={speed}
            pauseOnHover={true}
          />
        </div>
        <div className="overflow-hidden mt-5 mb-7 [mask-image:linear-gradient(to_left,transparent,black_8%,black_92%,transparent)]">
          <InfiniteMarquee
            items={marqueeItems}
            speed={speed}
            pauseOnHover={true}
            reverse={true}
          />
        </div>
        {/* <div className="overflow-hidden mt-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <InfiniteMarquee
            items={marqueeItems}
            speed={speed}
            pauseOnHover={true}
          />
        </div> */}
      </div>
    );
  }

  // Original full section (kept for other pages)
 
}