import type { MetadataRoute } from "next"

export default function newsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "generacion-gen-genetica-calamuchita",
      date: "2025-09-23T10:00:00.000Z",
      title: "Generación GEN: la genética explicada desde Calamuchita",
    },
    {
      id: "dia-de-la-primavera",
      date: "2025-09-21T12:00:00.000Z",
      title: "21 de septiembre: Día de la Primavera",
    },
    {
      id: "dia-de-la-sanidad",
      date: "2025-09-21T10:00:00.000Z",
      title: "21 de septiembre: Día de la Sanidad",
    },
    {
      id: "aca-ypf-villa-del-dique-invita-alojamientos",
      date: "2025-09-20T10:00:00.000Z",
      title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
    },
    {
      id: "bomberos-voluntarios-nuevo-sitio-web",
      date: "2025-09-19T10:00:00.000Z",
      title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
    },
    {
      id: "villa-del-dique-perla-calamuchita",
      date: "2025-09-18T10:00:00.000Z",
      title: "Villa del Dique: la perla de Calamuchita",
    },
    {
      id: "dia-del-psicopedagogo",
      date: "2025-09-17T10:00:00.000Z",
      title: "17 de septiembre: Día del Psicopedagogo",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      date: "2025-09-16T10:00:00.000Z",
      title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    },
    {
      id: "dia-internacional-democracia",
      date: "2025-09-15T10:00:00.000Z",
      title: "15 de septiembre: Día Internacional de la Democracia",
    },
    {
      id: "dia-mundial-linfoma",
      date: "2025-09-15T09:00:00.000Z",
      title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    },
    {
      id: "mega-feria-villa-del-dique",
      date: "2025-09-14T12:00:00.000Z",
      title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    },
    {
      id: "inauguracion-polo-cultural",
      date: "2025-09-06T10:00:00.000Z",
      title: "Inauguración del Polo Cultural de Villa del Dique",
    },
    {
      id: "septiembre-amarillo-prevencion",
      date: "2025-09-07T10:00:00.000Z",
      title: "Septiembre Amarillo: prevenir es acompañar",
    },
    {
      id: "emprender-villa-del-dique",
      date: "2025-09-09T10:00:00.000Z",
      title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    },
  ]

  return newsArticles.map((article) => ({
    url: `${baseUrl}/noticias/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: "daily" as const,
    priority: 0.95,
  }))
}