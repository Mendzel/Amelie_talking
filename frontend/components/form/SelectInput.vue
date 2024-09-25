<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [],
  },
  mapOptions: {
    type: Boolean,
    default: false,
  },
});

export type SelectOption = {
  label: string;
  value: string | number;
}

const model = defineModel<string | string[] | number | number[] | PropType<SelectOption[]>>();
</script>

<template>
  <QSelect
    v-model="model"
    standout="bg-purple-8 text-white"
    :options="options"
    :label="label"
    :multiple="multiple"
    :required="required"
    :map-options="mapOptions"
  >
    <template #append>
      <slot name="inputIcon" />
    </template>
  </QSelect>
</template>