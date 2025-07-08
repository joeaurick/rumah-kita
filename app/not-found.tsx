import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600">
            Maaf, halaman yang Anda cari sedang dalam pengembangan atau tidak tersedia saat ini.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              <Search className="w-4 h-4" />
              Cari Properti
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Baca Artikel
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Sedang Mencari Properti?</h3>
          <p className="text-sm text-blue-700 mb-3">
            Kami terus menambahkan properti baru setiap hari. Hubungi kami untuk bantuan!
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  )
}
