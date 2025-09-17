import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"
import { generateNewsMetadata } from "@/lib/news-metadata"

const article = {
  id: "dia-del-psicopedagogo",
  title: "Día del Psicopedagogo: acompañando el aprendizaje y el desarrollo",
  excerpt:
    "Reconocimiento a los profesionales que integran la educación y la salud. Hoy 17 de septiembre en Argentina se conmemora el Día del Psicopedagogo, en homenaje a Jean Piaget.",
  image: "/images/dia-del-profesor-aula.jpg",
  date: "2025-09-17",
  category: "Salud",
  author: "Villa del Dique Digital",
}

export const metadata: Metadata = generateNewsMetadata(article)

export default function DiaDelPsicopedagogoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: `https://www.villadeldique.com.ar${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Villa del Dique Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.villadeldique.com.ar/noticias/${article.id}`,
    },
    articleSection: article.category,
    keywords: "Día del Psicopedagogo, Jean Piaget, psicopedagogía, educación, salud, Villa del Dique, 17 septiembre",
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <AnnouncementBar />
      <Header />

      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <nav className="mb-6 md:mb-8">
            <ol className="flex items-center space-x-2 text-sm md:text-base">
              <li>
                <Link href="/" className="text-brand-blue hover:text-blue-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/noticias" className="text-brand-blue hover:text-blue-700 transition-colors">
                  Noticias
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700 font-medium">Día del Psicopedagogo</li>
            </ol>
          </nav>

          <header className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <time className="text-gray-600">
                {new Date(article.date).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 text-balance">
              {article.title}
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed">{article.excerpt}</p>
            <p className="text-sm text-gray-500 mt-4">Por {article.author}</p>
          </header>

          <div className="relative h-64 md:h-96 mb-8 md:mb-12 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Hoy 17 de septiembre en Argentina se conmemora el <strong>Día del Psicopedagogo</strong>, en homenaje a
              Jean Piaget, referente de la psicología evolutiva y del aprendizaje. Estos profesionales cumplen un rol
              fundamental en la detección de dificultades, el acompañamiento a estudiantes y familias, y la promoción de
              trayectorias educativas plenas.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image src="/images/jean-piaget.jpg" alt="Jean Piaget" fill className="object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Jean Piaget (1896-1980)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Biólogo, psicólogo y epistemólogo suizo, reconocido mundialmente por sus aportes al estudio de la
                    infancia y su teoría constructivista del desarrollo de la inteligencia. Sus ideas revolucionaron la
                    comprensión del aprendizaje infantil e influyeron profundamente en la pedagogía y psicopedagogía
                    modernas.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
              El legado de Piaget en la psicopedagogía
            </h2>

            <p className="mb-6">
              Jean Piaget desarrolló una teoría revolucionaria sobre cómo los niños construyen su conocimiento del
              mundo. Su enfoque constructivista demostró que los niños no son receptores pasivos de información, sino
              que construyen activamente su comprensión a través de la interacción con su entorno.
            </p>

            <p className="mb-6">
              Sus estudios sobre las etapas del desarrollo cognitivo (sensoriomotora, preoperacional, operaciones
              concretas y operaciones formales) proporcionaron las bases científicas para entender cómo aprenden los
              niños y cómo adaptar la enseñanza a sus necesidades específicas.
            </p>

            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">La importancia de la psicopedagogía</h2>

            <p className="mb-6">
              Los psicopedagogos son profesionales que integran conocimientos de la psicología y la pedagogía para
              abordar las dificultades de aprendizaje y promover el desarrollo integral de las personas. Su trabajo
              abarca desde la detección temprana de dificultades hasta el diseño de estrategias de intervención
              personalizadas.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">Funciones del psicopedagogo:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  Evaluación y diagnóstico de dificultades de aprendizaje
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  Diseño de estrategias de intervención educativa
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  Orientación a docentes y familias
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  Promoción de la inclusión educativa
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  Acompañamiento en procesos de aprendizaje
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
              El Día del Psicopedagogo en Argentina
            </h2>

            <p className="mb-6">
              La fecha del 17 de septiembre fue establecida en Argentina en honor a Jean Piaget, aunque su fallecimiento
              ocurrió el 16 de septiembre de 1980. Esta conmemoración fue instaurada en un congreso de profesionales en
              1982 y establecida en el acta de fundación de la Federación Argentina de Psicopedagogos.
            </p>

            <p className="mb-6">
              Es una jornada para reconocer la labor de estos profesionales que trabajan día a día para garantizar que
              todos los estudiantes puedan acceder a una educación de calidad, independientemente de sus dificultades o
              características particulares.
            </p>

            <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold mb-3">Desde Villa del Dique Digital</h3>
              <p className="leading-relaxed">
                Valoramos profundamente la tarea diaria de los psicopedagogos y enviamos un cálido saludo a todos estos
                profesionales que, con compromiso y vocación, contribuyen al bienestar y al desarrollo de nuestra
                comunidad. Su trabajo es fundamental para construir una sociedad más inclusiva y equitativa.
              </p>
            </div>

            <p className="text-lg font-medium text-center text-brand-navy">
              ¡Feliz Día del Psicopedagogo a todos los profesionales que acompañan el aprendizaje y el desarrollo
              integral de las personas!
            </p>
          </div>
        </article>

        <NewsAdvertisingCarousel />
        <NewsBreadcrumbs currentArticleId={article.id} currentTitle={article.title} />
      </main>

      <Footer />
    </div>
  )
}
