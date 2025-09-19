import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"

export const metadata: Metadata = {
  title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad | Villa del Dique Digital",
  description:
    "La estación, un punto de referencia para quienes llegan a nuestra localidad. AM CELTA CONCESIONARIO OFICIAL DE ACA YPF invita a los alojamientos de la localidad a acercar sus datos de contacto y disponibilidad para orientar a los visitantes.",
  keywords: [
    "ACA YPF Villa del Dique",
    "AM CELTA",
    "alojamientos Villa del Dique",
    "turismo Villa del Dique",
    "hospedajes Villa del Dique",
    "estación de servicio",
    "Ruta Nacional 5",
    "Valle de Calamuchita",
    "información turística",
    "cabañas Villa del Dique",
    "hoteles Villa del Dique",
    "hosterías Villa del Dique",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/aca-ypf-villa-del-dique-invita-alojamientos",
  },
  openGraph: {
    title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
    description:
      "La estación se consolida como punto de referencia para visitantes. Iniciativa para fortalecer el turismo local.",
    url: "https://www.villadeldique.com.ar/noticias/aca-ypf-villa-del-dique-invita-alojamientos",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp",
        width: 1200,
        height: 630,
        alt: "ACA YPF Villa del Dique - Iniciativa para alojamientos",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
    description: "Iniciativa para fortalecer el turismo local y orientar a los visitantes.",
    images: ["/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
  description:
    "La estación, un punto de referencia para quienes llegan a nuestra localidad. AM CELTA CONCESIONARIO OFICIAL DE ACA YPF invita a los alojamientos de la localidad a acercar sus datos de contacto y disponibilidad.",
  image: "https://www.villadeldique.com.ar/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp",
  datePublished: "2025-09-20",
  dateModified: "2025-09-20",
  author: {
    "@type": "Person",
    name: "Villa del Dique Digital",
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
    "@id": "https://www.villadeldique.com.ar/noticias/aca-ypf-villa-del-dique-invita-alojamientos",
  },
  articleSection: "Turismo",
  keywords: "ACA YPF, Villa del Dique, turismo, alojamientos, AM CELTA, hospedajes, Valle de Calamuchita",
}

export default function AcaYpfVillaDelDiqueInvitaAlojamientosPage() {
  const articleUrl = "https://www.villadeldique.com.ar/noticias/aca-ypf-villa-del-dique-invita-alojamientos"
  const articleTitle = "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad"

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
              <li className="text-gray-700 font-medium">ACA YPF invita a alojamientos</li>
            </ol>
          </nav>

          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                Turismo
              </span>
              <time className="text-gray-600 text-sm md:text-base">20 de septiembre de 2025</time>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
              ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              La estación, un punto de referencia para quienes llegan a nuestra localidad
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp"
              alt="ACA YPF Villa del Dique - Punto de referencia para visitantes"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none font-sans text-gray-800 leading-relaxed">
            <p className="text-lg md:text-xl mb-6">
              El ACA YPF Villa del Dique, ubicado sobre la Ruta Nacional 5, se ha consolidado como un centro de paso y
              consulta permanente para los visitantes que arriban a la región. Además de ofrecer sus tradicionales
              servicios de combustible, tienda y cafetería, comidas, la estación se convierte en un lugar estratégico
              donde los turistas buscan información rápida y confiable sobre hospedajes y actividades.
            </p>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/iniciativa-aca-ypf-am-celta-articulo-1.webp"
                alt="Estación ACA YPF Villa del Dique con servicios completos"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Fortaleciendo el turismo local
            </h2>

            <p className="mb-6">
              Con el objetivo de impulsar al turismo local y brindar una mejor atención a quienes eligen Villa del
              Dique,
              <strong> AM CELTA CONCESIONARIO OFICIAL DE ACA YPF</strong> invita a los alojamientos de la localidad a
              acercar sus datos de contacto y disponibilidad. De esta manera, la estación podrá orientar a los viajeros
              que consultan diariamente sobre dónde alojarse o qué alternativas existen en la zona.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/iniciativa-aca-ypf-am-celta-articulo-2.webp"
                  alt="Señalización YPF Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/iniciativa-aca-ypf-am-celta-articulo-3.webp"
                  alt="Atención personalizada en ACA YPF Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Una iniciativa que beneficia a toda la comunidad
            </h2>

            <p className="mb-6">
              La iniciativa busca fortalecer el vínculo entre prestadores y visitantes, potenciando la oferta turística
              y reafirmando a Villa del Dique como un destino elegido en el Valle de Calamuchita. Los responsables de
              cabañas, hosterías, hoteles y casas de alquiler pueden acercar su información directamente en la estación
              de servicio, contribuyendo a un trabajo conjunto que beneficia a toda la comunidad.
            </p>

            <div className="bg-blue-50 border-l-4 border-brand-blue p-6 my-8">
              <h3 className="font-bold text-lg mb-4 text-brand-navy">Contacto ACA YPF Villa del Dique</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Teléfono/WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/5493546501444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-blue-700 font-medium underline"
                  >
                    +54 9 3546 50-1444
                  </a>
                </li>
                <li>
                  <strong>Instagram:</strong>{" "}
                  <a
                    href="https://www.instagram.com/aca.ypf.vdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-blue-700 font-medium underline"
                  >
                    @aca.ypf.vdd
                  </a>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Un punto estratégico en el Valle de Calamuchita
            </h2>

            <p className="mb-6">
              La ubicación privilegiada de ACA YPF Villa del Dique sobre la Ruta Nacional 5 lo convierte en una parada
              obligatoria para quienes se dirigen hacia los destinos serranos. Esta posición estratégica permite que la
              estación funcione como una verdadera puerta de entrada a la región, donde los visitantes pueden obtener no
              solo combustible y provisiones, sino también información valiosa sobre las opciones de alojamiento
              disponibles.
            </p>

            <p className="mb-6">
              La propuesta de AM CELTA busca crear una red de colaboración entre el sector privado y los prestadores
              turísticos locales, generando un sistema de información actualizado y confiable que mejore la experiencia
              de los visitantes desde su llegada a Villa del Dique.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Cómo participar de la iniciativa
            </h2>

            <p className="mb-6">
              Los responsables de alojamientos interesados en formar parte de esta iniciativa pueden acercarse
              directamente a la estación ACA YPF Villa del Dique o contactarse a través de los medios oficiales. La
              información requerida incluye datos de contacto, tipos de alojamiento disponibles, capacidad y servicios
              ofrecidos.
            </p>

            <p className="mb-8">
              Esta colaboración representa una oportunidad única para que los prestadores turísticos locales amplíen su
              alcance y conecten directamente con los visitantes que llegan a la región, fortaleciendo así el desarrollo
              turístico sostenible de Villa del Dique y el Valle de Calamuchita.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Autor:</strong> Villa del Dique Digital
            </p>

            <ShareButtons
              title={articleTitle}
              url={articleUrl}
              description="La estación se consolida como punto de referencia para visitantes. Iniciativa para fortalecer el turismo local."
            />
          </div>
        </article>

        <NewsBreadcrumbs currentArticleId="aca-ypf-villa-del-dique-invita-alojamientos" currentTitle={articleTitle} />
      </main>

      <Footer />
    </div>
  )
}
