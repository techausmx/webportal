# Blog Publishing Guide

How to add, edit, and publish articles on the Techaus blog (`/blog`).

## How it works

Each blog post is a Markdown file in [`content/blog/`](../content/blog/). There's no database or admin panel: you add a file, run `git push`, and GitHub Actions rebuilds and deploys the site to Firebase Hosting automatically.

The filename **is the URL slug**. For example:

```
content/blog/como-elegir-seguro-mascotas.md  →  https://techaus.mx/blog/como-elegir-seguro-mascotas
```

From that one file, the site automatically generates:
- The post's card and detail page on `/blog`
- SEO tags (`title`, `description`, Open Graph, Twitter Card)
- An entry in `/sitemap.xml`
- An entry in the RSS feed `/blog/feed.xml` (used by the LinkedIn RSS integration)

No code changes are needed to publish, edit, or remove a post.

## Publishing a new post

### 1. Add the cover image

Place the image in [`public/images/`](../public/images/), as `.jpg` or `.png`. Use a descriptive filename, e.g.:

```
public/images/seguro_mascotas_hero.jpg
```

Recommended: landscape orientation (16:9 or 16:10), at least 1200px wide, reasonably compressed (ideally under 500KB) — images aren't optimized automatically at build time.

### 2. Create the Markdown file

Create a new file in `content/blog/` named after the slug you want (lowercase, no accents or spaces, words separated by hyphens):

```
content/blog/como-elegir-seguro-mascotas.md
```

### 3. Fill in the frontmatter and content

Use this template as a starting point (post content itself stays in Spanish, matching the rest of the site):

```markdown
---
title: "Cómo Elegir el Seguro Ideal para tu Mascota"
excerpt: "Descubre qué cubre un seguro de mascotas y cómo elegir el plan correcto para tu compañero peludo."
category: "Salud y Bienestar"
subject: "Consejos Prácticos"
date: "2026-08-15"
author:
  name: "Elena Rodríguez"
  role: "CEO & Fundadora de Techaus"
coverImage: "/images/seguro_mascotas_hero.jpg"
featured: false
relatedServiceUrl: "/proteccion/gastos-medicos"
relatedServiceText: "Cotizar Ahora"
keyTakeaway: "Un seguro de mascotas bien elegido evita que una emergencia médica se convierta en una carga financiera inesperada."
---

Párrafo de introducción. Aparece antes del primer encabezado, sin necesidad de marcarlo de forma especial.

## 1. Primer Punto Clave

Texto del cuerpo de esta sección.

- Primer punto en viñeta
- Segundo punto en viñeta
- Tercer punto en viñeta

## 2. Segundo Punto Clave

Más texto. Puedes usar **negritas** y [enlaces](https://techaus.mx) con sintaxis Markdown normal.

## 3. Tercer Punto Clave

Cierre del contenido antes de la sección de "Compartir" y "Servicio Relacionado", que se generan automáticamente.
```

### 4. Publish

```bash
git add content/blog/como-elegir-seguro-mascotas.md public/images/seguro_mascotas_hero.jpg
git commit -m "content: add pet insurance blog post"
git push origin main
```

GitHub Actions builds the site and deploys it to Firebase Hosting automatically. The post will be live within a few minutes.

## Frontmatter field reference

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Post title. Used on the card, the detail page, and SEO tags. |
| `excerpt` | Yes | 1–2 line summary. Shown on cards, in search, in the RSS feed, and as the meta description. |
| `category` | Yes | Post category (e.g. "Salud y Bienestar", "Auto y Movilidad"). Free text — any new value automatically becomes a filter pill on `/blog`. |
| `subject` | Yes | Post topic (e.g. "Consejos Prácticos", "Educación Financiera"). Also free text. |
| `date` | Yes | Date in `YYYY-MM-DD` format. Controls ordering everywhere (index, featured post, sitemap, RSS). **Use today's date, not a future date** — RSS-to-social importers (including LinkedIn's) generally hold or skip items with a future `pubDate` until that date arrives. |
| `author.name` | Yes | Author's name. |
| `author.role` | Yes | Author's title, shown under their name. |
| `author.avatarUrl` | No | Author profile photo URL (optional; falls back to an initial icon if omitted). |
| `coverImage` | Yes | Path to the cover image inside `public/`, e.g. `/images/file.jpg`. |
| `featured` | No | `true` makes this post the main featured card on `/blog`. Only **one** post should have `featured: true` at a time. |
| `relatedServiceUrl` | No | Internal link to a related service page, shown in a call-to-action banner at the end of the post. |
| `relatedServiceText` | No | Button text for that banner (e.g. "Cotizar Seguro de Auto"). |
| `keyTakeaway` | No | A highlighted closing statement shown in a callout box right below the cover image. |

**Not set manually:** `readTime` is calculated automatically from the word count of the post body (~200 words/minute). The `slug` isn't set in frontmatter either — it's the filename.

## Post body formatting

Everything after the frontmatter is standard Markdown:

- A plain paragraph at the top serves as the introduction — no special marker needed.
- `## Heading` starts a new section (large title).
- `### Subheading` adds a subtitle within a section.
- Lines starting with `-` create a bulleted list.
- `**text**` for bold, `[text](url)` for links.

No HTML or custom components are needed — the Markdown is automatically converted to HTML styled to match the site's design.

## Editing an existing post

Edit the corresponding `.md` file in `content/blog/` directly, then commit and push. Don't rename the file unless you intend to change the post's URL — if you do rename it, the old URL will 404, since there are no automatic redirects.

## Removing a post

Delete the `.md` file (and its image, if not used elsewhere), then commit and push. The post disappears from `/blog`, the sitemap, and the RSS feed. Note that the old URL will return a 404 — there are no automatic redirects.

## Where to check the result

- **Blog listing:** `https://techaus.mx/blog`
- **Sitemap:** `https://techaus.mx/sitemap.xml`
- **RSS feed (used by the LinkedIn integration):** `https://techaus.mx/blog/feed.xml`

To preview locally before publishing:

```bash
npm run dev
```

then visit `http://localhost:3000/blog/your-new-slug`.

## Change the blog feed back to Youtube

- Youtube Channel
- Youtube
- https://www.youtube.com/feeds/videos.xml?channel_id=UCDYPKW2BpfNGYgrASQDzqew
