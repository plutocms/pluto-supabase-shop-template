<template>
  <div>
    <NavbarAdmin v-if="isLoggedIn" />

    <Navbar />

    <slot />
  </div>
</template>

<script setup lang="ts">
const { isLoggedIn } = await useAuth();
</script>
