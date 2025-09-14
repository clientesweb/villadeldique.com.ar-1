import AdvertisingCarousel from "./advertising-carousel"

const mainBanners = [
  {
    id: "electricidad-vdd",
    name: "Electricidad Villa del Dique",
    image: "/images/banners/electricidad-vdd.webp",
    alt: "Electricidad Villa del Dique - Instalaciones en general",
    link: "https://www.instagram.com/electricidadvilladeldiqueok/",
    whatsapp: "5493546534000",
  },
  {
    id: "laboratorios-leac",
    name: "Laboratorios LEAC",
    image: "/images/banners/laboratorios-leac.webp",
    alt: "Laboratorios LEAC - Análisis clínicos especializados",
    link: "https://www.instagram.com/laboratorioleac/",
  },
 {
    id: "mendez-muebles-hogar",
    name: "Mendez Muebles Hogar",
    image: "/images/banners/mendez-muebles-hogar.jpg",
    alt: "Mueblería, hogar, Deco, todo pino y más",
    link: "https://www.instagram.com/mendezmuebleshogar/",
  },
  {
    id: "rincon-natural",
    name: "Rincón Natural",
    image: "/images/banners/rincon-natural.webp",
    alt: "Rincón Natural - Vivi saludable, compra consciente",
    link: "https://www.instagram.com/rn.almacen/",
  },
  {
    id: "nadivas-estetica",
    name: "Nadivas Estética",
    image: "/images/banners/nadivas-estetica.webp",
    alt: "Nadivas - Estética e insumos de belleza",
    link: "https://www.instagram.com/nadivas_/",
  },
  {
    id: "conte-construccion",
    name: "Conte Construcción",
    image: "/images/banners/conte-construccion.webp",
    alt: "Conte Construcción - Bancor 100% financiada",
    link: "https://www.instagram.com/construccionconte/",
  },
  {
    id: "tucassa-prefabricadas",
    name: "Tu Cassa Prefabricadas",
    image: "/images/banners/tu-cassa.webp",
    alt: "Tu Cassa Prefabricadas - Nuestra trayectoria nos avala",
    link: "https://www.instagram.com/tucassaprefabricadas/",
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
