<template>
  <div class="category">
    {{ category.name }}
  </div>
</template>

<script lang="ts" setup>
import type { PostCategoryItem } from '~/model/categories/endpoints';

defineProps({
  category:{
    type: Object as PropType<PostCategoryItem>,
    required:true
  }
});
</script>

<style lang="scss" scoped>
.category {
  background-color: v-bind('category.color');
  border-radius: 10px;
  width: fit-content;
  color: v-bind('category.textColor');
  padding: 6px;
  font-weight: bold;
  font-size: 13px;
}
</style>