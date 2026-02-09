import { CheckCircle, X } from "lucide-react"

interface ComparisonRow {
  feature: string
  traditional: boolean
  vaultverified: boolean | string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
            <th className="text-center py-4 px-6 font-bold text-gray-600">Traditional Process</th>
            <th className="text-center py-4 px-6 font-bold text-[#0066cc] bg-blue-50">VaultVerified</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
              <td className="py-4 px-6 text-center">
                {row.traditional ? (
                  <CheckCircle className="w-5 h-5 text-gray-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center bg-blue-50">
                {typeof row.vaultverified === 'string' ? (
                  <span className="text-sm font-semibold text-[#0066cc]">{row.vaultverified}</span>
                ) : row.vaultverified ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
