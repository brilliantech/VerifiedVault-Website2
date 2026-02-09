import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonProps {
  href?: string
  variant?: "primary" | "secondary"
  children: React.ReactNode
  className?: string
  onClick?: () => void
  size?: "md" | "lg"
}

export function Button({ href, variant = "primary", children, className, onClick, size = "md" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all"
  const variants = {
    primary: "bg-[#0066cc] text-white hover:bg-[#004c99] shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5",
    secondary: "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0066cc] hover:text-[#0066cc] shadow-premium"
  }
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
