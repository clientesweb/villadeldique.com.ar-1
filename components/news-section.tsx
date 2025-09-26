import Image from "next/image"
import Link from "next/link"

const newsData = [
  {
    id: "dia-del-empleado-de-comercio",
    title: "26 de septiembre: Día del Empleado de Comercio",
    excerpt:
      "Un homenaje a quienes sostienen el pulso comercial de Villa del Dique. Cada 26 de septiembre se celebra el Día del Empleado de Comercio, reconociendo la labor de quienes mantienen viva la economía local.",
    image: "/images/portada-dia-del-comerciante.webp",
    date: "2025-09-26",
    displayDate: "26 de septiembre de 2025",
    slug: "dia-del-empleado-de-comercio",
  },
  {
    id: "generacion-gen-genetica-calamuchita",
    title: "Generación GEN: la genética explicada desde Calamuchita",
    excerpt:
      "La bioquímica Evelyn Butassi acerca la genética y la medicina personalizada al público general a través de un podcast available en Spotify, vinculado al trabajo del Laboratorio LEAC.",
    image: "/images/portada-noticia-generacion-gen.jpg",
    date: "2025-09-23",
    displayDate: "23 de septiembre de 2025",
    slug: "generacion-gen-genetica-calamuchita",
  },
  {
    id: "dia-de-la-primavera",
    title: "21 de septiembre: Día de la Primavera",
    excerpt:
      "Un nuevo ciclo florece en Calamuchita. El 21 de septiembre marca la llegada de la primavera, una estación que simboliza el renacer, la alegría y el encuentro con la naturaleza en nuestro Valle de Calamuchita.",
    image: "/images/dia-de-la-primavera.jpg",
    date: "2025-09-21",
    displayDate: "21 de septiembre de 2025",
    slug: "dia-de-la-primavera",
  },
  {
    id: "dia-de-la-sanidad",
    title: "21 de septiembre: Día de la Sanidad",
    excerpt:
      "Un reconocimiento a quienes cuidan nuestra salud todos los días. El 21 de septiembre se celebra en Argentina el Día de la Sanidad, en homenaje a los trabajadores de la salud.",
    image: "/images/dia-de-la-sanidad.jpg",
    date: "2025-09-21",
    displayDate: "21 de septiembre de 2025",
    slug: "dia-de-la-sanidad",
  },
  {
    id: "aca-ypf-villa-del-dique-invita-alojamientos",
    title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
    excerpt:
      "La estación, un punto de referencia para quienes llegan a nuestra localidad, busca fortalecer el vínculo entre prestadores y visitantes, potenciando la oferta turística de Villa del Dique.",
    image: "/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp",
    date: "2025-09-20",
    displayDate: "20 de septiembre de 2025",
    slug: "aca-ypf-villa-del-dique-invita-alojamientos",
  },
  {
    id: "bomberos-voluntarios-nuevo-sitio-web",
    title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
    excerpt:
      "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad. La institución lanzó oficialmente su plataforma web con información sobre su historia, cuerpo activo y formas de colaborar.",
    image: "/images/bomberos-voluntarios-vdd-4.jpg",
    date: "2025-09-19",
    displayDate: "19 de septiembre de 2025",
    slug: "bomberos-voluntarios-nuevo-sitio-web",
  },
  {
    id: "villa-del-dique-perla-calamuchita",
    title: "Villa del Dique: la perla de Calamuchita",
    excerpt:
      "Un rincón serrano donde la naturaleza, la historia y las tradiciones se encuentran. Descubre todo lo que hace especial a Villa del Dique, desde su fundación hasta sus atractivos turísticos.",
    image: "/images/portada-villa-del-dique-perla-de-calamuchita.webp",
    date: "2025-09-18",
    displayDate: "18 de septiembre de 2025",
    slug: "villa-del-dique-perla-calamuchita",
  },
  {
    id: "dia-del-profesor",
    title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
    excerpt:
      "Una fecha para reconocer la vocación, el esfuerzo y la guía de nuestros educadores. Desde Villa del Dique Digital saludamos a todos los docentes en su día.",
    image: "/images/feliz-dia-del-profesor.jpg",
    date: "2025-09-17",
    displayDate: "17 de septiembre de 2025",
    slug: "dia-del-profesor",
  },
  {
    id: "dia-del-psicopedagogo",
    title: "Día del Psicopedagogo: acompañando el aprendizaje y el desarrollo",
    excerpt:
      "Reconocimiento a los profesionales que integran la educación y la salud. Hoy 17 de septiembre en Argentina se conmemora el Día del Psicopedagogo.",
    image: "/images/dia-de-psicopedadogo.jpeg",
    date: "2025-09-17",
    displayDate: "17 de septiembre de 2025",
    slug: "dia-del-psicopedagogo",
  },
  {
    id: "dia-derechos-estudiantes-secundarios",
    title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    excerpt:
      "Cada 16 de septiembre, Argentina recuerda La Noche de los Lápices y reafirma el compromiso con la defensa de los derechos estudiantiles, la educación y la democracia.",
    image: "/images/portada-dia-derechos-estudiantes.webp",
    date: "2025-09-16",
    displayDate: "16 de septiembre de 2025",
    slug: "dia-derechos-estudiantes-secundarios",
  },
  {
    id: "dia-internacional-democracia",
    title: "15 de septiembre: Día Internacional de la Democracia",
    excerpt:
      "Cada 15 de septiembre el mundo conmemora el Día Internacional de la Democracia. En Villa del Dique reflexionamos sobre la importancia de fortalecer los valores democráticos en nuestras comunidades.",
    image: "/images/portada-dia-de-la-democracia.jpg",
    date: "2025-09-15",
    displayDate: "15 de septiembre de 2025",
    slug: "dia-internacional-democracia",
  },
  {
    id: "dia-mundial-linfoma",
    title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    excerpt:
      "Una fecha para visibilizar y sensibilizar a la población sobre este tipo de cáncer hematológico. Información sobre síntomas, detección temprana y recursos disponibles.",
    image: "/images/portada-dia-mundial-linfoma.jpg",
    date: "2025-09-15",
    displayDate: "15 de septiembre de 2025",
    slug: "dia-mundial-linfoma",
  },
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
    title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    excerpt:
      "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable y dedicación a la comunidad.",
    image: "/images/portada-bomberos-voluntarios.webp",
    date: "2025-09-11",
    displayDate: "11 de septiembre de 2025",
    slug: "entrevista-bomberos-voluntarios",
  },
  {
    id: "emprender-villa-del-dique",
    title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    excerpt:
      "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Parrilla & Restaurante Iowa y el evento de boxeo que unió a toda la comunidad.",
    image: "/images/emprender-villa-del-dique.webp",
    date: "2025-09-09",
    displayDate: "9 de septiembre de 2025",
    slug: "emprender-villa-del-dique",
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
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
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
