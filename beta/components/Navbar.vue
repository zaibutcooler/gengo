<template>
  <main class="px-2 lg:px-4">
    <div class="flex justify-between items-center border-b py-1">
      <section>
        <NuxtLink to="/">Home</NuxtLink>
      </section>
      <section>
        <ul class="flex">
          <li><NuxtLink to="/travel">Travel</NuxtLink></li>
          <li><NuxtLink to="/explore">Explore</NuxtLink></li>
          <li><NuxtLink to="/explore/things-to-do">Things To Do</NuxtLink></li>
          <li><NuxtLink to="/travel/flights">Flights</NuxtLink></li>
          <li><NuxtLink to="/travel/hotels">Hotels</NuxtLink></li>
          <li>
            <NuxtLink to="/travel/vacation-rentals">Vacation Rentals</NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
