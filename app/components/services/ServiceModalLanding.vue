<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });
const emit = defineEmits(['next', 'prev']);
const colorMode = useColorMode();

const modalData = {
  title: "Landing Page",
  result: "Une page premium conçue pour convertir",
  forWho: [
    "Vous avez une offre claire et vous voulez plus de demandes",
    "Vous lancez un produit/service et vous voulez tester un angle",
    "Vous avez du trafic mais la page ne convertit pas"
  ],
  inclus: [
    "Analyse (offre, USP, ICP, objections, preuves, conccurent)",
    "Architecture de page (sections + parcours)",
    "Copywriting structurel (hooks, preuves, CTA)",
    "Identité Visuelle",
    "Design UI premium (Figma) - Retours illimités jusqu’à satisfaction",
    "Intégration front (perf + responsive) : Code sur mesure ou No-Code",
    "Optimisation SEO",
    "Formulaire (ou Calendly)",
    "Tracking : Google Analytics",
    "Mise en ligne + QA (mobile/tablet/desktop)"
  ],
  delai: "7–10 jours",
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
            <h2 class="text-xl font-semibold mb-1" >{{ modalData.title }}</h2>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">{{ modalData.result }}</p>
          </div>
          <div class="flex items-center gap-3">


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
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3">Pour qui</h3>
            <ul class="space-y-2">
              <li v-for="item in modalData.forWho" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <span style="color: #F0BF6C;">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Inclus -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3">Inclus</h3>
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
