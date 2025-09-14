import Image from "next/image"
import Link from "next/link"

const newsData = [
  {
    id: "mega-feria-villa-del-dique",
    title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    excerpt:
      "Este domingo se inaugura la primera edición de la Mega Feria, un evento que reúne a emprendedores, artesanos y propuestas de moda circular en un mismo espacio pensado para toda la familia.",
    image: "/images/portada-mega-feria.jpg",
    date: "2025-09-14",
    displayDate: "14 de septiembre de 2025",
    slug: "mega-feria-villa-del-dique",
  },
  {
    id: "desafio-cerro-lago",
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    excerpt:
      "La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del Desafío Cerro y Lago, una competencia que ya se ha convertido en un clásico esperado por deportistas y amantes del MTB de todo el país.",
    image: "/images/portada-desafio-cerro-lago.jpg",
    date: "2025-09-13",
    displayDate: "13 de septiembre de 2025",
    slug: "desafio-cerro-lago",
  },
  {
    id: "inauguracion-polo-cultural-asociacion",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    excerpt:
      "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural, conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal.",
    image: "/images/portada-inaguacion-polo-asociacion.webp",
    date: "2025-09-12",
    displayDate: "12 de septiembre de 2025",
    slug: "inauguracion-polo-cultural-asociacion",
  },
  {
    id: "entrevista-bomberos-voluntarios",
    title: "Bomberos Voluntarios: Vocación, Riesgo y Compromiso Comunitario",
    excerpt:
      "En una entrevista exclusiva, los Bomberos Voluntarios de Villa del Dique nos abren las puertas de su cuartel para compartir detalles sobre su labor incansable.",
    image: "/images/portada-bomberos-voluntarios.webp",
    date: "2025-09-10",
    slug: "entrevista-bomberos-voluntarios",
  },
  {
    id: "campana-prevencion-incendios",
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    excerpt:
      "Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno.",
    image: "/images/no-al-fuego.jpg",
    date: "2025-09-09",
    slug: "campana-prevencion-incendios",
  },
]

export default function NewsSection() {
  const latestNews = newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Últimas Noticias</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{article.title}</h3>
                <p className="font-sans text-gray-700 mb-4 leading-relaxed text-sm">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 font-sans">
                    {article.displayDate ||
                      new Date(article.date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </span>
                  <Link
                    href={`/noticias/${article.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-brand-blue text-white font-sans font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    Leer más
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/noticias"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-sans font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Ver más noticias
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
