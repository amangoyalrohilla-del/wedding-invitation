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
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-charcoal to-charcoal" />

      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/50 animate-drift"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 137) % 100}%`,
            top: `${(i * 71) % 100}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${7 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-3 bg-gradient-to-b from-gold-soft via-gold to-gold-soft opacity-70 shadow-[0_0_20px_rgba(212,175,55,0.5)] sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-3 bg-gradient-to-b from-gold-soft via-gold to-gold-soft opacity-70 shadow-[0_0_20px_rgba(212,175,55,0.5)] sm:block" />

      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 border-r-2 border-gold bg-[radial-gradient(circle_at_100%_50%,rgba(212,175,55,0.16),transparent_60%)]"
        animate={{ x: opening ? "-100%" : 0 }}
        transition={{ duration: 1.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <FiligreePanel side="left" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 border-l-2 border-gold bg-[radial-gradient(circle_at_0%_50%,rgba(212,175,55,0.16),transparent_60%)]"
        animate={{ x: opening ? "100%" : 0 }}
        transition={{ duration: 1.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <FiligreePanel side="right" />
      </motion.div>

      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <svg width="240" height="60" viewBox="0 0 240 60" className="opacity-80">
          <path d="M0 0 Q120 70 240 0" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="120" cy="34" r="5" fill="#D4AF37" />
          <circle cx="90" cy="24" r="3" fill="#D4AF37" opacity="0.7" />
          <circle cx="150" cy="24" r="3" fill="#D4AF37" opacity="0.7" />
        </svg>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gold/25 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? [0, 0.5, 0] : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <Monogram className="mb-6 h-16 w-16 opacity-90" />
        <p className="mb-2 font-body text-[11px] tracking-widest2 text-gold-soft">
          TOGETHER WITH THEIR FAMILIES
        </p>
        <h1 className="font-display text-4xl text-ivory sm:text-5xl md:text-7xl">
          {weddingData.couple.groomFirstName}
          <span className="mx-3 text-gold">&amp;</span>
          {weddingData.couple.brideFirstName}
        </h1>
        <div className="my-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold/60" />
          <span className="font-display text-lg tracking-widest2 text-gold-soft">
            12 &middot; 12 &middot; 2026
          </span>
          <span className="h-px w-10 bg-gold/60" />
        </div>

        <button
          onClick={onOpen}
          disabled={opening}
          className="group mt-6 inline-flex items-center gap-3 border-2 border-gold px-8 py-3 font-body text-xs tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold/10 active:scale-[0.98] disabled:opacity-60"
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

function FiligreePanel({ side }: { side: "left" | "right" }) {
  const edge = side === "left" ? "right" : "left";
  return (
    <div className="absolute inset-5 opacity-80">
      <div className="absolute inset-0 border-2 border-gold" />
      <div className="absolute inset-3 border border-gold/60" />

      <svg
        className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]"
        viewBox="0 0 200 400"
        preserveAspectRatio="none"
      >
        {[...Array(5)].map((_, row) =>
          [...Array(3)].map((_, col) => {
            const cx = 33 + col * 67;
            const cy = 40 + row * 80;
            return (
              <g key={`${row}-${col}`} stroke="#D4AF37" strokeWidth="1" opacity="0.55">
                <path
                  d={`M${cx} ${cy - 22} L${cx + 22} ${cy} L${cx} ${cy + 22} L${cx - 22} ${cy} Z`}
                  fill="none"
                />
                <circle cx={cx} cy={cy} r="3" fill="#D4AF37" />
              </g>
            );
          })
        )}
      </svg>

      <svg
        className={`absolute top-1/2 h-32 w-16 -translate-y-1/2 ${
          edge === "left" ? "left-0" : "right-0 scale-x-[-1]"
        }`}
        viewBox="0 0 60 130"
      >
        <path
          d="M0 0 C 40 20, 40 40, 15 65 C -10 90, 20 110, 20 130"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          opacity="0.85"
        />
        <circle cx="20" cy="65" r="4" fill="#D4AF37" />
      </svg>
    </div>
  );
}
