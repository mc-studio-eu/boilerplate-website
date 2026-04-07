<script setup lang="ts">
import type { FeatureItem } from '~/data/site'

defineProps<{
  items: FeatureItem[]
}>()
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-3">
    <article
      v-for="item in items"
      :key="item.title"
      class="rounded-[1.5rem] border border-[var(--color-border)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(77,56,33,0.05)]"
    >
      <h3 class="font-serif-display text-2xl text-[var(--color-ink)]">{{ item.title }}</h3>
      <p class="mt-4 text-sm leading-7 text-[var(--color-muted)]">{{ item.description }}</p>
    </article>
  </div>
</template>
