"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function Quote() {
  return (
    <section className="bg-charcoal px-6 py-28 text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-3xl font-display text-3xl italic leading-relaxed text-ivory sm:text-4xl md:text-5xl"
      >
        &ldquo;{weddingData.quote}&rdquo;
      </motion.p>
    </section>
  );
}
