import { getAllPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toPlainText(value: string): string {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function GET() {
  const posts = getAllPosts()
  const lastBuildDate = posts.length > 0
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString()

  const items = posts.slice(0, 10).map(post => {
    const url = `${SITE_URL}/blog/${post.slug}`
    const description = toPlainText(post.excerpt || post.title)
    const safeDescription = description.length > 0 ? description : `${post.title} — artículo de Techaus.`

    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(safeDescription)}</description>
    </item>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Techaus</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Ideas, consejos y tendencias sobre seguros, salud, protección patrimonial e inteligencia artificial.</description>
    <language>es-MX</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  })
}
