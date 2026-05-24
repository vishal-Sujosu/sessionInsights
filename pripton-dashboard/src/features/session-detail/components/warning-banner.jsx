// src/features/session-detail/components/warning-banner.jsx
"use client"

import { AlertTriangle } from "lucide-react"

export function WarningBanner({ session, events = [] }) {
  const warningCount = events.filter(
    (event) => event.severity === "warning" || event.severity === "critical"
  ).length
  const displayedWarningCount = events.length ? warningCount : session?.warningCount

  if (
    !session ||
    (displayedWarningCount <= 2 && session.riskLevel !== "critical")
  ) {
    return null
  }

  return (
    <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-3">
      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-red-800">
          {session.riskLevel === "critical"
            ? "Critical integrity risk detected"
            : "Multiple integrity warnings"}
        </p>
        <p className="text-xs text-red-600 mt-0.5">
          {displayedWarningCount} warning events recorded during this session.
        </p>
      </div>
    </div>
  )
}
