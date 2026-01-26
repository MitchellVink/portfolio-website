<template>
  <div class="relative isolate -z-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24">
      <div class="overflow-hidden">
        <div class="marquee">
          <template v-for="(logo, i) in loopLogos" :key="`${logo.src}-${i}`">
            <img
                :src="logo.src"
                :alt="logo.alt"
                class="max-h-12 w-auto object-contain"
                width="158"
                height="48"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { src: '/assets/logos/Axa%20Valleirenners.png', alt: 'Axa Valleirenners' },
  { src: '/assets/logos/bouwbedrijf-bouw.png', alt: 'Bouwbedrijf' },
  { src: '/assets/logos/Dierenpark%20Amersfoort.png', alt: 'Dierenpark Amersfoort' },
  { src: '/assets/logos/Van%20der%20valk.png', alt: 'Van der Valk' },
  { src: '/assets/logos/Triathlon.png', alt: 'Triathlon' },
]

// duplicate for seamless loop
const loopLogos = [...logos, ...logos, ...logos]
</script>

<style scoped>
.marquee {
  display: flex;
  gap: 2rem;
  align-items: center;
  animation: marquee 7.5s linear infinite;
}

/* slide left by half the total width (since logos are duplicated) */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .marquee { animation: none; }
}
</style>
