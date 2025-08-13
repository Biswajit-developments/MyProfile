/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['biswajitnarzary.com'],
  },
  // This is important for static exports if you're using them
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Add environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://biswajitnarzary.com'
  },
};

module.exports = nextConfig;
