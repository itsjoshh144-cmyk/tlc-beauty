export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-baseline gap-2.5 leading-none">
      <span className={`font-display text-[1.9rem] italic ${light ? "text-gold-soft" : "text-gold-ink"}`}>TLC</span>
      <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-cream" : "text-espresso"}`}>
        Beauty Specialist
      </span>
    </span>
  );
}
