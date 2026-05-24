// src/features/session-detail/components/session-stats.jsx
"use client"

import { useMemo } from "react"
import { Activity, AlertTriangle, RefreshCw, EyeOff } from "lucide-react"
import { StatCard } from "@/components/ui/stat-card"

export function SessionStats({ session, events = [] }) {
  const stats = useMemo(() => {
    if (!session) return { totalEvents: 0, warningEvents: 0, reconnects: 0, focusLosses: 0 }

    let warningEvents = 0
    let reconnects = 0
    let focusLosses = 0

    events.forEach(event => {
      if (event.severity === "warning" || event.severity === "critical") {
        warningEvents++
      }
      if (event.type === "reconnect") {
        reconnects++
      }
      if (event.type === "focus_loss") {
        focusLosses++
      }
    })

    return {
      totalEvents: session.eventCount || 0,
      warningEvents,
      reconnects,
      focusLosses
    }
  }, [session, events])

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatCard
        label="Total events"
        value={stats.totalEvents}
        icon={<Activity />}
      />
      <StatCard
        label="Warning events"
        value={stats.warningEvents}
        icon={<AlertTriangle />}
        color={stats.warningEvents > 0 ? "text-amber-600" : undefined}
      />
      <StatCard
        label="Reconnects"
        value={stats.reconnects}
        icon={<RefreshCw />}
        color={stats.reconnects > 0 ? "text-blue-600" : undefined}
      />
      <StatCard
        label="Focus losses"
        value={stats.focusLosses}
        icon={<EyeOff />}
        color={stats.focusLosses > 0 ? "text-orange-600" : undefined}
      />
    </div>
  )
}