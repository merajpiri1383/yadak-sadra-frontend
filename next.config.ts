import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
