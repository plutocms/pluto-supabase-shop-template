import { plutoLayer } from "@plutocms/core/layers";

export default defineNuxtConfig({
  extends: [plutoLayer("@plutocms/supabase-shop")],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    public: {
      websiteName: "My Shop",
    },
  },

  plutoI18n: {
    siteLocale: "en",
  },

  eslint: false,
});
