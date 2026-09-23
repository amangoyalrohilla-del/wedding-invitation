"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

type RSVPEntry = {
  name: string;
  guests: number;
  attending: "yes" | "no";
  message: string;
};

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<RSVPEntry>({
    name: "",
    guests: 1,
    attending: "yes",
    message: "",
  });

  const hasWhatsApp = Boolean(weddingData.whatsappNumber);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(
        localStorage.getItem("wedding-rsvps") || "[]"
      );
      localStorage.setItem(
        "wedding-rsvps",
        JSON.stringify([...existing, { ...form, submittedAt: Date.now() }])
      );
    } catch {
      // local storage unavailable — still show confirmation
    }
    setSubmitted(true);
  };

  const whatsappHref = hasWhatsApp
    ? `https://wa.me/${weddingData.whatsappNumber}?text=${encodeURIComponent(
        `Hi! I'm confirming my presence for Aman & Pranjal's wedding on ${weddingData.weddingDateLabel}.`
      )}`
    : undefined;

  return (
    <section id="rsvp" className="bg-burgundy px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-4xl text-ivory sm:text-5xl">
          Will You Celebrate With Us?
        </h2>
        <p className="mt-4 font-body text-sm text-ivory/70">
          Your presence would make our celebration even more beautiful.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 border border-gold/40 px-8 py-12"
          >
            <p className="font-display text-2xl text-gold-soft">
              Thank you, {form.name.split(" ")[0] || "friend"}.
            </p>
            <p className="mt-3 font-body text-sm text-ivory/70">
              Your RSVP has been received. We can&apos;t wait to celebrate
              with you.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5 text-left">
            <div>
              <label
                htmlFor="rsvp-name"
                className="mb-1.5 block font-body text-xs tracking-widest2 text-ivory/70"
              >
                NAME
              </label>
              <input
                id="rsvp-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gold/30 bg-transparent px-4 py-3 font-body text-ivory placeholder:text-ivory/30 focus:border-gold"
                style={{ minHeight: 44 }}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="rsvp-guests"
                className="mb-1.5 block font-body text-xs tracking-widest2 text-ivory/70"
              >
                NUMBER OF GUESTS
              </label>
              <input
                id="rsvp-guests"
                type="number"
                min={1}
                max={10}
                required
                value={form.guests}
                onChange={(e) =>
                  setForm({ ...form, guests: Number(e.target.value) })
                }
                className="w-full border border-gold/30 bg-transparent px-4 py-3 font-body text-ivory focus:border-gold"
                style={{ minHeight: 44 }}
              />
            </div>

            <fieldset>
              <legend className="mb-1.5 font-body text-xs tracking-widest2 text-ivory/70">
                ATTENDING
              </legend>
              <div className="flex gap-4">
                {(["yes", "no"] as const).map((v) => (
                  <label
                    key={v}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 border border-gold/30 py-3 font-body text-sm text-ivory"
                    style={{ minHeight: 44 }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={v}
                      checked={form.attending === v}
                      onChange={() => setForm({ ...form, attending: v })}
                      className="accent-gold"
                    />
                    {v === "yes" ? "Yes, joyfully" : "Can't make it"}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="rsvp-message"
                className="mb-1.5 block font-body text-xs tracking-widest2 text-ivory/70"
              >
                MESSAGE FOR THE COUPLE
              </label>
              <textarea
                id="rsvp-message"
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-gold/30 bg-transparent px-4 py-3 font-body text-ivory placeholder:text-ivory/30 focus:border-gold"
                placeholder="Leave a wish for Aman & Pranjal"
              />
            </div>

            <button
              type="submit"
              className="w-full border border-gold bg-gold/10 py-3.5 font-body text-xs tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold/20 active:scale-[0.99]"
              style={{ minHeight: 44 }}
            >
              SEND RSVP
            </button>

            {hasWhatsApp && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-forest py-3.5 text-center font-body text-xs tracking-widest2 text-ivory transition-all duration-300 hover:bg-forest/40"
                style={{ minHeight: 44 }}
              >
                RSVP ON WHATSAPP
              </a>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
