"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/features/layout/sidebar";
import { Header } from "@/features/layout/header";
import QueryProvider from "@/components/providers/query-provider";
import { useState, useCallback } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Mobile overlay — tapping outside closes the sidebar */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-20 bg-black/40 lg:hidden"
              onClick={closeSidebar}
              aria-hidden="true"
            />
          )}

          <div className="grid min-h-screen min-w-0 overflow-hidden lg:grid-cols-[280px_1fr]">
            {/* Sidebar
                – Desktop: always visible as the first grid column
                – Mobile:  fixed panel, slides in from the left when open    */}
            <div
              className={`
                fixed inset-y-0 left-0 z-30 w-[280px] transform transition-transform duration-300 ease-in-out
                lg:static lg:z-auto lg:translate-x-0 lg:transition-none
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <Sidebar onClose={closeSidebar} />
            </div>

            {/* Main content column */}
            <div className="flex min-h-0 min-w-0 flex-col">
              {/* Pass the toggle handler so the Header can render the hamburger */}
              <Header onMenuToggle={toggleSidebar} />

              <main className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-auto p-4 lg:gap-6 lg:p-2">
                <QueryProvider>{children}</QueryProvider>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}