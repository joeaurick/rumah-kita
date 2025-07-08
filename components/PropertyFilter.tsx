"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"

interface FilterState {
  priceRange: number[]
  bedrooms: string[]
  bathrooms: string[]
  propertyType: string[]
  features: string[]
}

export default function PropertyFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 5000000000],
    bedrooms: [],
    bathrooms: [],
    propertyType: [],
    features: [],
  })

  const formatPrice = (price: number) => {
    if (price >= 1000000000) {
      return `Rp ${(price / 1000000000).toFixed(1)} M`
    }
    return `Rp ${(price / 1000000).toFixed(0)} Juta`
  }

  const handleCheckboxChange = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 5000000000],
      bedrooms: [],
      bathrooms: [],
      propertyType: [],
      features: [],
    })
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
      >
        <Filter className="h-4 w-4" />
        Filter
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filter Properti</h2>
            <div className="flex gap-2">
              <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-gray-700">
                Clear
              </button>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-2">Rentang Harga</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="5000000000"
                  step="100000000"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, priceRange: [0, Number.parseInt(e.target.value)] }))
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{formatPrice(filters.priceRange[0])}</span>
                  <span>{formatPrice(filters.priceRange[1])}</span>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Tipe Properti</label>
              <div className="space-y-2">
                {["Rumah", "Apartemen", "Villa", "Ruko", "Tanah"].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes(type)}
                      onChange={() => handleCheckboxChange("propertyType", type)}
                      className="rounded"
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium mb-2">Kamar Tidur</label>
              <div className="space-y-2">
                {["1", "2", "3", "4", "5+"].map((bedroom) => (
                  <label key={bedroom} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.bedrooms.includes(bedroom)}
                      onChange={() => handleCheckboxChange("bedrooms", bedroom)}
                      className="rounded"
                    />
                    <span className="text-sm">{bedroom} Kamar</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-medium mb-2">Fasilitas</label>
              <div className="space-y-2">
                {["Garasi", "Taman", "Kolam Renang", "Security 24 Jam", "Dekat Sekolah", "Dekat Mall"].map(
                  (feature) => (
                    <label key={feature} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.features.includes(feature)}
                        onChange={() => handleCheckboxChange("features", feature)}
                        className="rounded"
                      />
                      <span className="text-sm">{feature}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Terapkan Filter
          </button>
        </div>
      </div>
    </div>
  )
}
