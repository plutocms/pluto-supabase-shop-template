<script setup lang="ts">
const { isLoggedIn } = await useAuth();
</script>

<template>
  <UContainer
    :class="[
      isLoggedIn
        ? 'min-h-[calc(100vh-4rem-2.5rem)]'
        : 'min-h-[calc(100vh-4rem)]',
      'bg-gray-50 dark:bg-gray-900 flex items-center justify-center',
    ]"
  >
    <div class="flex flex-col items-center gap-6 text-center">
      <UIcon
        name="hugeicons:package-remove"
        class="text-gray-400 dark:text-gray-600 size-24"
      />

      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Product Not Found
        </h1>

        <p class="text-gray-500 dark:text-gray-400 max-w-md">
          The product you're looking for doesn't exist or has been removed.
        </p>
      </div>

      <UButton
        to="/store"
        icon="hugeicons:arrow-left-02"
        color="primary"
        size="lg"
      >
        Back to Store
      </UButton>
    </div>
  </UContainer>
</template>
