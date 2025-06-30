import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "Muhammad Malik Rachman - Portfolio",
  description:
    "Final-year Information Systems student passionate about web development, system analysis, and software testing. QA Specialist with experience at PT Kalbe Farma Tbk.",
  keywords:
    "Muhammad Malik Rachman, Information Systems, Web Developer, QA Specialist, Software Testing, Bina Nusantara University",
  authors: [{ name: "Muhammad Malik Rachman" }],
  openGraph: {
    title: "Muhammad Malik Rachman - Portfolio",
    description:
      "Final-year Information Systems student passionate about web development, system analysis, and software testing.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
