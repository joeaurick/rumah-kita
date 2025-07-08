import PropertyCard from "@/components/PropertyCard"
import PropertyFilter from "@/components/PropertyFilter"
import { Grid, List, Filter } from "lucide-react"

const listings = [
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
    title: "Rumah Cluster Depok Sawangan",
    location: "Depok, Jawa Barat",
    price: "Rp 650.000.000",
    image: "https://via.placeholder.com/400x300/84cc16/ffffff?text=Cluster+Depok",
    slug: "rumah-cluster-depok",
  },
  {
    title: "Rumah Subsidi Cibubur",
    location: "Cibubur, Jakarta Timur",
    price: "Rp 320.000.000",
    image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Rumah+Subsidi",
    slug: "rumah-subsidi-cibubur",
    promo: "Cicilan Ringan",
  },
  {
    title: "Apartemen Taman Anggrek",
    location: "Jakarta Barat",
    price: "Rp 1.200.000.000",
    image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Apartemen",
    slug: "apartemen-taman-anggrek",
  },
  {
    title: "Ruko Strategis Bekasi",
    location: "Bekasi",
    price: "Rp 980.000.000",
    image: "https://via.placeholder.com/400x300/f97316/ffffff?text=Ruko+Bekasi",
    slug: "ruko-strategis-bekasi",
    promo: "Harga Nego",
  },
  {
    title: "Tanah Kavling Bogor",
    location: "Bogor",
    price: "Rp 450.000.000",
    image: "https://via.placeholder.com/400x300/22c55e/ffffff?text=Tanah+Kavling",
    slug: "tanah-kavling-bogor",
  },
  {
    title: "Kontrakan 10 Pintu",
    location: "Depok",
    price: "Rp 1.000.000.000",
    image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Kontrakan",
    slug: "kontrakan-10-pintu",
  },
]

export default function ListingsPage() {
  return (
    <main className="bg-gray-50 min-h-screen px-4 pt-6 pb-20">
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Jual Beli Rumah & Apartemen Terbaru
          </h1>

          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
            <div className="flex md:hidden">
              <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
            <div className="hidden md:block">
              <PropertyFilter />
            </div>
            <div className="flex border rounded-lg bg-white">
              <button className="p-2 hover:bg-gray-100 rounded-l-lg">
                <Grid className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-r-lg">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Kategori - Hidden on mobile */}
          <aside className="hidden lg:block w-full lg:w-1/4 bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Lokasi</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="font-medium text-black">Indonesia</li>
              <li className="pl-4">Jakarta D.K.I.</li>
              <li className="pl-8 font-bold text-blue-600">Jakarta Selatan</li>
              <li className="pl-8 text-gray-400">Setia Budi (4.786)</li>
              <li className="pl-8 text-gray-400">Cilandak (4.701)</li>
              <li className="pl-8 text-gray-400">Jagakarsa (3.770)</li>
              <li className="pl-8 text-gray-400">Kebayoran Lama (3.770)</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-3">Harga</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {"< Rp 500 Juta"}
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Rp 500 Juta - 1 M
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Rp 1 M - 2 M
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {"> Rp 2 M"}
                </label>
              </div>
            </div>
          </aside>

          {/* Grid Property */}
          <div className="w-full lg:w-3/4">
            <div className="mb-4 text-sm text-gray-600">Menampilkan {listings.length} properti</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {listings.map((item, idx) => (
                <PropertyCard key={idx} {...item} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-1 md:space-x-2">
                <button className="px-2 py-1 md:px-3 md:py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                  Previous
                </button>
                <button className="px-2 py-1 md:px-3 md:py-1 bg-blue-600 text-white rounded text-sm">1</button>
                <button className="px-2 py-1 md:px-3 md:py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                  2
                </button>
                <button className="px-2 py-1 md:px-3 md:py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                  3
                </button>
                <button className="px-2 py-1 md:px-3 md:py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
