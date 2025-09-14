import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"

export const metadata: Metadata = {
  title: "Contacto - Villa del Dique Digital | Envía tu Noticia",
  description:
    "Contacta con Villa del Dique Digital. Envía tu noticia, promociona tu negocio o comparte información de interés para la comunidad de Villa del Dique, Córdoba.",
  keywords: [
    "contacto Villa del Dique Digital",
    "enviar noticia Villa del Dique",
    "promocionar negocio Villa del Dique",
    "información Villa del Dique",
    "comunicación Villa del Dique",
    "prensa local Córdoba",
    "medios Villa del Dique",
    "noticias locales",
    "emprendimientos Villa del Dique",
    "eventos Villa del Dique",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto - Villa del Dique Digital",
    description:
      "Contacta con Villa del Dique Digital. Envía tu noticia, promociona tu negocio o comparte información de interés para la comunidad.",
    url: "https://www.villadeldique.com.ar/contacto",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/logo-villa-del-dique-digital.webp",
        width: 1200,
        height: 630,
        alt: "Contacto Villa del Dique Digital - Envía tu noticia",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Villa del Dique Digital",
    description: "Contacta con Villa del Dique Digital. Envía tu noticia o promociona tu negocio en nuestra comunidad.",
    images: ["/images/logo-villa-del-dique-digital.webp"],
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

export default function ContactoPage() {
  return <ContactoClientPage />
}
