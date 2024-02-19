import { ReactNode } from "react"

// import { prismadb } from "@/lib/prismadb"
// import { getPlan } from "@/lib/subscription"
import Header from "@/components/navigations/application/header"
import { Sidebar } from "@/components/navigations/application/sidebar"

// import { PricingModalProvider } from "@/components/providers/pro-modal-provider"

export default async function MainLayout({
  children,
}: {
  children: ReactNode
}) {
  // const { userId } = await auth()

  // if (!userId) return

  // const userSubscription = await prismadb.userSubscription.findUnique({
  //   where: { userId: userId },
  // });

  // const plan = await getPlan(userId)

  return (
    <>
      {/* <PricingModalProvider plan={plan ? plan.planName : ""} /> */}

      <main className="flex">
        <section className="z-20 hidden border-r px-4 pt-4 xl:fixed xl:flex xl:h-full xl:w-72">
          <Sidebar />
        </section>
        <section className="ml-0 min-h-screen w-full pt-14 lg:pt-16 xl:ml-72">
          <Header />
          <main className="h-full p-4 pl-4 lg:pl-6 xl:pl-8">{children}</main>
        </section>
      </main>
    </>
  )
}
