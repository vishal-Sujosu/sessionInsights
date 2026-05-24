// src/components/ui/risk-indicator.jsx
"use client"

import { cn } from "@/lib/utils"
import { RISK_LEVEL_LABELS, RISK_LEVEL_COLORS } from "@/lib/constants"

export default function RiskIndicator({ riskLevel }) {
  const isCritical = riskLevel === "critical"
  
  const dotColor = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-orange-500",
    critical: "bg-red-500"
  }[riskLevel] || "bg-gray-500"

  const textColor = RISK_LEVEL_COLORS[riskLevel] || "text-foreground"

  return (
    <div className="flex items-center gap-1.5">
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          dotColor,
          isCritical && "animate-pulse"
        )}
      />
      <span className={cn("text-sm font-medium", textColor)}>
        {RISK_LEVEL_LABELS[riskLevel]}
      </span>
    </div>
  )
}