// import { clerkClient, currentUser, UserButton } from "@clerk/nextjs"

// import { ThemeToggle } from "@/components/ui/theme-toggle"

// import MobileSidebar from "./../sidebar/MobileSidebar"
// import AvatarButton from "./AvatarButton"
// import { CommandMenu } from "./CommandBox"

const Header = async () => {
  //   const user = await currentUser()

  return (
    <>
      <div className="fixed right-0 top-0 z-30 w-full pl-0 xl:pl-72">
        <nav className="flex h-14 w-full items-center justify-between border-b bg-background/75 px-2 shadow-sm backdrop-blur-lg md:h-16 md:px-4">
          <section className="items-top flex space-x-2 md:space-x-4">
            <div className="block xl:hidden">{/* <MobileSidebar /> */}</div>
            <div className=" flex items-center gap-4">
              {/* <CommandMenu /> */}
            </div>
          </section>
          <section className="flex items-center gap-4">
            {/* <ThemeToggle /> */}
            {/* <UserButton afterSignOutUrl="/" /> */}
            {/* <AvatarButton user={user} /> */}
          </section>
        </nav>
      </div>
    </>
  )
}

export default Header
