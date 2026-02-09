"use client"

import { Section, Card, Badge, Button } from "@/components"
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    requestType: "demo"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge className="mb-6">Get In Touch</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to eliminate payment fraud? Get in touch with our team
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-8 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066cc] to-[#004c99] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-premium">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
              <a href="mailto:contact@vaultverified.com" className="text-[#0066cc] hover:underline">
                contact@vaultverified.com
              </a>
            </Card>

            <Card className="text-center p-8 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-premium">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
              <a href="tel:1-800-VAULT-VF" className="text-[#0066cc] hover:underline">
                1-800-VAULT-VF
              </a>
            </Card>

            <Card className="text-center p-8 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-premium">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 8am-6pm EST<br />
                24/7 Support Available
              </p>
            </Card>
          </div>

          {/* Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4">Request a Demo</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                See VaultVerified in action
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Schedule a personalized demo to see how VaultVerified can eliminate payment fraud in your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">30-minute demo</div>
                    <div className="text-sm text-gray-600">Tailored to your organization's needs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">No commitment required</div>
                    <div className="text-sm text-gray-600">See the platform before making a decision</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Expert guidance</div>
                    <div className="text-sm text-gray-600">Our team will answer all your questions</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="requestType" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
                  >
                    <option value="demo">Scheduling a Demo</option>
                    <option value="vault">Vault Solution</option>
                    <option value="nacha">NACHA Compliance</option>
                    <option value="vaas">VAAS</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 text-base font-semibold text-white bg-[#0066cc] hover:bg-[#004c99] rounded-lg transition-all shadow-premium hover:shadow-premium-lg"
                >
                  Submit Request
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy and terms of service. We'll respond within 24 hours.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Common Questions</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <Card className="p-8 hover-lift">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                How quickly can we get started?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most organizations can be onboarded within 2-4 weeks, depending on integration requirements and verification volume. Our team handles the entire setup process.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Do you integrate with our existing systems?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. VaultVerified integrates with major ERP and accounting systems including SAP, Oracle, NetSuite, and QuickBooks. Our team will work with you to ensure smooth integration.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide dedicated support for implementation, training, and ongoing operations. VAAS customers receive full verification operations support with 24/7 coverage.
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Is there a minimum contract length?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer flexible contract terms based on your organization's needs. Contact us to discuss options that work for your situation.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
