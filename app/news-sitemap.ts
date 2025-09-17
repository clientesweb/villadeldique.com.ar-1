import type { MetadataRoute } from "next"

export default function newsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "dia-del-profesor",
      date: "2025-09-17T10:00:00.000Z",
      title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
    },
    {
      id: "dia-del-psicopedagogo",
      date: "2025-09-17T09:00:00.000Z",
      title: "Día del Psicopedagogo: acompañando el aprendizaje y el desarrollo",
    },
    {
      id: "mega-feria-villa-del-dique",
      date: "2025-09-15T12:00:00.000Z",
      title: "Mega Feria Villa del Dique",
    },
    {
      id: "dia-internacional-democracia",
      date: "2025-09-15T11:00:00.000Z",
      title: "Día Internacional de la Democracia",
    },
    {
      id: "dia-mundial-linfoma",
      date: "2025-09-15T10:00:00.000Z",
      title: "Día Mundial del Linfoma",
    },
    {
      id: "desafio-cerro-lago",
      date: "2025-09-14T14:00:00.000Z",
      title: "Desafío Cerro Lago",
    },
    {
      id: "inauguracion-polo-cultural-asociacion",
      date: "2025-09-12T16:00:00.000Z",
      title: "Inauguración Polo Cultural Asociación",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      date: "2025-09-11T15:00:00.000Z",
      title: "Entrevista Bomberos Voluntarios",
    },
    {
      id: "campana-prevencion-incendios",
      date: "2025-09-10T13:00:00.000Z",
      title: "Campaña Prevención Incendios",
    },
    {
      id: "emprender-villa-del-dique",
      date: "2025-09-09T12:00:00.000Z",
      title: "Emprender Villa del Dique",
    },
    {
      id: "septiembre-amarillo-prevencion",
      date: "2025-09-07T11:00:00.000Z",
      title: "Septiembre Amarillo Prevención",
    },
    {
      id: "inauguracion-polo-cultural",
      date: "2025-09-06T10:00:00.000Z",
      title: "Inauguración Polo Cultural",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      date: "2025-09-05T09:00:00.000Z",
      title: "Día de los Derechos de los Estudiantes Secundarios",
    },
  ]

  return newsArticles.map((article) => ({
    url: `${baseUrl}/noticias/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }))
}
