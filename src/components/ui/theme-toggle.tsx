"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function ThemeToggleProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { setTheme, theme } = useTheme()

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {children}
    </div>
  )
}
