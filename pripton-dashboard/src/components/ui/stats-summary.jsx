"use client"

import { StatCard } from "./stat-card"

export function StatsSummary({ sessions = [] }) {
  const totalSessions = sessions.length
  const flaggedSessions = sessions.filter(s => s.sessionStatus === "flagged").length
  const averageRiskScore = 
    sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.integrityScore, 0) / sessions.length)
      : 0

  const activeSessions = sessions.filter(s => s.sessionStatus === "active").length
  const criticalRiskCount = sessions.filter(s => s.riskLevel === "critical").length

  return (
    <div className="grid gap-4 md:grid-cols-5 mb-6">
      <StatCard
        label="Total Sessions"
        value={totalSessions}
      />
      <StatCard
        label="Flagged"
        value={flaggedSessions}
      />
      <StatCard
        label="Avg Risk Score"
        value={averageRiskScore}
      />
      <StatCard
        label="Active Sessions"
        value={activeSessions}
      />
      <StatCard
        label="Critical Risk"
        value={criticalRiskCount}
      />
    </div>
  )
}
