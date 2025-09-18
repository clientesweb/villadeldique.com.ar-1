import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import EmergencyButton from "@/components/emergency-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
})

export const metadata: Metadata = {
  title: "Villa del Dique Digital - Portal de Noticias, Turismo y Negocios",
  description:
    "Portal digital de Villa del Dique, Córdoba, Argentina. Medio de noticias locales actualizadas, información turística completa, directorio de negocios y eventos de la comunidad. La fuente más confiable de información sobre Villa del Dique.",
  keywords: [
    "Villa del Dique",
    "Villa del Dique Córdoba",
    "Villa del Dique Argentina",
    "Villa del Dique noticias",
    "Villa del Dique turismo",
    "Villa del Dique negocios",
    "Villa del Dique eventos",
    "Villa del Dique digital",
    "Villa del Dique portal",
    "Villa del Dique información",
    "Villa del Dique comunidad",
    "noticias Villa del Dique",
    "turismo Villa del Dique",
    "negocios Villa del Dique",
    "eventos Villa del Dique",
    "Córdoba Argentina",
    "lago Villa del Dique",
    "dique Los Molinos",
    "Calamuchita",
    "Valle de Calamuchita",
    "portal digital",
    "información local",
    "comunidad Villa del Dique",
    "cultura Villa del Dique",
    "emprendimientos locales",
    "bomberos voluntarios Villa del Dique",
    "polo cultural Villa del Dique",
    "anfiteatro Villa del Dique",
    "Casa de la Cultura Villa del Dique",
    "deportes náuticos Villa del Dique",
    "pesca deportiva Villa del Dique",
    "turismo familiar Villa del Dique",
    "naturaleza Villa del Dique",
    "actividades Villa del Dique",
    "alojamiento Villa del Dique",
    "gastronomía Villa del Dique",
    "Villa del Dique 5194",
    "Villa del Dique Córdoba Argentina",
    "medio de noticias Villa del Dique",
    "portal noticias Villa del Dique",
    "día del profesor",
    "día del psicopedagogo",
    "educación Villa del Dique",
    "José Manuel Estrada",
    "Jean Piaget",
  ],
  authors: [{ name: "Villa del Dique Digital", url: "https://www.villadeldique.com.ar" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
    },
  },
  openGraph: {
    title: "Villa del Dique Digital - Portal de Villa del Dique, Córdoba",
    description:
      "Portal digital de Villa del Dique, Córdoba, Argentina. Medio de noticias locales, turismo, negocios y eventos de la comunidad. Tu fuente confiable de información sobre Villa del Dique.",
    url: "https://www.villadeldique.com.ar",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Portal de Villa del Dique, Córdoba",
      },
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique - Lago y paisaje natural en Córdoba",
      },
    ],
    locale: "es_AR",
    type: "website",
    countryName: "Argentina",
    region: "Córdoba",
    placeName: "Villa del Dique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique Digital - Portal de Noticias",
    description: "Medio de noticias, turismo y negocios de Villa del Dique, Córdoba, Argentina. Portal digital.",
    images: ["/images/og-image.jpg"],
    site: "@villadeldique.com.ar",
    creator: "@dualitydomain",
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
  category: "Local News and Tourism",
  classification: "Portal de noticias y turismo local",
  verification: {
    google: "google45fe8791982d4a42", // Replace with your actual Google Search Console verification code
  },
  generator: "Next.js",
  applicationName: "Villa del Dique Digital",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: "#050a30",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#050a30" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Villa del Dique" />
        <meta name="geo.position" content="-32.1833;-64.4833" />
        <meta name="ICBM" content="-32.1833, -64.4833" />
        <meta name="DC.title" content="Villa del Dique Digital - Portal de Noticias" />
        <meta name="DC.creator" content="Villa del Dique Digital" />
        <meta name="DC.subject" content="Villa del Dique, noticias, turismo, Córdoba, Argentina" />
        <meta name="DC.description" content="Portal digital de Villa del Dique, Córdoba, Argentina" />
        <meta name="DC.publisher" content="Villa del Dique Digital" />
        <meta name="DC.contributor" content="Comunidad Villa del Dique" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.villadeldique.com.ar" />
        <meta name="DC.language" content="es-AR" />
        <meta name="DC.coverage" content="Villa del Dique, Córdoba, Argentina" />
        <meta name="DC.rights" content="© 2024 Villa del Dique Digital" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/og-image.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/villa-del-dique-lago.webp" as="image" type="image/webp" />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: 'Villa del Dique Digital',
                    custom_map: {'custom_parameter_1': 'villa_del_dique_page'}
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <Suspense
          fallback={
            <div
              className="min-h-screen bg-white flex items-center justify-center"
              role="status"
              aria-label="Cargando contenido"
            >
              <div className="animate-pulse text-center">
                <div className="h-8 bg-gray-200 rounded w-48 mb-4 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          }
        >
          <div className="min-h-screen flex flex-col">{children}</div>
        </Suspense>

        <EmergencyButton />

        <SpeedInsights />

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded-md z-50 focus-ring"
        >
          Saltar al contenido principal
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "NewsMediaOrganization",
                  "@id": "https://www.villadeldique.com.ar/#organization",
                  name: "Villa del Dique Digital",
                  alternateName: ["VDD Digital", "Portal Villa del Dique", "Villa del Dique Noticias"],
                  url: "https://www.villadeldique.com.ar",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
                    width: 400,
                    height: 200,
                  },
                  description:
                    "Portal digital de Villa del Dique, Córdoba, Argentina. Medio de noticias locales más confiable, información turística y directorio de negocios.",
                  foundingDate: "2024",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Villa del Dique",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                    postalCode: "5194",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+54-3546-533050",
                    contactType: "customer service",
                    availableLanguage: ["Spanish", "es"],
                    email: "villadeldiquedigital@gmail.com",
                    areaServed: "Villa del Dique, Córdoba, Argentina",
                  },
                  sameAs: [
                    "https://www.instagram.com/villadeldique.com.ar",
                    "https://www.villadeldique.com.ar",
                    "https://wa.me/3546533050",
                  ],
                  areaServed: {
                    "@type": "Place",
                    name: "Villa del Dique, Córdoba, Argentina",
                    geo: {
                      "@type": "GeoCoordinates",
                      latitude: -32.1833,
                      longitude: -64.4833,
                    },
                    containedInPlace: {
                      "@type": "Place",
                      name: "Valle de Calamuchita, Córdoba, Argentina",
                    },
                  },
                  knowsAbout: [
                    "Villa del Dique",
                    "Villa del Dique Córdoba",
                    "Villa del Dique Argentina",
                    "Turismo Villa del Dique",
                    "Noticias Villa del Dique",
                    "Dique Los Molinos",
                    "Valle de Calamuchita",
                    "Emprendimientos Villa del Dique",
                    "Cultura Villa del Dique",
                    "Deportes náuticos",
                    "Turismo Córdoba",
                    "Bomberos Voluntarios Villa del Dique",
                    "Polo Cultural Villa del Dique",
                    "Anfiteatro Villa del Dique",
                    "Casa de la Cultura",
                    "Pesca deportiva",
                    "Turismo familiar",
                    "Naturaleza Córdoba",
                  ],
                  publishingPrinciples: "https://www.villadeldique.com.ar/terminos",
                  actionableFeedbackPolicy: "https://www.villadeldique.com.ar/contacto",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.villadeldique.com.ar/#website",
                  url: "https://www.villadeldique.com.ar",
                  name: "Villa del Dique Digital",
                  alternateName: "Portal Villa del Dique",
                  description:
                    "Portal digital de Villa del Dique, Córdoba, Argentina. Medio de noticias locales, información turística, directorio de negocios y eventos de la comunidad.",
                  inLanguage: "es-AR",
                  publisher: {
                    "@id": "https://www.villadeldique.com.ar/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://www.villadeldique.com.ar/noticias?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                  mainEntity: {
                    "@id": "https://www.villadeldique.com.ar/#destination",
                  },
                },
                {
                  "@type": "TouristDestination",
                  "@id": "https://www.villadeldique.com.ar/#destination",
                  name: "Villa del Dique",
                  alternateName: ["Villa del Dique Córdoba", "Villa del Dique Argentina"],
                  description:
                    "Hermosa localidad turística en el Valle de Calamuchita, Córdoba, Argentina. Conocida por su lago, deportes náuticos, naturaleza y tranquilidad familiar.",
                  url: "https://www.villadeldique.com.ar/turismo",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                    postalCode: "5194",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -32.1833,
                    longitude: -64.4833,
                  },
                  touristType: [
                    "Turismo familiar",
                    "Turismo de naturaleza",
                    "Deportes náuticos",
                    "Turismo rural",
                    "Turismo de aventura",
                    "Pesca deportiva",
                    "Turismo cultural",
                  ],
                  includesAttraction: [
                    {
                      "@type": "TouristAttraction",
                      name: "Dique Los Molinos",
                      description:
                        "Lago artificial ideal para deportes náuticos, pesca deportiva y actividades familiares",
                      geo: {
                        "@type": "GeoCoordinates",
                        latitude: -32.1833,
                        longitude: -64.4833,
                      },
                    },
                    {
                      "@type": "TouristAttraction",
                      name: "Polo Cultural Villa del Dique",
                      description: "Centro cultural con anfiteatro, Casa de la Cultura y espacios para eventos",
                    },
                    {
                      "@type": "TouristAttraction",
                      name: "Anfiteatro Villa del Dique",
                      description: "Espacio cultural al aire libre para espectáculos y eventos comunitarios",
                    },
                  ],
                  availableLanguage: "es",
                  currenciesAccepted: "ARS",
                  paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.villadeldique.com.ar/#localbusiness",
                  name: "Villa del Dique Digital",
                  description: "Portal digital de Villa del Dique con noticias, turismo y negocios locales",
                  url: "https://www.villadeldique.com.ar",
                  telephone: "+54-3546-533050",
                  email: "villadeldiquedigital@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                    postalCode: "5194",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -32.1833,
                    longitude: -64.4833,
                  },
                  openingHours: "Mo-Su 00:00-23:59",
                  serviceArea: {
                    "@type": "Place",
                    name: "Villa del Dique, Valle de Calamuchita, Córdoba, Argentina",
                  },
                  priceRange: "Gratis",
                  currenciesAccepted: "ARS",
                  paymentAccepted: "No aplica",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
