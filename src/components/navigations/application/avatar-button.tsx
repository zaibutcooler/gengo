"use client"

import Link from "next/link"
import { SignOutButton, useClerk } from "@clerk/nextjs"

import { usePricingModal } from "@/hooks/use-pricing-modal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggleProvider } from "@/components/ui/theme-toggle"

interface User {
  username: string
  email: string
  imageUrl: string
}

export function AvatarButton({ user }: { user: User }) {
  const pricingModal = usePricingModal()
  const { signOut } = useClerk()
  // const userName =
  //   user && user.firstName && user.lastName
  //     ? user?.firstName[0] + user?.lastName[0]
  //     : "U";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} alt="@shadcn" />
              <AvatarFallback>{user.username}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {/* {user?.firstName} {user?.lastName} */}
                {user.username}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {/* {user?.emailAddresses[0].emailAddress} */}
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/account"}>
              <DropdownMenuItem>Account</DropdownMenuItem>
            </Link>
            <ThemeToggleProvider>
              <DropdownMenuItem>Change Theme</DropdownMenuItem>
            </ThemeToggleProvider>
            <DropdownMenuItem onClick={() => pricingModal.onOpen()}>
              Billing
            </DropdownMenuItem>
            <Link href={"/settings"}>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link href={"/"}>
            <SignOutButton>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </SignOutButton>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
