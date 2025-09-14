"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function AnnouncementBar() {
  const messages = ["¡Promociona tu negocio!", "Descubrí Villa del Dique", "Proximamente en Streaming"]

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="bg-announcement border-b border-white/10 py-2 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Rotating messages */}
          <div className="flex-1 overflow-hidden">
            <div
              className={`text-white font-sans text-sm md:text-base font-medium transition-all duration-300 transform ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              }`}
            >
              {messages[currentMessageIndex]}
            </div>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="mailto:villadeldiquedigital@gmail.com"
              className="text-white/80 hover:text-brand-yellow transition-colors duration-200 group"
            >
              <Image
                src="/images/email-official.png"
                alt="Email"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </Link>
            <Link
              href="https://wa.me/3546533050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-brand-yellow transition-colors duration-200 group"
            >
              <Image
                src="/images/whatsapp-official.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </Link>
            <Link
              href="https://www.instagram.com/villadeldique.com.ar?igsh=MWQ1ZHI3aDQ1bjNmbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-brand-yellow transition-colors duration-200 group"
            >
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
