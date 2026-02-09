import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

interface InfoBannerProps {
  type?: "info" | "success" | "warning" | "error"
  title: string
  description: string
  className?: string
  showIcon?: boolean
}

export function InfoBanner({ 
  type = "info", 
  title, 
  description,
  className = "",
  showIcon = true
}: InfoBannerProps) {
  const styles = {
    info: {
      bg: "bg-blue-50 border-blue-200",
      icon: Info,
      iconColor: "text-blue-600"
    },
    success: {
      bg: "bg-green-50 border-green-200",
      icon: CheckCircle2,
      iconColor: "text-green-600"
    },
    warning: {
      bg: "bg-yellow-50 border-yellow-200",
      icon: AlertCircle,
      iconColor: "text-yellow-600"
    },
    error: {
      bg: "bg-red-50 border-red-200",
      icon: XCircle,
      iconColor: "text-red-600"
    }
  }

  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={`${style.bg} border rounded-xl p-6 ${className} fade-in-up`}>
      <div className={`flex ${showIcon ? 'gap-4' : ''}`}>
        {showIcon && (
          <div className="flex-shrink-0">
            <Icon className={`w-6 h-6 ${style.iconColor}`} />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
