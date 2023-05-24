/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resources/company",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
