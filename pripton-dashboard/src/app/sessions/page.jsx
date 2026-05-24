import { getSessions } from "@/services/sessions-service"
import { SessionTable } from "@/features/sessions/components/session-table"
import  SessionDetailPanel  from "@/features/session-detail/components/session-detail-panel"

export default async function SessionsPage() {
  const sessions = await getSessions()

  return (
    <div className="p-0 space-y-1">
      <div>
        <h1 className="text-2xl font-semibold">Sessions</h1>
        <p className="text-sm text-gray-500 mt-1">
          Monitor candidate session activity and integrity scores
        </p>
      </div>
      <SessionTable initialData={sessions} />
      <SessionDetailPanel />
    </div>
  )
}
