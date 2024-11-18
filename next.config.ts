import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Configure Webpack to handle additional files (optional)
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },

  // Enable Image Optimization support
  images: {
    domains: ['example.com'], // Add the domain of your image sources
  },

  // Custom Environment Variables
  env: {
    MY_CUSTOM_ENV_VAR: process.env.MY_CUSTOM_ENV_VAR || 'default_value',
  },

  // Other Next.js options (e.g., i18n, rewrites, redirects, etc.)
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
