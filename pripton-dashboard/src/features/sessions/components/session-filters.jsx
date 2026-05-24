"use client"

import { Search, X } from "lucide-react"
import { useDashboardStore } from "@/store/dashboard-store"
import { SESSION_STATUS_LABELS, RISK_LEVEL_LABELS } from "@/lib/constants"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function SessionFilters() {
  const { filters, setFilters, resetFilters } = useDashboardStore()

  const hasActiveFilters =
    filters.search !== "" ||
    filters.status !== "all" ||
    filters.riskLevel !== "all"

  return (
    <div className="flex flex-wrap gap-3">
      <div className="relative flex-1 min-w-[200px] max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search candidate or exam..."
          className="pl-9"
          value={filters.search}
          onChange={(e) => setFilters({ search: e.target.value })}
        />
      </div>

      <div className="relative">
        <span className="pointer-events-none absolute -top-1.5 left-2 z-10 bg-background px-1 text-[11px] font-medium leading-none text-muted-foreground">
          Status
        </span>
        <Select
          value={filters.status}
          onValueChange={(value) => setFilters({ status: value })}
        >
          <SelectTrigger aria-label="Status" className="w-[160px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.entries(SESSION_STATUS_LABELS).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative">
        <span className="pointer-events-none absolute -top-1.5 left-2 z-10 bg-background px-1 text-[11px] font-medium leading-none text-muted-foreground">
          Risk Level
        </span>
        <Select
          value={filters.riskLevel}
          onValueChange={(value) => setFilters({ riskLevel: value })}
        >
          <SelectTrigger aria-label="Risk Level" className="w-[160px]">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risk Levels</SelectItem>
            {Object.entries(RISK_LEVEL_LABELS).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          onClick={resetFilters}
          className="px-2 lg:px-3"
        >
          Clear
          <X className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
