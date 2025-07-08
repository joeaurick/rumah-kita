// Utility functions untuk tanggal otomatis
export function getCurrentDate(): string {
  return new Date().toISOString().split("T")[0] // YYYY-MM-DD
}

export function getCurrentDateTime(): string {
  return new Date().toISOString()
}

export function formatIndonesianDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]

  const dayName = days[dateObj.getDay()]
  const day = dateObj.getDate()
  const month = months[dateObj.getMonth()]
  const year = dateObj.getFullYear()

  return `${dayName}, ${day} ${month} ${year}`
}

export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const now = new Date()
  const diffInMs = now.getTime() - dateObj.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return "Hari ini"
  if (diffInDays === 1) return "1 hari yang lalu"
  if (diffInDays < 7) return `${diffInDays} hari yang lalu`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu yang lalu`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} bulan yang lalu`
  return `${Math.floor(diffInDays / 365)} tahun yang lalu`
}
