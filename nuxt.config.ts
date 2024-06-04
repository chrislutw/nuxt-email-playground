import vue from '@vitejs/plugin-vue'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vue-email/nuxt'],
  vueEmail: {
    baseUrl: 'https://vue-email-demo.vercel.app/',
    autoImport: true,
  },
  experimental: {
    componentIslands: true
  }
  // nitro: {
  //   plugins: ['vue']
  // }
})
