<template>
  <main class="container mx-auto text-green-800 font-semibold">
    <div
      class="flex justify-between items-center border-b border-green-100 py-2">
      <section class="py-2 flex items-center">
        <div class="mx-4 font-bold text-lg">
          <NuxtLink to="/">Home</NuxtLink>
        </div>
      </section>
      <section class="text-sm flex">
        <ul class="flex text-sm">
          <li
            v-for="link in links"
            :key="link.route"
            class="py-1.5 px-4 mx-2 border border-green-400 rounded-full text-center hover:bg-green-100">
            <NuxtLink :to="link.route">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
        <button
          class="py-1.5 px-4 ml-4 mr-2 border rounded-lg text-center border-blue-300 text-blue-800">
          Join
        </button>
      </section>
    </div>
  </main>
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
