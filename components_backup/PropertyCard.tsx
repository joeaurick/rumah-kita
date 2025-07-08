/* File: components/PropertyCard.tsx */
"use client"
import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  title: string
  location: string
  price: string
  image: string
  slug?: string
  promo?: string
}

export default function PropertyCard({ title, location, price, image, slug, promo }: PropertyCardProps) {
  return (
    <div className="relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <div className="relative w-full h-52">
        <Image
          src={image || "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Foto+Properti"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {promo && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            {promo}
          </div>
        )}
      </div>

      <div className="p-3 space-y-1">
        <h3 className="text-md font-semibold text-gray-800 leading-snug line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-blue-700 font-bold text-sm">{price}</p>

        {slug && (
          <div className="pt-2">
            <Link href={`/listings/${slug}`} className="inline-block text-sm text-blue-600 hover:underline">
              Lihat Detail →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
