"use client"

import Link from "next/link"

export default function HeroBanner() {
  return (
    <section className="relative">
      <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banner-principal-desktop.webp')",
          }}
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        >
          <source src="https://www.dualitydomain.com/banner-principal-fondo-desktop-mobile.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                color: "#ffffff",
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              Noticias, Turismo y Negocios
            </h1>
            <p
              className="font-sans text-base md:text-lg lg:text-xl leading-relaxed mb-6"
              style={{
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.7)",
              }}
            >
              Últimas noticias, descubre los mejores destinos turísticos y contacta con los negocios locales de Villa
              del Dique y El Valle.
            </p>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-brand-navy font-sans font-bold text-sm md:text-base rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                textShadow: "none",
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Conocenos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
