"use client"

import { useState } from "react"

export default function PromotionalBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <>
      <section className="py-6 px-4 bg-brand-navy">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            <div className="text-left flex-1">
              <h2 className="font-serif text-xl md:text-2xl font-bold mb-2 text-white">
                ¡Colaborá con los Bomberos Voluntarios!
              </h2>
              <p className="font-sans text-sm md:text-base leading-relaxed text-white">
                Tu aporte ayuda a sostener su labor y a proteger a toda la comunidad.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 flex-shrink-0 text-brand-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-white">Donar</h3>
                    <p className="font-sans text-xs text-white">Información de donación</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-brand-navy rounded-xl p-6 border border-white/10 shadow-xl max-w-md w-full relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="font-serif text-xl font-bold text-white mb-2">Información de Donación</h3>
              <p className="font-sans text-sm text-white/80">Bomberos Voluntarios de Villa del Dique</p>
            </div>

            <div className="space-y-4">
              <div className="bg-black/20 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-semibold text-brand-yellow">Alias:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm text-white">bomberos.villa.dique</span>
                    <button
                      onClick={() => copyToClipboard("bomberos.villa.dique")}
                      className="p-1 rounded hover:bg-white/10 transition-colors"
                      title="Copiar alias"
                    >
                      {copySuccess ? (
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-sm space-y-2 text-white">
                  <div>
                    <span className="font-semibold text-brand-yellow">Nombre:</span> Sociedad De Bomberos Voluntarios De
                    Villa
                  </div>
                  <div>
                    <span className="font-semibold text-brand-yellow">CUIT/CUIL:</span> 30-66868497-8
                  </div>
                  <div>
                    <span className="font-semibold text-brand-yellow">Entidad:</span> Mercado Pago
                  </div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/bomberosvilladeldique?igsh=dWMxZ3B3ZjB1cDlp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-sans font-bold text-sm hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full justify-center bg-brand-yellow text-brand-navy"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Seguir en Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
