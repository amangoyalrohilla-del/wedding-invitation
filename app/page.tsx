"use client";

import { useState } from "react";
import Gate from "@/components/Gate";
import CoupleReveal from "@/components/CoupleReveal";
import Navbar from "@/components/Navbar";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import CoupleIntro from "@/components/CoupleIntro";
import OurStory from "@/components/OurStory";
import Family from "@/components/Family";
import Events from "@/components/Events";
import Baraat from "@/components/Baraat";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import Quote from "@/components/Quote";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

type Stage = "gate" | "reveal" | "site";

export default function Home() {
  const [stage, setStage] = useState<Stage>("gate");
  const [gateOpening, setGateOpening] = useState(false);

  const handleOpenGate = () => {
    setGateOpening(true);
    // Matches the door-slide animation duration in Gate.tsx (1.7s)
    window.setTimeout(() => setStage("reveal"), 1750);
  };

  const handleContinue = () => {
    setStage("site");
    window.setTimeout(() => {
      document.querySelector("#hero-anchor")?.scrollIntoView();
    }, 50);
  };

  return (
    <main className="relative">
      {stage === "gate" && <Gate opening={gateOpening} onOpen={handleOpenGate} />}
      <CoupleReveal visible={stage === "reveal"} onContinue={handleContinue} />

      {stage === "site" && (
        <>
          <MusicToggle startPlaying={true} />
          <Navbar />
          <div id="hero-anchor" />
          <Hero />
          <Countdown />
          <CoupleIntro />
          <OurStory />
          <Family />
          <Events />
          <Baraat />
          <Venue />
          <Gallery />
          <Quote />
          <RSVP />
          <Footer />
        </>
      )}
    </main>
  );
}
