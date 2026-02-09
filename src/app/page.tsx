import { Button, Section, Card, IconBox, Badge, Testimonials, ComparisonTable, ROIMetrics, VideoPreview, StepProgress, ImageSection, FeatureGrid, InfoBanner } from "@/components"
import { Shield, Lock, FileCheck, ArrowRight, CheckCircle2, Play, Award, Building2, Users, TrendingUp, Clock, Zap, Target, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <Badge className="mb-6">Trusted by 500+ Enterprise Finance Teams</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Stop payment fraud
              <br />
              <span className="gradient-text">before it starts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Remove banking changes from email. Verify every identity. Build audit-ready compliance automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="/contact" size="lg">Schedule Demo</Button>
              <Button href="#video" variant="secondary" size="lg" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Setup in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>No credit card</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Secure payment verification"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Trusted By Logos */}
      <Section className="py-12 bg-white border-y border-gray-200">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Trusted by industry leaders</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">
          {["Global Finance Corp", "SecureBank International", "PaymentPro Systems", "Digital Trust Enterprises", "Capital Flow Inc"].map((company) => (
            <div key={company} className="flex items-center justify-center">
              <Building2 className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-gray-600 font-bold">{company}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Fraud Happens */}
      <Section>
        <ImageSection
          imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
          imageAlt="Business team collaborating"
          imagePosition="left"
        >
          <Badge className="mb-4">Understanding the Problem</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fraud doesn't start with a bad actor, it starts with a trusted email
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Modern payment fraud happens after attackers gain access to legitimate corporate email accounts. They impersonate real employees from inside the email system, creating rules that hide their activity.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email Account Compromise</h4>
                <p className="text-gray-600 text-sm">Attackers gain access to legitimate corporate email accounts through phishing or credential theft.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Silent Observation</h4>
                <p className="text-gray-600 text-sm">They watch vendor communications, invoice timing, and approval patterns while remaining undetected.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Payment Redirection</h4>
                <p className="text-gray-600 text-sm">At the perfect moment, they send instructions to redirect funds to accounts they control.</p>
              </div>
            </div>
          </div>

        </ImageSection>
      </Section>

      {/* The Core Failure */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4">The Root Cause</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Email was never meant to be a financial system
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Banking changes sent via email cannot be trusted. Identity is assumed, not verified. Approvals lack audit-grade evidence. VaultVerified removes email from the equation.
          </p>
        </div>
        <FeatureGrid
          columns={4}
          features={[
            {
              icon: Lock,
              title: "No Email Exposure",
              description: "Banking information never touches email, eliminating the primary attack vector for BEC fraud."
            },
            {
              icon: Users,
              title: "Verified Identity",
              description: "Multi-factor authentication ensures every banking change is made by a verified, authorized person."
            },
            {
              icon: FileCheck,
              title: "Audit-Ready",
              description: "Every action is documented with time-stamped audit trails that meet NACHA compliance standards."
            },
            {
              icon: Zap,
              title: "Real-Time Validation",
              description: "Instant verification and validation of all banking changes with immediate visibility for your team."
            }
          ]}
        />
      </Section>

      {/* ROI Metrics */}
      <Section>
        <div className="text-center mb-12">
          <Badge className="mb-4">Proven Results</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real impact on your bottom line
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our customers see measurable ROI within 6 months
          </p>
        </div>
        <ROIMetrics />
      </Section>

      {/* How It Works */}
      <Section>
        <div className="text-center mb-12">
          <Badge className="mb-4">Simple Process</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get started in 3 easy steps
          </h2>
        </div>
        <StepProgress
          steps={[
            { number: 1, title: "Schedule Demo", description: "Meet with our team to see VaultVerified in action", completed: false },
            { number: 2, title: "Sign Up", description: "Create your account and begin onboarding with our team", completed: false },
            { number: 3, title: "Go Live", description: "Start preventing fraud in 48 hours", completed: false },
          ]}
        />
      </Section>

      {/* Video Demo */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">See It In Action</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Watch how VaultVerified stops fraud
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              See a live demonstration of how our platform eliminates email-based payment fraud and ensures NACHA compliance.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Real-time identity verification</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Automated audit trail generation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">NACHA compliance reporting</span>
              </li>
            </ul>
            <Button href="/contact" size="lg">Schedule Live Demo</Button>
          </div>
          <div>
            <VideoPreview title="VaultVerified Platform Demo" duration="3:45" />
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="subtle">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why companies switch to VaultVerified
          </h2>
          <p className="text-xl text-gray-600">
            See the difference in fraud prevention approach
          </p>
        </div>
        <Card className="overflow-hidden">
          <ComparisonTable
            rows={[
              { feature: "Email-based banking changes", traditional: true, vaultverified: false },
              { feature: "Identity verification", traditional: false, vaultverified: true },
              { feature: "Audit trail documentation", traditional: false, vaultverified: "Automatic" },
              { feature: "NACHA compliance", traditional: false, vaultverified: "Built-in" },
              { feature: "Real-time validation", traditional: false, vaultverified: true },
            ]}
          />
        </Card>
      </Section>

      {/* Solutions */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Solutions</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Three layers of protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just detect fraud, we eliminate the conditions that allow it to happen
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card hover className="relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>
            <IconBox icon={Lock} size="lg" className="mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Vault</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Banking information stored in encrypted, access-controlled infrastructure, never in email.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Real-time updates</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Zero email exposure</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Complete audit trails</span>
              </li>
            </ul>
            <Link href="/solutions/vault" className="text-[#0066cc] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>

          <Card hover className="relative overflow-hidden border-2 border-[#0066cc] hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16"></div>
            <IconBox icon={FileCheck} size="lg" className="mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">NACHA Compliance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Automated identity verification and documentation aligned with NACHA requirements.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Multi-factor verification</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Time-stamped audit logs</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Exportable reports</span>
              </li>
            </ul>
            <Link href="/solutions/nacha" className="text-[#0066cc] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>

          <Card hover className="relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16"></div>
            <IconBox icon={Shield} size="lg" className="mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">VAAS</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Outsourced verification team handles all identity validation and fraud detection.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Expert fraud specialists</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Scale without hiring</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>24/7 coverage</span>
              </li>
            </ul>
            <Link href="/solutions/vaas" className="text-[#0066cc] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Why organizations choose VaultVerified
          </h3>
          <FeatureGrid
            columns={3}
            features={[
              {
                icon: Clock,
                title: "48-Hour Setup",
                description: "Get up and running in 2 days with our streamlined onboarding process and dedicated support team."
              },
              {
                icon: TrendingUp,
                title: "6-Month ROI",
                description: "Average customers see full return on investment within 6 months through fraud prevention and efficiency gains."
              },
              {
                icon: Target,
                title: "100% Prevention Rate",
                description: "Zero successful fraud attempts across 500+ customers processing billions in payments annually."
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "SOC 2 Type II certified with enterprise encryption standards used by Fortune 500 financial institutions."
              },
              {
                icon: BarChart3,
                title: "Complete Visibility",
                description: "Real-time dashboards and reporting give you full transparency into all banking changes and verifications."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated fraud specialists and customer success team available 24/7 to support your operations."
              }
            ]}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="subtle">
        <div className="text-center mb-12">
          <Badge className="mb-4">Customer Success</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by finance leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers say about preventing fraud
          </p>
        </div>
        <Testimonials
          testimonials={[
            {
              quote: "VaultVerified eliminated our BEC risk entirely. We've processed $500M in payments with zero fraud incidents since implementation.",
              author: "Sarah Chen",
              role: "VP of Finance",
              company: "TechCorp Industries",
              metric: "$500M Protected"
            },
            {
              quote: "The NACHA compliance features saved us months of audit preparation. Everything is documented automatically.",
              author: "Michael Rodriguez",
              role: "CFO",
              company: "Global Manufacturing",
              metric: "100% Audit Pass"
            },
            {
              quote: "VAAS gave us enterprise-grade fraud prevention without hiring a security team. ROI in 4 months.",
              author: "Jennifer Park",
              role: "Controller",
              company: "MidMarket Solutions",
              metric: "4 Month ROI"
            }
          ]}
        />
      </Section>

      {/* Final CTA */}
      <Section className="pb-0">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 border-0 text-white text-center p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            <div className="relative z-10">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-4">
                Ready to eliminate payment fraud?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join 500+ organizations protecting billions in payments with VaultVerified
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#0066cc] bg-white rounded-lg hover:bg-gray-50 transition-all shadow-premium-lg"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
