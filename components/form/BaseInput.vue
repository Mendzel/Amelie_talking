<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: undefined,
  },
  hint: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
  debounce: {
    type: String,
    default: undefined,
  }
});

const model = defineModel<string | number | undefined>();
</script>

<template>
  <QInput
    v-model="model"
    outlined
    :type="type"
    :label="label"
    :hint="hint"
    :debounce="debounce"
    :required="required"
    color="purple-8"
  >
    <template #append>
      <slot name="inputIcon" />
    </template>
  </QInput>
</template>