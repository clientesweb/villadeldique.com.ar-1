import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Licencia MIT | Villa del Dique Digital",
  description:
    "Licencia MIT del sitio web Villa del Dique Digital. Información sobre los derechos de uso y distribución del código fuente.",
  keywords: "licencia MIT, código abierto, Villa del Dique, open source",
  openGraph: {
    title: "Licencia MIT | Villa del Dique Digital",
    description: "Licencia MIT del sitio web Villa del Dique Digital.",
    url: "https://www.villadeldique.com.ar/licencia",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/contacto-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Licencia MIT",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licencia MIT | Villa del Dique Digital",
    description: "Licencia MIT del sitio web Villa del Dique Digital.",
    images: ["/images/og/contacto-og-image.jpg"],
  },
}

export default function LicenciaPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Licencia MIT</h1>
          <p className="text-gray-600">Common Creator License</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">MIT License</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Copyright (c) 2024 Villa del Dique Digital</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
              associated documentation files (the "Software"), to deal in the Software without restriction, including
              without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
              following conditions:
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The above copyright notice and this permission notice shall be included in all copies or substantial
              portions of the Software.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
              EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
              IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
              THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Qué significa esto?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Licencia MIT es una licencia de software libre permisiva que permite:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Uso comercial:</strong> Puedes usar este software para propósitos comerciales
              </li>
              <li>
                <strong>Modificación:</strong> Puedes modificar el software según tus necesidades
              </li>
              <li>
                <strong>Distribución:</strong> Puedes distribuir copias del software original o modificado
              </li>
              <li>
                <strong>Uso privado:</strong> Puedes usar y modificar el software de forma privada
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Condiciones</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Incluir licencia y copyright:</strong> Debes incluir la licencia y el aviso de copyright en
                todas las copias
              </li>
              <li>
                <strong>Sin garantía:</strong> El software se proporciona "tal como está", sin garantías
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Créditos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este sitio web fue desarrollado como parte del proyecto Villa del Dique Digital, con el objetivo de crear
              una plataforma informativa para la comunidad de Villa del Dique.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Desarrollado por:</strong>{" "}
              <a
                href="https://www.dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Duality Domain
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
