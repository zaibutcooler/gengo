import React from "react"

import { Separator } from "@/components/ui/separator"

import ChatEmpty from "./ChatEmpty"
import Message from "./Message"

interface Props {
  messages: any
  setInput: (inp: any) => void
}

const Messages: React.FC<Props> = ({ messages, setInput }) => {
  const isLoading = false

  return (
    <div className="flex w-full flex-1 justify-center gap-4 p-3">
      {messages && messages.length > 0 ? (
        <div className="relative w-[56rem] px-4">
          {messages.map((message: any, index: number) => (
            <React.Fragment key={index}>
              <Message message={message} />
              {index < messages.length - 1 && (
                <Separator className="my-4 md:my-8" />
              )}
            </React.Fragment>
          ))}
        </div>
      ) : isLoading ? (
        <div className="flex w-full flex-col gap-2">Loading...</div>
      ) : (
        <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-center px-2 lg:px-4">
          <ChatEmpty setInput={setInput} />
          {/* <Welcome
            Icon={MessageSquare}
            description={"You can start asking questions."}
          /> */}
        </div>
      )}
    </div>
  )
}

export default Messages
