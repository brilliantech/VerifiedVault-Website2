"use client"

import Link from "next/link"
import { useState } from "react"
import { SITE_CONFIG, NAV_ITEMS } from "@/constants"
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#012169] text-white py-2.5 hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className="font-medium">Enterprise Payment Security</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="tel:1-800-VAULT-VF" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-medium">1-800-VAULT-VF</span>
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="mailto:contact@vaultverified.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div>
                <div className="text-xl font-bold text-[#0066cc] group-hover:text-[#004c99] transition-colors leading-none">
                  {SITE_CONFIG.name}
                </div>
                <div className="text-[10px] text-gray-500 leading-none mt-0.5">Verified Payment Security</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => 'submenu' in item && item.submenu && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#0066cc] hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {item.label}
                    {'submenu' in item && item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {'submenu' in item && item.submenu && openMenu === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                      <div className="p-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#0066cc] rounded-lg transition-all"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0066cc] hover:text-white hover:bg-[#0066cc] border border-[#0066cc] rounded-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Sales</span>
              </Link>
              <Link
                href="/contact"
                className="hidden lg:inline-flex px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#0066cc] to-[#004c99] hover:from-[#004c99] hover:to-[#003366] rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl">
            <nav className="container-custom py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-[#0066cc] rounded-lg transition-all"
                    onClick={() => !('submenu' in item && item.submenu) && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {'submenu' in item && item.submenu && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0066cc] rounded-lg transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-[#0066cc] bg-blue-50 border border-[#0066cc] rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Contact Sales
                </Link>
                <Link
                  href="/contact"
                  className="block w-full px-5 py-3 text-sm font-bold text-center text-white bg-gradient-to-r from-[#0066cc] to-[#004c99] rounded-lg shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}