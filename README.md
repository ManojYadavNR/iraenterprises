# IRA Enterprises — landing page

Single-page website for **IRA Enterprises**, Chikkaballapur — wholesale distributors of
bio-degradable paper bags and covers.

Built with **React + Vite + Tailwind CSS v4**. It is a fully static site: no server, no
database, nothing to maintain. `npm run build` produces a `dist/` folder you can host
anywhere (Netlify, Vercel, Hostinger, GitHub Pages, or plain shared hosting).

## Running it

```bash
npm install      # once
npm run dev      # local development, opens http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Where things are

| What | File |
|---|---|
| **All text, products, phone numbers, FAQs** | `src/data/site.js` |
| Brand colours and fonts | `src/styles/index.css` (the `@theme` block) |
| Page order | `src/App.jsx` |
| The animated story | `src/components/Film.jsx` + `src/components/FilmScenes.jsx` |
| Animation timing for the story | `src/styles/film.css` |
| Images | `public/images/` |
| Logo and favicons | `public/brand/` |

To change wording, prices, products or contact details you should only ever need to
edit **`src/data/site.js`**.

## Page order and why

1. **Header + announcement bar** — tagline, phone, email and GSTIN visible before anything else.
2. **Hero — "I am not plastic."** — your own line from the visiting card, used as the hook.
3. **Trust marquee** — the kinds of businesses you supply, so a visitor recognises themselves.
4. **Products** — the eight ranges from the visiting card, each with uses and an enquiry link.
5. **The film — "The life of one IRA bag"** — the emotional argument, placed after people know what you sell.
6. **Why bio-degradable + counters** — the rational argument and the numbers.
7. **How we work** — removes the "is ordering complicated?" objection.
8. **Our store** — shop photo, address, hours, directions.
9. **Chikkaballapur / Nandi Hills** — the sentiment section: why this matters to you, locally.
10. **Testimonials → FAQ → Enquiry form → Footer** — the closing sequence.

## The animated story

`#film` is an animated sequence built in SVG and CSS — not a video file, so it stays
sharp at any size, weighs almost nothing, and can be edited later. It runs on a loop
of five chapters, about 26 seconds in total:

> **seed → fibre → bag → the work → back to the soil → a new seed**

It pauses when scrolled off-screen, has play/pause and clickable chapters, and falls
back to still frames for visitors who have "reduce motion" switched on.

## The enquiry form

The site is static, so the form does not email anyone by itself. On submit it opens
**WhatsApp** on `business.whatsapp` with the enquiry already typed out, and there is an
email fallback link underneath. This is deliberate — it lands on the phone that is
already answering customers, and there is no server to pay for or maintain.

To change the number, edit `whatsapp` in `src/data/site.js`.

## ⚠️ Before you go live — things to replace

**Images.** Everything in `public/images/` is a **placeholder illustration** drawn in your
brand colours. Replace each file with a real photograph, keeping the same filename and a
similar shape, and the site picks it up with no code changes:

- `shop-front.jpg` — your actual storefront (landscape, ~4:3)
- `nandi-hills.jpg` — a real Chikkaballapur / Nandi Hills photo (wide landscape)
- `about.jpg` — your stock, godown or paper bundles (~4:3)
- `hero.jpg` — soft background texture behind the hero (very wide)
- `p-*.jpg` — one square photo per product

**Claims and numbers.** These are reasonable defaults, but they are *not* verified facts
about your business. Every one is marked `// TODO: confirm` in `src/data/site.js`:

- "180 days back to soil" and "returns to soil in months" — replace with the actual figure
  for the grades you sell, or soften the wording.
- The counters: "500+ businesses supplied", "8+ product lines", "24 hr quotation".
- Counter hours (Mon–Sat 9:30 AM – 8:30 PM) — set your real timings.
- **The three testimonials are sample text.** Replace them with real customer quotes, or
  delete the section from `src/App.jsx`, before publishing.

**Reference material.** Your logo and visiting card scans are kept in `reference/` for
future edits. They are outside `public/`, so they are not published with the site.
