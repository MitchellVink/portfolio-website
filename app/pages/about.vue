<template>
  <div class="about-page pb-10 lg:pb-20 xl:pb-24">
    <!-- Hero section -->
    <div class="relative isolate -z-10 pb-10 lg:pb-20 xl:pb-24">
      <svg class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>

      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">Hi, ik ben Mitchell.</h1>
              <p class="mt-8 text-lg text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                Techniek, creatief design en film komen samen in mijn werk. Met een achtergrond in mechatronica, werktuigbouwkunde en contentcreatie ontstaan oplossingen die zowel functioneel als visueel sterk zijn.
                Projecten voor bureaus, bedrijven en particulieren variëren van films en 3D-modellen tot interactieve concepten en productervaringen altijd met het doel te raken, verrassen en blijven hangen.</p>
            </div>
            <div class="mt-14 flex justify-center gap-8 px-4 sm:px-6 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 lg:px-0">
              <div class="hidden sm:block ml-auto w-36 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                <div class="relative">
                  <img src="/assets/image5.JPG" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>

              <div class="hidden sm:block mr-auto w-36 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img src="https://www.dev.kniv-studios.nl/wp-content/uploads/2025/03/Mitchell-16x9-1.jpg" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div class="relative">
                  <img src="/assets/image3.JPG" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>

              <div class="w-36 flex-none space-y-8 sm:pt-0 pb-10 lg:pb-0">
                <div class="relative">
                  <img src="/assets/image2.JPG" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div class="relative">
                  <img src="/assets/image4.JPG" alt="" class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Drijfveren</h2>
        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p class="text-lg text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
              Sport is één van mijn grootste drijfveren. Al van jongs af aan ben ik te vinden op de racefiets, waar ik leerde wat discipline, doorzettingsvermogen en focus betekenen. Fietsen was voor mij niet alleen een sport, maar ook een manier om mijn hoofd leeg te maken en mezelf telkens opnieuw uit te dagen.<br><br>
              Sinds een jaar heb ik daar het hardlopen en triatlons aan toegevoegd. Wat begon als een nieuwe uitdaging groeide al snel uit tot een serieuze passie. Ik train gericht en werk toe naar verschillende wedstrijden, van marathons tot triatlons, waarbij het combineren van meerdere disciplines me blijft motiveren. Juist de afwisseling, het stellen van doelen en het verleggen van mijn eigen grenzen geven mij energie.
            </p>
          </div>
          <div class="lg:flex lg:flex-auto lg:justify-center">
            <dl class="w-64 space-y-8 xl:w-80">
              <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-y-4">
                <dt class="text-base/7 text-gray-600">{{ stat.label }}</dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'gevlogen', value: '400km' },
  { label: 'hardgelopen', value: '250km' },
  { label: 'gefietst', value: '10.000km' },
]
</script>