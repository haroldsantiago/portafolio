import type { NextConfig } from "next";

// Para GitHub Pages en un repositorio de proyecto (usuario.github.io/repo),
// define NEXT_PUBLIC_BASE_PATH="/nombre-del-repo" al construir.
// Para una página de usuario (usuario.github.io) déjalo vacío.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
