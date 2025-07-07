/* File: components/Navbar.tsx */
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-black text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <Link href="/">
        <span className="font-extrabold text-xl tracking-wide">Properti Kita</span>
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link href="/listings" className="hover:underline">Listing</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/kontak" className="hover:underline">Kontak</Link>
      </div>
    </nav>
  );
}