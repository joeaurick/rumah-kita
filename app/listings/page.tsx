// File: app/listings/page.tsx

import PropertyCard from "@/components/PropertyCard";

const listings = [
  {
    title: "Rumah Mewah di Jakarta",
    location: "Jakarta Selatan",
    price: "Rp 2.500.000.000",
    image: "/images/og-image.jpg",
    slug: "rumah-mewah-jakarta",
    promo: "Hot Deal",
  },
  {
    title: "Rumah Minimalis di Bandung",
    location: "Bandung",
    price: "Rp 850.000.000",
    image: "/images/sold-out.jpg",
    slug: "rumah-minimalis-bandung",
    promo: "Diskon 10%",
  },
  {
    title: "Villa di Bali",
    location: "Ubud, Bali",
    price: "Rp 3.200.000.000",
    image: "/images/sold-out.jpg",
    slug: "villa-di-bali",
  },
  {
    title: "Rumah Cluster Depok Sawangan",
    location: "Depok, Jawa Barat",
    price: "Rp 650.000.000",
    image: "/images/sold-out.jpg",
    slug: "rumah-cluster-depok",
  },
  {
    title: "Rumah Subsidi Cibubur",
    location: "Cibubur, Jakarta Timur",
    price: "Rp 320.000.000",
    image: "/images/sold-out.jpg",
    slug: "rumah-subsidi-cibubur",
    promo: "Cicilan Ringan",
  },
  {
    title: "Apartemen Taman Anggrek",
    location: "Jakarta Barat",
    price: "Rp 1.200.000.000",
    image: "/images/sold-out.jpg",
    slug: "apartemen-taman-anggrek",
  },
  {
    title: "Ruko Strategis Bekasi",
    location: "Bekasi",
    price: "Rp 980.000.000",
    image: "/images/sold-out.jpg",
    slug: "ruko-strategis-bekasi",
    promo: "Harga Nego",
  },
  {
    title: "Tanah Kavling Bogor",
    location: "Bogor",
    price: "Rp 450.000.000",
    image: "/images/sold-out.jpg",
    slug: "tanah-kavling-bogor",
  },
  {
    title: "Kontrakan 10 Pintu",
    location: "Depok",
    price: "Rp 1.000.000.000",
    image: "/images/sold-out.jpg",
    slug: "kontrakan-10-pintu",
  },
];

export default function ListingsPage() {
  return (
    <main className="bg-gray-50 min-h-screen px-4 pt-6 pb-20">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Jual Beli Rumah & Apartemen Terbaru
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Kategori */}
          <aside className="w-full md:w-1/4 bg-white rounded-xl shadow p-4">
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
          </aside>

          {/* Grid Property */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((item, idx) => (
              <PropertyCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
