<template>
  <main>
    <!-- <Navbar /> -->
    <LandingNavbar />
    <section class="flex justify-center">
      <div class="container w-full md:w-[800px] lg:w-[1000px] text-green-900">
        <slot />
      </div>
    </section>
  </main>
</template>
