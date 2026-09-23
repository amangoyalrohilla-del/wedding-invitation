"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

// `opening` starts the flap/seal animation; the parent unmounts this
// component shortly after the animation completes.
export default function Gate({
  opening,
  onOpen,
}: {
  opening: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#EFE6D8] px-6">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.18),transparent_65%)]" />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ opacity: opening ? 0 : 1, scale: opening ? 0.94 : 1 }}
        transition={{ duration: 0.8, delay: opening ? 0.9 : 0 }}
      >
        <p className="mb-6 font-body text-[11px] tracking-widest2 text-charcoal/60">
          TOGETHER WITH THEIR FAMILIES
        </p>

        {/* Envelope */}
        <button
          onClick={onOpen}
          disabled={opening}
          aria-label="Open invitation"
          className="relative aspect-[3/4] w-[74vw] max-w-[300px] disabled:cursor-default"
          style={{ perspective: 900 }}
        >
          {/* Envelope body (kraft paper) */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl"
            style={{
              background:
                "linear-gradient(160deg, #D8BE96 0%, #C9A876 45%, #B4915E 100%)",
            }}
          />

          {/* Depth shading on the lower half */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-2xl opacity-40"
            style={{
              background: "linear-gradient(to top, rgba(75,50,20,0.25), transparent)",
            }}
          />

          {/* Top flap — animates open on click */}
          <motion.div
            className="absolute inset-x-0 top-0 h-[58%] origin-top rounded-t-2xl bg-charcoal"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformPerspective: 900 }}
            animate={
              opening
                ? { rotateX: -165, opacity: 0.25 }
                : { rotateX: 0, opacity: 1 }
            }
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Wax seal */}
          <motion.div
            className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: opening ? 0 : 1, scale: opening ? 0.55 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg ring-1 ring-black/10"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #EBCE84, #D4AF37 55%, #8B6B2E 100%)",
              }}
            >
              <span className="font-display text-lg text-charcoal/90">A&amp;P</span>
            </div>
          </motion.div>
        </button>

        <div className="mt-8 text-center">
          <h1 className="font-display text-3xl text-charcoal sm:text-4xl">
            {weddingData.couple.groomFirstName}
            <span className="mx-2 text-gold">&amp;</span>
            {weddingData.couple.brideFirstName}
          </h1>
          <p className="mt-2 font-body text-xs tracking-widest2 text-charcoal/50">
            12 &middot; 12 &middot; 2026
          </p>
          <p className="mt-4 font-body text-[11px] tracking-widest2 text-charcoal/40">
            TAP THE SEAL TO OPEN
          </p>
        </div>
      </motion.div>
    </div>
  );
}
