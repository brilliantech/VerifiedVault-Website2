import { ArrowRight } from "lucide-react"

interface ProcessStep {
  number: number
  title: string
  description: string
}

interface ProcessDiagramProps {
  steps: ProcessStep[]
}

export function ProcessDiagram({ steps }: ProcessDiagramProps) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200" />
      
      <div className="grid md:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-semibold text-lg mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="md:hidden flex justify-center my-4">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
