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
  async redirects() {
    const enBlogSlugRedirects = [
      {
        oldSlug: 'de-excel-a-plataforma-propia-modernizar-operacion-metricas-reportes',
        newSlug: 'replace-excel-spreadsheets-with-custom-software-dashboard-reporting',
      },
      {
        oldSlug: 'como-implementar-agente-ia-whatsapp-ventas-24-7',
        newSlug: 'how-to-deploy-24-7-whatsapp-ai-sales-agent-rag',
      },
      {
        oldSlug: 'por-que-wordpress-lento-migrar-nextjs-0-6s',
        newSlug: 'why-wordpress-is-slow-migrate-to-nextjs',
      },
      {
        oldSlug: 'software-a-medida-vs-saas-por-usuario-ahorro',
        newSlug: 'custom-software-vs-per-seat-saas-pricing-roi',
      },
      {
        oldSlug: 'como-eliminar-copiar-pegar-automatizacion-whatsapp-crm-facturacion',
        newSlug: 'automate-whatsapp-crm-billing-workflows-n8n',
      },
    ];

    return [
      ...enBlogSlugRedirects.flatMap(({ oldSlug, newSlug }) => [
        {
          source: `/us/blog/${oldSlug}`,
          destination: `/en/blog/${newSlug}`,
          permanent: true,
        },
        {
          source: `/en/blog/${oldSlug}`,
          destination: `/en/blog/${newSlug}`,
          permanent: true,
        },
      ]),
      {
        source: '/es',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/mx',
        destination: '/',
        permanent: true,
      },
      {
        source: '/us',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/us/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
    ];
  },
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
        source: '/en/:path*',
        headers: [
          {
            key: 'Content-Language',
            value: 'en',
          },
        ],
      },
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
