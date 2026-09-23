"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

function getRemaining() {
  const target = new Date(weddingData.weddingDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <section className="bg-forest px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl italic text-ivory sm:text-4xl"
      >
        Until Forever Begins
      </motion.p>

      <div className="mx-auto mt-10 grid max-w-xl grid-cols-4 gap-3 sm:gap-6">
        {units.map((u) => (
          <div
            key={u.label}
            className="border border-gold/25 px-2 py-6 sm:px-4 sm:py-8"
          >
            <div className="font-display text-3xl text-gold-soft tabular-nums sm:text-5xl">
              {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
            </div>
            <div className="mt-2 font-body text-[10px] tracking-widest2 text-ivory/60 sm:text-xs">
              {u.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
