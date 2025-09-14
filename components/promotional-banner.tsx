import Image from "next/image"

export default function PromotionalBanner() {
  return (
    <section className="relative">
      <Image
        src="/images/banner-promocional-villa-del-dique-digital.webp"
        alt="¿Querés anunciar tu negocio? Contáctanos - Villa del Dique Digital"
        width={1920}
        height={200}
        className="w-full h-24 md:h-32 lg:h-40 object-cover"
        priority
      />
    </section>
  )
}
