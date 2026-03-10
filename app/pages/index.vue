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
    <header class="bg-slate-950 py-20">
      <div class="text-center space-y-6">
        <UBadge label="Template" />

        <h1 class="text-4xl font-bold text-center text-white">
          Pluto Supabase Shop
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
      <Container class="py-8 max-w-5xl">
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
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <UBlogPost
              v-for="product in products?.data.slice(0, 4)"
              :key="product.id"
              :title="product.name"
              :to="`/product/${product.id}`"
              :description="product.description ?? undefined"
              :image="getMediaUrl(product.product_media[0]?.name)"
              :date="product.created_at"
              :ui="{
                image: 'aspect-square w-full',
              }"
              variant="subtle"
            />

            <div
              v-for="n in Math.max(0, 4 - (products?.data?.length || 0))"
              :key="'placeholder-' + n"
              class="border border-gray-300/10 rounded-lg p-4 flex items-center justify-center text-gray-400"
            ></div>
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
