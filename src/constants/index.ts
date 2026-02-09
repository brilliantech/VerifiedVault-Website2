export const SITE_CONFIG = {
  name: "VaultVerified",
  description: "Secure payment changes. Verified identity. Built-in compliance.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      { label: "Vault", href: "/solutions/vault" },
      { label: "NACHA Compliance", href: "/solutions/nacha" },
      { label: "VAAS", href: "/solutions/vaas" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const