import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-villa-del-dique-digital.webp"
                alt="Villa del Dique Digital"
                width={120}
                height={120}
                className="mr-3 w-auto h-20 md:h-24 object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tu fuente confiable de noticias e información sobre Villa del Dique. Conectando a la comunidad con lo que
              realmente importa.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:villadeldiquedigital@gmail.com"
                className="hover:opacity-80 transition-opacity"
                aria-label="Enviar email"
              >
                <Image src="/images/email-official.png" alt="Email" width={32} height={32} />
              </a>
              <a
                href="https://wa.me/3546533050"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Contactar por WhatsApp"
              >
                <Image src="/images/whatsapp-official.png" alt="WhatsApp" width={32} height={32} />
              </a>
              <a
                href="https://www.instagram.com/villadeldiquedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Seguir en Instagram"
              >
                <Image src="/images/instagram-icon.png" alt="Instagram" width={32} height={32} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/noticias" className="text-gray-200 hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/turismo" className="text-gray-200 hover:text-white transition-colors">
                  Turismo
                </Link>
              </li>
              <li>
                <Link href="/suscribirse" className="text-gray-200 hover:text-white transition-colors">
                  Suscribirse
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Villa del Dique, Córdoba</li>
              <li>
                <a href="mailto:villadeldiquedigital@gmail.com" className="hover:text-white transition-colors">
                  villadeldiquedigital@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/3546533050" className="hover:text-white transition-colors">
                  WhatsApp: 3546533050
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Villa del Dique Digital. Todos los derechos reservados.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <Link href="/terminos" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
                <Link href="/licencia" className="hover:text-white transition-colors">
                  Licencia MIT
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
                >
                  Duality Domain
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
