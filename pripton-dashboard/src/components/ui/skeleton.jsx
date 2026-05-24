"use client"

import { cn } from "@/lib/utils"

export function Skeleton({ className }) {
  return (
    <div className={cn("animate-pulse rounded-md bg-muted/30 dark:bg-muted/50", className)} />
  )
}
