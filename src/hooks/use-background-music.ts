"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function getMusicSrc(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/background-music.mp3`;
}

let audioEl: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement {
  if (!audioEl) {
    audioEl = new Audio(getMusicSrc());
    audioEl.loop = true;
    audioEl.volume = 0.35;
  }
  return audioEl;
}

export function useBackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const autoStarted = useRef(false);

  const startPlayback = useCallback(() => {
    const audio = getAudio();
    audio.play()
      .then(() => setPlaying(true))
      .catch((err) => console.warn("[BackgroundMusic]", err));
  }, []);

  const stopPlayback = useCallback(() => {
    const audio = getAudio();
    audio.pause();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) stopPlayback();
    else startPlayback();
  }, [playing, startPlayback, stopPlayback]);

  // Auto-start on first user gesture
  useEffect(() => {
    localStorage.removeItem("site-muted");

    const handleFirstInteraction = () => {
      if (autoStarted.current) return;
      autoStarted.current = true;
      startPlayback();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [startPlayback]);

  // Pause when tab hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && playing) stopPlayback();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [playing, stopPlayback]);

  return { playing, toggle };
}
