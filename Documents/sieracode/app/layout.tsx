import type React from "react"
import type { Metadata } from "next"
import { Figtree, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Siera Code - Comunidad Tecnológica ITSZ",
  description: "Equipo multidisciplinario de estudiantes del ITSZ. Desarrollamos soluciones tecnológicas, participamos en competencias nacionales y formamos talento en la región de Zongolica.",
  generator: "Siera Code",
  keywords: ["Siera Code", "ITSZ", "Zongolica", "tecnología", "desarrollo web", "comunidad estudiantil", "HackaTecNM"],
  authors: [{ name: "Siera Code Team" }],
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${figtree.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
