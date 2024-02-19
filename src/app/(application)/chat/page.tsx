import { auth } from "@clerk/nextjs"

import Chat from "@/components/chat/Chat"
import { FullLimit } from "@/components/states/full-limit"

export default async function ChatPage() {
  const { userId } = auth()

  if (!userId) return

  // const plan = await getPlan(userId)

  // const fullLimit = await getLimit(userId, CHAT, plan ? plan.planName : "")
  let fullLimit = false

  let plan = { planName: "nothing" }

  return (
    <div>
      {fullLimit ? <FullLimit /> : null}
      <Chat userPlan={plan ? plan.planName : ""} />
    </div>
  )
}
