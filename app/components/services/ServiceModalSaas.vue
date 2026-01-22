<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });
const emit = defineEmits(['next', 'prev']);
const colorMode = useColorMode();

const { t, tm, rt } = useI18n();

const modalData = computed(() => ({
    id: "saas",
    title: t('services.modals.saas.title') || "Launch : SaaS",
    result: t('services.modals.saas.result'),
    forWho: Object.values(tm('services.modals.saas.for_who') as object || {}).map(i => rt(i)),
  inclus: [
    { text: t('services.modals.saas.included.0'), icon: "i-heroicons-globe-alt" },
    { text: t('services.modals.saas.included.1'), icon: "i-heroicons-map" },
    { text: t('services.modals.saas.included.2'), icon: "i-heroicons-swatch" },
    { text: t('services.modals.saas.included.3'), icon: "i-heroicons-code-bracket-square" },
    { text: t('services.modals.saas.included.4'), icon: "i-heroicons-lock-closed" },
    { text: t('services.modals.saas.included.5'), icon: "i-heroicons-adjustments-horizontal" },
    { text: t('services.modals.saas.included.6'), icon: "i-heroicons-credit-card" },
    { text: t('services.modals.saas.included.7'), icon: "i-heroicons-envelope" },
    { text: t('services.modals.saas.included.8'), icon: "i-heroicons-server-stack" },
    { text: t('services.modals.saas.included.9'), icon: "i-heroicons-shield-check" }
  ],
    delai: t('services.modals.saas.delay'),
    scope: Object.values(tm('services.modals.saas.scope') as object || {}).map(i => rt(i)),
}));

const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <UModal v-model:open="isOpen" class="service-modal" :overlay="false">
    <template #content>
      <div class="modal-content flex justify-end items-center gap-1" style="background-color: var(--bg-secondary);">
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
      <div class="modal-content rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide" style="background-color: var(--bg-secondary);">
        <!-- Header -->
        <div class="sticky top-0 p-6 pb-4 flex justify-between items-center z-10" style="background-color: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
          <div>
            <h2 class="text-xl font-semibold mb-1" style="color: var(--text-primary);">{{ modalData.title }}</h2>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">{{ modalData.result }}</p>
          </div>
        </div>
         
        <div class="p-6 pt-5 space-y-6">
          <!-- Pour qui -->
          <div>
            <h3 class="text-sm font-medium  tracking-wider mb-3">{{ $t('services.common.for_who') }}</h3>
            <ul class="space-y-2">
              <li v-for="item in modalData.forWho" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <span style="color: #F0BF6C;">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Inclus -->
          <div>
            <h3 class="text-sm font-medium  tracking-wider mb-3">{{ $t('services.common.included') }}</h3>
            <ul class="grid grid-cols-1 gap-1.5">
              <li v-for="item in modalData.inclus" :key="item.text" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color: #F0BF6C;" />
                <span>{{ item.text }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Délai -->
          <div class="flex items-center gap-3 py-3 px-4 rounded-lg" style="background-color: var(--bg-card);">
            <div>
              <span class="text-xs  tracking-wider" style="color: var(--text-secondary);">{{ $t('services.common.delay') }}</span>
              <p class="text-sm font-medium" style="color: var(--text-primary);">{{ modalData.delai }}</p>
            </div>
          </div>


        </div>
      </div>
    </template>
  </UModal>
</template>
