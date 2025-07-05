import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint during `next build`
  },
  typescript: {
    ignoreBuildErrors: true, // disables TypeScript type-checking during `next build`
  },
  // You can add other config options here
};

export default nextConfig;
