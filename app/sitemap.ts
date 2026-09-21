import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/air-jet-looms/',
    '/air-jet-looms/pl920/',
    '/water-jet-looms/',
    '/water-jet-looms/pl5810/',
    '/manufacturer-partner/',
    '/about/',
    '/contact/',
    '/resources/air-jet-vs-water-jet-loom/',
  ];

  return routes.map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('/pl920/') || route.includes('/pl5810/') ? 0.9 : 0.8,
  }));
}

