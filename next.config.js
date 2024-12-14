const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  images: {
    // unoptimized: flase,
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asif.smilebrilliant.com',
      },
      {
        protocol: 'https',
        hostname: 'hamza.smilebrilliant.com',
      },
      {
        protocol: 'https',
        hostname: 'www.smilebrilliant.com',
      },
      {
        protocol: 'https',
        hostname: 'stable.smilebrilliant.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  // },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://asif.smilebrilliant.com',
        'https://hamza.smilebrilliant.com',
        'https://stable.smilebrilliant.com',
        'https://smilebrilliant.com',
        'localhost:3000',
        '127.0.0.1:3000',
        'https://www.smilebrilliant.com',
      ],
    },
  },
};

// Configuration object tells the next-pwa plugin
const withPWA = require('next-pwa')({
  dest: 'public', // Destination directory for the PWA files
  // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
  scope: '/', // Set the scope to /product
});
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
// module.exports = withPlugins([withBundleAnalyzer, withPWA], nextConfig);
// module.exports = withPlugins([withPWA, [withBundleAnalyzer]], nextConfig);
