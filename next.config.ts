import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
  basePath: '/contador-navidad', 
  assetPrefix: '/contador-navidad', 
};

export default nextConfig;
