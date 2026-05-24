"use client"

import { ChevronDown, ChevronUp } from "lucide-react"

export function RiskScoreSortIndicator({ sortDirection }) {
  if (!sortDirection) return null

  const isAsc = sortDirection === "asc"
  const Icon = isAsc ? ChevronUp : ChevronDown

  return (
    <Icon className="h-4 w-4 ml-1 inline-block text-orange-500" />
  )
}
