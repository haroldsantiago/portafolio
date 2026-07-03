"use client";

import { useCallback, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useBackgroundMusic } from "@/hooks/use-background-music";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SoundToggle({ className }: { className?: string }) {
  const { playing, toggle } = useBackgroundMusic();

  // Keyboard shortcut: S
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "s" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        toggle();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [toggle]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={toggle}
          className={`relative flex items-center justify-center w-8 h-8 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-all ${className ?? ""}`}
          aria-label={playing ? "Pausar música" : "Reproducir música"}
        >
          <Volume2
            className={`h-3.5 w-3.5 absolute transition-all ${
              playing ? "scale-100 rotate-0" : "scale-0 rotate-90"
            }`}
          />
          <VolumeX
            className={`h-3.5 w-3.5 absolute transition-all ${
              playing ? "scale-0 -rotate-90" : "scale-100 rotate-0"
            }`}
          />
        </button>
      </TooltipTrigger>

      <TooltipContent
        side="bottom"
        sideOffset={6}
        className="flex items-center gap-2 px-2.5 py-1.5"
      >
        <span className="text-xs whitespace-nowrap">
          {playing ? "Pausar música" : "Reproducir música"}
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded border border-border bg-muted text-muted-foreground">
          S
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
