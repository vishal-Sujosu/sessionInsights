"use client"

import { formatDuration } from "@/lib/utils"
import { SessionStatusBadge } from "./session-status-badge"
import { RiskScoreBar } from "./risk-score-bar"
import { TimestampCell } from "./timestamp-cell"
import { SessionRowActions } from "./session-row-actions"

export const sessionColumns = [
  {
    accessorKey: "candidateName",
    header: "Candidate",
    enableSorting: true,
    enableHiding: true,
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.candidateName}</div>
        <div className="text-sm text-muted-foreground">
          {row.original.candidateEmail}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "Session ID",
    enableSorting: false,
    enableHiding: true,
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">
        {row.original.id}
      </span>
    ),
  },
  {
    accessorKey: "sessionStatus",
    header: "Status",
    enableSorting: true,
    enableHiding: true,
    filterFn: "equals",
    cell: ({ row }) => <SessionStatusBadge status={row.original.sessionStatus} />,
  },
  {
    accessorKey: "integrityScore",
    header: "Risk score",
    enableSorting: true,
    enableHiding: true,
    sortingFn: "basic",
    cell: ({ row }) => <RiskScoreBar value={row.original.integrityScore} />,
  },
  {
    accessorKey: "durationSeconds",
    header: "Duration",
    enableSorting: true,
    enableHiding: true,
    cell: ({ row }) => formatDuration(row.original.durationSeconds),
    meta: {
      className: "hidden md:table-cell",
    },
  },
  {
    accessorKey: "currentState",
    header: "Current State",
    enableSorting: true,
    enableHiding: true,
    cell: ({ row }) => (
      <span className="capitalize text-sm text-gray-600">
        {row.original.currentState.replace("-", " ")}
      </span>
    ),
  },
  {
    accessorKey: "lastActivityAt",
    header: "Last activity",
    enableSorting: true,
    enableHiding: true,
    cell: ({ row }) => <TimestampCell isoString={row.original.lastActivityAt} />,
  },
  {
    accessorKey: "riskLevel",
    enableHiding: false,
    enableSorting: false,
    meta: { hidden: true },
  },
  {
    id: "actions",
    header: "",
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => <SessionRowActions session={row.original} />,
  },
]
