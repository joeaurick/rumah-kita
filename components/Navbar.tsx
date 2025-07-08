// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white text-black px-4 md:px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo Info Properti"
            width={140}
            height={40}
            className="h-auto w-auto max-w-[140px] md:max-w-[180px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 text-sm md:text-base font-medium">
          <Link href="/listings" className="hover:text-blue-400">
            Listing
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
          <Link href="/kontak" className="hover:text-blue-400">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}
