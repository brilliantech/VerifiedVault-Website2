import { Section, Card, Button, Badge, FeatureGrid } from "@/components"
import { BookOpen, FileText, Users, Lightbulb, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Guides",
      icon: BookOpen,
      items: [
        {
          title: "Understanding Business Email Compromise",
          description: "How BEC attacks work and why traditional controls fail to prevent them",
          type: "Guide",
          readTime: "8 min read"
        },
        {
          title: "NACHA Compliance Checklist",
          description: "Prepare for March 2026 requirements with our comprehensive checklist",
          type: "Checklist",
          readTime: "5 min read"
        },
        {
          title: "Implementing Verified Banking Workflows",
          description: "Best practices for secure payment change management in your organization",
          type: "Guide",
          readTime: "12 min read"
        }
      ]
    },
    {
      category: "Articles",
      icon: FileText,
      items: [
        {
          title: "Why Email Is Not a Financial System",
          description: "The fundamental security flaw in email-based banking changes",
          type: "Article",
          readTime: "6 min read"
        },
        {
          title: "The Cost of Payment Fraud",
          description: "Beyond the direct loss: operational and reputational impact",
          type: "Article",
          readTime: "7 min read"
        },
        {
          title: "Identity Verification in the Modern Enterprise",
          description: "Moving from trust assumptions to verified identity workflows",
          type: "Article",
          readTime: "10 min read"
        }
      ]
    },
    {
      category: "Case Studies",
      icon: Users,
      items: [
        {
          title: "Mid-Market Manufacturer Eliminates BEC Risk",
          description: "How a $200M manufacturer secured payment operations and prevented fraud",
          type: "Case Study",
          readTime: "8 min read"
        },
        {
          title: "Financial Services Firm Achieves NACHA Compliance",
          description: "Meeting March 2026 requirements ahead of schedule with VaultVerified",
          type: "Case Study",
          readTime: "6 min read"
        },
        {
          title: "Healthcare Organization Scales Verification",
          description: "Processing 10,000+ vendor payments monthly with VAAS",
          type: "Case Study",
          readTime: "9 min read"
        }
      ]
    },
    {
      category: "Best Practices",
      icon: Lightbulb,
      items: [
        {
          title: "Building a Fraud Prevention Culture",
          description: "Process over policy: systematic fraud prevention in your organization",
          type: "Best Practice",
          readTime: "7 min read"
        },
        {
          title: "Audit-Ready Documentation",
          description: "What regulators and auditors expect to see in verification records",
          type: "Best Practice",
          readTime: "5 min read"
        },
        {
          title: "Vendor Onboarding for Secure Payments",
          description: "Establishing verified identity from day one with new vendors",
          type: "Best Practice",
          readTime: "6 min read"
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">Knowledge Center</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Resources
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Educational content to help you understand payment fraud, compliance requirements, and best practices for secure verification
          </p>
        </div>
      </Section>

      {/* Resource Categories */}
      <Section>
        <div className="space-y-20">
          {resources.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <div key={category.category} className="fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0066cc] to-[#004c99] rounded-xl flex items-center justify-center shadow-premium">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-gray-600">Expert insights and practical guidance</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <Card key={idx} className="flex flex-col hover-lift">
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-[#0066cc] bg-blue-50 px-3 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{item.readTime}</span>
                        <Link 
                          href="#" 
                          className="text-[#0066cc] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Featured Downloads */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Downloads</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Essential resources for your team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover-lift">
              <Download className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                BEC Prevention Playbook
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive guide to preventing business email compromise attacks in your organization
              </p>
              <Button href="#" variant="secondary" className="w-full">
                Download PDF
              </Button>
            </Card>
            <Card className="p-8 hover-lift">
              <Download className="w-10 h-10 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                NACHA 2026 Readiness Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Step-by-step preparation guide for meeting March 2026 compliance requirements
              </p>
              <Button href="#" variant="secondary" className="w-full">
                Download PDF
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Topics */}
      <Section>
        <div className="text-center mb-12">
          <Badge className="mb-4">Browse by Topic</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore key topics
          </h2>
        </div>
        <FeatureGrid
          columns={4}
          features={[
            {
              icon: BookOpen,
              title: "Payment Fraud",
              description: "Understanding modern fraud tactics and prevention strategies"
            },
            {
              icon: FileText,
              title: "Compliance",
              description: "NACHA requirements and regulatory guidance"
            },
            {
              icon: Users,
              title: "Identity Verification",
              description: "Best practices for verifying user identity"
            },
            {
              icon: Lightbulb,
              title: "Implementation",
              description: "Practical guides for deploying secure workflows"
            }
          ]}
        />
      </Section>

      {/* CTA */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 border-0 text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-4">
              Need specific guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team can provide customized guidance for your organization's specific needs
            </p>
            <Button href="/contact" className="bg-white text-[#0066cc] hover:bg-gray-50">
              Contact Our Team
            </Button>
          </Card>
        </div>
      </Section>
    </>
  )
}
