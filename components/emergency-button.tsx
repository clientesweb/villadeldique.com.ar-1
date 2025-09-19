"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false)

  const emergencyNumbers = [
    { name: "Policía", phone: "354697829" },
    { name: "Bomberos", phone: "3546497497" },
    { name: "Hospital", phone: "3546497636" },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 min-w-56 overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
            <div className="bg-red-600 text-white px-4 py-3 text-sm font-semibold text-center">
              Números de Emergencia
            </div>
            <div className="divide-y divide-gray-100">
              {emergencyNumbers.map((emergency, index) => (
                <a
                  key={index}
                  href={`tel:${emergency.phone}`}
                  className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-800 font-medium text-sm">{emergency.name}</span>
                  <span className="text-red-600 font-semibold text-sm group-hover:text-red-700">{emergency.phone}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
          aria-label="Números de emergencia"
        >
          <span className="text-xs sm:text-sm font-semibold mr-1">SOS</span>
          {isOpen ? (
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 transition-transform" />
          ) : (
            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 transition-transform" />
          )}
        </button>
      </div>
    </div>
  )
}
