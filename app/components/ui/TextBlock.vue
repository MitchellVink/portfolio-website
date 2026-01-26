<template>
  <div
    class="section-container-y px-6 lg:px-8 mx-auto mb-0 overflow-hidden text-left"
    :class="position === 'center' ? 'max-w-3xl text-center mx-auto' : 'max-w-7xl'"
    :style="backgroundColor ? `background-color: ${backgroundColor}` : ''"
  >
    <div :class="position === 'center' ? 'mx-auto' : 'lg:max-w-4xl'">
      
      <h2
        class="animate-on-scroll fade-up mb-6 text-3xl lg:text-4xl font-semibold tracking-tight leading-tight"
        :style="textColor ? `color: ${textColor}` : ''"
      >
        {{ title }}
      </h2>

      <p
        class="animate-on-scroll fade-up delay-1 text-lg lg:text-xl leading-relaxed opacity-90 whitespace-pre-line"
        :style="textColor ? `color: ${textColor}` : ''"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
  title: string
  content: string
  position: 'left' | 'center'
  backgroundColor?: string
  textColor?: string
}>();

// Dezelfde Intersection Observer logica voor consistentie
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
</script>

<style scoped>
/* Basis animatie instellingen */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Actieve staat wanneer in beeld */
.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Vertraging voor de paragraaf */
.delay-1 {
  transition-delay: 0.2s;
}

h2 {
  text-wrap: balance;
}

p {
  max-width: 75ch;
}
</style>