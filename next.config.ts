import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-automation-portfolio",
  assetPrefix: "/ai-automation-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
