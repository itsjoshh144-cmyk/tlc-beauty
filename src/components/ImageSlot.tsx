import Image from "next/image";
import type { Slot } from "@/lib/images";

type Props = {
  slot: Slot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tint?: "sand" | "stone" | "espresso";
  style?: React.CSSProperties;
};

// Renders a real photo when one is set, otherwise a clearly marked photo slot.
export function ImageSlot({ slot, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority, tint = "sand", style }: Props) {
  if (slot.src) {
    return (
      <div style={style} className={`${className.includes("absolute") ? "" : "relative "}overflow-hidden ${className}`}>
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" style={slot.position ? { objectPosition: slot.position } : undefined} />
      </div>
    );
  }
  const bg =
    tint === "espresso"
      ? "bg-[radial-gradient(120%_90%_at_30%_20%,#4a3a30_0%,#2b211c_70%)] text-gold-soft"
      : tint === "stone"
        ? "bg-[radial-gradient(120%_90%_at_30%_20%,#f3eadc_0%,#e3d6c3_80%)] text-gold-ink"
        : "bg-[radial-gradient(120%_90%_at_30%_20%,#fbf6ee_0%,#efe5d6_75%)] text-gold-ink";
  return (
    <div role="img" aria-label={`Photo to add: ${slot.label}`} style={style} className={`${className.includes("absolute") ? "" : "relative "}overflow-hidden ${bg} ${className}`}>
      <div aria-hidden className="absolute inset-0 bg-[repeating-linear-gradient(45deg,currentColor_0_0.6px,transparent_0.6px_10px)] opacity-[0.14]" />
      <div className="absolute inset-3 flex flex-col items-center justify-center gap-2 rounded-[inherit] border border-dashed border-current/40 p-4 text-center">
        <svg aria-hidden viewBox="0 0 24 24" className="size-6 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M8 5l1.5-2h5L16 5" />
        </svg>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">Photo to add</span>
        <span className="font-display text-lg italic leading-tight">{slot.label}</span>
      </div>
    </div>
  );
}
