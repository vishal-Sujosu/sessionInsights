"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Activity,
  Settings,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Sessions", href: "/sessions", icon: Activity },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Alerts", href: "/alerts", icon: ShieldAlert },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ onClose }) {
  const pathname = usePathname();

  return (
    <aside className="h-full overflow-y-auto border-r border-border/80 bg-white text-foreground dark:bg-slate-950 dark:text-muted-foreground mt-5 lg:mt-0 lg:block lg:w-64">
      <button className="lg:hidden " onClick={onClose}>
        ✕
      </button>
      <div className="">
        <div className="flex h-full flex-col gap-2">
          <div className="flex justify-between items-center border-b border-border/80 dark:border-border">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold text-foreground dark:text-muted-foreground">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <span className="">session</span>
              </Link>
            </div>

                {/* <button className="" onClick={onClose}>
        ✕
      </button> */}
          </div>

          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary dark:hover:text-foreground",
                      isActive
                        ? "bg-muted text-primary dark:bg-muted/40 dark:text-primary"
                        : "text-muted-foreground dark:text-muted-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
