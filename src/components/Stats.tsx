interface Stat {
  value: string
  label: string
  suffix?: string
}

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#0066cc] mb-2">
            {stat.value}
            {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
          </div>
          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
