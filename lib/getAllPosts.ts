import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
}

export function getAllPosts(): Post[] {
  try {
    const postsDir = path.join(process.cwd(), "content/blog")

    if (!fs.existsSync(postsDir)) {
      return []
    }

    const files = fs.readdirSync(postsDir)

    return files
      .filter((file) => file.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(postsDir, filename)
        const fileContent = fs.readFileSync(filePath, "utf-8")
        const { data } = matter(fileContent)

        return {
          slug: filename.replace(/\.md$/, ""),
          title: data.title || filename.replace(/\.md$/, ""),
          date: data.date || "",
          excerpt: data.excerpt || "",
          tags: data.tags || [],
        }
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error("Error getting all posts:", error)
    return []
  }
}
