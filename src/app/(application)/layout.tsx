import { ReactNode } from "react"

export const metadata = { title: "Application" }

export default function ApplicationLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
