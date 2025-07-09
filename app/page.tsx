import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/getAllPosts"
import { Search, MapPin, ChevronDown, Heart, Menu } from "lucide-react"
import Head from "next/head"

const featuredListings = [
  {
    title: "Rumah Mewah di Jakarta Selatan",
    location: "Setia Budi, Jakarta Selatan",
    price: "Rp 2.500.000.000",
    image: "/images/og-image.jpg",
    slug: "rumah-mewah-jakarta",
    promo: "HIGHLIGHT",
    bedrooms: "4 KT",
    bathrooms: "3 KM",
    area: "200 m²",
    date: "2 hari yang lalu",
  },
  {
    title: "Rumah Minimalis Siap Huni",
    location: "Cilandak, Jakarta Selatan",
    price: "Rp 1.850.000.000",
    image: "/images/sold-out.jpg",
    slug: "rumah-minimalis-cilandak",
    promo: "HIGHLIGHT",
    bedrooms: "3 KT",
    bathrooms: "2 KM",
    area: "150 m²",
    date: "3 hari yang lalu",
  },
  {
    title: "Apartemen Sewa Bulanan",
    location: "Jagakarsa, Jakarta Selatan",
    price: "Rp 15.000.000/bulan",
    image: "/images/sold-out.jpg",
    slug: "apartemen-sewa-jagakarsa",
    promo: "HIGHLIGHT",
    bedrooms: "2 KT",
    bathrooms: "1 KM",
    area: "45 m²",
    date: "1 hari yang lalu",
  },
  {
    title: "Rumah Subsidi Bekasi",
    location: "Bekasi Utara, Jawa Barat",
    price: "Rp 350.000.000",
    image: "/images/sold-out.jpg",
    slug: "rumah-subsidi-bekasi",
    bedrooms: "2 KT",
    bathrooms: "1 KM",
    area: "60 m²",
    date: "4 hari yang lalu",
  },
  {
    title: "Cluster Premium Serpong",
    location: "Serpong, Tangerang Selatan",
    price: "Rp 1.200.000.000",
    image: "/images/sold-out.jpg",
    slug: "cluster-premium-serpong",
    bedrooms: "3 KT",
    bathrooms: "2 KM",
    area: "120 m²",
    date: "5 hari yang lalu",
  },
  {
    title: "Apartemen Sewa Tahunan",
    location: "Kebayoran Lama, Jakarta Selatan",
    price: "Rp 45.000.000/tahun",
    image: "/images/sold-out.jpg",
    slug: "apartemen-sewa-kebayoran",
    bedrooms: "1 KT",
    bathrooms: "1 KM",
    area: "35 m²",
    date: "6 hari yang lalu",
  },
]

