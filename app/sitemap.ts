import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.villadeldique.com.ar"

  // Noticias con sus fechas reales
  const newsArticles = [
    {
      id: "inauguracion-polo-cultural-asociacion",
      date: "2025-09-12",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      date: "2025-09-11",
    },
    {
      id: "campana-prevencion-incendios",
      date: "2025-09-10",
    },
    {
      id: "emprender-villa-del-dique",
      date: "2025-09-09",
    },
    {
      id: "septiembre-amarillo-prevencion",
      date: "2025-09-07",
    },
    {
      id: "inauguracion-polo-cultural",
      date: "2025-09-06",
    },
  ]

  return [
    // Página principal
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Páginas principales
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/turismo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/suscribirse`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Noticias individuales
    ...newsArticles.map((article) => ({
      url: `${baseUrl}/noticias/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
