import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">KATEGORI POPULER</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Rumah Dijual</li>
              <li>Apartemen Disewakan</li>
              <li>Tanah</li>
              <li>Ruko & Properti Komersial</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">PENCARIAN POPULER</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Rumah di Jakarta</li>
              <li>Rumah di Bandung</li>
              <li>Rumah Murah</li>
              <li>Rumah Dekat Tol</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">INFO PROPERTI</h4>
            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="/blog" className="hover:underline">
                  Artikel Edukasi
                </Link>
              </li>
              <li>
                <Link href="/panduan" className="hover:underline">
                  Panduan Pembeli
                </Link>
              </li>
              <li>
                <Link href="/tips-investasi" className="hover:underline">
                  Tips Investasi Properti
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">IKUTI KAMI</h4>
            <div className="flex space-x-3 mt-2">
              <Link href="https://facebook.com/infoproperti" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://instagram.com/infoproperti" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://youtube.com/@infoproperti" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6 md:mt-8 pt-6 border-t border-gray-700">
          © 2025 Info Properti. Platform properti terpercaya untuk jual beli & sewa rumah di Indonesia.
        </div>
      </div>
    </footer>
  )
}
