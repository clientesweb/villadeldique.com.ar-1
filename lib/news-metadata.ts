import type { Metadata } from "next"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  author: string
}

export function generateNewsMetadata(article: NewsArticle): Metadata {
  const ogImageUrl = article.image.startsWith("/") ? `https://www.villadeldique.com.ar${article.image}` : article.image

  return {
    title: `${article.title} | Villa del Dique Digital`,
    description: article.excerpt,
    keywords: [
      article.title.toLowerCase(),
      `${article.category.toLowerCase()} Villa del Dique`,
      "noticias Villa del Dique",
      "información local",
      "Córdoba",
      "Argentina",
      article.author.toLowerCase(),
    ],
    authors: [{ name: article.author }],
    creator: "Villa del Dique Digital",
    publisher: "Villa del Dique Digital",
    metadataBase: new URL("https://www.villadeldique.com.ar"),
    alternates: {
      canonical: `/noticias/${article.id}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.villadeldique.com.ar/noticias/${article.id}`,
      siteName: "Villa del Dique Digital",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "es_AR",
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [ogImageUrl],
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
      "article:author": article.author,
      "article:published_time": article.date,
      "article:section": article.category,
    },
  }
}
