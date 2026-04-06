<script setup>
import { ref } from 'vue'
const site = useBoilerplateSite()

const primaryBtn = ref(null)
const primaryWrapper1 = ref(null)
const primaryWrapper2 = ref(null)
const secondaryBtn = ref(null)
const secondaryWrapper = ref(null)

// Animation pour le bouton primaire avec stagger
useTextSlideAnimation(primaryBtn, [primaryWrapper1, primaryWrapper2])

// Animation pour le bouton secondaire
useTextSlideAnimation(secondaryBtn, secondaryWrapper)
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 w-full px-4 sm:px-0">
    <a ref="primaryBtn" href="#contact" class="cta-primary gap-2 flex items-center justify-center px-3 py-2 rounded-lg font-medium text-[15px] sm:text-sm md:text-[15px]
    lg:text-base text-[#0f0f0f] cursor-pointer backdrop-blur-md transition-all
    duration-200 no-underline">
      <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#0f0f0f] text-white flex items-center justify-center font-inter font-semibold text-[10px] md:text-xs">
        {{ site.companyInitials.value }}
      </div>
      <div class="flex flex-col items-start gap-px">
        <span class="text-slide-container h-[18px]">
          <span ref="primaryWrapper1" class="text-slide-wrapper">
            <span class="text-slide-text h-[18px] leading-[18px] font-inter text-sm font-semibold">{{ site.copy.value.hero.primaryCta }}</span>
            <span class="text-slide-text h-[18px] leading-[18px] font-inter text-sm font-semibold">{{ site.copy.value.hero.primaryCta }}</span>
          </span>
        </span>
        <span class="text-slide-container h-[12px]">
          <span ref="primaryWrapper2" class="text-slide-wrapper">
            <span class="text-slide-text h-[12px] leading-[12px] font-inter font-normal text-[9px]">{{ site.copy.value.nav.freeAudit }}</span>
            <span class="text-slide-text h-[12px] leading-[12px] font-inter font-normal text-[9px]">{{ site.copy.value.nav.freeAudit }}</span>
          </span>
        </span>
      </div>
    </a>

    <a 
      ref="secondaryBtn"
      :href="site.sourceLink.value || '#showcase'"
      :target="site.sourceLink.value ? '_blank' : undefined"
      class="secondary-btn group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm text-[#f0eadb] cursor-pointer transition-all duration-300 no-underline"
    >
      <span class="text-slide-container h-[20px]">
        <span ref="secondaryWrapper" class="text-slide-wrapper">
          <span class="text-slide-text h-[20px] leading-[20px]">{{ site.sourceLink.value ? site.copy.value.hero.secondaryFallback : site.copy.value.hero.secondaryCta }}</span>
          <span class="text-slide-text h-[20px] leading-[20px]">{{ site.sourceLink.value ? site.copy.value.hero.secondaryFallback : site.copy.value.hero.secondaryCta }}</span>
        </span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.text-slide-container {
  display: block;
  position: relative;
  overflow: hidden;
}

.text-slide-wrapper {
  display: flex;
  flex-direction: column;
}

.text-slide-text {
  display: block;
}
</style>
