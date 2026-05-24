import { getSessions } from "@/services/sessions-service"
import { StatsSummary } from "@/components/ui/stats-summary"
import { RiskLevelChart } from "@/components/charts/risk-level-chart"
import { SessionStatusChart } from "@/components/charts/session-status-chart"
import { IntegrityScoreChart } from "@/components/charts/integrity-score-chart"

export default async function Dashboard() {
  const sessions = await getSessions()

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      
      <StatsSummary sessions={sessions} />
      
      <div className="grid gap-6 md:grid-cols-2">
        <RiskLevelChart sessions={sessions} />
        <SessionStatusChart sessions={sessions} />
      </div>
      
      <div className="grid gap-6">
        <IntegrityScoreChart sessions={sessions} />
      </div>
    </div>
  )
}
