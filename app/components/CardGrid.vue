<script setup lang="ts">
import type { CardItem } from '~/data/site'

defineProps<{
  items: CardItem[]
  columns?: '2' | '3' | '4'
}>()
</script>

<template>
  <div
    class="grid gap-6"
    :class="{
      'lg:grid-cols-2': columns === '2',
      'lg:grid-cols-3': columns === '3' || !columns,
      'md:grid-cols-2 xl:grid-cols-4': columns === '4'
    }"
  >
    <article
      v-for="item in items"
      :key="`${item.title}-${item.image}`"
      class="group overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[0_30px_70px_rgba(77,56,33,0.08)]"
    >
      <div class="overflow-hidden">
        <NuxtImg :src="item.image" :alt="item.title" class="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
      </div>
      <div class="space-y-4 p-6">
        <p v-if="item.eyebrow" class="eyebrow">{{ item.eyebrow }}</p>
        <h3 class="font-serif-display text-3xl leading-tight text-[var(--color-ink)]">{{ item.title }}</h3>
        <p class="text-sm leading-7 text-[var(--color-muted)]">{{ item.description }}</p>
        <div v-if="item.tags?.length" class="flex flex-wrap gap-2 pt-1">
          <span v-for="tag in item.tags" :key="tag" class="tag-chip">{{ tag }}</span>
        </div>
        <NuxtLink v-if="item.link" :to="item.link" class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-deep)]">
          Découvrir
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </article>
  </div>
</template>
