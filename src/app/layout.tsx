import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header, Footer } from "@/components"
import { SITE_CONFIG } from "@/constants"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
