import { Section, Card, Button, Badge, ImageSection, FeatureGrid, InfoBanner } from "@/components"
import { Shield, Users, TrendingUp, CheckCircle2, Clock, Target, Zap, Award } from "lucide-react"

export default function VAASPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">Verification-as-a-Service</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your outsourced fraud and verification department
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Expert verification specialists handle all identity validation and fraud detection without internal hiring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Request VAAS Demo</Button>
            <Button href="#how-it-works" variant="secondary" size="lg">See How It Works</Button>
          </div>
        </div>
      </Section>

      {/* What Is VAAS */}
      <Section>
        <ImageSection
          imageSrc="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
          imageAlt="Professional team collaboration"
          imagePosition="left"
        >
          <Badge className="mb-4">The Service</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Is VAAS?</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Verification-as-a-Service provides a dedicated fraud and verification function without the need to build, staff, or manage an internal team. We become your verification department.
          </p>
          <InfoBanner
            type="info"
            title="Think of VAAS as a fractional fraud department"
            description="Expert verification specialists who handle banking change validation, identity verification, and exception management on your behalf."
            className="mb-8"
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Coverage</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Verified</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">0</div>
              <div className="text-sm text-gray-600">Hiring</div>
            </div>
          </div>
        </ImageSection>
      </Section>

      {/* Key Benefits */}
      <Section background="subtle">
        <div className="text-center mb-12">
          <Badge className="mb-4">Key Benefits</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why organizations choose VAAS</h2>
          <p className="text-xl text-gray-600">Expert oversight without the overhead</p>
        </div>
        <FeatureGrid
          columns={3}
          features={[
            {
              icon: Users,
              title: "Expert Team",
              description: "Dedicated verification specialists trained in fraud detection and prevention with years of experience."
            },
            {
              icon: Shield,
              title: "Full Coverage",
              description: "Complete verification operations without internal resource allocation or management overhead."
            },
            {
              icon: TrendingUp,
              title: "Scalable",
              description: "Scale verification capacity instantly without hiring or training new staff members."
            }
          ]}
        />
      </Section>

      {/* What We Handle */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Handle</h2>
            <p className="text-xl text-gray-600">Complete verification operations from start to finish</p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-[#0066cc]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Banking Change Verification
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We verify every banking change request through multi-factor identity validation and out-of-band confirmation. No change is processed without verified identity.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Identity Validation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive identity verification using multiple validation methods to ensure the person requesting changes is who they claim to be.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Vendor Communication Oversight
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We manage all vendor communication related to banking changes, ensuring proper verification protocols are followed and documented.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Exception Handling
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    When verification fails or anomalies are detected, we handle the investigation and resolution, escalating to your team only when necessary.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Documentation and Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete documentation of all verification activities with regular reporting on verification metrics, exceptions, and compliance status.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose VAAS */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Value Proposition</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Organizations Choose VAAS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover-lift">
              <Clock className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reduce Internal Workload
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Free your AP and finance teams from manual verification tasks. Let them focus on strategic work while we handle verification operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>No manual verification calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>No email back-and-forth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>No documentation burden</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-lift">
              <Target className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Eliminate Verification Gaps
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ensure 100% verification coverage without relying on busy internal teams to follow manual processes consistently.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>No missed verifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Consistent process enforcement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Expert fraud detection</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-lift">
              <Zap className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scale Without Headcount
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Handle increasing verification volume without hiring, training, or managing additional staff.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>No hiring costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>No training overhead</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Instant capacity scaling</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-lift">
              <Award className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gain Expert Oversight
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Access fraud prevention expertise without building an internal fraud department.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Trained verification specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Fraud pattern recognition</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Best practice enforcement</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How VAAS Works</h2>
            <p className="text-xl text-gray-600">Four-step verification process</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                number: 1,
                title: "Banking Change Request",
                description: "Vendor or partner submits banking change through the Vault (not email)"
              },
              {
                number: 2,
                title: "VAAS Team Verification",
                description: "Our verification specialists validate identity through multiple channels and methods"
              },
              {
                number: 3,
                title: "Documentation & Approval",
                description: "All verification steps are documented and change is approved or escalated"
              },
              {
                number: 4,
                title: "Your Team Processes Payment",
                description: "Verified banking information is available in the Vault for your team to process"
              }
            ].map((step) => (
              <Card key={step.number} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-600 to-pink-700 border-0 text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to outsource verification?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how VAAS can eliminate verification burden and fraud risk
            </p>
            <Button href="/contact" className="bg-white text-purple-600 hover:bg-gray-50">
              Request VAAS Demo
            </Button>
          </Card>
        </div>
      </Section>
    </>
  )
}
