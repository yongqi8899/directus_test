import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
