"use client"

import { Eye, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDashboardStore } from "@/store/dashboard-store"

export function SessionRowActions({ session }) {
  const openDetail = useDashboardStore((s) => s.openDetail)

  return (
    <div className="flex items-center gap-2 justify-end">
      <Button
        variant="ghost"
        size="icon"
        title="Copy ID"
        onClick={(event) => {
          event.stopPropagation()
          navigator.clipboard.writeText(session.id)
        }}
      >
        <Copy className="h-4 w-4" />
        <span className="sr-only">Copy ID</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="View details"
        onClick={(event) => {
          event.stopPropagation()
          openDetail(session)
        }}
      >
        <Eye className="h-4 w-4" />
        <span className="sr-only">View details</span>
      </Button>
    </div>
  )
}
