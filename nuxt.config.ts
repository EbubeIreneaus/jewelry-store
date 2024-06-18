// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt', "@pinia-plugin-persistedstate/nuxt", '@nuxt/image', 
  '@formkit/auto-animate/nuxt', 'nuxt-mdi','@vueuse/nuxt'
],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  image: {
    domains: ['fakestoreapi.com']
  },

  mdi:{
    cache: false,
    componentName: 'myIcon',
    defaultSize: '1em'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app:{
    pageTransition:{
      name: 'page', mode: 'out-in'
    },
    layoutTransition:{
      name: 'layout', mode: 'out-in'
    }
  },

  css:['~/assets/main.css', 'animate.css/animate.css','@fortawesome/fontawesome-free/css/all.min.css']
})
