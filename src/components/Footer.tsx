import Link from "next/link"
import { SITE_CONFIG } from "@/constants"
import { Shield, Lock, FileCheck, Mail, Linkedin, Twitter, Phone, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="text-xl font-bold text-gray-900">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xs">
              Enterprise payment security trusted by Fortune 500 companies. Eliminate fraud before it starts.
            </p>
            <div className="space-y-2">
              <a href="tel:1-800-VAULT-VF" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0066cc] transition-colors">
                <Phone className="w-4 h-4" />
                <span>1-800-VAULT-VF</span>
              </a>
              <a href="mailto:contact@vaultverified.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0066cc] transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@vaultverified.com</span>
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/vault" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Vault</Link></li>
              <li><Link href="/solutions/nacha" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">NACHA Compliance</Link></li>
              <li><Link href="/solutions/vaas" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">VAAS</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">About</Link></li>
              <li><Link href="/resources" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/resources/blog" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Blog</Link></li>
              <li><Link href="/resources/case-studies" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Case Studies</Link></li>
              <li><Link href="/resources/guides" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Guides</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#0066cc] hover:text-[#0066cc] text-gray-600 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#0066cc] hover:text-[#0066cc] text-gray-600 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
