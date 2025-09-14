import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Villa del Dique Digital - Noticias, Turismo y Negocios",
  description:
    "Portal digital oficial de Villa del Dique, Córdoba. Noticias locales, información turística, directorio de negocios y eventos de la comunidad. Tu fuente confiable de información sobre Villa del Dique.",
  keywords: [
    "Villa del Dique",
    "Villa del Dique Córdoba",
    "noticias Villa del Dique",
    "turismo Villa del Dique",
    "negocios Villa del Dique",
    "eventos Villa del Dique",
    "Córdoba Argentina",
    "lago Villa del Dique",
    "dique Los Molinos",
    "Calamuchita",
    "portal digital",
    "información local",
    "comunidad",
    "cultura Villa del Dique",
    "emprendimientos locales",
    "bomberos voluntarios",
    "polo cultural",
    "anfiteatro Villa del Dique",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Villa del Dique Digital - Portal Oficial de Noticias y Turismo",
    description:
      "Portal digital oficial de Villa del Dique, Córdoba. Noticias locales, turismo, negocios y eventos de la comunidad.",
    url: "https://www.villadeldique.com.ar",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Portal Oficial",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique Digital - Portal Oficial",
    description: "Noticias, turismo y negocios de Villa del Dique, Córdoba, Argentina",
    images: ["/images/og/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code", // Placeholder for Google verification code
  },
  generator: "Next.js",
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

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo-villa-del-dique-digital.webp" as="image" type="image/webp" />

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
                  alternateName: "VDD Digital",
                  url: "https://www.villadeldique.com.ar",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
                    width: 400,
                    height: 200,
                  },
                  description:
                    "Portal digital oficial de Villa del Dique, Córdoba. Noticias locales, turismo, negocios y eventos.",
                  foundingDate: "2025",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                    postalCode: "5194",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+54-3546-533050",
                    contactType: "customer service",
                    availableLanguage: "Spanish",
                    email: "villadeldiquedigital@gmail.com",
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
                  },
                  knowsAbout: [
                    "Villa del Dique",
                    "Turismo Córdoba",
                    "Noticias locales",
                    "Dique Los Molinos",
                    "Valle de Calamuchita",
                    "Emprendimientos locales",
                    "Cultura Villa del Dique",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.villadeldique.com.ar/#website",
                  url: "https://www.villadeldique.com.ar",
                  name: "Villa del Dique Digital",
                  description:
                    "Portal digital oficial de Villa del Dique, Córdoba. Noticias locales, información turística, directorio de negocios y eventos de la comunidad.",
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
                },
                {
                  "@type": "TouristDestination",
                  "@id": "https://www.villadeldique.com.ar/#destination",
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
                },
              ],
            }),
          }}
        />
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

        <Analytics />
        <SpeedInsights />

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded-md z-50 focus-ring"
        >
          Saltar al contenido principal
        </a>
      </body>
    </html>
  )
}
