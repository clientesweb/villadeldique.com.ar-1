import type { Metadata } from "next"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import MainAdvertisingCarousel from "@/components/main-advertising-carousel"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Turismo en Villa del Dique - Guía Completa | Villa del Dique Digital",
  description:
    "Descubre los mejores destinos, actividades y experiencias turísticas en Villa del Dique, Córdoba. Información oficial, servicios y todo para disfrutar tu visita.",
  keywords: [
    "turismo Villa del Dique",
    "actividades Villa del Dique",
    "destinos Córdoba",
    "turismo Córdoba",
    "lago Villa del Dique",
    "deportes náuticos",
    "pesca deportiva",
    "turismo rural",
    "alojamiento Villa del Dique",
    "gastronomía local",
    "dique Los Molinos",
    "valle de Calamuchita",
    "turismo familiar",
    "naturaleza Córdoba",
    "actividades acuáticas",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/turismo",
  },
  openGraph: {
    title: "Turismo en Villa del Dique - Guía Completa",
    description: "Descubre los mejores destinos, actividades y experiencias turísticas en Villa del Dique, Córdoba.",
    url: "https://www.villadeldique.com.ar/turismo",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/turismo-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Turismo en Villa del Dique - Deportes náuticos y naturaleza",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turismo en Villa del Dique - Guía Completa",
    description: "Descubre los mejores destinos, actividades y experiencias turísticas en Villa del Dique, Córdoba.",
    images: ["/images/og/turismo-og-image.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "tourism.destination": "Villa del Dique",
    "tourism.region": "Córdoba, Argentina",
    "tourism.activities": "deportes náuticos, pesca, turismo rural, naturaleza",
  },
}

export default function TurismoPage() {
  const tourismSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Villa del Dique",
    description:
      "Hermosa localidad turística en Córdoba, Argentina, conocida por su lago, deportes náuticos y naturaleza.",
    url: "https://www.villadeldique.com.ar/turismo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa del Dique",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.1833,
      longitude: -64.4833,
    },
    touristType: ["Turismo familiar", "Turismo de naturaleza", "Deportes náuticos", "Turismo rural"],
    includesAttraction: [
      {
        "@type": "TouristAttraction",
        name: "Dique Los Molinos",
        description: "Lago artificial ideal para deportes náuticos y pesca deportiva",
      },
      {
        "@type": "TouristAttraction",
        name: "Polo Cultural Villa del Dique",
        description: "Centro cultural con anfiteatro y Casa de la Cultura",
      },
    ],
    hasMap: "https://maps.google.com/?q=Villa+del+Dique,+Córdoba,+Argentina",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://www.villadeldique.com.ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Turismo",
          item: "https://www.villadeldique.com.ar/turismo",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tourismSchema),
        }}
      />

      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <HeroBanner />

        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
              {"Turismo en Villa del Dique"}
            </h1>
            <p className="font-sans text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {
                "Descubre los mejores destinos, actividades y experiencias que Villa del Dique tiene para ofrecerte. Tu guía completa para disfrutar al máximo de este hermoso lugar."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto mb-12">
              <a
                href="https://share.google/sxa7VaaMyhSXnTF1g"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-brand-navy/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-center"
                aria-label="Información turística oficial de Villa del Dique"
              >
                Información Turística Oficial
              </a>
              <a
                href="https://www.villadeldique.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow text-brand-navy px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-brand-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-center"
                aria-label="Visitar sitio de la Asociación de Comercio de Villa del Dique"
              >
                Asociación de Comercio
              </a>
            </div>

            <div className="mb-12">
              <div className="aspect-video max-w-4xl mx-auto mb-6">
                <iframe
                  src="https://www.youtube.com/embed/_6DiCaH26ns"
                  title="Villa del Dique - Conociendo Lugares"
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="conociendo-lugares">
                    <AccordionTrigger className="text-lg font-semibold">
                      Conociendo Lugares - Redes Sociales
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                          href="https://facebook.com/Clugares"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          <span className="font-medium">Facebook</span>
                        </a>
                        <a
                          href="https://instagram.com/conociendo_lugares"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className="font-medium">Instagram</span>
                        </a>
                        <a
                          href="https://ar.pinterest.com/conociendolugares"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.372 0 12.017 0 16.4 2.331 20.027 5.686 21.606c-.069-.6-.133-1.522.028-2.178.145-.614.933-3.95.933-3.95s-.238-.479-.238-1.187c0-1.111.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 01.056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12.013 12.013 0 0012 24c6.624 0 12-5.373 12-11.983C24 5.372 18.626.001 12.001.001z" />
                          </svg>
                          <span className="font-medium">Pinterest</span>
                        </a>
                        <a
                          href="https://youtube.com/@ConociendoLugares?sub_confirmation=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span className="font-medium">YouTube</span>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mb-12">
              <div className="aspect-video max-w-4xl mx-auto mb-6">
                <iframe
                  src="https://www.youtube.com/embed/02sNYbNvr8c"
                  title="Villa del Dique - Facundo Perez"
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="facundo-perez">
                    <AccordionTrigger className="text-lg font-semibold">
                      Facundo Perez - Redes Sociales
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                          href="https://instagram.com/faqu_perez"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className="font-medium">Instagram</span>
                        </a>
                        <a
                          href="https://a.co/d/2irFtsV"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                          <span className="font-medium">Mi Libro</span>
                        </a>
                        <a
                          href="https://tiktok.com/@faquperez"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                          <span className="font-medium">TikTok</span>
                        </a>
                        <a
                          href="https://facebook.com/faqkpo.perez"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          <span className="font-medium">Facebook</span>
                        </a>
                        <a
                          href="https://faqundoperez.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 13.8h-5.568V24h-2.4V13.8H4.432V11.4H9.6V8.4c0-1.326 1.074-2.4 2.4-2.4h2.4c1.326 0 2.4 1.074 2.4 2.4v3h-2.4V9.6h-1.2v1.8h3.768v2.4z" />
                          </svg>
                          <span className="font-medium">Página Web</span>
                        </a>
                        <a
                          href="https://www.youtube.com/@faqundoperez"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span className="font-medium">YouTube</span>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-2xl font-bold text-center text-gray-900 mb-6">
                  Clima en Villa del Dique
                </h2>
                <div className="flex justify-center">
                  <div id="mrwidbc29e125abf9a4d7a3cb8098f63d5627" className="w-full max-w-md">
                    <script
                      type="text/javascript"
                      async
                      src="https://api.meteored.com/widget/loader/bc29e125abf9a4d7a3cb8098f63d5627"
                    ></script>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="font-sans text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Encuentra información sobre negocios, servicios, capacitaciones, eventos y todo lo que necesitas para
                disfrutar de Villa del Dique.
              </p>
            </div>
          </div>
        </section>

        <MainAdvertisingCarousel />
      </main>
      <Footer />
    </div>
  )
}
