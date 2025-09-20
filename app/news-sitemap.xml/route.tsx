import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "aca-ypf-villa-del-dique-alojamientos-disponibilidad",
      title: "ACA YPF Villa del Dique invita a alojamientos a compartir su disponibilidad",
      date: "2025-09-19",
      category: "Turismo",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      title: "Entrevista exclusiva con Bomberos Voluntarios de Villa del Dique",
      date: "2025-09-09",
      category: "Comunidad",
    },
    {
      id: "emprender-villa-del-dique",
      title: "Emprender en Villa del Dique: Oportunidades y desafíos",
      date: "2025-09-09",
      category: "Emprendimientos",
    },
    // Add more recent articles here
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsArticles
    .map(
      (article) => `
  <url>
    <loc>${baseUrl}/noticias/${article.id}</loc>
    <news:news>
      <news:publication>
        <news:name>Villa del Dique Digital</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>Villa del Dique, ${article.category}, noticias locales, Córdoba, Valle de Calamuchita</news:keywords>
    </news:news>
    <lastmod>${article.date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
