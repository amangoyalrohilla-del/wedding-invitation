"use client";

import { motion } from "framer-motion";
import Monogram from "./Monogram";
import { weddingData } from "@/data/wedding";

export default function Gate({
  opening,
  onOpen,
}: {
  opening: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-charcoal">
      {/* Rich layered background — no external image needed */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(198,161,91,0.14), transparent 60%), linear-gradient(180deg, #1F1B17 0%, #14110E 55%, #0E0C0A 100%)",
        }}
      />
      <div className="absolute inset-0 grain opacity-30" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/40 animate-drift"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 149) % 100}%`,
            top: `${(i * 83) % 100}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Left door */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2"
        animate={{ x: opening ? "-100%" : 0 }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.18, 1] }}
      >
        <div className="absolute inset-0 border-r border-gold/25 bg-[linear-gradient(100deg,rgba(198,161,91,0.05),transparent_55%)]" />
        <div className="absolute inset-6 border border-gold/30" />
        <div className="absolute inset-9 border border-gold/15" />
      </motion.div>

      {/* Right door */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2"
        animate={{ x: opening ? "100%" : 0 }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.18, 1] }}
      >
        <div className="absolute inset-0 border-l border-gold/25 bg-[linear-gradient(260deg,rgba(198,161,91,0.05),transparent_55%)]" />
        <div className="absolute inset-6 border border-gold/30" />
        <div className="absolute inset-9 border border-gold/15" />
      </motion.div>

      {/* Center light reveal on open */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gold/20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? [0, 0.45, 0] : 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      {/* Center content */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Monogram className="mb-7 h-14 w-14 opacity-90" />

        <p className="mb-3 font-body text-[10px] tracking-widest2 text-gold-soft sm:text-[11px]">
          TOGETHER WITH THEIR FAMILIES
        </p>

        <h1 className="font-display text-4xl leading-none text-ivory sm:text-6xl md:text-7xl">
          {weddingData.couple.groomFirstName}
          <span className="mx-3 text-gold">&amp;</span>
          {weddingData.couple.brideFirstName}
        </h1>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px w-9 bg-gold/50" />
          <span className="font-display text-base tracking-widest2 text-gold-soft sm:text-lg">
            12 &middot; 12 &middot; 2026
          </span>
          <span className="h-px w-9 bg-gold/50" />
        </div>

        <button
          onClick={onOpen}
          disabled={opening}
          className="group mt-4 inline-flex items-center gap-3 border border-gold/60 px-7 py-3 font-body text-[11px] tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold/10 active:scale-[0.98] disabled:opacity-60 sm:px-8 sm:text-xs"
          style={{ minHeight: 44 }}
        >
          OPEN OUR INVITATION
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </motion.div>
    </div>
  );
}
