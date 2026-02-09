import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconBoxProps {
  icon: LucideIcon
  variant?: "primary" | "secondary" | "success"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function IconBox({ icon: Icon, variant = "primary", size = "md", className }: IconBoxProps) {
  const variants = {
    primary: "bg-[#0066cc] text-white",
    secondary: "bg-[#e6f2ff] text-[#0066cc]",
    success: "bg-green-50 text-green-600"
  }

  const sizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  return (
    <div
      className={cn(
        "rounded-lg flex items-center justify-center shadow-premium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      <Icon className={iconSizes[size]} />
    </div>
  )
}
