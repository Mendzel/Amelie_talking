<template>
  <div class="post q-mb-lg">
    <div class="post-image">
      <img src="https://picsum.photos/200/300?random=1">
    </div>
    POST PAGE
    {{ $route.params.id }}
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.post {
  background-color: white;
  border-radius: 8px;
}
</style>