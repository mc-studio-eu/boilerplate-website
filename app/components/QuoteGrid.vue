<script setup lang="ts">
import type { QuoteItem } from '~/data/site'

defineProps<{
  items: QuoteItem[]
}>()
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-3">
    <article
      v-for="item in items"
      :key="item.author"
      class="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-7"
    >
      <p class="text-lg leading-8 text-[var(--color-ink)]">“{{ item.quote }}”</p>
      <div class="mt-6">
        <p class="font-semibold text-[var(--color-accent-deep)]">{{ item.author }}</p>
        <p class="text-sm text-[var(--color-muted)]">{{ item.context }}</p>
      </div>
    </article>
  </div>
</template>
