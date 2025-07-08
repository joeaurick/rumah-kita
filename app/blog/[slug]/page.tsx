import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogs } from '@/lib/getBlogs';
import SEOHead from '@/components/SEOHead';

type Props = {
  params: {
    slug: string;
  };
};

// ✅ Generate dynamic routes for static build
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ SEO metadata
export async function generateMetadata({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
  };
}

// ✅ Page component
export default async function Page({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return notFound();

  return (
    <article className="p-4 max-w-3xl mx-auto">
      <SEOHead title={blog.title} description={blog.description} />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </article>
  );
}
