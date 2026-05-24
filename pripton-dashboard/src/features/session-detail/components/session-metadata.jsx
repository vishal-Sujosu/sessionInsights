// src/features/session-detail/components/session-metadata.jsx
"use client"

import { useState, useEffect } from "react"
import { formatDuration, formatTimestamp, truncate, cn } from "@/lib/utils"

function TimestampDisplay({ isoString }) {
  const [display, setDisplay] = useState(isoString)
  
  useEffect(() => {
    setDisplay(formatTimestamp(isoString))
  }, [isoString])
  
  return <span className="text-sm text-foreground">{display}</span>
}

export function SessionMetadata({ session, events = [] }) {
  if (!session) return null

  const stateDotColors = {
    "in-progress": "bg-green-500 dark:bg-green-400",
    "idle": "bg-yellow-500 dark:bg-yellow-400",
    "disconnected": "bg-red-500 dark:bg-red-400",
    "completed": "bg-gray-500 dark:bg-gray-400"
  }

  const currentStateDisplay = (
    <div className="flex items-center gap-1.5">
      <span className={cn("h-2 w-2 rounded-full", stateDotColors[session.currentState] || "bg-gray-500 dark:bg-gray-400")} />
      <span>{session.currentState}</span>
    </div>
  )

  const fields = [
    { label: "Started", value: <TimestampDisplay isoString={session.startedAt} /> },
    { label: "Duration", value: formatDuration(session.durationSeconds) },
    { label: "Current state", value: currentStateDisplay },
    { label: "Exam", value: truncate(session.examTitle, 36) },
    { label: "Total events", value: events.length || session.eventCount },
    { label: "Candidate", value: session.candidateEmail },
  ]

  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
      {fields.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-xs text-muted-foreground">{label}</dt>
          <dd className="text-sm text-foreground font-medium mt-0.5">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
