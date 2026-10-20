<script setup lang="ts">
const route = useRoute();

useHead({
  title: "Category",
});
</script>

<template>
  <div>Category ID: {{ route.params.id }}</div>
</template>
