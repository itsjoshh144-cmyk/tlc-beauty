# TLC Beauty Specialist: website

Website for Tania Lena Cahalane's beauty business at Allure Beauty Suites, Peacehaven. Built with Next.js 15, Tailwind CSS 4 and Framer Motion.

Pages: Home, Treatments (filterable menu and visit builder), About, Gallery, Reviews and Contact (map, hours and form). The site also includes BeautySalon and FAQ schema, a sitemap, robots.txt and a generated Open Graph image.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Filling in the "To add" slots

Anything not yet supplied shows on the page as a dashed **"To add: …"** tag or a **"Photo to add"** panel. Each one is filled in a single place:

| What | Where | How |
|---|---|---|
| Photos | `src/lib/images.ts` | Put the image in `public/images/` (e.g. `public/images/tania.jpg`), then set `src: "/images/tania.jpg"` on the matching slot. |
| Reviews | `src/lib/reviews.ts` | Paste real reviews word for word: `{ name: "Sarah, Saltdean", text: "…", treatment: "Lash lift" }` |
| Star rating | `src/lib/site.ts` → `rating` | `{ value: 5.0, count: 87, source: "Google" }`. This also adds the rating to the search-engine schema. |
| Google review link | `src/lib/site.ts` → `googleReviewUrl` | Your "Ask for reviews" link from Google Business Profile |
| New client offer | `src/lib/site.ts` → `newClientOffer` | e.g. `"15% off your first facial."` |
| Gift vouchers | `src/lib/site.ts` → `giftVouchers` | e.g. `"Buy online through Timely, or in person."` |
| Parking | `src/lib/site.ts` → `parking` | e.g. `"Free on-street parking on …"` |
| Cancellation policy | `src/lib/site.ts` → `cancellationPolicy` | Shown in the FAQ |
| Contact form email | Vercel environment variables | See below |
| Live domain | Vercel env `NEXT_PUBLIC_SITE_URL` | e.g. `https://www.tlcbeautyspecialist.co.uk`. Used for the sitemap, canonical links and schema. |

## Deploy to Vercel (step by step)

1. Go to <https://vercel.com/signup> and sign up with **Continue with GitHub**.
2. On your Vercel dashboard click **Add New… → Project**.
3. Under **Import Git Repository**, find **tlc-beauty** and click **Import**. If it isn't listed, click **Adjust GitHub App Permissions** and give Vercel access to that repo.
4. Vercel detects **Next.js** automatically. Leave the build settings as they are.
5. Open **Environment Variables** and add:
   - `NEXT_PUBLIC_SITE_URL`: the address the site will live at. Use `https://tlc-beauty.vercel.app` for now and change it once you add a custom domain.
   - For the contact form, add these too (or skip them for now and the form will point people to WhatsApp):
     - `RESEND_API_KEY`: create a free account at <https://resend.com> and go to **API Keys → Create**.
     - `CONTACT_TO_EMAIL`: the inbox that form messages should go to.
     - `CONTACT_FROM_EMAIL` (optional): e.g. `TLC Beauty <hello@yourdomain.co.uk>`. This only works after you verify the domain in Resend. Without it, messages come from Resend's test sender, which can only deliver to the email address you signed up to Resend with.
6. Click **Deploy**. After about a minute you get a live link like `https://tlc-beauty.vercel.app`.
7. **Custom domain (optional):** go to Project → **Settings → Domains → Add**, type the domain, and follow the DNS instructions Vercel shows. Then update `NEXT_PUBLIC_SITE_URL` and click **Redeploy**.
8. **Google (recommended):** add the site to Google Search Console and submit `https://YOURDOMAIN/sitemap.xml`. Put the website link on the Google Business Profile as well.

Every push to the `main` branch on GitHub redeploys the site automatically.

## Where things live

- `src/lib/site.ts`: name, address, phone, hours, booking link, areas and "to add" values
- `src/lib/treatments.ts`: the full price list (name, minutes, price)
- `src/lib/faqs.ts`: FAQ questions and answers
- `src/components/home/`: home page sections
- `src/app/*/page.tsx`: each page and its search title and description
