<template>
  <div class="preview">
    <div class="preview-image q-mb-lg">
      <img :src="previewData.photoCover">
    </div>
    <h2 class="preview-title">
      {{ previewData.title }}
    </h2>
    <div class="preview-data q-mb-sm">
      <div class="q-mr-md">
        <q-icon
          name="event"
          class="q-mr-sm"
        /><span class="bold">Dodano: </span>{{ previewData.dateCreated }}
      </div>
      <!-- <div><span class="bold">Kategoria: </span> {{ previewData.category?.name }}</div> -->
    </div>
    <div class="preview-description">
      {{ previewData.description }}
    </div>
    <div v-html="previewData.content" />
  </div>
</template>

<script lang="ts" setup>
import type { PostFormItem } from '~/model/post/endpoints';

defineProps({
  previewData: {
    type: Object as PropType<PostFormItem>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.preview {
  &-image {
    width: 100%;
    text-align: center;

    img {
      width: 80%;
    }
  }

  &-title {
    font-size: 44px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &-data {
    font-size: 16px;
    font-weight: bold;
    color: gray;
    display: flex;
  }
}

.bold {
  font-weight: bold;
}
</style>
