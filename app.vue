<script setup lang="ts">
const layout = 'default';
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/assets/colors.scss';

body {
  background-color: $primary;
  height: 100%;
}
</style>
