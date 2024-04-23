<script lang="ts" setup>
</script>

<template>
  <q-layout class="default-layout">
    <AppHeader />
    <div class="page-content">
      <slot />
    </div>
    <AppFooter />
  </q-layout>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

  .default-layout {
    background-color: $primary;
    height: 100%;
  }

  .page-content {
    height: 100%;
    overflow: auto;
    max-width: 1300px;
    margin: auto;
  }
</style>