<script setup lang="ts"></script>

<template>
  <div>
    <MostRecent class="q-mb-md" />
    <FilterBar class="q-mb-md" />
    <div class="content q-mb-lg">
      <PostList class=" q-mr-lg" />
      <AdPanel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
}
</style>
