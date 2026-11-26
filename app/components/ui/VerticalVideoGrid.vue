
<template>
  <div class="max-w-7xl mx-auto px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative aspect-[9/16] overflow-hidden rounded-2xl lg:rounded-3xl bg-black shadow-xl group cursor-pointer"
        @click="activeVideo = activeVideo === index ? null : index"
      >

        <!-- Video -->
        <iframe
          v-if="activeVideo === index"
          :src="`https://www.youtube.com/embed/${item.videoUrl}?autoplay=1&rel=0&modestbranding=1`"
          class="absolute inset-0 w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- Thumbnail -->
        <template v-else>
          <img
            :src="item.image || `https://img.youtube.com/vi/${item.videoUrl}/maxresdefault.jpg`"
            :alt="item.alt || 'Video thumbnail'"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

          <!-- Play button -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <img
                src="/icon-black.svg"
                alt="Play"
                class="w-8 h-8 lg:w-10 lg:h-10 object-contain brightness-0 invert"
              />
            </div>
          </div>

          <!-- Optional title -->
          <div
            v-if="item.title"
            class="absolute bottom-0 left-0 right-0 p-5 lg:p-6 bg-gradient-to-t from-black/80 to-transparent"
          >
            <h3 class="text-white font-semibold text-lg">
              {{ item.title }}
            </h3>
          </div>
        </template>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  items: {
    videoUrl: string;
    image?: string;
    alt?: string;
    title?: string;
  }[];
}>();

const activeVideo = ref<number | null>(null);
</script>
