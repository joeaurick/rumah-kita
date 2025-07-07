// File: app/blog/page.tsx

import { getAllPosts } from "@/lib/getAllPosts";
import Link from "next/link";
import TagFilter from "@/components/TagFilter";

interface BlogPageProps {
  searchParams: { tag?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const selectedTag = searchParams.tag || "";
  const posts = getAllPosts();

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Artikel Blog Properti</h1>

      <TagFilter tags={allTags} selectedTag={selectedTag} />

      <div className="space-y-10 mt-10">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold text-blue-800 hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 text-base">{post.excerpt}</p>
            </Link>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags?.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
