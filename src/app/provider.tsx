'use client'

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { readonly children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider refetchInterval={4 * 60}>
        {children}
      </SessionProvider>
    </ThemeProvider>
  )
}