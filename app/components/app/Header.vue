<template>
  <header class="fixed inset-x-0 top-0 z-90 flex justify-center px-4 pt-4">
    <nav
        class="relative mx-auto flex w-full max-w-xl items-center justify-between
             rounded-full border border-white/15 bg-white/10
             shadow-[0_8px_32px_0_rgba(2,6,23,0.35)]
             backdrop-blur-xl
             px-3 py-2
             ring-1 ring-black/5
             supports-[backdrop-filter]:bg-white/10
             dark:border-white/10 dark:bg-white/5"
    >
      <!-- Brand -->
      <a href="/" class="flex items-center gap-2 px-2">
        <img src="/icon-black.svg" alt="Logo" class="h-8 w-8 rounded-lg object-cover mix-blend-darken" />
      </a>

      <!-- Mobile menu button -->
      <button
          class="relative block sm:hidden rounded-xl p-2 text-black focus:outline-none"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
      >
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 6l12 12M18 6l-12 12" />
        </svg>
      </button>

      <!-- Links -->
      <div class="hidden sm:flex items-center gap-4">
        <a
            v-for="item in items"
            :key="item.href"
            :href="item.href"
            class="text-black hover:text-orange-500 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile dropdown -->
      <transition
          enter-active-class="transition duration-200"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
      >
        <div
            v-if="menuOpen"
            class="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/15 bg-white p-2 backdrop-blur-xl
                 shadow-[0_8px_32px_0_rgba(2,6,23,0.35)] ring-1 ring-black/5 sm:hidden"
        >
          <div class="flex flex-col">
            <a
                v-for="item in items"
                :key="item.href"
                :href="item.href"
                class="rounded-xl px-3 py-2 text-black hover:text-orange-500"
                @click="menuOpen = false"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const items = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Cases', href: '/cases' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]
</script>

<style scoped>
/* Subtle inner glass sheen across the whole nav shell */
nav::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 35%),
  linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0));
  pointer-events: none;
  mask: linear-gradient(#000 60%, transparent);
}
</style>