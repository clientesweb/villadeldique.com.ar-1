import AdvertisingCarousel from "./advertising-carousel"

const newsBanners = [
  {
    id: "electricidad-vdd",
    name: "Electricidad Villa del Dique",
    image: "/images/banners/electricidad-vdd.jpg",
    alt: "Electricidad Villa del Dique - Instalaciones en general",
    link: "https://www.instagram.com/electricidadvilladeldiqueok/",
    whatsapp: "5493546534000",
  },
  {
    id: "laboratorios-leac",
    name: "Laboratorios LEAC",
    image: "/images/banners/laboratorios-leac.jpg",
    alt: "Laboratorios LEAC - Análisis clínicos",
    link: "https://www.instagram.com/laboratorioleac/",
  },
  {
    id: "rincon-natural",
    name: "Rincón Natural",
    image: "/images/banners/rincon-natural.jpg",
    alt: "Rincón Natural - Vivi saludable, compra consciente",
    link: "https://www.instagram.com/rn.almacen/",
  },
  {
    id: "nadivas-estetica",
    name: "Nadivas Estética",
    image: "/images/banners/nadivas-estetica-insumos.png",
    alt: "Nadivas - Estética e insumos de belleza",
    link: "https://www.instagram.com/nadivas_/",
  },
  {
    id: "conte-construccion",
    name: "Conte Construcción",
    image: "/images/banners/conte-construccion.jpg",
    alt: "Conte Construcción - Bancor 100% financiada",
    link: "https://www.instagram.com/construccionconte/",
  },
  {
    id: "tucassa-prefabricadas",
    name: "Tu Cassa Prefabricadas",
    image: "/images/banners/tucassa-com-ar.jpg",
    alt: "Tu Cassa Prefabricadas - Nuestra trayectoria nos avala",
    link: "https://www.instagram.com/tucassaprefabricadas/",
  },
  {
    id: "mendez-muebles-hogar",
    name: "Méndez Muebles & Hogar",
    image: "/images/banners/mendez-muebles-hogar.jpg",
    alt: "Méndez Muebles & Hogar - Calidad y diseño",
    whatsapp: "5493546524360",
  },
]

export default function NewsAdvertisingCarousel() {
  return (
    <div className="my-8">
      <AdvertisingCarousel banners={newsBanners} autoPlay={true} interval={6000} />
    </div>
  )
}
