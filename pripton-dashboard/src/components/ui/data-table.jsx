"use client"

import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { flexRender } from "@tanstack/react-table"
import { useDashboardStore } from "@/store/dashboard-store"
import { cn } from "@/lib/utils"
import { EmptyState } from "./empty-state"

export function DataTable({ table, isLoading, emptyMessage = "No results found." }) {
  const selectedSessionId = useDashboardStore((s) => s.selectedSessionId)
  const openDetail = useDashboardStore((s) => s.openDetail)
  const rows = table.getRowModel().rows

  return (
    <div className="rounded-md border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b bg-muted/10 dark:bg-muted/20">
              {headerGroup.headers.map((header) => {
                if (header.column.columnDef.meta?.hidden) return null

                return (
                  <th
                    key={header.id}
                    className={cn(
                      "h-10 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
                      header.column.columnDef.meta?.className
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          "flex items-center gap-1",
                          header.column.getCanSort() &&
                            "cursor-pointer select-none"
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <div className="w-3.5 h-3.5 ml-1">
                            {{
                              asc: <ChevronUp className="h-3.5 w-3.5" />,
                              desc: <ChevronDown className="h-3.5 w-3.5" />,
                            }[header.column.getIsSorted()] ?? (
                              <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground/40" />
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            Array.from({ length: 8 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {table.getAllColumns().map((column, colIndex) => {
                  if (column.columnDef.meta?.hidden) return null
                  return (
                    <td key={colIndex} className={cn("p-4 align-middle", column.columnDef.meta?.className)}>
                      <Skeleton className="h-4 w-full" />
                    </td>
                  )
                })}
              </tr>
            ))
          ) : rows.length === 0 ? (
            <tr>
              <td
                colSpan={table.getAllColumns().filter((c) => !c.columnDef.meta?.hidden).length}
                className="h-48 text-center align-middle"
              >
                <EmptyState message={emptyMessage} />
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => openDetail(row.original)}
                className={cn(
                  "border-b transition-colors hover:bg-muted/50 cursor-pointer",
                  row.original.id === selectedSessionId && "bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.columnDef.meta?.hidden) return null
                  return (
                    <td
                      key={cell.id}
                      className={cn(
                        "p-4 align-middle",
                        cell.column.columnDef.meta?.className
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
