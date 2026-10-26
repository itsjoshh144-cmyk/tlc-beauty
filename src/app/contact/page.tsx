import type { Metadata } from "next";
import { BookButton, WhatsAppButton } from "@/components/Buttons";
import { IconClock, IconPhone, IconPin } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Todo } from "@/components/Todo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book & Contact",
  description:
    "Book online or message Tania. TLC Beauty Specialist, Allure Beauty Suites, 226 South Coast Road, Peacehaven BN10 8JR. Open Wednesdays and Fridays, 9am to 5pm.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book & contact"
        title={<>Come and see <em className="text-gold-ink">Tania</em></>}
        intro="The quickest way to book is online, any time of day. For advice first, WhatsApp is best."
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <BookButton>Book online</BookButton>
          <WhatsAppButton text="Hi Tania, I have a question about booking." />
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-lux grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="space-y-10">
            <div className="flex gap-4">
              <IconPin className="mt-1 size-6 shrink-0 text-gold-ink" />
              <div>
                <h2 className="h-display text-3xl">Where</h2>
                <address className="mt-2 not-italic leading-relaxed text-cocoa">
                  {site.address.venue}
                  <br />
                  {site.address.street}, {site.address.town}
                  <br />
                  {site.address.county} {site.address.postcode}
                </address>
                <a href={site.mapLink} target="_blank" rel="noopener" className="mt-2 inline-block font-semibold underline underline-offset-4">
                  Get directions
                </a>
                <div className="mt-4">
                  {site.parking ? <p className="text-cocoa">{site.parking}</p> : <Todo>parking details</Todo>}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <IconClock className="mt-1 size-6 shrink-0 text-gold-ink" />
              <div>
                <h2 className="h-display text-3xl">When</h2>
                <dl className="mt-2 space-y-1 text-cocoa">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex gap-6">
                      <dt className="w-28 font-semibold text-espresso">{h.day}</dt>
                      <dd>{h.label}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-sm text-cocoa">
                  Book online to see available times.{" "}
                  <a href={site.bookingUrl} target="_blank" rel="noopener" className="font-semibold text-espresso underline underline-offset-4">
                    Open booking
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <IconPhone className="mt-1 size-6 shrink-0 text-gold-ink" />
              <div>
                <h2 className="h-display text-3xl">Call or WhatsApp</h2>
                <a href={site.phoneHref} className="mt-2 block text-lg font-semibold">
                  {site.phoneDisplay}
                </a>
                <p className="text-sm text-cocoa">If Tania is with a client, leave a message and she&rsquo;ll call you back.</p>
                <p className="mt-4 text-sm text-cocoa">
                  Allure Beauty Suites reception:{" "}
                  <a href={site.receptionHref} className="font-semibold text-espresso">
                    {site.receptionDisplay}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] bg-espresso p-7 text-cream sm:p-10">
              <p className="eyebrow !text-gold-soft">Ready when you are</p>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Book, message <em className="text-gold-soft">or call</em>
              </h2>
              <p className="mt-4 leading-relaxed text-cream/75">
                Pick a time online in under a minute, or message Tania on WhatsApp about treatments, patch tests or vouchers.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <BookButton variant="gold">Book online</BookButton>
                <WhatsAppButton
                  variant="outline"
                  className="!border-cream/30 !text-cream hover:!border-cream"
                  text="Hi Tania, I have a question about a treatment."
                />
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-cream/30 px-7 text-[0.95rem] font-semibold tracking-wide text-cream transition-colors hover:border-cream"
                >
                  <IconPhone className="size-5" /> Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Map" className="pb-20 lg:pb-32">
        <div className="container-lux">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/25 bg-sand">
            <iframe
              title="Map showing Allure Beauty Suites, 226 South Coast Road, Peacehaven"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative block h-[24rem] w-full grayscale-[35%] sepia-[15%] lg:h-[30rem]"
            />
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener"
              className="absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-espresso px-5 text-sm font-semibold text-cream shadow-lg"
            >
              <IconPin className="size-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
