"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import { downloadWeddingICS } from "@/lib/ics";
import Monogram from "./Monogram";

export default function Hero() {
  const scrollToEvents = () => {
    document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" });
  };

  const saveTheDate = () => {
    downloadWeddingICS({
      title: `${weddingData.groom.name} & ${weddingData.bride.name}'s Wedding`,
      description: "Join us as we begin our forever.",
      location: `${weddingData.venue.name}, ${weddingData.venue.address}`,
      startISO: weddingData.weddingDate,
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory px-6 py-32 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,161,91,0.08),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center"
      >
        <Monogram className="mb-8 h-14 w-14" />

        <h1 className="font-display text-4xl leading-none text-burgundy sm:text-6xl md:text-8xl">
          {weddingData.couple.groomFirstName}
          <span className="mx-4 text-gold">&amp;</span>
          {weddingData.couple.brideFirstName}
        </h1>

        <p className="mt-6 font-display text-xl italic text-charcoal/70">
          A Celebration of Love
        </p>

        <div className="my-8 flex items-center gap-4">
          <span className="h-px w-12 bg-gold/60" />
          <span className="font-body text-sm tracking-widest2 text-forest">
            {weddingData.weddingDateLabel}
          </span>
          <span className="h-px w-12 bg-gold/60" />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={scrollToEvents}
            className="border border-burgundy px-8 py-3 font-body text-xs tracking-widest2 text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-ivory active:scale-[0.98]"
            style={{ minHeight: 44 }}
          >
            VIEW CELEBRATIONS
          </button>
          <button
            onClick={saveTheDate}
            className="border border-gold px-8 py-3 font-body text-xs tracking-widest2 text-gold transition-all duration-300 hover:bg-gold/10 active:scale-[0.98]"
            style={{ minHeight: 44 }}
          >
            SAVE THE DATE
          </button>
        </div>
      </motion.div>
    </section>
  );
}
