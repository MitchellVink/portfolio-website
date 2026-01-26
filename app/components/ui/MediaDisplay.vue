<template>
  <div
      class="w-full mx-auto max-w-7xl "
      :class="wrapperClass"
  >
    <!-- IMAGE -->
    <img
        v-if="type === 'image' && src"
        :src="src"
        :alt="alt"
        class="w-full h-[250px] lg:h-full rounded-2xl"
    />

    <!-- VIDEO -->
    <video
        v-else-if="type === 'video' && src"
        :src="src"
        class="w-full h-full object-cover rounded-2xl"
        :autoplay="autoplay"
        :loop="loop"
        :muted="muted"
        :controls="controls"
        playsinline
    />

    <slot v-else />
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: false },
  type: { type: String, default: "image" }, // "image" | "video"
  alt: { type: String, default: "" },

  // Video options
  autoplay: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  controls: { type: Boolean, default: false },

  // Custom classes for wrapper
  wrapperClass: { type: String, default: "" }
})
</script>
