import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'
import ShareButtons from '@/components/blog/ShareButtons'

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`

  return {
    title: `${post.title} | Techaus`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

const formatDate = (dateStr: string) => {
  try {
    const date = new Date(dateStr + 'T00:00:00')
    return new Intl.DateTimeFormat('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date)
  } catch {
    return dateStr
  }
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 2)

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">

      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-techaus-accent transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los artículos</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:underline">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px]">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Article Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 mb-8">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="bg-techaus-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              {post.category}
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3 text-techaus-accent" />
              {post.subject}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>

          {/* Author & Date Bar */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-techaus-primary text-base">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-base font-bold text-slate-800 leading-none">{post.author.name}</p>
                <p className="text-xs text-slate-500 mt-1">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-techaus-accent" />
                {formatDate(post.date)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-techaus-accent" />
                {post.readTime}
              </span>
            </div>
          </div>

        </div>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-200/80">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Key Takeaways Callout Box */}
        {post.keyTakeaway && (
          <div className="bg-gradient-to-r from-sky-50 to-teal-50 border-l-4 border-techaus-accent p-6 sm:p-8 rounded-2xl shadow-sm mb-12">
            <div className="flex items-center gap-2 text-techaus-accent font-bold text-sm uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Conclusión Clave</span>
            </div>
            <p className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">
              {post.keyTakeaway}
            </p>
          </div>
        )}

        {/* Main Body Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-100 mb-12">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Share Article Bar */}
          <ShareButtons title={post.title} />
        </div>

        {/* Related Service CTA Banner */}
        {post.relatedServiceUrl && (
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Servicio Relacionado</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ¿Buscas protección a la medida para ti o tu empresa?
              </h3>
              <p className="text-slate-300 text-sm">
                Nuestros asesores expertos Techaus están listos para diseñar tu plan perfecto sin compromiso.
              </p>
            </div>

            <Link
              href={post.relatedServiceUrl}
              className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all text-sm whitespace-nowrap group"
            >
              <span>{post.relatedServiceText || 'Solicitar Cotización'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-8">
              Artículos Relacionados
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(rel => (
                <div
                  key={rel.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-techaus-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold text-slate-400 mb-2">{formatDate(rel.date)} • {rel.readTime}</p>
                    <h4 className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-3 group-hover:text-techaus-accent transition-colors line-clamp-2">
                      <Link href={`/blog/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-techaus-accent hover:text-sky-600 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  )
}
