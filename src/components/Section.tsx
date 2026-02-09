import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "white" | "subtle"
}

export function Section({ children, className, background = "white" }: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-32",
        background === "subtle" && "bg-[#f8f9fa]",
        background === "white" && "bg-white",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  )
}
