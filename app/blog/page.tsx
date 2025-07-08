import { getAllPosts } from "@/lib/getAllPosts"
import Link from "next/link"
import Image from "next/image"
import { Search, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import AutoDate from "@/components/AutoDate"

interface BlogPageProps {
  searchParams: { tag?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const selectedTag = searchParams.tag || ""
  const posts = getAllPosts()
  const filteredPosts = selectedTag ? posts.filter((post) => post.tags?.includes(selectedTag)) : posts

  // Get popular posts (first 5)
  const popularPosts = posts.slice(0, 5)

  // Get latest posts for main content
  const latestPosts = filteredPosts.slice(0, 6)
  const featuredPost = latestPosts[0]
  const otherPosts = latestPosts.slice(1)

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header dengan tanggal otomatis */}
      <div className="bg-gray-800 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm">
            <AutoDate format="full" />
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="#" className="hover:text-blue-400">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Banner Advertisement */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 md:py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 md:p-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-xl md:text-3xl font-bold mb-2">Daripada Bingung Cari Rumah,</h2>
                <h3 className="text-lg md:text-2xl mb-4">Langsung ke Infoproperti Aja!</h3>
                <div className="text-base md:text-lg font-semibold">#RumahImpian</div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/listings"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold inline-block text-sm md:text-base"
                >
                  Cari Properti Sekarang
                </Link>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-32 md:w-64 h-full opacity-20">
              <Image
                src="https://via.placeholder.com/300x200/ffffff/3b82f6?text=Rumah+Impian"
                alt="Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-600 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
              <Link href="/" className="text-white hover:text-blue-200 font-semibold whitespace-nowrap">
                HOME
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-blue-200 font-semibold flex items-center gap-1 whitespace-nowrap">
                  TIPS PROPERTI
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-blue-200 font-semibold flex items-center gap-1 whitespace-nowrap">
                  INVESTASI
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <div className="hidden md:block relative group">
                <button className="text-white hover:text-blue-200 font-semibold flex items-center gap-1 whitespace-nowrap">
                  PANDUAN KPR
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <div className="hidden lg:block relative group">
                <button className="text-white hover:text-blue-200 font-semibold flex items-center gap-1 whitespace-nowrap">
                  LIFESTYLE
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <Link href="/kontak" className="text-white hover:text-blue-200 font-semibold whitespace-nowrap">
                KONTAK
              </Link>
              <Link href="/listings" className="text-white hover:text-blue-200 font-semibold whitespace-nowrap">
                PROPERTI
              </Link>
            </div>
            <button className="text-white hover:text-blue-200 flex-shrink-0">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left Sidebar - Mobile: Show as collapsible */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="bg-blue-100 px-4 py-3">
                <h2 className="text-lg font-bold text-blue-800">Populer</h2>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {popularPosts.map((post, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${post.slug}`}
                      className="block text-sm text-gray-700 hover:text-blue-600 leading-relaxed border-b border-gray-100 pb-3 last:border-b-0"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags Filter */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-100 px-4 py-3">
                <h2 className="text-lg font-bold text-blue-800">Kategori</h2>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  <Link
                    href="/blog"
                    className={`block px-3 py-2 rounded text-sm ${
                      !selectedTag ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Semua Artikel
                  </Link>
                  {allTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className={`block px-3 py-2 rounded text-sm ${
                        selectedTag === tag ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-600 px-4 md:px-6 py-4">
                <h1 className="text-lg md:text-xl font-bold text-white">Artikel Terkini</h1>
              </div>

              {/* Featured Article */}
              {featuredPost && (
                <div className="p-4 md:p-6 border-b">
                  <Link href={`/blog/${featuredPost.slug}`} className="block group">
                    <div className="relative h-48 md:h-64 w-full mb-4 overflow-hidden rounded-lg">
                      <Image
                        src="https://via.placeholder.com/600x300/3b82f6/ffffff?text=Featured+Article"
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                        {featuredPost.tags?.[0] || "Properti"}
                      </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-3 text-sm md:text-base">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <AutoDate date={featuredPost.date} format="relative" />
                      <span className="text-blue-600 group-hover:underline">Baca Selengkapnya →</span>
                    </div>
                  </Link>
                </div>
              )}

              {/* Other Articles */}
              <div className="p-4 md:p-6">
                <div className="space-y-6">
                  {otherPosts.map((post, idx) => (
                    <article key={idx} className="flex gap-4 pb-6 border-b border-gray-100 last:border-b-0">
                      <div className="flex-shrink-0">
                        <Link href={`/blog/${post.slug}`}>
                          <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-lg">
                            <Image
                              src="https://via.placeholder.com/150x150/10b981/ffffff?text=Article"
                              alt={post.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="96px"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link href={`/blog/${post.slug}`} className="group">
                          <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 leading-tight text-sm md:text-base line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <AutoDate date={post.date} format="relative" />
                            <div className="flex gap-1 md:gap-2 overflow-hidden">
                              {post.tags?.slice(0, 2).map((tag) => (
                                <span key={tag} className="bg-gray-100 px-1 md:px-2 py-1 rounded text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 font-semibold text-sm md:text-base">
                    Lihat Artikel Lainnya
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Mobile: Show at bottom */}
          <aside className="lg:col-span-1 order-3">
            {/* Property Ad */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg p-4 md:p-6 text-white mb-6">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Infoproperti</h3>
                <p className="text-sm mb-4">Rumah Impian Cepat, Prosesnya Bebas Ribet</p>
                <div className="space-y-2 mb-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Cek Harga</div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Cek Lokasi
                  </div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Cek Legalitas
                  </div>
                </div>
                <Link
                  href="/listings"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block"
                >
                  Cari Sekarang
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Newsletter Properti</h3>
              <p className="text-sm text-gray-600 mb-4">
                Dapatkan tips dan update terbaru seputar properti langsung di email Anda.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Recent Properties */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-green-100 px-4 py-3">
                <h3 className="font-bold text-green-800">Properti Terbaru</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">Rumah Mewah Jakarta Selatan</h4>
                  <p className="text-xs text-gray-600 mb-1">Setia Budi - 4KT/3KM</p>
                  <p className="text-sm font-bold text-blue-600">Rp 2.5 M</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">Apartemen Sewa Cilandak</h4>
                  <p className="text-xs text-gray-600 mb-1">Cilandak - 2KT/1KM</p>
                  <p className="text-sm font-bold text-green-600">Rp 15 Jt/bulan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">Cluster Premium Serpong</h4>
                  <p className="text-xs text-gray-600 mb-1">Serpong - 3KT/2KM</p>
                  <p className="text-sm font-bold text-blue-600">Rp 1.2 M</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
