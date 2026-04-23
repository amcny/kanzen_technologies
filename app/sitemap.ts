import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kanzen.tech';

  const services = [
    'custom-software-development',
    'ai-automation',
    'web-development',
    'mobile-app-development',
    'ui-ux-design',
    'cloud-server-management',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const work = [
    'ap-teacher-info',
    'sky-garden',
    'nit-ap-ece',
    'nit-ap-freshers',
    'nit-ap-mess',
    'student-outing',
  ].map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...services,
    ...work,
  ];
}
