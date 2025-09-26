import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "26 de septiembre: Día del Empleado de Comercio | Villa del Dique Digital",
  description:
    "Un homenaje a quienes sostienen el pulso comercial de Villa del Dique. Cada 26 de septiembre se celebra el Día del Empleado de Comercio, reconociendo la labor de quienes mantienen viva la economía local.",
  keywords: [
    "día del empleado de comercio",
    "comercio Villa del Dique",
    "empleados comercio",
    "26 de septiembre",
    "comercio local",
    "Villa del Dique",
    "economía local",
    "trabajadores comercio",
    "Córdoba",
    "Argentina",
    "Ruth Padro",
    "Candela Insaurralde",
  ],
  authors: [{ name: "Candela Insaurralde" }],
  creator: "Candela Insaurralde",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/dia-del-empleado-de-comercio",
  },
  openGraph: {
    title: "26 de septiembre: Día del Empleado de Comercio",
    description:
      "Un homenaje a quienes sostienen el pulso comercial de Villa del Dique. Reconociendo la labor de quienes mantienen viva la economía local.",
    url: "https://www.villadeldique.com.ar/noticias/dia-del-empleado-de-comercio",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-dia-del-comerciante.webp",
        width: 1200,
        height: 630,
        alt: "Día del Empleado de Comercio - Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "26 de septiembre: Día del Empleado de Comercio",
    description: "Un homenaje a quienes sostienen el pulso comercial de Villa del Dique.",
    images: ["/images/portada-dia-del-comerciante.webp"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "26 de septiembre: Día del Empleado de Comercio",
  description:
    "Un homenaje a quienes sostienen el pulso comercial de Villa del Dique. Cada 26 de septiembre se celebra el Día del Empleado de Comercio, reconociendo la labor de quienes mantienen viva la economía local.",
  image: "https://www.villadeldique.com.ar/images/portada-dia-del-comerciante.webp",
  datePublished: "2025-09-26",
  dateModified: "2025-09-26",
  author: {
    "@type": "Person",
    name: "Candela Insaurralde",
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
    "@id": "https://www.villadeldique.com.ar/noticias/dia-del-empleado-de-comercio",
  },
  articleSection: "Comercio",
  keywords: "día del empleado de comercio, comercio Villa del Dique, empleados comercio, economía local",
}

export default function DiaDelEmpleadoDeComercioPage() {
  const articleUrl = "https://www.villadeldique.com.ar/noticias/dia-del-empleado-de-comercio"
  const articleTitle = "26 de septiembre: Día del Empleado de Comercio"

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
              <li className="text-gray-700 font-medium">Día del Empleado de Comercio</li>
            </ol>
          </nav>

          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                Comercio
              </span>
              <time className="text-gray-600 text-sm md:text-base">26 de septiembre de 2025</time>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
              26 de septiembre: Día del Empleado de Comercio
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Un homenaje a quienes sostienen el pulso comercial de Villa del Dique
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/portada-dia-del-comerciante.webp"
              alt="Vista panorámica de Villa del Dique - Día del Empleado de Comercio"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none font-sans text-gray-800 leading-relaxed">
            <p className="text-lg md:text-xl mb-6">
              Cada 26 de septiembre en Argentina se celebra el Día del Empleado de Comercio, jornada dedicada a
              reconocer la labor cotidiana de quienes trabajan en comercios, tiendas, almacenes, servicios al consumidor
              y atención al público en todo el país. Esta fecha se instituyó como un homenaje a la actividad comercial y
              al esfuerzo de quienes mantienen viva la economía local.
            </p>

            <p className="mb-6">
              En Villa del Dique, el comercio local es esencial: cada pequeño negocio, local de barrio o emprendimiento
              contribuye al tejido social y económico del pueblo. En esta jornada, queremos destacar a quienes están
              detrás del mostrador, atendiendo, organizando stock, cobrando, asesorando, decorando vidrieras, haciendo
              pedidos, sirviendo con amabilidad y sosteniendo la actividad comercial en el valle.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/dia-del-comerciante-4.webp"
                  alt="Comercio DODI Drugstore & Vinoteca en Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/dia-del-comerciante-2.webp"
                  alt="Centro comercial con monumento de la mano en Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mb-6">
              Los empleados de comercio enfrentan desafíos especiales: demanda permanente, horarios extendidos, atención
              de turistas y vecinos, adaptación a nuevas tecnologías y expectativas crecientes. En muchos casos, el buen
              funcionamiento del comercio local depende en gran medida del compromiso de estos trabajadores/as.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              El comercio local en Villa del Dique: motor de comunidad
            </h2>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/dia-del-comerciante-3.webp"
                alt="Calle principal con comercios en Villa del Dique"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-6">
              Durante la temporada alta y los momentos de mayor afluencia, los empleados de comercio se transforman en
              embajadores del pueblo: su amabilidad, conocimiento del entorno y recomendaciones locales impactan en la
              experiencia del visitante. Una cadena se inicia desde quien abre la puerta hasta quien cobra y despide con
              una sonrisa.
            </p>

            <p className="mb-6">
              Muchos comercios familiares han pasado generaciones de empleados que ven su lugar de trabajo como parte de
              su identidad. En un pueblo como Villa del Dique, el empleado de comercio vive también la comunidad: conoce
              a los vecinos, participa de eventos locales y muchas veces se convierte en punto de referencia para
              quienes vienen de afuera.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/dia-del-comerciante-7.webp"
                  alt="Feria Artesana en Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/dia-del-comerciante-1.webp"
                  alt="Puente y comercios en Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mb-6">
              Ese vínculo íntimo entre comercio y comunidad convierte cada venta en mucho más que un intercambio: es una
              interacción humana que fortalece lazos. Por eso, en este Día del Empleado de Comercio reconocemos su rol
              como protagonistas silenciosos del desarrollo local.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/dia-del-comerciante-5.webp"
                  alt="Restaurante Tremendas Burgers en Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/dia-del-comerciante-6.webp"
                  alt="Bar y restaurante con clientes en Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Saludo y reconocimiento
            </h2>

            <p className="mb-6">
              A todos los empleados de comercio de Villa del Dique: gracias por su dedicación, constancia y empeño. En
              este día, los invitamos a celebrar su esfuerzo, a visibilizar su trabajo y a reconocer lo importante que
              son para el crecimiento de nuestra localidad.
            </p>

            <p className="mb-8">
              Que este 26 de septiembre sirva para reflexionar sobre condiciones laborales dignas, capacitación para el
              sector, innovación en el comercio local y la necesidad de fortalecer los lazos entre los vecinos y los
              comercios que dan vida al pueblo.
            </p>

            <div className="bg-blue-50 border-l-4 border-brand-blue p-6 my-8">
              <h3 className="font-bold text-lg mb-4 text-brand-navy">Créditos fotográficos:</h3>
              <p className="text-gray-700">
                <strong>Fuente de las imágenes:</strong> Ruth Padro{" "}
                <a
                  href="https://www.instagram.com/raginii_rmp?igsh=bTByYjIza3cxYXFv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-blue-700 font-medium underline"
                >
                  @raginii_rmp
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Autor:</strong> Candela Insaurralde
            </p>

            <ShareButtons
              title={articleTitle}
              url={articleUrl}
              description="Un homenaje a quienes sostienen el pulso comercial de Villa del Dique."
            />
          </div>
        </article>

        <NewsAdvertisingCarousel />

        <NewsBreadcrumbs currentArticleId="dia-del-empleado-de-comercio" currentTitle={articleTitle} />
      </main>

      <Footer />
    </div>
  )
}
