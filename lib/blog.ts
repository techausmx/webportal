import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  category: string
  subject: string
  date: string // YYYY-MM-DD
  readTime: string
  author: {
    name: string
    role: string
    avatarUrl?: string
  }
  coverImage: string
  featured?: boolean
  relatedServiceUrl?: string
  relatedServiceText?: string
  keyTakeaway?: string
}

function calculateReadTime(markdownBody: string): string {
  const wordCount = markdownBody.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(wordCount / 200))
  return `${minutes} min de lectura`
}

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    contentHtml: marked.parse(content, { async: false }) as string,
    category: data.category,
    subject: data.subject,
    date: data.date,
    readTime: calculateReadTime(content),
    author: data.author,
    coverImage: data.coverImage,
    featured: data.featured ?? false,
    relatedServiceUrl: data.relatedServiceUrl,
    relatedServiceText: data.relatedServiceText,
    keyTakeaway: data.keyTakeaway,
  }
}

export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
  return filenames
    .map(readPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

export function getFeaturedPost(): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find(p => p.featured) || posts[0]
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(p => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2): BlogPost[] {
  const otherPosts = getAllPosts().filter(p => p.slug !== currentSlug)
  const sameCategory = otherPosts.filter(p => p.category === category)
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit)
  }
  return otherPosts.slice(0, limit)
}

export function getAllCategories(): string[] {
  const categories = Array.from(new Set(getAllPosts().map(p => p.category)))
  return ['Todas', ...categories]
}

export function getAllSubjects(): string[] {
  const subjects = Array.from(new Set(getAllPosts().map(p => p.subject)))
  return ['Todos', ...subjects]
}
