import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "primary" | "success" | "neutral"
  className?: string
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  const variants = {
    primary: "bg-[#e6f2ff] text-[#0066cc] border-[#0066cc]/20",
    success: "bg-green-50 text-green-700 border-green-200",
    neutral: "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
