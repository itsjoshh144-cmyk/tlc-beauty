import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden border-b border-gold/20 pt-[4.5rem]">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-48 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.2),transparent_65%)]" />
      <div className="container-lux relative py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-5 text-[2.75rem] sm:text-6xl lg:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
