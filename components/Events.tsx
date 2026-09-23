"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function Events() {
  return (
    <section id="events" className="bg-ivory px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-4xl text-burgundy sm:text-5xl">
          Wedding Celebrations
        </h2>
        <div className="mx-auto mt-5 gold-divider" />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {weddingData.events.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex flex-col items-center border border-gold/20 bg-cream/60 px-6 py-10 text-center"
            >
              <span className="font-script text-3xl text-gold">
                {e.name}
              </span>
              <p className="mt-4 font-body text-xs tracking-widest2 text-forest">
                {e.dateLabel.toUpperCase()}
              </p>
              <p className="font-body text-xs tracking-widest2 text-charcoal/50">
                {e.timeLabel.toUpperCase()}
              </p>
              <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-charcoal/70">
                {e.description}
              </p>
              <button
                className="mt-6 border border-burgundy px-6 py-2.5 font-body text-[11px] tracking-widest2 text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-ivory"
                style={{ minHeight: 44 }}
              >
                {e.ctaLabel.toUpperCase()}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
