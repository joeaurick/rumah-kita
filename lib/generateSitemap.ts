import fs from "fs"
import path from "path"
import { getAllPosts } from "./getAllPosts"

interface SitemapUrl {
  url: string
  lastModified: string
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
}

export function generateSitemapXML(): string {
  const baseUrl = "https://infoproperti.vercel.app"
  const posts = getAllPosts()

  const urls: SitemapUrl[] = [
    // Static pages
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Blog posts
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date || new Date()).toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),

    // Property categories
    ...["rumah-dijual", "rumah-disewa", "apartemen-dijual", "apartemen-disewa"].map((category) => ({
      url: `${baseUrl}/${category}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return sitemap
}

// Function to save sitemap to public folder (optional)
export function saveSitemapToPublic(): void {
  try {
    const sitemapXML = generateSitemapXML()
    const publicDir = path.join(process.cwd(), "public")

    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXML)
    console.log("✅ Sitemap generated successfully at /public/sitemap.xml")
  } catch (error) {
    console.error("❌ Error generating sitemap:", error)
  }
}
