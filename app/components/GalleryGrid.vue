<script setup lang="ts">
import type { CardItem } from '~/data/site'

defineProps<{
  items: CardItem[]
}>()
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
    <article
      v-for="(item, index) in items"
      :key="`${item.title}-${index}`"
      class="group relative overflow-hidden rounded-[1.6rem]"
      :class="index % 5 === 0 ? 'xl:col-span-7' : index % 3 === 0 ? 'xl:col-span-5' : 'xl:col-span-4'"
    >
      <NuxtImg :src="item.image" :alt="item.title" class="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-96" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(35,28,23,0.72)_100%)]" />
      <div class="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 class="font-serif-display text-3xl leading-none">{{ item.title }}</h3>
        <p class="mt-3 max-w-lg text-sm leading-7 text-white/80">{{ item.description }}</p>
      </div>
    </article>
  </div>
</template>
