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
  }
});

const model = defineModel<string | string[]>();
</script>

<template>
  <QSelect
    v-model="model"
    standout="bg-purple-8 text-white"
    :options="options"
    :label="label"
    :multiple="multiple"
    :required="required"
  >
    <template #append>
      <slot name="inputIcon" />
    </template>
  </QSelect>
</template>