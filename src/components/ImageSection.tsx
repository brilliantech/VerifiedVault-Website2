import Image from "next/image"
import { ReactNode } from "react"

interface ImageSectionProps {
  imageSrc: string
  imageAlt: string
  imagePosition?: "left" | "right"
  children: ReactNode
  className?: string
}

export function ImageSection({ 
  imageSrc, 
  imageAlt, 
  imagePosition = "right", 
  children,
  className = ""
}: ImageSectionProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${className}`}>
      {imagePosition === "left" && (
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium-lg slide-in-left">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      )}
      
      <div className={imagePosition === "left" ? "slide-in-right" : "slide-in-left"}>
        {children}
      </div>
      
      {imagePosition === "right" && (
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium-lg slide-in-right">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      )}
    </div>
  )
}
