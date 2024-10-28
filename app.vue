<script setup lang="ts">
const router = useRouter()

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' }
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="{label, to} in nav" ><NuxtLink :to>{{ label }}</NuxtLink></li>
    </ul>
  </nav>
    <NuxtLoadingIndicator />
    <NuxtPage />
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;

  }
  li {
    background-color: firebrick;
    padding: .5rem;
    border-radius: .2rem;
    color: whitesmoke;
    font-weight: 800;
  }

  a {

    color: whitesmoke;
    text-decoration: none;
  }
</style>
