import type { Metadata } from "next";
import { BookButton } from "@/components/Buttons";
import { FinalCta } from "@/components/home";
import { IconStar } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { redirect } from "next/navigation";
import { hasReviews, reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "What clients from Peacehaven, Newhaven, Saltdean and Brighton say about facials, lash lifts and waxing with Tania at TLC Beauty Specialist.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  if (!hasReviews) redirect("/");
  const items = reviews;
  return (
    <>
      <PageHero eyebrow="Reviews" title={<>In clients&rsquo; <em className="text-gold-ink">own words</em></>}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {site.rating ? (
            <p className="text-lg">
              <strong>{site.rating.value.toFixed(1)}</strong> from {site.rating.count} reviews on {site.rating.source}
            </p>
          ) : null}
          {site.googleReviewUrl ? (
            <a href={site.googleReviewUrl} target="_blank" rel="noopener" className="font-semibold underline underline-offset-4">
              Leave a review
            </a>
          ) : null}
        </div>
      </PageHero>
      <section className="section-y">
        <ul className="container-lux columns-1 gap-6 md:columns-2 lg:columns-3">
          {items.map((r, i) => (
            <Reveal as="li" key={i} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid rounded-[1.5rem] border border-gold/25 bg-ivory p-8">
              <span className="flex gap-1 text-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <IconStar key={s} />
                ))}
              </span>
              <blockquote className="mt-5 font-display text-2xl leading-snug">&ldquo;{r.text}&rdquo;</blockquote>
              <p className="mt-5 text-sm font-semibold">{r.name}</p>
              {r.treatment && <p className="eyebrow mt-1 !text-[0.65rem]">{r.treatment}</p>}
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <BookButton />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
