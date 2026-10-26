"use client";

import { useState } from "react";
import { images } from "@/lib/images";
import { ImageSlot } from "../ImageSlot";

// Drag or use arrow keys to compare. Built on a native range input so it is
// keyboard and screen-reader friendly.
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="arch relative mx-auto aspect-[4/5] w-full max-w-lg select-none overflow-hidden p-1.5 ring-1 ring-gold/40 sm:aspect-[5/6]">
      <div className="arch relative size-full overflow-hidden">
        <ImageSlot slot={images.after} className="absolute inset-0" sizes="(min-width: 1024px) 40vw, 90vw" tint="stone" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <ImageSlot slot={images.before} className="absolute inset-0" sizes="(min-width: 1024px) 40vw, 90vw" tint="espresso" />
        </div>
        <span className="absolute bottom-5 left-5 rounded-full bg-espresso/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cream">
          Before
        </span>
        <span className="absolute bottom-5 right-5 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">
          After
        </span>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-px bg-cream" style={{ left: `${pos}%` }}>
          <div className="absolute left-1/2 top-[72%] flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-espresso shadow-lg ring-1 ring-gold/50">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after"
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
