import { BookButton } from "../Buttons";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const steps = [
  { n: "01", title: "Choose your treatment", copy: "Browse the menu, or build your visit to see the total time and price before you book." },
  { n: "02", title: "Pick a time online", copy: "Book in under a minute through Timely, day or night. You get a confirmation straight away." },
  { n: "03", title: "Arrive and relax", copy: "Come to Allure Beauty Suites on South Coast Road. Tania will have your room warm and ready." },
];

export function HowBooking() {
  return (
    <section className="section-y">
      <div className="container-lux">
        <SectionHeading eyebrow="How booking works" title={<>Three steps, <em className="text-gold-ink">one minute</em></>} />
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.1} className="relative border-t border-gold/40 pt-8">
              <span className="h-display text-6xl text-gold/70">{s.n}</span>
              <h3 className="h-display mt-4 text-3xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-cocoa">{s.copy}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14 text-center">
          <BookButton>See available times</BookButton>
        </Reveal>
      </div>
    </section>
  );
}
