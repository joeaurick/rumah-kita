// File: app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <>
      <Head>
        <title>{data.title} | Properti Kita</title>
        <meta name="description" content={data.excerpt} />
      </Head>
      
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: data.excerpt,
      datePublished: data.date,
      author: {
        "@type": "Person",
        name: data.author || "Properti Kita",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://properti-kita.com/blog/${params.slug}`,
      },
    }),
  }}
/>

      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <article className="max-w-none text-[17px] leading-relaxed text-gray-800">
          <h1 className="text-4xl font-bold text-blue-900 leading-tight mb-4">
            {data.title}
          </h1>
          <p className="text-gray-500 text-sm mb-10">{data.date}</p>
          <Markdown
            options={{
              overrides: {
                h2: {
                  props: {
                    className: "mt-10 text-2xl font-semibold text-blue-800",
                  },
                },
                p: {
                  props: {
                    className: "text-gray-800 leading-relaxed mb-6",
                  },
                },
                ul: {
                  props: {
                    className: "list-disc pl-6 mb-6 text-gray-800",
                  },
                },
                ol: {
                  props: {
                    className: "list-decimal pl-6 mb-6 text-gray-800",
                  },
                },
                table: {
                  props: {
                    className:
                      "table-auto border border-gray-300 mt-8 mb-10 text-sm w-full",
                  },
                },
                th: {
                  props: {
                    className:
                      "border bg-gray-100 px-4 py-2 text-left font-semibold",
                  },
                },
                td: {
                  props: {
                    className: "border px-4 py-2",
                  },
                },
              },
            }}
          >
            {content}
          </Markdown>
        </article>
      </main>
    </>
  );
}
