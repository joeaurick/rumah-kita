import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/getAllPosts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://infoproperti.vercel.app"

  // Get all blog posts
  const posts = getAllPosts()

  // Only include pages that actually exist
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Only include blog pages that exist
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // DON'T include property pages that don't exist yet
  // const propertyPages = [...]

  // DON'T include category pages that don't exist yet
  // const categoryPages = [...]

  return [...staticPages, ...blogPages]
}
