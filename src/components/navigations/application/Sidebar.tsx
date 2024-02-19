"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { PremiaLogo } from "@/components/ui/logo"

import { settingLink, sidebarLinks } from "./constant"

export const Sidebar = ({
  handleSidebarClose,
}: {
  handleSidebarClose?: () => void
}) => {
  const pathname = usePathname()

  const styling = (route: string) => {
    return `text-sm hover:text-primary group mb-1 flex p-3 text-gray-500 justify-start font-medium cursor-pointer hover:bg-muted dark:hover:bg-muted rounded-lg w-full ${
      route === pathname ? "bg-muted dark:bg-muted text-primary" : ""
    }`
  }

  const renderLink = (item: typeof settingLink) => {
    return (
      <Link
        onClick={() => handleSidebarClose && handleSidebarClose()}
        key={item.route}
        href={item.route}
        className={styling(item.route)}
      >
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
      <header className="flex h-20 items-center pl-2">
        <div className="mt-3 ">
          <Link href="/" className="z-40 font-semibold">
            <PremiaLogo />
          </Link>
        </div>
      </header>
      <div className="flex-1">
        {sidebarLinks.map((item, index) => (
          //@ts-ignore
          <div key={index}>{renderLink(item)}</div>
        ))}
      </div>

      <Link
        href={settingLink.route}
        className={styling(settingLink.route) + "mb-2"}
      >
        <div
          className={`flex flex-1 items-center ${
            settingLink.route === pathname
              ? "bg-muted text-primary dark:bg-muted"
              : ""
          }`}
        >
          <settingLink.icon className={cn("mr-3 h-5 w-5")} />
          {settingLink.label}
        </div>
      </Link>
    </div>
  )
}
