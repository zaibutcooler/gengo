<template>
  <nav
    class="bg-white border-b border-blue-100 fixed left-0 top-0 w-full text-green-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-12">
        <!-- Logo -->
        <div class="flex-shrink-0 xs:w-1/6">
          <a href="#hero" class="text-green-800 text-md font-semibold">Home</a>
        </div>
        <!-- Menu -->
        <div>
          <div class="flex items-center space-x-4">
            <a
              href="#about"
              class="text-green-800 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
              >About</a
            >
            <a
              href="#client"
              class="hidden md:block text-green-800 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
              >Services</a
            >
            <a
              href="#contact"
              class="hidden md:block text-green-800 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
              >Contact</a
            >
            <!-- <a href="/login" class="flex items-center justify-center w-24 bg-black text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Login</a> -->
            <a
              href="/register"
              class="flex items-center justify-center w-24 bg-primarfont-semibold border border-green-300 hover:bg-emerald-50 hover:text-black px-4 py-1.5 rounded-xl text-sm font-medium"
              >Register</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      links: [
        {
          title: "Travel",
          route: "/travel",
          iconName: "bi bi-airplane-fill",
        },
        {
          title: "Explore",
          route: "/explore",
          iconName: "bi bi-compass-fill",
        },
        {
          title: "Things To Do",
          route: "/explore/things-to-do",
          iconName: "bi bi-check2-square-fill",
        },
        {
          title: "Flights",
          route: "/travel/flights",
          iconName: "bi bi-airplane-fill",
        },
        {
          title: "Hotels",
          route: "/travel/hotels",
          iconName: "bi bi-building",
        },
        {
          title: "Vacation Rentals",
          route: "/travel/vacation-rentals",
          iconName: "bi bi-house-fill",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
