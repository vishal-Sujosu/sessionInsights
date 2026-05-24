
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/features/layout/sidebar";
import { Header } from "@/features/layout/header";
import QueryProvider from "@/components/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "session Dashboard",
  description: "Session Activity Monitoring Dashboard",
};

export default function RootLayout({ children }) {
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
          <div className="grid min-h-screen min-w-0 overflow-hidden lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex min-h-0 min-w-0 flex-col">
              <Header />
              <main className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-auto p-4 lg:gap-6 lg:p-2">
                <QueryProvider>
                  {children}
                </QueryProvider>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
