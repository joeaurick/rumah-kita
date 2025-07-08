import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Infoproperti | Cari Rumah & Properti Terbaik",
  description:
    "Temukan rumah impian, apartemen, dan properti lainnya di seluruh Indonesia dengan Infoproperti. Platform properti lengkap, mudah, dan terpercaya.",
  metadataBase: new URL("https://infoproperti.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infoproperti | Platform Properti Terlengkap",
    description: "Beli, jual, dan sewa rumah di seluruh Indonesia hanya di Infoproperti.",
    url: "https://infoproperti.vercel.app",
    siteName: "Infoproperti",
    images: [
      {
        url: "https://infoproperti.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infoproperti",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@infoproperti",
    title: "Infoproperti | Jual Beli Sewa Properti",
    description: "Solusi properti lengkap: rumah, apartemen, tanah, dan ruko.",
    images: ["https://infoproperti.vercel.app/images/og-image.jpg"],
  },
  verification: {
    google: "20y4xxpH-qzsOpT28K9G4t9TzsuYUnE1JJAKEY__RU4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Prevent indexing of development pages */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Infoproperti",
              url: "https://infoproperti.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://infoproperti.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
