import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import { kv } from "@vercel/kv"
import { nanoid, OpenAIStream, StreamingTextResponse } from "ai"

import { openai } from "@/lib/openai"

export const runtime = "edge"

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json
  console.log("started")

  const { userId } = auth()

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  let res

  res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.7,
    stream: true,
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: "assistant",
          },
        ],
      }
      await kv.hmset(`chat:${id}`, payload)
      await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`,
      })
    },
  })

  return new StreamingTextResponse(stream)
}
