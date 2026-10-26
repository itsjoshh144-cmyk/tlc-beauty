// A visible "to add" marker for details the owner still needs to supply.
export function Todo({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-gold-ink/60 bg-ivory/70 px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gold-ink ${className}`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-gold" />
      To add: {children}
    </span>
  );
}
