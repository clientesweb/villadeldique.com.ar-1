import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Villa del Dique Digital",
            description:
              "Portal digital de Villa del Dique - Noticias, turismo e información local del Valle de Calamuchita",
            url: "https://www.villadeldique.com.ar",
            logo: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54-3546-533050",
              contactType: "customer service",
              email: "villadeldiquedigital@gmail.com",
              areaServed: "Villa del Dique, Valle de Calamuchita, Córdoba, Argentina",
              availableLanguage: "Spanish",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Villa del Dique",
              addressRegion: "Córdoba",
              addressCountry: "AR",
            },
            sameAs: ["https://www.instagram.com/villadeldiquedigital"],
            areaServed: {
              "@type": "Place",
              name: "Villa del Dique, Valle de Calamuchita, Córdoba, Argentina",
            },
          }),
        }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-villa-del-dique-digital.webp"
                alt="Villa del Dique Digital - Portal de noticias y turismo"
                width={120}
                height={120}
                className="mr-3 w-auto h-20 md:h-24 object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Villa del Dique Digital</strong> - Portal de noticias e información sobre Villa del Dique y El
              Valle de Calamuchita, Córdoba. Conectando a la comunidad con turismo, cultura, emprendimientos y todo lo
              que hace vibrar a nuestra región.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:villadeldiquedigital@gmail.com"
                className="hover:opacity-80 transition-opacity"
                aria-label="Enviar email a Villa del Dique Digital"
                title="Contacto por email - Villa del Dique Digital"
              >
                <Image src="/images/email-official.png" alt="Email Villa del Dique Digital" width={32} height={32} />
              </a>
              <a
                href="https://www.instagram.com/villadeldiquedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Seguir en Instagram a Villa del Dique Digital"
                title="Instagram Villa del Dique Digital"
              >
                <Image
                  src="/images/instagram-icon.png"
                  alt="Instagram Villa del Dique Digital"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Secciones</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-200 hover:text-white transition-colors"
                  title="Noticias de Villa del Dique y Valle de Calamuchita"
                >
                  Noticias Locales
                </Link>
              </li>
              <li>
                <Link
                  href="/turismo"
                  className="text-gray-200 hover:text-white transition-colors"
                  title="Turismo en Villa del Dique - Guía completa"
                >
                  Turismo Villa del Dique
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-200 hover:text-white transition-colors"
                  title="Conocé Villa del Dique Digital"
                >
                  Conocenos
                </Link>
              </li>
              <li>
                <Link
                  href="/suscribirse"
                  className="text-gray-200 hover:text-white transition-colors"
                  title="Promocioná tu negocio en Villa del Dique"
                >
                  Promocioná tu Negocio
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-200 hover:text-white transition-colors"
                  title="Contacto Villa del Dique Digital"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Villa del Dique</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <strong>Ubicación:</strong> Villa del Dique, Córdoba
              </li>
              <li>
                <strong>Región:</strong> Valle de Calamuchita
              </li>
              <li>
                <a
                  href="mailto:villadeldiquedigital@gmail.com"
                  className="hover:text-white transition-colors"
                  title="Email Villa del Dique Digital"
                >
                  villadeldiquedigital@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>
                © 2024 Villa del Dique Digital - Portal de noticias, turismo y comercios de Villa del Dique, Córdoba,
                Argentina. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <Link
                  href="/terminos"
                  className="hover:text-white transition-colors"
                  title="Términos y Condiciones Villa del Dique Digital"
                >
                  Términos y Condiciones
                </Link>
                <Link
                  href="/politica-privacidad"
                  className="hover:text-white transition-colors"
                  title="Política de Privacidad Villa del Dique Digital"
                >
                  Política de Privacidad
                </Link>
                <Link
                  href="/licencia"
                  className="hover:text-white transition-colors"
                  title="Licencia Creative Commons Villa del Dique Digital"
                >
                  Licencia
                </Link>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p>
                Sitio desarrollado por{" "}
                <a
                  href="https://www.dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:underline font-medium"
                  title="Desarrollo web Duality Domain"
                >
                  Duality Domain
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-1">Medio digital local - Villa del Dique, Córdoba, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
