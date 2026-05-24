"use client"

// src/features/session-detail/components/session-detail-panel.jsx

import { useEffect } from "react"
import { useDashboardStore } from "@/store/dashboard-store"
import { useSessionDetail, useSessionEvents } from "@/features/session-detail/hooks/use-session-detail"
import { AnimatePresence, motion } from "framer-motion"
import { X, Copy, ArrowLeft } from "lucide-react"
import { SessionStatusBadge } from "@/features/sessions/components/session-status-badge"
import  RiskIndicator  from "@/components/ui/risk-indicator"
import { RiskScoreBar } from "@/features/sessions/components/risk-score-bar"
import { WarningBanner } from "@/features/session-detail/components/warning-banner"
import { Separator } from "@/components/ui/separator"
import { SessionMetadata } from "@/features/session-detail/components/session-metadata";
import { SessionStats } from "@/features/session-detail/components/session-stats";
import { Timeline } from "@/features/timeline/components/timeline";
import { Skeleton } from "@/components/ui/skeleton"

export default function SessionDetailPanel() {
  const selectedSessionId = useDashboardStore(s => s.selectedSessionId)
  const selectedSession = useDashboardStore(s => s.selectedSession)
  const isDetailOpen = useDashboardStore(s => s.isDetailOpen)
  const closeDetail = useDashboardStore(s => s.closeDetail)

  const { data: fetchedSession, isLoading: sessionLoading } = useSessionDetail(selectedSessionId)
  const session = selectedSession ?? fetchedSession
  const { data: events = [], isLoading: eventsLoading } = useSessionEvents(session)

  useEffect(() => {
    if (!isDetailOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = overflow
    }
  }, [isDetailOpen])

  return (
    <AnimatePresence>
      {isDetailOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeDetail}
            onWheel={(event) => event.preventDefault()}
            onTouchMove={(event) => event.preventDefault()}
          />
          
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full md:w-[680px] bg-background shadow-xl flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          >
            {sessionLoading && !session ? (
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-md" />
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
                  <div className="flex gap-3">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </div>
                  <Skeleton className="h-40 w-full rounded-lg" />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Skeleton className="h-20 w-full rounded-lg" />
                    <Skeleton className="h-20 w-full rounded-lg" />
                    <Skeleton className="h-20 w-full rounded-lg" />
                    <Skeleton className="h-20 w-full rounded-lg" />
                  </div>
                </div>
              </div>
            ) : session ? (
              <>
                <div className="flex items-center justify-between border-b px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={closeDetail}
                      className="md:hidden p-1 -ml-1 text-muted-foreground hover:text-foreground"
                      title="Back"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div>
                      <h2 className="font-semibold text-foreground">{session.candidateName}</h2>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mt-0.5">
                        <span>{session.id}</span>
                        <button
                          onClick={() => navigator.clipboard.writeText(session.id)}
                          className="hover:text-foreground p-0.5 cursor-pointer rounded-md"
                          title="Copy session ID"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeDetail}
                    className="p-1 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <SessionStatusBadge status={session.sessionStatus} />
                    <RiskIndicator riskLevel={session.riskLevel} />
                    <RiskScoreBar value={session.integrityScore} />
                  </div>

                  <WarningBanner session={session} events={events} />

                  <Separator />

                  <h3 className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Session details
                  </h3>

                  <SessionMetadata session={session} events={events} />

                  <Separator />

                  <h3 className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Activity summary
                  </h3>

                  <SessionStats session={session} events={events} />

                  <Separator />

                  <h3 className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Event timeline
                  </h3>
                  {eventsLoading ? (
                    <Timeline events={[]} />
                  ) : (
                    <Timeline events={events} />
                  )}
                </div>
              </>
            ) : null}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
