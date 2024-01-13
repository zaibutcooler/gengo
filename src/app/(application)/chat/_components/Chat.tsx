"use client"

import React, { useState } from "react"
import { useChat, type Message } from "ai/react"
import axios from "axios"

import { useToast } from "@/components/ui/use-toast"

import ChatForm from "./ChatForm"
import Messages from "./Messages"

export default function Chat({ userPlan }: { userPlan: string }) {
  // const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [banner, setBanner] = useState(false)
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      // initialMessages,
      // id,
      // body: {
      //   id,
      //   previewToken,
      // },
      onResponse(response) {
        if (response.status === 401) {
          toast({ title: "Something Went Wrong", variant: "destructive" })
        }
      },
      onFinish() {
        toast({ title: "Ready Ready" })
      },
    })

  const { toast } = useToast()

  // const handleSend = async (input: string) => {
  //   try {
  //     setBanner(false);
  //     setMessages((prev) => [...prev, { role: "user", content: input }]);
  //     setLoading(true);

  //     const response = await axios.post("/api/chat", { prompt: input });
  //     const data = await response.data;

  //     setMessages((prev) => [...prev, data]);
  //     setBanner(true);
  //   } catch (error) {
  //     toast({
  //       title: "Something went wrong",
  //       description: "Please contact us",
  //     });
  //     setError(true);
  //     setBanner(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex h-full w-full gap-4">
      <div className="relative flex min-h-full w-full flex-col justify-between gap-2">
        <div className="mb-28 flex flex-1 flex-col justify-between">
          <Messages setInput={setInput} messages={messages} />
        </div>

        <ChatForm
          // id={id}
          isLoading={isLoading}
          stop={stop}
          append={append}
          reload={reload}
          messages={messages}
          input={input}
          setInput={setInput}
        />
      </div>
      {/* <div className="hidden xl:flex xl:w-72 xl:h-full "></div> */}
      {/* Have plans to add option in here*/}
    </div>
  )
}
