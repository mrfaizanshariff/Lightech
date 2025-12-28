/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
};

module.exports = nextConfig;