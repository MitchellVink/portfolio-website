<template>
  <div
      class="w-full mx-auto max-w-7xl"
      :class="wrapperClass"
  >
    <img
        v-if="type === 'image' && src"
        :src="src"
        :alt="alt"
        class="w-full h-[250px] lg:h-full rounded-2xl object-cover shadow-lg"
    />

    <div 
      v-else-if="type === 'video' && src"
      ref="videoContainer"
      class="relative rounded-2xl w-full aspect-video overflow-hidden shadow-2xl bg-black group transition-all duration-300"
      :class="videoURL ? 'lg:cursor-none' : 'cursor-default'"
      @mousemove="handleMouseMove"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
      @click="isPlaying = true"
    >
      <iframe
        v-if="isPlaying"
        :src="`https://www.youtube.com/embed/${src}?autoplay=1&rel=0&modestbranding=1`"
        class="absolute inset-0 w-full h-full z-10"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div v-else class="relative w-full h-full">
        <img
          :src="altImage || `https://img.youtube.com/vi/${src}/maxresdefault.jpg`"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Thumbnail"
        />

        <div class="absolute top-3 left-4 lg:top-4 lg:left-6 z-20">
          <div class="bg-orange-500 text-white text-[10px] lg:text-sm font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl shadow-lg uppercase tracking-wider">
            Bekijk video
          </div>
        </div>

        <div 
          class="z-20 flex items-center justify-center rounded-full bg-orange-500 shadow-2xl transition-all duration-300 ease-out pointer-events-none"
          :class="[
            isHovering && isDesktop ? 'absolute' : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-16 h-16 lg:w-[80px] lg:h-[80px]', 
            isHovering && isDesktop ? 'lg:w-[100px] lg:h-[100px]' : ''
          ]"
          :style="isHovering && isDesktop ? {
            left: `${mouseX}px`,
            top: `${mouseY}px`,
            transform: 'translate(-50%, -50%)'
          } : {}"
        >
          <img src="/icon-black.svg" alt="Play" class="w-8 h-8 lg:w-10 lg:h-10 object-contain brightness-0 invert" />
        </div>
      </div>
    </div>

    <slot v-else />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: { type: String, required: false }, // Bij video: de YouTube ID
  type: { type: String, default: "image" }, // "image" | "video"
  alt: { type: String, default: "" },
  altImage: { type: String, default: "" }, // Optionele eigen thumbnail voor video
  wrapperClass: { type: String, default: "" }
})

const isPlaying = ref(false);
const isHovering = ref(false);
const isDesktop = ref(false);
const videoContainer = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e) => {
  if (videoContainer.value && isDesktop.value) {
    const rect = videoContainer.value.getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
  }
};

const checkDevice = () => {
  isDesktop.value = typeof window !== 'undefined' && window.innerWidth >= 1024;
};

onMounted(() => {
  checkDevice();
  window.addEventListener('resize', checkDevice);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice);
});
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg\:cursor-none, 
  .lg\:cursor-none * {
    cursor: none !important;
  }
}
</style>