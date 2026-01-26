<template>
  <NuxtLayout>
    <Analytics/>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {Analytics} from '@vercel/analytics/nuxt'
</script>
