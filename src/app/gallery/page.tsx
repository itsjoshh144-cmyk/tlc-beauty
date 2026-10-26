import type { Metadata } from "next";
import { FinalCta } from "@/components/home";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { IconInstagram } from "@/components/Icons";
import { ImageSlot } from "@/components/ImageSlot";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Lash lifts, brow lamination, facials, gel nails and BIAB by Tania at Allure Beauty Suites, Peacehaven. Real client results.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Real results, <em className="text-gold-ink">real clients</em></>} intro="A selection of Tania's recent work. For the latest, follow along on Instagram.">
        <a href={site.instagramUrl} target="_blank" rel="noopener" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-espresso/25 px-6 font-semibold hover:border-espresso">
          <IconInstagram /> {site.instagramHandle}
        </a>
      </PageHero>
      <section className="section-y">
        <div className="container-lux">
          <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {images.gallery.filter((img) => img.src).map((img, i) => (
              <Reveal as="li" key={i} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
                <figure>
                  <ImageSlot slot={img} style={img.ratio ? { aspectRatio: img.ratio } : undefined} className={`rounded-[1.5rem] ${img.ratio ? "" : i % 3 === 1 ? "aspect-[3/4]" : i % 3 === 2 ? "aspect-square" : "aspect-[4/5]"}`} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" tint={i % 2 ? "stone" : "sand"} />
                  {img.src && <figcaption className="mt-3 text-sm text-cocoa">{img.label}</figcaption>}
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-y bg-sand/60">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Before &amp; after</p>
            <h2 className="h-display mt-4 text-[2.4rem] sm:text-5xl">See the difference</h2>
            <p className="mt-5 text-lg text-cocoa">Drag the slider to compare.</p>
          </Reveal>
          <BeforeAfter />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
