"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = [
    { href: "/", label: "Noticias" },
    { href: "/turismo", label: "Turismo" },
    { href: "/suscribirse", label: "Suscribirse" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="bg-brand-navy py-4 md:py-6 px-4 md:px-6 lg:px-8 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile hamburger menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 hover:text-brand-yellow transition-colors duration-200 order-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 order-1">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-white hover:text-brand-yellow transition-colors duration-200 text-base font-medium relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center lg:flex-none order-2">
            <Link href="/" className="block">
              <Image
                src="/images/logo-villa-del-dique-digital.webp"
                alt="Villa del Dique Digital"
                width={400}
                height={160}
                className="h-16 w-auto md:h-18 lg:h-20 transition-transform duration-200 hover:scale-105"
                priority
                sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
              />
            </Link>
          </div>

          {/* Desktop Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 order-3">
            {navigationItems.slice(2, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-white hover:text-brand-yellow transition-colors duration-200 text-base font-medium relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation (md screens) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4 order-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-white hover:text-brand-yellow transition-colors duration-200 text-sm font-medium relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Spacer for mobile to balance hamburger button */}
          <div className="w-10 lg:hidden order-3"></div>
        </div>

        {/* Mobile Side Menu */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Side Menu */}
          <div
            className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-brand-navy shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <Image
                src="/images/logo-villa-del-dique-digital.webp"
                alt="Villa del Dique Digital"
                width={200}
                height={80}
                className="h-12 w-auto"
                sizes="180px"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6" role="navigation" aria-label="Mobile navigation">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-sans text-white hover:text-brand-yellow transition-all duration-200 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-brand-yellow transform hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Social Links in Menu */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/90 text-sm font-sans mb-4">Síguenos en redes sociales</p>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.instagram.com/villadeldique.com.ar?igsh=MWQ1ZHI3aDQ1bjNmbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/95 hover:text-brand-yellow transition-colors duration-200"
                  >
                    <Image src="/images/instagram-icon.png" alt="Instagram" width={20} height={20} sizes="20px" />
                    <span className="text-sm font-sans">Instagram</span>
                  </Link>
                  <Link
                    href="https://wa.me/3546533050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/95 hover:text-brand-yellow transition-colors duration-200"
                  >
                    <Image src="/images/whatsapp-official.png" alt="WhatsApp" width={20} height={20} sizes="20px" />
                    <span className="text-sm font-sans">WhatsApp</span>
                  </Link>
                  <Link
                    href="mailto:villadeldiquedigital@gmail.com"
                    className="flex items-center space-x-2 text-white/95 hover:text-brand-yellow transition-colors duration-200"
                  >
                    <Image src="/images/email-official.png" alt="Email" width={20} height={20} sizes="20px" />
                    <span className="text-sm font-sans">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
