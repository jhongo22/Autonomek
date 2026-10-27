import { MetadataRoute } from 'next';

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

  const legalLanguages = {
    'es': `${baseUrl}/es/legal`,
    'es-ES': `${baseUrl}/es/legal`,
    'es-CO': `${baseUrl}/legal`,
    'en': `${baseUrl}/en/legal`,
    'en-US': `${baseUrl}/us/legal`,
    'x-default': `${baseUrl}/legal`,
  };

  return [
    // Home Cluster
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/es`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/mx`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/us`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: homeLanguages } },

    // Services Hub Cluster
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/es/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/en/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/us/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: servicesLanguages } },

    // AI Agents Cluster
    { url: `${baseUrl}/servicios/agentes-inteligencia-artificial`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/es/servicios/agentes-inteligencia-artificial`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/en/services/ai-agents`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/us/services/ai-agents`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aiAgentsLanguages } },

    // High-Performance Websites Cluster
    { url: `${baseUrl}/servicios/paginas-web-alto-rendimiento`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/es/servicios/paginas-web-alto-rendimiento`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/en/services/high-performance-websites`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/us/services/high-performance-websites`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: webServiceLanguages } },

    // Process Automation Cluster
    { url: `${baseUrl}/servicios/automatizacion-de-procesos`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/es/servicios/automatizacion-de-procesos`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/en/services/process-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/us/services/process-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: automationLanguages } },

    // Custom Software Cluster
    { url: `${baseUrl}/servicios/software-a-medida`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/es/servicios/software-a-medida`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/en/services/custom-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/us/services/custom-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: customSoftwareLanguages } },

    // Projects / Case Studies Cluster
    { url: `${baseUrl}/proyectos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/es/proyectos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/en/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/us/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: projectsLanguages } },

    // Legal Cluster
    { url: `${baseUrl}/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.3, alternates: { languages: legalLanguages } },
    { url: `${baseUrl}/es/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.3, alternates: { languages: legalLanguages } },
    { url: `${baseUrl}/en/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.3, alternates: { languages: legalLanguages } },
    { url: `${baseUrl}/us/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.3, alternates: { languages: legalLanguages } },
  ];
}
