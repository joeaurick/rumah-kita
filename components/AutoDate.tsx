"use client"
import { useEffect, useState } from "react"
import { formatIndonesianDate } from "@/lib/dateUtils"

interface AutoDateProps {
  format?: "full" | "short" | "relative"
  date?: Date | string
  className?: string
}

export default function AutoDate({ format = "full", date, className = "" }: AutoDateProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    // Update setiap menit
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const targetDate = date ? (typeof date === "string" ? new Date(date) : date) : currentDate

  const formatDate = () => {
    switch (format) {
      case "full":
        return formatIndonesianDate(targetDate)
      case "short":
        return targetDate.toLocaleDateString("id-ID")
      case "relative":
        return getRelativeTime(targetDate)
      default:
        return formatIndonesianDate(targetDate)
    }
  }

  return <span className={className}>{formatDate()}</span>
}

function getRelativeTime(date: Date): string {
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return "Hari ini"
  if (diffInDays === 1) return "1 hari yang lalu"
  if (diffInDays < 7) return `${diffInDays} hari yang lalu`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu yang lalu`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} bulan yang lalu`
  return `${Math.floor(diffInDays / 365)} tahun yang lalu`
}
