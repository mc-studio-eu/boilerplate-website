<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });
const emit = defineEmits(['next', 'prev']);
const colorMode = useColorMode();

const modalData = {
  title: "Sprint / MVP",
  result: "Un produit minimal mais réel : utilisable par des vrais utilisateurs, pour apprendre vite et itérer.",
  forWho: [
    "Vous avez une idée et vous voulez valider sans brûler 6 mois",
    "Vous avez besoin d'un prototype \"sérieux\" en production",
    "Vous devez montrer un produit à des partenaires / early users"
  ],
  inclus: [
    "Atelier de cadrage (scope = 1 cœur de valeur)",
    "UI/UX sur Figma (parcours principal)",
    "Dev full-stack (front + back)",
    "Auth + gestion utilisateurs (si nécessaire)",
    "Base de données + CRUD essentiels",
    "Déploiement (staging + prod)",
    "Analytics basique / logs",
    "1 itération post-retours (petite boucle d'amélioration)"
  ],
  delai: "3–6 semaines (selon complexité)",
};

const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <UModal v-model:open="isOpen" class="service-modal">
    <template #content>
      <div class="modal-content rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide" style="background-color: var(--bg-secondary);">
        <!-- Header -->
        <div class="sticky top-0 p-6 pb-4 flex justify-between items-center z-10" style="background-color: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
          <div>
            <h2 class="text-xl font-semibold mb-1" style="color: var(--text-primary);">{{ modalData.title }}</h2>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">{{ modalData.result }}</p>
          </div>
          <div class="flex items-center gap-3">
            <NuxtLink 
              to="#contact"
              @click="closeModal"
              :class="[
                'hidden sm:flex items-center gap-2 border-none rounded-full py-1 pr-3 pl-1 cursor-pointer transition-all duration-200 shrink-0 hover:scale-[1.02]',
                colorMode.value === 'dark' ? 'bg-[linear-gradient(to_right,white_50%,#f0bf6c)] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] hover:brightness-105' : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'
              ]"
            >
              <NuxtImg src="/img/main/founder.png" alt="MC Studio" class="w-6 h-6 rounded-full bg-gradient-to-br from-[#f0bf6c] to-[#e8a84c] flex items-center justify-center font-inter font-semibold text-[9px] text-[#0f0f0f] object-contain" />
              <div class="flex flex-col items-start gap-px">
                <span :class="['font-inter font-semibold text-[11px] leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]' : 'text-white']">Réserver un appel</span>
                <span :class="['font-inter font-normal text-[9px] leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]/60' : 'text-white/60']">Discussion gratuite</span>
              </div>
            </NuxtLink>

            <div class="flex items-center gap-1">
              <button @click="emit('prev')" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
              </button>
              <button @click="emit('next')" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </button>
              <div class="w-px h-4 mx-1" style="background-color: var(--border-subtle);"></div>
              <button @click="closeModal" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div class="p-6 pt-5 space-y-6">
          <!-- Pour qui -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" >Pour qui</h3>
            <ul class="space-y-2">
              <li v-for="item in modalData.forWho" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <span style="color: #F0BF6C;">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Inclus -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" >Inclus</h3>
            <ul class="grid grid-cols-1 gap-1.5">
              <li v-for="item in modalData.inclus" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-check" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color: #F0BF6C;" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Délai -->
          <div class="flex items-center gap-3 py-3 px-4 rounded-lg" style="background-color: var(--bg-card);">
            <div>
              <span class="text-xs uppercase tracking-wider" style="color: var(--text-secondary);">Délai</span>
              <p class="text-sm font-medium" style="color: var(--text-primary);">{{ modalData.delai }}</p>
            </div>
          </div>

          </div>
      </div>
    </template>
  </UModal>
</template>
