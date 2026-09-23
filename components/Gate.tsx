"use client";

import { motion } from "framer-motion";

// `opening` starts the exit animation; the parent unmounts this component
// shortly after. Uses a real photo/graphic as the background instead of a
// hand-drawn seal, so whatever image you provide carries the premium look.
export default function Gate({
  opening,
  onOpen,
}: {
  opening: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: 0.9, delay: opening ? 0.3 : 0 }}
    >
      {/* Background image — replace public/images/gate-bg.jpg with your envelope/seal photo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/gate-bg.jpg)" }}
        initial={{ scale: 1.06 }}
        animate={{ scale: opening ? 1.12 : 1 }}
        transition={{ duration: opening ? 1.1 : 6, ease: opening ? "easeIn" : "easeOut" }}
      />

      {/* Subtle bottom gradient so the tap button stays readable on any photo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Full-image tap target */}
      <button
        onClick={onOpen}
        disabled={opening}
        aria-label="Open invitation"
        className="absolute inset-0 h-full w-full disabled:cursor-default"
      />

      {/* Tap hint — pulses gently, sits low so it doesn't cover the seal */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full border border-white/50 bg-black/20 px-6 py-2 font-body text-[11px] tracking-widest2 text-white backdrop-blur-sm"
        >
          TAP TO OPEN
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
