"use client"

import { useState } from "react"
import { Search, MapPin, Home, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = () => {
    // Implement search logic here
    console.log({ searchQuery, location, propertyType, priceRange })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 -mt-8 relative z-10 mx-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Cari properti..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <MapPin className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Pilih Lokasi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jakarta">Jakarta</SelectItem>
            <SelectItem value="bandung">Bandung</SelectItem>
            <SelectItem value="surabaya">Surabaya</SelectItem>
            <SelectItem value="medan">Medan</SelectItem>
            <SelectItem value="semarang">Semarang</SelectItem>
          </SelectContent>
        </Select>

        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <Home className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Tipe Properti" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rumah">Rumah</SelectItem>
            <SelectItem value="apartemen">Apartemen</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="ruko">Ruko</SelectItem>
            <SelectItem value="tanah">Tanah</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger>
            <DollarSign className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Harga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-500">Rp 500 Juta</SelectItem>
            <SelectItem value="500-1000">Rp 500 Juta - 1 M</SelectItem>
            <SelectItem value="1000-2000">Rp 1 M - 2 M</SelectItem>
            <SelectItem value="2000+">&gt; Rp 2 M</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleSearch} className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
        <Search className="h-4 w-4 mr-2" />
        Cari Properti
      </Button>
    </div>
  )
}
