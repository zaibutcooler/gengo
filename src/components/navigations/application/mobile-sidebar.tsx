"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Sidebar } from "./sidebar"

export const MobileSidebar = ({}: {}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet open={open}>
      <SheetTrigger>
        <Button
          onClick={() => setOpen(!open)}
          variant="ghost"
          size="icon"
          className="xl:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 px-4 ">
        <ScrollArea className="py-0">
          <Sidebar handleSidebarClose={() => setOpen(false)} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
