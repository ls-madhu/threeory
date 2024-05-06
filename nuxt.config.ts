// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Threeory - Progressive Rock Fusion Band',
    },
  },
  devtools: { enabled: true },
  googleFonts: {
    families: {
      MuseoModerno: {
        wght: '100..900',
        ital: '100..900',
      },
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
});
