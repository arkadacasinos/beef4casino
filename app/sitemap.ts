import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://beef4casino.vercel.app/',
      lastModified: new Date('2026-10-11'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
