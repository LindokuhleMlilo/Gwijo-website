import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gwijo Avenue - The Voice of Ama-Gwijo",
  description:
    "From Alexandra to the World – Celebrating South Africa's Rich Heritage through a cappella music",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-screen relative`}

      >
        {/* 🌌 3D Animated Gradient Background */}
        <div className="animated-bg"><div></div></div>

        {/* 🎶 Floating Dancing Music Notes */}
        <div className="music-notes">
          <span>♪</span>
          <span>♫</span>
          <span>♬</span>
          <span>♩</span>
          <span>🎵</span>
          <span>🎶</span>
        </div>

        {/* Soft Overlay for Contrast */}
        <div className="fixed inset-0 bg-black/10 z-0" />

        {/* Page Content */}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
