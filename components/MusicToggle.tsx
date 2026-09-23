"use client";

import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function MusicToggle({ startPlaying }: { startPlaying: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (startPlaying && audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [startPlaying]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-charcoal/80 text-gold-soft backdrop-blur transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      >
        {playing ? <Music size={17} /> : <VolumeX size={17} />}
      </button>
    </>
  );
}
