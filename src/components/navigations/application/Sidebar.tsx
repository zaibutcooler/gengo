"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const Sidebar = () => {
  const pathname = usePathname()

  const styling = (route: string) => {
    return `text-sm hover:text-primary group mb-1 flex p-3 text-gray-500 justify-start font-medium cursor-pointer hover:bg-muted dark:hover:bg-muted rounded-lg w-full ${
      route === pathname ? "bg-muted dark:bg-muted text-primary" : ""
    }`
  }

  const renderLink = (item: any) => {
    return (
      <Link key={item.route} href={item.route} className={styling(item.route)}>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center">
            <item.icon className={cn("mr-4 h-5 w-5")} />
            {item.label}
          </div>
          {item.beta && (
            <div>
              <Badge variant={"default"} className="rounded-full text-white">
                Beta
              </Badge>
            </div>
          )}
        </div>
      </Link>
    )
  }

  return (
    <div className="z-50 flex h-full w-full flex-col">
      <header className="flex h-20 items-center pl-2">New Chat</header>
      <div className="flex-1">Chat history</div>
      {/* <div className="flex-1">
        {extraSidebarLinks.map((item, index) => (
          <div key={index}>{renderLink(item)}</div>
        ))}
      </div> */}

      <div>Pricing Modal</div>
    </div>
  )
}

export default Sidebar
