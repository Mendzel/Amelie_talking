<template>
  <q-layout>
    <AppHeader />
    <div class="page-content q-pa-sm">
      <slot />
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.page-content {
  height: 100%;
  overflow: auto;
  margin: auto;
}
</style>
