import { plutoLayer } from "@plutocms/pluto/layers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Set PLUTO_LOCAL_ROOT in .env to use local checkouts of the Pluto layers.
  // See "Develop with local layers" in README.md.
  extends: [plutoLayer("@plutocms/supabase-shop")],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  /*
   * Disable ESLint inherited from @plutocms/supabase-shop.
   * You can enable it by deleting this line.
   */
  eslint: false,
});
