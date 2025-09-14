"use client"

import { useState } from "react"
import { Phone, ChevronDown, ChevronUp } from "lucide-react"

export default function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false)

  const emergencyNumbers = [
    { name: "Policía", phone: "354697829" },
    { name: "Bomberos", phone: "3546497497" },
    { name: "Hospital", phone: "3546497636" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-48 overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2 text-sm font-semibold">Números de Emergencia</div>
            {emergencyNumbers.map((emergency, index) => (
              <a
                key={index}
                href={`tel:${emergency.phone}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <span className="text-gray-700 font-medium">{emergency.name}</span>
                <div className="flex items-center text-red-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{emergency.phone}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center justify-center"
          aria-label="Números de emergencia"
        >
          <Phone className="w-6 h-6" />
          {isOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronUp className="w-4 h-4 ml-1" />}
        </button>
      </div>
    </div>
  )
}
