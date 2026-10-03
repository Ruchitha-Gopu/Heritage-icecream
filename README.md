# Heritage Ice Cream Parlour — Website

A modern, mobile-responsive website for Heritage Ice Cream Parlour, Cherukupalli,
built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

To create a production build:

```bash
npm run build
npm run start
```

## What's included

- **Sticky, responsive navbar** with a mobile hamburger menu
- **Hero section** with quick-action buttons (Menu, Directions, Call, WhatsApp)
- **About**, **Specialties**, **Brands**, **Why Choose Us** sections
- **Menu** with category tabs (Ice Creams / Special Desserts / Ice Cream Products)
- **Grand Opening Offer** (Lucky Draw) section
- **QR code** section linking to the live site
- **Gallery** with category filters and a lightbox (next/prev/close)
- **Shop Opening & Moments** video section (YouTube-embed ready)
- **Customer Reviews** carousel (clearly marked as sample data)
- **Feedback form** (frontend UI; see note below on backend integration)
- **Catering & Bulk Orders** section
- **Location** section with a Google Maps embed
- **Contact** section with an enquiry form
- **Floating WhatsApp button** and click-to-call links throughout
- SEO metadata, Open Graph tags, and `IceCreamShop` structured data (JSON-LD)

## Where to update content

All editable business content lives in the `data/` folder — you should not
need to touch component code for routine updates:

| File | What to edit |
|---|---|
| `data/siteConfig.ts` | Business name, tagline, phone, WhatsApp number, address, Google Maps links, website URL, social links |
| `data/products.ts` | Menu items, specialties, and available brands (names, descriptions, prices, images) |
| `data/offers.ts` | Grand Opening Lucky Draw details, catering services, "Why Choose Us" cards |
| `data/gallery.ts` | Gallery photos and categories |
| `data/videos.ts` | Shop videos — paste a real YouTube video ID into `youtubeId` |
| `data/reviews.ts` | Customer reviews — replace the sample entries with real ones and set `isSample: false` |

### Prices

All prices are placeholders (`₹XX`) because real pricing wasn't provided.
Update the `price` field in `data/products.ts` once pricing is finalised.

### Images

Placeholder images are pulled from `picsum.photos` so the site looks complete
out of the box. Replace each `image` / `thumbnail` URL with your own photos
(e.g. files placed in `public/images/...` and referenced as `/images/...`).

### Google Maps

`data/siteConfig.ts` has a `googleMapsEmbedUrl` built from a text search of
the address. For pinpoint accuracy: open Google Maps → search your shop →
**Share** → **Embed a map** → copy the `src` URL into `googleMapsEmbedUrl`,
and use the **Share** link for `googleMapsDirectionsUrl`.

### QR code

The QR code section encodes `siteConfig.websiteUrl`. Once the site is
deployed, update that value to the real URL so the QR code (and Open Graph
metadata) point to the live site.

### Feedback and Contact forms

Both forms currently only show a confirmation message in the browser — they
do **not** yet send data anywhere. To collect and moderate real submissions,
connect them to a backend, for example:

- A Next.js API route (e.g. `app/api/feedback/route.ts`) that saves entries
  to a database (Postgres, MongoDB, Supabase, Firebase, etc.), or
- A form service such as Formspree, Google Forms, or a connected spreadsheet.

New feedback should be reviewed by the shop before being published in the
public "What Our Customers Say" section — the `isSample` flag in
`data/reviews.ts` is there to help keep sample and real reviews clearly
separated.

## Suggested data structure for a future backend

```
products:  id, name, category, description, price, image
offers:    id, title, description, prizeText, drawDate
gallery:   id, category, image, alt
videos:    id, title, description, thumbnail, videoUrl
reviews:   id, customerName, rating, review, image
feedback:  id, customerName, rating, feedback, photo, status (pending/approved)
events:    id, name, date, description
```

The current `data/*.ts` files already follow this shape, so swapping static
arrays for API calls later (e.g. `fetch("/api/products")`) should be
straightforward.
