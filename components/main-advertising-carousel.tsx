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
    id: "aca-ypf-vdd",
    name: "ACA YPF Villa del Dique",
    image: "/images/banners/aca-ypf-vdd.webp",
    alt: "ACA YPF Villa del Dique - ¡Asociate al mejor club!",
    link: "https://www.instagram.com/aca.ypf.vdd/",
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
    image: "/images/banners/mendez-muebles-hogar.webp",
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
    id: "namaskar-centro-holistico",
    name: "Namaskar Centro Holístico",
    image: "/images/banners/namaskar-centro-holistico.webp",
    alt: "Namaskar Centro Holístico - www.namaskar.com.ar",
    link: "https://www.namaskar.com.ar",
  },
  {
    id: "pasion-y-vinos",
    name: "Pasión & Vinos",
    image: "/images/banners/pasion-y-vinos.webp",
    alt: "Pasión & Vinos - @pasionyvinos_ok",
    link: "https://www.instagram.com/pasionyvinos_ok/",
    whatsapp: "5493546566391",
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
    id: "psiquiatria-dra-josefina-pernas",
    name: "Psiquiatría Dra. Josefina Pernas",
    image: "/images/banners/psiquiatria-dra-josefina-pernas.webp",
    alt: "Psiquiatría - www.drajosefinapernas.com",
    link: "https://www.drajosefinapernas.com",
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
