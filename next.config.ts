import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
  basePath: "MyBlogWeb",
};

export default nextConfig;
