import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

const STATIC_ROUTES = [
  '',
  '/cotizar',
  '/nosotros',
  '/soluciones-ia',
  '/proteccion/gastos-medicos',
  '/proteccion/seguro-de-vida',
  '/proteccion/seguro-de-auto',
  '/proteccion/hogar-y-empresa',
  '/politica-de-privacidad',
  '/terminos-y-condiciones',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(route => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...getAllPosts().map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticEntries, ...blogEntries]
}
