// src/components/ui/stat-card.jsx
"use client"

import { cn } from "@/lib/utils"

export function StatCard({ label, value, icon, color = "text-gray-900" }) {
  return (
    <div className="rounded-lg border bg-white p-4 space-y-1">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
          {label}
        </p>
        {icon && <span className={cn("h-4 w-4", color)}>{icon}</span>}
      </div>
      <p className={cn("text-2xl font-semibold", color)}>{value}</p>
    </div>
  )
}