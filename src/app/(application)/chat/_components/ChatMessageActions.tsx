"use client"

import { type Message } from "ai"
import axios from "axios"
import {
  ChevronDown,
  Copy,
  MoreVertical,
  Save,
  Settings,
  Settings2,
  Share,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToastAction } from "@/components/ui/toast"

import "@/hooks/useToast"

import { useToast } from "@/components/ui/use-toast"

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  message: Message
}

export default function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { toast } = useToast()

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/message", {
        content: message.content,
      })

      toast({
        title: "Saved the content!",
        description: "You can see the content in the dashboard anytime",
        action: <ToastAction altText="Leave Note">Note</ToastAction>,
      })
      console.log("res", response)
    } catch (error: any) {
      console.error("Error saving message", error.message)
      toast({ title: "Failed to copy text to clipboard." })
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
      toast({ title: "Copied to clipboard!" })
    } catch (error: any) {
      console.error("Error copying to clipboard:", error.message)
      toast({ title: "Failed to copy text to clipboard." })
    }
  }

  return (
    <div
      className={cn(
        "flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",
        className
      )}
      {...props}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleCopy}>
            <Copy className="mr-2 h-4 w-4" /> Copy Text
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" /> Save
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {" "}
              <Share className="mr-2 h-4 w-4" /> Share
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Facebook</DropdownMenuItem>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>Instagram</DropdownMenuItem>
                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
