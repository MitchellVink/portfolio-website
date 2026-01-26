<template>
  <div class="grid grid-cols-3 max-w-7xl mx-auto px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24 gap-4">
    <!-- Top Left -->
    <MediaDisplay
        v-if="items[0]"
        :type="items[0].type"
        :src="items[0].src"
        :alt="items[0].alt"
        wrapperClass="col-span-2"
    />

    <!-- Top Right -->
    <MediaDisplay
        v-if="items[1]"
        :type="items[1].type"
        :src="items[1].src"
        :alt="items[1].alt"
    />

    <!-- Bottom Left -->
    <MediaDisplay
        v-if="items[2]"
        :type="items[2].type"
        :src="items[2].src"
        :alt="items[2].alt"
    />

    <!-- Bottom Center -->
    <MediaDisplay
        v-if="items[3]"
        :type="items[3].type"
        :src="items[3].src"
        :alt="items[3].alt"
        wrapperClass="col-span-2"
    />
  </div>
</template>

<script setup>
import MediaDisplay from "~/components/ui/MediaDisplay.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  }
})
</script>
