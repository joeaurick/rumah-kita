// File: components/TagFilter.tsx

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const tags = [
  "Semua", "biaya notaris", "simulasi biaya", "ppn rumah", "edukasi properti", "beli rumah", 
  "KPR", "Waktu Beli Rumah", "Properti 2025", "tips", "penipuan", "jual beli rumah", "properti",
  "Syariah", "Pembiayaan Rumah", "Properti Indonesia", "2025", "investasi", "sertifikat rumah", 
  "cek sertifikat online", "legalitas properti"
];

export default function TagFilter() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || "";

  function handleTagClick(tag: string) {
    const newParams = new URLSearchParams(searchParams.toString());
    if (tag === "Semua") {
      newParams.delete("tag");
    } else {
      newParams.set("tag", tag);
    }
    router.push(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="overflow-x-auto pb-2">
        <div className="flex md:flex-wrap gap-2 min-w-max md:justify-center">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 text-sm rounded-full border whitespace-nowrap transition
                ${
                  selectedTag === tag || (tag === "Semua" && !selectedTag)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-blue-700 hover:bg-blue-100"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
