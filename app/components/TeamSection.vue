<script setup lang="ts">
const { t } = useI18n()

interface TeamMember {
  id: number
  name: string
  role: string
  initials: string
  image?: string
  accent: boolean
}

const team: TeamMember[] = [
  { id: 1, name: 'Mohamed Chettah', role: t('team.members.mohamed.role'), initials: 'MC', image: '/img/main/mohamed.jpg', accent: false },
  { id: 2, name: 'Liam Faucitano', role: t('team.members.liam.role'), initials: 'LF', image: '/img/main/liam.jpg', accent: false },
  { id: 3, name: 'Mateo Carciu', role: t('team.members.mateo.role'), initials: 'MC', image: '/img/main/mateo.jpeg', accent: false },
  { id: 4, name: 'Romain Grange', role: t('team.members.romain.role'), initials: 'RG', image: '/img/main/romain.jpg', accent: false }
]
</script>

<template>
  <section
    id="equipe"
    class="py-12 px-6 bg-[var(--bg-primary)] transition-colors duration-300"
  >
    <div class="max-w-[1216px] mx-auto">
      <div class="mb-12 md:mb-16">
        <h2
          class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-[var(--text-primary)]"  v-html="$t('team.title')"
        ></h2>
        <p
          class="text-sm sm:text-base leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
        >
          {{ $t('team.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <div
          v-for="member in team"
          :key="member.id"
          class="group"
        >
          <!-- Photo -->
          <div
            class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 transition-transform duration-500 ease-out group-hover:scale-[0.98]"
            :class="member.accent ? 'ring-1 ring-[var(--color-gold)]/20' : 'ring-1 ring-white/[0.06]'"
          >
            <NuxtImg
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div
              v-else
              class="h-full w-full flex items-center justify-center"
              :style="{
                background: `linear-gradient(145deg, #1a1a1a 0%, #111111 100%)`
              }"
            >
              <span
                class="font-manrope font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors duration-300"
                :class="member.accent ? 'text-[var(--color-gold)]/40' : 'text-white/[0.08]'"
              >
                {{ member.initials }}
              </span>
            </div>

            <!-- Subtle gradient overlay on photos -->
            <div
              v-if="member.image"
              class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </div>

          <!-- Info -->
          <div class="pl-0.5">
            <h3 class="font-inter text-sm sm:text-[15px] font-semibold text-[var(--text-primary)] mb-0.5">
              {{ member.name }}
            </h3>
            <p class="font-inter text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
