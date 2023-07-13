<template>
  <main>
    <Navbar />
    <section class="container mx-auto flex">
      <div class="hidden lg:block lg:w-1/5 min-h-screen border-r">
        <Sidebar />
      </div>
      <div class="text-green-900">
        <slot />
      </div>
    </section>
  </main>
</template>
