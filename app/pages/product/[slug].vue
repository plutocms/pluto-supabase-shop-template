<script setup lang="ts">
import { formatCurrency } from "#imports";

useHead({
  title: "Product Details",
});

const route = useRoute();

const { product } = await useProduct(route.params.slug);
</script>

<template>
  <UContainer class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col md:flex-row gap-10">
      <div>
        <img
          :src="product?.product_media[0]?.url"
          :alt="product?.name"
          class="w-full max-w-md h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-700 shadow"
        />
      </div>

      <div class="p-4 h-fit">
        <div class="flex flex-col gap-4 justify-center">
          <div class="flex items-center gap-x-2">
            <UBadge color="primary" size="lg">
              {{ product?.product_category?.label }}
            </UBadge>

            <UBadge color="primary" size="lg">
              {{ product?.product_availability?.label }}
            </UBadge>
          </div>

          <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {{ product?.name }}
          </h1>

          <p class="text-lg text-gray-700 dark:text-gray-300">
            {{ product?.description }}
          </p>

          <div class="text-3xl font-bold">
            {{ formatCurrency(product?.price ?? 0) }}
          </div>

          <UButton
            icon="hugeicons:shopping-cart-02"
            color="primary"
            size="xl"
            class="w-fit"
          >
            Checkout (not implemented)
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
