# Aman & Pranjal — A Celebration of Forever

A bespoke, cinematic wedding invitation website built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Then open http://localhost:3000. The royal gate loads first — click **"Open Our Invitation"** to see the full experience.

## 3. Add your real photographs

Drop these files into `public/images/` using these exact names (the site already references them):

- `couple-main.jpg` — the large cinematic photo right after the gate opens
- `groom.jpg` — Aman's portrait
- `bride.jpg` — Pranjal's portrait
- `venue.jpg` — a photo of Agarwal Dharamshala
- `couple-1.jpg`, `couple-2.jpg`, `couple-3.jpg`, `couple-4.jpg` — the gallery photos

If a file is missing, the site quietly falls back to a soft ivory/cream panel instead of breaking, so you can deploy before every photo is ready.

## 4. Add your background music

Drop an instrumental/shehnai/orchestral track at:

```
public/music/wedding-theme.mp3
```

It stays silent until the visitor opens the gate (browsers block autoplay before interaction), then plays softly and loops. The floating button in the bottom-right corner toggles it on/off.

## 5. Update the venue

Everything lives in one file: `data/wedding.ts`. Open it and edit:

```ts
venue: {
  name: "Agarwal Dharamshala",
  address: "Nandpuri, Jaipur, Rajasthan",
  mapUrl: "#",          // paste your Google Maps share link here
  image: "/images/venue.jpg",
},
```

Once `mapUrl` is a real link, the "Get Directions" and "View On Google Maps" buttons activate automatically (they're disabled while it's `"#"`).

## 6. Update event timings

Still in `data/wedding.ts`, edit the `events` array — each entry has a date, time, description and CTA label:

```ts
events: [
  { id: "mehendi", name: "Mehendi", dateLabel: "12 December 2026", timeLabel: "Daytime", ... },
  { id: "haldi",   name: "Haldi",   dateLabel: "12 December 2026", timeLabel: "Daytime", ... },
  { id: "wedding", name: "Wedding", dateLabel: "12 December 2026", timeLabel: "6:00 PM onwards", ... },
]
```

The main `weddingDate` field (used by the countdown and the "Save The Date" calendar download) is a single ISO timestamp in `Asia/Kolkata`:

```ts
weddingDate: "2026-12-12T18:00:00+05:30",
```

## 7. Add WhatsApp RSVP

In `data/wedding.ts`:

```ts
whatsappNumber: "91XXXXXXXXXX", // country code + number, no + or spaces
```

Once this is set, an "RSVP on WhatsApp" button appears automatically in the RSVP section, pre-filled with a confirmation message.

## 8. Add or change family members

Still in `data/wedding.ts`:

```ts
groomFamilyMembers: [{ name: "...", relation: "..." }],
brideFamilyMembers: [{ name: "...", relation: "..." }],
```

These render as extra lines under each family card — leave the arrays empty to show just the parents.

## 9. Deploy on Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts; Vercel auto-detects Next.js and deploys.

**Option B — GitHub + Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Leave all settings as default (Framework Preset: Next.js) and click **Deploy**.
4. Every future push to your main branch redeploys automatically.

## Project structure

```
app/
  layout.tsx        Fonts, metadata
  page.tsx           Orchestrates gate → reveal → full site
  globals.css         Base styles, grain texture, reduced-motion support
components/
  Gate.tsx             Royal gate opening experience
  CoupleReveal.tsx     Full-screen cinematic couple photo + "Begin Our Story"
  Navbar.tsx           Sticky nav with blur-on-scroll, mobile menu
  MusicToggle.tsx      Floating music control
  Hero.tsx             Main hero with Save The Date
  Countdown.tsx        Live countdown to the wedding
  CoupleIntro.tsx      Groom & bride editorial split section
  OurStory.tsx         Timeline
  Family.tsx           Family blessings section
  Events.tsx           Mehendi / Haldi / Wedding cards
  Baraat.tsx           Cinematic procession section
  Venue.tsx            Venue + map CTAs
  Gallery.tsx          Editorial gallery with lightbox
  Quote.tsx            Full-width quote
  RSVP.tsx             RSVP form + WhatsApp RSVP
  Footer.tsx           Closing section
  Monogram.tsx         A&P emblem, reused across the site
data/
  wedding.ts           Single source of truth for all content
lib/
  ics.ts               "Save The Date" .ics calendar generator
```

Every visible piece of text and every date/name/venue detail on the site is wired to `data/wedding.ts` — you should rarely need to touch a component file just to update content.
