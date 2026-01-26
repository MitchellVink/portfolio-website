import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        cases: defineCollection({
            source: '**/*.md',
            type: 'page',
        })
    }
})
