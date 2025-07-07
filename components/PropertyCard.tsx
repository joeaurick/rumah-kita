/* File: components/PropertyCard.tsx */
"use client";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  slug?: string;
  promo?: string;
}

export default function PropertyCard({ title, location, price, image, slug, promo }: PropertyCardProps) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition">
      {promo && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          {promo}
        </div>
      )}
      <Image src={image} alt={title} width={400} height={250} className="w-full h-52 object-cover" />
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-bold text-blue-800">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-blue-600 font-semibold text-md">{price}</p>
        {slug && (
          <Link
            href={`/listings/${slug}`}
            className="inline-block mt-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Lihat Detail
          </Link>
        )}
      </div>
    </div>
  );
}
