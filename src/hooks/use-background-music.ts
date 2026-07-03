"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/utils";

const MUSIC_SRC = assetPath("/A Tiny Love - Yuki Kajiura.mp3");
const FADE_DURATION = 1.5; // seconds

let audioCtx: AudioContext | null = null;
let gainNode: GainNode | null = null;
let sourceNode: AudioBufferSourceNode | null = null;
let audioBuffer: AudioBuffer | null = null;
let loadPromise: Promise<AudioBuffer> | null = null;
let resumeOffset = 0; // track position when paused
let startedAt = 0;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

async function loadBuffer(): Promise<AudioBuffer> {
  if (audioBuffer) return audioBuffer;
  if (loadPromise) return loadPromise;

  loadPromise = fetch(MUSIC_SRC)
    .then((r) => r.arrayBuffer())
    .then((ab) => getCtx().decodeAudioData(ab))
    .then((buf) => {
      audioBuffer = buf;
      return buf;
    });

  return loadPromise;
}

export function useBackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const fadingOut = useRef(false);

  const startPlayback = useCallback(async () => {
    const ctx = getCtx();
    if (ctx.state === "suspended") await ctx.resume();

    const buf = await loadBuffer();

    // Clean up previous source
    if (sourceNode) {
      try { sourceNode.stop(); } catch {}
      sourceNode = null;
    }

    gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.35, ctx.currentTime + FADE_DURATION);
    gainNode.connect(ctx.destination);

    sourceNode = ctx.createBufferSource();
    sourceNode.buffer = buf;
    sourceNode.loop = true;
    sourceNode.connect(gainNode);
    sourceNode.start(0, resumeOffset % buf.duration);
    startedAt = ctx.currentTime - resumeOffset;
    fadingOut.current = false;
    setPlaying(true);
  }, []);

  const stopPlayback = useCallback(() => {
    if (!gainNode || !sourceNode || fadingOut.current) return;
    fadingOut.current = true;

    const ctx = getCtx();
    // Save position for resume
    resumeOffset = (ctx.currentTime - startedAt) % (audioBuffer?.duration ?? 1);

    gainNode.gain.cancelScheduledValues(ctx.currentTime);
    gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + FADE_DURATION);

    const src = sourceNode;
    setTimeout(() => {
      try { src.stop(); } catch {}
      sourceNode = null;
      setPlaying(false);
      fadingOut.current = false;
    }, FADE_DURATION * 1000);
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      stopPlayback();
    } else {
      startPlayback();
    }
  }, [playing, startPlayback, stopPlayback]);

  // Sync with mute state from localStorage on mount
  useEffect(() => {
    const muted = localStorage.getItem("site-muted") === "true";
    if (!muted) {
      // Don't autoplay — browser policy requires user gesture
    }
  }, []);

  // Stop music when page is hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && playing) stopPlayback();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [playing, stopPlayback]);

  return { playing, toggle };
}
