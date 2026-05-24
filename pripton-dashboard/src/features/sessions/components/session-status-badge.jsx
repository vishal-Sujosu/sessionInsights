"use client"

import { SESSION_STATUS_LABELS, SESSION_STATUS_COLORS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function SessionStatusBadge({ status }) {
  const label = SESSION_STATUS_LABELS[status] ?? status
  const colorClass = SESSION_STATUS_COLORS[status] ?? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        colorClass
      )}
    >
      {label}
    </span>
  )
}
