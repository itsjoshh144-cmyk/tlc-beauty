import Link from "next/link";
import { fullAddress, site } from "@/lib/site";
import { nav } from "@/lib/nav";
import { Wordmark } from "./Wordmark";
import { IconInstagram } from "./Icons";
import { Monogram } from "./Monogram";

export function Footer() {
  return (
    <footer className="bg-espresso pb-28 text-cream md:pb-0">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <Wordmark light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Clinical facials, lash lifts, waxing, nails and massage with {site.owner}, NVQ Level 2 &amp; 3 qualified, in Peacehaven.
          </p>
          <Monogram tone="cream" className="mt-8 size-24 opacity-80" />
        </div>
        <div>
          <h2 className="eyebrow !text-gold-soft">Visit</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-cream/80">
            {site.address.venue}
            <br />
            {site.address.street}
            <br />
            {site.address.town}, {site.address.county}
            <br />
            {site.address.postcode}
          </address>
          <a href={site.mapLink} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-gold-soft underline underline-offset-4">
            Get directions
          </a>
        </div>
        <div>
          <h2 className="eyebrow !text-gold-soft">Hours</h2>
          <ul className="mt-4 space-y-1 text-sm text-cream/80">
            {site.hours.map((h) => (
              <li key={h.day}>
                {h.day}s, {h.label}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-cream/60">Book online to see available times.</p>
          <p className="mt-5 text-sm">
            <a href={site.phoneHref} className="hover:text-gold-soft">{site.phoneDisplay}</a>
          </p>
          <a href={site.instagramUrl} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 text-sm hover:text-gold-soft">
            <IconInstagram className="size-4" /> {site.instagramHandle}
          </a>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow !text-gold-soft">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold-soft">{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#gift-vouchers" className="hover:text-gold-soft">Gift vouchers</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-lux flex flex-col gap-2 py-6 text-xs text-cream/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. {fullAddress}.</p>
          <p>Serving {site.areas.join(", ")}.</p>
        </div>
      </div>
    </footer>
  );
}
