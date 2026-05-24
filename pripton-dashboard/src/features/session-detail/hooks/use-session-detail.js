// src/features/session-detail/hooks/use-session-detail.js
"use client"

import { useQuery } from "@tanstack/react-query"
import { getSessionById } from "@/services/sessions-service"
import { getEventsBySession } from "@/services/events-service"

export function useSessionDetail(sessionId) {
  return useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSessionById(sessionId),
    enabled: !!sessionId,
    staleTime: 60 * 1000,
  })
}

export function useSessionEvents(session) {
  return useQuery({
    queryKey: ["session-events", session?.id],
    queryFn: () => getEventsBySession(session),
    enabled: !!session?.id,
    staleTime: 60 * 1000,
  })
}
