import { site } from "@/lib/site";
import { Todo } from "./Todo";

export function OfferBanner() {
  return (
    <div className="bg-espresso text-cream">
      <div className="container-lux flex min-h-10 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[0.8rem]">
        <span className="font-semibold uppercase tracking-[0.18em] text-gold-soft">New to Tania?</span>
        {site.newClientOffer ? (
          <span>{site.newClientOffer}</span>
        ) : (
          <Todo className="!border-gold-soft/60 !bg-transparent !text-gold-soft">new client offer</Todo>
        )}
        <a href={site.bookingUrl} target="_blank" rel="noopener" className="underline decoration-gold-soft underline-offset-4 hover:text-gold-soft">
          Book your first visit
        </a>
      </div>
    </div>
  );
}
