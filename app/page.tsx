// File: app/page.tsx

import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

const featuredListings = [
  {
    title: "Rumah Mewah di Jakarta",
    location: "Jakarta Selatan",
    price: "Rp 2.500.000.000",
    image: "https://source.unsplash.com/featured/?house,jakarta",
    slug: "rumah-mewah-jakarta",
    promo: "Hot Deal",
  },
  {
    title: "Rumah Minimalis di Bandung",
    location: "Bandung",
    price: "Rp 850.000.000",
    image: "https://source.unsplash.com/featured/?house,bandung",
    slug: "rumah-minimalis-bandung",
    promo: "Diskon 10%",
  },
  {
    title: "Villa di Bali",
    location: "Ubud, Bali",
    price: "Rp 3.200.000.000",
    image: "https://source.unsplash.com/featured/?villa,bali",
    slug: "villa-di-bali",
  },
  {
    title: "Rumah Subsidi Bekasi Utara",
    location: "Bekasi, Jawa Barat",
    price: "Rp 180.000.000",
    image: "https://source.unsplash.com/featured/?subsidized,house,bekasi",
    slug: "rumah-subsidi-bekasi",
  },
  {
    title: "Cluster Premium Serpong",
    location: "Serpong, Tangerang Selatan",
    price: "Rp 1.200.000.000",
    image: "https://source.unsplash.com/featured/?cluster,serpong",
    slug: "cluster-premium-serpong",
  },
  {
    title: "Rumah Dekat Tol Cibubur",
    location: "Cibubur, Jakarta Timur",
    price: "Rp 750.000.000",
    image: "https://source.unsplash.com/featured/?house,cibubur",
    slug: "rumah-dekat-tol-cibubur",
  },
];

function getLatestPosts(limit = 3) {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "content/blog", filename),
      "utf-8"
    );
    const { data } = matter(fileContent);
    return {
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      slug,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
}

export default function Home() {
  const blogPreview = getLatestPosts();

  return (
    <>
      <Head>
        <title>Properti Kita - Portal Properti dan Listing Rumah Terpercaya</title>
        <meta
          name="description"
          content="Temukan rumah impian, artikel properti terkini, dan listing properti terbaru di Indonesia hanya di Properti Kita."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Properti Kita",
              url: "https://properti-kita.com",
              description:
                "Situs properti terpercaya untuk menemukan rumah dan membaca artikel edukatif seputar properti."
            })
          }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-black text-white py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold mb-4">
              Selamat datang di Properti Kita
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Temukan rumah impian Anda, baca artikel properti terkini, atau
              hubungi kami untuk bantuan. Kami menyediakan informasi properti
              terupdate & terpercaya.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/listings"
                className="bg-white text-blue-800 px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Lihat Listing
              </Link>
              <Link
                href="/kontak"
                className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>

        {/* Kenapa Kami */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">
              Kenapa Pilih Kami?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-blue-700 font-semibold mb-2">Terpercaya</h3>
                <p className="text-sm text-gray-600">
                  Kami telah membantu ribuan pelanggan menemukan rumah impian mereka.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-blue-700 font-semibold mb-2">Harga Terbaik</h3>
                <p className="text-sm text-gray-600">
                  Listing dengan penawaran menarik dan update setiap hari.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-blue-700 font-semibold mb-2">
                  Bantuan Profesional
                </h3>
                <p className="text-sm text-gray-600">
                  Tim kami siap membantu Anda 24/7 dalam proses jual beli properti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Listing */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">
              Listing Populer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredListings.map((item, idx) => (
                <PropertyCard key={idx} {...item} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/listings"
                className="inline-block px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition"
              >
                Lihat Semua Listing →
              </Link>
            </div>
          </div>
        </section>

        {/* Preview Blog */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">
              Artikel Terbaru
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPreview.map((post, idx) => (
                <div key={idx} className="border rounded-lg p-5 shadow hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:underline mt-3 inline-block text-sm"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-block px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition"
              >
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
