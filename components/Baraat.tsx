"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function Baraat() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-28 text-center">
      <div className="absolute inset-0 grain" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(198,161,91,0.1),transparent_65%)]" />

      {/* Subtle procession silhouette, built from simple SVG shapes */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-center gap-6 opacity-25 sm:h-52">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 rounded-t-full bg-gold sm:w-4"
            style={{ height: `${30 + ((i * 13) % 60)}%` }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.4 + (i % 3) * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h2 className="font-display text-4xl text-ivory sm:text-5xl">
          The Celebration Arrives
        </h2>
        <p className="mt-4 font-body text-sm tracking-widest2 text-gold-soft">
          DANCE. CELEBRATE. MAKE SOME NOISE.
        </p>
        <p className="mt-6 font-body text-xs tracking-widest2 text-ivory/60">
          {weddingData.weddingDateLabel.toUpperCase()} &middot;{" "}
          {weddingData.weddingTimeLabel.toUpperCase()}
        </p>

        <button
          className="mt-10 border border-gold/60 px-8 py-3 font-body text-xs tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold/10 active:scale-[0.98]"
          style={{ minHeight: 44 }}
        >
          JOIN THE BARAAT
        </button>
      </div>
    </section>
  );
}
