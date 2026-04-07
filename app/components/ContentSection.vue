<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <section class="section-space">
    <div class="container-site">
      <SectionHeading :eyebrow="eyebrow" :title="title" :description="description" />
      <div class="mt-10">
        <slot />
      </div>
    </div>
  </section>
</template>
