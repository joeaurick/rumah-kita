import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/temp/",
          "/draft/",
          // Temporarily disallow pages under development
          "/rumah-dijual/",
          "/rumah-disewa/",
          "/apartemen-dijual/",
          "/apartemen-disewa/",
        ],
      },
    ],
    sitemap: "https://infoproperti.vercel.app/sitemap.xml",
  }
}
