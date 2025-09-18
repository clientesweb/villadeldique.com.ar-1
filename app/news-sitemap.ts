import type { MetadataRoute } from "next"

export default function newsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "villa-del-dique-perla-calamuchita",
      date: "2024-12-18T10:00:00.000Z",
      title: "Villa del Dique: la perla de Calamuchita",
    },
    {
      id: "dia-del-profesor",
      date: "2024-09-17T10:00:00.000Z",
      title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
    },
    {
      id: "dia-del-psicopedagogo",
      date: "2024-09-17T09:00:00.000Z",
      title: "Día del Psicopedagogo: acompañando el aprendizaje y el desarrollo",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      date: "2024-09-16T14:00:00.000Z",
      title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    },
    {
      id: "dia-internacional-democracia",
      date: "2024-09-15T11:00:00.000Z",
      title: "15 de septiembre: Día Internacional de la Democracia",
    },
    {
      id: "dia-mundial-linfoma",
      date: "2024-09-15T10:00:00.000Z",
      title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    },
    {
      id: "mega-feria-villa-del-dique",
      date: "2024-09-14T12:00:00.000Z",
      title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    },
    {
      id: "desafio-cerro-lago",
      date: "2024-09-13T14:00:00.000Z",
      title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    },
    {
      id: "inauguracion-polo-cultural-asociacion",
      date: "2024-09-12T16:00:00.000Z",
      title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      date: "2024-09-11T15:00:00.000Z",
      title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    },
    {
      id: "campana-prevencion-incendios",
      date: "2024-09-10T13:00:00.000Z",
      title: "Campaña de Prevención de Incendios en Villa del Dique",
    },
    {
      id: "emprender-villa-del-dique",
      date: "2024-09-09T12:00:00.000Z",
      title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    },
    {
      id: "septiembre-amarillo-prevencion",
      date: "2024-09-07T11:00:00.000Z",
      title: "Septiembre Amarillo: prevenir es acompañar",
    },
    {
      id: "inauguracion-polo-cultural",
      date: "2024-09-06T10:00:00.000Z",
      title: "Inauguración del Polo Cultural de Villa del Dique",
    },
  ]

  return newsArticles.map((article) => ({
    url: `${baseUrl}/noticias/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: "daily" as const,
    priority: 0.95,
  }))
}
