import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "aca-ypf-villa-del-dique-alojamientos-disponibilidad",
      title: "ACA YPF Villa del Dique invita a alojamientos a compartir su disponibilidad",
      date: "2025-09-20",
      category: "Turismo",
    },
    {
      id: "bomberos-voluntarios-nuevo-sitio-web",
      title: "Bomberos Voluntarios de Villa del Dique estrenan sitio web oficial",
      date: "2025-09-20",
      category: "Comunidad",
    },
    {
      id: "dia-del-profesor",
      title: "Día del Profesor: homenaje a los educadores que inspiran",
      date: "2025-09-17",
      category: "Educación",
    },
    {
      id: "dia-del-psicopedagogo",
      title: "Día del Psicopedagogo: homenaje a Jean Piaget y a los profesionales de la educación",
      date: "2025-09-17",
      category: "Educación",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      title: "Día de los Derechos de los Estudiantes Secundarios: memoria y compromiso",
      date: "2025-09-16",
      category: "Sociedad",
    },
    {
      id: "dia-internacional-democracia",
      title: "Día Internacional de la Democracia: reflexiones y desafíos actuales",
      date: "2025-09-15",
      category: "Sociedad",
    },
    {
      id: "dia-mundial-linfoma",
      title: "Día Mundial del Linfoma: concientización y apoyo a pacientes",
      date: "2025-09-15",
      category: "Salud",
    },
    {
      id: "mega-feria-villa-del-dique",
      title: "Mega Feria en Villa del Dique: encuentro de emprendedores y comunidad",
      date: "2025-09-14",
      category: "Eventos",
    },
    {
      id: "desafio-cerro-lago",
      title: "Desafío Cerro Lago: deporte y naturaleza en Villa del Dique",
      date: "2025-09-13",
      category: "Deportes",
    },
    {
      id: "inauguracion-polo-cultural-asociacion",
      title: "Inauguración del Polo Cultural de la Asociación Italiana",
      date: "2025-09-12",
      category: "Cultura",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      title: "Entrevista exclusiva con Bomberos Voluntarios de Villa del Dique",
      date: "2025-09-11",
      category: "Comunidad",
    },
    {
      id: "campana-prevencion-incendios",
      title: "Campaña de prevención de incendios forestales en Villa del Dique",
      date: "2025-09-10",
      category: "Medio Ambiente",
    },
    {
      id: "emprender-villa-del-dique",
      title: "Emprender en Villa del Dique: Oportunidades y desafíos",
      date: "2025-09-09",
      category: "Emprendimientos",
    },
    {
      id: "septiembre-amarillo-prevencion",
      title: "Septiembre Amarillo: mes de prevención del suicidio",
      date: "2025-09-07",
      category: "Salud",
    },
    {
      id: "inauguracion-polo-cultural",
      title: "Inauguración del Polo Cultural en Villa del Dique",
      date: "2025-09-06",
      category: "Cultura",
    },
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