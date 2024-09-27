<script lang="ts" setup>
import type { PostCategoryItem } from '~/model/categories/endpoints';
import type { SelectOption } from '~/components/form/SelectInput.vue';
import endpoints from '~/model/categories/endpoints';

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

const categories = ref<PostCategoryItem[]>([]);

const selectItems = computed((): SelectOption[] => {
  return categories.value.map(category => {
    return {
      label: category.name,
      value: category.id,
    };
  });
});

const label = computed(() => {
    return props.multiple ? 'Kategorie' : 'Kategoria';
});

const loadCategories = async () => {
  categories.value = await endpoints.getCategories();
};

onMounted(() => {
  loadCategories();
});
</script>

<template>
  <FormSelectInput
    v-model="model"
    standout="bg-purple-8 text-white"
    :options="selectItems"
    :label="label"
    :multiple="multiple"
    :required="required"
    clearable
    map-options
  />
</template>