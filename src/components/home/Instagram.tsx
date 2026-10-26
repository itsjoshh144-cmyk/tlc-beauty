import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { IconInstagram } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";

export function Instagram() {
  return (
    <section className="section-y">
      <div className="container-lux">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">On Instagram</p>
            <h2 className="h-display mt-4 text-[2.4rem] sm:text-5xl">Fresh results, most weeks</h2>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-espresso/25 px-6 font-semibold transition-colors hover:border-espresso"
          >
            <IconInstagram /> {site.instagramHandle}
          </a>
        </Reveal>
        <ul className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
          {[...images.gallery.filter((img) => img.src), images.heroTania].slice(0, 6).map((img, i) => (
            <Reveal as="li" key={i} delay={i * 0.05}>
              <a href={site.instagramUrl} target="_blank" rel="noopener" aria-label={`${img.label} on Instagram`} className="block overflow-hidden rounded-2xl">
                <ImageSlot slot={img} className="aspect-square transition-transform duration-700 ease-lux hover:scale-[1.04]" sizes="(min-width: 1024px) 16vw, 33vw" tint={i % 2 ? "stone" : "sand"} />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
