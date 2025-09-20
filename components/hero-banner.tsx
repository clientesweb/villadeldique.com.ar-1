"use client"

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
              className="font-sans text-base md:text-lg lg:text-xl leading-relaxed"
              style={{
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.7)",
              }}
            >
              Últimas noticias, descubre los mejores destinos turísticos y contacta con los negocios locales de Dilla
              Del Dique y todo el Valle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
