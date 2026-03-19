import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-automation-portfolio",
  assetPrefix: "/ai-automation-portfolio",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/ai-automation-portfolio",
  },
};

export default nextConfig;
