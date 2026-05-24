"use client"

import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { CircleUser } from "lucide-react"
import { Button } from "@/components/ui/button";
import {  Menu } from "lucide-react"

export function Header({onMenuToggle }) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-border/80 bg-muted/95 px-4 backdrop-blur-sm shadow-sm lg:h-[60px] lg:px-6">
            <button
        className="lg:hidden p-2 rounded-md"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        {/* e.g. lucide-react Menu icon */}
        <Menu className="h-5 w-5" />
      </button>
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold md:text-xl hidden md:block">
          Monitoring Dashboard
        </h1>
      </div>
      <ThemeToggle />
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </header>
  )
}
