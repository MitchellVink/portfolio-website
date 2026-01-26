<template>
  <section class="relative overflow-hidden">
    <div class="section-container-x section-container-y z-10">
      
      <div 
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
        class="relative flex flex-col md:flex-row items-center justify-between gap-10 p-10 lg:p-20 rounded-[32px] bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl group cursor-none"
      >
        
        <div 
          class="pointer-events-none absolute z-50 w-6 h-6 bg-orange-500 rounded-full transition-opacity duration-300 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          :style="{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: isHovering ? 1 : 0,
            transform: 'translate(-50%, -50%)'
          }"
        ></div>

        <div 
          class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
          :class="[isHovering ? 'opacity-60' : 'opacity-30 animate-float']"
          :style="gradientStyle"
        ></div>

        <div class="max-w-xl text-center md:text-left relative z-10 pointer-events-none">
          <h2 class="text-white text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1]">
            Klaar voor de <br />
            <span class="through-text text-5xl lg:text-6xl font-light lowercase italic text-orange-500 block md:inline">volgende</span> 
            stap?
          </h2>
          <p class="mt-6 text-gray-100 text-lg lg:text-xl max-w-sm">
            Laten we samen jouw visie vertalen naar impactvolle creaties.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-5 items-center relative z-10">
          <NuxtLink 
            to="/cases" 
            class="inline-block rounded-full bg-orange-500 hover:bg-white px-7 py-3 lg:px-8 lg:py-3.5 text-sm lg:text-base font-semibold text-white hover:text-black transition-all hover:scale-105 shadow-lg"
          >
            Bekijk Portfolio
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            class="inline-block rounded-full border border-white hover:bg-white px-7 py-3 lg:px-8 lg:py-3.5 text-sm lg:text-base font-semibold text-white hover:text-black transition-all hover:scale-105 shadow-lg"
          >
            Contact
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const cardRef = ref<HTMLElement | null>(null)
const isHovering = ref(false)
const mousePos = reactive({ x: 0, y: 0 })

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mousePos.x = e.clientX - rect.left
  mousePos.y = e.clientY - rect.top
}

const gradientStyle = computed(() => {
  const op = 0.65
  return {
    background: isHovering.value 
      ? `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, ${op}), transparent 80%)`
      : `radial-gradient(200px circle at var(--x, 80%) var(--y, 80%), rgba(249, 115, 22, 0.9), transparent 80%)`
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic@0,400&display=swap');

.through-text {
  font-family: 'Playfair Display', serif;
}

/* Geforceerde cursor-none op alles binnen de kaart */
.cursor-none, .cursor-none * {
  cursor: none !important;
}

.animate-float {
  animation: floatAround 12s infinite alternate ease-in-out;
}

@keyframes floatAround {
  0% { --x: 20%; --y: 30%; }
  33% { --x: 80%; --y: 20%; }
  66% { --x: 60%; --y: 80%; }
  100% { --x: 20%; --y: 30%; }
}

@property --x {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 50%;
}
@property --y {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 50%;
}
</style>