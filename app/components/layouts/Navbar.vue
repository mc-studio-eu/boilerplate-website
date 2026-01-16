<script setup lang="ts">
const isSticky = ref(false)

const items = ref(['FR', 'EN'])
const value = ref('FR')
</script>

<template>
  <!-- Header -->
  <header class="pt-10 flex gap-32 justify-center items-center mx-auto">
    <!-- Logo -->
    <div class="flex gap-2 items-center">
      <NuxtLink to="/" class="flex justify-center items-center">
        <NuxtImg src="/img/main/logo.svg"  alt="MC Studio" class="h-10" />
      </NuxtLink>
      <p class="text-white text-sm">Studio</p>
    </div>

    <!-- Nav desktop -->
    <nav class="flex justify-center items-center gap-2 sm:gap-4">
      <NuxtLink :class="isSticky ? 'nav-sticky': 'nav-default'" class="nav-link" to="/#services">Projets</NuxtLink>
      <NuxtLink :class="isSticky ? 'nav-sticky': 'nav-default'" class="nav-link" to="/#services">Services</NuxtLink>
      <NuxtLink :class="isSticky ? 'nav-sticky': 'nav-default'" class="nav-link" to="/#services">Process</NuxtLink>
      <NuxtLink :class="isSticky ? 'nav-sticky': 'nav-default'" class="nav-link" to="/#services">Avis</NuxtLink>
      <NuxtLink :class="isSticky ? 'nav-sticky': 'nav-default'" class="nav-link" to="/#services">FAQ</NuxtLink>
     </nav>

    <!-- FR / EN -->
    <div class="flex gap-4">
      <USelect v-model="value" :items="items" size="md"></USelect>
      <UButton trailing-icon="i-lucide-arrow-right" size="md">Réserver un appel</UButton>
    </div>
  
  </header>

</template>

<style scoped>
@reference "@/assets/css/main.css";

.nav-link{
  @apply  font-inter text-xs lg:px-2 py-1.5 rounded-xl transition-colors duration-200;
}

.nav-default{
  @apply text-white hover:bg-black/5 hover:text-gold
}

.nav-sticky{
  @apply text-gold hover:bg-transparent hover:text-white ;
}

</style>
