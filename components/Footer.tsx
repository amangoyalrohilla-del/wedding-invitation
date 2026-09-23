"use client";

import { weddingData } from "@/data/wedding";
import Monogram from "./Monogram";

export default function Footer() {
  const backToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-forest px-6 py-16 text-center">
      <Monogram className="mx-auto mb-6 h-12 w-12" tone="ivory" />
      <h2 className="font-display text-3xl text-ivory sm:text-4xl">
        {weddingData.couple.groomFirstName}
        <span className="mx-3 text-gold-soft">&amp;</span>
        {weddingData.couple.brideFirstName}
      </h2>
      <p className="mt-3 font-body text-xs tracking-widest2 text-gold-soft">
        12 &middot; 12 &middot; 2026
      </p>
      <p className="mt-6 font-display text-lg italic text-ivory/70">
        {weddingData.footerNote}
      </p>

      <button
        onClick={backToTop}
        className="mt-10 border border-gold/40 px-6 py-2.5 font-body text-[11px] tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold/10"
        style={{ minHeight: 44 }}
      >
        BACK TO THE BEGINNING
      </button>
    </footer>
  );
}
