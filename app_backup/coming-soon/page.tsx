import Link from "next/link"
import { Construction, Home, Clock, Bell } from "lucide-react"

interface ComingSoonPageProps {
  searchParams: { from?: string }
}

export default function ComingSoonPage({ searchParams }: ComingSoonPageProps) {
  const fromPath = searchParams.from || ""

  const getPageName = (path: string) => {
    const pageNames: { [key: string]: string } = {
      "/rumah-dijual": "Rumah Dijual",
      "/rumah-disewa": "Rumah Disewa",
      "/apartemen-dijual": "Apartemen Dijual",
      "/apartemen-disewa": "Apartemen Disewa",
      "/search": "Pencarian",
      "/promo": "Promo",
      "/download": "Download App",
      "/jual": "Jual Properti",
      "/login": "Login/Register",
    }
    return pageNames[path] || "Halaman"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Construction className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">{getPageName(fromPath)} Segera Hadir!</h1>

          <p className="text-gray-600 mb-6">
            Kami sedang mengembangkan fitur ini untuk memberikan pengalaman terbaik bagi Anda. Halaman ini akan segera
            tersedia dalam waktu dekat.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-3">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Status Pengembangan</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-600">75% Selesai - Estimasi: 1-2 minggu</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full justify-center"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition justify-center"
            >
              Lihat Properti
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition justify-center"
            >
              Baca Artikel
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-yellow-800 mb-2">
            <Bell className="w-4 h-4" />
            <span className="font-semibold text-sm">Ingin Diberitahu?</span>
          </div>
          <p className="text-xs text-yellow-700 mb-3">Dapatkan notifikasi saat fitur ini sudah tersedia</p>
          <Link
            href="/kontak"
            className="inline-block bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  )
}
