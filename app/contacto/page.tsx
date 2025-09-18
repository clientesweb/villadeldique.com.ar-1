import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"

export const metadata: Metadata = {
  title: "Contacto - Villa del Dique Digital | Envía tu Noticia y Promociona tu Negocio",
  description:
    "Contacta con Villa del Dique Digital, el portal de noticias más confiable de Villa del Dique, Córdoba. Envía tu noticia, promociona tu negocio local, comparte eventos o información de interés para la comunidad. Cobertura periodística profesional.",
  keywords: [
    "contacto Villa del Dique Digital",
    "enviar noticia Villa del Dique",
    "promocionar negocio Villa del Dique",
    "información Villa del Dique",
    "comunicación Villa del Dique",
    "prensa local Córdoba",
    "medios Villa del Dique",
    "noticias locales Villa del Dique",
    "emprendimientos Villa del Dique",
    "eventos Villa del Dique",
    "cobertura periodística Villa del Dique",
    "portal noticias Villa del Dique",
    "medio digital Villa del Dique",
    "publicidad Villa del Dique",
    "marketing local Villa del Dique",
    "difusión Villa del Dique",
    "comunicación comunitaria",
    "prensa Villa del Dique",
    "periodismo local Córdoba",
    "Villa del Dique Digital contacto",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto - Villa del Dique Digital | Portal de Noticias Locales",
    description:
      "Contacta con Villa del Dique Digital. Envía tu noticia, promociona tu negocio local o comparte información de interés para la comunidad de Villa del Dique.",
    url: "https://www.villadeldique.com.ar/contacto",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/contacto-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Villa del Dique Digital - Envía tu noticia y promociona tu negocio",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Villa del Dique Digital",
    description: "Contacta con Villa del Dique Digital. Envía tu noticia o promociona tu negocio en nuestra comunidad.",
    images: ["/images/og/contacto-og-image.jpg"],
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
    "contact.email": "villadeldiquedigital@gmail.com",
    "contact.phone": "+54-3546-533050",
    "business.contact_data.street_address": "Villa del Dique",
    "business.contact_data.locality": "Villa del Dique",
    "business.contact_data.region": "Córdoba",
    "business.contact_data.postal_code": "5194",
    "business.contact_data.country_name": "Argentina",
  },
}

export default function ContactoPage() {
  return <ContactoClientPage />
}
