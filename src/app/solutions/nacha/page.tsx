import { Section, Card, Button, Badge, InfoBanner, FeatureGrid, ImageSection } from "@/components"
import { FileCheck, Calendar, Shield, FileText, CheckCircle2, AlertCircle, Clock, Users } from "lucide-react"

export default function NACHAPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">NACHA Compliance</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            March 2026 ready today
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Identity verification, documentation, and reporting aligned with NACHA requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Request Compliance Demo</Button>
            <Button href="#requirements" variant="secondary" size="lg">View Requirements</Button>
          </div>
        </div>
      </Section>

      {/* What's Changing */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#004c99] rounded-xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">What's Changing (March 2026)</h2>
              <p className="text-gray-600">New NACHA requirements for ACH originators</p>
            </div>
          </div>
          
          <InfoBanner
            type="warning"
            title="Enhanced compliance requirements"
            description="NACHA is implementing stronger requirements for identity verification and documentation in ACH transactions. Organizations must be able to prove compliance, not just claim it."
            className="mb-8"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover-lift">
              <Shield className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Stronger Identity Verification</h3>
              <p className="text-sm text-gray-600">
                Enhanced expectations for verifying the identity of individuals initiating banking changes
              </p>
            </Card>
            <Card className="p-6 hover-lift">
              <FileText className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Documentation Requirements</h3>
              <p className="text-sm text-gray-600">
                Increased audit and documentation requirements for all verification activities
              </p>
            </Card>
            <Card className="p-6 hover-lift">
              <Users className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Originator Accountability</h3>
              <p className="text-sm text-gray-600">
                Greater accountability for originators to prove compliance with verification standards
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section background="subtle">
        <ImageSection
          imageSrc="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
          imageAlt="Compliance documentation"
          imagePosition="left"
        >
          <Badge className="mb-4">Critical Understanding</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why This Matters</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Compliance is no longer passive. Organizations must be able to prove, not just claim, that proper verification occurred. This means documented evidence, not just policies and procedures.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizations must prove:</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Who was verified</div>
                <div className="text-sm text-gray-600">Complete identity information for every individual involved in banking changes</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">How they were verified</div>
                <div className="text-sm text-gray-600">Specific verification methods used and validation steps completed</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">When verification occurred</div>
                <div className="text-sm text-gray-600">Time-stamped records of all verification activities and approvals</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">What controls were used</div>
                <div className="text-sm text-gray-600">Documentation of security controls and validation processes applied</div>
              </div>
            </div>
          </div>
        </ImageSection>
      </Section>

      {/* How VaultVerified Meets Standards */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Approach</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How VaultVerified Meets NACHA Standards
            </h2>
            <p className="text-xl text-gray-600">
              Designed from the ground up to meet and exceed NACHA compliance requirements
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-[#0066cc]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Documented Verification Workflows
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Every verification step is documented automatically with complete audit trails. No manual record-keeping required.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Identity verification steps logged</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Approval workflows documented</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Exception handling tracked</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>User attribution recorded</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Identity Validation Steps
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Multi-factor identity verification ensures that only authorized individuals can make banking changes.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Multi-factor authentication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Identity document verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Out-of-band confirmation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Biometric options available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Time-stamped Audit Trails
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Every action is time-stamped and logged with complete context for audit and compliance purposes.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Immutable audit logs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Complete activity history</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>User attribution for all actions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Tamper-proof records</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Exportable Compliance Reporting
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Generate compliance reports for auditors and regulators with complete verification documentation.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Audit-ready reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Customizable date ranges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Multiple export formats</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Scheduled reporting available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Compliance Benefits */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Compliance Benefits</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built-in compliance, not bolted-on
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift">
              <div className="text-5xl font-bold text-[#0066cc] mb-3">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Documented Coverage</div>
              <div className="text-sm text-gray-600">Every verification step documented automatically</div>
            </Card>
            <Card className="text-center p-8 hover-lift">
              <div className="text-5xl font-bold text-[#0066cc] mb-3">Real-time</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Audit Trail Generation</div>
              <div className="text-sm text-gray-600">Instant compliance documentation as actions occur</div>
            </Card>
            <Card className="text-center p-8 hover-lift">
              <div className="text-5xl font-bold text-[#0066cc] mb-3">March 2026</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Ready Today</div>
              <div className="text-sm text-gray-600">Meet future requirements now, not later</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-green-600 to-emerald-700 border-0 text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ensure compliance before March 2026
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how VaultVerified can help your organization meet NACHA requirements
            </p>
            <Button href="/contact" className="bg-white text-green-600 hover:bg-gray-50">
              Request Compliance Demo
            </Button>
          </Card>
        </div>
      </Section>
    </>
  )
}
