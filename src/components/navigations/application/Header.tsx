import { currentUser } from "@clerk/nextjs"

import { AvatarButton } from "./avatar-button"
import { CommandMenu } from "./command-box"
import { MobileSidebar } from "./mobile-sidebar"

export default async function Header() {
  const userObject = await currentUser()

  const userName =
    userObject?.firstName && userObject?.lastName
      ? //@ts-ignore
        userObject?.firstName[0] + userObject?.lastName[0]
      : "You"

  const user = {
    username: userName || "",
    email: userObject?.emailAddresses[0]?.emailAddress || "",
    imageUrl: userObject?.imageUrl || "",
  }

  return (
    <>
      <div className="fixed right-0 top-0 z-30 w-full pl-0 xl:pl-72">
        <nav className="flex h-14 w-full items-center justify-between border-b bg-background/75 px-2 shadow-sm backdrop-blur-lg md:h-16 md:px-4">
          <section className="items-top flex space-x-2 md:space-x-4">
            <div className="block xl:hidden">
              <MobileSidebar />
            </div>
            <div className=" flex items-center gap-4">
              <CommandMenu />
            </div>
          </section>
          <section className="flex items-center gap-4">
            {/* <UserButton afterSignOutUrl="/" /> */}
            <AvatarButton user={user} />
          </section>
        </nav>
      </div>
    </>
  )
}
