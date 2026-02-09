import { Card } from "./Card"
import { Star } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  metric?: string
}

interface TestimonialProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="relative">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed italic">
            "{testimonial.quote}"
          </p>
          {testimonial.metric && (
            <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700">{testimonial.metric}</div>
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{testimonial.author}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
            <div className="text-sm text-gray-500">{testimonial.company}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
