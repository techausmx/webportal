import type { Metadata } from 'next'
import BlogIndexClient from '@/components/blog/BlogIndexClient'
import { getAllPosts, getAllCategories, getAllSubjects, getFeaturedPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog & Centro de Conocimiento | Techaus',
  description: 'Consejos sobre seguros, protección patrimonial, salud y las últimas tendencias en Inteligencia Artificial para potenciar tu vida y negocio.',
  alternates: {
    types: {
      'application/rss+xml': '/blog/feed.xml',
    },
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const subjects = getAllSubjects()
  const featuredPost = getFeaturedPost()

  return (
    <BlogIndexClient
      posts={posts}
      categories={categories}
      subjects={subjects}
      featuredPost={featuredPost}
    />
  )
}
