import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // or whatever port you're using
      },
    ],
    // OR, if you're using Next <13.1, use this format:
    // domains: ['localhost'],
  },
};

export default nextConfig;
