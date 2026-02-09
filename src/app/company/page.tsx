import { Section, Card, Button, Badge, ImageSection, FeatureGrid } from "@/components"
import { Target, Compass, Shield, Users, Award, TrendingUp } from "lucide-react"

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">About VaultVerified</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building the infrastructure for verified financial operations
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We eliminate payment fraud by replacing trust assumptions with verified identity and secure processes
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <ImageSection
          imageSrc="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
          imageAlt="Team mission and vision"
          imagePosition="right"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0066cc] to-[#004c99] rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <Badge className="mb-3">Our Mission</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Eliminate payment fraud through verified identity
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            To eliminate payment fraud by replacing trust assumptions with verified identity and secure processes.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe fraud prevention should be built into systems, not left to individuals. By removing sensitive financial actions from email and enforcing verified identity workflows, we eliminate the conditions that allow fraud to occur.
          </p>
        </ImageSection>
      </Section>

      {/* Philosophy */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <div>
              <Badge className="mb-2">Our Philosophy</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                How we think about fraud prevention
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Prevention over Reaction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just detect fraud, we eliminate the conditions that allow it to happen. By removing email from financial workflows, we prevent attacks before they occur.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Identity over Intent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trust is not a security control. We verify identity through multiple factors, ensuring that only authorized individuals can make banking changes.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Process over Policy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Policies fail when they rely on human compliance. We build verification into the process itself, making secure operations the default path.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trust through Verification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real trust comes from verification, not assumption. Every action is verified, documented, and auditable, creating trust through evidence.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compliance Built-in
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compliance should not be an afterthought. We design verification workflows that meet regulatory requirements by default, not by effort.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Clarity over Complexity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Security should not be complicated. We provide clear, structured workflows that are easy to understand and impossible to bypass.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why We Exist */}
      <Section>
        <ImageSection
          imageSrc="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
          imageAlt="Financial security"
          imagePosition="left"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <Badge className="mb-3">Why We Exist</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The problem we're solving
              </h2>
            </div>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Modern payment fraud is not caused by careless employees or weak passwords. It happens because attackers gain access to legitimate corporate email accounts and operate from inside the organization.
            </p>
            <p>
              They don't need to break in, they're already inside. They create email rules, observe patterns, and wait for the perfect moment to redirect payments. By the time fraud is detected, the money is gone.
            </p>
            <p>
              Traditional controls fail because they treat email as a trusted channel. Multi-factor authentication, security awareness training, and approval policies all assume that email itself is secure. It's not.
            </p>
            <p className="font-medium text-gray-700 text-lg">
              VaultVerified exists because email should never be a system of record for money.
            </p>
            <p>
              We built a platform that removes sensitive financial actions from email entirely, replacing trust assumptions with verified identity and documented processes. This is not incremental improvement, it's a fundamental change in how organizations handle payment operations.
            </p>
          </div>
        </ImageSection>
      </Section>

      {/* Enterprise Credibility */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <Badge className="mb-2">Enterprise Grade</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Built for enterprise finance
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0066cc]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Bank-Grade Security</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enterprise infrastructure with SOC 2 Type II compliance and audit-ready documentation
              </p>
            </Card>
            <Card className="text-center p-8 hover-lift">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Regulatory Alignment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Designed to meet NACHA requirements and evolving compliance standards
              </p>
            </Card>
            <Card className="text-center p-8 hover-lift">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Operational Excellence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Built for finance teams who need security without operational disruption
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">By the Numbers</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by enterprise finance teams
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-[#0066cc] mb-2">500+</div>
              <div className="text-sm text-gray-600">Organizations Protected</div>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-[#0066cc] mb-2">$50B+</div>
              <div className="text-sm text-gray-600">Payments Secured</div>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-[#0066cc] mb-2">100%</div>
              <div className="text-sm text-gray-600">Fraud Prevention Rate</div>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-[#0066cc] mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 border-0 text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to learn more?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              See how VaultVerified can transform your payment operations
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
