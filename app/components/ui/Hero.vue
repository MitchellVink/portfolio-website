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
            class="absolute inset-0 h-full w-full object-cover"
            src="/assets/videos/Showreel-KnivV2.mp4"
            autoplay
            muted
            loop
            playsinline
        />
      </div>

      <!-- Title and CTA Buttons -->
      <div class="absolute inset-0 flex flex-col items-center max-w-4xl mx-auto justify-center text-center text-white z-10">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">Technisch en creatief voor producten en video die écht werken</h1>
        <div class="flex gap-4">
          <a href="/cases" class="inline-block rounded-full bg-black hover:bg-orange-500 px-7 py-3 lg:px-8 lg:py-3.5 text-sm lg:text-base font-semibold text-white transition-all hover:scale-105 shadow-lg">
            Cases
          </a>
          <a href="/about" class="inline-block rounded-full bg-orange-500 hover:bg-black px-7 py-3 lg:px-8 lg:py-3.5 text-sm lg:text-base font-semibold text-white transition-all hover:scale-105 shadow-lg">
            Contact
          </a>
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
  const v = videoEl.value
  if (v) {
    v.muted = true
    v.playsInline = true as any

    const playVideo = () => {
      v.play().catch((err) => {
        console.log('Video play attempt:', err)
        setTimeout(playVideo, 100)
      })
    }
    playVideo()
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { $gsap } = useNuxtApp() as any
  const gsap = $gsap ?? (await import('gsap')).gsap
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    // Animate the scroll indicator opacity
    tl.to(
        frameEl.value,
        {
          clipPath: 'inset(4% round 32px)',
          scale: 0.92,
        },
        0
    )
  }, frameEl)
})

onBeforeUnmount(() => {
  ctx?.revert?.()
})
</script>

<style scoped>
.overlay-before::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: black;
  mix-blend-mode: multiply;
  opacity: 0.6;
  z-index: 1;
  pointer-events: none;
}
</style>