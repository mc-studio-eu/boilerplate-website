<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  image: string
  compact?: boolean
}>()

const { containerRef, eyebrowRef, titleRef, descriptionRef } = useTitleReveal({ start: 'top 92%' })
</script>

<template>
  <section ref="containerRef" class="container-site pt-4 sm:pt-5">
    <div class="relative overflow-hidden rounded-[2.2rem] border border-[rgba(255,255,255,0.5)] bg-[var(--color-panel)] shadow-[0_35px_80px_rgba(70,48,27,0.10)]">
      <NuxtImg :src="image" :alt="title" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,26,21,0.78)_0%,rgba(34,26,21,0.44)_42%,rgba(34,26,21,0.18)_100%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(221,197,153,0.18),transparent_32%)]" />
      <div class="absolute inset-x-0 top-0 h-px bg-white/35" />

      <div
        class="relative z-10 flex max-w-[48rem] flex-col justify-end px-6 py-16 sm:px-10 lg:px-16 lg:py-18"
        :class="compact ? 'min-h-[390px]' : 'min-h-[620px]'"
      >
        <p ref="eyebrowRef" class="eyebrow-light">{{ eyebrow }}</p>
        <h1 ref="titleRef" class="mt-5 max-w-3xl font-serif-display text-[3.2rem] leading-[0.94] text-white sm:text-[4.4rem] lg:text-[5.4rem]">
          {{ title }}
        </h1>
        <p ref="descriptionRef" class="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-[1.05rem]">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
