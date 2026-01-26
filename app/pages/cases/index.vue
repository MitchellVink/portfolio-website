<template>
  <div class="section-colored cases-page mx-auto max-w-7xl pb-10 lg:pb-20 xl:pb-24">
    <UiIntro
        title="Cases waar ik trots op ben"
        content="Mijn werk is een mix van content, design en technologie. Altijd ontwikkeld met de eindgebruiker als uitgangspunt. Elk project is een samenwerking tussen strategie, creativiteit en techniek. Hieronder vind je een selectie van cases waar ik trots op ben."
    />

    <LogoCloud/>

    <div class="px-6 lg:px-8 mx-auto w-full sm:w-max">
      <div class="flex flex-wrap bg-gray-300 rounded-2xl sm:rounded-full sm:w-max p-4 gap-4 mt-8 justify-center border border-gray-400/20">
        <button
            v-for="type in caseTypes"
            :key="type"
            @click="toggleFilter(type)"
            class="px-5 py-2.5 rounded-full w-full sm:w-max text-sm font-semibold transition-all duration-300 shadow-sm"
            :class="selectedFilters.includes(type) ? 'bg-black text-white scale-105 shadow-md' : 'bg-white text-black hover:bg-gray-100'"
        >
          {{ type }}
        </button>
      </div>
    </div>

    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <transition-group 
        tag="div" 
        name="case-grid" 
        class="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 lg:grid-flow-dense"
      >
        <div
            v-for="(caseItem, index) in filteredCases"
            :key="caseItem.slug"
            class="case-card relative overflow-hidden rounded-3xl shadow-xl group transition-all duration-500"
            :class="[
              caseItem.size === 2 ? 'lg:col-span-2' : 'lg:col-span-1',
              'col-span-1'
            ]"
            :style="{ '--index': index }"
        >
          <NuxtLink :to="`/cases/${caseItem.slug}`" class="block h-full overflow-hidden">
            <div class="h-[400px] w-full relative">
              
              <img
                  :src="caseItem.image"
                  :alt="caseItem.title"
                  class="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
              
              <div class="absolute bottom-0 left-0 p-8 text-white translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <div class="flex gap-2 mb-3">
                   <span v-for="t in caseItem.type" :key="t" class="text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                     {{ t }}
                   </span>
                </div>
                <h3 class="text-2xl font-bold tracking-tight">{{ caseItem.title }}</h3>
                <p class="text-sm font-medium text-gray-300 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Bekijk volledige case →
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import LogoCloud from "~/components/ui/LogoCloud.vue";

const cases = [
  { title: "STEETS WERKENBIJ", type: ["UI/UX Design"], image: "/assets/cases/steets-werkenbij/SteetsHome.png", size: 1, slug: "steets-werkenbij" },
  { title: "AXA", type: ["Content Creatie"], image: "https://www.dev.kniv-studios.nl/wp-content/uploads/2024/11/Axa.png", size: 2, slug: "axa" },
  { title: "Kunstroute Veenendaal", type: ["Product Design", "Content Creatie"], image: "/assets/cases/kunstroute-veenendaal/Kunstroute-opening.jpg", size: 2, slug: "kunstroute-veenendaal" },
  { title: "DIT BIER", type: ["Product Design", "UI/UX Design"], image: "/assets/cases/dit-bier/DitBierThumbnail2.png", size: 1, slug: "dit-bier" },
  { title: "VAN DER VALK", type: ["Content Creatie"], image: "/assets/cases/hotel-vandervalk/Vandervalk-overview3.png", size: 1, slug: "van-der-valk" },
];

const caseTypes = ["Product Design", "Content Creatie", "UI/UX Design"];
const selectedFilters = ref<string[]>([]);

const toggleFilter = (type: string) => {
  const index = selectedFilters.value.indexOf(type);
  if (index > -1) selectedFilters.value.splice(index, 1);
  else selectedFilters.value.push(type);
};

const filteredCases = computed(() => {
  if (selectedFilters.value.length === 0) return cases;
  return cases.filter((c) => selectedFilters.value.some((f) => c.type.includes(f)));
});
</script>

<style scoped>
.lg\:grid-flow-dense {
  grid-auto-flow: dense;
}

/* 1. De verschuivende animatie (Move) */
.case-grid-move {
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

/* 2. Enter animatie: Subtiel 'opkomen' */
.case-grid-enter-active {
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  /* Gebruik de --index variabele voor staggered effect */
  transition-delay: calc(var(--index) * 0.05s);
}

/* 3. Leave animatie: Direct wegkrimpen zonder overlap */
.case-grid-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 1, 1);
  position: absolute;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
}

.case-grid-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}

.case-grid-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

/* Card specifieke styling voor diepte */
.case-card {
  will-change: transform, opacity;
}

.case-card:hover {
  z-index: 10;
}
</style>