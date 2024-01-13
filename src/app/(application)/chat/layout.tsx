import { ReactNode } from "react"

export const metadata = { title: "Chat" }

export default function ChatLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
