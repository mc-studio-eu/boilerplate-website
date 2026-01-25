<script setup lang="ts">
const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade-scale">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid rgba(240, 191, 108, 0.3);
  color: var(--color-gold);
  backdrop-filter: blur(8px);
}

.scroll-to-top:hover {
  background: rgba(240, 191, 108, 0.15);
  border-color: var(--color-gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(240, 191, 108, 0.2);
}

.scroll-to-top:active {
  transform: translateY(0);
}

:global(.light) .scroll-to-top {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(26, 26, 26, 0.1);
  color: #1a1a1a;
}

:global(.light) .scroll-to-top:hover {
  background: rgba(240, 191, 108, 0.1);
  border-color: rgba(26, 26, 26, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Transition animations */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 5rem;
    right: 1.5rem;
    width: 44px;
    height: 44px;
  }
}
</style>
