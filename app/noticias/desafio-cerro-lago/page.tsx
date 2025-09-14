import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title:
    "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique | Villa del Dique Digital",
  description:
    "La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del Desafío Cerro y Lago, una competencia que ya se ha convertido en un clásico esperado por deportistas y amantes del MTB de todo el país.",
  keywords: [
    "Desafío Cerro y Lago",
    "ciclismo de montaña",
    "MTB",
    "Villa del Dique",
    "competencia",
    "deportes",
    "Córdoba",
    "Argentina",
    "reconocimiento",
    "inscripciones",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  openGraph: {
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    description:
      "La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del Desafío Cerro y Lago.",
    url: "https://www.villadeldique.com.ar/noticias/desafio-cerro-lago",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/portada-desafio-cerro-lago.jpg",
        width: 1920,
        height: 1080,
        alt: "6° Desafío Cerro y Lago - Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    description:
      "La pasión por el ciclismo de montaña vuelve a encenderse en la región con la 6° edición del Desafío Cerro y Lago.",
    images: ["https://www.villadeldique.com.ar/images/portada-desafio-cerro-lago.jpg"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/desafio-cerro-lago",
  },
}

export default function DesafioCerroLagoPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />

      <main className="min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <header className="mb-6 md:mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                Deportes
              </span>
              <time className="text-gray-700 font-medium" dateTime="2025-09-13">
                13 de septiembre de 2025
              </time>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 text-balance leading-tight">
              Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique
            </h1>

            <p className="font-sans text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del
              Desafío Cerro y Lago, una competencia que ya se ha convertido en un clásico esperado por deportistas y
              amantes del MTB de todo el país.
            </p>

            <div className="text-sm text-gray-600 mb-8">
              Por <span className="font-medium text-gray-700">Villa del Dique Digital</span>
            </div>
          </header>

          <figure className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/portada-desafio-cerro-lago.jpg"
              alt="6° Desafío Cerro y Lago - Villa del Dique"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </figure>

          <div className="prose prose-lg max-w-none">
            <div className="font-sans text-base sm:text-lg leading-relaxed text-gray-800 space-y-6">
              <p>
                Este sábado se realizó el segundo reconocimiento oficial del circuito, una instancia clave donde los
                corredores pudieron conocer en detalle el recorrido completo, medir su nivel y ritmo, y sumar confianza
                de cara a la gran fecha del 12 de octubre. Además, fue una jornada marcada por la camaradería, la
                amistad y el entusiasmo compartido entre la comunidad ciclista.
              </p>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mt-8 mb-4">
                El Camping Municipal, epicentro del evento
              </h2>

              <p>
                El Camping Municipal de Villa del Dique volvió a ser el punto de encuentro y partida de una experiencia
                que combina deporte, naturaleza y turismo en un entorno privilegiado de sierras y lago.
              </p>

              <figure className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/reco-noticia-2.jpg"
                  alt="Participantes del reconocimiento del Desafío Cerro y Lago"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </figure>

              <p>
                Los participantes del reconocimiento pudieron experimentar de primera mano los desafíos técnicos del
                recorrido, mientras disfrutaban de los paisajes únicos que ofrece la región serrana de Córdoba.
              </p>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mt-8 mb-4">
                Inscripciones abiertas con cupos limitados
              </h2>

              <p>
                Actualmente se encuentra abierto el segundo período de inscripciones, con un valor de $50.000 y cupos
                limitados. Quienes deseen participar pueden asegurar su lugar desde ahora para no quedarse afuera de
                este desafío que promete superar todas las expectativas.
              </p>

              <figure className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/reco-noticia-1.jpg"
                  alt="Ciclistas con premios del Desafío Cerro y Lago"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </figure>

              <aside className="bg-gray-50 p-4 sm:p-6 rounded-lg my-8">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-navy mb-4">
                  Información importante para participantes
                </h3>
                <ul className="space-y-2 text-base sm:text-lg">
                  <li>
                    <strong>Fecha del evento:</strong> 12 de octubre de 2025
                  </li>
                  <li>
                    <strong>Valor de inscripción:</strong> $50.000
                  </li>
                  <li>
                    <strong>Lugar:</strong> Camping Municipal de Villa del Dique
                  </li>
                  <li>
                    <strong>Contacto:</strong> +54 9 3546 40-2038
                  </li>
                </ul>
              </aside>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mt-8 mb-4">
                Un evento que trasciende el deporte
              </h2>

              <p>
                La cita oficial será el próximo 12 de octubre de 2025, fecha en la que corredores de distintas
                provincias llegarán a Villa del Dique para vivir un evento único: paisajes imponentes, circuitos
                exigentes y la adrenalina de compartir la pasión por el ciclismo de montaña.
              </p>

              <p>
                Este desafío no solo representa una competencia deportiva, sino también una oportunidad para mostrar las
                bellezas naturales de Villa del Dique y fortalecer el turismo deportivo en la región.
              </p>

              <footer className="border-t border-gray-200 pt-6 mt-8">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-navy mb-4">Enlaces relacionados</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p>
                    <strong>Instagram del evento:</strong>{" "}
                    <a
                      href="https://www.instagram.com/desafiocerroylago/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-700 transition-colors"
                    >
                      @desafiocerroylago
                    </a>
                  </p>
                  <p>
                    <strong>Video del segundo recorrido:</strong>{" "}
                    <a
                      href="https://www.instagram.com/p/DOjT88LiY-p/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-700 transition-colors"
                    >
                      Ver en Instagram
                    </a>
                  </p>
                  <p>
                    <strong>Contacto para inscripciones:</strong>{" "}
                    <a href="tel:+5493546402038" className="text-brand-blue hover:text-blue-700 transition-colors">
                      +54 9 3546 40-2038
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          </div>

          <NewsAdvertisingCarousel />

          <div className="mt-8">
            <ShareButtons
              title="Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique"
              url={
                typeof window !== "undefined"
                  ? window.location.href
                  : "https://www.villadeldique.com.ar/noticias/desafio-cerro-lago"
              }
              description="La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del Desafío Cerro y Lago."
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
