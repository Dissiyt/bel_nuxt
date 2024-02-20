// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8080,
  },
  modules: ['@pinia/nuxt'],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

})
