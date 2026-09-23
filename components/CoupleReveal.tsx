"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function CoupleReveal({
  visible,
  onContinue,
}: {
  visible: boolean;
  onContinue: () => void;
}) {
  if (!visible) return null;

  return (
    <motion.section
      className="fixed inset-0 z-40 overflow-hidden bg-charcoal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,24,22,0.35), rgba(26,24,22,0.75)), url(${weddingData.heroImages.couple})`,
        }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center sm:justify-center sm:pb-0">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-4 font-body text-[11px] tracking-widest2 text-gold-soft"
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl"
        >
          {weddingData.groom.name}
          <span className="mx-3 block text-gold sm:inline">&amp;</span>
          {weddingData.bride.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-5 font-display text-lg italic text-ivory/85"
        >
          invite you to celebrate their wedding
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-1 font-body text-sm tracking-widest2 text-gold-soft"
        >
          {weddingData.weddingDateLabel}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          onClick={onContinue}
          className="group mt-10 inline-flex items-center gap-3 border border-gold/60 px-8 py-3 font-body text-xs tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold/10 active:scale-[0.98]"
          style={{ minHeight: 44 }}
        >
          BEGIN OUR STORY
          <span className="transition-transform duration-300 group-hover:translate-y-0.5">
            &darr;
          </span>
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-gold-soft/70"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <div className="h-8 w-px bg-gold-soft/50" />
      </motion.div>
    </motion.section>
  );
}
