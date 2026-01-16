import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },

  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;


