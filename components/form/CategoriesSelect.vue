<script lang="ts" setup>
// import type { PostCategoryItem } from '~/model/categories/endpoints';
import { PostCategory } from '~/model/filter/categories';

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});

const model = defineModel<string | string[]>();

// const categories = ref<PostCategoryItem[]>();

// TODO GET CATEGORIES

const categories = computed(() => {
  return Object.values(PostCategory);
});

const label = computed(() => {
    return props.multiple ? 'Kategorie' : 'Kategoria';
});
</script>

<template>
  <FormSelectInput
    v-model="model"
    standout="bg-purple-8 text-white"
    :options="categories"
    :label="label"
    :multiple="multiple"
    :required="required"
  />
</template>