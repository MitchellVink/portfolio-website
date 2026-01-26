<template>
  <section class="hero -mt-[110px] lg:-mt-[150px] relative h-[180vh]">
    <div class="sticky top-0 grid h-screen place-items-center overflow-clip">
      <div
          ref="frameEl"
          class="relative w-screen h-screen [clip-path:inset(0%_round_0px)] translate-z-0 [will-change:clip-path,transform,filter]"
          aria-label="Hero video frame"
      >
        <video
            ref="videoEl"
            class="absolute inset-0 h-full w-full object-cover brightness-[0.7]"
            src="/assets/videos/HeaderVid_KnivV4.mp4"
            autoplay
            muted
            loop
            playsinline
        />
      </div>

      <div class="absolute inset-0 flex flex-col items-center sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto justify-center text-center text-white z-10 px-6 pointer-events-none">
        <h1 class="text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-2 select-none">
          Impress 
          <span class="through-text inline-block text-4xl md:text-6xl lg:text-7xl font-light lowercase italic text-orange-500 transform -translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8">
            through
          </span> 
          Creation
        </h1>

        <div class="flex justify-between items-center gap-x-2 lg:gap-x-10 mt-0 lg:mt-2 opacity-60">
            <span class="text-[12px] md:text-sm font-bold uppercase md:tracking-[0.2em] whitespace-nowrap">Product Design</span>
            <span class="text-[12px] md:text-sm font-bold uppercase md:tracking-[0.2em] whitespace-nowrap">UI/UX Design</span>
            <span class="text-[12px] md:text-sm font-bold uppercase md:tracking-[0.2em] whitespace-nowrap">Content Creatie</span>
          </div>
        
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div class="relative w-[1.5px] h-24 bg-white/10 overflow-hidden rounded-full">
            <div class="scroll-line absolute top-0 left-0 w-full h-1/3 bg-orange-500 rounded-full"></div>
         </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const frameEl = ref<HTMLElement | null>(null)
const videoEl = ref<HTMLVideoElement | null>(null)
let ctx: { revert: () => void } | null = null

onMounted(async () => {
  // Video Autoplay Logica
  if (videoEl.value) {
    videoEl.value.muted = true
    videoEl.value.play().catch(e => console.log("Autoplay blocked", e))
  }

  // GSAP Animatie Herstellen
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { $gsap } = useNuxtApp() as any
  const gsap = $gsap ?? (await import('gsap')).gsap
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // Dit zorgt voor het kleiner worden van de video bij scrollen
    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })
    .to(frameEl.value, {
      clipPath: 'inset(4% round 32px)', // De afgeronde hoeken
      scale: 0.92,                       // Het kleiner worden
    }, 0)
  }, frameEl.value)
})

onBeforeUnmount(() => {
  ctx?.revert?.()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic@0,400&display=swap');

.through-text {
  font-family: 'Playfair Display', serif;
  /* Subtiele glow om het oranje te laten poppen over de video */
  filter: drop-shadow(0 0 15px rgba(249, 115, 22, 0.4));
}

/* De animatie voor het lijntje */
.scroll-line {
  animation: scrollProgress 2.5s infinite cubic-bezier(1, 0, 0, 1);
}

@keyframes scrollProgress {
  0% { transform: translateY(-110%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(250%); opacity: 0; }
}

</style>