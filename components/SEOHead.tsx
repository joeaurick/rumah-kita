import Head from "next/head";

export default function SEOHead({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const canonical = `https://infoproperti.vercel.app/blog/${slug}`;
  const ogImage = "https://infoproperti.vercel.app/images/og-image.jpg";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Info Properti" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: [ogImage],
            author: {
              "@type": "Organization",
              name: "Info Properti",
            },
            publisher: {
              "@type": "Organization",
              name: "Info Properti",
              logo: {
                "@type": "ImageObject",
                url: "https://infoproperti.vercel.app/logo.png",
              },
            },
            url: canonical,
            datePublished: "2025-07-07",
          }),
        }}
      />
    </Head>
  );
}
