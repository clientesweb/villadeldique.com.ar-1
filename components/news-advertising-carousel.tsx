import AdvertisingCarousel from "./advertising-carousel"

const newsBanners = [
  {
    id: "adobe-creative",
    name: "Adobe Creative Suite",
    image: "/images/banners/adobe-banner.jpg",
    alt: "Adobe - 60% de descuento para profesores y estudiantes",
    whatsapp: "5493516123456", // Added WhatsApp number for Adobe banner
  },
  {
    id: "odal-indumentaria",
    name: "ODAL Indumentaria",
    image: "/images/banners/odal-indumentaria.jpg",
    alt: "ODAL - Indumentaria y moda",
    whatsapp: "5493516654321", // Added WhatsApp numbers for all banners
  },
  {
    id: "desafio-cerro-lago",
    name: "Desafío Cerro Lago",
    image: "/images/banners/desafio-cerro-lago.jpg",
    alt: "Desafío Cerro Lago - Aventura y turismo",
    whatsapp: "5493516789012",
  },
  {
    id: "todo-pino-mendez",
    name: "Todo Pino Méndez",
    image: "/images/banners/todo-pino-mendez.jpg",
    alt: "Todo Pino Méndez - Muebles de pino",
    whatsapp: "5493516345678",
  },
  {
    id: "rincon-natural",
    name: "Rincón Natural",
    image: "/images/banners/rincon-natural.jpg",
    alt: "Rincón Natural - Productos naturales",
    whatsapp: "5493516901234",
  },
  {
    id: "namaskar",
    name: "Namaskar",
    image: "/images/banners/namaskar.jpg",
    alt: "Namaskar - Bienestar y relajación",
    whatsapp: "5493516567890",
  },
]

export default function NewsAdvertisingCarousel() {
  return (
    <div className="my-8">
      <AdvertisingCarousel banners={newsBanners} autoPlay={true} interval={6000} />
    </div>
  )
}
