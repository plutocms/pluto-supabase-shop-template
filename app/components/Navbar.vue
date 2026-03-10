<script setup lang="ts">
const menuItems = [
  { name: "Home", href: "/" },
];
</script>

<template>
  <nav
    class="sticky top-10 z-40 border-b border-slate-200 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70 dark:border-slate-800 dark:bg-slate-950/80 dark:supports-backdrop-filter:bg-slate-950/70"
  >
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <div class="flex items-center gap-6 h-full">
        <NuxtLink to="/" class="flex items-end gap-2 h-full py-2">
          <img src="/img/pluto.png" alt="Pluto Logo" class="max-h-full" />

          <span
            class="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2"
          >
            Shop
          </span>
        </NuxtLink>

        <div class="hidden items-center justify-center gap-1 md:flex">
          <template v-for="item in menuItems" :key="item.name">
            <NuxtLink
              :to="item.href"
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          J
        </button>

        <span> John Doe </span>
      </div>
    </div>
  </nav>
</template>
