import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Head from "next/head"

export const dynamic = "force-dynamic"

type Props = {
  params: {
    slug: string
  }
}

async function getBlogBySlug(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`)
    if (!fs.existsSync(filePath)) return null

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
      canonical: `https://infoproperti.vercel.app/blog/${params.slug}`,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const blog = await getBlogBySlug(params.slug)
  if (!blog) notFound()

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`https://infoproperti.vercel.app/blog/${blog.slug}`} />

        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://infoproperti.vercel.app/blog/${blog.slug}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://infoproperti.vercel.app/blog/${blog.slug}`,
              },
              "headline": blog.title,
              "description": blog.description,
              "datePublished": blog.date,
              "author": {
                "@type": "Organization",
                "name": "Infoproperti",
              },
              "publisher": {
                "@type": "Organization",
                "name": "Infoproperti",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://infoproperti.vercel.app/images/logo.png"
                }
              }
            })
          }}
        />
      </Head>

      <article className="p-4 max-w-3xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
        <div className="mt-8 flex gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://infoproperti.vercel.app/blog/${blog.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Share ke Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=https://infoproperti.vercel.app/blog/${blog.slug}&text=${encodeURIComponent(blog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded"
          >
            Share ke Twitter
          </a>
        </div>
      </article>
    </>
  )
}
