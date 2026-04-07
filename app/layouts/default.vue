<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
    <SiteHeader />
    <main :key="route.fullPath" class="pb-20">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
