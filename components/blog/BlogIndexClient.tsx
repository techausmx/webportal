'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  Sparkles,
  SlidersHorizontal,
  FolderOpen
} from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

interface BlogIndexClientProps {
  posts: BlogPost[]
  categories: string[]
  subjects: string[]
  featuredPost?: BlogPost
}

export default function BlogIndexClient({ posts, categories, subjects, featuredPost }: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')
  const [selectedSubject, setSelectedSubject] = useState<string>('Todos')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  // Filtered and sorted posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // Category match
      const categoryMatch = selectedCategory === 'Todas' || post.category === selectedCategory
      // Subject match
      const subjectMatch = selectedSubject === 'Todos' || post.subject === selectedSubject
      // Search match
      const query = searchQuery.trim().toLowerCase()
      const searchMatch = !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.subject.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query)

      return categoryMatch && subjectMatch && searchMatch
    }).sort((a, b) => {
      const timeA = new Date(a.date).getTime()
      const timeB = new Date(b.date).getTime()
      return sortOrder === 'newest' ? timeB - timeA : timeA - timeB
    })
  }, [posts, searchQuery, selectedCategory, selectedSubject, sortOrder])

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

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-techaus-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-techaus-accent/15 border border-techaus-accent/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-techaus-accent" />
            <span>Blog & Centro de Conocimiento</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Artículos y Novedades <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-200">Techaus</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Explora consejos sobre seguros, protección patrimonial, salud y las últimas tendencias en Inteligencia Artificial para potenciar tu vida y negocio.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Post Card (Show if no search query or filters active) */}
        {selectedCategory === 'Todas' && selectedSubject === 'Todos' && !searchQuery && featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 text-techaus-accent font-bold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Artículo Destacado</span>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:shadow-2xl transition-all duration-300">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[420px] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-techaus-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {featuredPost.category}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-md text-sky-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700">
                    {featuredPost.subject}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-techaus-accent" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-techaus-accent" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight leading-snug mb-4 group-hover:text-techaus-accent transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-techaus-primary text-sm">
                      {featuredPost.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-none">{featuredPost.author.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-techaus-accent hover:text-sky-600 transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>Leer completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">

            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por palabra clave, título o tema..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-techaus-accent focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Subject Dropdown & Order */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SlidersHorizontal className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-techaus-accent cursor-pointer"
                >
                  <option value="Todos">Todos los Temas</option>
                  {subjects.filter(s => s !== 'Todos').map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                  className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-techaus-accent cursor-pointer"
                >
                  <option value="newest">Más Recientes Primero</option>
                  <option value="oldest">Más Antiguos Primero</option>
                </select>
              </div>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
              <FolderOpen className="w-3.5 h-3.5" /> Categoría:
            </span>
            {categories.map(cat => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-techaus-accent text-white shadow-md shadow-sky-500/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Posts Count Summary */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-slate-500 font-medium">
            Mostrando <span className="font-bold text-slate-800">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'artículo' : 'artículos'}
          </p>
          {(selectedCategory !== 'Todas' || selectedSubject !== 'Todos' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('Todas')
                setSelectedSubject('Todos')
                setSearchQuery('')
              }}
              className="text-xs font-bold text-techaus-accent hover:underline"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-techaus-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3 text-techaus-accent" />
                        {post.subject}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-snug mb-3 group-hover:text-techaus-accent transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-techaus-primary text-xs">
                      {post.author.name.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-slate-600">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-techaus-accent hover:text-sky-600 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Leer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No se encontraron artículos</h3>
            <p className="text-slate-500 text-sm mb-6">
              Intenta cambiar la palabra clave de búsqueda o selecciona otra categoría o tema.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todas')
                setSelectedSubject('Todos')
                setSearchQuery('')
              }}
              className="bg-techaus-accent hover:bg-sky-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md"
            >
              Ver todos los artículos
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
