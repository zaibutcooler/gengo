// import { auth } from "@clerk/nextjs"

// import { CHAT, getLimit } from "@/lib/limit"
// import { getPlan } from "@/lib/subscription"
// import { Separator } from "@/components/ui/separator"
// import FullLimitView from "@/components/application/FullLimitView"

import Chat from "@/components/chat/Chat"

export default async function ChatPage() {
  // const { userId } = auth()

  // if (!userId) return

  // const plan = await getPlan(userId)

  // const fullLimit = await getLimit(userId, CHAT, plan ? plan.planName : "")

  let plan = { planName: "nothing" }

  return (
    <>
      {/* {fullLimit ? <FullLimitView /> : null} */}
      <Chat userPlan={plan ? plan.planName : ""} />
    </>
  )
}
