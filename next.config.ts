import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove export config for Netlify Next.js runtime
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
