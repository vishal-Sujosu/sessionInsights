"use client"

import Link from "next/link"
import { ArrowLeft, FileQuestion, LayoutDashboard } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-lg border bg-muted/40">
          <FileQuestion className="size-7 text-muted-foreground" />
        </div>

        <p className="mt-6 text-sm font-medium uppercase text-muted-foreground">
          404
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This section is not available in the dashboard yet.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <Link
            href="/sessions"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="size-4" />
            Sessions
          </Link>
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
