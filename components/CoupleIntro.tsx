"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotation = { tl: 0, tr: 90, bl: -90, br: 180 }[position];
  const pos = {
    tl: "left-0 top-0",
    tr: "right-0 top-0",
    bl: "left-0 bottom-0",
    br: "right-0 bottom-0",
  }[position];

  return (
    <svg
      viewBox="0 0 40 40"
      className={`absolute h-8 w-8 text-gold ${pos}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M2 2 L2 16 M2 2 L16 2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="2" cy="2" r="2.5" fill="currentColor" />
    </svg>
  );
}

function Person({
  reverse,
  name,
  fatherLabel,
  father,
  mother,
  image,
  cta,
}: {
  reverse?: boolean;
  name: string;
  fatherLabel: string;
  father: string;
  mother: string;
  image: string;
  cta: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-10 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative w-full max-w-xs sm:max-w-sm"
      >
        <div className="absolute -inset-3 border border-gold/40" />

        <div className="relative aspect-[4/5] overflow-hidden border-2 border-gold bg-cream p-2">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(75,14,30,0.06), rgba(75,14,30,0.06)), url(${image})`,
              }}
            />
            <CornerOrnament position="tl" />
            <CornerOrnament position="tr" />
            <CornerOrnament position="bl" />
            <CornerOrnament position="br" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-sm text-center md:text-left"
      >
        <h3 className="font-display text-3xl text-burgundy sm:text-4xl">
          {name}
        </h3>
        <div className="mx-auto mt-3 h-px w-12 bg-gold/60 md:mx-0" />
        <p className="mt-4 font-body text-sm leading-relaxed text-charcoal/70">
          {fatherLabel}
          <br />
          Mr. {father}
          <br />
          &amp; Mrs. {mother}
        </p>
        <button
          className="mt-6 border border-forest px-6 py-2.5 font-body text-xs tracking-widest2 text-forest transition-all duration-300 hover:bg-forest hover:text-ivory"
          style={{ minHeight: 44 }}
        >
          {cta}
        </button>
      </motion.div>
    </div>
  );
}

export default function CoupleIntro() {
  return (
    <section id="couple" className="bg-ivory px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 sm:gap-20">
        <Person
          name={weddingData.groom.name}
          fatherLabel="Son of"
          father={weddingData.groom.father}
          mother={weddingData.groom.mother}
          image={weddingData.groom.image}
          cta="MEET THE GROOM"
        />
        <Person
          reverse
          name={weddingData.bride.name}
          fatherLabel="Daughter of"
          father={weddingData.bride.father}
          mother={weddingData.bride.mother}
          image={weddingData.bride.image}
          cta="MEET THE BRIDE"
        />
      </div>
    </section>
  );
}
