import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autonomek.com';
  const now = new Date();

  const makeBilingualAlternates = (esPath: string, enPath: string) => ({
    'es': `${baseUrl}${esPath}`,
    'es-CO': `${baseUrl}${esPath}`,
    'es-MX': `${baseUrl}${esPath}`,
    'es-ES': `${baseUrl}${esPath}`,
    'en': `${baseUrl}${enPath}`,
    'en-US': `${baseUrl}${enPath}`,
    'x-default': `${baseUrl}${esPath}`,
  });

  const homeLanguages = makeBilingualAlternates('', '/en');
  const servicesLanguages = makeBilingualAlternates('/servicios', '/en/services');
  const webServiceLanguages = makeBilingualAlternates(
    '/servicios/paginas-web-alto-rendimiento',
    '/en/services/high-performance-websites'
  );
  const aiAgentsLanguages = makeBilingualAlternates(
    '/servicios/agentes-inteligencia-artificial',
    '/en/services/ai-agents'
  );
  const automationLanguages = makeBilingualAlternates(
    '/servicios/automatizacion-de-procesos',
    '/en/services/process-automation'
  );
  const customSoftwareLanguages = makeBilingualAlternates(
    '/servicios/software-a-medida',
    '/en/services/custom-software'
  );
  const projectsLanguages = makeBilingualAlternates('/proyectos', '/en/projects');
  const aboutLanguages = makeBilingualAlternates('/nosotros', '/en/about');
  const blogHubLanguages = makeBilingualAlternates('/blog', '/en/blog');

  return [
    // 1. Home (ES & EN)
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: homeLanguages } },

    // 2. Services Hub
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },
    { url: `${baseUrl}/en/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: servicesLanguages } },

    // 3. AI Agents Pillar
    { url: `${baseUrl}/servicios/agentes-inteligencia-artificial`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: aiAgentsLanguages } },
    { url: `${baseUrl}/en/services/ai-agents`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: aiAgentsLanguages } },

    // 4. High-Performance Websites Pillar
    { url: `${baseUrl}/servicios/paginas-web-alto-rendimiento`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: webServiceLanguages } },
    { url: `${baseUrl}/en/services/high-performance-websites`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: webServiceLanguages } },

    // 5. Process Automation Pillar
    { url: `${baseUrl}/servicios/automatizacion-de-procesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: automationLanguages } },
    { url: `${baseUrl}/en/services/process-automation`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: automationLanguages } },

    // 6. Custom Software Pillar
    { url: `${baseUrl}/servicios/software-a-medida`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: customSoftwareLanguages } },
    { url: `${baseUrl}/en/services/custom-software`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: customSoftwareLanguages } },

    // 7. Projects / Case Studies
    { url: `${baseUrl}/proyectos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },
    { url: `${baseUrl}/en/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: projectsLanguages } },

    // 8. About Us
    { url: `${baseUrl}/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aboutLanguages } },
    { url: `${baseUrl}/en/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: aboutLanguages } },

    // 9. Blog Hub
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: blogHubLanguages } },
    { url: `${baseUrl}/en/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: blogHubLanguages } },

    // 10. Dynamic Blog Posts (Localized ES & EN Slugs)
    ...BLOG_POSTS.flatMap((post) => {
      const postDate = new Date(post.date + 'T12:00:00Z');
      const postLanguages = makeBilingualAlternates(
        `/blog/${post.slug}`,
        `/en/blog/${post.slugEn}`
      );
      return [
        { url: `${baseUrl}/blog/${post.slug}`, lastModified: postDate, changeFrequency: 'monthly' as const, priority: 0.8, alternates: { languages: postLanguages } },
        { url: `${baseUrl}/en/blog/${post.slugEn}`, lastModified: postDate, changeFrequency: 'monthly' as const, priority: 0.8, alternates: { languages: postLanguages } },
      ];
    }),
  ];
}
