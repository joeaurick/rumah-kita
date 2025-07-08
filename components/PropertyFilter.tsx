"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface FilterState {
  priceRange: number[]
  bedrooms: string[]
  bathrooms: string[]
  propertyType: string[]
  features: string[]
}

export default function PropertyFilter() {
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Filter Properti
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4" />
              Clear
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Price Range */}
          <div>
            <Label className="text-sm font-medium">Rentang Harga</Label>
            <div className="mt-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value }))}
                max={5000000000}
                min={0}
                step={100000000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatPrice(filters.priceRange[0])}</span>
                <span>{formatPrice(filters.priceRange[1])}</span>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <Label className="text-sm font-medium">Tipe Properti</Label>
            <div className="space-y-2 mt-2">
              {["Rumah", "Apartemen", "Villa", "Ruko", "Tanah"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.propertyType.includes(type)}
                    onCheckedChange={() => handleCheckboxChange("propertyType", type)}
                  />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <Label className="text-sm font-medium">Kamar Tidur</Label>
            <div className="space-y-2 mt-2">
              {["1", "2", "3", "4", "5+"].map((bedroom) => (
                <div key={bedroom} className="flex items-center space-x-2">
                  <Checkbox
                    id={`bedroom-${bedroom}`}
                    checked={filters.bedrooms.includes(bedroom)}
                    onCheckedChange={() => handleCheckboxChange("bedrooms", bedroom)}
                  />
                  <Label htmlFor={`bedroom-${bedroom}`} className="text-sm">
                    {bedroom} Kamar
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <Label className="text-sm font-medium">Fasilitas</Label>
            <div className="space-y-2 mt-2">
              {["Garasi", "Taman", "Kolam Renang", "Security 24 Jam", "Dekat Sekolah", "Dekat Mall"].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={feature}
                    checked={filters.features.includes(feature)}
                    onCheckedChange={() => handleCheckboxChange("features", feature)}
                  />
                  <Label htmlFor={feature} className="text-sm">
                    {feature}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button className="w-full mt-6">Terapkan Filter</Button>
      </DialogContent>
    </Dialog>
  )
}
