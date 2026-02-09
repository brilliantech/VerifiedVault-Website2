import { Section, Card, Button, Badge, ImageSection, FeatureGrid, InfoBanner } from "@/components"
import { Lock, Shield, Clock, Database, CheckCircle2, Eye, FileText, Zap, Users, TrendingUp, AlertCircle } from "lucide-react"

export default function VaultPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">Secure Banking Vault</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Banking information that never touches email
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Eliminate the #1 attack vector for payment fraud with secure, verified banking information management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Schedule Demo</Button>
            <Button href="#how-it-works" variant="secondary" size="lg">See How It Works</Button>
          </div>
        </div>
      </Section>

      {/* What Is the Vault */}
      <Section>
        <ImageSection
          imageSrc="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
          imageAlt="Secure vault technology"
          imagePosition="right"
        >
          <Badge className="mb-4">The Solution</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Is the Vault?</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A secure, access-controlled platform for managing banking information and payment updates completely outside of email. Every change is verified, documented, and auditable.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#0066cc]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Encrypted Storage</h3>
                <p className="text-sm text-gray-600">Bank-grade encryption at rest and in transit with SOC 2 Type II certification</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Identity Verified</h3>
                <p className="text-sm text-gray-600">Multi-factor authentication required for all access and changes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Complete Audit Trail</h3>
                <p className="text-sm text-gray-600">Every action logged with timestamp and user attribution for compliance</p>
              </div>
            </div>
          </div>
          <InfoBanner
            type="info"
            title="Secure banking information management"
            description="Banking information never enters email systems, eliminating the primary attack vector for BEC fraud."
            className="mb-8"
          />
        </ImageSection>
      </Section>

      {/* Who Uses the Vault */}
      <Section background="subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Built For Your Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Uses the Vault?</h2>
            <p className="text-xl text-gray-600">Built for every role in the payment workflow</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AP Teams</h3>
              <p className="text-sm text-gray-600">Process payments faster with verified banking info at your fingertips</p>
            </Card>
            <Card className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Security Leaders</h3>
              <p className="text-sm text-gray-600">Full visibility and control over all banking changes</p>
            </Card>
            <Card className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vendors</h3>
              <p className="text-sm text-gray-600">Update banking info securely without email back-and-forth</p>
            </Card>
            <Card className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Finance Teams</h3>
              <p className="text-sm text-gray-600">Compliance-ready documentation generated automatically</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How the Vault Works</h2>
            <p className="text-xl text-gray-600">Secure banking information management in four steps</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vendor Submits Request</h3>
                  <p className="text-sm text-gray-600">Vendor accesses secure portal to submit banking change request, no email involved</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Identity Verification</h3>
                  <p className="text-sm text-gray-600">Multi-factor authentication and out-of-band confirmation verify identity</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audit Trail Created</h3>
                  <p className="text-sm text-gray-600">All verification steps documented with timestamps and user attribution</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Access</h3>
                  <p className="text-sm text-gray-600">Your team accesses verified banking info to process payments confidently</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional vs. Vault Process</h2>
            <p className="text-xl text-gray-600">See the difference in security and efficiency</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Traditional Process</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Banking changes sent via email",
                  "Identity assumed, not verified",
                  "No audit trail",
                  "Manual verification prone to error",
                  "Compliance gaps"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl flex-shrink-0">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8 border-2 border-green-200 bg-green-50">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Vault Process</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Banking changes in secure system",
                  "Identity verified before access",
                  "Complete audit trail",
                  "Automated validation",
                  "Built-in compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section>
        <div className="text-center mb-12">
          <Badge className="mb-4">Enterprise Features</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for enterprise security</h2>
          <p className="text-xl text-gray-600">Bank-grade infrastructure and compliance</p>
        </div>
        <FeatureGrid
          columns={3}
          features={[
            {
              icon: Shield,
              title: "SOC 2 Type II Certified",
              description: "Enterprise security standards with regular third-party audits and compliance verification."
            },
            {
              icon: Zap,
              title: "Real-Time Updates",
              description: "Instant visibility into banking changes with immediate notifications and validation."
            },
            {
              icon: Eye,
              title: "Complete Visibility",
              description: "Dashboard view of all banking information with full audit history and user activity."
            },
            {
              icon: Database,
              title: "Secure Infrastructure",
              description: "Bank-grade encryption, redundant backups, and 99.9% uptime SLA guarantee."
            },
            {
              icon: Users,
              title: "Role-Based Access",
              description: "Granular permissions ensure only authorized users can view or modify banking data."
            },
            {
              icon: FileText,
              title: "Compliance Ready",
              description: "Automated documentation meets NACHA, SOX, and audit requirements out of the box."
            }
          ]}
        />
      </Section>

      {/* CTA */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See the Vault in action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a personalized demo to see how the Vault eliminates email-based fraud
          </p>
          <Button href="/contact" size="lg">Schedule Demo</Button>
        </div>
      </Section>
    </>
  )
}
