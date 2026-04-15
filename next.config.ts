import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/civilization",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
