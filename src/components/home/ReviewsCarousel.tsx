"use client";

import { useRef } from "react";
import { reviews } from "@/lib/reviews";
import { IconArrow, IconStar } from "../Icons";

export function ReviewsCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const items = reviews;

  return (
    <div>
      <ul ref={track} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0" aria-label="Client reviews">
        {items.map((r, i) => (
          <li
            key={i}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-[1.5rem] border border-cream/10 bg-cream/[0.04] p-8 sm:w-[60%] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <span className="flex gap-1 text-gold-soft" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <IconStar key={s} />
              ))}
            </span>
            <blockquote className="mt-6 flex-1 font-display text-2xl leading-snug text-cream">&ldquo;{r.text}&rdquo;</blockquote>
            <p className="mt-6 text-sm font-semibold text-cream">{r.name}</p>
            {r.treatment && <p className="text-xs uppercase tracking-[0.14em] text-gold-soft">{r.treatment}</p>}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-3">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => scroll(d)}
            aria-label={d === -1 ? "Previous reviews" : "Next reviews"}
            className="flex size-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <IconArrow className={`size-4 ${d === -1 ? "rotate-180" : ""}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
