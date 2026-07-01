/* eslint-disable @next/next/no-img-element */
"use client";

import { DATA } from "@/data/resume";
import { FadeIn } from "@/components/fade-in";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { assetPath } from "@/lib/utils";

export default function CertificationsSection() {
  const items = DATA.certifications;
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "Escape") setLightbox(null);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

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
                    onClick={() => setLightbox(i)}
                    className="group block w-full cursor-zoom-in"
                    aria-label={`Ampliar ${cert.title}`}
                  >
                    <div className="relative flex h-[320px] items-center justify-center bg-muted/40 p-4 sm:h-[440px] lg:h-[520px]">
                      <img
                        src={assetPath(cert.image)}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
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

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 transition-colors z-10"
          >
            <X className="size-5" />
          </button>
          <img
            src={assetPath(items[lightbox].image)}
            alt={items[lightbox].title}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
