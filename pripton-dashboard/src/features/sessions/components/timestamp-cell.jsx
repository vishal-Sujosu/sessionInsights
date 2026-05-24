"use client"

import { useState, useEffect } from "react"
import { formatTimestamp } from "@/lib/utils"

export function TimestampCell({ isoString }) {
  const [display, setDisplay] = useState(isoString)

  useEffect(() => {
    setDisplay(formatTimestamp(isoString))
  }, [isoString])

  return <span className="text-sm text-gray-600 whitespace-nowrap">{display}</span>
}
