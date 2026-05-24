"use client"

import { useMemo } from "react"
import { useSessions } from "../hooks/use-sessions"
import { useSessionTable } from "../hooks/use-session-table"
import { useDashboardStore } from "@/store/dashboard-store"
import { SessionFilters } from "./session-filters"
import { DataTable } from "@/components/ui/data-table"
import { DataTablePagination } from "@/components/ui/data-table-pagination"
import { DataTableToolbar } from "./table-toolbar"

export function SessionTable({ initialData }) {
  const { data: sessions, isLoading } = useSessions(initialData)
  const { filters } = useDashboardStore()

  const columnFilters = useMemo(() => {
    const result = []
    if (filters.status !== "all") {
      result.push({ id: "sessionStatus", value: filters.status })
    }
    if (filters.riskLevel !== "all") {
      result.push({ id: "riskLevel", value: filters.riskLevel })
    }
    return result
  }, [filters.status, filters.riskLevel])

  const table = useSessionTable(sessions ?? [], filters.search, columnFilters)

  return (
    <div className="space-y-4 min-w-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SessionFilters />
        <DataTableToolbar table={table} />
      </div>

      <DataTable
        table={table}
        isLoading={isLoading}
        emptyMessage="No sessions match your filters."
      />
      <DataTablePagination table={table} />
    </div>
  )
}
