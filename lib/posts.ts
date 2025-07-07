import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "content/blog", filename),
      "utf8"
    );
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
    };
  });
}
