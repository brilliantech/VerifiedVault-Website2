import { Section, Card, Button, Badge, ImageSection, FeatureGrid } from "@/components"
import { Lock, FileCheck, Shield, ArrowRight, CheckCircle2, Clock, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">Complete Fraud Prevention Platform</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Three layers of protection against payment fraud
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Modular solutions designed to eliminate payment fraud, enforce verification, and meet compliance requirements without disrupting operations.
          </p>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section>
        <div className="space-y-16">
          {/* Vault */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#004c99] rounded-xl flex items-center justify-center shadow-premium">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Vault</h2>
                  <p className="text-sm text-gray-500">Secure Banking Information</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Remove banking changes from email entirely
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A secure system for managing banking information and payment updates without email, PDFs, or manual verification. Real-time access, verified identity, and complete audit trails.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Secure storage of banking information</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time updates and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Identity-verified access controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete audit logging</span>
                </li>
              </ul>
              <Link href="/solutions/vault" className="inline-flex items-center gap-2 text-[#0066cc] font-semibold hover:gap-3 transition-all">
                Learn More About Vault <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-premium-lg slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="w-full max-w-md p-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div>
                        <div className="font-semibold text-gray-900">Acme Corp</div>
                        <div className="text-xs text-gray-600">Account: ****6789</div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <div className="font-semibold text-gray-900">Global Inc</div>
                        <div className="text-xs text-gray-600">Account: ****1234</div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NACHA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-premium-lg slide-in-left order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <div className="w-full max-w-md p-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-[#0066cc] mb-2">March 2026</div>
                      <div className="text-sm text-gray-600">NACHA Compliance Ready</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Identity Verification</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Audit Documentation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Compliance Reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-premium">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">NACHA Compliance</h2>
                  <p className="text-sm text-gray-500">Audit Readiness</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Meet evolving regulatory requirements with confidence
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Identity verification, documentation, and reporting aligned with NACHA requirements. Prove who was verified, how, when, and what controls were used.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Documented verification workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Time-stamped audit trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Exportable compliance reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">March 2026 ready today</span>
                </li>
              </ul>
              <Link href="/solutions/nacha" className="inline-flex items-center gap-2 text-[#0066cc] font-semibold hover:gap-3 transition-all">
                Learn More About NACHA <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* VAAS */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-premium">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">VAAS</h2>
                  <p className="text-sm text-gray-500">Verification-as-a-Service</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Your outsourced fraud and verification department
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Verification-as-a-Service provides a dedicated fraud and verification function without internal hiring. Expert oversight, operational clarity, and scale without headcount.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Banking change verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Identity validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vendor communication oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Exception handling and reporting</span>
                </li>
              </ul>
              <Link href="/solutions/vaas" className="inline-flex items-center gap-2 text-[#0066cc] font-semibold hover:gap-3 transition-all">
                Learn More About VAAS <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-premium-lg slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="w-full max-w-md p-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                    <div className="text-center mb-4">
                      <Users className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Expert Verification Team</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">24/7</div>
                        <div className="text-xs text-gray-600">Coverage</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <div className="text-xs text-gray-600">Verified</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">0</div>
                        <div className="text-xs text-gray-600">Hiring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="subtle">
        <div className="text-center mb-12">
          <Badge className="mb-4">Why Choose VaultVerified</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for enterprise finance teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Security, compliance, and operational excellence in one platform
          </p>
        </div>
        <FeatureGrid
          columns={3}
          features={[
            {
              icon: Clock,
              title: "48-Hour Implementation",
              description: "Get up and running in 2 days with our streamlined onboarding and dedicated support team."
            },
            {
              icon: TrendingUp,
              title: "6-Month ROI",
              description: "Average customers see full return on investment within 6 months through fraud prevention."
            },
            {
              icon: Shield,
              title: "100% Prevention Rate",
              description: "Zero successful fraud attempts across 500+ customers processing billions annually."
            }
          ]}
        />
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 border-0 text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to eliminate payment fraud?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how VaultVerified can protect your organization
            </p>
            <Button href="/contact" className="bg-white text-[#0066cc] hover:bg-gray-50">
              Request a Demo
            </Button>
          </Card>
        </div>
      </Section>
    </>
  )
}
