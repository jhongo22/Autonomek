import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://autonomek.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
      {
        // AI Search Citability & User-Triggered Agent Browsing
        userAgent: [
          'OAI-SearchBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'ChatGPT-User',
          'Claude-User',
          'Perplexity-User',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/private/', '/api/'],
      },
      {
        // Foundation Model Training & Grounding Crawlers
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'cohere-ai',
          'Bytespider',
          'Meta-ExternalAgent',
          'FacebookBot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
