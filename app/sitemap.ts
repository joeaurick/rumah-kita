import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/getAllPosts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://infoproperti.vercel.app"

  // Get all blog posts
  const posts = getAllPosts()

  // Static pages
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

  // Dynamic blog pages
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Sample property listings (you can make this dynamic later)
  const propertyPages = [
    "rumah-mewah-jakarta",
    "rumah-minimalis-bandung",
    "villa-di-bali",
    "rumah-cluster-depok",
    "rumah-subsidi-cibubur",
    "apartemen-taman-anggrek",
    "ruko-strategis-bekasi",
    "tanah-kavling-bogor",
    "kontrakan-10-pintu",
  ].map((slug) => ({
    url: `${baseUrl}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Category pages
  const categoryPages = ["rumah-dijual", "rumah-disewa", "apartemen-dijual", "apartemen-disewa"].map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages, ...propertyPages, ...categoryPages]
}
