/* eslint-disable @next/next/no-img-element */
"use client";

import { DATA } from "@/data/resume";
import { FadeIn } from "@/components/fade-in";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { assetPath } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { getAudioContext, playSound } from "@/lib/sound-engine";
import { dropLeatherSound } from "@/lib/drop-leather";
import { switchOffSound } from "@/lib/switch-off";

export default function CertificationsSection() {
  const items = DATA.certifications;
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  const openLightbox = useCallback(async (i: number) => {
    setLightbox(i);
    const ctx = getAudioContext();
    if (ctx.state === "suspended") await ctx.resume();
    setTimeout(() => {
      playSound(dropLeatherSound.dataUri, { volume: 0.2 }).catch(() => {});
    }, 80);
  }, []);

  const closeLightbox = useCallback(async () => {
    setLightbox(null);
    const ctx = getAudioContext();
    if (ctx.state === "suspended") await ctx.resume();
    setTimeout(() => {
      playSound(switchOffSound.dataUri, { volume: 0.2 }).catch(() => {});
    }, 60);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") setLightbox((i) => i !== null ? (i - 1 + total) % total : null);
        if (e.key === "ArrowRight") setLightbox((i) => i !== null ? (i + 1) % total : null);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next, closeLightbox, total]);

  if (total === 0) return null;

  return (
    <div className="p-8 sm:p-12">
      <FadeIn>
        <div className="flex items-end justify-between mb-8">
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
            06 — Certificaciones
          </p>
          <span className="text-[10px] font-mono text-muted-foreground/40">
            {total} logros
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((cert, i) => (
                <div key={cert.title} className="w-full flex-none">
                  <button
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="group block w-full cursor-zoom-in"
                    aria-label={`Ampliar ${cert.title}`}
                  >
                    <motion.div
                      layoutId={`cert-img-${i}`}
                      className="relative flex h-[320px] items-center justify-center bg-muted/40 p-4 sm:h-[440px] lg:h-[520px]"
                      style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
                    >
                      <img
                        src={assetPath(cert.image)}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </motion.div>
                    <div className="flex items-center justify-between border-t border-border px-4 py-3">
                      <span className="text-sm font-medium text-foreground">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                        {String(i + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur-sm text-foreground shadow-sm hover:bg-accent transition-colors"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur-sm text-foreground shadow-sm hover:bg-accent transition-colors"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </FadeIn>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {items.map((cert, i) => (
          <button
            key={cert.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir a ${cert.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-emerald-500"
                : "w-1.5 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Lightbox with motion animations */}
      {mounted && createPortal(
        <AnimatePresence>
          {lightbox !== null && (
            <>
              {/* Overlay */}
              <motion.div
                key="cert-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={closeLightbox}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                style={{ zIndex: 9998 }}
              />

              {/* Image container */}
              <div
                className="fixed inset-0 flex items-center justify-center p-4"
                style={{ zIndex: 9999 }}
              >
                <motion.div
                  key={`cert-modal-${lightbox}`}
                  layoutId={`cert-img-${lightbox}`}
                  className="relative"
                  style={{ borderRadius: "0.75rem" }}
                >
                  <img
                    src={assetPath(items[lightbox].image)}
                    alt={items[lightbox].title}
                    className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Close button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ delay: 0.18, duration: 0.15 }}
                    type="button"
                    aria-label="Cerrar"
                    onClick={closeLightbox}
                    className="absolute top-3 right-3 size-8 rounded-full bg-background border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </motion.button>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-background/90 backdrop-blur-sm border border-border"
                  >
                    <span className="text-xs font-medium text-foreground">
                      {items[lightbox].title}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
