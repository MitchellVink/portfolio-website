
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24 gap-4"
  >
    <MediaDisplay
      v-for="(item, index) in items"
      :key="index"
      :type="item.type || 'image'"
      :src="item.src"
      :alt="item.alt || ''"
      :wrapperClass="[
        item.colSpan === 2 ? 'md:col-span-2' : '',
        item.colSpan === 3 ? 'md:col-span-3' : '',
        item.rowSpan === 2 ? 'md:row-span-2' : '',
        item.class || ''
      ].filter(Boolean).join(' ')"
    />
  </div>
</template>

<script setup>
import MediaDisplay from "~/components/ui/MediaDisplay.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
