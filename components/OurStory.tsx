"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function OurStory() {
  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl text-burgundy sm:text-5xl"
        >
          Our Story
        </motion.h2>
        <div className="mx-auto mt-5 gold-divider" />

        <div className="mt-16 flex flex-col gap-12 text-left">
          {weddingData.story.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex gap-6 border-b border-gold/20 pb-10 last:border-none"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
              <div>
                <h3 className="font-display text-2xl text-forest">{s.title}</h3>
                <p className="mt-2 max-w-prose font-body text-sm leading-relaxed text-charcoal/70">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={scrollToGallery}
          className="mt-6 border border-burgundy px-8 py-3 font-body text-xs tracking-widest2 text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-ivory"
          style={{ minHeight: 44 }}
        >
          SEE OUR MOMENTS
        </button>
      </div>
    </section>
  );
}
