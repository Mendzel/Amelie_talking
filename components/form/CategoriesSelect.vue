<script lang="ts" setup>
// import type { PostCategoryItem } from '~/model/categories/endpoints';
import { mockCategories } from '~/model/mocks/categories';
import type { SelectOption } from '~/components/form/SelectInput.vue';

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

const model = defineModel<number | number[]>();

// const categories = ref<PostCategoryItem[]>();

const categories= computed((): SelectOption[] => {
  return mockCategories.map(category => {
    return {
      label: category.name,
      value: category.id,
    };
  });
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
    map-options
  />
</template>