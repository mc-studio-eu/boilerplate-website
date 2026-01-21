<script setup lang="ts">
const { t } = useI18n();

const steps = [1, 2, 3]
const activeStep = ref(1)

// Auto-rotate steps every 5 seconds if user hasn't interacted
let interval: NodeJS.Timeout
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
              <div v-if="activeStep === 1" key="step1" class="absolute inset-0 flex items-center justify-center">
                 <div class="w-[320px] bg-[#1c1c1c] border border-white/5 rounded-2xl shadow-2xl p-5 flex flex-col gap-5 relative overflow-hidden group hover:border-[#f0bf6c]/30 transition-colors duration-500">
                    <!-- Calendar Header -->
                    <div class="flex justify-between items-center">
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[10px] uppercase tracking-wider text-white/40 font-bold">September 2026</span>
                        <span class="text-white font-semibold text-lg">Discovery Call</span>
                      </div>
                      <div class="w-9 h-9 rounded-full bg-[#f0bf6c]/10 flex items-center justify-center text-[#f0bf6c] group-hover:bg-[#f0bf6c] group-hover:text-black transition-colors duration-300">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                    </div>
                    
                    <!-- Calendar Grid Mockup -->
                    <div class="grid grid-cols-7 gap-2">
                      <div v-for="day in ['M', 'T', 'W', 'T', 'F', 'S', 'S']" :key="day" class="h-6 flex items-center justify-center text-[10px] text-white/20 font-medium">{{ day }}</div>
                      <div v-for="i in 28" :key="`d-${i}`" 
                           class="aspect-square rounded-full flex items-center justify-center text-[11px] transition-all duration-300" 
                           :class="i === 15 ? 'bg-[#f0bf6c] text-[#0f0f0f] font-bold shadow-[0_0_15px_rgba(240,191,108,0.4)] scale-110' : 'text-white/30 hover:bg-white/5 hover:text-white'">
                        {{ i }}
                      </div>
                    </div>

                    <!-- Selected Slot -->
                    <div class="bg-[#2a2a2a] rounded-xl p-3 flex items-center justify-between border border-white/5 group-hover:border-[#f0bf6c]/20 transition-colors duration-300">
                       <div class="flex items-center gap-3">
                         <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#f0bf6c] to-[#d4a04b] flex items-center justify-center text-[#0f0f0f] font-bold text-xs">MC</div>
                         <div class="flex flex-col">
                           <span class="text-sm text-white font-medium">30 min Meeting</span>
                           <span class="text-[10px] text-white/40">Google Meet • 10:00 AM</span>
                         </div>
                       </div>
                       <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                 </div>
              </div>

              <!-- Visual 2: Proposal (Document) -->
              <div v-if="activeStep === 2" key="step2" class="absolute inset-0 flex items-center justify-center">
                 <div class="w-[300px] h-[400px] bg-white text-[#0f0f0f] rounded-lg shadow-2xl transform rotate-1 p-8 flex flex-col relative group hover:rotate-0 transition-transform duration-500">
                    <div class="flex justify-between items-start mb-8">
                       <div class="w-10 h-10 bg-[#0f0f0f] rounded-full flex items-center justify-center text-white font-bold tracking-tighter">MC</div>
                       <div class="text-[10px] text-gray-400 font-mono">INV-2024-001</div>
                    </div>
                    
                    <div class="h-3 w-1/3 bg-gray-100 rounded mb-6"></div>
                    <div class="h-6 w-3/4 bg-[#0f0f0f] rounded mb-8"></div>
                    
                    <div class="space-y-4 mb-auto">
                      <div class="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                        <span class="text-gray-500 font-medium">UI/UX Design</span>
                        <span class="font-mono font-bold">$4,500</span>
                      </div>
                      <div class="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                        <span class="text-gray-500 font-medium">Development</span>
                        <span class="font-mono font-bold">$5,000</span>
                      </div>
                      <div class="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                        <span class="text-gray-500 font-medium">SEO & Perf.</span>
                        <span class="font-mono font-bold">$1,000</span>
                      </div>
                    </div>

                    <div class="mt-6">
                      <div class="flex justify-between items-end mb-3">
                        <span class="text-xs text-gray-400 uppercase tracking-wider font-bold">Total Estimate</span>
                        <span class="text-2xl font-bold tracking-tight">$10,500</span>
                      </div>
                      <div class="w-full py-3 bg-[#f0bf6c] text-[#0f0f0f] font-bold text-sm text-center rounded-lg shadow-lg hover:brightness-105 transition-all cursor-pointer">
                        Approve Proposal
                      </div>
                    </div>

                    <!-- Badge -->
                    <div class="absolute -top-2 -right-2 bg-[#22c55e] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                       <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                       Ready
                    </div>
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

