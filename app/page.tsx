import Link from "next/link"
import PropertyCard from "@/components/PropertyCard"
import { getAllPosts } from "@/lib/getAllPosts"

const featuredListings = [
  {
    title: "Rumah Mewah di Jakarta",
    location: "Jakarta Selatan",
    price: "Rp 2.500.000.000",
    image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Rumah+Mewah",
    slug: "rumah-mewah-jakarta",
    promo: "Hot Deal",
  },
  {
    title: "Rumah Minimalis di Bandung",
    location: "Bandung",
    price: "Rp 850.000.000",
    image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Rumah+Minimalis",
    slug: "rumah-minimalis-bandung",
    promo: "Diskon 10%",
  },
  {
    title: "Villa di Bali",
    location: "Ubud, Bali",
    price: "Rp 3.200.000.000",
    image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Villa+Bali",
    slug: "villa-di-bali",
  },
  {
    title: "Rumah Subsidi Bekasi Utara",
    location: "Bekasi, Jawa Barat",
    price: "Rp 180.000.000",
    image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Rumah+Subsidi",
    slug: "rumah-subsidi-bekasi",
  },
  {
    title: "Cluster Premium Serpong",
    location: "Serpong, Tangerang Selatan",
    price: "Rp 1.200.000.000",
    image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Cluster+Premium",
    slug: "cluster-premium-serpong",
  },
  {
    title: "Rumah Dekat Tol Cibubur",
    location: "Cibubur, Jakarta Timur",
    price: "Rp 750.000.000",
    image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Rumah+Cibubur",
    slug: "rumah-dekat-tol-cibubur",
  },
]

export default function Home() {
  const blogPreview = getAllPosts().slice(0, 3)

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Temukan Rumah Impianmu di Info Properti</h1>
          <p className="text-lg md:text-xl mb-6">Jual beli rumah, apartemen, dan properti dengan mudah & terpercaya.</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/listings"
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Lihat Listing
            </Link>
            <Link
              href="/kontak"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-800 transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
            <p className="text-gray-600">Properti Tersedia</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">5,000+</h3>
            <p className="text-gray-600">Klien Puas</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600">Kota di Indonesia</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">Layanan Support</p>
          </div>
        </div>
      </section>

      {/* Kenapa Kami */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">Kenapa Pilih Kami?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Terpercaya</h3>
            <p className="text-gray-600">Sudah membantu ribuan pengguna menemukan rumah impian mereka.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Harga Terbaik</h3>
            <p className="text-gray-600">Dapatkan listing dengan harga kompetitif dan diskon menarik.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎧</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Bantuan 24/7</h3>
            <p className="text-gray-600">Kami siap membantu proses jual beli properti kapan pun Anda butuh.</p>
          </div>
        </div>
      </section>

      {/* Preview Listing */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">Listing Populer</h2>
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
          <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">Artikel Terbaru</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPreview.map((post, idx) => (
              <div key={idx} className="border rounded-lg p-5 shadow hover:shadow-md transition bg-white">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-3 inline-block text-sm">
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
  )
}
