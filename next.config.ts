import type { NextConfig } from "next";
import { basePath } from "./lib/basePath";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
