import AdvertisingCarousel from "./advertising-carousel"

const mainBanners = [
  {
    id: "adobe",
    name: "Adobe Creative Suite",
    image: "/images/banners/adobe-banner.jpg",
    alt: "Adobe Creative Suite - 60% de descuento para profesores y estudiantes",
    link: "https://www.adobe.com/ar/creativecloud/buy/students.html",
  },
  {
    id: "electricidad-vdd",
    name: "Electricidad VDD",
    image: "/images/banners/electricidad-vdd.jpg",
    alt: "Electricidad VDD - Servicios eléctricos en Villa del Dique",
    link: "https://wa.me/5493544123456?text=Hola,%20me%20interesa%20información%20sobre%20servicios%20eléctricos",
  },
  {
    id: "laboratorios-leac",
    name: "Laboratorios LEAC",
    image: "/images/banners/laboratorios-leac.jpg",
    alt: "Laboratorios LEAC - Análisis clínicos",
    link: "https://wa.me/5493544654321?text=Hola,%20necesito%20información%20sobre%20análisis%20clínicos",
  },
  {
    id: "nadivas-estetica",
    name: "Nadivas Estética e Insumos",
    image: "/images/banners/nadivas-estetica.jpg",
    alt: "Nadivas - Estética e insumos de belleza",
    link: "https://wa.me/5493544789012?text=Hola,%20me%20interesa%20información%20sobre%20productos%20de%20estética",
  },
  {
    id: "mendez-muebles",
    name: "Méndez Muebles para el Hogar",
    image: "/images/banners/mendez-muebles.jpg",
    alt: "Méndez - Muebles para el hogar",
    link: "https://wa.me/5493544345678?text=Hola,%20me%20interesa%20información%20sobre%20muebles%20para%20el%20hogar",
  },
]

export default function MainAdvertisingCarousel() {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AdvertisingCarousel banners={mainBanners} autoPlay={true} interval={4000} className="max-w-4xl mx-auto" />
      </div>
    </section>
  )
}
