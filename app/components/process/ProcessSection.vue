<script setup lang="ts">
const { t } = useI18n();

const steps = [1, 2, 3]
const activeStep = ref(1)

// Auto-rotate steps every 5 seconds if user hasn't interacted
let interval: ReturnType<typeof setInterval>
const isPaused = ref(false)

const setStep = (step: number) => {
  activeStep.value = step
  isPaused.value = true
}

onMounted(() => {
  interval = setInterval(() => {
    if (!isPaused.value) {
      activeStep.value = activeStep.value === 3 ? 1 : activeStep.value + 1
    }
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section id="process" class="py-20 px-6 bg-[var(--bg-primary)] overflow-hidden">
    <div class="max-w-[1216px] mx-auto">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        <!-- Left: Dynamic Visuals -->
        <div class="relative min-h-[400px] flex items-center justify-center lg:order-1 order-2">
          <!-- Decorative Background -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#f0bf6c]/10 to-transparent rounded-full blur-[100px] opacity-30 transition-all duration-700"
               :class="{
                 'translate-x-0': activeStep === 1,
                 'translate-x-10': activeStep === 2,
                 '-translate-x-10': activeStep === 3
               }"></div>
          
          <div class="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            
            <TransitionGroup 
              enter-active-class="transition-all duration-500 ease-out"
              leave-active-class="transition-all duration-300 ease-in"
              enter-from-class="opacity-0 scale-95 translate-y-4"
              leave-to-class="opacity-0 scale-105 -translate-y-4"
              mode="out-in"
            >
              <!-- Visual 1: Discovery Call (Calendar) -->
              <!-- Visual 1: Discovery Call (Calendar) -->
              <div v-if="activeStep === 1" key="step1" class="absolute inset-0 flex items-center justify-center">
                 <div class="w-auto h-auto max-w-full max-h-full rounded-2xl shadow-2xl overflow-hidden border border-white/5 bg-[#1c1c1c]">
                    <NuxtImg 
                      src="/img/process/step1_calendar.png" 
                      alt="Discovery Call Calendar" 
                      class="w-full h-full object-contain"
                    />
                 </div>
              </div>

              <!-- Visual 2: Proposal (Document) -->
              <!-- Visual 2: Proposal (Document) -->
              <div v-if="activeStep === 2" key="step2" class="absolute inset-0 flex items-center justify-center">
                 <div class="w-auto h-auto max-w-full max-h-full rounded-2xl shadow-2xl overflow-hidden border border-white/5 bg-[#1c1c1c]">
                    <NuxtImg 
                      src="/img/process/step2_proposal.png" 
                      alt="Proposal Document" 
                      class="w-full h-full object-contain"
                    />
                 </div>
              </div>

              <!-- Visual 3: Kickoff (Dashboard) -->
              <div v-if="activeStep === 3" key="step3" class="absolute inset-0 flex items-center justify-center">
                 <div class="w-[360px] bg-[#1c1c1c] border border-white/5 rounded-xl shadow-2xl overflow-hidden flex flex-col group">
                    <!-- Toolbar -->
                    <div class="h-10 bg-[#252525] border-b border-white/5 px-4 flex items-center justify-between">
                       <div class="flex items-center gap-2">
                          <div class="w-3 h-3 rounded-full bg-[#f0bf6c]"></div>
                          <div class="text-[10px] uppercase font-bold text-white/40 tracking-wider">Sprint 1</div>
                       </div>
                       <div class="flex -space-x-1.5">
                          <div class="w-5 h-5 rounded-full bg-blue-500 border border-[#252525]"></div>
                          <div class="w-5 h-5 rounded-full bg-purple-500 border border-[#252525]"></div>
                          <div class="w-5 h-5 rounded-full bg-[#f0bf6c] border border-[#252525] flex items-center justify-center text-[8px] text-black font-bold">+</div>
                       </div>
                    </div>
                    
                    <!-- Kanban Board -->
                    <div class="p-5 flex gap-4 h-[300px] bg-[#1c1c1c]">
                       <!-- Col 1 -->
                       <div class="flex-1 flex flex-col gap-3">
                          <div class="text-[10px] uppercase text-white/30 font-bold tracking-wider flex items-center gap-2">
                             To Do <span class="bg-white/5 px-1.5 py-0.5 rounded text-white/50 text-[9px]">3</span>
                          </div>
                          
                          <!-- Card 1 -->
                          <div class="bg-[#2a2a2a] p-3 rounded-lg border border-white/5 hover:border-[#f0bf6c]/30 transition-colors shadow-sm cursor-pointer group/card">
                            <div class="flex justify-between items-start mb-2">
                               <div class="w-8 h-1 bg-[#f0bf6c] rounded-full"></div>
                               <div class="text-[9px] text-white/30">PRI-1</div>
                            </div>
                            <div class="h-2 w-3/4 bg-white/20 rounded mb-1.5 group-hover/card:bg-white/30 transition-colors"></div>
                            <div class="h-2 w-1/2 bg-white/10 rounded"></div>
                          </div>
                          
                          <!-- Card 2 -->
                          <div class="bg-[#2a2a2a] p-3 rounded-lg border border-white/5 hover:border-[#f0bf6c]/30 transition-colors shadow-sm cursor-pointer">
                            <div class="flex justify-between items-start mb-2">
                               <div class="w-8 h-1 bg-blue-400 rounded-full"></div>
                               <div class="text-[9px] text-white/30">PRI-2</div>
                            </div>
                            <div class="h-2 w-full bg-white/20 rounded"></div>
                          </div>
                       </div>
                       
                       <!-- Col 2 -->
                       <div class="flex-1 flex flex-col gap-3">
                          <div class="text-[10px] uppercase text-white/30 font-bold tracking-wider flex items-center gap-2">
                             In Progress <span class="bg-white/5 px-1.5 py-0.5 rounded text-white/50 text-[9px]">1</span>
                          </div>
                          
                          <div class="bg-[#2a2a2a] p-3 rounded-lg border border-white/5 border-l-2 border-l-[#22c55e] shadow-lg relative overflow-hidden group/active">
                            <div class="absolute top-0 right-0 p-2 opacity-0 group-hover/active:opacity-100 transition-opacity">
                               <div class="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping"></div>
                            </div>
                            <div class="pl-1 mb-2">
                               <div class="flex gap-1.5 mb-2">
                                  <span class="text-[9px] bg-[#22c55e]/20 text-[#22c55e] px-1.5 rounded">Dev</span>
                               </div>
                               <div class="h-2 w-5/6 bg-white/80 rounded mb-1.5 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
                               <div class="h-1.5 w-1/2 bg-white/20 rounded"></div>
                            </div>
                            <div class="flex items-center justify-between border-t border-white/5 pt-2 mt-2">
                               <div class="flex -space-x-1.5">
                                  <div class="w-4 h-4 rounded-full bg-gray-500 border border-[#2a2a2a]"></div>
                                  <div class="w-4 h-4 rounded-full bg-gray-400 border border-[#2a2a2a]"></div>
                               </div>
                               <span class="text-[9px] text-white/30">Due Tmrw</span>
                            </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </TransitionGroup>

          </div>
        </div>

        <!-- Right: Clickable Steps -->
        <div class="lg:order-2 order-1">
          <div class="mb-10">
            <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300" v-html="$t('process.title')"></h2>
            <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]">
              {{ $t('process.subtitle') }}
            </p>
          </div>

          <div class="space-y-6">
            <div 
              v-for="step in steps" 
              :key="step" 
              class="flex gap-6 group cursor-pointer relative"
              @click="setStep(step)"
              @mouseenter="isPaused = true"
              @mouseleave="isPaused = false"
            >
              <!-- Progress Line (Background) -->
              <div 
                class="absolute left-0 top-0 bottom-0 w-1 bg-[var(--border-subtle)] rounded-full overflow-hidden transition-all duration-300"
              >
                 <!-- Active Progress Bar -->
                 <div 
                    class="w-full bg-[var(--color-gold)] transition-all duration-500 ease-out"
                    :class="activeStep === step ? 'h-full' : 'h-0'"
                 ></div>
              </div>
              
              <div class="pl-8 py-2 w-full transition-all duration-300" :class="activeStep === step ? 'opacity-100 translate-x-2' : 'opacity-50 hover:opacity-80'">
                <h3 
                  class="font-manrope text-xl font-semibold mb-2 transition-colors duration-300"
                  :class="activeStep === step ? 'text-[var(--color-gold)]' : 'text-[var(--text-primary)]'"
                >
                  {{ $t(`process.steps.${step}.title`) }}
                </h3>
                <p class="font-inter text-sm leading-relaxed text-[var(--text-secondary)] max-w-[480px]">
                  {{ $t(`process.steps.${step}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

