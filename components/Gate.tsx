"use client";

import { motion } from "framer-motion";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#E9DFCF] px-5">
      {/* Soft background bokeh, evoking the blurred warm backdrop */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-[#C9A876]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[#8B6B2E]/15 blur-3xl" />
      <div className="absolute inset-0 grain opacity-30" />

      <motion.button
        onClick={onOpen}
        disabled={opening}
        aria-label="Open invitation"
        className="relative z-10 aspect-[3/4] w-full max-w-[320px] disabled:cursor-default"
        style={{ perspective: 1000 }}
        animate={{ opacity: opening ? 0 : 1, scale: opening ? 0.95 : 1 }}
        transition={{ duration: 0.7, delay: opening ? 0.95 : 0 }}
      >
        {/* Envelope body — kraft paper */}
        <div
          className="absolute inset-0 rounded-md shadow-[0_25px_60px_-15px_rgba(60,40,10,0.45)]"
          style={{
            background:
              "linear-gradient(155deg, #D9BF97 0%, #C9A876 40%, #B4905C 100%)",
          }}
        />

        {/* Subtle diagonal crease lines from bottom corners to the flap point */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 300 400"
          preserveAspectRatio="none"
        >
          <path d="M0 400 L150 232" stroke="#5C4526" strokeWidth="1" />
          <path d="M300 400 L150 232" stroke="#5C4526" strokeWidth="1" />
        </svg>

        {/* Depth shading */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-md opacity-30"
          style={{
            background: "linear-gradient(to top, rgba(70,48,18,0.3), transparent)",
          }}
        />

        {/* Top flap — solid, animates open on click */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[58%] origin-top rounded-t-md bg-[#171412]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transformPerspective: 1000,
          }}
          animate={
            opening
              ? { rotateX: -170, opacity: 0.2 }
              : { rotateX: 0, opacity: 1 }
          }
          transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Scalloped gold wax seal */}
        <motion.div
          className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: opening ? 0 : 1,
            scale: opening ? 0.5 : 1,
          }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            animate={!opening ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="76" height="76" viewBox="0 0 100 100">
              <defs>
                <radialGradient id="waxGrad" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#F0D48A" />
                  <stop offset="55%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8B6B2E" />
                </radialGradient>
              </defs>
              {[...Array(14)].map((_, i) => {
                const angle = (i / 14) * Math.PI * 2;
                const cx = 50 + Math.cos(angle) * 44;
                const cy = 50 + Math.sin(angle) * 44;
                return <circle key={i} cx={cx} cy={cy} r="7" fill="url(#waxGrad)" />;
              })}
              <circle cx="50" cy="50" r="40" fill="url(#waxGrad)" />
              <circle
                cx="50"
                cy="50"
                r="29"
                fill="none"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth="1"
              />
              <text
                x="50"
                y="59"
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontSize="26"
                fill="#3A2A10"
              >
                A&amp;P
              </text>
            </svg>
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
}
