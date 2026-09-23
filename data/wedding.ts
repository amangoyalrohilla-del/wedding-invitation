// ---------------------------------------------------------------------------
// CENTRAL WEDDING CONFIGURATION
// Edit everything here — names, dates, venue, family, gallery, copy — and it
// will update everywhere across the website.
// ---------------------------------------------------------------------------

export type FamilyMember = {
  name: string;
  relation?: string;
};

export type WeddingEvent = {
  id: string;
  name: string;
  dateLabel: string;
  timeLabel: string;
  isoDateTime: string; // for calendar / structured use
  description: string;
  ctaLabel: string;
  dressCode?: string;
};

export const weddingData = {
  couple: {
    groomFirstName: "Aman",
    brideFirstName: "Pranjal",
  },

  groom: {
    name: "Aman Goyal",
    father: "Anup Goyal",
    mother: "Madhu Goyal",
    image: "/images/groom.jpg",
  },

  bride: {
    name: "Pranjal Bansal",
    father: "Rakesh Bansal",
    mother: "Rashmi Bansal",
    image: "/images/bride.jpg",
  },

  // Main wedding date/time — Asia/Kolkata
  weddingDate: "2026-12-12T18:00:00+05:30",
  weddingDateLabel: "12 December 2026",
  weddingTimeLabel: "6:00 PM onwards",

  monogram: "A & P",

  heroImages: {
    couple: "/images/couple-main.jpg",
  },

  music: {
    src: "/music/wedding-theme.mp3",
  },

  story: [
    {
      title: "The First Hello",
      text: "A chance meeting, a quiet conversation, and a feeling neither of us could quite explain.",
    },
    {
      title: "A Beautiful Beginning",
      text: "Days turned into a friendship we looked forward to, then into something neither of us wanted to end.",
    },
    {
      title: "Two Families Become One",
      text: "With blessings from both sides, two families came together — and this beautiful chapter began.",
    },
    {
      title: "Forever Starts Here",
      text: "On 12th December 2026, we begin the story we'll be telling for the rest of our lives.",
    },
  ],

  groomFamilyMembers: [] as FamilyMember[],
  brideFamilyMembers: [] as FamilyMember[],

  events: [
    {
      id: "mehendi",
      name: "Mehendi",
      dateLabel: "12 December 2026",
      timeLabel: "Daytime",
      isoDateTime: "2026-12-12T11:00:00+05:30",
      description:
        "A morning painted in love, laughter and beautiful shades of mehendi.",
      ctaLabel: "View Mehendi Details",
    },
    {
      id: "haldi",
      name: "Haldi",
      dateLabel: "12 December 2026",
      timeLabel: "Daytime",
      isoDateTime: "2026-12-12T13:00:00+05:30",
      description:
        "A sun-kissed celebration filled with turmeric, laughter and blessings.",
      ctaLabel: "View Haldi Details",
    },
    {
      id: "wedding",
      name: "Wedding",
      dateLabel: "12 December 2026",
      timeLabel: "6:00 PM onwards",
      isoDateTime: "2026-12-12T18:00:00+05:30",
      description:
        "Join us as two hearts and two families begin a beautiful forever.",
      ctaLabel: "Wedding Details",
    },
  ] as WeddingEvent[],

  venue: {
    name: "Agarwal Dharamshala",
    address: "Nandpuri, Jaipur, Rajasthan",
    mapUrl: "https://maps.app.goo.gl/bSswH9jYhTCGT8Ng8",
    image: "/images/venue.jpg",
  },

  whatsappNumber: "",

  gallery: [
    "/images/couple-1.jpg",
    "/images/couple-2.jpg",
    "/images/couple-3.jpg",
    "/images/couple-4.jpg",
  ],

  quote: "Two hearts. Two families. One beautiful forever.",

  footerNote: "With love, laughter and happily ever after.",
};

export type WeddingData = typeof weddingData;
