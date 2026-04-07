<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()

const { containerRef, eyebrowRef, titleRef, descriptionRef } = useTitleReveal()
</script>

<template>
  <div ref="containerRef" class="max-w-3xl">
    <p ref="eyebrowRef" class="eyebrow">{{ eyebrow }}</p>
    <h2 ref="titleRef" class="mt-4 font-serif-display text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
      {{ title }}
    </h2>
    <p v-if="description" ref="descriptionRef" class="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
