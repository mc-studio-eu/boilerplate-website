<script setup lang="ts">
const localePath = useLocalePath()
const site = useBoilerplateSite()
</script>

<template>
  <footer id="footer" :style="{ backgroundImage: `url('/img/main/background.png')` }" class="rounded-lg bg-cover bg-center">
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between text-sm font-inter md:gap-0 gap-8">
        <div class="contents md:flex md:items-center md:gap-6 md:order-1 text-white">
          <div class="flex items-center gap-3 order-1">
            <NuxtImg :src="site.logoUrl" :alt="site.companyName.value" class="h-10 md:h-8 w-auto" />
            <span class="font-inter text-lg font-medium text-white tracking-tight">{{ site.companyName.value }}</span>
          </div>
        </div>

        <div v-if="site.socials.value.length" class="flex items-center gap-4 text-white order-3">
          <a v-for="social in site.socials.value" :key="social.label" :href="social.href" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-gold)] transition-colors">
            {{ social.label }}
          </a>
        </div>
      </div>

      <div class="flex flex-col justify-center md:flex-row items-center gap-2 md:gap-4 text-white order-4 md:order-none w-full md:w-auto mt-12">
        <p class="text-sm md:text-xs">&copy; {{ new Date().getFullYear() }} {{ site.companyName.value }}. {{ site.copy.value.footer.rights }}</p>
        <div class="flex gap-4 text-xs">
          <NuxtLink :to="localePath('/privacy')" class="hover:text-white transition-colors">{{ site.copy.value.footer.legal }} · Privacy</NuxtLink>
          <NuxtLink :to="localePath('/terms')" class="hover:text-white transition-colors">{{ site.copy.value.footer.legal }} · Terms</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
