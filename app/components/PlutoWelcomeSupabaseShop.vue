<script setup lang="ts">
useHead({
  title: "Welcome to Pluto Shop",
});

const { data, error } = useFetch("/api/settings/first_setup");

const isFirstSetup = computed(
  () =>
    (data.value?.success === true && data.value.is_first_setup) || error.value,
);
</script>

<template>
  <div
    class="min-h-screen dark:bg-gray-950 light:bg-white dark:text-white light:text-black flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
  >
    <!-- Background glow effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -left-40 w-96 h-96 dark:bg-primary-500/20 light:bg-primary-300/20 rounded-full blur-3xl"
      />

      <div
        class="absolute -bottom-40 -right-40 w-96 h-96 dark:bg-primary-700/20 light:bg-primary-500/20 rounded-full blur-3xl"
      />
    </div>

    <div
      class="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-8"
    >
      <!-- Badge -->
      <UBadge
        color="primary"
        variant="soft"
        size="lg"
        icon="i-lucide-rocket"
        class="text-xs"
      >
        Pluto CMS · Supabase · E-commerce
      </UBadge>

      <!-- Heading -->
      <div class="flex flex-col gap-4">
        <h1
          class="text-5xl sm:text-6xl font-extrabold font-outfit tracking-tight bg-linear-to-br dark:from-white dark:via-gray-200 dark:to-gray-400 light:from-black light:via-gray-800 light:to-gray-600 bg-clip-text text-transparent leading-tight"
        >
          Welcome to Pluto
        </h1>

        <p
          class="text-lg dark:text-gray-400 light:text-gray-600 font-outfit max-w-xl mx-auto leading-relaxed"
        >
          This is a starter template for building a storefront with Pluto CMS
          and Supabase. Customize it to fit your brand and launch your online
          store!
        </p>
      </div>

      <!-- CTA Button -->
      <div v-if="isFirstSetup" class="space-y-4 font-outfit">
        <p>It looks like you haven't completed the first time setup yet.</p>

        <p>
          <UButton
            to="/admin/setup"
            size="xl"
            color="primary"
            icon="lucide:settings-2"
          >
            Go to first time setup
          </UButton>
        </p>
      </div>

      <div
        v-if="!isFirstSetup"
        class="flex flex-col sm:flex-row items-center gap-4 mt-2"
      >
        <UButton
          to="/store"
          size="xl"
          color="primary"
          icon="lucide:shopping-basket"
        >
          Go to Store
        </UButton>

        <UButton
          to="/admin"
          size="xl"
          color="neutral"
          variant="outline"
          icon="lucide:layout-dashboard"
        >
          Go to Dashboard
        </UButton>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full text-left">
        <div
          class="dark:bg-white/5 light:bg-black/5 dark:border-white/10 light:border-black/10 font-outfit rounded-2xl p-5 flex flex-col gap-2 hover:dark:bg-white/10 hover:light:bg-black/10 transition-colors"
        >
          <UIcon name="i-heroicons-bolt" class="text-primary-400 w-6 h-6" />

          <h3 class="font-semibold dark:text-white light:text-black">
            Real Fast
          </h3>

          <p class="text-sm dark:text-gray-400 light:text-gray-600">
            Built on Nuxt 4 with server-side rendering and edge-ready deployment
            out of the box.
          </p>
        </div>

        <div
          class="dark:bg-white/5 light:bg-black/5 dark:border-white/10 light:border-black/10 font-outfit rounded-2xl p-5 flex flex-col gap-2 hover:dark:bg-white/10 hover:light:bg-black/10 transition-colors"
        >
          <UIcon
            name="i-heroicons-circle-stack"
            class="text-primary-400 w-6 h-6"
          />

          <h3 class="font-semibold dark:text-white light:text-black">
            Powered by Supabase
          </h3>

          <p class="text-sm dark:text-gray-400 light:text-gray-600">
            Real-time database, auth, and storage. All managed through your
            Supabase project.
          </p>
        </div>

        <div
          class="dark:bg-white/5 light:bg-black/5 dark:border-white/10 light:border-black/10 font-outfit rounded-2xl p-5 flex flex-col gap-2 hover:dark:bg-white/10 hover:light:bg-black/10 transition-colors"
        >
          <UIcon
            name="i-heroicons-paint-brush"
            class="text-primary-400 w-6 h-6"
          />

          <h3 class="font-semibold dark:text-white light:text-black">
            Fully Customizable
          </h3>

          <p class="text-sm dark:text-gray-400 light:text-gray-600">
            Tweak layouts, styles, and components to match your brand — no
            lock-in.
          </p>
        </div>
      </div>

      <!-- Footer hint -->
      <p
        class="text-sm dark:text-gray-500 light:text-gray-700 mt-6 font-outfit"
      >
        Delete or replace
        <code class="dark:text-gray-300 light:text-gray-700"
          >app/pages/index.vue</code
        >
        to customize this page.
      </p>

      <label
        class="flex items-center gap-2 mt-4 sm:mt-0 hover:bg-accented active:bg-accented/80 rounded-lg p-1 pr-2"
      >
        <ColorModeButton />

        <span class="font-medium select-none">Change color mode</span>
      </label>
    </div>
  </div>
</template>
