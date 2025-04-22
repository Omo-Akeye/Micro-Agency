import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    tracingIgnores: ['**/*']
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;