export default function Home() {
  const blogPreview = getAllPosts().slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gray-100 border-b px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <Link href="/download" className="text-gray-600 hover:text-blue-600">
              📱 Download Infoproperti App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/promo" className="text-gray-600 hover:text-blue-600">
              🎯 Promo
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              📰 News
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl">IP</span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-lg md:text-xl text-blue-600">Infoproperti</div>
                  <div className="text-xs text-gray-500">Properti Terpercaya</div>
                </div>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-3 border border-r-0 rounded-l-lg bg-white text-gray-700 hover:bg-gray-50">
                    <MapPin className="w-4 h-4" />
                    <span className="hidden xl:inline">Jakarta Selatan</span>
                    <span className="xl:hidden">Jakarta</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Cari rumah, apartemen..."
                  className="flex-1 px-4 py-3 border border-l-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 md:px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Auth & Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/login" className="hidden md:block text-gray-700 hover:text-blue-600 text-sm">
                Login
              </Link>
              <Link
                href="/jual"
                className="bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm"
              >
                + JUAL
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Cari properti di Jakarta..."
                className="flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Categories - FIXED MOBILE VERSION */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 px-4 py-3">
            <div className="relative">
              <button className="flex items-center gap-2 font-semibold text-gray-800 hover:text-blue-600">
                SEMUA KATEGORI
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link href="/rumah-dijual" className="text-gray-600 hover:text-blue-600">
              Rumah Dijual
            </Link>
            <Link href="/rumah-disewa" className="text-gray-600 hover:text-blue-600">
              Rumah Disewa
            </Link>
            <Link href="/apartemen-dijual" className="text-gray-600 hover:text-blue-600">
              Apartemen Dijual
            </Link>
            <Link href="/apartemen-disewa" className="text-gray-600 hover:text-blue-600">
              Apartemen Disewa
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              Tips Properti
            </Link>
          </div>

          {/* Mobile Navigation - Horizontal Scroll Fixed */}
          <div className="md:hidden px-4 py-3">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-2">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg flex-shrink-0">
                <Menu className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">KATEGORI</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>

              <div className="flex items-center gap-2 ml-2">
                <Link
                  href="/rumah-dijual"
                  className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 border border-blue-200"
                >
                  Rumah Dijual
                </Link>
                <Link
                  href="/rumah-disewa"
                  className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 border border-green-200"
                >
                  Rumah Disewa
                </Link>
                <Link
                  href="/apartemen-dijual"
                  className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 border border-purple-200"
                >
                  Apartemen Dijual
                </Link>
                <Link
                  href="/apartemen-disewa"
                  className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 border border-orange-200"
                >
                  Apartemen Disewa
                </Link>
                <Link
                  href="/blog"
                  className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 border border-gray-200"
                >
                  Tips Properti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Popular Searches - Hidden on mobile */}
      <div className="hidden md:block bg-gray-50 px-4 py-2 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Pencarian Popular:</span>
            <div className="flex items-center gap-4 overflow-x-auto">
              <Link href="/search?q=rumah+jakarta" className="text-blue-600 hover:underline whitespace-nowrap">
                rumah jakarta
              </Link>
              <Link href="/search?q=apartemen+bandung" className="text-blue-600 hover:underline whitespace-nowrap">
                apartemen bandung
              </Link>
              <Link href="/search?q=rumah+subsidi" className="text-blue-600 hover:underline whitespace-nowrap">
                rumah subsidi
              </Link>
              <Link href="/search?q=sewa+bulanan" className="text-blue-600 hover:underline whitespace-nowrap">
                sewa bulanan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb - Hidden on mobile */}
        <nav className="mb-4 hidden md:block">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Infoproperti
            </Link>
            <span>/</span>
            <Link href="/properti" className="hover:text-blue-600">
              Properti
            </Link>
            <span>/</span>
            <span>Properti dalam Jakarta D.K.I.</span>
          </div>
        </nav>

        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Jual Beli Rumah & Sewa Apartemen Mudah & Aman
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Hidden on mobile, shown as filter button */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-between">
                KATEGORI
                <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2">
                <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded">
                  <div className="font-medium">Semua Kategori</div>
                </div>
                <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer">
                  <div>Dijual: Rumah & Apartemen (168.326)</div>
                </div>
                <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer">
                  <div>Disewakan: Rumah & Apartemen (41.806)</div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-between">
                LOKASI
                <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-1">
                <div className="font-medium text-gray-800">Indonesia</div>
                <div className="pl-4 space-y-1">
                  <div className="font-medium text-blue-600">Jakarta D.K.I.</div>
                  <div className="pl-4 space-y-1">
                    <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm font-medium">
                      Jakarta Selatan
                    </div>
                    <div className="pl-4 space-y-1 text-sm text-gray-600">
                      <div className="hover:text-blue-600 cursor-pointer">Setia Budi (4.786)</div>
                      <div className="hover:text-blue-600 cursor-pointer">Cilandak (4.701)</div>
                      <div className="hover:text-blue-600 cursor-pointer">Jagakarsa (3.770)</div>
                      <div className="hover:text-blue-600 cursor-pointer">Kebayoran Lama (3.770)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 md:p-8 mb-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl md:text-3xl font-bold mb-2">Cek 10.000+ Properti</h2>
                <h3 className="text-lg md:text-2xl mb-4">Lainnya di Infoproperti</h3>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base">
                  Klik untuk lihat →
                </button>
              </div>
              <div className="absolute right-0 top-0 w-32 md:w-64 h-full opacity-20">
                <Image
                  src="/images/infoproperti-gif.gif"
                  alt="Banner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                <Menu className="w-4 h-4" />
                Filter & Kategori
              </button>
            </div>

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="text-gray-600">
                <span className="font-semibold text-gray-800">273.917</span> iklan masuk Jakarta Selatan
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">SORTIR:</span>
                <select className="border rounded px-3 py-1 text-sm bg-white">
                  <option>Tanggal Diterbitkan</option>
                  <option>Harga Terendah</option>
                  <option>Harga Tertinggi</option>
                  <option>Terbaru</option>
                </select>
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {featuredListings.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {item.promo && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                        ⚡ {item.promo}
                      </div>
                    )}
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.price}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      {item.bedrooms} - {item.bathrooms} - {item.area}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm md:text-base">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 font-semibold">
                Lihat Lebih Banyak Properti
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Blog Section */}
      <section className="bg-white py-12 md:py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-8 md:mb-10">
            Tips & Artikel Properti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreview.map((post, idx) => (
              <div key={idx} className="border rounded-lg p-4 md:p-5 shadow hover:shadow-md transition bg-white">
                <div className="relative h-40 md:h-48 w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://via.placeholder.com/400x200/1e40af/ffffff?text=Blog+Post"
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-3 inline-block text-sm">
                  Baca Selengkapnya →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
