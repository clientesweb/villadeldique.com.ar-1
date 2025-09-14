"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface AdBanner {
  id: string
  name: string
  image: string
  alt: string
  link?: string
  whatsapp?: string
}

interface AdvertisingCarouselProps {
  banners: AdBanner[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function AdvertisingCarousel({
  banners = [],
  autoPlay = true,
  interval = 5000,
  className = "",
}: AdvertisingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!banners || banners.length === 0) {
      return
    }

    if (!autoPlay || banners.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, banners])

  const handleBannerClick = (banner: AdBanner) => {
    if (banner.whatsapp) {
      window.open(`https://wa.me/${banner.whatsapp}`, "_blank")
    } else if (banner.link) {
      window.open(banner.link, "_blank")
    }
  }

  return (
    <div className={`relative w-full max-w-[728px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="relative h-[90px] sm:h-[100px] md:h-[110px] lg:h-[120px]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              onClick={() => handleBannerClick(banner)}
              className={`block w-full h-full ${banner.whatsapp || banner.link ? "cursor-pointer" : ""}`}
            >
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 728px, 728px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
