import { LucideIcon } from "lucide-react"

interface IllustrationBoxProps {
  icon: LucideIcon
  title: string
  color?: "blue" | "green" | "purple" | "red"
}

export function IllustrationBox({ icon: Icon, title, color = "blue" }: IllustrationBoxProps) {
  const colors = {
    blue: "from-blue-500 to-indigo-600",
    green: "from-green-500 to-emerald-600",
    purple: "from-purple-500 to-pink-600",
    red: "from-red-500 to-orange-600"
  }

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-premium">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDY2Y2MiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className={`w-20 h-20 bg-gradient-to-br ${colors[color]} rounded-2xl shadow-premium-lg flex items-center justify-center mb-4`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
      </div>
    </div>
  )
}
