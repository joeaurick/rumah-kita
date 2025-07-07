// File: app/listings/page.tsx

import PropertyCard from "@/components/PropertyCard";

const listings = [
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
    title: "Rumah Cluster Depok Sawangan",
    location: "Depok, Jawa Barat",
    price: "Rp 650.000.000",
    image: "https://source.unsplash.com/featured/?house,depok",
    slug: "rumah-cluster-depok",
  },
  {
    title: "Rumah Subsidi Bekasi Utara",
    location: "Bekasi, Jawa Barat",
    price: "Rp 180.000.000",
    image: "https://source.unsplash.com/featured/?subsidized,house,bekasi",
    slug: "rumah-subsidi-bekasi",
  },
  {
    title: "Apartemen Tangerang Dekat Stasiun",
    location: "Tangerang Kota",
    price: "Rp 400.000.000",
    image: "https://source.unsplash.com/featured/?apartment,tangerang",
    slug: "apartemen-tangerang",
  },
  {
    title: "Rumah Subsidi Bogor Cileungsi",
    location: "Cileungsi, Bogor",
    price: "Rp 220.000.000",
    image: "https://source.unsplash.com/featured/?house,bogor",
    slug: "rumah-subsidi-bogor",
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
  {
    title: "Rumah Second Siap Huni di Bekasi",
    location: "Bekasi Kota",
    price: "Rp 570.000.000",
    image: "https://source.unsplash.com/featured/?second-house,bekasi",
    slug: "rumah-second-bekasi",
  },
  {
    title: "Apartemen Studio Depok Margonda",
    location: "Depok Kota",
    price: "Rp 300.000.000",
    image: "https://source.unsplash.com/featured/?studio-apartment,depok",
    slug: "apartemen-studio-depok",
  },
  {
    title: "Perumahan Baru BSD City",
    location: "BSD City, Tangsel",
    price: "Rp 1.800.000.000",
    image: "https://source.unsplash.com/featured/?bsd-house",
    slug: "perumahan-baru-bsd",
  },
  {
    title: "Rumah Subsidi Karawang",
    location: "Karawang Timur",
    price: "Rp 190.000.000",
    image: "https://source.unsplash.com/featured/?subsidized,house,karawang",
    slug: "rumah-subsidi-karawang",
  },
  {
    title: "Apartemen Green Lake Jakarta Barat",
    location: "Jakarta Barat",
    price: "Rp 550.000.000",
    image: "https://source.unsplash.com/featured/?apartment,jakarta",
    slug: "apartemen-greenlake-jakbar",
  },
  {
    title: "Rumah Tumbuh di Cikarang",
    location: "Cikarang, Bekasi",
    price: "Rp 290.000.000",
    image: "https://source.unsplash.com/featured/?house,cikarang",
    slug: "rumah-tumbuh-cikarang",
  },
  {
    title: "Cluster Eksklusif Alam Sutera",
    location: "Alam Sutera, Tangerang",
    price: "Rp 2.100.000.000",
    image: "https://source.unsplash.com/featured/?house,alam-sutera",
    slug: "cluster-alam-sutera",
  },
  {
    title: "Rumah Kosongan Pondok Cabe",
    location: "Pondok Cabe, Tangsel",
    price: "Rp 400.000.000",
    image: "https://source.unsplash.com/featured/?house,pondok-cabe",
    slug: "rumah-pondok-cabe",
  },
  {
    title: "Rumah Siap Huni Cibinong",
    location: "Cibinong, Bogor",
    price: "Rp 510.000.000",
    image: "https://source.unsplash.com/featured/?house,cibinong",
    slug: "rumah-cibinong",
  },
  {
    title: "Cluster Modern Cinere",
    location: "Cinere, Depok",
    price: "Rp 980.000.000",
    image: "https://source.unsplash.com/featured/?house,cinere",
    slug: "cluster-modern-cinere",
  },
  {
    title: "Apartemen Dekat UI",
    location: "Depok Margonda",
    price: "Rp 420.000.000",
    image: "https://source.unsplash.com/featured/?apartment,ui",
    slug: "apartemen-dekat-ui",
  }
];

export default function ListingsPage() {
  return (
    <main className="bg-gray-100 min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Listing Properti Terkini
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {listings.map((item, idx) => (
          <PropertyCard key={idx} {...item} />
        ))}
      </div>
    </main>
  );
}
