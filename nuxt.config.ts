// Point PLUTO_SUPABASE_SHOP_PATH at a local checkout (e.g.
// `../supabase-shop`) to test unpublished changes; unset, it resolves to
// the published npm package.
const supabaseShopLayer =
  process.env.PLUTO_SUPABASE_SHOP_PATH || "@plutocms/supabase-shop";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [[supabaseShopLayer, { install: true }]],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  /*
   * Disable ESLint inherited from @plutocms/supabase-shop.
   * You can enable it by deleting this line.
   */
  eslint: false,
});
