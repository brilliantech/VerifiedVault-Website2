import { LucideIcon } from "lucide-react"
import { Card } from "./Card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div 
            key={index} 
            className="scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="p-6 hover-lift smooth-transition">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#0066cc]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
