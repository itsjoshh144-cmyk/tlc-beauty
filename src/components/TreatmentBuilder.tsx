"use client";

import { useMemo, useState } from "react";
import { site, waLink } from "@/lib/site";
import { categories, formatMinutes, treatments, type Category } from "@/lib/treatments";
import { IconArrow, IconCheck, IconPlus, IconWhatsApp } from "./Icons";

type Filter = "All" | Category;

export function TreatmentBuilder() {
  const [filter, setFilter] = useState<Filter>("All");
  const [picked, setPicked] = useState<string[]>([]);

  const selected = useMemo(() => treatments.filter((t) => picked.includes(t.id)), [picked]);
  const totalMins = selected.reduce((a, t) => a + t.minutes, 0);
  const totalPrice = selected.reduce((a, t) => a + t.price, 0);

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const shown = categories.filter((c) => filter === "All" || c.name === filter);
  const message = `Hi Tania, I'd like to book: ${selected.map((t) => `${t.name} (${t.minutes} mins, £${t.price})`).join("; ")}. Total ${formatMinutes(totalMins)}, £${totalPrice}.`;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
      <div className="min-w-0">
        <div role="group" aria-label="Filter treatments by category" className="no-scrollbar sticky top-[4.5rem] z-30 -mx-5 flex gap-2 overflow-x-auto bg-cream/95 px-5 py-3 backdrop-blur-md md:mx-0 md:flex-wrap md:px-0">
          {(["All", ...categories.map((c) => c.name)] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className="min-h-11 shrink-0 rounded-full border border-espresso/20 px-5 text-sm font-semibold transition-colors hover:border-espresso aria-pressed:border-espresso aria-pressed:bg-espresso aria-pressed:text-cream"
            >
              {f}
            </button>
          ))}
        </div>
        <p className="mt-5 text-sm text-cocoa" aria-live="polite">
          Tap treatments to build your visit. {picked.length > 0 && `${picked.length} selected.`}
        </p>

        <div className="mt-8 space-y-14">
          {shown.map((c) => (
            <section key={c.name} aria-labelledby={`cat-${c.name}`}>
              <div className="flex flex-col gap-1 border-b border-gold/40 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 id={`cat-${c.name}`} className="h-display text-4xl">
                  {c.name}
                </h2>
                <p className="text-sm text-cocoa">{c.intro}</p>
              </div>
              <ul className="divide-y divide-espresso/10">
                {treatments
                  .filter((t) => t.category === c.name)
                  .map((t) => {
                    const on = picked.includes(t.id);
                    return (
                      <li key={t.id}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(t.id)}
                          className={`flex min-h-16 w-full items-center gap-4 px-2 py-4 text-left transition-colors sm:px-3 ${on ? "bg-gold-soft/15" : "hover:bg-ivory"}`}
                        >
                          <span
                            aria-hidden
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${on ? "border-espresso bg-espresso text-gold-soft" : "border-espresso/25 text-espresso"}`}
                          >
                            {on ? <IconCheck /> : <IconPlus />}
                          </span>
                          <span className="flex-1">
                            <span className="block font-semibold leading-snug">{t.name}</span>
                            <span className="mt-0.5 flex items-center gap-2 text-sm text-cocoa">
                              {t.minutes} mins
                              {t.signature && (
                                <span className="rounded-full bg-espresso px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold-soft">
                                  Signature
                                </span>
                              )}
                            </span>
                          </span>
                          <span className="h-display text-2xl">£{t.price}</span>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* Desktop summary */}
      <aside aria-label="Your visit" className="hidden lg:block">
        <div className="sticky top-28 rounded-[1.75rem] bg-espresso p-8 text-cream">
          <Summary selected={selected} totalMins={totalMins} totalPrice={totalPrice} message={message} onClear={() => setPicked([])} onRemove={toggle} />
        </div>
      </aside>

      {/* Mobile summary sits just above the sticky booking bar */}
      {selected.length > 0 && (
        <div className="fixed inset-x-3 bottom-[5.25rem] z-40 rounded-2xl bg-espresso p-4 text-cream shadow-2xl lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-gold-soft">
                Your visit · {selected.length} {selected.length === 1 ? "treatment" : "treatments"}
              </p>
              <p className="mt-0.5 font-semibold">
                {formatMinutes(totalMins)} · £{totalPrice}
              </p>
            </div>
            <div className="flex gap-2">
              <a href={waLink(message)} target="_blank" rel="noopener" aria-label="Send this visit to Tania on WhatsApp" className="flex size-11 items-center justify-center rounded-full border border-cream/30">
                <IconWhatsApp className="size-5" />
              </a>
              <a href={site.bookingUrl} target="_blank" rel="noopener" className="flex min-h-11 items-center gap-2 rounded-full bg-gold-soft px-5 text-sm font-semibold text-espresso">
                Book <IconArrow className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Summary({
  selected,
  totalMins,
  totalPrice,
  message,
  onClear,
  onRemove,
}: {
  selected: typeof treatments;
  totalMins: number;
  totalPrice: number;
  message: string;
  onClear: () => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div aria-live="polite">
      <p className="eyebrow !text-gold-soft">Your visit</p>
      {selected.length === 0 ? (
        <p className="mt-4 text-cream/70">Tap any treatment to add it. Your total time and price appear here.</p>
      ) : (
        <ul className="mt-5 space-y-3 border-b border-cream/15 pb-5">
          {selected.map((t) => (
            <li key={t.id} className="flex items-start justify-between gap-3 text-sm">
              <span>
                {t.name}
                <span className="block text-cream/60">{t.minutes} mins</span>
              </span>
              <span className="flex items-center gap-2">
                £{t.price}
                <button type="button" onClick={() => onRemove(t.id)} aria-label={`Remove ${t.name}`} className="flex size-7 items-center justify-center rounded-full text-cream/60 hover:bg-cream/10 hover:text-cream">
                  ×
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
      <dl className="mt-5 space-y-2">
        <div className="flex justify-between text-sm text-cream/75">
          <dt>Time</dt>
          <dd>{totalMins ? formatMinutes(totalMins) : "–"}</dd>
        </div>
        <div className="flex items-baseline justify-between">
          <dt className="text-sm text-cream/75">Total</dt>
          <dd className="h-display text-5xl text-gold-soft">{totalPrice ? `£${totalPrice}` : "–"}</dd>
        </div>
      </dl>
      <a href={site.bookingUrl} target="_blank" rel="noopener" className="mt-7 flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-soft font-semibold text-espresso transition-colors hover:bg-[#d4b67c]">
        Book this visit <IconArrow className="size-4" />
      </a>
      {selected.length > 0 && (
        <>
          <a href={waLink(message)} target="_blank" rel="noopener" className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/25 text-sm font-semibold hover:border-cream">
            <IconWhatsApp className="size-4" /> Send this list to Tania
          </a>
          <button type="button" onClick={onClear} className="mt-3 w-full text-center text-sm text-cream/60 underline underline-offset-4 hover:text-cream">
            Clear
          </button>
        </>
      )}
      <p className="mt-6 text-xs leading-relaxed text-cream/60">You&rsquo;ll choose the same treatments and a time in Timely. Prices are per visit.</p>
    </div>
  );
}
