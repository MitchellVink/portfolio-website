<template>
  <div class="mx-auto grid max-w-7xl px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24 grid-cols-1 lg:grid-cols-2">
    <div class="">
      <div class="mx-auto max-w-xl mb-8 lg:mb-0 lg:mx-0 lg:max-w-lg">
        <img src="/assets/image7.webp" alt="Contact" class="rounded-2xl object-cover shadow-lg mb-8" />
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-[60px]">Samenwerken of even kennismaken?</h2>
        <p class="mt-6 text-lg/8 text-gray-600">Heb je een vraag, idee, compliment of gewoon zin in een praatje? Ik denk graag met je mee, groot of klein, ik hoor graag van je.</p>
        <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">E-mail</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </dt>
            <dd><a class="hover:text-gray-900" href="mailto:info@knivstudios.com">info@knivstudios.com</a></dd>
          </div>
        </dl>
      </div>
    </div>

    <form @submit.prevent="onSubmit" class="">
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Voornaam</label>
            <div class="mt-2.5">
              <input v-model="firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Achternaam</label>
            <div class="mt-2.5">
              <input v-model="lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">E-mail</label>
            <div class="mt-2.5">
              <input v-model="email" type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Telefoon</label>
            <div class="mt-2.5">
              <input v-model="phone" type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Bericht</label>
            <div class="mt-2.5">
              <textarea v-model="message" name="message" id="message" rows="4" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <p v-if="success" class="text-sm text-green-600" aria-live="polite">Bericht succesvol verzonden. Dank!</p>
          <p v-if="errorMessage" class="text-sm text-red-600" aria-live="polite">{{ errorMessage }}</p>
        </div>
        <div class="mt-8 flex justify-end">
          <button :disabled="isSending" type="submit" class="rounded-md bg-orange-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            <span v-if="isSending">Versturen...</span>
            <span v-else>Verstuur</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const config = useRuntimeConfig()

// keep the same public runtime config keys in nuxt.config
const serviceId = config.public.emailjsServiceId as string
const templateId = "template_tg8alhz"
const userId = config.public.emailjsPublicKey as string

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const isSending = ref(false)
const success = ref(false)
const errorMessage = ref('')

async function onSubmit() {
  errorMessage.value = ''
  success.value = false

  if (!email.value || !message.value) {
    errorMessage.value = 'Vul alstublieft uw e-mail en bericht in.'
    return
  }

  isSending.value = true

  const template_params = {
    first_name: firstName.value,
    last_name: lastName.value,
    from_email: email.value,
    phone: phone.value,
    message: message.value,
  }

  try {
    await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params,
      },
    })

    success.value = true
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
  } catch (err) {
    console.error(err)
    errorMessage.value = 'Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.'
  } finally {
    isSending.value = false
  }
}
</script>
