<template>
  <section class="relative z-10 bg-white">
    <div class="section-container-x section-container-y">
    <div class="flex flex-col md:flex-row items-start justify-between gap-10">
      <div class="w-full md:w-1/2">
        <h2 class="text-4xl md:text-5xl font-semibold leading-tight text-black">
          {{ title }}
        </h2>

        <div v-if="tags && tags.length" class="mt-4 flex flex-wrap gap-3">
          <div 
            v-for="tag in tags" 
            :key="tag"
            class="flex items-center bg-black text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
          >
            {{ tag }}
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <p class="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
          {{ content }}
        </p>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  tags?: string[] // Nu een array van strings voor meerdere tags
}>();
</script>