import { site } from "@/lib/site";
import { BookButton, WhatsAppButton } from "../Buttons";
import { Monogram } from "../Monogram";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-cream lg:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.16),transparent_60%)]" />
      <Reveal className="container-lux relative flex flex-col items-center text-center">
        <Monogram tone="cream" className="size-24" />
        <h2 className="h-display mt-8 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl">
          Your next appointment is <em className="text-gold-soft">a minute away.</em>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-cream/75">
          Book online, or message Tania if you&rsquo;d like advice first. {site.hoursSummary} at Allure Beauty Suites, Peacehaven.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <BookButton variant="gold" />
          <WhatsAppButton variant="outline" className="!border-cream/30 !text-cream hover:!border-cream" text="Hi Tania, could you recommend a treatment for me?" />
        </div>
      </Reveal>
    </section>
  );
}
