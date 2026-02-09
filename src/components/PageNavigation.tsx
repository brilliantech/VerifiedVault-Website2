"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

interface NavItem {
  id: string
  label: string
}

interface PageNavigationProps {
  items: NavItem[]
}

export function PageNavigation({ items }: PageNavigationProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="hidden lg:block sticky top-24 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">On This Page</h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
              activeSection === item.id
                ? "bg-blue-50 text-[#0066cc] font-semibold"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <span>{item.label}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${
              activeSection === item.id ? "translate-x-1" : "group-hover:translate-x-1"
            }`} />
          </button>
        ))}
      </nav>
    </div>
  )
}
