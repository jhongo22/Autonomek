import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autonomek.com';
  
  const homeLanguages = {
    'es-CO': baseUrl,
    'es-MX': `${baseUrl}/mx`,
    'es-ES': `${baseUrl}/es`,
    'en-US': `${baseUrl}/us`,
    'x-default': baseUrl,
  };

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: homeLanguages,
      },
    },
    {
      url: `${baseUrl}/mx`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: homeLanguages,
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: homeLanguages,
      },
    },
    {
      url: `${baseUrl}/us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: homeLanguages,
      },
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios`,
          'en-US': `${baseUrl}/us/services`,
          'x-default': `${baseUrl}/servicios`,
        },
      },
    },
    {
      url: `${baseUrl}/us/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios`,
          'en-US': `${baseUrl}/us/services`,
          'x-default': `${baseUrl}/servicios`,
        },
      },
    },
    {
      url: `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
          'en-US': `${baseUrl}/us/services/high-performance-websites`,
          'x-default': `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
        },
      },
    },
    {
      url: `${baseUrl}/us/services/high-performance-websites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
          'en-US': `${baseUrl}/us/services/high-performance-websites`,
          'x-default': `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
        },
      },
    },
    {
      url: `${baseUrl}/servicios/agentes-inteligencia-artificial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/agentes-inteligencia-artificial`,
          'en-US': `${baseUrl}/us/services/ai-agents`,
          'x-default': `${baseUrl}/servicios/agentes-inteligencia-artificial`,
        },
      },
    },
    {
      url: `${baseUrl}/us/services/ai-agents`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/agentes-inteligencia-artificial`,
          'en-US': `${baseUrl}/us/services/ai-agents`,
          'x-default': `${baseUrl}/servicios/agentes-inteligencia-artificial`,
        },
      },
    },
    {
      url: `${baseUrl}/servicios/automatizacion-de-procesos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/automatizacion-de-procesos`,
          'en-US': `${baseUrl}/us/services/process-automation`,
          'x-default': `${baseUrl}/servicios/automatizacion-de-procesos`,
        },
      },
    },
    {
      url: `${baseUrl}/us/services/process-automation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/automatizacion-de-procesos`,
          'en-US': `${baseUrl}/us/services/process-automation`,
          'x-default': `${baseUrl}/servicios/automatizacion-de-procesos`,
        },
      },
    },
    {
      url: `${baseUrl}/servicios/software-a-medida`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/software-a-medida`,
          'en-US': `${baseUrl}/us/services/custom-software`,
          'x-default': `${baseUrl}/servicios/software-a-medida`,
        },
      },
    },
    {
      url: `${baseUrl}/us/services/custom-software`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/servicios/software-a-medida`,
          'en-US': `${baseUrl}/us/services/custom-software`,
          'x-default': `${baseUrl}/servicios/software-a-medida`,
        },
      },
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/proyectos`,
          'en-US': `${baseUrl}/us/projects`,
          'x-default': `${baseUrl}/proyectos`,
        },
      },
    },
    {
      url: `${baseUrl}/us/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/proyectos`,
          'en-US': `${baseUrl}/us/projects`,
          'x-default': `${baseUrl}/proyectos`,
        },
      },
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/legal`,
          'en-US': `${baseUrl}/us/legal`,
          'x-default': `${baseUrl}/legal`,
        },
      },
    },
    {
      url: `${baseUrl}/us/legal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/legal`,
          'en-US': `${baseUrl}/us/legal`,
          'x-default': `${baseUrl}/legal`,
        },
      },
    },
    {
      url: `${baseUrl}/start`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/start`,
          'en-US': `${baseUrl}/us/start`,
          'x-default': `${baseUrl}/start`,
        },
      },
    },
    {
      url: `${baseUrl}/us/start`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/start`,
          'en-US': `${baseUrl}/us/start`,
          'x-default': `${baseUrl}/start`,
        },
      },
    },
  ];
}
