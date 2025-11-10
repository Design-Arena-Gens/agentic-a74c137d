/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'polymarket-upload.s3.us-east-2.amazonaws.com' },
      { protocol: 'https', hostname: 'images.polymarket.com' },
      { protocol: 'https', hostname: 'polymarket.com' }
    ]
  }
};

export default nextConfig;
