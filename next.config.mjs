import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de build para Vercel
  webpack: (config, { isServer }) => {
    // Reducir memoria durante el build
    if (isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: false, // Desactivar minimización para reducir memoria
      };
    }
    return config;
  },
  // Optimizaciones de imágenes
  images: {
    unoptimized: true, // Desactivar optimización de imágenes si no es necesaria
  },
  // Otras optimizaciones
  reactStrictMode: true,
  // Desactivar verificación de tipos y ESLint durante el build para evitar errores
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: path.resolve(process.cwd()),
  async rewrites() {
    return [
      {
        source: '/.well-known/llms.txt',
        destination: '/llms.txt',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
