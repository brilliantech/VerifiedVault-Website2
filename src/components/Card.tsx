import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg p-6 shadow-premium",
        hover && "transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}
