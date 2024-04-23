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
  inputIcon: {
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
    :required="required"
  >
    <template #append>
      <slot name="inputIcon" />
    </template>
  </QInput>
</template>