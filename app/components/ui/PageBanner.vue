<template>
  <section class="section-colored relative w-full -mt-[150px] lg:-mt-[200px] mb-16 lg:mb-24 overflow-hidden">
    <div class="relative flex flex-col justify-center px-6 lg:px-8 pt-32 min-h-[600px] lg:min-h-[75vh] w-full">
      
      <video
          ref="videoEl"
          v-if="video"
          :src="video"
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.7]"
      ></video>
      
      <img
          v-else-if="image"
          :src="image"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.7]"
      />

      <div class="absolute inset-0 bg-black/15 mix-blend-multiply z-10 pointer-events-none"></div>

      <div class="relative z-20 mx-auto w-full max-w-7xl">
        <div class="max-3xl">
          <h2 class="animate-fade-in-up text-4xl font-semibold tracking-tight text-white sm:text-6xl drop-shadow-md">
            {{ title }}
          </h2>
          <p class="animate-fade-in-up-delay mt-6 max-w-xl text-lg lg:text-xl text-white drop-shadow-md whitespace-pre-line">
            {{ subtitle }}
          </p>
        </div>
      </div>

      <div v-if="labels && labels.length > 0" class="absolute bottom-8 lg:bottom-12 left-0 w-full z-20 px-6 lg:px-8">
        <div class="mx-auto max-w-7xl flex flex-wrap gap-3 animate-fade-in-up-delay-extra">
          <span 
            v-for="label in labels" 
            :key="label"
            class="bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs lg:text-sm font-medium px-4 py-2 rounded-full shadow-lg uppercase tracking-wider"
          >
            {{ label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title: string,
  subtitle: string,
  image?: string,
  video?: string,
  labels?: string[] // Nieuwe prop voor de labels
}>();

const videoEl = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const v = videoEl.value
  if (v) {
    v.muted = true
    v.playsInline = true
    const playVideo = () => {
      v.play().catch(() => {
        setTimeout(playVideo, 100)
      })
    }
    playVideo()
  }
})
</script>

<style scoped>
.page-banner {
  z-index: 1;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-up-delay {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

/* Extra vertraging voor de labels voor een mooi cascade effect */
.animate-fade-in-up-delay-extra {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>