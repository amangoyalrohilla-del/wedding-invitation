"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = weddingData.gallery;

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  const tilts = ["-2deg", "1.5deg", "-1deg", "2deg"];

  return (
    <section id="gallery" className="bg-ivory px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl text-burgundy sm:text-5xl">
          Moments Before Forever
        </h2>
        <p className="mx-auto mt-4 max-w-prose font-body text-sm text-charcoal/60">
          A few memories from the beautiful journey that brought us here.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-14 md:grid-cols-4">
          {images.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              style={{ rotate: tilts[i % tilts.length] }}
              onClick={() => setActiveIndex(i)}
              className="group relative mx-auto block w-full max-w-[220px] bg-ivory p-2.5 pb-6 shadow-soft transition-shadow duration-300 hover:shadow-lg"
              aria-label={`Open photo ${i + 1}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/20 bg-cream">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </div>
              <span className="mt-2 block font-script text-lg text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 px-4"
            onClick={close}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close gallery"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 flex h-11 w-11 items-center justify-center text-ivory sm:left-6"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-[80vh] max-w-3xl bg-ivory p-3 pb-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="aspect-[4/5] w-[78vw] max-w-2xl border border-gold/25 bg-cover bg-center sm:aspect-[3/4]"
                style={{ backgroundImage: `url(${images[activeIndex]})` }}
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-2 flex h-11 w-11 items-center justify-center text-ivory sm:right-6"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
