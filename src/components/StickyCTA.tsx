"use client"

import Link from "next/link"
import { Phone, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#0066cc] shadow-2xl animate-slide-up">
      <div className="container-custom py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-bold text-gray-900 text-lg">Ready to stop payment fraud?</div>
            <div className="text-sm text-gray-600">Join 500+ enterprises protecting billions</div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#0066cc] to-[#004c99] rounded-lg hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </Link>
            <Link
              href="tel:1-800-VAULT-VF"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0066cc] border-2 border-[#0066cc] rounded-lg hover:bg-blue-50 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
