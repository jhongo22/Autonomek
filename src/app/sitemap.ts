import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.autonomek.com';
  const now = new Date();

  const homeLanguages = {
    'es': `${baseUrl}/es`,
    'es-ES': `${baseUrl}/es`,
    'es-CO': baseUrl,
    'es-MX': `${baseUrl}/mx`,
    'en': `${baseUrl}/en`,
    'en-US': `${baseUrl}/us`,
    'x-default': baseUrl,
  };

  const servicesLanguages = {
    'es': `${baseUrl}/es/servicios`,
    'es-ES': `${baseUrl}/es/servicios`,
    'es-CO': `${baseUrl}/servicios`,
    'en': `${baseUrl}/en/services`,
    'en-US': `${baseUrl}/us/services`,
    'x-default': `${baseUrl}/servicios`,
  };

  const webServiceLanguages = {
    'es': `${baseUrl}/es/servicios/paginas-web-alto-rendimiento`,
    'es-ES': `${baseUrl}/es/servicios/paginas-web-alto-rendimiento`,
    'es-CO': `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
    'en': `${baseUrl}/en/services/high-performance-websites`,
    'en-US': `${baseUrl}/us/services/high-performance-websites`,
    'x-default': `${baseUrl}/servicios/paginas-web-alto-rendimiento`,
  };

  const aiAgentsLanguages = {
    'es': `${baseUrl}/es/servicios/agentes-inteligencia-artificial`,
    'es-ES': `${baseUrl}/es/servicios/agentes-inteligencia-artificial`,
    'es-CO': `${baseUrl}/servicios/agentes-inteligencia-artificial`,
    'en': `${baseUrl}/en/services/ai-agents`,
    'en-US': `${baseUrl}/us/services/ai-agents`,
    'x-default': `${baseUrl}/servicios/agentes-inteligencia-artificial`,
  };

  const automationLanguages = {
    'es': `${baseUrl}/es/servicios/automatizacion-de-procesos`,
    'es-ES': `${baseUrl}/es/servicios/automatizacion-de-procesos`,
    'es-CO': `${baseUrl}/servicios/automatizacion-de-procesos`,
    'en': `${baseUrl}/en/services/process-automation`,
    'en-US': `${baseUrl}/us/services/process-automation`,
    'x-default': `${baseUrl}/servicios/automatizacion-de-procesos`,
  };

  const customSoftwareLanguages = {
    'es': `${baseUrl}/es/servicios/software-a-medida`,
    'es-ES': `${baseUrl}/es/servicios/software-a-medida`,
    'es-CO': `${baseUrl}/servicios/software-a-medida`,
    'en': `${baseUrl}/en/services/custom-software`,
    'en-US': `${baseUrl}/us/services/custom-software`,
    'x-default': `${baseUrl}/servicios/software-a-medida`,
  };

  const projectsLanguages = {
    'es': `${baseUrl}/es/proyectos`,
    'es-ES': `${baseUrl}/es/proyectos`,
    'es-CO': `${baseUrl}/proyectos`,
    'en': `${baseUrl}/en/projects`,
    'en-US': `${baseUrl}/us/projects`,
    'x-default': `${baseUrl}/proyectos`,
  };

  const aboutLanguages = {
    'es': `${baseUrl}/es/nosotros`,
    'es-ES': `${baseUrl}/es/nosotros`,
    'es-CO': `${baseUrl}/nosotros`,
    'en': `${baseUrl}/en/about`,
    'en-US': `${baseUrl}/us/about`,
    'x-default': `${baseUrl}/nosotros`,
  };

  const startLanguages = {
    'es': `${baseUrl}/es/start`,
    'es-ES': `${baseUrl}/es/start`,
    'es-CO': `${baseUrl}/start`,
    'en': `${baseUrl}/en/start`,
    'en-US': `${baseUrl}/us/start`,
    'x-default': `${baseUrl}/start`,
  };

  const legalLanguages = {
    'es': `${baseUrl}/es/legal`,
    'es-ES': `${baseUrl}/es/legal`,
    'es-CO': `${baseUrl}/legal`,
    'en': `${baseUrl}/en/legal`,
    'en-US': `${baseUrl}/us/legal`,
    'x-default': `${baseUrl}/legal`,
  };

  const privacyLanguages = {
    'es': `${baseUrl}/es/privacidad`,
    'es-ES': `${baseUrl}/es/privacidad`,
    'es-CO': `${baseUrl}/privacidad`,
    'en': `${baseUrl}/en/privacy`,
    'en-US': `${baseUrl}/us/privacy`,
    'x-default': `${baseUrl}/privacidad`,
  };

  const termsLanguages = {
    'es': `${baseUrl}/es/terminos`,
    'es-ES': `${baseUrl}/es/terminos`,
    'es-CO': `${baseUrl}/terminos`,
    'en': `${baseUrl}/en/terms`,
    'en-US': `${baseUrl}/us/terms`,
    'x-default': `${baseUrl}/terminos`,
  };

  const blogHubLanguages = {
    'es': `${baseUrl}/es/blog`,
    'es-ES': `${baseUrl}/es/blog`,
    'es-CO': `${baseUrl}/blog`,
    'en': `${baseUrl}/en/blog`,
    'en-US': `${baseUrl}/us/blog`,
    'x-default': `${baseUrl}/blog`,
  };

  return [
    // 1. Home Cluster
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/es`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/mx`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/us`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: homeLanguages } },

    // 2. Services Hub Cluster
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/es/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/en/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/us/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: servicesLanguages } },

    // 3. AI Agents Cluster
    { url: `${baseUrl}/servicios/agentes-inteligencia-artificial`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/es/servicios/agentes-inteligencia-artificial`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/en/services/ai-agents`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/us/services/ai-agents`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aiAgentsLanguages } },

    // 4. High-Performance Websites Cluster
    { url: `${baseUrl}/servicios/paginas-web-alto-rendimiento`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/es/servicios/paginas-web-alto-rendimiento`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/en/services/high-performance-websites`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/us/services/high-performance-websites`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: webServiceLanguages } },

    // 5. Process Automation Cluster
    { url: `${baseUrl}/servicios/automatizacion-de-procesos`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/es/servicios/automatizacion-de-procesos`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/en/services/process-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/us/services/process-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: automationLanguages } },

    // 6. Custom Software Cluster
    { url: `${baseUrl}/servicios/software-a-medida`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/es/servicios/software-a-medida`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/en/services/custom-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/us/services/custom-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: customSoftwareLanguages } },

    // 7. Projects / Case Studies Cluster
    { url: `${baseUrl}/proyectos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/es/proyectos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/en/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/us/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: projectsLanguages } },

    // 8. About Us Cluster
    { url: `${baseUrl}/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aboutLanguages } },
    { url: `${baseUrl}/es/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aboutLanguages } },
    { url: `${baseUrl}/en/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aboutLanguages } },
    { url: `${baseUrl}/us/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.75, alternates: { languages: aboutLanguages } },

    // 9. Start / Onboarding Cluster
    { url: `${baseUrl}/start`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: startLanguages } },
    { url: `${baseUrl}/es/start`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: startLanguages } },
    { url: `${baseUrl}/en/start`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: startLanguages } },
    { url: `${baseUrl}/us/start`, lastModified: now, changeFrequency: 'monthly', priority: 0.75, alternates: { languages: startLanguages } },

    // 10. Legal Hub Cluster
    { url: `${baseUrl}/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: legalLanguages } },
    { url: `${baseUrl}/es/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: legalLanguages } },
    { url: `${baseUrl}/en/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: legalLanguages } },
    { url: `${baseUrl}/us/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.35, alternates: { languages: legalLanguages } },

    // 11. Privacy Cluster
    { url: `${baseUrl}/privacidad`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: privacyLanguages } },
    { url: `${baseUrl}/es/privacidad`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: privacyLanguages } },
    { url: `${baseUrl}/en/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: privacyLanguages } },
    { url: `${baseUrl}/us/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.35, alternates: { languages: privacyLanguages } },

    // 12. Terms Cluster
    { url: `${baseUrl}/terminos`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: termsLanguages } },
    { url: `${baseUrl}/es/terminos`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: termsLanguages } },
    { url: `${baseUrl}/en/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: { languages: termsLanguages } },
    { url: `${baseUrl}/us/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.35, alternates: { languages: termsLanguages } },

    // 13. Blog Hub Cluster
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: blogHubLanguages } },
    { url: `${baseUrl}/es/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: blogHubLanguages } },
    { url: `${baseUrl}/en/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: blogHubLanguages } },
    { url: `${baseUrl}/us/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: blogHubLanguages } },

    // 14. Dynamic Blog Posts
    ...BLOG_POSTS.flatMap((post) => {
      const postDate = new Date(post.date + 'T12:00:00Z');
      const postLanguages = {
        'es': `${baseUrl}/es/blog/${post.slug}`,
        'es-ES': `${baseUrl}/es/blog/${post.slug}`,
        'es-CO': `${baseUrl}/blog/${post.slug}`,
        'en': `${baseUrl}/en/blog/${post.slug}`,
        'en-US': `${baseUrl}/us/blog/${post.slug}`,
        'x-default': `${baseUrl}/blog/${post.slug}`,
      };
      return [
        { url: `${baseUrl}/blog/${post.slug}`, lastModified: postDate, changeFrequency: 'monthly' as const, priority: 0.8, alternates: { languages: postLanguages } },
        { url: `${baseUrl}/es/blog/${post.slug}`, lastModified: postDate, changeFrequency: 'monthly' as const, priority: 0.8, alternates: { languages: postLanguages } },
        { url: `${baseUrl}/en/blog/${post.slug}`, lastModified: postDate, changeFrequency: 'monthly' as const, priority: 0.8, alternates: { languages: postLanguages } },
        { url: `${baseUrl}/us/blog/${post.slug}`, lastModified: postDate, changeFrequency: 'monthly' as const, priority: 0.75, alternates: { languages: postLanguages } },
      ];
    }),
  ];
}
