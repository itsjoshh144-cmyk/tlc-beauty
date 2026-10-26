// The site's signature mark: a round "TLC" seal with the trading name set around it.
export function Monogram({ className = "size-28", tone = "gold" }: { className?: string; tone?: "gold" | "cream" }) {
  const color = tone === "gold" ? "var(--color-gold)" : "var(--color-gold-soft)";
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="TLC Beauty Specialist seal">
      <defs>
        <path id="seal-ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="58" fill="none" stroke={color} strokeWidth="0.75" />
      <text fill={color} fontFamily="var(--font-sans)" fontSize="12.5" letterSpacing="5.2" fontWeight="600">
        <textPath href="#seal-ring">BEAUTY SPECIALIST · PEACEHAVEN · EAST SUSSEX ·</textPath>
      </text>
      <text x="100" y="114" textAnchor="middle" fill={color} fontFamily="var(--font-display)" fontSize="44" fontStyle="italic" letterSpacing="1">
        TLC
      </text>
    </svg>
  );
}
