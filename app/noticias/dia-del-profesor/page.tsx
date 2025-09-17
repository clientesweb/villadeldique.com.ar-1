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
  id: "dia-del-profesor",
  title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
  excerpt:
    "Una fecha para reconocer la vocación, el esfuerzo y la guía de nuestros educadores. Desde Villa del Dique Digital saludamos a todos los docentes en su día.",
  image: "/images/feliz-dia-del-profesor.jpg",
  date: "2025-09-17",
  category: "Comunidad",
  author: "Villa del Dique Digital",
}

export const metadata: Metadata = generateNewsMetadata(article)

export default function DiaDelProfesorPage() {
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
    keywords: "Día del Profesor, José Manuel Estrada, educación, docentes, Villa del Dique, 17 septiembre",
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
              <li className="text-gray-700 font-medium">Día del Profesor</li>
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
              Cada 17 de septiembre se celebra en Argentina el <strong>Día del Profesor</strong>, en honor a José Manuel
              Estrada, pensador y educador destacado de nuestra historia. Es una jornada para agradecer a quienes, con
              compromiso y dedicación, forman a las nuevas generaciones y dejan huellas que trascienden el aula.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image
                    src="/images/jose-manuel-estrada.jpg"
                    alt="José Manuel Estrada"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">José Manuel Estrada (1842-1894)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Educador, escritor y político argentino, nacido en Buenos Aires. Comenzó su carrera docente en 1866
                    en la Escuela Normal y fue rector del Colegio Nacional de Buenos Aires. Promovió reformas para la
                    profesionalización docente y defendió la libertad de enseñanza, enfocándose en el desarrollo moral e
                    intelectual de los individuos.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Un legado educativo que perdura</h2>

            <p className="mb-6">
              José Manuel Estrada no solo fue un destacado educador, sino también un visionario que entendía la
              educación como un derecho fundamental. Durante su gestión como jefe del Departamento General de Escuelas
              en 1869, impulsó importantes reformas orientadas a mejorar la calidad educativa y la profesionalización de
              los docentes.
            </p>

            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/profesor-enseñando.jpg"
                alt="Profesor enseñando en el aula"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-6">
              Su filosofía educativa se basaba en la participación conjunta de las familias y el Estado, favoreciendo la
              libertad de enseñanza por sobre un sistema monopolizado por el Estado. Creía firmemente en que la
              educación debía ser accesible para todos y enfocarse en el desarrollo integral de las personas.
            </p>

            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
              La importancia de los docentes en nuestra comunidad
            </h2>

            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/dia-del-profesor-aula.jpg"
                alt="Docente trabajando con estudiantes"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-6">
              En Villa del Dique, como en toda Argentina, los docentes cumplen un rol fundamental en el desarrollo de
              nuestra comunidad. Son quienes día a día trabajan con vocación y compromiso para formar a las nuevas
              generaciones, transmitiendo no solo conocimientos, sino también valores y herramientas para la vida.
            </p>

            <p className="mb-6">
              Los profesores de nuestra localidad enfrentan desafíos únicos, adaptándose a las necesidades de una
              comunidad en crecimiento y trabajando para brindar una educación de calidad que prepare a nuestros jóvenes
              para el futuro.
            </p>

            <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold mb-3">Desde Villa del Dique Digital</h3>
              <p className="leading-relaxed">
                Reconocemos la tarea invaluable de todos los docentes y saludamos especialmente a los profesores de
                nuestra comunidad. Su dedicación diaria contribuye al crecimiento y desarrollo de Villa del Dique,
                formando ciudadanos comprometidos con el futuro de nuestra localidad.
              </p>
            </div>

            <p className="text-lg font-medium text-center text-brand-navy">
              ¡Feliz Día del Profesor a todos los educadores que inspiran y transforman vidas con su enseñanza!
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
