"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Copy, Heart, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export default function PromotionalBanner() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "¡Copiado!",
        description: `${label} copiado al portapapeles`,
        duration: 2000,
      })
    })
  }

  return (
    <section className="relative">
      <div className="relative w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-promocional-villa-del-dique-digital.webp"
          alt="¡Colaborá con nuestros Bomberos Voluntarios! - Tu aporte ayuda a sostener su labor y proteger a toda la comunidad"
          width={1920}
          height={400}
          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover object-center"
          priority
        />

        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
          <a
            href="https://www.instagram.com/bomberosvilladeldique/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2 sm:px-4 sm:py-3 hover:bg-white/80 transition-colors"
          >
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-1.5 sm:p-2 rounded-full">
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
            <span className="font-semibold text-brand-navy text-xs sm:text-sm md:text-base">
              @bomberosvilladeldique
            </span>
          </a>
        </div>

        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 sm:max-w-md md:max-w-lg lg:max-w-xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="donation-info" className="border-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              <AccordionTrigger className="px-3 py-2 sm:px-4 sm:py-3 hover:bg-white/80 rounded-t-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-brand-navy text-white p-1.5 sm:p-2 rounded-full">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <span className="font-semibold text-brand-navy text-left text-xs sm:text-sm md:text-base">
                    Datos para Transferencia - Mercado Pago
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 py-3 sm:px-4 sm:py-4 bg-white/95 rounded-b-lg">
                <div className="space-y-2 sm:space-y-3">
                  <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <label className="text-xs font-medium text-gray-700">Alias</label>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("bomberos.villa.dique", "Alias")}
                          className="h-5 w-5 sm:h-6 sm:w-6 p-0"
                        >
                          <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </Button>
                      </div>
                      <p className="font-mono text-xs sm:text-sm font-bold text-brand-navy">bomberos.villa.dique</p>
                    </div>

                    <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <label className="text-xs font-medium text-gray-700">CUIT/CUIL</label>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("30-66868497-8", "CUIT/CUIL")}
                          className="h-5 w-5 sm:h-6 sm:w-6 p-0"
                        >
                          <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </Button>
                      </div>
                      <p className="font-mono text-xs sm:text-sm font-bold text-brand-navy">30-66868497-8</p>
                    </div>
                  </div>

                  <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <label className="text-xs font-medium text-gray-700">Nombre / Razón Social</label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Sociedad De Bomberos Voluntarios De Villa", "Razón Social")}
                        className="h-5 w-5 sm:h-6 sm:w-6 p-0"
                      >
                        <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </Button>
                    </div>
                    <p className="font-semibold text-brand-navy text-xs sm:text-sm">
                      Sociedad De Bomberos Voluntarios De Villa
                    </p>
                  </div>

                  <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-200">
                    <label className="text-xs font-medium text-gray-700 block mb-1 sm:mb-2">Entidad</label>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Mercado Pago
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-navy text-white p-2 sm:p-3 rounded-lg text-center">
                    <p className="text-xs">
                      <strong>¡Gracias por tu solidaridad!</strong>
                      <br />
                      Cada donación nos ayuda a mantener nuestros equipos.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
