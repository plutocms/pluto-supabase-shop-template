// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [["@plutocms/supabase-shop", { install: true }]],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },
});
