"use client"

import { formatScore } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function RiskScoreBar({ value }) {
  let fillColor = "bg-red-500"
  if (value >= 76) fillColor = "bg-green-500"
  else if (value >= 56) fillColor = "bg-yellow-500"
  else if (value >= 31) fillColor = "bg-orange-500"

  return (
    <div className="flex items-center gap-3 w-full max-w-[150px]">
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className={cn("h-full rounded-full", fillColor)}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-sm font-medium w-10 text-right">
        {formatScore(value)}
      </span>
    </div>
  )
}
