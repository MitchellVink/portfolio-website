<template>
  <div class="section-container-x section-container-y">
    <div class="pb-12">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Diensten
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="case-card relative group overflow-hidden rounded-3xl shadow-xl bg-black lg:cursor-none aspect-square"
        @mousemove="handleMouseMove($event, index)"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <NuxtLink
          v-if="card.url"
          :to="card.url"
          class="absolute inset-0 z-10"
        >
          <div 
            v-if="activeCard === index"
            class="hidden lg:flex pointer-events-none absolute z-[20] items-center justify-center rounded-full bg-orange-500 shadow-2xl"
            :style="{
              width: '60px',
              height: '60px',
              left: `${cursorX}px`,
              top: `${cursorY}px`,
              transform: 'translate(-50%, -50%)'
            }"
          >
          </div>

          <video
            v-if="card.video"
            ref="videoRefs"
            class="w-full h-full object-cover absolute inset-0 transition-opacity duration-700 group-hover:opacity-100 opacity-0 z-2"
            :src="card.video"
            muted
            loop
            playsinline
          />

          <img
            :src="card.poster"
            class="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 z-1"
            :class="card.video ? 'group-hover:opacity-0' : ''"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-3 pointer-events-none"></div>

          <div class="absolute bottom-0 left-0 right-0 text-white p-8 z-40 pointer-events-none translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <h3 class="text-2xl font-bold tracking-tight">{{ card.title }}</h3>
            <p class="text-sm font-medium text-orange-500 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Bekijk dienst →
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = [
  {
    title: "PRODUCT DESIGN",
    poster: "/assets/services/product-design.jpg",
    video: "/assets/videos/ProductDesign.mp4",
    url: '/services/design',
  },
  {
    title: "CONTENT CREATIE",
    video: "/assets/videos/ContentCreatie.mp4",
    poster: "/assets/content-creatie.png",
    url: '/services/content',
  },
  {
    title: "UI/UX DESIGN",
    poster: "/assets/services/ux-ui-design.jpg",
    video: "/assets/videos/DroppingBallsUxUi.mp4",
    url: '/services/uxuidesign',
  },
]

const activeCard = ref(null)
const cursorX = ref(0)
const cursorY = ref(0)
const videoRefs = ref([])

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  cursorX.value = e.clientX - rect.left
  cursorY.value = e.clientY - rect.top
}

const handleMouseEnter = (index) => {
  activeCard.value = index
  const video = videoRefs.value[index]
  if (video) {
    video.play()
  }
}

const handleMouseLeave = (index) => {
  activeCard.value = null
  const video = videoRefs.value[index]
  if (video) {
    video.pause()
    video.currentTime = 0
  }
}
</script>

<style scoped>
.case-card {
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (min-width: 1024px) {
  .lg\:cursor-none,
  .lg\:cursor-none * {
    cursor: none !important;
  }
}
</style>