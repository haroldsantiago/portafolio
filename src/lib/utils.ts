import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefixes a path with the configured basePath for GitHub Pages compatibility */
export function assetPath(path: string): string {
  if (!path || !path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
