"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-left">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-gray-600 transition-transform",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-6 py-4 bg-gray-50 text-gray-600">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
