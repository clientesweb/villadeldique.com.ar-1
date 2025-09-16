import Link from "next/link"
import Image from "next/image"

interface RelatedNews {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

interface NewsBreadcrumbsProps {
  currentArticleId: string
  currentTitle: string
}

const allNews: RelatedNews[] = [
  {
    id: "septiembre-amarillo-prevencion",
    title: "Septiembre Amarillo: prevenir es acompañar",
    excerpt:
      "Cada 7 de septiembre se conmemora el Día Mundial de la Prevención del Suicidio. Una fecha que nos invita a reflexionar y abrir espacios de acompañamiento.",
    image: "/images/mes-amarillo-portada.jpg",
    date: "2025-09-07",
    category: "Salud Mental",
  },
  {
    id: "inauguracion-polo-cultural-asociacion",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    excerpt: "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural.",
    image: "/images/portada-inaguacion-polo-asociacion.webp",
    date: "2025-09-12",
    category: "Cultura",
  },
  {
    id: "entrevista-bomberos-voluntarios",
    title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    excerpt: "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable.",
    image: "/images/bombero-voluntario-vdd.jpg",
    date: "2025-09-11",
    category: "Entrevistas",
  },
  {
    id: "campana-prevencion-incendios",
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    excerpt: "Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios.",
    image: "/images/no-al-fuego.jpg",
    date: "2025-09-10",
    category: "Seguridad",
  },
  {
    id: "inauguracion-polo-cultural",
    title: "Inauguración del Polo Cultural de Villa del Dique",
    excerpt: "Villa del Dique contará con un nuevo Polo Cultural para el encuentro y la creatividad.",
    image: "/images/inaguracion-vdd.jpg",
    date: "2025-09-12",
    category: "Cultura",
  },
  {
    id: "emprender-villa-del-dique",
    title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    excerpt:
      "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Iowa.ar y el evento de boxeo que unió a toda la comunidad.",
    image: "/images/emprender-villa-del-dique.webp",
    date: "2025-09-09",
    category: "Emprendedores Locales",
  },
]

export default function NewsBreadcrumbs({ currentArticleId, currentTitle }: NewsBreadcrumbsProps) {
  const relatedNews = allNews.filter((article) => article.id !== currentArticleId).slice(0, 2) // Show only 2 related articles

  if (relatedNews.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="border-t border-gray-200 pt-6 md:pt-8">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-brand-navy mb-6 md:mb-8">
            Noticias relacionadas
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {relatedNews.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <time className="text-sm text-gray-700">
                      {new Date(article.date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-brand-navy mb-3 text-balance">
                    <Link href={`/noticias/${article.id}`} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-gray-700 text-sm md:text-base leading-relaxed mb-4">{article.excerpt}</p>
                  <Link
                    href={`/noticias/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base transition-colors"
                  >
                    Leer más
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Ver todas las noticias
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
