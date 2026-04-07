<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
}>()

const site = useSiteContent()
</script>

<template>
  <section class="section-space pt-0">
    <div class="container-site">
      <div class="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#2d241d_0%,#4b392b_100%)] px-6 py-10 text-white sm:px-10 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
        <div class="max-w-3xl">
          <p class="eyebrow-light">Prise de contact</p>
          <h2 class="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl">{{ props.title }}</h2>
          <p class="mt-5 text-base leading-8 text-white/78 sm:text-lg">{{ props.text }}</p>
        </div>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <NuxtLink to="/contact" class="btn-primary btn-primary--light">Contactez-nous</NuxtLink>
          <a :href="site.phoneHref" class="btn-secondary btn-secondary--dark">{{ site.phone }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
