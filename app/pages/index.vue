<script setup lang="ts">
useHead({
  title: "Home",
});

const { list: products } = await useProduct();

const { categories } = await useProductCategory();

const { getMediaUrl } = useMedia();
</script>

<template>
  <div class="">
    <header class="bg-slate-400 dark:bg-slate-950 py-20 px-4">
      <div class="text-center space-y-6">
        <UBadge label="Template" icon="i-lucide-star" />

        <h1 class="text-4xl font-bold text-center text-white">
          Pluto Shop
        </h1>

        <UAlert
          color="neutral"
          variant="subtle"
          description="npx create-pluto@latest my-shop -t supabase-shop"
          icon="i-lucide-terminal"
          class="mx-auto max-w-lg text-sm font-mono"
        />
      </div>
    </header>

    <main>
      <Container class="py-8 max-w-full">
        <section class="py-8 flex flex-col gap-y-6">
          <h2 class="text-2xl font-bold">Products</h2>

          <div
            v-if="!products?.data || products?.data.length === 0"
            class="text-center text-gray-500 py-16"
          >
            No products available. Please check back later.
          </div>

          <div
            v-else
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3"
          >
            <article
              v-for="product in products?.data.slice(0, 5)"
              :key="product.id"
              class="group/product relative border border-gray-300/10 rounded-2xl p-2 sm:p-3 flex flex-col gap-y-2 transition hover:bg-white/5 dark:hover:bg-slate-800/50 hover:border-white/20"
            >
              <!-- Product Link -->
              <NuxtLink
                :to="`/product/${product.id}`"
                class="absolute inset-0 z-10"
              />

              <div
                class="w-full aspect-square sm:aspect-auto bg-gray-100 rounded-xl overflow-hidden"
              >
                <img
                  :src="getMediaUrl(product.product_media[0]?.name)"
                  :alt="product.name"
                  class="w-full h-full object-cover group-hover/product:scale-105 transition-transform duration-300"
                />
              </div>

              <h3
                class="text-sm sm:text-base font-semibold leading-tight group-hover/product:text-primary"
              >
                {{ product.name }}
              </h3>

              <p class="text-sm text-gray-500">
                {{ product.description ?? "No description available." }}
              </p>

              <div>
                <span class="text-lg font-bold">
                  {{ formatCurrency(product.price, { currency: "BRL" }) }}
                </span>
              </div>

              <div>

              </div>
            </article>

            <div
              v-for="n in Math.max(0, 5 - (products?.data?.length || 0))"
              :key="'placeholder-' + n"
              class="border border-gray-300/10 rounded-xl border-dashed p-4 flex items-center justify-center text-gray-400"
            />
          </div>
        </section>

        <section class="py-8 flex flex-col gap-y-6">
          <h2 class="text-2xl font-bold">Categories</h2>

          <div
            v-if="!categories || categories.length === 0"
            class="text-center text-gray-500 py-16"
          >
            No categories available. Please check back later.
          </div>

          <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <UBlogPost
              v-for="category in categories"
              :key="category.id"
              :title="category?.label"
              :to="`/category/${category.id}`"
            />
          </div>
        </section>
      </Container>
    </main>
  </div>
</template>
