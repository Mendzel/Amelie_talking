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
  required: {
    type: Boolean,
    default: false,
  },
  debounce: {
    type: String,
    default: undefined,
  }
});

const model = defineModel<string | undefined>();
</script>

<template>
  <FormBaseInput
    v-model="model"
    outlined
    :label="label"
    :hint="hint"
    type="text"
    :required="required"
    :debounce="debounce"
  >
    <template #inputIcon>
      <q-icon :name="inputIcon" />
    </template>
  </FormBaseinput>
</template>

<style></style>
