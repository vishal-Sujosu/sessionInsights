"use client"

import { useQuery } from "@tanstack/react-query"
import { getSessions } from "@/services/sessions-service"

export function useSessions(initialData) {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
    initialData,
    staleTime: 60 * 1000,
  })
}
