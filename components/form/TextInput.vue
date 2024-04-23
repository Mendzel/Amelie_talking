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
  >
    <template #inputIcon>
      <q-icon :name="inputIcon" />
    </template>
  </FormBaseinput>
</template>

<style></style>
