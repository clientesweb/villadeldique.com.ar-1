"use client"

import type React from "react"
import MainAdvertisingCarousel from "@/components/main-advertising-carousel"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ContactoClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hola, me contacto desde Villa del Dique Digital:\\n\\n*Nombre:* ${formData.name}\\n*Email:* ${formData.email}\\n*Mensaje:* ${formData.message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/3546533050?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-navy mb-8">
              {"Contacto"}
            </h1>
            <p className="font-sans text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
              {
                "¿Tienes una noticia que compartir? ¿Quieres promocionar tu negocio? Estamos aquí para ayudarte a conectar con la comunidad de Villa del Dique y el Valle de Calamuchita."
              }
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">{"Información de Contacto"}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-semibold text-gray-800">{"Email"}</h3>
                      <p className="font-sans text-gray-600">{"villadeldiquedigital@gmail.com"}</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-gray-800">{"WhatsApp"}</h3>
                      <p className="font-sans text-gray-600">{"3546533050"}</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-gray-800">{"Dirección"}</h3>
                      <p className="font-sans text-gray-600">{"Villa del Dique, Córdoba"}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">{"Envíanos un Mensaje"}</h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block font-sans font-medium text-gray-700 mb-2">
                        {"Nombre"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-sans font-medium text-gray-700 mb-2">
                        {"Email"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-sans font-medium text-gray-700 mb-2">
                        {"Mensaje"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-navy text-white font-sans font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      <span>{"Enviar por WhatsApp"}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MainAdvertisingCarousel />
      </main>
      <Footer />
    </div>
  )
}
