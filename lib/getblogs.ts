import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const blogDir = path.join(process.cwd(), 'content/blog');

export async function getAllBlogs() {
  const files = fs.readdirSync(blogDir);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export async function getBlogBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '',
    contentHtml: marked(content),
    slug,
  };
}
