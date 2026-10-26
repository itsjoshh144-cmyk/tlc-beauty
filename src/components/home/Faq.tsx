import { faqs } from "@/lib/faqs";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { Todo } from "../Todo";

export function Faq() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-lux grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeading align="left" eyebrow="Questions" title={<>Good to <em className="text-gold-ink">know</em></>} intro="Anything else? Message Tania on WhatsApp and she'll reply personally." />
        <Reveal>
          <div className="divide-y divide-espresso/10 border-y border-espresso/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-3 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="relative size-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-gold-ink" />
                    <span className="absolute left-0 top-1/2 h-px w-4 rotate-90 bg-gold-ink transition-transform duration-300 group-open:rotate-0" />
                  </span>
                </summary>
                <div className="pb-5 pr-10 leading-relaxed text-cocoa">{f.a ?? <Todo>{f.todo}</Todo>}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
