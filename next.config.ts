import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "rickandmortyapi.com" }
    ],
  },
  /* config options here */
};

export default nextConfig;
