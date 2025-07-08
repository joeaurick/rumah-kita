import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

type Props = {
  params: {
    slug: string
  }
}

// Function to get all blog slugs for static generation
export async function generateStaticParams() {
  try {
    const blogDir = path.join(process.cwd(), "content/blog")

    if (!fs.existsSync(blogDir)) {
      return []
    }

    const files = fs.readdirSync(blogDir)
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => ({
        slug: file.replace(/\.md$/, ""),
      }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

// Function to get blog by slug
async function getBlogBySlug(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    return {
      title: data.title || slug,
      description: data.excerpt || "",
      date: data.date || "",
      contentHtml: marked(content),
      slug,
    }
  } catch (error) {
    console.error("Error getting blog by slug:", error)
    return null
  }
}

// Generate metadata
export async function generateMetadata({ params }: Props) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

// Page component
export default async function BlogPost({ params }: Props) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <article className="p-4 max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-2 text-blue-900">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-prose-strong:text-gray-900"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </article>
  )
}