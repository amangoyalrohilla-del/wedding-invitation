"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

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
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-gold/25 bg-cream"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(75,14,30,0.06), rgba(75,14,30,0.06)), url(${image})`,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-sm text-center md:text-left"
      >
        <h3 className="font-display text-4xl text-burgundy">{name}</h3>
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
    <section id="couple" className="bg-ivory px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-20">
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
