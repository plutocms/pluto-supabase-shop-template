<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>Category ID: {{ route.params.id }}</div>
</template>
