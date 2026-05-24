// src/features/session-detail/components/timeline-placeholder.jsx
"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function TimelinePlaceholder({ events, isLoading }) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-3">
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="space-y-1.5 flex-1">
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!events || events.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-6">
        No events recorded
      </p>
    )
  }

  return (
    <div className="space-y-1">
      {events.map(event => (
        <div
          key={event.id}
          className="flex items-start gap-2 py-2 border-b border-border last:border-0"
        >
          <span className="text-xs text-muted-foreground w-20 flex-shrink-0 pt-0.5 font-mono">
            {new Date(event.occurredAt).toLocaleTimeString([], {
              hour: '2-digit', minute: '2-digit', second: '2-digit'
            })}
          </span>
          <span className="text-xs text-foreground flex-1">
            {event.description}
          </span>
        </div>
      ))}
    </div>
  )
}