/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourdomain.com'], // Add your domain here
  },
  // This is important for static exports if you're using them
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Add environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://yourdomain.com', // Replace with your domain
  },
};

module.exports = nextConfig;
