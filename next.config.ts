import type { NextConfig } from 'next';

const withPWA = require('next-pwa');

const config = {
  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa',
  },
};

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(config) as NextConfig;

export default nextConfig;