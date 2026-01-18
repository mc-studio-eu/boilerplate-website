<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });

const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <UModal v-model:open="isOpen" class="service-modal">
    <template #content>
      <div class="modal-content rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" style="background-color: var(--bg-secondary);">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-xl font-semibold mb-1" style="color: var(--text-primary);">Launch / SaaS</h2>
            <p class="text-sm" style="color: var(--text-secondary);">Un produit complet, prêt à scaler.</p>
          </div>
          <button @click="closeModal" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
          </button>
        </div>
        <p class="text-sm" style="color: var(--text-muted);">Contenu à venir...</p>
      </div>
    </template>
  </UModal>
</template>
