<template>
  <nav class="bg-white border-b border-blue-100 text-green-700">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-12">
        <!-- Logo -->
        <div class="flex-shrink-0 xs:w-1/6">
          <a href="#hero" class="text-green-800 text-sm font-semibold">Home</a>
        </div>
        <!-- Menu -->
        <div>
          <div class="flex items-center space-x-2">
            <NuxtLink
              v-for="link in links"
              :key="link.title"
              :href="link.route"
              class="text-green-800 hover:text-emerald-500 px-3 py-1 text-xs border hover:border-green-300 rounded-full text-sm font-medium"
              >{{ link.title }}</NuxtLink
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
          title: "Rentals",
          route: "/travel/vacation-rentals",
          iconName: "bi bi-house-fill",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
