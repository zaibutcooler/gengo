import { useContext, useRef, useState } from "react"
import { type UseChatHelpers } from "ai/react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ChatInput } from "@/components/ui/chat-input"

export interface ChatInputProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string
  title?: string
}

const ChatForm = ({
  id,
  title,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatInputProps) => {
  //   const { addMessage, handleInputChange, isLoading, message } =
  //     useContext(ChatContext);

  const ChatInputRef = useRef<HTMLTextAreaElement>(null)

  // const [message, setMessage] = useState("");

  const addMessage = async (value: any) => {
    setInput("")
    await append({
      id,
      content: value,
      role: "user",
    })
  }

  return (
    <div className="sticky bottom-0 left-0 w-full bg-background">
      <div className="flex flex-row gap-3  md:last:mb-6 lg:mx-auto lg:max-w-4xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex w-full flex-grow flex-col p-4">
            <div className="relative">
              <ChatInput
                rows={1}
                ref={ChatInputRef}
                maxRows={4}
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()

                    addMessage(input)

                    ChatInputRef.current?.focus()
                  }
                }}
                placeholder="Enter your question..."
                className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch resize-none bg-muted py-3 pr-12 text-base"
              />

              <Button
                disabled={isLoading}
                className="absolute bottom-1.5 right-[8px]"
                aria-label="send message"
                onClick={() => {
                  addMessage(input)
                }}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatForm
