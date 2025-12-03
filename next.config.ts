import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
  basePath: '/my-repo',
};

export default nextConfig;
