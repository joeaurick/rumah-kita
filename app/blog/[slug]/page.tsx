// File: app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Markdown from 'markdown-to-jsx';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return {};

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | Info Properti`,
    description: data.excerpt,
    alternates: {
      canonical: `https://infoproperti.vercel.app/blog/${params.slug}`,
    },
    openGraph: {
      title: `${data.title} | Info Properti`,
      description: data.excerpt,
      type: 'article',
      url: `https://infoproperti.vercel.app/blog/${params.slug}`,
      images: [
        {
          url: 'https://infoproperti.vercel.app/images/og-image.jpg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | Info Properti`,
      description: data.excerpt,
      images: ['https://infoproperti.vercel.app/images/og-image.jpg'],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
      <article className="max-w-none text-[17px] leading-relaxed text-gray-800">
        <h1 className="text-4xl font-bold text-blue-900 leading-tight mb-4">
          {data.title}
        </h1>
        <p className="text-gray-500 text-sm mb-10">{data.date}</p>
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
