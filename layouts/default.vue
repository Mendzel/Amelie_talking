<template>
  <q-layout class="default-layout">
    <AppHeader />
    <div class="page-content q-pa-sm">
      <slot />
    </div>
    <AppFooter />
  </q-layout>
</template>

<style lang="scss" scoped>
.page-content {
  height: 100%;
  overflow: auto;
  max-width: 1300px;
  margin: auto;
}
</style>
