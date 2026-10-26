# TLC Beauty Specialist: website

Website for Tania Lena Cahalane's beauty business at Allure Beauty Suites, Peacehaven. Built with Next.js 15, Tailwind CSS 4 and Framer Motion.

Pages: Home, Treatments (filterable menu and visit builder), About, Gallery, Reviews and Contact (map, hours, and Book/WhatsApp/Call buttons). The site also includes BeautySalon and FAQ schema, a sitemap, robots.txt and a generated Open Graph image.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Still to add (hidden until filled in)

The live site shows no "to add" markers. Each item below stays hidden until you fill it in, then appears on the next deploy.

| Item | Where to fill it in | What appears once it's filled in |
|---|---|---|
| New client offer | `src/lib/site.ts` → `newClientOffer`, e.g. `"15% off your first facial."` | Dark offer banner across the top of every page |
| Parking | `src/lib/site.ts` → `parking`, e.g. `"Free on-street parking on …"` | Contact page (under the address) and a "Is there parking?" FAQ |
| Cancellation policy | `src/lib/site.ts` → `cancellationPolicy` | "Can I cancel or move my booking?" FAQ |
| Gift voucher details | `src/lib/site.ts` → `giftVouchers`, e.g. `"Buy online through Timely, or in person."` | A line in the Gift vouchers section and a "Do you sell gift vouchers?" FAQ |
| Reviews | `src/lib/reviews.ts`. Paste real reviews word for word: `{ name: "Sarah, Saltdean", text: "…", treatment: "Lash lift" }` | Reviews carousel on the home page, the Reviews page and its menu link, and the sitemap entry. Until then, `/reviews` redirects to the home page. |
| Star rating | `src/lib/site.ts` → `rating`, e.g. `{ value: 5.0, count: 87, source: "Google" }` | Replaces "Clinicare" in the trust bar; rating summary on the reviews sections; rating in Google schema |
| Google review link | `src/lib/site.ts` → `googleReviewUrl` | "Leave a review" link on the Reviews page |
| Photos | Put the file in `public/images/`, then set `src: "/images/name.jpg"` on its slot in `src/lib/images.ts` | Replaces the plain TLC-seal panel, or adds the photo to the gallery and Instagram strip |

Photo slots still empty:
- `sigWax`: hot wax / waxing room (signature treatment card)
- `suite`: the treatment room (About page)
- `voucher`: gift voucher (home page)
- Gallery: gel manicure, BIAB, the suite, lash & brow tint, gel pedicure, hot stone massage

Other settings:
- **Live domain:** Vercel env `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.tlcbeautyspecialist.co.uk`). Used for the sitemap, canonical links and schema.

## Deploy to Vercel (step by step)

1. Go to <https://vercel.com/signup> and sign up with **Continue with GitHub**.
2. On your Vercel dashboard click **Add New… → Project**.
3. Under **Import Git Repository**, find **tlc-beauty** and click **Import**. If it isn't listed, click **Adjust GitHub App Permissions** and give Vercel access to that repo.
4. Vercel detects **Next.js** automatically. Leave the build settings as they are.
5. Open **Environment Variables** and add:
   - `NEXT_PUBLIC_SITE_URL`: the address the site will live at. Use `https://tlc-beauty.vercel.app` for now and change it once you add a custom domain.
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
