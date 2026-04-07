<script setup lang="ts">
const site = useSiteContent()
const route = useRoute()
const isOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
    <div class="container-site">
      <div class="site-nav-shell grid min-h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-5 lg:gap-4 lg:px-5">
        <NuxtLink to="/" class="flex min-w-0 items-center text-[var(--color-ink)] no-underline">
          <NuxtImg src="/img/chateau/logo.webp" alt="Château de Rajat" class="h-8 w-auto object-contain sm:h-9" />
        </NuxtLink>

        <nav class="hidden min-w-0 items-center justify-center gap-1 rounded-full border border-[var(--color-border)] bg-white/50 px-2 py-1.5 lg:flex">
          <NuxtLink
            v-for="item in site.navigation"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            :class="route.path === item.to ? 'nav-link-active' : ''"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center justify-end gap-3 lg:flex">
          <a :href="site.phoneHref" class="whitespace-nowrap text-[0.84rem] font-semibold tracking-[0.04em] text-[var(--color-ink)]">{{ site.phone }}</a>
          <NuxtLink to="/contact" class="btn-primary btn-primary--subtle whitespace-nowrap">Contactez-nous</NuxtLink>
        </div>

        <button
          class="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[var(--color-border-strong)] bg-white/55 lg:hidden"
          type="button"
          :aria-expanded="isOpen"
          aria-label="Ouvrir le menu"
          @click="isOpen = !isOpen"
        >
          <span class="sr-only">Menu</span>
          <div class="flex flex-col gap-1.5">
            <span class="h-px w-5 bg-[var(--color-ink)]" />
            <span class="h-px w-5 bg-[var(--color-ink)]" />
            <span class="h-px w-5 bg-[var(--color-ink)]" />
          </div>
        </button>
      </div>

      <div v-if="isOpen" class="mt-3 overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[rgba(250,247,242,0.96)] shadow-[0_24px_48px_rgba(64,43,24,0.08)] backdrop-blur-xl lg:hidden">
        <div class="container-site flex flex-col gap-1 px-1 py-4">
          <NuxtLink
            v-for="item in site.navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-[1rem] px-4 py-3 text-[0.98rem] font-medium text-[var(--color-ink)] transition hover:bg-white/70"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="mx-3 mt-3 flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
            <a :href="site.phoneHref" class="text-sm tracking-[0.08em] text-[var(--color-muted)]">{{ site.phone }}</a>
            <NuxtLink to="/contact" class="btn-primary w-full text-center">Contactez-nous</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
