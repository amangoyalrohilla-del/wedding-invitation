"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

function FamilyCard({
  title,
  parents,
  members,
}: {
  title: string;
  parents: string[];
  members: { name: string; relation?: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex-1 border border-gold/20 bg-ivory px-8 py-12 text-center"
    >
      <h3 className="font-display text-2xl tracking-wide text-burgundy">
        {title}
      </h3>
      <div className="mx-auto mt-4 gold-divider" />
      <div className="mt-6 space-y-1 font-body text-sm text-charcoal/75">
        {parents.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="italic text-charcoal/55">and Family</p>
      </div>

      {members.length > 0 && (
        <div className="mt-6 space-y-1 font-body text-sm text-charcoal/60">
          {members.map((m) => (
            <p key={m.name}>
              {m.name}
              {m.relation ? ` — ${m.relation}` : ""}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Family() {
  return (
    <section className="bg-forest px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl text-ivory sm:text-5xl">
          With The Blessings Of Our Families
        </h2>
        <p className="mx-auto mt-5 max-w-prose font-body text-sm text-ivory/70">
          Together with our families, we joyfully invite you to be a part of
          this beautiful beginning.
        </p>

        <div className="mt-14 flex flex-col gap-8 md:flex-row">
          <FamilyCard
            title="THE GOYAL FAMILY"
            parents={[weddingData.groom.father, weddingData.groom.mother]}
            members={weddingData.groomFamilyMembers}
          />
          <FamilyCard
            title="THE BANSAL FAMILY"
            parents={[weddingData.bride.father, weddingData.bride.mother]}
            members={weddingData.brideFamilyMembers}
          />
        </div>
      </div>
    </section>
  );
}
