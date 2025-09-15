import type { Metadata } from "next"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import MainAdvertisingCarousel from "@/components/main-advertising-carousel"
import Footer from "@/components/footer"

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

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-brand-navy/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-center"
                aria-label="Visitar sitio oficial de turismo de Villa del Dique"
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
