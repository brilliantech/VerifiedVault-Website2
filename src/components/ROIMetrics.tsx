import { Card } from "./Card"
import { TrendingUp, DollarSign, Clock, Shield } from "lucide-react"

export function ROIMetrics() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="text-center p-6 border-2 border-green-200 bg-green-50">
        <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <div className="text-3xl font-bold text-green-700 mb-2">$2.7M</div>
        <div className="text-sm text-gray-700 font-medium">Average Fraud Prevented</div>
        <div className="text-xs text-gray-600 mt-2">Per customer annually</div>
      </Card>
      
      <Card className="text-center p-6 border-2 border-blue-200 bg-blue-50">
        <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <div className="text-3xl font-bold text-blue-700 mb-2">87%</div>
        <div className="text-sm text-gray-700 font-medium">Time Saved</div>
        <div className="text-xs text-gray-600 mt-2">On verification processes</div>
      </Card>
      
      <Card className="text-center p-6 border-2 border-purple-200 bg-purple-50">
        <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
        <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
        <div className="text-sm text-gray-700 font-medium">Fraud Prevention</div>
        <div className="text-xs text-gray-600 mt-2">Zero successful BEC attacks</div>
      </Card>
      
      <Card className="text-center p-6 border-2 border-orange-200 bg-orange-50">
        <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
        <div className="text-3xl font-bold text-orange-700 mb-2">6 mo</div>
        <div className="text-sm text-gray-700 font-medium">Payback Period</div>
        <div className="text-xs text-gray-600 mt-2">Average ROI timeline</div>
      </Card>
    </div>
  )
}
