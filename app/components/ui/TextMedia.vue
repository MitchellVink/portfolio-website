<template>
  <div 
    class="relative z-[1]"
    :class="backgroundColor ? 'section-colored' : 'bg-white'" 
    :style="backgroundColor ? `background-color: ${backgroundColor}` : ''"
  >
    <div 
      class="section-container-x"
      :class="[backgroundColor ? 'inner-padding' : 'section-container-y']"
    >
      <div
        class="flex flex-col justify-center gap-8 lg:gap-12"
        :class="position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'"
      >
        <div 
          class="w-full lg:basis-7/12 animate-on-scroll"
          :class="position === 'left' ? 'slide-in-left' : 'slide-in-right'"
        >
          <div 
            ref="videoContainer"
            class="relative rounded-2xl lg:rounded-3xl w-full aspect-video overflow-hidden shadow-2xl bg-black group transition-all duration-300"
            :class="videoUrl ? 'lg:cursor-none' : 'cursor-default'"
            @mousemove="handleMouseMove"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
            @click="videoUrl ? isPlaying = true : null"
          >
            <iframe
              v-if="videoUrl && isPlaying"
              :src="`https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0&modestbranding=1`"
              class="absolute inset-0 w-full h-full z-10"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div v-else class="relative w-full h-full">
              <img
                :src="image || (videoUrl ? `https://img.youtube.com/vi/${videoUrl}/maxresdefault.jpg` : '')"
                class="w-full h-full object-cover transition-transform duration-700"
                alt="Thumbnail"
              />

              <div v-if="videoUrl" class="absolute top-3 left-4 lg:top-4 lg:left-6 z-20">
                <div class="bg-orange-500 text-white text-[10px] lg:text-sm font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl shadow-lg uppercase tracking-wider">
                  Bekijk video
                </div>
              </div>

              <div 
                v-if="videoUrl"
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
        </div>

        <div class="w-full lg:basis-5/12 text-left flex flex-col justify-center items-start">
          <h2 class="animate-on-scroll fade-up mb-4 lg:mb-6 text-3xl lg:text-4xl font-bold tracking-tight leading-tight" :style="{ color: textColor }">
            {{ title }}
          </h2>
          <div class="animate-on-scroll fade-up delay-1 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 opacity-90 whitespace-pre-line" :style="{ color: textColor }"> 
            {{ content }}
          </div>
          <div class="animate-on-scroll fade-up delay-2 w-full">
            <a v-if="url" :href="url" class="inline-block rounded-full bg-black hover:bg-orange-500 px-7 py-3 lg:px-8 lg:py-3.5 text-sm lg:text-base font-semibold text-white transition-all hover:scale-105 shadow-lg">
              {{ buttonText || 'Lees meer' }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps<{
  image?: string
  videoUrl?: string
  title: string
  content: string
  url?: string
  buttonText?: string
  position: 'left' | 'right'
  backgroundColor?: string
  textColor?: string
}>();

const isPlaying = ref(false);
const isHovering = ref(false);
const isDesktop = ref(false);
const videoContainer = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  if (videoContainer.value && isDesktop.value) {
    const rect = videoContainer.value.getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
  }
};

const checkDevice = () => {
  isDesktop.value = window.innerWidth >= 1024;
};

onMounted(() => {
  checkDevice();
  window.addEventListener('resize', checkDevice);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice);
});
</script>

<style scoped>
.relative {
  isolation: isolate;
}

.animate-on-scroll {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-up { transform: translateY(30px); }

@media (min-width: 1024px) {
  .slide-in-left { transform: translateX(-40px); }
  .slide-in-right { transform: translateX(40px); }

  .lg\:cursor-none, 
  .lg\:cursor-none * {
    cursor: none !important;
  }
}

.is-visible {
  opacity: 1;
  transform: translate(0, 0) !important;
}

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }

h2 { 
  text-wrap: balance; 
  max-width: 90%; 
}
</style>