// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    ["github:plutocms/pluto", { install: true }],
    ["github:plutocms/supabase", { install: true }],
  ],

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
