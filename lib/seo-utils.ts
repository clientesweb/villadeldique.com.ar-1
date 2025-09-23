import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const baseUrl = "https://www.villadeldique.com.ar"
  const fullUrl = config.url ? `${baseUrl}${config.url}` : baseUrl
  const ogImage = config.image ? `${baseUrl}${config.image}` : `${baseUrl}/images/og-image.jpg`

  return {
    title: `${config.title} | Villa del Dique Digital`,
    description: config.description,
    keywords: [
      ...(config.keywords || []),
      "Villa del Dique",
      "Córdoba",
      "Argentina",
      "Valle de Calamuchita",
      "noticias locales",
    ],
    authors: [{ name: config.author || "Villa del Dique Digital" }],
    creator: "Villa del Dique Digital",
    publisher: "Villa del Dique Digital",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.url || "/",
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: "Villa del Dique Digital",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: "es_AR",
      type: config.type || "website",
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
      ...(config.author && { authors: [config.author] }),
      ...(config.section && { section: config.section }),
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [ogImage],
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
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.villadeldique.com.ar${item.url}`,
    })),
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "NewsMediaOrganization"],
    name: "Villa del Dique Digital",
    description:
      "Portal digital oficial de Villa del Dique, Córdoba, Argentina. Noticias locales, turismo y promoción de negocios.",
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
    areaServed: [
      {
        "@type": "Place",
        name: "Villa del Dique",
      },
      {
        "@type": "Place",
        name: "Valle de Calamuchita",
      },
    ],
    sameAs: ["https://www.instagram.com/villadeldique.com.ar", "https://wa.me/3546533050"],
    logo: {
      "@type": "ImageObject",
      url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
    },
    image: "https://www.villadeldique.com.ar/images/villa-del-dique-hero.jpg",
    priceRange: "Gratis",
    openingHours: "Mo-Su 00:00-23:59",
  }
}

export const defaultKeywords = [
  "Villa del Dique",
  "Villa del Dique Córdoba",
  "Villa del Dique Argentina",
  "noticias Villa del Dique",
  "turismo Villa del Dique",
  "Valle de Calamuchita",
  "Dique Los Molinos",
  "Córdoba Argentina",
  "noticias locales",
  "emprendimientos Villa del Dique",
  "comercios Villa del Dique",
  "eventos Villa del Dique",
]
