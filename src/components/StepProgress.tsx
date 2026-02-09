import { CheckCircle } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  completed?: boolean
}

interface StepProgressProps {
  steps: Step[]
}

export function StepProgress({ steps }: StepProgressProps) {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gray-200">
        <div 
          className="h-full bg-[#0066cc] transition-all duration-500"
          style={{ width: `${(steps.filter(s => s.completed).length / steps.length) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-xl relative z-10 transition-all ${
              step.completed
                ? "bg-green-500 text-white"
                : "bg-white border-4 border-[#0066cc] text-[#0066cc]"
            }`}>
              {step.completed ? <CheckCircle className="w-8 h-8" /> : step.number}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
