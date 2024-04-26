<template>
  <div class="ad-panel">
    <div class="ad-panel-banner q-mb-md">
      Banner placeholder
    </div>
    <div class="ad-panel-adsense">
      Adsense ad placeholder
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.ad-panel {
  width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;

  &-banner {
    width: 100%;
    height: 200px;
    background-color: brown;
  }

  &-adsense {
    width: 100%;
    height: 700px;
    background-color: gray;
  }
}
</style>