"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function Venue() {
  const hasMap = weddingData.venue.mapUrl && weddingData.venue.mapUrl !== "#";

  return (
    <section id="venue" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl text-burgundy sm:text-5xl">
          The Venue
        </h2>
        <div className="mx-auto mt-5 gold-divider" />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mt-12 aspect-video w-full overflow-hidden border border-gold/25 bg-ivory"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(75,14,30,0.05), rgba(75,14,30,0.05)), url(${weddingData.venue.image})`,
            }}
          />
        </motion.div>

        <h3 className="mt-10 font-display text-2xl text-forest">
          {weddingData.venue.name}
        </h3>
        <p className="mt-2 font-body text-sm text-charcoal/70">
          {weddingData.venue.address}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          {hasMap ? (
            <a
              href={weddingData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-burgundy px-8 py-3 font-body text-xs tracking-widest2 text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-ivory"
              style={{ minHeight: 44 }}
            >
              GET DIRECTIONS
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed border border-burgundy/30 px-8 py-3 font-body text-xs tracking-widest2 text-burgundy/40"
              style={{ minHeight: 44 }}
              title="Map link coming soon"
            >
              GET DIRECTIONS
            </button>
          )}
          {hasMap ? (
            <a
              href={weddingData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold px-8 py-3 font-body text-xs tracking-widest2 text-gold transition-all duration-300 hover:bg-gold/10"
              style={{ minHeight: 44 }}
            >
              VIEW ON GOOGLE MAPS
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed border border-gold/30 px-8 py-3 font-body text-xs tracking-widest2 text-gold/40"
              style={{ minHeight: 44 }}
              title="Map link coming soon"
            >
              VIEW ON GOOGLE MAPS
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
