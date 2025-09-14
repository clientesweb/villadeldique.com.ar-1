export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  author: string
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Villa del Dique Digital",
    alternateName: "VDD Digital",
    url: "https://www.villadeldique.com.ar",
    logo: {
      "@type": "ImageObject",
      url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
      width: 400,
      height: 200,
    },
    description: "Portal digital oficial de Villa del Dique, Córdoba. Noticias locales, turismo, negocios y eventos.",
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
    },
    sameAs: [
      "https://www.instagram.com/vivivilladeldique",
      "https://www.villadeldique.org",
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
    publishingPrinciples: "https://www.villadeldique.com.ar/politicas",
    diversityPolicy: "https://www.villadeldique.com.ar/diversidad",
    ethicsPolicy: "https://www.villadeldique.com.ar/etica",
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Villa del Dique Digital",
    url: "https://www.villadeldique.com.ar",
    description:
      "Portal digital oficial de Villa del Dique, Córdoba. Noticias locales, información turística, directorio de negocios y eventos de la comunidad.",
    inLanguage: "es-AR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.villadeldique.com.ar/noticias?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Villa del Dique Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
      },
    },
  }
}

export function generateNewsArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: {
      "@type": "ImageObject",
      url: `https://www.villadeldique.com.ar${article.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Villa del Dique Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
        width: 400,
        height: 200,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.villadeldique.com.ar/noticias/${article.id}`,
    },
    articleSection: article.category,
    keywords: ["Villa del Dique", article.category, "noticias locales", "Córdoba", "Argentina"],
    locationCreated: {
      "@type": "Place",
      name: "Villa del Dique, Córdoba, Argentina",
    },
    about: {
      "@type": "Thing",
      name: "Villa del Dique",
      description: "Localidad de la provincia de Córdoba, Argentina",
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Villa del Dique Digital",
    description: "Portal digital oficial de Villa del Dique. Promoción de negocios locales, noticias y turismo.",
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
    priceRange: "Gratis",
    serviceArea: {
      "@type": "Place",
      name: "Villa del Dique y alrededores",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Villa del Dique Digital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Publicidad Digital",
            description: "Promoción de negocios locales en nuestro portal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cobertura Periodística",
            description: "Noticias y entrevistas para emprendimientos locales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño Web",
            description: "Desarrollo de páginas web para negocios locales",
          },
        },
      ],
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
      item: item.url,
    })),
  }
}

export function generateTouristDestinationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Villa del Dique",
    description:
      "Hermosa localidad turística en Córdoba, Argentina, conocida por su lago, deportes náuticos y naturaleza.",
    url: "https://www.villadeldique.com.ar/turismo",
    image: "https://www.villadeldique.com.ar/images/villa-del-dique-turismo.jpg",
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
  }
}
