import { getSessions } from "@/services/sessions-service"
import { SessionTable } from "@/features/sessions/components/session-table"

export default async function SessionsPage() {
  const sessions = await getSessions()

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Sessions</h1>
        <p className="text-sm text-gray-500 mt-1">
          Monitor candidate session activity and integrity scores
        </p>
      </div>
      <SessionTable initialData={sessions} />
    </div>
  )
}
